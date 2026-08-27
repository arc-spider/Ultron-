import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Activity, Mic, Radio, Zap } from 'lucide-react';

interface UltronSpectrumVisualizerProps {
  isVisible: boolean;
  frequencies: Uint8Array;
  waveform: Uint8Array;
  intensity: number;
  peakDb: number;
  transcript?: string;
}

export default function UltronSpectrumVisualizer({
  isVisible,
  frequencies,
  waveform,
  intensity,
  peakDb,
  transcript = ""
}: UltronSpectrumVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Frequency band labels in Hz / kHz
  const freqBands = ["32Hz", "64Hz", "125Hz", "250Hz", "500Hz", "1kHz", "2kHz", "4kHz", "8kHz", "16kHz"];

  // Draw real-time oscillating sine / audio waveform onto canvas
  useEffect(() => {
    if (!isVisible) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const draw = () => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      // Draw background faint grid lines
      ctx.strokeStyle = "rgba(245, 158, 11, 0.08)";
      ctx.lineWidth = 1;
      for (let y = 10; y < height; y += 15) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw Center Baseline
      ctx.strokeStyle = "rgba(245, 158, 11, 0.25)";
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw Primary Audio Waveform
      ctx.beginPath();
      const sliceWidth = width / waveform.length;
      let x = 0;

      for (let i = 0; i < waveform.length; i++) {
        const v = waveform[i] / 128.0; // 0.0 to 2.0
        const y = (v * height) / 2;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
        x += sliceWidth;
      }

      // Glow effect for waveform
      ctx.shadowBlur = 12 + intensity * 15;
      ctx.shadowColor = "#f59e0b";
      ctx.strokeStyle = "#fef08a";
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Second Harmonic Mirror Waveform (Subtle Deep Crimson/Amber)
      ctx.beginPath();
      x = 0;
      for (let i = 0; i < waveform.length; i++) {
        const v = waveform[i] / 128.0;
        const diff = v - 1.0;
        const y = (1.0 - diff * 0.7) * (height / 2);

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
        x += sliceWidth;
      }
      ctx.shadowBlur = 8;
      ctx.shadowColor = "#ef4444";
      ctx.strokeStyle = "rgba(239, 68, 68, 0.6)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.shadowBlur = 0;

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [isVisible, waveform, intensity]);

  if (!isVisible) return null;

  // Compute 32 mirrored/downsampled spectrum bars
  const barCount = 28;
  const spectrumBars: number[] = [];
  for (let i = 0; i < barCount; i++) {
    const rawIndex = Math.floor((i / barCount) * Math.min(frequencies.length, 36));
    const val = frequencies[rawIndex] || 0;
    // Boost lower & vocal mid frequencies for punchy visual response
    const boosted = Math.min(100, (val / 255) * 100 * (1 + intensity * 0.8));
    spectrumBars.push(Math.max(6, boosted));
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94, y: 18 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full max-w-2xl mx-auto z-40 px-3 select-none"
    >
      <div className="relative rounded-2xl bg-black/85 border border-amber-500/50 backdrop-blur-xl p-4 md:p-5 shadow-[0_0_40px_rgba(245,158,11,0.25)] overflow-hidden">
        
        {/* Glowing Background Radial Highlights */}
        <div 
          className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-amber-500/15 blur-2xl pointer-events-none transition-all duration-150"
          style={{ transform: `scale(${1 + intensity * 1.5})` }}
        />
        <div 
          className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-red-500/15 blur-2xl pointer-events-none transition-all duration-150"
          style={{ transform: `scale(${1 + intensity * 1.5})` }}
        />

        {/* HEADER: Spectrum Telemetry & Wake Status */}
        <div className="flex items-center justify-between border-b border-amber-500/20 pb-2.5 mb-3 text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-amber-400">
          <div className="flex items-center gap-2">
            <div className="relative flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span className="absolute w-2 h-2 rounded-full bg-amber-400" />
            </div>
            <span className="font-bold text-amber-200">
              SPECTRUM MATRIX // 'HEY ULTRON' DETECTED
            </span>
          </div>

          <div className="flex items-center gap-3 text-amber-500/80 font-mono text-[8.5px]">
            <span className="hidden sm:inline">PEAK: {Math.max(-60, peakDb)} dB</span>
            <span className="flex items-center gap-1 text-amber-300">
              <Radio className="w-3 h-3 animate-pulse" />
              <span>LISTENING</span>
            </span>
          </div>
        </div>

        {/* OSCILLOSCOPE TIME-DOMAIN WAVEFORM CANVAS */}
        <div className="relative w-full h-14 md:h-16 bg-black/60 rounded-lg border border-amber-500/25 overflow-hidden mb-3.5 flex items-center justify-center">
          <canvas
            ref={canvasRef}
            width={600}
            height={70}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1 left-2 text-[7.5px] tracking-widest text-amber-500/50 uppercase font-mono">
            OSC // 48.0 kHz LIVE SINE FLUX
          </div>
          <div className="absolute bottom-1 right-2 text-[7.5px] tracking-widest text-amber-400/60 font-mono">
            RESPONSIVE GAIN: {(intensity * 100).toFixed(0)}%
          </div>
        </div>

        {/* DYNAMIC FREQUENCY EQUALIZER BARS */}
        <div className="space-y-1.5">
          <div className="h-16 md:h-20 flex items-end justify-between gap-[2px] md:gap-1 px-1 pt-1">
            {spectrumBars.map((heightPercent, idx) => {
              const isCenter = Math.abs(idx - barCount / 2) < 4;
              const isPeak = heightPercent > 65;

              return (
                <div
                  key={idx}
                  className="flex-1 flex flex-col items-center justify-end h-full group"
                >
                  {/* Peak Marker Dot */}
                  <div
                    style={{
                      opacity: heightPercent > 20 ? 1 : 0.2,
                      transform: `translateY(-${Math.min(10, heightPercent * 0.1)}px)`
                    }}
                    className={`w-full h-[2px] mb-[2px] rounded-full transition-all duration-75 ${
                      isPeak ? "bg-red-400 shadow-[0_0_8px_#ef4444]" : "bg-amber-300 shadow-[0_0_6px_#f59e0b]"
                    }`}
                  />

                  {/* Reactive Vertical Bar */}
                  <div
                    style={{ height: `${heightPercent}%` }}
                    className={`w-full rounded-t-sm transition-all duration-75 ${
                      isPeak 
                        ? "bg-gradient-to-t from-amber-600 via-amber-400 to-red-500 shadow-[0_0_12px_rgba(245,158,11,0.8)]" 
                        : isCenter
                        ? "bg-gradient-to-t from-amber-700 via-amber-500 to-amber-300 shadow-[0_0_8px_rgba(245,158,11,0.5)]"
                        : "bg-gradient-to-t from-amber-900/80 via-amber-500/80 to-amber-400"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* FREQUENCY LABELS (Hz / kHz) */}
          <div className="flex justify-between items-center text-[7.5px] md:text-[8px] text-amber-500/60 font-mono tracking-wider pt-1 border-t border-amber-500/15">
            {freqBands.map((band, i) => (
              <span key={i} className="hover:text-amber-300 transition-colors">
                {band}
              </span>
            ))}
          </div>
        </div>

        {/* LIVE SPOKEN PHRASE STREAM (Inside the visualizer) */}
        {transcript && (
          <div className="mt-3 pt-2.5 border-t border-amber-500/20 flex items-center gap-2 text-xs text-amber-200">
            <Mic className="w-3.5 h-3.5 text-amber-400 animate-pulse shrink-0" />
            <span className="italic font-sans truncate">"{transcript}"</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
