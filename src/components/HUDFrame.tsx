import { ReactNode } from "react";
import { motion } from "motion/react";

interface HUDFrameProps {
  children: ReactNode;
}

export default function HUDFrame({ children }: HUDFrameProps) {
  return (
    <div className="relative h-screen w-full max-w-md mx-auto overflow-hidden bg-hud-bg flex flex-col p-4 border-x border-hud-cyan/10">
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-hud-cyan/40" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-hud-cyan/40" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-hud-cyan/40" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-hud-cyan/40" />
      
      {/* Scanline Effect */}
      <div className="scanline" />
      
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--color-hud-cyan) 1px, transparent 1px), linear-gradient(90deg, var(--color-hud-cyan) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 h-full flex flex-col"
      >
        {children}
      </motion.div>
    </div>
  );
}
