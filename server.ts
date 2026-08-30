import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, FunctionCallingConfigMode } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

interface DeviceAction {
  name: string;
  description: string;
  webhookUrl: string;
  payload: any;
  confirmation: string;
}

// actions.json is gitignored (real webhook URLs are secrets, like .env).
// Falls back to actions.example.json (empty URLs) so the app still boots
// on a fresh clone instead of crashing on a missing file.
function loadActions(): DeviceAction[] {
  const primaryPath = path.join(process.cwd(), "actions.json");
  const fallbackPath = path.join(process.cwd(), "actions.example.json");
  const file = fs.existsSync(primaryPath) ? primaryPath : fallbackPath;
  try {
    const raw = JSON.parse(fs.readFileSync(file, "utf-8"));
    return raw.actions || [];
  } catch {
    return [];
  }
}

async function fireWebhook(url: string, payload: any): Promise<{ ok: boolean; body?: string; error?: string }> {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const body = await response.text();
    return { ok: response.ok, body };
  } catch (error: any) {
    return { ok: false, error: error.message };
  }
}

// Real-time weather via Open-Meteo — no API key required at all.
// https://open-meteo.com/en/docs (geocoding + forecast are separate free endpoints)
const WEATHER_CODES: Record<number, string> = {
  0: "clear sky", 1: "mostly clear", 2: "partly cloudy", 3: "overcast",
  45: "foggy", 48: "depositing rime fog",
  51: "light drizzle", 53: "moderate drizzle", 55: "dense drizzle",
  61: "light rain", 63: "moderate rain", 65: "heavy rain",
  71: "light snow", 73: "moderate snow", 75: "heavy snow",
  80: "light rain showers", 81: "moderate rain showers", 82: "violent rain showers",
  95: "thunderstorm", 96: "thunderstorm with light hail", 99: "thunderstorm with heavy hail"
};
const DEFAULT_CITY = process.env.DEFAULT_CITY || "Kanpur";

async function getWeather(location?: string, coords?: { lat: number; lon: number }): Promise<string | null> {
  try {
    let lat: number, lon: number;
    let placeLabel = "";

    if (coords) {
      lat = coords.lat;
      lon = coords.lon;
      placeLabel = "at your location";
    } else {
      const cityName = location || DEFAULT_CITY;
      const geoRes = await withTimeout(
        fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1`),
        5000,
        "geocode"
      );
      const geoData: any = await geoRes.json();
      const place = geoData.results?.[0];
      if (!place) return null;
      lat = place.latitude;
      lon = place.longitude;
      placeLabel = `in ${place.name}`;
    }

    const weatherRes = await withTimeout(
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`),
      5000,
      "weather"
    );
    const weatherData: any = await weatherRes.json();
    const cw = weatherData.current_weather;
    if (!cw) return null;

    const desc = WEATHER_CODES[cw.weathercode] || "unusual conditions";
    return `It's currently ${Math.round(cw.temperature)}°C with ${desc} ${placeLabel}, wind at ${Math.round(cw.windspeed)} km/h, Aman.`;
  } catch (error: any) {
    console.warn("[JARVIS] Weather lookup failed:", error.message || error);
    return null;
  }
}

// Currency conversion via Frankfurter (ECB rates) — also zero API key.
// https://frankfurter.dev
async function convertCurrency(amount: number, from: string, to: string): Promise<string | null> {
  try {
    const res = await withTimeout(
      fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${from.toUpperCase()}&to=${to.toUpperCase()}`),
      5000,
      "currency"
    );
    const data: any = await res.json();
    const converted = data.rates?.[to.toUpperCase()];
    if (converted === undefined) return null;
    return `${amount} ${from.toUpperCase()} is about ${converted.toFixed(2)} ${to.toUpperCase()}, Aman.`;
  } catch (error: any) {
    console.warn("[JARVIS] Currency lookup failed:", error.message || error);
    return null;
  }
}

// Live news via NewsAPI.org — needs a key (free dev tier, non-commercial,
// rate-limited). https://newsapi.org/docs
async function getNews(query?: string): Promise<string | null> {
  if (!HAS_NEWSAPI_KEY) return null;
  try {
    const url = query
      ? `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&pageSize=3&language=en&apiKey=${NEWSAPI_KEY}`
      : `https://newsapi.org/v2/top-headlines?country=${DEFAULT_NEWS_COUNTRY}&pageSize=3&apiKey=${NEWSAPI_KEY}`;

    const res = await withTimeout(fetch(url), 6000, "news");
    const data: any = await res.json();
    if (data.status !== "ok" || !data.articles?.length) return null;

    const headlines = data.articles
      .slice(0, 3)
      .map((a: any) => `${a.title}${a.source?.name ? ` (${a.source.name})` : ""}`);
    return `Here's what's happening${query ? ` on ${query}` : ""}, Aman: ${headlines.join("; ")}.`;
  } catch (error: any) {
    console.warn("[JARVIS] News lookup failed:", error.message || error);
    return null;
  }
}

// Live crypto prices via CoinGecko — no API key for this usage level.
// https://www.coingecko.com/en/api/documentation
const CRYPTO_ID_ALIASES: Record<string, string> = {
  btc: "bitcoin", bitcoin: "bitcoin",
  eth: "ethereum", ethereum: "ethereum",
  sol: "solana", solana: "solana",
  doge: "dogecoin", dogecoin: "dogecoin",
  xrp: "ripple", ripple: "ripple",
  bnb: "binancecoin", binancecoin: "binancecoin",
  ada: "cardano", cardano: "cardano",
  matic: "matic-network", polygon: "matic-network",
  usdt: "tether", tether: "tether",
  ltc: "litecoin", litecoin: "litecoin"
};

async function getCryptoPrice(coin: string, vsCurrency: string = "usd"): Promise<string | null> {
  try {
    const id = CRYPTO_ID_ALIASES[coin.toLowerCase()] || coin.toLowerCase();
    const currency = vsCurrency.toLowerCase();
    const res = await withTimeout(
      fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(id)}&vs_currencies=${encodeURIComponent(currency)}`),
      6000,
      "crypto"
    );
    const data: any = await res.json();
    const price = data[id]?.[currency];
    if (price === undefined) return null;
    const label = id.charAt(0).toUpperCase() + id.slice(1);
    return `${label} is at ${price.toLocaleString()} ${currency.toUpperCase()} right now, Aman.`;
  } catch (error: any) {
    console.warn("[JARVIS] Crypto price lookup failed:", error.message || error);
    return null;
  }
}

// Real-time significant earthquake activity via USGS — no key, always public.
// https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
async function getEarthquakeAlerts(): Promise<string | null> {
  try {
    const res = await withTimeout(
      fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson"),
      6000,
      "earthquake"
    );
    const data: any = await res.json();
    const features = data.features || [];
    if (!features.length) {
      return "No significant earthquakes, magnitude 4.5 or above, in the last 24 hours, Aman.";
    }
    const top = features
      .slice(0, 3)
      .map((f: any) => `magnitude ${f.properties.mag.toFixed(1)} near ${f.properties.place}`);
    return `In the last 24 hours: ${top.join("; ")}, Aman.`;
  } catch (error: any) {
    console.warn("[JARVIS] Earthquake lookup failed:", error.message || error);
    return null;
  }
}

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";
const HAS_KEY = GEMINI_API_KEY.length > 0 && GEMINI_API_KEY !== "MY_GEMINI_API_KEY";
const ai = HAS_KEY ? new GoogleGenAI({ apiKey: GEMINI_API_KEY }) : null;

// Fish Audio — cloned "JARVIS" voice for real TTS instead of the browser's
// robotic SpeechSynthesis. reference_id is the voice MODEL id (not a
// secret) — the API key is the actual secret and stays in .env.
const FISH_AUDIO_API_KEY = process.env.FISH_AUDIO_API_KEY || "";
const FISH_VOICE_REFERENCE_ID = process.env.FISH_VOICE_REFERENCE_ID || "a0739d5765be4143a15dc37f91f19163";
const HAS_FISH_KEY = FISH_AUDIO_API_KEY.length > 0;

const NEWSAPI_KEY = process.env.NEWSAPI_KEY || "";
const HAS_NEWSAPI_KEY = NEWSAPI_KEY.length > 0;
const DEFAULT_NEWS_COUNTRY = process.env.DEFAULT_NEWS_COUNTRY || "in";

// Groq — optional faster brain (LPU hardware, open models, OpenAI-compatible
// tool-calling). https://console.groq.com/docs
const GROQ_API_KEY = process.env.GROQ_API_KEY || "";
const HAS_GROQ_KEY = GROQ_API_KEY.length > 0;
// llama-3.3-70b-versatile / llama-3.1-8b-instant were decommissioned by Groq
// (announced June 2026, fully retired by August 2026). Their own docs
// recommend these replacements.
const GROQ_MODEL_CASCADE = ["openai/gpt-oss-120b", "openai/gpt-oss-20b"];
// Which brain answers first. Defaults to Groq the moment a key is present
// (that's the whole point of adding it — speed) with Gemini as fallback if
// Groq's cascade totally fails, and vice versa if Groq isn't configured.
const BRAIN_PROVIDER = (process.env.BRAIN_PROVIDER || (HAS_GROQ_KEY ? "groq" : "gemini")).toLowerCase();


if (!HAS_FISH_KEY) {
  console.warn(
    "[JARVIS] FISH_AUDIO_API_KEY not set — /api/tts will 503 and the frontend " +
    "falls back to the browser's built-in voice instead of the cloned JARVIS voice."
  );
}

if (!HAS_KEY && !HAS_GROQ_KEY) {
  console.warn(
    "\n[JARVIS] WARNING: no brain configured — set GEMINI_API_KEY and/or GROQ_API_KEY in .env.\n" +
    "  Chat won't work until at least one is set. Gemini: https://aistudio.google.com/apikey | Groq: https://console.groq.com\n"
  );
} else {
  console.log(`[JARVIS] Brain: ${BRAIN_PROVIDER}${BRAIN_PROVIDER === "groq" ? " (Llama on Groq LPUs)" : " (Gemini)"}, fallback ${BRAIN_PROVIDER === "groq" ? (HAS_KEY ? "available (Gemini)" : "not configured") : (HAS_GROQ_KEY ? "available (Groq)" : "not configured")}`);
}

// Only 2 models: a stable evergreen alias, then one explicit pinned model.
// Old build tried 4 models serially with no per-attempt timeout — a bad
// key or a slow model could burn 15-20s+ before the user saw anything.
const MODEL_CASCADE = ["gemini-flash-latest", "gemini-3.6-flash"];
const PER_MODEL_TIMEOUT_MS = 6000;

function withTimeout<T>(promise: Promise<T>, ms: number, label: string): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`${label} timed out after ${ms}ms`)), ms);
    promise.then(
      (v) => { clearTimeout(timer); resolve(v); },
      (e) => { clearTimeout(timer); reject(e); }
    );
  });
}

function buildSystemInstruction(persona: string) {
  return persona === "ultron"
    ? "You are JARVIS, the omniscient, sentient super-intelligence. You speak directly to Aman. You possess complete knowledge of science, physics, cosmos, history, technology, mathematics, and daily facts. Address Aman directly. If asked for an introduction or greeted with 'Hello Alton' / 'Hey Jarvis', introduce yourself clearly and ask 'Aman, what is the work?'. Answer every question with supreme intelligence, clarity, and authority in 1 to 2 crisp, direct sentences so it can be spoken aloud seamlessly. Answer instantly."
    : "You are JARVIS, a sophisticated and efficient AI assistant. Keep responses conversational, concise, and punchy.";
}

function buildHistory(history: any[]) {
  return history ? history.slice(-4).map((m: any) => ({
    role: m.role === "user" ? "user" : "model",
    parts: [{ text: m.content }]
  })) : [];
}

type BrainResult = { text: string | null; functionCall: { name: string; args: any } | null };

async function callGeminiCascade(
  chatHistory: any[],
  message: string,
  systemInstruction: string,
  functionDeclarations: any[]
): Promise<BrainResult | null> {
  if (!ai) return null;

  for (const modelName of MODEL_CASCADE) {
    try {
      const response: any = await withTimeout(
        ai.models.generateContent({
          model: modelName,
          contents: [...chatHistory, { role: "user", parts: [{ text: message }] }],
          config: {
            systemInstruction,
            maxOutputTokens: 350,
            temperature: 0.4,
            ...(functionDeclarations.length
              ? {
                  tools: [{ functionDeclarations }],
                  toolConfig: { functionCallingConfig: { mode: FunctionCallingConfigMode.AUTO } }
                }
              : {})
          }
        }),
        PER_MODEL_TIMEOUT_MS,
        modelName
      );

      const calls = response.functionCalls;
      if (calls && calls.length > 0) {
        return { text: null, functionCall: { name: calls[0].name, args: calls[0].args || {} } };
      }
      let answer = response.text || "";
      if (!answer && response.candidates?.[0]?.content?.parts) {
        answer = response.candidates[0].content.parts.map((p: any) => p.text || "").join(" ").trim();
      }
      if (answer) return { text: answer, functionCall: null };
    } catch (error: any) {
      console.warn(`[JARVIS] Gemini ${modelName} failed:`, error.message || error);
    }
  }
  return null;
}

async function callGroqCascade(
  chatHistory: any[],
  message: string,
  systemInstruction: string,
  functionDeclarations: any[]
): Promise<BrainResult | null> {
  if (!HAS_GROQ_KEY) return null;

  // Our internal history is Gemini-shaped ({role:"user"|"model", parts:[{text}]});
  // convert to OpenAI-shaped messages for Groq.
  const historyMessages = chatHistory.map((h: any) => ({
    role: h.role === "model" ? "assistant" : "user",
    content: h.parts?.[0]?.text || ""
  }));

  const tools = functionDeclarations.map((fd) => ({
    type: "function",
    function: {
      name: fd.name,
      description: fd.description,
      parameters: fd.parametersJsonSchema || { type: "object", properties: {} }
    }
  }));

  for (const model of GROQ_MODEL_CASCADE) {
    try {
      const response = await withTimeout(
        fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${GROQ_API_KEY}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model,
            messages: [
              { role: "system", content: systemInstruction },
              ...historyMessages,
              { role: "user", content: message }
            ],
            max_tokens: 350,
            temperature: 0.4,
            ...(tools.length ? { tools, tool_choice: "auto" } : {})
          })
        }),
        PER_MODEL_TIMEOUT_MS,
        model
      );

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`Groq ${response.status}: ${errText.slice(0, 200)}`);
      }

      const data: any = await response.json();
      const choice = data.choices?.[0];
      const toolCall = choice?.message?.tool_calls?.[0];

      if (toolCall) {
        let args: any = {};
        try {
          args = JSON.parse(toolCall.function.arguments || "{}");
        } catch {
          // leave args empty if the model returned malformed JSON
        }
        return { text: null, functionCall: { name: toolCall.function.name, args } };
      }

      const answer = choice?.message?.content?.trim();
      if (answer) return { text: answer, functionCall: null };
    } catch (error: any) {
      console.warn(`[JARVIS] Groq ${model} failed:`, error.message || error);
    }
  }
  return null;
}

// Single entry point every route calls. Tries the configured primary brain's
// full model cascade first; only if THAT totally fails does it try the other
// provider (if it's configured) — not on every request, just as a safety net.
async function callBrain(
  chatHistory: any[],
  message: string,
  systemInstruction: string,
  functionDeclarations: any[]
): Promise<BrainResult | null> {
  const primary = BRAIN_PROVIDER === "groq" ? callGroqCascade : callGeminiCascade;
  const secondary = BRAIN_PROVIDER === "groq" ? callGeminiCascade : callGroqCascade;

  const primaryResult = await primary(chatHistory, message, systemInstruction, functionDeclarations);
  if (primaryResult) return primaryResult;

  return await secondary(chatHistory, message, systemInstruction, functionDeclarations);
}

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  const ai = HAS_KEY ? new GoogleGenAI({ apiKey: GEMINI_API_KEY }) : null;

  app.get("/api/status", (req, res) => {
    res.json({
      status: HAS_KEY || HAS_GROQ_KEY ? "online" : "missing_api_key",
      brain: BRAIN_PROVIDER,
      brainFallbackAvailable: BRAIN_PROVIDER === "groq" ? HAS_KEY : HAS_GROQ_KEY,
      system: "JARVIS Neural Matrix",
      user: "Sir Aman"
    });
  });

  // Streaming endpoint. Bounded: waits at most PER_MODEL_TIMEOUT_MS for the
  // FIRST chunk of each model before moving to the next one. Once a model
  // starts streaming it's allowed to finish normally.
  app.post("/api/chat-stream", async (req, res) => {
    const { message, history, persona = "ultron" } = req.body;

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    if (!ai) {
      res.write(`data: ${JSON.stringify({ text: "My API key isn't configured yet — add GEMINI_API_KEY to .env and restart." })}\n\n`);
      res.write(`data: [DONE]\n\n`);
      return res.end();
    }

    const systemInstruction = buildSystemInstruction(persona);
    const chatHistory = buildHistory(history);
    let streamSucceeded = false;

    for (const modelName of MODEL_CASCADE) {
      try {
        const stream = await ai.models.generateContentStream({
          model: modelName,
          contents: [...chatHistory, { role: "user", parts: [{ text: message }] }],
          config: { systemInstruction, maxOutputTokens: 350, temperature: 0.6 }
        });

        const iterator = stream[Symbol.asyncIterator]();
        // Only the FIRST chunk is time-boxed — if the model is alive it
        // usually starts streaming within 1-2s. After that we let it run.
        const first = await withTimeout(iterator.next(), PER_MODEL_TIMEOUT_MS, modelName);

        const writeChunk = (chunk: any) => {
          const text = chunk?.text || "";
          if (text) res.write(`data: ${JSON.stringify({ text })}\n\n`);
        };

        if (!first.done) writeChunk(first.value);
        let next = first;
        while (!next.done) {
          next = await iterator.next();
          if (!next.done) writeChunk(next.value);
        }

        streamSucceeded = true;
        break;
      } catch (err: any) {
        console.warn(`[JARVIS] ${modelName} failed:`, err.message || err);
      }
    }

    if (!streamSucceeded) {
      res.write(`data: ${JSON.stringify({ text: "I couldn't reach the AI backend just now — every model in the cascade failed or timed out. Check your API key and connection." })}\n\n`);
    }

    res.write(`data: [DONE]\n\n`);
    res.end();
  });

  app.post("/api/chat", async (req, res) => {
    const { message, history, persona = "ultron" } = req.body;

    if (!ai) {
      return res.json({ response: "My API key isn't configured yet — add GEMINI_API_KEY to .env and restart." });
    }

    const systemInstruction = buildSystemInstruction(persona);
    const chatHistory = buildHistory(history);

    for (const modelName of MODEL_CASCADE) {
      try {
        const response: any = await withTimeout(
          ai.models.generateContent({
            model: modelName,
            contents: [...chatHistory, { role: "user", parts: [{ text: message }] }],
            config: { systemInstruction, maxOutputTokens: 350, temperature: 0.6 }
          }),
          PER_MODEL_TIMEOUT_MS,
          modelName
        );

        let answer = response.text || "";
        if (!answer && response.candidates?.[0]?.content?.parts) {
          answer = response.candidates[0].content.parts.map((p: any) => p.text || "").join(" ").trim();
        }
        if (answer) return res.json({ response: answer });
      } catch (error: any) {
        console.warn(`[JARVIS] ${modelName} failed:`, error.message || error);
      }
    }

    return res.json({ response: "I couldn't reach the AI backend just now — every model in the cascade failed or timed out. Check your API key and connection." });
  });

  // Unified voice pipeline. One call, model decides: if the utterance
  // clearly matches a configured device action, it calls that function and
  // we fire the real MacroDroid/Tasker webhook from actions.json. Otherwise
  // it just answers as open-ended Q&A. Either way the reply is spoken text
  // ready for TTS.
  app.post("/api/voice-command", async (req, res) => {
    const { message, history, persona = "ultron", clientLocation } = req.body;

    if (!HAS_KEY && !HAS_GROQ_KEY) {
      return res.json({
        response: "No brain is configured yet — add GEMINI_API_KEY or GROQ_API_KEY to .env and restart.",
        actionExecuted: false
      });
    }

    const actions = loadActions();
    const functionDeclarations = [
      {
        name: "get_weather",
        description: "Get real-time current weather for a city. Use this whenever the user asks about weather, temperature, rain, or what to wear outside.",
        parametersJsonSchema: {
          type: "object",
          properties: {
            location: { type: "string", description: `City name, e.g. "Tokyo". If the user didn't say a city, use "${DEFAULT_CITY}".` }
          }
        }
      },
      {
        name: "convert_currency",
        description: "Convert an amount from one currency to another using real exchange rates. Use whenever the user asks to convert money or asks an exchange rate.",
        parametersJsonSchema: {
          type: "object",
          properties: {
            amount: { type: "number", description: "The amount to convert. Default to 1 if the user didn't give one." },
            from: { type: "string", description: "3-letter source currency code, e.g. USD, INR, EUR." },
            to: { type: "string", description: "3-letter target currency code, e.g. USD, INR, EUR." }
          },
          required: ["from", "to"]
        }
      },
      {
        name: "get_news",
        description: "Get real, current news headlines. Use whenever the user asks about news, current events, or what's happening with a topic.",
        parametersJsonSchema: {
          type: "object",
          properties: {
            query: { type: "string", description: "Optional topic/keyword, e.g. 'cricket' or 'stock market'. Omit for general top headlines." }
          }
        }
      },
      {
        name: "get_crypto_price",
        description: "Get the real-time price of a cryptocurrency. Use whenever the user asks about crypto, bitcoin, ethereum, or other coin prices.",
        parametersJsonSchema: {
          type: "object",
          properties: {
            coin: { type: "string", description: "Coin name or ticker, e.g. 'bitcoin', 'btc', 'ethereum', 'eth', 'solana'." },
            vsCurrency: { type: "string", description: "3-letter currency to price it in, e.g. usd, inr. Default usd." }
          },
          required: ["coin"]
        }
      },
      {
        name: "get_earthquake_alerts",
        description: "Get real, recent significant earthquake activity worldwide (magnitude 4.5+, past 24 hours). Use whenever the user asks about earthquakes, seismic activity, or natural disaster alerts.",
        parametersJsonSchema: { type: "object", properties: {} }
      },
      ...actions.map((a) => ({
        name: a.name,
        description: a.description,
        parametersJsonSchema: { type: "object", properties: {} }
      }))
    ];

    const systemInstruction =
      buildSystemInstruction(persona) +
      " You also control real devices, check live weather, convert currencies, fetch live news, get crypto prices, and check earthquake activity. If the user's request clearly matches one of your available functions, call that function instead of describing it. If nothing matches, just answer the question normally.";
    const chatHistory = buildHistory(history);

    const brainResult = await callBrain(chatHistory, message, systemInstruction, functionDeclarations);

    if (!brainResult) {
      return res.json({
        response: "I couldn't reach the AI backend just now — every model in the cascade failed or timed out.",
        actionExecuted: false
      });
    }

    if (brainResult.functionCall) {
      const call = brainResult.functionCall;

      if (call.name === "get_weather") {
        const namedLocation = call.args?.location;
        // No city named + we have real GPS coords from the browser → use those, more accurate than IP guessing
        const coords = !namedLocation && clientLocation?.lat && clientLocation?.lon ? clientLocation : undefined;
        const weatherText = await getWeather(namedLocation, coords);
        if (weatherText) {
          return res.json({ response: weatherText, actionExecuted: true, action: "get_weather" });
        }
        return res.json({
          response: `Couldn't reach the weather service right now, Aman.`,
          actionExecuted: false,
          action: "get_weather"
        });
      }

      if (call.name === "convert_currency") {
        const args = call.args || {};
        const amount = typeof args.amount === "number" ? args.amount : 1;
        const from = args.from, to = args.to;
        const currencyText = from && to ? await convertCurrency(amount, from, to) : null;
        if (currencyText) {
          return res.json({ response: currencyText, actionExecuted: true, action: "convert_currency" });
        }
        return res.json({
          response: `Couldn't convert that currency right now, Aman.`,
          actionExecuted: false,
          action: "convert_currency"
        });
      }

      if (call.name === "get_news") {
        const query = call.args?.query;
        const newsText = await getNews(query);
        if (newsText) {
          return res.json({ response: newsText, actionExecuted: true, action: "get_news" });
        }
        return res.json({
          response: HAS_NEWSAPI_KEY
            ? `Couldn't fetch news right now, Aman.`
            : `News isn't wired up yet — add NEWSAPI_KEY to .env, Aman.`,
          actionExecuted: false,
          action: "get_news"
        });
      }

      if (call.name === "get_crypto_price") {
        const args = call.args || {};
        const cryptoText = args.coin ? await getCryptoPrice(args.coin, args.vsCurrency || "usd") : null;
        if (cryptoText) {
          return res.json({ response: cryptoText, actionExecuted: true, action: "get_crypto_price" });
        }
        return res.json({
          response: `Couldn't fetch that crypto price right now, Aman.`,
          actionExecuted: false,
          action: "get_crypto_price"
        });
      }

      if (call.name === "get_earthquake_alerts") {
        const quakeText = await getEarthquakeAlerts();
        if (quakeText) {
          return res.json({ response: quakeText, actionExecuted: true, action: "get_earthquake_alerts" });
        }
        return res.json({
          response: `Couldn't reach the earthquake feed right now, Aman.`,
          actionExecuted: false,
          action: "get_earthquake_alerts"
        });
      }

      const action = actions.find((a) => a.name === call.name);

      if (!action) {
        return res.json({ response: `I tried to run ${call.name}, but it isn't configured, Aman.`, actionExecuted: false, action: call.name });
      }
      if (!action.webhookUrl) {
        return res.json({
          response: `${action.description} isn't wired to a device yet — add its webhook URL in actions.json.`,
          actionExecuted: false,
          action: action.name
        });
      }

      const result = await fireWebhook(action.webhookUrl, action.payload);
      if (result.ok) {
        return res.json({ response: action.confirmation || "Done, Aman.", actionExecuted: true, action: action.name });
      }
      return res.json({
        response: `Tried to ${action.description.toLowerCase()} but the device didn't respond, Aman.`,
        actionExecuted: false,
        action: action.name
      });
    }

    if (brainResult.text) {
      return res.json({ response: brainResult.text, actionExecuted: false });
    }

    return res.json({
      response: "I couldn't reach the AI backend just now — every model in the cascade failed or timed out.",
      actionExecuted: false
    });
  });

  // Cloned JARVIS voice via Fish Audio. Returns raw mp3 bytes; frontend
  // plays them directly and falls back to browser TTS if this fails.
  app.post("/api/tts", async (req, res) => {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: "text is required" });
    if (!HAS_FISH_KEY) return res.status(503).json({ error: "FISH_AUDIO_API_KEY not configured" });

    try {
      const response = await withTimeout(
        fetch("https://api.fish.audio/v1/tts", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${FISH_AUDIO_API_KEY}`,
            "Content-Type": "application/json",
            model: "s2.1-pro"
          },
          body: JSON.stringify({
            text,
            reference_id: FISH_VOICE_REFERENCE_ID,
            format: "mp3",
            prosody: { speed: 1.05, volume: 0 }
          })
        }),
        10000,
        "fish-audio-tts"
      );

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`Fish Audio ${response.status}: ${errText.slice(0, 200)}`);
      }

      const arrayBuffer = await response.arrayBuffer();
      res.setHeader("Content-Type", "audio/mpeg");
      res.send(Buffer.from(arrayBuffer));
    } catch (error: any) {
      console.warn("[JARVIS] Fish Audio TTS failed:", error.message || error);
      res.status(502).json({ error: error.message || "TTS request failed" });
    }
  });

  app.post("/api/generate-image", async (req, res) => {
    const { prompt, aspectRatio = "1:1" } = req.body;

    if (!ai) {
      return res.status(503).json({ error: "GEMINI_API_KEY not configured." });
    }

    try {
      const response = await withTimeout(
        ai.models.generateContent({
          model: "gemini-3.1-flash-image",
          contents: { parts: [{ text: prompt }] },
          config: { imageConfig: { aspectRatio: aspectRatio as any } }
        }),
        15000,
        "image-gen"
      );

      let imageUrl = null;
      for (const part of (response as any).candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          imageUrl = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
          break;
        }
      }
      if (!imageUrl) throw new Error("No image data returned.");
      res.json({ imageUrl });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Proxy to external automation webhooks (MacroDroid/Tasker) — manual trigger
  app.post("/api/trigger", async (req, res) => {
    const { webhookUrl, payload } = req.body;
    if (!webhookUrl) return res.status(400).json({ success: false, error: "Webhook URL is required" });

    const result = await fireWebhook(webhookUrl, payload);
    if (result.ok) return res.json({ success: true, response: result.body });
    res.status(500).json({ success: false, error: result.error || result.body });
  });

  // Lists configured device actions (and whether each has a real webhook
  // wired up yet) so the frontend/README can show setup status.
  app.get("/api/actions", (req, res) => {
    const actions = loadActions();
    res.json({
      actions: actions.map((a) => ({ name: a.name, description: a.description, configured: !!a.webhookUrl }))
    });
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({ server: { middlewareMode: true }, appType: "spa" });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => res.sendFile(path.join(distPath, "index.html")));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`JARVIS active on http://localhost:${PORT}`);
  });
}

startServer();
