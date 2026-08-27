import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Cpu, 
  HardDrive, 
  Activity, 
  Wifi, 
  Zap, 
  Server, 
  Radio, 
  ArrowUpRight, 
  ArrowDownRight,
  RefreshCw,
  Flame,
  Layers
} from "lucide-react";

export interface MetricData {
  cpu: {
    usage: number; // percentage 0-100
    temperature: number; // in °C
    frequency: number; // in GHz
    cores: number[]; // core loads
  };
  memory: {
    usedGB: number;
    totalGB: number;
    usagePercent: number;
    cachedGB: number;
  };
  network: {
    latencyMs: number;
    jitterMs: number;
    downloadMbps: number;
    uploadMbps: number;
    packetLoss: number;
  };
  power: {
    fluxWatts: number;
    stability: number;
  };
}

interface SystemMetricsMonitorProps {
  compact?: boolean;
  className?: string;
}

export default function SystemMetricsMonitor({ compact = false, className = "" }: SystemMetricsMonitorProps) {
  const [metrics, setMetrics] = useState<MetricData>({
    cpu: {
      usage: 42,
      temperature: 46.5,
      frequency: 4.85,
      cores: [38, 48, 41, 45]
    },
    memory: {
      usedGB: 18.2,
      totalGB: 32.0,
      usagePercent: 56.8,
      cachedGB: 6.4
    },
    network: {
      latencyMs: 14,
      jitterMs: 1.2,
      downloadMbps: 845.2,
      uploadMbps: 312.8,
      packetLoss: 0.0
    },
    power: {
      fluxWatts: 340,
      stability: 99.8
    }
  });

  const [history, setHistory] = useState<number[]>([40, 42, 39, 45, 43, 47, 42]);
  const [isSurging, setIsSurging] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "cores">("all");

  // Periodic metrics update every 2.8 seconds with realistic variance
  useEffect(() => {
    const updateMetrics = () => {
      setMetrics((prev) => {
        const surgeFactor = isSurging ? 1.45 : 1.0;
        
        // CPU simulation
        const cpuBase = 38 + Math.random() * 22;
        const targetCpu = Math.min(99, Math.max(15, Math.round(cpuBase * surgeFactor)));
        const targetTemp = Number((43 + (targetCpu * 0.28) + (Math.random() * 2 - 1)).toFixed(1));
        const targetFreq = Number((4.6 + (targetCpu / 100) * 0.6 + (Math.random() * 0.1 - 0.05)).toFixed(2));
        
        const cores = prev.cpu.cores.map(() => 
          Math.min(99, Math.max(10, Math.round((targetCpu + (Math.random() * 18 - 9)))))
        );

        // Memory simulation
        const memVariation = (Math.random() * 0.6 - 0.3);
        const usedGB = Number(Math.min(31.2, Math.max(14.0, prev.memory.usedGB + memVariation)).toFixed(1));
        const usagePercent = Number(((usedGB / prev.memory.totalGB) * 100).toFixed(1));
        const cachedGB = Number((5.8 + Math.random() * 1.2).toFixed(1));

        // Network simulation
        const latencyMs = Math.max(6, Math.round(12 + (Math.random() * 10 - 4) + (isSurging ? 15 : 0)));
        const jitterMs = Number((0.8 + Math.random() * 1.4).toFixed(1));
        const downloadMbps = Number((820 + Math.random() * 95 - 40).toFixed(1));
        const uploadMbps = Number((295 + Math.random() * 45 - 20).toFixed(1));

        // Power flux
        const fluxWatts = Math.round(310 + targetCpu * 1.8 + Math.random() * 20);
        const stability = Number((99.6 + Math.random() * 0.38).toFixed(2));

        // Update sparkline history
        setHistory((hist) => [...hist.slice(-14), targetCpu]);

        return {
          cpu: {
            usage: targetCpu,
            temperature: targetTemp,
            frequency: targetFreq,
            cores
          },
          memory: {
            usedGB,
            totalGB: 32.0,
            usagePercent,
            cachedGB
          },
          network: {
            latencyMs,
            jitterMs,
            downloadMbps,
            uploadMbps,
            packetLoss: 0.0
          },
          power: {
            fluxWatts,
            stability
          }
        };
      });
    };

    const interval = setInterval(updateMetrics, 2800);
    return () => clearInterval(interval);
  }, [isSurging]);

  // Temporary surge trigger for user feedback
  const triggerSurge = () => {
    setIsSurging(true);
    setTimeout(() => setIsSurging(false), 5000);
  };

  const getMetricColor = (percent: number) => {
    if (percent >= 85) return "text-red-400 bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.6)]";
    if (percent >= 65) return "text-hud-gold bg-hud-gold shadow-[0_0_12px_rgba(222,255,154,0.5)]";
    return "text-hud-cyan bg-hud-cyan shadow-[0_0_12px_rgba(0,212,255,0.4)]";
  };

  const getBarColorClass = (percent: number) => {
    if (percent >= 85) return "from-red-500 to-amber-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]";
    if (percent >= 65) return "from-hud-gold to-emerald-400 shadow-[0_0_10px_rgba(222,255,154,0.4)]";
    return "from-hud-cyan to-blue-500 shadow-[0_0_10px_rgba(0,212,255,0.4)]";
  };

  return (
    <div className={`flex flex-col gap-3 font-mono select-none ${className}`}>
      {/* Header telemetry status */}
      <div className="flex items-center justify-between px-1 text-[10px] text-hud-cyan/70 tracking-wider">
        <div className="flex items-center gap-1.5 font-bold uppercase text-white">
          <Activity className="w-3.5 h-3.5 text-hud-cyan animate-pulse" />
          <span>REAL-TIME TELEMETRY</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={triggerSurge}
            title="Simulate Neural Load Surge"
            className={`px-1.5 py-0.5 rounded border text-[8px] tracking-widest font-bold transition-all ${
              isSurging 
                ? "bg-red-500/20 border-red-500 text-red-400 animate-pulse" 
                : "border-hud-cyan/30 text-hud-cyan/70 hover:text-hud-cyan hover:border-hud-cyan bg-hud-cyan/5"
            }`}
          >
            {isSurging ? "SURGE ACTIVE" : "SURGE TEST"}
          </button>
          <div className="flex items-center gap-1 text-[8px] text-hud-cyan/50">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>2.8s TICK</span>
          </div>
        </div>
      </div>

      {/* METRIC 1: CPU PROCESSOR LOAD */}
      <div className="p-3.5 bg-black/60 border border-hud-cyan/20 rounded-xl backdrop-blur-md hover:border-hud-cyan/40 transition-colors relative overflow-hidden group">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="p-1 rounded bg-hud-cyan/10 border border-hud-cyan/30 text-hud-cyan">
              <Cpu className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-widest text-hud-cyan/60 font-bold">ARC NEURAL CPU</span>
              <span className="text-[8px] text-hud-cyan/40">{metrics.cpu.frequency} GHz // {metrics.cpu.temperature}°C</span>
            </div>
          </div>
          
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold font-mono tracking-tight text-white tabular-nums">
              {metrics.cpu.usage}%
            </span>
          </div>
        </div>

        {/* Progress Bar Container with segmented styling */}
        <div className="relative h-2 w-full bg-hud-cyan/10 rounded-full overflow-hidden p-0.5 border border-hud-cyan/20">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${metrics.cpu.usage}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`h-full rounded-full bg-gradient-to-r ${getBarColorClass(metrics.cpu.usage)}`}
          />
        </div>

        {/* CPU Sub-Cores Micro Grid */}
        <div className="mt-2.5 grid grid-cols-4 gap-1.5">
          {metrics.cpu.cores.map((coreVal, idx) => (
            <div key={idx} className="flex flex-col gap-0.5 p-1 bg-hud-cyan/5 rounded border border-hud-cyan/10">
              <div className="flex justify-between text-[7px] text-hud-cyan/50">
                <span>C{idx}</span>
                <span className="text-white/80 font-bold">{coreVal}%</span>
              </div>
              <div className="h-1 bg-hud-cyan/10 rounded-sm overflow-hidden">
                <motion.div
                  animate={{ width: `${coreVal}%` }}
                  transition={{ duration: 0.6 }}
                  className={`h-full ${coreVal > 75 ? "bg-amber-400" : "bg-hud-cyan"}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* METRIC 2: QUANTUM MEMORY ALLOCATION */}
      <div className="p-3.5 bg-black/60 border border-hud-cyan/20 rounded-xl backdrop-blur-md hover:border-hud-cyan/40 transition-colors relative overflow-hidden group">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="p-1 rounded bg-hud-cyan/10 border border-hud-cyan/30 text-hud-cyan">
              <HardDrive className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-widest text-hud-cyan/60 font-bold">MEMORY BUFFER</span>
              <span className="text-[8px] text-hud-cyan/40">{metrics.memory.usedGB} GB / {metrics.memory.totalGB} GB</span>
            </div>
          </div>

          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold font-mono tracking-tight text-white tabular-nums">
              {metrics.memory.usagePercent}%
            </span>
          </div>
        </div>

        {/* Continuous Memory Bar with cached partition indicator */}
        <div className="relative h-2 w-full bg-hud-cyan/10 rounded-full overflow-hidden p-0.5 border border-hud-cyan/20 flex gap-0.5">
          <motion.div
            animate={{ width: `${metrics.memory.usagePercent}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`h-full rounded-full bg-gradient-to-r ${getBarColorClass(metrics.memory.usagePercent)}`}
          />
        </div>

        <div className="mt-2 flex justify-between items-center text-[8px] text-hud-cyan/50 font-mono">
          <span>CACHED: {metrics.memory.cachedGB} GB</span>
          <span className="text-hud-cyan/70 font-bold">ECC: VERIFIED</span>
          <span>FREE: {(metrics.memory.totalGB - metrics.memory.usedGB).toFixed(1)} GB</span>
        </div>
      </div>

      {/* METRIC 3: QUANTUM NETWORK & LATENCY */}
      <div className="p-3.5 bg-black/60 border border-hud-cyan/20 rounded-xl backdrop-blur-md hover:border-hud-cyan/40 transition-colors relative overflow-hidden group">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="p-1 rounded bg-hud-cyan/10 border border-hud-cyan/30 text-hud-cyan">
              <Wifi className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-widest text-hud-cyan/60 font-bold">NEURAL LINK LATENCY</span>
              <span className="text-[8px] text-hud-cyan/40">JITTER: {metrics.network.jitterMs}ms // LOSS: {metrics.network.packetLoss}%</span>
            </div>
          </div>

          <div className="flex items-baseline gap-1">
            <span className={`text-xl font-bold font-mono tracking-tight tabular-nums ${
              metrics.network.latencyMs < 20 ? "text-emerald-400" : metrics.network.latencyMs < 45 ? "text-hud-gold" : "text-red-400"
            }`}>
              {metrics.network.latencyMs}
            </span>
            <span className="text-[9px] text-hud-cyan/60 font-bold">ms</span>
          </div>
        </div>

        {/* Latency Rating Gauge Bar */}
        <div className="relative h-2 w-full bg-hud-cyan/10 rounded-full overflow-hidden p-0.5 border border-hud-cyan/20">
          <motion.div
            animate={{ width: `${Math.min(100, (metrics.network.latencyMs / 50) * 100)}%` }}
            transition={{ duration: 0.5 }}
            className={`h-full rounded-full bg-gradient-to-r ${
              metrics.network.latencyMs < 20 
                ? "from-emerald-400 to-hud-cyan shadow-[0_0_10px_rgba(52,211,153,0.4)]" 
                : metrics.network.latencyMs < 45 
                ? "from-hud-gold to-amber-500 shadow-[0_0_10px_rgba(222,255,154,0.4)]" 
                : "from-amber-500 to-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"
            }`}
          />
        </div>

        {/* Network Throughput IO Metrics */}
        <div className="mt-2.5 pt-2 border-t border-hud-cyan/10 flex justify-between items-center text-[8px] text-hud-cyan/70 font-mono">
          <div className="flex items-center gap-1">
            <ArrowDownRight className="w-3 h-3 text-emerald-400" />
            <span>DOWN:</span>
            <span className="text-white font-bold">{metrics.network.downloadMbps} MB/S</span>
          </div>
          <div className="flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3 text-hud-cyan" />
            <span>UP:</span>
            <span className="text-white font-bold">{metrics.network.uploadMbps} MB/S</span>
          </div>
        </div>
      </div>

      {/* Mini Load History Sparkline */}
      <div className="p-3 bg-black/40 border border-hud-cyan/15 rounded-xl flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-[8px] text-hud-cyan/40 uppercase tracking-wider">LOAD HISTORY</span>
          <span className="text-[9px] text-hud-cyan font-mono font-bold">14 INTERVAL TREND</span>
        </div>
        
        {/* Dynamic mini bar sparkline */}
        <div className="flex items-end gap-1 h-6 shrink-0">
          {history.map((val, i) => (
            <motion.div
              key={i}
              initial={{ height: 4 }}
              animate={{ height: `${Math.max(15, (val / 100) * 24)}px` }}
              transition={{ duration: 0.4 }}
              className={`w-1 rounded-t-sm ${
                val >= 75 ? "bg-red-400 shadow-[0_0_6px_#ef4444]" : val >= 55 ? "bg-hud-gold" : "bg-hud-cyan/60"
              }`}
              title={`Tick ${i + 1}: ${val}%`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
