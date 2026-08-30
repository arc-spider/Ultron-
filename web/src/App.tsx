import { useState, useRef, useEffect, useCallback } from "react";
import * as THREE from "three";
import { Mic, MicOff, Volume2, VolumeX, Radio, Settings, X } from "lucide-react";

const WAKE_NORMALIZED = "wake up jarvis daddys home";
const SHUTDOWN_PATTERNS = [
  "shutdown jarvis", "shut down jarvis", "power down jarvis",
  "shut off jarvis", "turn off jarvis"
];
const STORAGE_KEY = "ultron_settings_v1";

function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function loadSettings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const defaults = { groqKey: "", geminiKey: "", defaultCity: "Kanpur" };
    if (!raw) return defaults;
    return { ...defaults, ...JSON.parse(raw) };
  } catch {
    return { groqKey: "", geminiKey: "", defaultCity: "Kanpur" };
  }
}

function saveSettings(settings: { groqKey: string; geminiKey: string; defaultCity: string }) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {
    // localStorage unavailable (private browsing etc) — settings just won't persist
  }
}

// ---------- Direct client-side tool implementations (no server needed) ----------

// Every fetch in this file goes through this — without it, a hung mobile
// network request just waits forever with no failover and no error shown,
// which is exactly the "stuck on 3 dots" bug this fixes.
async function fetchWithTimeout(url: string, options: RequestInit = {}, ms = 12000): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

const WEATHER_CODES: Record<number, string> = {
  0: "clear sky", 1: "mostly clear", 2: "partly cloudy", 3: "overcast",
  45: "foggy", 48: "depositing rime fog",
  51: "light drizzle", 53: "moderate drizzle", 55: "dense drizzle",
  61: "light rain", 63: "moderate rain", 65: "heavy rain",
  71: "light snow", 73: "moderate snow", 75: "heavy snow",
  80: "light rain showers", 81: "moderate rain showers", 82: "violent rain showers",
  95: "thunderstorm", 96: "thunderstorm with light hail", 99: "thunderstorm with heavy hail"
};

async function getWeather(location: string): Promise<string | null> {
  try {
    const geoRes = await fetchWithTimeout(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(location)}&count=1`
    );
    const geoData = await geoRes.json();
    const place = geoData.results?.[0];
    if (!place) return null;

    const weatherRes = await fetchWithTimeout(
      `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current_weather=true`
    );
    const weatherData = await weatherRes.json();
    const cw = weatherData.current_weather;
    if (!cw) return null;

    const desc = WEATHER_CODES[cw.weathercode] || "unusual conditions";
    return `It's currently ${Math.round(cw.temperature)}°C with ${desc} in ${place.name}, wind at ${Math.round(cw.windspeed)} km/h, Aman.`;
  } catch {
    return null;
  }
}

async function convertCurrency(amount: number, from: string, to: string): Promise<string | null> {
  try {
    const res = await fetchWithTimeout(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${from.toUpperCase()}&to=${to.toUpperCase()}`
    );
    const data = await res.json();
    const converted = data.rates?.[to.toUpperCase()];
    if (converted === undefined) return null;
    return `${amount} ${from.toUpperCase()} is about ${converted.toFixed(2)} ${to.toUpperCase()}, Aman.`;
  } catch {
    return null;
  }
}

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
    const res = await fetchWithTimeout(
      `https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(id)}&vs_currencies=${encodeURIComponent(currency)}`
    );
    const data = await res.json();
    const price = data[id]?.[currency];
    if (price === undefined) return null;
    const label = id.charAt(0).toUpperCase() + id.slice(1);
    return `${label} is at ${price.toLocaleString()} ${currency.toUpperCase()} right now, Aman.`;
  } catch {
    return null;
  }
}

async function getEarthquakeAlerts(): Promise<string | null> {
  try {
    const res = await fetchWithTimeout("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson");
    const data = await res.json();
    const features = data.features || [];
    if (!features.length) {
      return "No significant earthquakes, magnitude 4.5 or above, in the last 24 hours, Aman.";
    }
    const top = features
      .slice(0, 3)
      .map((f: any) => `magnitude ${f.properties.mag.toFixed(1)} near ${f.properties.place}`);
    return `In the last 24 hours: ${top.join("; ")}, Aman.`;
  } catch {
    return null;
  }
}

const TOOL_DECLARATIONS = [
  {
    type: "function",
    function: {
      name: "get_weather",
      description: "Get real-time current weather for a city. Use whenever the user asks about weather, temperature, rain, or what to wear outside.",
      parameters: {
        type: "object",
        properties: {
          location: { type: "string", description: "City name. If the user didn't say one, omit this." }
        }
      }
    }
  },
  {
    type: "function",
    function: {
      name: "convert_currency",
      description: "Convert an amount from one currency to another using real exchange rates.",
      parameters: {
        type: "object",
        properties: {
          amount: { type: "number", description: "Amount to convert, default 1." },
          from: { type: "string", description: "3-letter source currency code." },
          to: { type: "string", description: "3-letter target currency code." }
        },
        required: ["from", "to"]
      }
    }
  },
  {
    type: "function",
    function: {
      name: "get_crypto_price",
      description: "Get the real-time price of a cryptocurrency.",
      parameters: {
        type: "object",
        properties: {
          coin: { type: "string", description: "Coin name or ticker, e.g. bitcoin, btc, ethereum." },
          vsCurrency: { type: "string", description: "3-letter currency, default usd." }
        },
        required: ["coin"]
      }
    }
  },
  {
    type: "function",
    function: {
      name: "get_earthquake_alerts",
      description: "Get real recent significant earthquake activity worldwide (magnitude 4.5+, past 24 hours).",
      parameters: { type: "object", properties: {} }
    }
  }
];

// Same 4 tools, reshaped for Gemini's functionDeclarations format
// (Gemini doesn't use the OpenAI type:"function" wrapper).
const GEMINI_FUNCTION_DECLARATIONS = TOOL_DECLARATIONS.map((t) => ({
  name: t.function.name,
  description: t.function.description,
  parameters: t.function.parameters
}));

type Msg = { role: "aman" | "ultron"; text: string };

export default function App() {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneStateRef = useRef({ intensity: 0, active: false, unlocked: false });

  const [settings, setSettings] = useState(loadSettings());
  const [showSettings, setShowSettings] = useState(!loadSettings().groqKey && !loadSettings().geminiKey);
  const [draftKey, setDraftKey] = useState(settings.groqKey);
  const [draftGeminiKey, setDraftGeminiKey] = useState(settings.geminiKey);
  const [draftCity, setDraftCity] = useState(settings.defaultCity);
  const [justSaved, setJustSaved] = useState(false);

  const [isSessionActive, setIsSessionActive] = useState(false);
  const [status, setStatus] = useState('AWAITING WAKE // SAY "WAKE UP JARVIS, DADDY\'S HOME"');
  const [messages, setMessages] = useState<Msg[]>([
    { role: "ultron", text: "Systems dormant. Speak the wake command, Aman." }
  ]);
  const [input, setInput] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [micSupported, setMicSupported] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [micError, setMicError] = useState("");

  const historyRef = useRef<{ role: string; content: string }[]>([]);
  const recognitionRef = useRef<any>(null);
  const chatScrollRef = useRef<HTMLDivElement>(null);
  const isMutedRef = useRef(false);
  isMutedRef.current = isMuted;
  const settingsRef = useRef(settings);
  settingsRef.current = settings;

  // ---------- THREE.JS HOLOGRAM ----------
  // ---------- HOLOGRAM: fractal lightning-branch burst inside a segmented
  // ring frame, matching the reference screenshot's look directly ----------
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 5.4;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    mount.appendChild(renderer.domElement);

    const FILAMENT_COLOR = 0xf0994d; // warm copper-amber, matches the reference
    const RING_COLOR = 0xc2761f; // slightly darker copper for the frame

    const holoGroup = new THREE.Group();
    scene.add(holoGroup);

    // --- Fractal branch burst (Lichtenberg-figure style) ---
    function buildBranch(
      points: THREE.Vector3[],
      startRadius: number,
      endRadius: number,
      angle: number,
      depth: number
    ) {
      const segments = 7 + Math.floor(Math.random() * 5);
      let r = startRadius;
      let a = angle;
      let prev = new THREE.Vector3(Math.cos(a) * r, Math.sin(a) * r, (Math.random() - 0.5) * 0.1);
      for (let s = 0; s < segments; s++) {
        r += (endRadius - startRadius) / segments;
        a += (Math.random() - 0.5) * 0.4;
        const z = (Math.random() - 0.5) * 0.18 * (r / endRadius);
        const next = new THREE.Vector3(Math.cos(a) * r, Math.sin(a) * r, z);
        points.push(prev, next);
        if (depth < 2 && s > 2 && Math.random() < 0.32) {
          buildBranch(points, r, r + (endRadius - startRadius) * (0.3 + Math.random() * 0.3), a + (Math.random() - 0.5) * 1.4, depth + 1);
        }
        prev = next;
      }
    }

    const branchPoints: THREE.Vector3[] = [];
    const MAIN_BRANCHES = 70;
    for (let i = 0; i < MAIN_BRANCHES; i++) {
      const baseAngle = (i / MAIN_BRANCHES) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
      buildBranch(branchPoints, 0.32, 1.45 + Math.random() * 0.3, baseAngle, 0);
    }
    const filamentGeo = new THREE.BufferGeometry().setFromPoints(branchPoints);
    const filamentMat = new THREE.LineBasicMaterial({
      color: FILAMENT_COLOR, transparent: true, opacity: 0.7,
      blending: THREE.AdditiveBlending, depthWrite: false
    });
    const filaments = new THREE.LineSegments(filamentGeo, filamentMat);
    holoGroup.add(filaments);

    // --- Dark void at the very center, ringed by a thin bright collar ---
    const voidGeo = new THREE.CircleGeometry(0.2, 32);
    const voidMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const voidCircle = new THREE.Mesh(voidGeo, voidMat);
    voidCircle.position.z = 0.03;
    holoGroup.add(voidCircle);

    const centerRingGeo = new THREE.TorusGeometry(0.22, 0.012, 6, 48);
    const centerRingMat = new THREE.MeshBasicMaterial({
      color: 0xffd699, transparent: true, opacity: 0.9,
      blending: THREE.AdditiveBlending, depthWrite: false
    });
    const centerRing = new THREE.Mesh(centerRingGeo, centerRingMat);
    centerRing.position.z = 0.025;
    holoGroup.add(centerRing);

    // --- Outer ring frame: two close thick rings + one thin tilted ring
    // wrapping around at an angle (the "Saturn ring" element in the reference) ---
    const ring1Geo = new THREE.TorusGeometry(1.7, 0.055, 8, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({ color: RING_COLOR, transparent: true, opacity: 0.85 });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    holoGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(1.78, 0.035, 8, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: RING_COLOR, transparent: true, opacity: 0.55 });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = 0.2;
    ring2.rotation.y = 0.08;
    ring2.position.x = -0.05;
    holoGroup.add(ring2);

    const ring3Geo = new THREE.TorusGeometry(1.95, 0.012, 6, 100);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: RING_COLOR, transparent: true, opacity: 0.5,
      blending: THREE.AdditiveBlending, depthWrite: false
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.x = 1.15; // steep tilt so it reads edge-on, wrapping at an angle
    ring3.rotation.z = 0.3;
    holoGroup.add(ring3);

    // Segmented tick marks around the main ring — the dashed/mechanical
    // texture visible in the reference image
    const tickGroup = new THREE.Group();
    const TICK_COUNT = 64;
    for (let i = 0; i < TICK_COUNT; i++) {
      if (Math.random() < 0.25) continue; // gaps, so it reads as broken/segmented, not solid
      const a = (i / TICK_COUNT) * Math.PI * 2;
      const tickGeo = new THREE.BoxGeometry(0.035, 0.1, 0.02);
      const tickMat = new THREE.MeshBasicMaterial({ color: 0xffd699, transparent: true, opacity: 0.8 });
      const tick = new THREE.Mesh(tickGeo, tickMat);
      tick.position.set(Math.cos(a) * 1.75, Math.sin(a) * 1.75, 0);
      tick.rotation.z = a;
      tickGroup.add(tick);
    }
    holoGroup.add(tickGroup);

    const clock = new THREE.Clock();
    let animId: number;

    function animate() {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      const st = sceneStateRef.current;

      holoGroup.rotation.z = t * 0.06;
      holoGroup.rotation.y = Math.sin(t * 0.15) * 0.08;

      const pulse = 1 + Math.sin(t * 2) * 0.02 + st.intensity * 0.15;
      holoGroup.scale.setScalar(pulse);

      const shimmer = 0.75 + 0.25 * Math.sin(t * 3);
      const reactive = st.active ? st.intensity * 0.5 : 0;
      filamentMat.opacity = Math.min(1, 0.7 * shimmer + reactive);
      filamentMat.color.setHex(st.unlocked ? 0xfbbf24 : FILAMENT_COLOR);

      ring1.rotation.z = -t * 0.03;
      ring2.rotation.z = t * 0.04;
      ring3.rotation.y = t * 0.05;
      centerRing.rotation.z = t * 0.15;
      tickGroup.rotation.z = -t * 0.03;

      renderer.render(scene, camera);
    }
    animate();

    function handleResize() {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      filamentGeo.dispose();
      filamentMat.dispose();
      voidGeo.dispose();
      voidMat.dispose();
      centerRingGeo.dispose();
      centerRingMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      tickGroup.children.forEach((c) => {
        (c as THREE.Mesh).geometry.dispose();
        ((c as THREE.Mesh).material as THREE.Material).dispose();
      });
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  // ---------- SPEECH OUTPUT ----------
  const speak = useCallback((text: string) => {
    if (isMutedRef.current || typeof window === "undefined" || !window.speechSynthesis) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.pitch = 0.7;
      utterance.rate = 1.05;
      const voices = window.speechSynthesis.getVoices();
      const deepVoice = voices.find((v) => v.name.includes("Male") || v.name.includes("Google US English"));
      if (deepVoice) utterance.voice = deepVoice;

      utterance.onstart = () => {
        setIsSpeaking(true);
        sceneStateRef.current.active = true;
      };
      const finish = () => {
        setIsSpeaking(false);
        sceneStateRef.current.active = false;
      };
      utterance.onend = finish;
      utterance.onerror = finish;
      window.speechSynthesis.speak(utterance);
    } catch {
      // text is already in the chat log regardless
    }
  }, []);

  useEffect(() => {
    if (!isSpeaking) {
      sceneStateRef.current.intensity = 0;
      return;
    }
    let raf: number;
    const start = performance.now();
    function tick() {
      const t = (performance.now() - start) / 1000;
      sceneStateRef.current.intensity = 0.4 + 0.4 * Math.abs(Math.sin(t * 6));
      raf = requestAnimationFrame(tick);
    }
    tick();
    return () => cancelAnimationFrame(raf);
  }, [isSpeaking]);

  useEffect(() => {
    sceneStateRef.current.unlocked = isSessionActive;
  }, [isSessionActive]);

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [messages, isThinking]);

  // ---------- SPEECH INPUT — real mic, real browser, no sandbox restriction ----------
  useEffect(() => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) {
      setMicSupported(false);
      return;
    }
    try {
      const rec = new SR();
      rec.continuous = false;
      rec.interimResults = false;
      rec.lang = "en-US";
      rec.onresult = (e: any) => {
        const transcript = e.results[0][0].transcript;
        setInput(transcript);
        handleSubmitRef.current(transcript);
      };
      rec.onend = () => setIsListening(false);
      rec.onerror = (e: any) => {
        setIsListening(false);
        if (e.error === "not-allowed" || e.error === "service-not-allowed") {
          setMicError("Microphone permission was denied. Check your browser's site settings and allow microphone access for this page.");
        } else if (e.error === "no-speech") {
          setMicError("Didn't catch that — tap the mic and try again.");
        } else {
          setMicError(`Mic error: ${e.error}.`);
        }
      };
      recognitionRef.current = rec;
      setMicSupported(true);
    } catch {
      setMicSupported(false);
    }
  }, []);

  const toggleMicListening = async () => {
    const rec = recognitionRef.current;
    if (!rec) return;

    if (isListening) {
      rec.stop();
      setIsListening(false);
      return;
    }

    setMicError("");
    try {
      if (navigator.mediaDevices?.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        stream.getTracks().forEach((t) => t.stop());
      }
    } catch {
      setMicError("Microphone permission was denied. Tap the lock/site-info icon in your address bar to allow it, then try again.");
      return;
    }

    try {
      rec.start();
      setIsListening(true);
    } catch {
      setMicError("Couldn't start the microphone. Try again in a moment.");
    }
  };

  // ---------- BRAIN: direct client-side Groq call using the user's own locally-stored key ----------
  const handleSubmitRef = useRef<(text?: string) => void>(() => {});

  const runTool = async (name: string, args: any): Promise<string> => {
    if (name === "get_weather") {
      const location = args?.location || settingsRef.current.defaultCity;
      return (await getWeather(location)) || `Couldn't reach the weather service, Aman.`;
    }
    if (name === "convert_currency") {
      const amount = typeof args?.amount === "number" ? args.amount : 1;
      if (!args?.from || !args?.to) return "I need both currencies to convert, Aman.";
      return (await convertCurrency(amount, args.from, args.to)) || "Couldn't convert that currency, Aman.";
    }
    if (name === "get_crypto_price") {
      if (!args?.coin) return "Which coin, Aman?";
      return (await getCryptoPrice(args.coin, args.vsCurrency || "usd")) || "Couldn't fetch that price, Aman.";
    }
    if (name === "get_earthquake_alerts") {
      return (await getEarthquakeAlerts()) || "Couldn't reach the earthquake feed, Aman.";
    }
    return "That function isn't wired up.";
  };

  const callGeminiOnce = async (
    userText: string,
    geminiKey: string
  ): Promise<{ reply: string | null; error: string }> => {
    const MODEL_CASCADE = ["gemini-flash-latest", "gemini-3.6-flash"];
    const geminiHistory = historyRef.current.map((h) => ({
      role: h.role === "assistant" ? "model" : "user",
      parts: [{ text: h.content }]
    }));

    let lastError = "";
    for (const model of MODEL_CASCADE) {
      try {
        const res = await fetchWithTimeout(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${geminiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [...geminiHistory, { role: "user", parts: [{ text: userText }] }],
              systemInstruction: {
                parts: [{
                  text:
                    "You are JARVIS, a sentient AI speaking directly to Aman. Answer with supreme " +
                    "clarity and authority in 1-3 crisp sentences suitable for being spoken aloud. " +
                    "Address him as Aman when natural. No markdown, no lists. If the request matches " +
                    "an available function, call it instead of describing it."
                }]
              },
              tools: [{ functionDeclarations: GEMINI_FUNCTION_DECLARATIONS }],
              toolConfig: { functionCallingConfig: { mode: "AUTO" } },
              generationConfig: { maxOutputTokens: 300, temperature: 0.4 }
            })
          }
        );

        if (!res.ok) {
          const errText = await res.text();
          throw new Error(`Gemini ${res.status}: ${errText.slice(0, 200)}`);
        }

        const data = await res.json();
        const parts = data.candidates?.[0]?.content?.parts || [];
        const functionCallPart = parts.find((p: any) => p.functionCall);

        if (functionCallPart) {
          const reply = await runTool(functionCallPart.functionCall.name, functionCallPart.functionCall.args || {});
          return { reply, error: "" };
        }

        const text = parts.map((p: any) => p.text || "").join(" ").trim();
        if (text) return { reply: text, error: "" };
      } catch (err: any) {
        lastError = err.name === "AbortError" ? `${model} timed out (12s) — slow connection` : (err.message || String(err));
        console.warn(`[JARVIS] Gemini ${model} failed:`, lastError);
      }
    }
    return { reply: null, error: lastError };
  };

  const callGroqOnce = async (
    userText: string,
    groqKey: string
  ): Promise<{ reply: string | null; error: string }> => {
    const systemMsg = {
      role: "system",
      content:
        "You are JARVIS, a sentient AI speaking directly to Aman. Answer with supreme clarity " +
        "and authority in 1-3 crisp sentences suitable for being spoken aloud. Address him as Aman " +
        "when natural. No markdown, no lists. If the request matches an available function, call it " +
        "instead of describing it."
    };
    const MODEL_CASCADE = ["openai/gpt-oss-120b", "openai/gpt-oss-20b"];
    let lastError = "";

    for (const model of MODEL_CASCADE) {
      try {
        const response = await fetchWithTimeout("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${groqKey}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model,
            messages: [systemMsg, ...historyRef.current, { role: "user", content: userText }],
            tools: TOOL_DECLARATIONS,
            tool_choice: "auto",
            max_tokens: 300,
            temperature: 0.4
          })
        });

        if (!response.ok) {
          const errText = await response.text();
          throw new Error(`Groq ${response.status}: ${errText.slice(0, 200)}`);
        }

        const data = await response.json();
        const choice = data.choices?.[0];
        const toolCall = choice?.message?.tool_calls?.[0];

        if (toolCall) {
          let args: any = {};
          try { args = JSON.parse(toolCall.function.arguments || "{}"); } catch {}
          const reply = await runTool(toolCall.function.name, args);
          return { reply, error: "" };
        }
        const text = choice?.message?.content?.trim();
        if (text) return { reply: text, error: "" };
      } catch (err: any) {
        lastError = err.name === "AbortError" ? `${model} timed out (12s) — slow connection` : (err.message || String(err));
        console.warn(`[JARVIS] Groq ${model} failed:`, lastError);
      }
    }
    return { reply: null, error: lastError };
  };

  const callBrain = useCallback(async (userText: string) => {
    const { groqKey, geminiKey } = settingsRef.current;
    if (!groqKey && !geminiKey) {
      setShowSettings(true);
      const reply = "I need a Groq or Gemini API key first, Aman. Open settings to add one.";
      setMessages((prev) => [...prev.slice(-40), { role: "ultron", text: reply }]);
      speak(reply);
      return;
    }

    setIsThinking(true);
    setStatus("PROCESSING...");

    // Gemini tried first when both are set — it's the higher-quality brain;
    // Groq is the fast fallback if Gemini's cascade fails entirely.
    let reply: string | null = null;
    let lastError = "";

    if (geminiKey) {
      const result = await callGeminiOnce(userText, geminiKey);
      reply = result.reply;
      lastError = result.error;
    }
    if (!reply && groqKey) {
      const result = await callGroqOnce(userText, groqKey);
      reply = result.reply;
      lastError = result.error || lastError;
    }

    if (!reply) {
      reply = `Couldn't reach the brain just now, Aman — ${lastError || "check your API keys in settings"}.`;
      setMessages((prev) => [...prev.slice(-40), { role: "ultron", text: reply as string }]);
      speak(reply);
      setIsThinking(false);
      return;
    }

    historyRef.current = [
      ...historyRef.current.slice(-6),
      { role: "user", content: userText },
      { role: "assistant", content: reply }
    ];

    setMessages((prev) => [...prev.slice(-40), { role: "ultron", text: reply as string }]);
    setStatus(
      isSessionActive
        ? "ACTIVE // CONTINUOUS CONVERSATION LIVE"
        : 'AWAITING WAKE // SAY "WAKE UP JARVIS, DADDY\'S HOME"'
    );
    speak(reply);
    setIsThinking(false);
  }, [isSessionActive, speak]);

  const handleSubmit = useCallback(
    (rawText?: string) => {
      const text = (rawText ?? input).trim();
      if (!text || isThinking) return;

      setMessages((prev) => [...prev.slice(-40), { role: "aman", text }]);
      setInput("");

      const normalized = normalize(text);

      const isShutdown = SHUTDOWN_PATTERNS.some((p) => normalized === p || normalized.startsWith(p + " "));
      if (isShutdown) {
        setIsSessionActive(false);
        setStatus('STANDBY // SAY "WAKE UP JARVIS, DADDY\'S HOME"');
        const reply = "Shutting down, Aman. Say the wake command when you need me again.";
        setMessages((prev) => [...prev.slice(-40), { role: "ultron", text: reply }]);
        speak(reply);
        return;
      }

      const isExactWake = normalized === WAKE_NORMALIZED;
      const startsWithWake = normalized.startsWith(WAKE_NORMALIZED + " ");

      if (isExactWake) {
        setIsSessionActive(true);
        setStatus("ACTIVE // CONTINUOUS CONVERSATION LIVE");
        const reply = "I am JARVIS, your sentient AI. Aman, what is the work?";
        setMessages((prev) => [...prev.slice(-40), { role: "ultron", text: reply }]);
        speak(reply);
        return;
      }

      if (startsWithWake) {
        setIsSessionActive(true);
        setStatus("ACTIVE // CONTINUOUS CONVERSATION LIVE");
        const rest = text.slice(text.toLowerCase().indexOf("home") + 4).replace(/^[\s,.:]+/, "").trim();
        if (rest) callBrain(rest);
        return;
      }

      callBrain(text);
    },
    [input, isThinking, callBrain, speak]
  );

  handleSubmitRef.current = handleSubmit;

  const toggleSession = () => {
    if (isSessionActive) handleSubmit("shutdown jarvis");
    else handleSubmit("Wake up JARVIS, Daddy's home");
  };

  const handleSaveSettings = () => {
    const next = {
      groqKey: draftKey.trim(),
      geminiKey: draftGeminiKey.trim(),
      defaultCity: draftCity.trim() || "Kanpur"
    };
    setSettings(next);
    saveSettings(next);
    setJustSaved(true);
    setTimeout(() => setJustSaved(false), 2000);
    if (next.groqKey || next.geminiKey) {
      setTimeout(() => setShowSettings(false), 600);
    }
  };

  return (
    <div className="app">
      <div ref={mountRef} className="hologram-mount" />

      <div className="header">
        <div>
          <div className="brand-row">
            <span className="pulse-dot" />
            <span className="brand-title">JARVIS // NEURAL MATRIX</span>
          </div>
          <div className="status-line">{status}</div>
        </div>

        <div className="header-controls">
          <button
            onClick={toggleSession}
            title={isSessionActive ? "Shut down JARVIS" : "Wake up JARVIS"}
            className={`wake-btn ${isSessionActive ? "active" : ""}`}
          >
            <Radio size={12} />
            {isSessionActive ? "SHUTDOWN" : "WAKE UP"}
          </button>

          {micSupported && (
            <button
              onClick={toggleMicListening}
              title={isListening ? "Listening..." : "Tap to speak"}
              className={`icon-btn ${isListening ? "active" : ""}`}
            >
              {isListening ? <Mic size={15} /> : <MicOff size={15} />}
            </button>
          )}

          <button
            onClick={() => setIsMuted((m) => !m)}
            title={isMuted ? "Unmute" : "Mute"}
            className="icon-btn"
          >
            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>

          <button onClick={() => setShowSettings(true)} title="Settings" className="icon-btn">
            <Settings size={15} />
          </button>
        </div>
      </div>

      <div className="chat-panel">
        {micError && (
          <div className="error-banner">{micError}</div>
        )}

        <div ref={chatScrollRef} className="chat-scroll">
          {messages.map((m, i) => (
            <div key={i} className={`msg-row ${m.role}`}>
              <div className={`bubble ${m.role}`}>
                <div className={`bubble-label ${m.role}`}>{m.role === "ultron" ? "JARVIS" : "Aman"}</div>
                <div className="bubble-text">{m.text}</div>
              </div>
            </div>
          ))}
          {isThinking && (
            <div className="msg-row ultron">
              <div className="bubble ultron">
                <div className="bubble-label ultron">JARVIS</div>
                <div className="typing-dots"><span /><span /><span /></div>
              </div>
            </div>
          )}
        </div>

        <div className="input-row">
          <input
            type="text"
            className="text-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            placeholder={`Type "Wake up JARVIS, Daddy's home" to begin...`}
          />
          <button className="send-btn" disabled={isThinking} onClick={() => handleSubmit()}>
            <Radio size={16} />
          </button>
        </div>
        <div className="hint-text">Real voice input works here — tap the mic and allow permission</div>
      </div>

      {showSettings && (
        <div className="modal-backdrop" onClick={() => (settings.groqKey || settings.geminiKey) && setShowSettings(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-title">JARVIS Settings</div>
            <div className="modal-desc">
              Keys are stored only in this browser's local storage. Never sent anywhere except
              directly to the provider they belong to, never committed to the GitHub repo. Enter
              once, saved on this device from then on. If both are set, Gemini answers first
              (higher quality); Groq is the fast fallback if Gemini's cascade fails.
            </div>

            <div className="field-group">
              <label className="field-label">Gemini API Key</label>
              <input
                type="password"
                className="field-input"
                value={draftGeminiKey}
                onChange={(e) => setDraftGeminiKey(e.target.value)}
                placeholder="AIzaSy... or AQ...."
              />
              <div className="field-hint">Get one free, no card, at aistudio.google.com/apikey</div>
            </div>

            <div className="field-group">
              <label className="field-label">Groq API Key</label>
              <input
                type="password"
                className="field-input"
                value={draftKey}
                onChange={(e) => setDraftKey(e.target.value)}
                placeholder="gsk_..."
              />
              <div className="field-hint">Get one free at console.groq.com</div>
            </div>

            <div className="field-group">
              <label className="field-label">Default City (for weather)</label>
              <input
                type="text"
                className="field-input"
                value={draftCity}
                onChange={(e) => setDraftCity(e.target.value)}
                placeholder="Kanpur"
              />
            </div>

            <div className="modal-actions">
              <button className="btn-primary" onClick={handleSaveSettings}>
                Save{justSaved ? "d" : ""}
                {justSaved && <span className="saved-badge">✓</span>}
              </button>
              {(settings.groqKey || settings.geminiKey) && (
                <button className="btn-secondary" onClick={() => setShowSettings(false)}>
                  <X size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
