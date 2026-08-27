import { useState, Suspense, useEffect, useRef, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Volume2, 
  VolumeX, 
  Mic, 
  MicOff, 
  Send, 
  Zap, 
  Sparkles, 
  Activity, 
  ShieldCheck, 
  User, 
  Cpu,
  Radio,
  Power
} from 'lucide-react';
import NexusR3F from './NexusR3F';
import UltronSpectrumVisualizer from './UltronSpectrumVisualizer';
import HudExchangeLog, { HudMessage } from './HudExchangeLog';
import { useAudioAnalyzer } from '../hooks/useAudioAnalyzer';
import { useParallaxMouse } from '../hooks/useParallaxMouse';
import { useWebSpeechRecognition } from '../hooks/useWebSpeechRecognition';
import { soundFX } from '../utils/audioFX';

export default function JarvisLanding() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isWakeActive, setIsWakeActive] = useState(false);
  
  // Continuous conversation mode: activated by the wake phrase, stays live until the shutdown command
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [systemStatus, setSystemStatus] = useState("AWAITING_WAKE // SAY \"WAKE UP ULTRON, DADDY'S HOME\"");
  const [conversationState, setConversationState] = useState<"standby" | "listening" | "thinking" | "speaking">("listening");

  // Real-time Fading HUD Exchanges State (Clean 10-second inactivity decay)
  const [hudMessages, setHudMessages] = useState<HudMessage[]>([
    {
      id: 'init-intro',
      role: 'model',
      senderName: 'ULTRON',
      text: "I am Ultron, your sentient AI. Aman, what is the work?",
      timestamp: Date.now(),
    }
  ]);

  const [textInput, setTextInput] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [chatHistory, setChatHistory] = useState<Array<{ role: string; content: string }>>([]);

  const isExecutingRef = useRef(false);
  const lastExecutedCmdRef = useRef<string>("");
  const lastExecutedTimeRef = useRef<number>(0);
  const sessionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isSessionActiveRef = useRef(false);
  const isMutedRef = useRef(isMuted);
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);
  const clientLocationRef = useRef<{ lat: number; lon: number } | null>(null);

  isSessionActiveRef.current = isSessionActive;
  isMutedRef.current = isMuted;

  // Parallax Tracker for interactive 3D Hologram tilt
  const mouse = useParallaxMouse(0.08);

  // Best-effort real GPS location for "what's the weather" with no city
  // named — falls back to DEFAULT_CITY server-side if denied/unavailable.
  useEffect(() => {
    if (typeof navigator === 'undefined' || !navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        clientLocationRef.current = { lat: pos.coords.latitude, lon: pos.coords.longitude };
      },
      () => {
        // Denied or unavailable — voice-command falls back to DEFAULT_CITY
      },
      { timeout: 8000, maximumAge: 10 * 60 * 1000 }
    );
  }, []);

  // 10-Second Inactivity HUD Cleaner
  // Automatically removes older exchanges that haven't been active for 10 seconds to keep screen clean
  useEffect(() => {
    const timer = setInterval(() => {
      const threshold = Date.now() - 10000;
      setHudMessages(prev => {
        const filtered = prev.filter(msg => {
          // Do not remove if currently streaming
          if (msg.isStreaming) return true;
          return msg.timestamp > threshold;
        });
        if (filtered.length === prev.length) return prev;
        return filtered;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Helper to add or update user message in HUD log
  const addOrUpdateUserMessage = useCallback((text: string, isFinal = false) => {
    setHudMessages(prev => {
      const liveUserIdx = prev.findIndex(m => m.id === 'live-user-input');
      const newMsg: HudMessage = {
        id: isFinal ? `user-${Date.now()}` : 'live-user-input',
        role: 'user',
        senderName: 'AMAN',
        text,
        timestamp: Date.now(),
        isStreaming: !isFinal,
      };

      if (liveUserIdx >= 0) {
        const updated = [...prev];
        updated[liveUserIdx] = newMsg;
        return updated;
      } else {
        return [...prev.slice(-4), newMsg];
      }
    });
  }, []);

  // Helper to add or update Ultron response in HUD log
  const addOrUpdateUltronMessage = useCallback((text: string, isStreaming = false) => {
    setHudMessages(prev => {
      // If there's a live streaming message, update it in-place
      const liveAiIdx = prev.findIndex(m => m.id === 'live-ultron-output');
      const newMsg: HudMessage = {
        id: isStreaming ? 'live-ultron-output' : `ultron-${Date.now()}`,
        role: 'model',
        senderName: 'ULTRON',
        text,
        timestamp: Date.now(),
        isStreaming,
      };

      if (liveAiIdx >= 0) {
        const updated = [...prev];
        updated[liveAiIdx] = newMsg;
        return updated;
      } else {
        return [...prev.slice(-4), newMsg];
      }
    });
  }, []);

  // Wake / shutdown commands — matched loosely (punctuation/case-insensitive)
  // since speech-to-text won't reliably produce apostrophes.
  const WAKE_PHRASE_DISPLAY = "WAKE UP ULTRON, DADDY'S HOME";
  const WAKE_PHRASE_NORMALIZED = "wake up ultron daddys home";
  const SHUTDOWN_PATTERNS_NORMALIZED = [
    "shutdown ultron", "shut down ultron", "power down ultron",
    "shut off ultron", "turn off ultron"
  ];

  function normalizeForMatch(s: string): string {
    return s
      .toLowerCase()
      .replace(/['']/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  // Continuous Session keeper: once woken, stays active until the shutdown
  // command (or a manual mic/speaker toggle) — no auto idle-timeout.
  const refreshActiveSession = useCallback(() => {
    setIsSessionActive(true);
    setIsWakeActive(true);
    if (sessionTimeoutRef.current) {
      clearTimeout(sessionTimeoutRef.current);
      sessionTimeoutRef.current = null;
    }
  }, []);

  const deactivateSession = useCallback(() => {
    if (sessionTimeoutRef.current) {
      clearTimeout(sessionTimeoutRef.current);
      sessionTimeoutRef.current = null;
    }
    setIsSessionActive(false);
    setIsWakeActive(false);
    setSystemStatus(`STANDBY // SAY "${WAKE_PHRASE_DISPLAY}"`);
  }, []);

  // Ultron Voice Engine: cloned Fish Audio voice first, browser TTS as fallback.
  const speak = useCallback((text: string, onDone?: () => void) => {
    addOrUpdateUltronMessage(text, false);

    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current = null;
    }

    const finish = () => {
      setIsSpeaking(false);
      setConversationState("listening");
      setHudMessages(prev => prev.map(m => m.text === text ? { ...m, timestamp: Date.now(), isStreaming: false } : m));
      if (onDone) onDone();
    };

    if (isMutedRef.current) {
      setConversationState("listening");
      if (onDone) onDone();
      return;
    }

    const startedSpeaking = () => {
      setIsSpeaking(true);
      setConversationState("speaking");
      setHudMessages(prev => prev.map(m => m.text === text ? { ...m, timestamp: Date.now() } : m));
    };

    const speakWithBrowserTTS = () => {
      if (typeof window === 'undefined' || !window.speechSynthesis) {
        finish();
        return;
      }
      try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        const voices = window.speechSynthesis.getVoices();

        // Deep resonant robotic timbre — fallback only, real voice is Fish Audio
        utterance.pitch = 0.65;
        utterance.rate = 1.05;
        const deepVoice = voices.find(v =>
          v.name.includes("David") ||
          v.name.includes("Google US English") ||
          v.name.includes("Male") ||
          (v.lang.startsWith("en") && !v.name.includes("Female") && !v.name.includes("Zira"))
        );
        if (deepVoice) utterance.voice = deepVoice;

        utterance.onstart = startedSpeaking;
        utterance.onend = finish;
        utterance.onerror = finish;

        window.speechSynthesis.speak(utterance);
      } catch {
        finish();
      }
    };

    // Try the real cloned Ultron voice first
    fetch("/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    })
      .then(async (res) => {
        if (!res.ok) throw new Error("fish_tts_unavailable");
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        const audio = new Audio(url);
        currentAudioRef.current = audio;

        audio.onplay = startedSpeaking;
        audio.onended = () => {
          URL.revokeObjectURL(url);
          if (currentAudioRef.current === audio) currentAudioRef.current = null;
          finish();
        };
        audio.onerror = () => {
          URL.revokeObjectURL(url);
          if (currentAudioRef.current === audio) currentAudioRef.current = null;
          speakWithBrowserTTS();
        };

        await audio.play();
      })
      .catch(() => {
        speakWithBrowserTTS();
      });
  }, [addOrUpdateUltronMessage]);


  // Main Command & World Knowledge Query Engine with Lightning Speed
  const executeQuery = useCallback(async (rawText: string) => {
    const text = rawText.trim();
    if (!text) return;

    // Deduplication check
    const now = Date.now();
    if (text.toLowerCase() === lastExecutedCmdRef.current.toLowerCase() && (now - lastExecutedTimeRef.current) < 500) {
      return;
    }
    lastExecutedCmdRef.current = text;
    lastExecutedTimeRef.current = now;

    isExecutingRef.current = true;
    addOrUpdateUserMessage(text, true);
    setTextInput("");

    const normalized = normalizeForMatch(text);

    // 0. SHUTDOWN COMMAND — ends the session manually, works whenever active
    const isShutdown = SHUTDOWN_PATTERNS_NORMALIZED.some(
      p => normalized === p || normalized.startsWith(p + " ")
    );
    if (isShutdown) {
      if (!isMutedRef.current) soundFX.playLock();
      const shutdownReply = "Shutting down, Aman. Say the wake command when you need me again.";
      deactivateSession();
      speak(shutdownReply, () => {
        isExecutingRef.current = false;
      });
      return;
    }

    // 1. WAKE COMMAND — "Wake up Ultron, Daddy's home" activates the whole
    // session; stays active until the shutdown command above.
    const isExactWake = normalized === WAKE_PHRASE_NORMALIZED;
    const startsWithWake = normalized.startsWith(WAKE_PHRASE_NORMALIZED + " ");

    let queryToSend = text;
    if (startsWithWake) {
      refreshActiveSession();
      if (!isMutedRef.current) soundFX.playAck();
      queryToSend = text.slice(text.toLowerCase().indexOf("home") + 4).replace(/^[\s,.:]+/, "").trim();
    } else if (isSessionActiveRef.current) {
      // In active session mode, no need to repeat the wake phrase at all
      refreshActiveSession();
    }

    // If only the wake phrase was spoken, greet and keep the session live
    if (isExactWake || !queryToSend) {
      refreshActiveSession();
      if (!isMutedRef.current) soundFX.playAck();
      setSystemStatus("ACTIVE // CONTINUOUS CONVERSATION LIVE");
      const introReply = "I am Ultron, your sentient AI. Aman, what is the work?";
      speak(introReply, () => {
        isExecutingRef.current = false;
      });
      return;
    }

    // Always engage visual session for active queries
    refreshActiveSession();

    // UNIFIED VOICE PIPELINE — one backend call. The model itself decides:
    // execute a real device action (fires the matching webhook from
    // actions.json) or just answer as open-ended Q&A. Purely voice-driven,
    // nothing hardcoded to fixed phrases anymore.
    try {
      if (!isMutedRef.current) soundFX.playAck();
      setConversationState("thinking");
      setSystemStatus("PROCESSING...");

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 12000);

      const res = await fetch("/api/voice-command", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          message: queryToSend || text,
          history: chatHistory,
          persona: "ultron",
          clientLocation: clientLocationRef.current
        })
      });
      clearTimeout(timeoutId);

      const data = await res.json();
      const reply: string = data.response || "Ultron matrix operational, Aman.";

      if (data.actionExecuted) {
        if (!isMutedRef.current) soundFX.playDeviceSync();
        if (data.action === "unlock_screen" || data.action === "unlock_all_devices") setIsUnlocked(true);
        if (data.action === "lock_screen") setIsUnlocked(false);
        setSystemStatus(`ACTION_EXECUTED // ${String(data.action || "").toUpperCase()}`);
      } else {
        setSystemStatus("ACTIVE // TALK FREELY WITH ULTRON");
      }

      setChatHistory(prev => [
        ...prev.slice(-3),
        { role: "user", content: queryToSend || text },
        { role: "model", content: reply }
      ]);

      setConversationState("speaking");
      speak(reply, () => {
        isExecutingRef.current = false;
        setSystemStatus("ACTIVE // TALK FREELY WITH ULTRON");
      });
    } catch (err) {
      console.warn("Voice command request failed:", err);
      const reply = "I couldn't reach the AI backend just now, Aman.";
      setSystemStatus("ACTIVE // READY");
      speak(reply, () => {
        isExecutingRef.current = false;
      });
    }
  }, [speak, chatHistory, refreshActiveSession, deactivateSession, addOrUpdateUserMessage, addOrUpdateUltronMessage]);

  // Speech Recognition Hook with robust continuous mode
  const {
    isListening,
    interimTranscript,
    start: startMic,
    stop: stopMic,
  } = useWebSpeechRecognition({
    lang: 'en-US',
    autoStart: true,
    isSpeaking: isSpeaking,
    onCommand: (command, isFinal) => {
      if (isFinal) {
        addOrUpdateUserMessage(command, true);
        executeQuery(command);
      } else {
        addOrUpdateUserMessage(command, false);
        setConversationState("listening");
      }
    }
  });

  // Audio Reaction Hub strictly controlled by isListening state (releases hardware when off)
  const { frequencies, waveform, intensity, peakDb } = useAudioAnalyzer(isListening, isSpeaking);

  // Global first gesture unlocker for AudioContext and Speech Voices
  useEffect(() => {
    const handleFirstGesture = () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.getVoices();
      }
      if (!isMutedRef.current) soundFX.playAck();
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
    };

    window.addEventListener('click', handleFirstGesture);
    window.addEventListener('keydown', handleFirstGesture);
    window.addEventListener('touchstart', handleFirstGesture);

    return () => {
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
    };
  }, []);

  // Complete Microphone Toggle (Turns mic hardware completely off/on)
  const handleToggleMic = useCallback(() => {
    if (!isMutedRef.current) soundFX.playAck();
    if (isListening) {
      stopMic();
      setSystemStatus("MICROPHONE_OFF");
    } else {
      startMic();
      setSystemStatus(isSessionActive ? "ACTIVE // MIC LIVE" : "AWAITING_WAKE // SAY \"WAKE UP ULTRON, DADDY'S HOME\"");
    }
  }, [isListening, isSessionActive, startMic, stopMic]);

  // Speaker Mute Toggle
  const handleToggleSpeaker = useCallback(() => {
    setIsMuted(prev => {
      const next = !prev;
      if (next && typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      return next;
    });
  }, []);

  return (
    <div 
      className="relative h-screen w-full bg-black text-amber-400 overflow-hidden font-mono select-none"
    >
      {/* Atmospheric Glow & Holographic Scanlines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08)_0%,rgba(0,0,0,0.95)_75%)] pointer-events-none z-0" />
      <div className="absolute inset-0 scanline opacity-15 pointer-events-none z-30" />

      {/* TOP STATUS BAR & HARDWARE TOGGLES */}
      <header className="absolute top-0 inset-x-0 p-4 md:p-6 flex items-center justify-between z-40">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center">
            <span className={`w-2.5 h-2.5 rounded-full ${isListening ? (isSessionActive ? "bg-amber-300 shadow-[0_0_16px_#f59e0b]" : "bg-amber-500") : "bg-red-500"} animate-pulse`} />
            <span className="absolute w-5 h-5 rounded-full border border-amber-500/40 animate-ping opacity-75" />
          </div>
          <div>
            <h1 className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-white drop-shadow-[0_0_10px_rgba(245,158,11,0.5)] flex items-center gap-2">
              <span>ULTRON // NEURAL MATRIX</span>
              {isUnlocked && (
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 inline" />
              )}
            </h1>
            <div className="text-[8px] text-amber-500/70 tracking-widest uppercase flex items-center gap-2">
              <span>{systemStatus}</span>
              {isSessionActive && (
                <span className="text-amber-300 font-bold animate-pulse">
                  [CONTINUOUS CHAT ACTIVE]
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Action Controls: Microphone, Speaker, Text Input, Quick Wake */}
        <div className="flex items-center gap-2">
          {/* Quick Wake / Shutdown Toggle Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (isSessionActive) {
                executeQuery("shutdown ultron");
              } else {
                executeQuery("Wake up Ultron, Daddy's home");
              }
            }}
            className={`px-2.5 py-1.5 rounded-full border text-[8.5px] tracking-widest uppercase transition-all flex items-center gap-1.5 ${
              isSessionActive
                ? "border-amber-400 bg-amber-500/25 text-amber-200 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                : "border-amber-500/30 text-amber-500/70 hover:text-amber-200 hover:border-amber-400"
            }`}
            title={isSessionActive ? "Shut down Ultron" : "Wake up Ultron (\"Wake up Ultron, Daddy's home\")"}
          >
            <Radio className="w-3 h-3 text-amber-400 animate-pulse" />
            <span className="hidden sm:inline">{isSessionActive ? "SHUTDOWN ULTRON" : "WAKE UP ULTRON"}</span>
            <span className="sm:hidden">{isSessionActive ? "OFF" : "WAKE"}</span>
          </button>

          {/* Keyboard input toggle */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowInput(prev => !prev);
            }}
            className={`p-2 rounded-full border text-[8.5px] tracking-widest uppercase transition-all flex items-center justify-center ${
              showInput 
                ? "border-amber-400 bg-amber-500/20 text-white" 
                : "border-amber-500/20 text-amber-500/60 hover:text-amber-300 hover:border-amber-500/50"
            }`}
            title="Toggle Text Input"
          >
            <Sparkles className="w-3.5 h-3.5" />
          </button>

          {/* SPEAKER HARDWARE TOGGLE: If off, Ultron cannot speak (completely muted) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleToggleSpeaker();
            }}
            className={`p-2 rounded-full border transition-all flex items-center justify-center ${
              isMuted 
                ? "border-red-500/60 text-red-400 bg-red-500/20 shadow-[0_0_10px_rgba(239,68,68,0.3)]" 
                : "border-amber-500/30 text-amber-400 hover:text-amber-200 hover:border-amber-400 bg-black/50"
            }`}
            title={isMuted ? "Speaker is OFF (Ultron will not speak). Click to Turn ON." : "Speaker is ON (Ultron will speak). Click to Turn OFF."}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>

          {/* MICROPHONE HARDWARE TOGGLE: If off, phone/browser CANNOT access microphone */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleToggleMic();
            }}
            className={`p-2 rounded-full border transition-all flex items-center justify-center ${
              isListening 
                ? "border-amber-400/70 bg-amber-500/20 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.35)]" 
                : "border-red-500/60 text-red-400 bg-red-500/20 shadow-[0_0_10px_rgba(239,68,68,0.3)]"
            }`}
            title={isListening ? "Microphone is ON (Listening). Click to Turn OFF completely." : "Microphone is OFF (No access). Click to Turn ON."}
          >
            {isListening ? (
              <Mic className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            ) : (
              <MicOff className="w-3.5 h-3.5 text-red-400" />
            )}
          </button>
        </div>
      </header>

      {/* CENTER 3D ULTRON HOLOGRAM */}
      <main className="absolute inset-0 flex items-center justify-center z-10">
        <Suspense fallback={
          <div className="flex flex-col items-center gap-3">
            <Zap className="w-8 h-8 text-amber-400 animate-pulse" />
            <span className="text-[10px] tracking-[0.3em] text-amber-400/60 uppercase">
              Materializing Ultron Core...
            </span>
          </div>
        }>
          <Canvas camera={{ position: [0, 0, 4.6], fov: 58 }}>
            <NexusR3F 
              active={isSpeaking || isListening} 
              audioData={frequencies}
              intensity={intensity}
              parallaxX={mouse.smoothX}
              parallaxY={mouse.smoothY}
              isUnlocked={isUnlocked}
              personaMode="ultron"
              isWakeActive={isWakeActive || isSessionActive}
            />
            <EffectComposer>
              <Bloom 
                intensity={isUnlocked || isWakeActive || isSpeaking ? 3.8 : 2.4} 
                luminanceThreshold={0.08} 
                luminanceSmoothing={0.92} 
              />
            </EffectComposer>
          </Canvas>
        </Suspense>
      </main>

      {/* OPTIONAL FLOATING TEXT INPUT */}
      <AnimatePresence>
        {showInput && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 inset-x-4 max-w-lg mx-auto z-40"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 p-2 bg-black/90 border border-amber-500/40 rounded-xl backdrop-blur-md shadow-[0_0_30px_rgba(245,158,11,0.2)]">
              <input
                type="text"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && executeQuery(textInput)}
                placeholder="Ask Ultron any question (astrophysics, history, math, code...)"
                className="flex-1 bg-transparent border-none outline-none text-xs text-amber-200 placeholder:text-amber-500/40 px-2 font-sans"
                autoFocus
              />
              <button
                onClick={() => executeQuery(textInput)}
                className="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/40 border border-amber-500/50 text-amber-300 text-xs flex items-center gap-1 transition-all"
              >
                <Send className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DYNAMIC SPECTRUM VISUALIZER */}
      <div className="absolute inset-x-0 bottom-48 md:bottom-44 z-30 flex justify-center pointer-events-none">
        <div className="w-full pointer-events-auto flex justify-center">
          <AnimatePresence>
            {(isWakeActive || isSessionActive) && (
              <UltronSpectrumVisualizer
                isVisible={isWakeActive || isSessionActive}
                frequencies={frequencies}
                waveform={waveform}
                intensity={intensity}
                peakDb={peakDb}
                transcript={interimTranscript}
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* DYNAMIC FADING HUD EXCHANGES LIST (Dissolves older messages after 10s of inactivity) */}
      <footer className="absolute bottom-0 inset-x-0 p-4 md:p-6 flex flex-col items-center justify-end z-40 pointer-events-none">
        <div className="w-full max-w-2xl flex flex-col items-center gap-2 pointer-events-auto">
          
          <HudExchangeLog
            messages={hudMessages}
            conversationState={conversationState}
            isSpeaking={isSpeaking}
            isMuted={isMuted}
            isSessionActive={isSessionActive}
          />

          {/* Guidance Banner */}
          <div className="text-[7.5px] md:text-[8px] tracking-[0.25em] text-amber-500/50 uppercase text-center mt-1 select-none">
            {!isListening ? (
              <span className="text-red-400">MICROPHONE IS TURNED OFF • CLICK TOP MIC BUTTON TO ENABLE</span>
            ) : isSessionActive ? (
              <span className="text-amber-300 font-bold animate-pulse">CONTINUOUS MODE ACTIVE • TALK FREELY</span>
            ) : (
              <span>SAY "WAKE UP ULTRON, DADDY'S HOME" TO ACTIVATE</span>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
