import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Bell, 
  Smartphone, 
  Zap, 
  MessageSquare, 
  Calendar, 
  ShieldAlert, 
  CheckCircle2, 
  ChevronRight, 
  Pause, 
  Play,
  Cpu,
  RefreshCw
} from "lucide-react";

export interface TickerItem {
  id: string;
  source: "ANDROID" | "AUTOMATION" | "SECURITY" | "SYSTEM";
  appName?: string;
  title: string;
  detail?: string;
  timestamp: string;
  severity?: "info" | "success" | "warning" | "alert";
}

const INITIAL_NOTIFICATIONS: TickerItem[] = [
  {
    id: "notif-1",
    source: "ANDROID",
    appName: "Calendar",
    title: "Upcoming Event",
    detail: "Stark Tech Summit keynote briefing in 15m",
    timestamp: "10:45 AM",
    severity: "info"
  },
  {
    id: "notif-2",
    source: "AUTOMATION",
    appName: "Tasker Relay",
    title: "Geofence Engaged",
    detail: "HQ Perimeter breach detection initialized for Sir Aman",
    timestamp: "10:44 AM",
    severity: "success"
  },
  {
    id: "notif-3",
    source: "ANDROID",
    appName: "WhatsApp",
    title: "Incoming Comm",
    detail: "Pepper Potts: 'Did you review the Q3 reactor schematics?'",
    timestamp: "10:42 AM",
    severity: "info"
  },
  {
    id: "notif-4",
    source: "SECURITY",
    appName: "Knox Vault",
    title: "Biometric Audit",
    detail: "Sir Aman voice-print telemetry verified [Match: 99.8%]",
    timestamp: "10:40 AM",
    severity: "success"
  },
  {
    id: "notif-5",
    source: "AUTOMATION",
    appName: "HomeAssistant",
    title: "Climate Sync",
    detail: "Workshop ambient temp locked at 21.5°C",
    timestamp: "10:38 AM",
    severity: "info"
  },
  {
    id: "notif-6",
    source: "SYSTEM",
    appName: "Omni Core",
    title: "Failover Key Matrix",
    detail: "Multi-Key failover array operating cleanly",
    timestamp: "10:35 AM",
    severity: "info"
  },
  {
    id: "notif-7",
    source: "ANDROID",
    appName: "Gmail",
    title: "Security Alert",
    detail: "New OAuth authorization token issued for Remote Terminal",
    timestamp: "10:30 AM",
    severity: "warning"
  }
];

interface NotificationTickerProps {
  currentStatus?: string;
}

export default function NotificationTicker({ currentStatus }: NotificationTickerProps) {
  const [items, setItems] = useState<TickerItem[]>(INITIAL_NOTIFICATIONS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [tickerMode, setTickerMode] = useState<"slide" | "scroll">("slide");

  // Dynamically inject a ticker item when systemStatus changes to a significant state
  useEffect(() => {
    if (currentStatus && currentStatus !== "AWAITING_COMMAND" && currentStatus !== "OMNI_STABLE") {
      const newItem: TickerItem = {
        id: `sys-${Date.now()}`,
        source: currentStatus.includes("TRIGGERING") ? "AUTOMATION" : "SYSTEM",
        appName: "HUD System",
        title: "Status Override",
        detail: `[PROTOCOL STATE] ${currentStatus}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        severity: currentStatus.includes("FAILURE") ? "alert" : "warning"
      };
      setItems((prev) => [newItem, ...prev.slice(0, 15)]);
      setCurrentIndex(0);
    }
  }, [currentStatus]);

  // Cycle through notifications automatically
  useEffect(() => {
    if (isPaused || items.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, items.length]);

  const currentItem = items[currentIndex];

  const getSourceBadge = (item: TickerItem) => {
    switch (item.source) {
      case "ANDROID":
        return {
          bg: "bg-cyan-950/80 text-cyan-400 border-cyan-500/40",
          icon: <Smartphone className="w-3 h-3 text-cyan-400" />,
          label: `ANDROID // ${item.appName || 'SYS'}`
        };
      case "AUTOMATION":
        return {
          bg: "bg-emerald-950/80 text-emerald-400 border-emerald-500/40",
          icon: <Zap className="w-3 h-3 text-emerald-400" />,
          label: `AUTO // ${item.appName || 'RELAY'}`
        };
      case "SECURITY":
        return {
          bg: "bg-amber-950/80 text-amber-400 border-amber-500/40",
          icon: <ShieldAlert className="w-3 h-3 text-amber-400" />,
          label: `SEC // ${item.appName || 'VAULT'}`
        };
      case "SYSTEM":
      default:
        return {
          bg: "bg-blue-950/80 text-blue-300 border-blue-500/40",
          icon: <Cpu className="w-3 h-3 text-blue-300" />,
          label: `SYSTEM // ${item.appName || 'CORE'}`
        };
    }
  };

  const getSeverityStyle = (severity?: string) => {
    switch (severity) {
      case "alert":
        return "border-red-500/50 text-red-400 shadow-[0_0_12px_rgba(239,68,68,0.2)]";
      case "warning":
        return "border-amber-500/50 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.2)]";
      case "success":
        return "border-emerald-500/50 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.2)]";
      default:
        return "border-hud-cyan/30 text-hud-cyan shadow-[0_0_12px_rgba(0,212,255,0.1)]";
    }
  };

  if (!currentItem) return null;
  const badge = getSourceBadge(currentItem);

  return (
    <div className="w-full mb-3 font-mono select-none">
      <div 
        className={`relative overflow-hidden rounded-xl border bg-black/80 backdrop-blur-md px-3 py-2 flex items-center justify-between gap-3 transition-colors duration-300 ${getSeverityStyle(currentItem.severity)}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Subtle Scanline Highlight */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-hud-cyan/5 to-transparent animate-pulse pointer-events-none" />
        
        {/* Left Side: Live Alert Icon & Category */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="relative">
            <div className="w-2 h-2 rounded-full bg-hud-cyan animate-ping absolute top-0 left-0" />
            <div className="w-2 h-2 rounded-full bg-hud-cyan relative" />
          </div>
          
          <div className={`px-2 py-0.5 rounded border text-[9px] font-bold tracking-wider uppercase flex items-center gap-1.5 ${badge.bg}`}>
            {badge.icon}
            <span>{badge.label}</span>
          </div>
        </div>

        {/* Center: Animated Content Ticker */}
        <div className="flex-1 overflow-hidden relative h-5 flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentItem.id}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="w-full flex items-center gap-2 text-[11px] truncate tracking-wide"
            >
              <span className="font-bold text-white uppercase tracking-wider shrink-0">
                {currentItem.title}:
              </span>
              <span className="text-hud-cyan/90 truncate font-mono">
                {currentItem.detail}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Timestamp & Ticker Controls */}
        <div className="flex items-center gap-3 shrink-0 text-[9px] text-hud-cyan/60">
          <span className="hidden sm:inline-block font-mono bg-hud-cyan/10 px-1.5 py-0.5 rounded border border-hud-cyan/20">
            {currentItem.timestamp}
          </span>
          
          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsPaused(!isPaused)}
              title={isPaused ? "Resume Ticker" : "Pause Ticker"}
              className="p-1 hover:text-white transition-colors rounded hover:bg-hud-cyan/10"
            >
              {isPaused ? <Play className="w-3 h-3 text-amber-400" /> : <Pause className="w-3 h-3" />}
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % items.length)}
              title="Next Notification"
              className="p-1 hover:text-white transition-colors rounded hover:bg-hud-cyan/10"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            <span className="text-[8px] font-mono text-hud-cyan/40 ml-1">
              {currentIndex + 1}/{items.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
