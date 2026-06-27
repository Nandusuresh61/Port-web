import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LOADER_STEPS } from '../../data/portfolioData';
import { Terminal, ShieldCheck, Cpu, Code } from 'lucide-react';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Increment progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Random incremental values to look natural
        const increment = Math.floor(Math.random() * 8) + 2;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    // Handle step text compilation
    if (currentStep < LOADER_STEPS.length) {
      const duration = 2800 / LOADER_STEPS.length; // Spread across 2.8 seconds
      const timer = setTimeout(() => {
        setLogs((prev) => [...prev, LOADER_STEPS[currentStep]]);
        setCurrentStep((prev) => prev + 1);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  useEffect(() => {
    // If progress is 100 and all steps are printed, trigger complete
    if (progress === 100 && logs.length === LOADER_STEPS.length) {
      const doneTimer = setTimeout(() => {
        setIsDone(true);
        const completeTimer = setTimeout(() => {
          onComplete();
        }, 800); // Wait for zoom out exit animation
        return () => clearTimeout(completeTimer);
      }, 500);
      return () => clearTimeout(doneTimer);
    }
  }, [progress, logs, onComplete]);

  // Deciding which icon to show during compile
  const getStepIcon = (index: number) => {
    if (index % 4 === 0) return <Terminal size={14} className="text-primary-accent" />;
    if (index % 4 === 1) return <Cpu size={14} className="text-secondary-accent" />;
    if (index % 4 === 2) return <Code size={14} className="text-highlight" />;
    return <ShieldCheck size={14} className="text-emerald-400" />;
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg-dark text-white px-4 select-none"
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.15, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Cyberpunk backdrop elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-accent/5 rounded-full filter blur-[100px] pointer-events-none animate-pulse-glow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-highlight/5 rounded-full filter blur-[80px] pointer-events-none animate-float-reverse" />
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

          {/* Loader Terminal Box */}
          <div className="w-full max-w-xl glass-panel p-6 rounded-xl border-border-glass shadow-2xl relative overflow-hidden">
            {/* Window header */}
            <div className="flex items-center justify-between border-b border-border-glass pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="text-xs text-gray-500 font-mono ml-2">sys_boot_sequence.sh</span>
              </div>
              <span className="text-[10px] text-primary-accent/80 font-mono px-2 py-0.5 rounded bg-primary-accent/10 border border-primary-accent/20">
                v1.19.0-STABLE
              </span>
            </div>

            {/* Terminal Boot Log Output */}
            <div className="h-48 overflow-y-auto font-mono text-xs text-gray-400 space-y-2 mb-6 scrollbar-none pr-2">
              {logs.map((log, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2.5"
                >
                  <span className="text-gray-600">[{new Date().toLocaleTimeString()}]</span>
                  {getStepIcon(index)}
                  <span className={index === logs.length - 1 ? "text-white font-medium" : ""}>{log}</span>
                </motion.div>
              ))}
              
              {logs.length < LOADER_STEPS.length && (
                <div className="flex items-center gap-2 text-primary-accent animate-pulse">
                  <span>&gt;</span>
                  <span className="w-1.5 h-4 bg-primary-accent" />
                </div>
              )}
            </div>

            {/* Progress Metrics */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-gray-400">COMPILING ENGINE</span>
                <span className="text-primary-accent font-bold">{progress}%</span>
              </div>
              
              {/* Animated Progress Bar */}
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-[1px]">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-primary-accent via-secondary-accent to-highlight shadow-[0_0_12px_rgba(0,229,255,0.5)]"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>
            </div>
          </div>

          {/* Footer watermark inside loader */}
          <div className="mt-8 font-mono text-[10px] text-gray-600 tracking-widest uppercase">
            NANDU SURESH • ARCHITECTING STABLE PLATFORMS
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
