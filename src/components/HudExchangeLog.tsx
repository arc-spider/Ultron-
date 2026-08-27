import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Cpu, Volume2, VolumeX, Sparkles } from 'lucide-react';

export interface HudMessage {
  id: string;
  role: 'user' | 'model';
  senderName: string;
  text: string;
  timestamp: number;
  isStreaming?: boolean;
}

interface HudExchangeLogProps {
  messages: HudMessage[];
  conversationState: "standby" | "listening" | "thinking" | "speaking";
  isSpeaking: boolean;
  isMuted: boolean;
  isSessionActive: boolean;
}

export default function HudExchangeLog({
  messages,
  conversationState,
  isSpeaking,
  isMuted,
  isSessionActive,
}: HudExchangeLogProps) {
  const [now, setNow] = useState(Date.now());

  // Clock ticker for calculating opacity decay as message approaches 10s inactivity limit
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      id="hud-exchange-log"
      className="w-full max-w-2xl flex flex-col gap-2.5 pointer-events-auto"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {messages.map((msg, index) => {
          const ageMs = now - msg.timestamp;
          // After 7 seconds of inactivity, start subtle fading out towards 10s
          const isExpiring = ageMs > 7000 && !msg.isStreaming;
          const remainingSec = Math.max(0, Math.ceil((10000 - ageMs) / 1000));
          const isUser = msg.role === 'user';
          const isLatest = index === messages.length - 1;

          return (
            <motion.div
              key={msg.id}
              layout
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ 
                opacity: isExpiring ? 0.45 : 1, 
                y: 0, 
                scale: 1 
              }}
              exit={{ 
                opacity: 0, 
                y: -14, 
                scale: 0.94,
                filter: "blur(4px)",
                transition: { duration: 0.6, ease: "easeOut" } 
              }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className={`relative flex flex-col ${
                isUser ? "self-end max-w-[85%]" : "self-start w-full"
              }`}
            >
              {isUser ? (
                /* USER / AMAN HUD BUBBLE */
                <div 
                  id={`hud-msg-${msg.id}`}
                  className="relative group bg-gradient-to-r from-amber-950/40 to-black/80 border border-amber-500/35 rounded-2xl rounded-tr-sm p-2.5 px-3.5 backdrop-blur-xl shadow-[0_0_20px_rgba(245,158,11,0.12)] flex items-start gap-2.5 overflow-hidden"
                >
                  {/* Subtle Scanline Highlight */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
                  
                  <User className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <span className="text-[8px] tracking-widest text-amber-400 font-bold uppercase">
                        {msg.senderName || "AMAN"}
                      </span>
                      {isExpiring && (
                        <span className="text-[7.5px] text-amber-500/60 font-mono tracking-tighter">
                          FADING {remainingSec}s
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-amber-200 font-sans leading-relaxed break-words">
                      {msg.text}
                      {msg.isStreaming && (
                        <span className="inline-block w-1.5 h-3 ml-1 bg-amber-400 animate-pulse align-middle" />
                      )}
                    </p>
                  </div>
                </div>
              ) : (
                /* ULTRON RESPONSE HUD BUBBLE */
                <div 
                  id={`hud-msg-${msg.id}`}
                  className="relative group w-full bg-black/90 border border-amber-500/45 rounded-2xl rounded-tl-sm p-3.5 px-4 backdrop-blur-2xl shadow-[0_0_35px_rgba(245,158,11,0.22)] flex items-start gap-3 overflow-hidden"
                >
                  {/* Top HUD Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-amber-400/60 via-amber-500/20 to-transparent" />
                  
                  <div className="relative flex items-center justify-center shrink-0 mt-0.5">
                    {msg.isStreaming || (isLatest && conversationState === "thinking") ? (
                      <Cpu className="w-4 h-4 text-amber-400 animate-pulse" />
                    ) : (
                      <>
                        <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping opacity-75" />
                        <span className="absolute w-2 h-2 rounded-full bg-amber-400" />
                      </>
                    )}
                  </div>

                  <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[8.5px] tracking-[0.25em] text-amber-400 font-bold uppercase">
                          ULTRON
                        </span>
                        {isSessionActive && isLatest && (
                          <span className="text-[7.5px] text-emerald-400 border border-emerald-500/40 px-1 py-0.2 rounded font-mono">
                            CONTINUOUS
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        {isLatest && isSpeaking && !isMuted && (
                          <span className="text-[7.5px] text-amber-400/90 tracking-widest uppercase flex items-center gap-1">
                            <Volume2 className="w-2.5 h-2.5 text-amber-400 animate-pulse" />
                            <span>VOICE ACTIVE</span>
                          </span>
                        )}

                        {isMuted && isLatest && (
                          <span className="text-[7.5px] text-red-400/80 tracking-widest uppercase flex items-center gap-1">
                            <VolumeX className="w-2.5 h-2.5 text-red-400" />
                            <span>MUTED</span>
                          </span>
                        )}

                        {isExpiring && (
                          <span className="text-[7.5px] text-amber-500/60 font-mono tracking-tighter">
                            FADING {remainingSec}s
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-xs md:text-sm font-medium text-white font-sans tracking-wide leading-relaxed break-words">
                      {msg.text}
                      {(msg.isStreaming || (isLatest && isSpeaking)) && (
                        <span className="inline-block w-1.5 h-3.5 ml-1 bg-amber-400 animate-pulse align-middle" />
                      )}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
