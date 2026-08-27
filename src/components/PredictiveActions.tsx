import { motion } from 'motion/react';
import { Power, Lightbulb, Play, Music, Layout, ExternalLink } from 'lucide-react';

interface Action {
  id: string;
  label: string;
  icon: any;
  payload: any;
}

const PRESET_ACTIONS: Action[] = [
  { id: '1', label: 'Toggle Lab Lights', icon: Lightbulb, payload: { action: 'toggle_lights' } },
  { id: '2', label: 'Primary Power', icon: Power, payload: { action: 'toggle_power' } },
  { id: '3', label: 'Deploy Protocols', icon: Play, payload: { action: 'deploy' } },
  { id: '4', label: 'Hologram Sync', icon: Layout, payload: { action: 'sync_hologram' } },
  { id: '5', label: 'Audio Stream', icon: Music, payload: { action: 'start_music' } },
];

interface PredictiveActionsProps {
  onTrigger: (action: Action) => void;
}

export default function PredictiveActions({ onTrigger }: PredictiveActionsProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-[10px] uppercase tracking-[0.4em] text-hud-cyan/40 mb-1 px-1 font-mono">
        Predictive Actions
      </div>
      <div className="grid grid-cols-1 gap-2">
        {PRESET_ACTIONS.map((action, i) => (
          <motion.button
            key={action.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ 
              x: 5, 
              backgroundColor: "rgba(0, 212, 255, 0.15)",
              borderColor: "rgba(0, 212, 255, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onTrigger(action)}
            className="flex items-center gap-3 p-3 bg-hud-cyan/5 border border-hud-cyan/10 rounded-lg group transition-all text-left relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-hud-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="w-8 h-8 flex items-center justify-center bg-hud-cyan/10 rounded border border-hud-cyan/20 group-hover:border-hud-cyan/40 transition-colors">
              <action.icon className="w-4 h-4 text-hud-cyan/70 group-hover:text-hud-cyan" />
            </div>
            
            <div className="flex-1">
              <div className="text-[11px] font-bold uppercase tracking-widest text-hud-cyan/80 group-hover:text-white">
                {action.label}
              </div>
              <div className="text-[8px] font-mono text-hud-cyan/30 flex items-center gap-1 uppercase">
                <ExternalLink className="w-2 h-2" />
                Webhook Relay
              </div>
            </div>

            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
               <div className="w-1.5 h-1.5 bg-hud-cyan rounded-full animate-pulse" />
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
