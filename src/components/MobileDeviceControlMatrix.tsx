import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Smartphone, 
  Lock, 
  Unlock, 
  Play, 
  Pause, 
  Wifi, 
  Battery, 
  Volume2, 
  CheckCircle2, 
  ExternalLink,
  Radio,
  RefreshCw,
  Tv,
  Share2,
  Sparkles
} from "lucide-react";
import { soundFX } from "../utils/audioFX";

export interface MobileDevice {
  id: string;
  name: string;
  model: string;
  isUnlocked: boolean;
  battery: number;
  wifiSignal: number;
  currentApp: "locked" | "home" | "youtube" | "standby";
  isPlayingMusic: boolean;
  webhookEndpoint?: string;
  lastAction?: string;
}

interface MobileDeviceControlMatrixProps {
  devices: MobileDevice[];
  onToggleDeviceLock: (deviceId: string) => void;
  onUnlockAllDevices: () => void;
  onLockAllDevices: () => void;
  onPlaySongAllDevices: (songName?: string) => void;
  onStopSongAllDevices: () => void;
  onUpdateWebhook?: (deviceId: string, url: string) => void;
  personaMode?: "ultron" | "jarvis";
  className?: string;
}

export default function MobileDeviceControlMatrix({
  devices,
  onToggleDeviceLock,
  onUnlockAllDevices,
  onLockAllDevices,
  onPlaySongAllDevices,
  onStopSongAllDevices,
  onUpdateWebhook,
  personaMode = "ultron",
  className = ""
}: MobileDeviceControlMatrixProps) {
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
  const [customSong, setCustomSong] = useState("Starboy (Ultron Remix)");
  const [activeTab, setActiveTab] = useState<"visual" | "webhooks">("visual");

  const isAllUnlocked = devices.every(d => d.isUnlocked);
  const isAnyPlaying = devices.some(d => d.isPlayingMusic);

  const themeColors = personaMode === "ultron" 
    ? {
        border: "border-amber-500/30",
        borderHover: "hover:border-amber-500/60",
        accent: "text-amber-400",
        bg: "bg-amber-500/10",
        glow: "shadow-[0_0_20px_rgba(245,158,11,0.25)]",
        gradient: "from-amber-500/20 via-red-500/10 to-transparent",
        button: "bg-gradient-to-r from-amber-600 to-red-600 text-black",
      }
    : {
        border: "border-hud-cyan/30",
        borderHover: "hover:border-hud-cyan/60",
        accent: "text-hud-cyan",
        bg: "bg-hud-cyan/10",
        glow: "shadow-[0_0_20px_rgba(0,212,255,0.25)]",
        gradient: "from-hud-cyan/20 via-blue-500/10 to-transparent",
        button: "bg-gradient-to-r from-hud-cyan to-blue-600 text-black",
      };

  return (
    <div className={`flex flex-col gap-4 font-mono select-none ${className}`}>
      {/* Matrix Header & Master Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-black/70 border border-hud-cyan/20 rounded-xl backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className={`p-1.5 rounded-lg border ${themeColors.border} ${themeColors.bg}`}>
            <Smartphone className={`w-4 h-4 ${themeColors.accent} animate-pulse`} />
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold text-white tracking-widest flex items-center gap-2">
              <span>MOBILE DEVICE RELAY MATRIX</span>
              <span className="text-[8px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                3 ONLINE
              </span>
            </div>
            <div className="text-[8px] text-hud-cyan/50">
              TASKER // MACRODROID // ADB RELAY BRIDGE
            </div>
          </div>
        </div>

        {/* Master Action Trigger Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              if (isAllUnlocked) {
                soundFX.playLock();
                onLockAllDevices();
              } else {
                soundFX.playUnlock();
                onUnlockAllDevices();
              }
            }}
            className={`px-2.5 py-1 rounded text-[9px] font-bold tracking-wider uppercase border transition-all flex items-center gap-1.5 ${
              isAllUnlocked 
                ? "bg-amber-500/20 border-amber-500/50 text-amber-300 hover:bg-amber-500/30"
                : "bg-emerald-500/20 border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/30 shadow-[0_0_12px_rgba(52,211,153,0.3)]"
            }`}
          >
            {isAllUnlocked ? (
              <>
                <Lock className="w-3 h-3 text-amber-400" />
                <span>LOCK ALL 3</span>
              </>
            ) : (
              <>
                <Unlock className="w-3 h-3 text-emerald-400" />
                <span>UNLOCK ALL 3</span>
              </>
            )}
          </button>

          <button
            onClick={() => {
              if (isAnyPlaying) {
                onStopSongAllDevices();
              } else {
                soundFX.playDeviceSync();
                onPlaySongAllDevices(customSong);
              }
            }}
            className={`px-2.5 py-1 rounded text-[9px] font-bold tracking-wider uppercase border transition-all flex items-center gap-1.5 ${
              isAnyPlaying 
                ? "bg-red-500/20 border-red-500 text-red-300"
                : "bg-hud-cyan/20 border-hud-cyan/50 text-hud-cyan hover:bg-hud-cyan/30 shadow-[0_0_12px_rgba(0,212,255,0.3)]"
            }`}
          >
            {isAnyPlaying ? (
              <>
                <Pause className="w-3 h-3 text-red-400" />
                <span>STOP MEDIA</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-hud-cyan" />
                <span>PLAY SYNCED SONG</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 3 Mobile Devices Visual Grid (Simulating the 3 phones on desk from video) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {devices.map((device, idx) => {
          const isUnlocked = device.isUnlocked;
          const isPlaying = device.isPlayingMusic;

          return (
            <motion.div
              key={device.id}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              onClick={() => onToggleDeviceLock(device.id)}
              className={`p-3 rounded-xl border bg-black/80 backdrop-blur-md cursor-pointer transition-all flex flex-col justify-between relative overflow-hidden group ${
                isUnlocked 
                  ? "border-emerald-500/40 shadow-[0_0_20px_rgba(52,211,153,0.15)]" 
                  : "border-hud-cyan/20 hover:border-hud-cyan/40"
              }`}
            >
              {/* Top Device Header */}
              <div className="flex justify-between items-center mb-2 z-10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[9px] font-bold text-white uppercase tracking-wider">{device.name}</span>
                </div>
                <div className="flex items-center gap-2 text-[8px] text-hud-cyan/60">
                  <div className="flex items-center gap-0.5">
                    <Wifi className="w-2.5 h-2.5 text-hud-cyan" />
                    <span>{device.wifiSignal}%</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <Battery className="w-2.5 h-2.5 text-emerald-400" />
                    <span>{device.battery}%</span>
                  </div>
                </div>
              </div>

              {/* Realistic Mobile Screen Mockup */}
              <div className={`w-full aspect-[9/16] max-h-48 rounded-lg border relative overflow-hidden transition-all duration-500 flex flex-col items-center justify-center p-2.5 ${
                isUnlocked 
                  ? isPlaying 
                    ? "bg-gradient-to-b from-red-950 via-black to-zinc-950 border-red-500/40"
                    : "bg-gradient-to-b from-indigo-950 via-black to-zinc-950 border-emerald-500/30"
                  : "bg-zinc-950 border-hud-cyan/20"
              }`}>
                {/* Status Bar */}
                <div className="absolute top-1 inset-x-2 flex justify-between items-center text-[7px] text-white/50 font-mono">
                  <span>09:41</span>
                  <div className="w-8 h-1.5 bg-black/80 rounded-full border border-white/20" />
                  <span>5G</span>
                </div>

                {/* Screen Content State */}
                <AnimatePresence mode="wait">
                  {!isUnlocked ? (
                    // LOCKED SCREEN
                    <motion.div
                      key="locked"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.1 }}
                      className="flex flex-col items-center gap-1 text-center"
                    >
                      <div className="p-2 rounded-full bg-white/5 border border-white/10 mb-1">
                        <Lock className="w-4 h-4 text-hud-cyan/80 animate-pulse" />
                      </div>
                      <div className="text-sm font-bold text-white/90">09:41</div>
                      <div className="text-[7px] text-white/40 uppercase tracking-widest">Swipe to Unlock</div>
                      <div className="mt-2 px-2 py-0.5 rounded-full bg-hud-cyan/10 border border-hud-cyan/30 text-[7px] text-hud-cyan">
                        RELAY SECURED
                      </div>
                    </motion.div>
                  ) : isPlaying ? (
                    // YOUTUBE / MEDIA PLAYING SCREEN
                    <motion.div
                      key="youtube"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-full flex flex-col items-center justify-between h-full pt-4 pb-1 text-center"
                    >
                      <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-red-600 text-[6px] font-bold text-white uppercase tracking-wider">
                        <Play className="w-2 h-2 fill-white" />
                        <span>YouTube Active</span>
                      </div>

                      {/* Video / Album Art Hologram */}
                      <div className="w-16 h-16 rounded-md bg-gradient-to-tr from-amber-600 to-red-600 p-0.5 shadow-[0_0_15px_rgba(239,68,68,0.4)] relative flex items-center justify-center">
                        <div className="absolute inset-0 bg-black/40 rounded" />
                        <Sparkles className="w-6 h-6 text-white relative z-10 animate-bounce" />
                      </div>

                      {/* Live Audio Visualizer Wave */}
                      <div className="w-full flex items-center justify-center gap-0.5 h-4">
                        {[0.8, 1.2, 0.5, 1.5, 0.9, 1.1, 0.7, 1.3, 0.6].map((scale, i) => (
                          <motion.div
                            key={i}
                            animate={{ height: ["20%", "100%", "30%"] }}
                            transition={{ duration: 0.4 + i * 0.08, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1 bg-red-400 rounded-full"
                          />
                        ))}
                      </div>

                      <div className="text-[7px] font-bold text-white truncate max-w-full">
                        {customSong}
                      </div>
                    </motion.div>
                  ) : (
                    // UNLOCKED HOME SCREEN
                    <motion.div
                      key="home"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-full flex flex-col items-center justify-between h-full pt-4 pb-1"
                    >
                      <div className="grid grid-cols-3 gap-1.5 w-full px-1">
                        {["UI", "Maps", "Media", "Dialer", "Cam", "Relay"].map((app, i) => (
                          <div key={app} className="flex flex-col items-center gap-0.5">
                            <div className={`w-5 h-5 rounded-md border flex items-center justify-center text-[6px] font-bold ${
                              i === 2 
                                ? "bg-red-500/20 border-red-500/40 text-red-300" 
                                : "bg-white/10 border-white/20 text-white"
                            }`}>
                              {app[0]}
                            </div>
                            <span className="text-[5px] text-white/60">{app}</span>
                          </div>
                        ))}
                      </div>

                      <div className="px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/40 text-[7px] text-emerald-300 font-bold uppercase">
                        SCREEN UNLOCKED
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-2.5 pt-2 border-t border-hud-cyan/10 flex justify-between items-center text-[8px] font-mono">
                <span className="text-hud-cyan/50">{device.model}</span>
                <span className={`font-bold ${isUnlocked ? "text-emerald-400" : "text-amber-400"}`}>
                  {isUnlocked ? "UNLOCKED" : "LOCKED"}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Voice Prompt Suggestions directly mirroring video commands */}
      <div className="p-3 bg-hud-cyan/5 border border-hud-cyan/15 rounded-xl flex flex-col gap-2">
        <div className="text-[9px] uppercase font-bold text-hud-cyan/70 tracking-widest flex items-center gap-1.5">
          <Radio className="w-3 h-3 text-hud-cyan animate-pulse" />
          <span>VOICE COMMAND TRIGGERS (AS SEEN IN SAGAR TAMANG'S ULTRON VIDEO)</span>
        </div>
        <div className="flex flex-wrap gap-2 text-[9px] font-mono">
          {[
            "Hello",
            "Can you unlock my screen?",
            "Unlock all three mobile devices",
            "Play my favorite song in all three devices",
            "Lock screen",
            "Lock all mobile devices"
          ].map((cmd) => (
            <button
              key={cmd}
              onClick={() => {
                soundFX.playAck();
                if (cmd.includes("unlock my screen")) {
                  onToggleDeviceLock("desktop");
                } else if (cmd.includes("all three mobile")) {
                  onUnlockAllDevices();
                } else if (cmd.includes("favorite song")) {
                  onPlaySongAllDevices();
                } else if (cmd.includes("Lock all")) {
                  onLockAllDevices();
                }
              }}
              className="px-2.5 py-1 rounded bg-black/60 border border-hud-cyan/30 text-hud-cyan hover:border-emerald-400 hover:text-white transition-all text-left flex items-center gap-1"
            >
              <span className="text-emerald-400 font-bold">"</span>
              <span>{cmd}</span>
              <span className="text-emerald-400 font-bold">"</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
