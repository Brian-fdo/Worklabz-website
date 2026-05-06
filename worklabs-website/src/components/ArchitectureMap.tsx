import { motion, AnimatePresence } from 'framer-motion';
import { Database, Cpu, Globe, Shield, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

const nodes = [
  { id: 'input', label: 'Business Data', icon: Database, color: 'text-blue-400', pos: { x: 0, y: 50 } },
  { id: 'ai', label: 'AI Process Engine', icon: Cpu, color: 'text-primary-400', pos: { x: 50, y: 50 }, bridge: true },
  { id: 'output', label: 'Optimized Scale', icon: Globe, color: 'text-emerald-400', pos: { x: 100, y: 50 } },
];

export default function ArchitectureMap() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[400px] flex items-center justify-between px-12 group">
      {/* Background Grid/Lines */}
      <div className="absolute inset-x-0 top-1/2 h-px bg-white/5 -translate-y-1/2 border-dashed border-t border-white/10" />
      
      {/* Connecting Path Animation */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 100 200 L 800 200"
          stroke="url(#gradient-line)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {nodes.map((node, i) => (
        <div key={node.id} className="relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className={`w-20 h-20 rounded-2xl bg-dark-panel border-2 ${
              activeStep === i ? 'border-primary-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]' : 'border-white/10'
            } flex items-center justify-center transition-all duration-500 relative cursor-pointer hover:border-white/30`}
          >
            <node.icon className={`w-10 h-10 ${node.color}`} />
            
            {/* Pulsing indicator if active */}
            {activeStep === i && (
              <motion.div
                layoutId="pulse"
                className="absolute inset-0 rounded-2xl bg-primary-500/20"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="mt-4 text-center"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{node.label}</span>
          </motion.div>

          {/* Logic Bridge for the AI Core */}
          {node.bridge && (
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 text-center pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="bg-primary-950/40 border border-primary-500/20 px-3 py-1.5 rounded-lg backdrop-blur-sm"
                >
                  <span className="text-[10px] font-bold text-primary-400 italic">
                    {activeStep === 0 && "Parsing Incoming Flow..."}
                    {activeStep === 1 && "Optimizing Logic Nodes..."}
                    {activeStep === 2 && "Scaling Process Threads..."}
                    {activeStep === 3 && "Verified Delta Push..."}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </div>
      ))}

      {/* Floating Resource Badges (Decor) */}
      <div className="absolute top-0 left-1/4 animate-bounce duration-[3000ms]">
        <div className="flex items-center gap-2 bg-dark-panel/60 border border-white/5 rounded-full px-3 py-1 backdrop-blur-sm">
          <Shield className="w-3 h-3 text-emerald-400" />
          <span className="text-[10px] text-gray-400">Encrypted</span>
        </div>
      </div>
      <div className="absolute bottom-12 right-1/4 animate-bounce duration-[4000ms] delay-700">
        <div className="flex items-center gap-2 bg-dark-panel/60 border border-white/5 rounded-full px-3 py-1 backdrop-blur-sm">
          <Users className="w-3 h-3 text-blue-400" />
          <span className="text-[10px] text-gray-400">SL Operations</span>
        </div>
      </div>
    </div>
  );
}
