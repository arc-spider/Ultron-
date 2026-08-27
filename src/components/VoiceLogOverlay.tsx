import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Terminal, 
  ChevronUp, 
  ChevronDown, 
  Trash2, 
  Mic, 
  Zap, 
  Sparkles, 
  CheckCircle2, 
  Copy, 
  Check, 
  CornerDownRight,
  Radio
} from "lucide-react";

export interface VoiceCommandLog {
  id: string;
  command: string;
  response?: string;
  timestamp: string;
  status: 'PROCESSED' | 'EXECUTING' | 'INTERRUPTED' | 'SYNTHESIZED' | 'OVERRIDE' | 'STANDBY';
  source: 'VOICE_ARRAY' | 'PREDICTIVE_RELAY' | 'MANUAL_OVERRIDE';
}

const STORAGE_KEY = "jarvis_voice_command_vault";

const DEFAULT_INITIAL_LOGS: VoiceCommandLog[] = [
  {
    id: "vlog-1",
    command: "Jarvis, run full diagnostic on arc core and neural sync arrays",
    response: "Neural sync at 99.98%. All core magnetic containment fields are fully stabilized.",
    timestamp: "10:42:15",
    status: "PROCESSED",
    source: "VOICE_ARRAY"
  },
  {
    id: "vlog-2",
    command: "Jarvis, isolate engine assembly for quantum variance inspection",
    response: "Isolating engine subsystem. Magnetic containment adjusted for telemetry analysis.",
    timestamp: "10:44:02",
    status: "SYNTHESIZED",
    source: "VOICE_ARRAY"
  },
  {
    id: "vlog-3",
    command: "Authorize Code Red override protocols for Sir Aman",
    response: "Voice print verified. System override enabled. All mobile relays primed.",
    timestamp: "10:45:50",
    status: "OVERRIDE",
    source: "VOICE_ARRAY"
  }
];

interface VoiceLogOverlayProps {
  currentStatus?: string;
  latestCommand?: VoiceCommandLog | null;
  onClearLogs?: () => void;
  onReplayCommand?: (cmd: string) => void;
  isListening?: boolean;
  isSpeaking?: boolean;
}

export default function VoiceLogOverlay({
  currentStatus,
  latestCommand,
  onClearLogs,
  onReplayCommand,
  isListening = true,
  isSpeaking = false
}: VoiceLogOverlayProps) {
  const [logs, setLogs] = useState<VoiceCommandLog[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.warn("Could not load command logs from storage", e);
    }
    return DEFAULT_INITIAL_LOGS;
  });

  const [isExpanded, setIsExpanded] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Typewriter effect states for the most recent / active command
  const [typewriterText, setTypewriterText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const typewriterTargetRef = useRef("");
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Save logs to localStorage whenever they update
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(logs.slice(0, 50)));
    } catch (e) {
      console.warn("Failed to persist command logs", e);
    }
  }, [logs]);

  // When a new command arrives from external props
  useEffect(() => {
    if (latestCommand && latestCommand.id) {
      setLogs(prev => {
        // Prevent duplicate appending
        if (prev.some(l => l.id === latestCommand.id)) return prev;
        return [latestCommand, ...prev].slice(0, 50);
      });
    }
  }, [latestCommand]);

  // Run typewriter effect on the newest log entry whenever logs update
  const activeLog = logs[0];

  useEffect(() => {
    if (!activeLog) {
      setTypewriterText("");
      return;
    }

    const target = activeLog.command;
    typewriterTargetRef.current = target;
    setTypewriterText("");
    setIsTyping(true);

    if (typingTimerRef.current) clearInterval(typingTimerRef.current);

    let charIndex = 0;
    typingTimerRef.current = setInterval(() => {
      if (charIndex < target.length) {
        charIndex++;
        setTypewriterText(target.slice(0, charIndex));
      } else {
        setIsTyping(false);
        if (typingTimerRef.current) clearInterval(typingTimerRef.current);
      }
    }, 28); // 28ms per character for brisk cybernetic typewriter feel

    return () => {
      if (typingTimerRef.current) clearInterval(typingTimerRef.current);
    };
  }, [activeLog?.id, activeLog?.command]);

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLogs([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
    onClearLogs?.();
  };

  const handleCopy = (id: string, text: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard?.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getStatusBadge = (status: VoiceCommandLog['status']) => {
    switch (status) {
      case 'OVERRIDE':
        return 'text-red-400 bg-red-950/70 border-red-500/40';
      case 'SYNTHESIZED':
        return 'text-amber-300 bg-amber-950/70 border-amber-500/40';
      case 'INTERRUPTED':
        return 'text-emerald-400 bg-emerald-950/70 border-emerald-500/40';
      case 'EXECUTING':
        return 'text-hud-gold bg-amber-950/50 border-hud-gold/50 animate-pulse';
      case 'PROCESSED':
      default:
        return 'text-hud-cyan bg-cyan-950/70 border-hud-cyan/40';
    }
  };

  return (
    <div className="w-full max-w-sm md:max-w-md font-mono select-none pointer-events-auto">
      <motion.div
        layout
        className="relative overflow-hidden rounded-2xl border border-hud-cyan/30 bg-black/85 backdrop-blur-xl shadow-[0_0_30px_rgba(0,212,255,0.12)] transition-all duration-300"
      >
        {/* Subtle Scanline Overlay */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent,transparent_2px,rgba(0,212,255,0.02)_3px)] pointer-events-none" />
        
        {/* Top Header Bar */}
        <div 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between px-3.5 py-2.5 bg-hud-cyan/5 border-b border-hud-cyan/20 cursor-pointer hover:bg-hud-cyan/10 transition-colors"
        >
          <div className="flex items-center gap-2">
            <div className="relative flex items-center justify-center">
              <div className={`w-2 h-2 rounded-full ${isSpeaking ? 'bg-hud-gold animate-ping' : isListening ? 'bg-hud-cyan' : 'bg-red-500'}`} />
              <div className={`w-2 h-2 rounded-full absolute ${isSpeaking ? 'bg-hud-gold' : isListening ? 'bg-hud-cyan' : 'bg-red-500'}`} />
            </div>

            <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase text-white">
              <Terminal className="w-3.5 h-3.5 text-hud-cyan" />
              <span>VOICE LOG PERSISTENCE</span>
            </div>

            <span className="text-[8px] px-1.5 py-0.5 rounded bg-hud-cyan/10 border border-hud-cyan/30 text-hud-cyan font-mono font-bold">
              {logs.length} LOGS
            </span>
          </div>

          <div className="flex items-center gap-1 text-hud-cyan/70">
            {logs.length > 0 && (
              <button
                onClick={handleClear}
                title="Clear Log History"
                className="p-1 hover:text-red-400 hover:bg-red-950/40 rounded transition-colors mr-1"
              >
                <Trash2 className="w-3 h-3" />
              </button>
            )}
            <button 
              className="p-1 hover:text-white rounded transition-colors"
              title={isExpanded ? "Collapse History" : "Expand History"}
            >
              {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Live Typewriter Display of Latest Command */}
        <div className="p-3 bg-black/60 border-b border-hud-cyan/15">
          <div className="flex items-center justify-between text-[9px] text-hud-cyan/60 mb-1.5">
            <div className="flex items-center gap-1.5">
              <Mic className="w-2.5 h-2.5 text-hud-cyan animate-pulse" />
              <span className="tracking-widest uppercase">
                {activeLog ? `LATEST TRANSMISSION // [${activeLog.timestamp}]` : "AWAITING TRANSMISSION..."}
              </span>
            </div>
            {activeLog && (
              <span className={`text-[8px] px-1.5 py-0.2 rounded border font-bold ${getStatusBadge(activeLog.status)}`}>
                {activeLog.status}
              </span>
            )}
          </div>

          {/* Typewriter Text Box */}
          <div className="min-h-[42px] bg-hud-cyan/5 border border-hud-cyan/20 rounded-lg p-2.5 text-[11px] leading-relaxed text-hud-cyan flex items-start justify-between gap-2">
            <div className="flex-1 font-mono break-words">
              <span className="text-white font-bold mr-1">JARVIS &gt;</span>
              {activeLog ? (
                <span>
                  &ldquo;{typewriterText}&rdquo;
                  {isTyping && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                      className="inline-block w-2 h-3.5 bg-hud-cyan ml-1 align-middle shadow-[0_0_8px_#00d4ff]"
                    />
                  )}
                </span>
              ) : (
                <span className="text-hud-cyan/40 italic">
                  Say &quot;Jarvis...&quot; to issue voice commands into the HUD
                </span>
              )}
            </div>

            {activeLog && (
              <button
                onClick={(e) => handleCopy(activeLog.id, activeLog.command, e)}
                title="Copy Transcript"
                className="shrink-0 p-1 text-hud-cyan/50 hover:text-hud-cyan hover:bg-hud-cyan/10 rounded transition-colors"
              >
                {copiedId === activeLog.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              </button>
            )}
          </div>

          {/* Active Response Snippet if available */}
          {activeLog?.response && (
            <div className="mt-2 pl-3 border-l-2 border-emerald-500/40 text-[10px] text-emerald-300/90 font-mono flex items-start gap-1.5">
              <CornerDownRight className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
              <p className="line-clamp-2 italic">
                {activeLog.response}
              </p>
            </div>
          )}
        </div>

        {/* Expandable Scrollable History Matrix */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden bg-black/90"
            >
              <div className="max-h-56 overflow-y-auto p-2 space-y-1.5 scrollbar-thin scrollbar-thumb-hud-cyan/20 divide-y divide-hud-cyan/10">
                {logs.map((log, idx) => (
                  <div 
                    key={log.id || idx}
                    className="pt-2 first:pt-0 group hover:bg-hud-cyan/5 p-1.5 rounded transition-colors"
                  >
                    <div className="flex items-center justify-between text-[8px] text-hud-cyan/50 mb-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-hud-cyan/40">#{String(logs.length - idx).padStart(3, '0')}</span>
                        <span className="font-mono text-white/70">[{log.timestamp}]</span>
                        <span className="text-[7px] text-hud-cyan/40 uppercase">[{log.source}]</span>
                      </div>
                      <span className={`px-1 py-0.2 rounded border text-[7px] font-bold ${getStatusBadge(log.status)}`}>
                        {log.status}
                      </span>
                    </div>

                    <div className="text-[10px] text-hud-cyan font-mono pl-1 flex items-start justify-between gap-2">
                      <span className="line-clamp-2">
                        &ldquo;{log.command}&rdquo;
                      </span>

                      <div className="flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                        {onReplayCommand && (
                          <button
                            onClick={() => onReplayCommand(log.command)}
                            title="Re-execute Command"
                            className="p-1 hover:text-hud-gold hover:bg-hud-gold/10 rounded text-hud-cyan/60"
                          >
                            <Zap className="w-2.5 h-2.5" />
                          </button>
                        )}
                        <button
                          onClick={(e) => handleCopy(log.id, log.command, e)}
                          title="Copy text"
                          className="p-1 hover:text-white hover:bg-hud-cyan/10 rounded text-hud-cyan/60"
                        >
                          {copiedId === log.id ? <Check className="w-2.5 h-2.5 text-emerald-400" /> : <Copy className="w-2.5 h-2.5" />}
                        </button>
                      </div>
                    </div>

                    {log.response && (
                      <div className="text-[8px] text-hud-cyan/60 font-mono pl-3 border-l border-hud-cyan/20 mt-1 line-clamp-1 italic">
                        {log.response}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Status Indicators */}
        <div className="px-3 py-1.5 bg-hud-cyan/5 border-t border-hud-cyan/10 flex items-center justify-between text-[8px] text-hud-cyan/50 font-mono">
          <div className="flex items-center gap-2">
            <Radio className={`w-2.5 h-2.5 ${isListening ? 'text-emerald-400 animate-pulse' : 'text-red-400'}`} />
            <span>MIC STATUS: {isListening ? 'STREAMING ACTIVE' : 'MUTED'}</span>
          </div>
          <div className="text-[7px] text-hud-cyan/40">
            VAULT: LOCAL_STORAGE_SYNC
          </div>
        </div>
      </motion.div>
    </div>
  );
}
