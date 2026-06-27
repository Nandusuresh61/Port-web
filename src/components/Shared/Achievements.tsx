import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ACHIEVEMENTS } from '../../data/portfolioData';
import { Award, Code2, Database, Coffee, GitPullRequest, CloudLightning } from 'lucide-react';

interface CounterProps {
  value: number;
  suffix: string;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ value, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(elementRef, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalFrames = Math.round(duration / 16.66); // ~60fps
    let frame = 0;

    const counter = () => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out quadratic
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.round(start + (end - start) * easeProgress);

      setCount(currentCount);

      if (frame < totalFrames) {
        requestAnimationFrame(counter);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(counter);
  }, [isInView, value, duration]);

  // Special formatter for 1.5k type values
  const formatCount = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toLocaleString();
  };

  return (
    <span ref={elementRef} className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight">
      {suffix === 'k+' ? formatCount(count) + '+' : count + suffix}
    </span>
  );
};

export const Achievements: React.FC = () => {
  
  // Icon selector based on ID
  const getStatIcon = (id: string) => {
    switch (id) {
      case 'projects':
        return <Award className="text-primary-accent" size={24} />;
      case 'technologies':
        return <Code2 className="text-secondary-accent" size={24} />;
      case 'deployments':
        return <CloudLightning className="text-highlight" size={24} />;
      case 'dsa':
        return <Database className="text-[#FFE047]" size={24} />;
      case 'contributions':
        return <GitPullRequest className="text-emerald-400" size={24} />;
      default:
        return <Coffee className="text-amber-400" size={24} />;
    }
  };

  return (
    <section id="achievements" className="relative py-24 px-4 md:px-8 bg-[#050816] overflow-hidden flex flex-col justify-center border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute top-[10%] left-[-10%] w-[45%] h-[45%] bg-primary-accent/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[45%] h-[45%] bg-highlight/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-[2]">
        
        {/* Header Title */}
        <div className="max-w-xl mx-auto text-center mb-20">
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono uppercase tracking-widest text-primary-accent mb-2"
          >
            Engineering Ledger
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Audited Achievements
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary-accent to-highlight mx-auto rounded-full"
          />
        </div>

        {/* Stats Grid Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 w-full">
          {ACHIEVEMENTS.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              className="glass-panel border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300 rounded-xl p-5 md:p-6 flex flex-col justify-between items-center text-center shadow-lg relative overflow-hidden group cursor-pointer"
            >
              {/* Highlight Glow under specific tile */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle 80px at 50% 20%, ${stat.glowColor}, transparent 80%)`
                }}
              />

              {/* Icon Container */}
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {getStatIcon(stat.id)}
              </div>

              {/* Counter value */}
              <div className="mb-2">
                <Counter 
                  value={stat.number} 
                  suffix={stat.suffix} 
                  duration={1800} 
                />
              </div>

              {/* Label */}
              <h4 className="text-xs font-display font-semibold text-white uppercase tracking-wider mb-2">
                {stat.label}
              </h4>

              {/* description */}
              <p className="text-[10px] text-gray-500 leading-normal line-clamp-2">
                {stat.description}
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
