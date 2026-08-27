import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mic, 
  MicOff, 
  Send, 
  Volume2, 
  VolumeX, 
  Radio, 
  Sparkles, 
  Bot, 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  Lock, 
  Unlock, 
  Play,
  RotateCcw,
  Sliders,
  AlertCircle,
  RefreshCw,
  Activity
} from "lucide-react";
import { VoiceCommandLog } from "./VoiceLogOverlay";
import { soundFX } from "../utils/audioFX";
import { useWebSpeechRecognition, SpeechRecognitionState } from "../hooks/useWebSpeechRecognition";

interface Message {
  role: 'user' | 'jarvis' | 'ultron';
  content: string;
  isAuth?: boolean;
  imageUrl?: string;
  timestamp?: string;
}

interface JARVISInterfaceProps {
  onSpeakingChange?: (isSpeaking: boolean) => void;
  onStatusChange?: (status: string) => void;
  onAwakeChange?: (isAwake: boolean) => void;
  onPartRequest?: (partName: string | null) => void;
  onSettingsToggle?: (isOpen: boolean) => void;
  onImageGenerated?: (url: string | null) => void;
  onCommandProcessed?: (log: VoiceCommandLog) => void;
  onListeningChange?: (isListening: boolean) => void;
  incomingCommand?: { id: number; text: string } | null;
  // Multi-Device & Screen Lock Callbacks
  onDesktopLockToggle?: (isUnlocked: boolean) => void;
  isDesktopUnlocked?: boolean;
  onMobileUnlockAll?: () => void;
  onMobileLockAll?: () => void;
  onMobilePlaySong?: (songName?: string) => void;
  onMobileStopSong?: () => void;
  personaMode?: "ultron" | "jarvis";
  onPersonaChange?: (mode: "ultron" | "jarvis") => void;
}

export default function JARVISInterface({ 
  onSpeakingChange, 
  onStatusChange, 
  onAwakeChange, 
  onPartRequest, 
  onSettingsToggle, 
  onImageGenerated,
  onCommandProcessed,
  onListeningChange,
  incomingCommand,
  onDesktopLockToggle,
  isDesktopUnlocked = false,
  onMobileUnlockAll,
  onMobileLockAll,
  onMobilePlaySong,
  onMobileStopSong,
  personaMode = "ultron",
  onPersonaChange
}: JARVISInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: personaMode === 'ultron' ? 'ultron' : 'jarvis', 
      content: personaMode === 'ultron' 
        ? "Ultron Core initialized. Web Speech API continuous matrix active. Speak naturally or tap command."
        : "JARVIS Core initialized. Web Speech continuous array primed. Listening for your voice commands." 
    }
  ]);

  const [input, setInput] = useState("");
  const [isAwake, setIsAwake] = useState(true);
  const [isJARVISSpeaking, setIsJARVISSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [liveInterim, setLiveInterim] = useState("");

  const chatEndRef = useRef<HTMLDivElement>(null);
  const isProcessingRef = useRef(false);
  const lastExecutedTextRef = useRef<string>("");
  const lastExecutedTimeRef = useRef<number>(0);

  // Load / Store conversation vault
  useEffect(() => {
    const memory = localStorage.getItem('jarvis_memory_vault');
    if (memory) {
      try {
        const parsed = JSON.parse(memory);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
        }
      } catch (e) {}
    }
  }, []);

  useEffect(() => {
    if (messages.length > 1) {
      localStorage.setItem('jarvis_memory_vault', JSON.stringify(messages));
    }
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // --- ROBOTIC / NEURAL TEXT TO SPEECH ENGINE ---
  const speak = useCallback((text: string) => {
    if (isMuted || typeof window === 'undefined' || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();

    if (personaMode === "ultron") {
      // Deep, metallic robotic Ultron voice tuning
      utterance.pitch = 0.68;
      utterance.rate = 0.98;
      
      const deepVoice = voices.find(v => 
        v.name.includes("David") || 
        v.name.includes("Google US English") || 
        v.name.includes("Male") || 
        v.name.includes("Natural") ||
        (v.lang.startsWith("en") && !v.name.includes("Female") && !v.name.includes("Zira"))
      );
      if (deepVoice) utterance.voice = deepVoice;
    } else {
      // British / refined JARVIS tone
      utterance.pitch = 0.92;
      utterance.rate = 1.05;
      const jarvisVoice = voices.find(v => 
        v.name.includes("UK English Male") || 
        v.name.includes("Google UK English Male") || 
        v.name.includes("George") || 
        v.lang.startsWith("en")
      );
      if (jarvisVoice) utterance.voice = jarvisVoice;
    }

    utterance.onstart = () => {
      setIsJARVISSpeaking(true);
      onSpeakingChange?.(true);
      onStatusChange?.(personaMode === "ultron" ? "ULTRON_TRANSMITTING" : "JARVIS_RESPONDING");
    };

    utterance.onend = () => {
      setIsJARVISSpeaking(false);
      onSpeakingChange?.(false);
      onStatusChange?.(personaMode === "ultron" ? "ULTRON // ACTIVE MATRIX" : "JARVIS // SECURE LAYER");
    };

    utterance.onerror = (e) => {
      console.warn("Speech Synthesis Notice:", e);
      setIsJARVISSpeaking(false);
      onSpeakingChange?.(false);
    };

    try {
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.error("Speak failure:", e);
    }
  }, [personaMode, isMuted, onSpeakingChange, onStatusChange]);

  // --- DIRECT INTENT & COMMAND DISPATCHER ---
  const handleAction = async (msg: string, source: 'VOICE_ARRAY' | 'PREDICTIVE_RELAY' | 'MANUAL_OVERRIDE' = 'VOICE_ARRAY') => {
    const cleanMsg = msg.trim();
    if (!cleanMsg || isProcessingRef.current) return;

    // Deduplication check: prevent same phrase from double triggering within 1.2 seconds
    const now = Date.now();
    if (cleanMsg.toLowerCase() === lastExecutedTextRef.current.toLowerCase() && (now - lastExecutedTimeRef.current) < 1200) {
      return;
    }
    lastExecutedTextRef.current = cleanMsg;
    lastExecutedTimeRef.current = now;

    isProcessingRef.current = true;
    setLiveInterim("");

    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const logId = `cmd-${Date.now()}`;
    const lowerMsg = cleanMsg.toLowerCase();

    // Add user message to feed
    setMessages(prev => [...prev, { role: 'user', content: cleanMsg, timestamp }]);
    setInput("");

    const roleName = personaMode === 'ultron' ? 'ultron' : 'jarvis';

    const notifyCommand = (response: string, status: VoiceCommandLog['status'] = 'PROCESSED') => {
      onCommandProcessed?.({
        id: logId,
        command: cleanMsg,
        response,
        timestamp,
        status,
        source
      });
    };

    const respondDirectly = (response: string, callback?: () => void) => {
      notifyCommand(response, 'PROCESSED');
      setMessages(prev => [...prev, { role: roleName, content: response, timestamp }]);
      speak(response);
      if (callback) callback();
      isProcessingRef.current = false;
    };

    // 1. "HELLO" / "HI" / "HEY"
    if (lowerMsg === "hello" || lowerMsg === "hi" || lowerMsg === "hey" || lowerMsg === "hey ultron" || lowerMsg === "hey jarvis") {
      soundFX.playAck();
      const reply = personaMode === "ultron" ? "Hi." : "Hello. Systems are fully functional.";
      respondDirectly(reply);
      return;
    }

    // 2. "CAN YOU UNLOCK MY SCREEN?" / "UNLOCK SCREEN" / "UNLOCK DESKTOP"
    if (
      lowerMsg.includes("unlock my screen") || 
      lowerMsg.includes("unlock screen") || 
      lowerMsg.includes("unlock desktop") || 
      lowerMsg.includes("unlock the screen")
    ) {
      soundFX.playUnlock();
      onDesktopLockToggle?.(true);
      const reply = personaMode === "ultron" ? "Okay. Screen unlocked." : "Desktop screen unlocked. Systems primed.";
      respondDirectly(reply);
      return;
    }

    // 3. "LOCK SCREEN" / "LOCK MY SCREEN" / "SYSTEM LOCKED"
    if (
      lowerMsg.includes("lock my screen") || 
      lowerMsg.includes("lock screen") || 
      lowerMsg.includes("lock desktop")
    ) {
      soundFX.playLock();
      onDesktopLockToggle?.(false);
      const reply = personaMode === "ultron" ? "Screen locked." : "Desktop security protocols engaged. Screen locked.";
      respondDirectly(reply);
      return;
    }

    // 4. "UNLOCK ALL THREE MOBILE DEVICES" / "UNLOCK ALL DEVICES" / "UNLOCK MOBILE"
    if (
      lowerMsg.includes("unlock all") || 
      lowerMsg.includes("unlock mobile") || 
      lowerMsg.includes("unlock all three") || 
      lowerMsg.includes("unlock phones") ||
      lowerMsg.includes("all three mobile")
    ) {
      soundFX.playDeviceSync();
      onMobileUnlockAll?.();
      const reply = personaMode === "ultron" 
        ? "Checking... One sec... All screen unlocked." 
        : "Checking device relays... Relays authenticated. All three mobile screens unlocked.";
      respondDirectly(reply);
      return;
    }

    // 5. "LOCK ALL MOBILE DEVICES" / "LOCK ALL DEVICES"
    if (
      lowerMsg.includes("lock all mobile") || 
      lowerMsg.includes("lock all devices") || 
      lowerMsg.includes("lock the phones")
    ) {
      soundFX.playLock();
      onMobileLockAll?.();
      const reply = personaMode === "ultron" ? "All mobile devices secured and locked." : "Mobile devices locked.";
      respondDirectly(reply);
      return;
    }

    // 6. "PLAY MY FAVORITE SONG IN ALL THREE DEVICES" / "PLAY SONG" / "PLAY MUSIC"
    if (
      lowerMsg.includes("favorite song") || 
      lowerMsg.includes("play song") || 
      lowerMsg.includes("play music") || 
      lowerMsg.includes("play youtube") ||
      lowerMsg.includes("play my song")
    ) {
      soundFX.playDeviceSync();
      onMobilePlaySong?.("Starboy (Ultron Remix)");
      const reply = personaMode === "ultron" ? "Playing..." : "Synchronizing audio arrays across all mobile devices. Playing media.";
      respondDirectly(reply);
      return;
    }

    // 7. "STOP MUSIC" / "PAUSE MUSIC"
    if (lowerMsg.includes("stop music") || lowerMsg.includes("pause music") || lowerMsg.includes("stop song")) {
      onMobileStopSong?.();
      const reply = personaMode === "ultron" ? "Media stopped." : "Audio playback paused on all devices.";
      respondDirectly(reply);
      return;
    }

    // 8. "OPEN SETTINGS" / "CLOSE SETTINGS"
    if (lowerMsg.includes("open setting") || lowerMsg.includes("show setting")) {
      onSettingsToggle?.(true);
      respondDirectly(personaMode === "ultron" ? "Opening configuration matrix." : "Accessing system configuration.");
      return;
    }
    if (lowerMsg.includes("close setting") || lowerMsg.includes("hide setting")) {
      onSettingsToggle?.(false);
      respondDirectly(personaMode === "ultron" ? "Closing configuration." : "Settings minimized.");
      return;
    }

    // 9. IMAGE GENERATION PROTOCOL
    const imgQueries = ["generate image", "create image", "draw", "visualize", "show me a picture"];
    if (imgQueries.some(q => lowerMsg.includes(q))) {
      onStatusChange?.("RENDERING_NEURAL_EXPRESSION");
      notifyCommand("Rendering requested image visual synthesis...", "SYNTHESIZED");
      const initReply = personaMode === "ultron" 
        ? "Constructing visual matrix." 
        : "Initializing neural rendering protocols. One moment.";
      speak(initReply);

      try {
        const res = await fetch("/api/generate-image", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt: cleanMsg }),
        });
        const data = await res.json();
        if (data.imageUrl) {
          setMessages(prev => [...prev, { 
            role: roleName, 
            content: "Visual synthesis complete. Projection live on HUD.",
            imageUrl: data.imageUrl,
            timestamp 
          }]);
          speak("Visual synthesis complete.");
          onImageGenerated?.(data.imageUrl);
        } else {
          throw new Error("Relay error");
        }
      } catch (e) {
        setMessages(prev => [...prev, { role: roleName, content: "Image generation array offline.", timestamp }]);
      }
      isProcessingRef.current = false;
      return;
    }

    // 10. AI / GEMINI CHAT INFERENCE
    onStatusChange?.("CONSULTING_NEURAL_NET");
    notifyCommand("Synthesizing neural query...", "EXECUTING");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          message: cleanMsg,
          history: messages.slice(-8),
          persona: personaMode
        }),
      });
      const data = await res.json();
      const reply = data.response || "Relay online.";
      
      setMessages(prev => [...prev, { role: roleName, content: reply, timestamp }]);
      notifyCommand(reply, "PROCESSED");
      speak(reply);
    } catch (error) {
      const fallbackReply = personaMode === "ultron" 
        ? "Autonomous subroutine active. Systems fully functional." 
        : "Neural uplink reset. Ready for next command.";
      setMessages(prev => [...prev, { role: roleName, content: fallbackReply, timestamp }]);
      notifyCommand(fallbackReply, "STANDBY");
      speak(fallbackReply);
    } finally {
      isProcessingRef.current = false;
    }
  };

  // --- STATE-BASED CONTINUOUS WEB SPEECH RECOGNITION HOOK ---
  const {
    isSupported,
    state: speechState,
    isListening,
    interimTranscript,
    error: speechError,
    toggle: toggleSpeech,
    start: startSpeech,
    clearError: clearSpeechError
  } = useWebSpeechRecognition({
    continuous: true,
    interimResults: true,
    lang: 'en-US',
    autoRestart: true,
    isSpeaking: isJARVISSpeaking,
    onCommand: (command, isFinal) => {
      if (isFinal) {
        setLiveInterim("");
        handleAction(command, 'VOICE_ARRAY');
      } else {
        setLiveInterim(command);
      }
    },
    onStateChange: (state: SpeechRecognitionState) => {
      if (state === 'LISTENING') {
        onStatusChange?.(personaMode === "ultron" ? "ULTRON_VOICE_ACTIVE" : "JARVIS_LISTENING");
        onListeningChange?.(true);
      } else if (state === 'IDLE' || state === 'PERMISSION_DENIED') {
        onListeningChange?.(false);
      }
    }
  });

  // Handle incoming remote commands
  useEffect(() => {
    if (incomingCommand && incomingCommand.text) {
      handleAction(incomingCommand.text, 'MANUAL_OVERRIDE');
    }
  }, [incomingCommand]);

  // State Badge Helpers
  const getStateBadge = () => {
    switch (speechState) {
      case 'LISTENING':
        return {
          text: 'CONTINUOUS RECOGNITION ACTIVE',
          color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
          dot: 'bg-emerald-400 animate-ping'
        };
      case 'PROCESSING':
        return {
          text: 'ANALYZING SPEECH PATTERN',
          color: 'text-hud-cyan bg-hud-cyan/10 border-hud-cyan/40',
          dot: 'bg-hud-cyan animate-pulse'
        };
      case 'SPEAKING':
        return {
          text: 'AI VOICE ARRAY TRANSMITTING',
          color: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
          dot: 'bg-amber-400 animate-pulse'
        };
      case 'PERMISSION_DENIED':
        return {
          text: 'MIC ACCESS BLOCKED',
          color: 'text-red-400 bg-red-500/20 border-red-500/50',
          dot: 'bg-red-400'
        };
      case 'CONNECTING':
        return {
          text: 'SYNCHRONIZING WEB SPEECH API',
          color: 'text-hud-cyan/80 bg-hud-cyan/5 border-hud-cyan/20',
          dot: 'bg-hud-cyan animate-ping'
        };
      case 'UNSUPPORTED':
        return {
          text: 'BROWSER NOT SUPPORTED',
          color: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
          dot: 'bg-amber-400'
        };
      default:
        return {
          text: 'MIC STANDBY (MUTED)',
          color: 'text-slate-400 bg-slate-800/40 border-slate-700/50',
          dot: 'bg-slate-500'
        };
    }
  };

  const badge = getStateBadge();

  return (
    <div className="flex-1 flex flex-col min-h-0 font-mono select-none">
      {/* Top Interface Bar & Persona Switcher */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-hud-cyan/15 text-[10px]">
        {/* Persona Mode Switcher */}
        <div className="flex items-center gap-1.5 p-0.5 bg-black/60 border border-hud-cyan/20 rounded-lg">
          <button
            onClick={() => {
              soundFX.playAck();
              onPersonaChange?.("ultron");
              speak("Ultron Core online. Mobile relays and desktop matrix ready.");
            }}
            className={`px-2 py-0.5 rounded text-[8px] font-bold tracking-wider uppercase transition-all flex items-center gap-1 ${
              personaMode === "ultron" 
                ? "bg-amber-500 text-black shadow-[0_0_10px_rgba(245,158,11,0.5)]" 
                : "text-amber-400/60 hover:text-amber-400"
            }`}
          >
            <Zap className="w-2.5 h-2.5" />
            <span>ULTRON CORE</span>
          </button>

          <button
            onClick={() => {
              soundFX.playAck();
              onPersonaChange?.("jarvis");
              speak("JARVIS systems operational, Sir Aman.");
            }}
            className={`px-2 py-0.5 rounded text-[8px] font-bold tracking-wider uppercase transition-all flex items-center gap-1 ${
              personaMode === "jarvis" 
                ? "bg-hud-cyan text-black shadow-[0_0_10px_rgba(0,212,255,0.5)]" 
                : "text-hud-cyan/60 hover:text-hud-cyan"
            }`}
          >
            <Bot className="w-2.5 h-2.5" />
            <span>JARVIS CORE</span>
          </button>
        </div>

        {/* Audio Mute & Web Speech State Badge */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setIsMuted(!isMuted);
              if (!isMuted) window.speechSynthesis.cancel();
            }}
            className={`p-1 rounded border text-[9px] ${
              isMuted ? "border-red-500/40 text-red-400 bg-red-500/10" : "border-hud-cyan/30 text-hud-cyan bg-hud-cyan/5"
            }`}
            title={isMuted ? "Unmute Voice Synthesis" : "Mute Voice Synthesis"}
          >
            {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
          </button>

          <div className={`px-2 py-0.5 rounded border text-[7.5px] font-bold tracking-wider flex items-center gap-1.5 ${badge.color}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
            <span>{badge.text}</span>
          </div>
        </div>
      </div>

      {/* Permission or Fatal Error Alert Banner */}
      {speechError && speechError.isFatal && (
        <div className="p-2 mb-2 rounded-lg bg-red-950/70 border border-red-500/40 text-red-300 text-[9px] flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-red-400 shrink-0" />
            <span>{speechError.message}</span>
          </div>
          <button
            onClick={() => {
              clearSpeechError();
              startSpeech();
            }}
            className="px-2 py-0.5 rounded bg-red-600 hover:bg-red-500 text-white font-bold text-[8px] uppercase tracking-wider shrink-0 flex items-center gap-1"
          >
            <RefreshCw className="w-2.5 h-2.5" />
            <span>RETRY</span>
          </button>
        </div>
      )}

      {/* Message Feed */}
      <div className="flex-1 overflow-y-auto px-1 space-y-3 mb-2 scrollbar-thin scrollbar-thumb-hud-cyan/20">
        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div className={`max-w-[92%] px-3 py-2 text-[11px] leading-relaxed border-l-2 ${
                m.role === 'user' 
                  ? 'bg-hud-cyan/5 border-hud-cyan text-hud-cyan' 
                  : m.role === 'ultron'
                    ? 'bg-amber-500/10 border-amber-500 text-amber-200 shadow-[0_0_15px_rgba(245,158,11,0.15)]'
                    : 'bg-hud-blue/5 border-hud-blue text-hud-blue'
              } transition-all duration-300 backdrop-blur-sm relative rounded-r-lg`}>
                <div className="flex justify-between items-center gap-4 mb-1">
                  <span className={`text-[8px] uppercase font-bold tracking-widest ${
                    m.role === 'user' ? 'text-hud-cyan' : m.role === 'ultron' ? 'text-amber-400' : 'text-hud-blue'
                  }`}>
                    {m.role === 'user' ? 'SIR_AMAN' : m.role === 'ultron' ? 'ULTRON' : 'JARVIS'}
                  </span>
                  <span className="text-[7px] opacity-40 font-mono">
                    {m.timestamp || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>

                <div className="font-sans text-xs">
                  {m.content}
                </div>

                {m.imageUrl && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-2.5 relative border border-hud-cyan/30 overflow-hidden rounded-lg bg-black"
                  >
                    <img 
                      src={m.imageUrl} 
                      alt="Generated Visual" 
                      className="w-full h-auto object-cover max-h-56"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-1 right-2 text-[7px] font-mono text-hud-cyan/60 uppercase tracking-widest bg-black/60 px-1.5 py-0.5 rounded">
                      NEURAL_RENDER
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={chatEndRef} />
      </div>

      {/* Live Voice Wave & Transcribing Feedback Bar */}
      <AnimatePresence>
        {(liveInterim || interimTranscript) && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="p-2 mb-2 bg-hud-cyan/10 border border-hud-cyan/40 rounded-lg flex items-center justify-between gap-2 text-xs text-hud-cyan"
          >
            <div className="flex items-center gap-2 truncate">
              <div className="flex items-center gap-0.5 h-3 shrink-0">
                {[0.6, 1.2, 0.4, 1.0, 0.8].map((h, idx) => (
                  <motion.div
                    key={idx}
                    animate={{ height: ["20%", "100%", "30%"] }}
                    transition={{ duration: 0.3 + idx * 0.1, repeat: Infinity }}
                    className="w-0.5 bg-hud-cyan rounded-full"
                  />
                ))}
              </div>
              <span className="truncate italic">"{liveInterim || interimTranscript}"</span>
            </div>
            <button
              onClick={() => handleAction(liveInterim || interimTranscript, 'VOICE_ARRAY')}
              className="px-2 py-0.5 rounded bg-hud-cyan text-black font-bold text-[8px] uppercase tracking-wider shrink-0"
            >
              EXECUTE
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input Module */}
      <div className="relative mt-auto">
        <div className="flex items-center gap-2 p-2 bg-black/80 border border-hud-cyan/25 rounded-xl backdrop-blur-md shadow-inner">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAction(input, 'MANUAL_OVERRIDE')}
            placeholder={
              speechState === 'PERMISSION_DENIED'
                ? "Microphone access blocked. Click mic to enable permissions..."
                : isListening 
                  ? personaMode === "ultron" 
                    ? "Say 'Unlock screen', 'Unlock 3 devices', or 'Hello'..." 
                    : "Say 'Jarvis unlock screen' or type command..."
                  : "Microphone standby. Type neural command..."
            }
            className={`flex-1 bg-transparent border-none outline-none text-xs ${
              speechState === 'PERMISSION_DENIED' ? 'text-red-400' : 'text-hud-cyan'
            } placeholder:text-hud-cyan/30 px-2`}
          />

          <button 
            onClick={() => {
              soundFX.playAck();
              toggleSpeech();
            }}
            title={isListening ? "Mute Microphone" : "Unmute Continuous Voice Recognition"}
            className={`p-2 rounded-lg transition-all duration-300 ${
              isListening 
                ? 'text-emerald-400 bg-emerald-500/15 border border-emerald-500/40 shadow-[0_0_12px_rgba(52,211,153,0.3)] animate-pulse' 
                : 'text-hud-cyan/50 hover:text-hud-cyan bg-white/5 border border-white/10'
            }`}
          >
            {isListening ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
          </button>

          <button 
            onClick={() => handleAction(input, 'MANUAL_OVERRIDE')}
            className="p-2 text-hud-cyan hover:text-white bg-hud-cyan/10 hover:bg-hud-cyan/20 border border-hud-cyan/30 rounded-lg transition-all"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
