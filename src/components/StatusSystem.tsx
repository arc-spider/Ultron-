import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Battery, Wifi, Signal, Cpu, ShieldCheck, Activity } from "lucide-react";

interface StatusSystemProps {
  onOpenTelemetry?: () => void;
}

export default function StatusSystem({ onOpenTelemetry }: StatusSystemProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-between items-start mb-4 font-mono text-[10px] tracking-widest text-hud-cyan/60">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <Cpu className="w-3 h-3 text-hud-cyan animate-pulse" />
          <span className="uppercase font-bold text-white/90">ENCRYPTION: ACTIVE</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3 h-3 text-hud-cyan" />
          <span className="uppercase text-hud-cyan/50">CORE: OMNI-REACTIVE</span>
        </div>
        {onOpenTelemetry && (
          <button
            onClick={onOpenTelemetry}
            className="lg:hidden mt-1 px-2 py-0.5 rounded border border-hud-cyan/30 text-[8px] text-hud-cyan flex items-center gap-1.5 hover:bg-hud-cyan/10 w-fit"
          >
            <Activity className="w-2.5 h-2.5 text-emerald-400 animate-pulse" />
            <span>VIEW METRICS</span>
          </button>
        )}
      </div>

      <div className="flex flex-col items-end gap-1">
        <div className="text-sm font-medium text-hud-cyan tabular-nums tracking-normal">
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            <span className="text-[8px] uppercase font-bold text-white/80">USER: SIR AMAN</span>
            <span className="text-[7px] text-hud-red opacity-80">STRIKE-LEVEL: ALPHA</span>
          </div>
        </div>
      </div>
    </div>
  );
}
