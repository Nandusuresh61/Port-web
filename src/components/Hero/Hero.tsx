import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { HERO_TITLES } from '../../data/portfolioData';
import { Terminal, Shield, ChevronRight, FileText, Database, Code2 } from 'lucide-react';

interface HeroProps {
  onScrollToProjects: () => void;
  onScrollToProjectFlow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToProjects, onScrollToProjectFlow }) => {
  const [titleIndex, setTitleIndex] = useState(0);

  // Mouse Parallax Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const translateX = useSpring(useTransform(mouseX, [-500, 500], [-25, 25]), springConfig);
  const translateY = useSpring(useTransform(mouseY, [-500, 500], [-25, 25]), springConfig);

  const translateReverseX = useSpring(useTransform(mouseX, [-500, 500], [15, -15]), springConfig);
  const translateReverseY = useSpring(useTransform(mouseY, [-500, 500], [15, -15]), springConfig);

  const rotateX = useSpring(useTransform(mouseY, [-500, 500], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-500, 500], [-8, 8]), springConfig);

  useEffect(() => {
    // Cycle title words
    const titleInterval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % HERO_TITLES.length);
    }, 2800);

    // Track mouse coordinates relative to window center
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX - innerWidth / 2;
      const y = e.clientY - innerHeight / 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(titleInterval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-16 px-4 md:px-8">
      {/* Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary-accent/10 rounded-full filter blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-highlight/10 rounded-full filter blur-[120px] pointer-events-none animate-float-reverse" />
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      
      {/* Cinematic Cyber grid */}
      <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-bg-dark to-transparent z-[1]" />

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-[2]">
        
        {/* Left Column: Heading & Text */}
        <div className="lg:col-span-7 flex flex-col text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border-border-glass text-xs font-mono text-primary-accent mb-4 shadow-[0_0_15px_rgba(79,139,255,0.1)]">
              <span className="w-2 h-2 rounded-full bg-primary-accent animate-ping" />
              <span>Available for Software Development</span>
            </div>
          </motion.div>

          {/* Large Cinematic Headings */}
          <div className="space-y-1">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg font-mono text-gray-500 uppercase tracking-widest"
            >
              System Designer & Engineer
            </motion.h3>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white"
            >
              Nandu Suresh
            </motion.h1>

            {/* Cycling Subheading */}
            <div className="h-14 md:h-18 flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={titleIndex}
                  initial={{ opacity: 0, y: 25, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -25, filter: 'blur(4px)' }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="text-2xl md:text-4xl font-display font-semibold text-gradient-cyan py-1"
                >
                  {HERO_TITLES[titleIndex]}
                </motion.h2>
              </AnimatePresence>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-xl text-gray-400 text-sm md:text-base leading-relaxed"
          >
            I build robust digital systems using the MERN stack and clean architecture principles. My goal is to design scalable software foundations that deliver high responsiveness and support future business growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button
              onClick={onScrollToProjects}
              className="relative px-6 py-3 rounded-lg font-display text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-primary-accent to-highlight overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(79,139,255,0.4)] flex items-center gap-2 group cursor-pointer"
            >
              <span>Explore Portfolio</span>
              <ChevronRight size={16} className="transform transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onScrollToProjectFlow}
              className="px-6 py-3 rounded-lg font-display text-sm font-semibold text-white glass-panel border-border-glass transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] flex items-center gap-2 cursor-pointer"
            >
              <span>View Projects</span>
            </button>

            <a
              href="/resume.pdf"
              download="Nandu_Suresh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg font-display text-sm font-semibold text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <FileText size={16} />
              <span>Resume</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Handcrafted Tech Visuals & Developer Art */}
        <div className="lg:col-span-5 relative w-full h-[400px] md:h-[500px] flex items-center justify-center mt-12 lg:mt-0">
          
          {/* Main Visual Wrapper (Parallax movement based on mouse) */}
          <motion.div
            style={{ x: translateX, y: translateY, rotateX, rotateY }}
            className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] flex items-center justify-center"
          >
            {/* Holographic Glowing Ring */}
            <div className="absolute inset-0 rounded-full border border-primary-accent/15 scale-95 animate-pulse" />
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-highlight/10 animate-[spin_50s_linear_infinite]" />
            <div className="absolute inset-10 rounded-full border border-secondary-accent/15 animate-[spin_30s_linear_infinite_reverse]" />

            {/* Futuristic Developer SVG Canvas */}
            <svg
              viewBox="0 0 500 500"
              className="w-full h-full drop-shadow-[0_0_50px_rgba(79,139,255,0.15)] z-[2]"
            >
              {/* Desk glow */}
              <ellipse cx="250" cy="400" rx="160" ry="25" fill="rgba(123, 97, 255, 0.2)" filter="blur(15px)" />
              
              {/* Desk */}
              <path d="M90 400 h320 l15 20 h-350 z" fill="#0c1228" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              
              {/* Monitor Stand */}
              <rect x="242" y="300" width="16" height="100" fill="#0f172a" stroke="rgba(255,255,255,0.1)" />
              <ellipse cx="250" cy="400" rx="40" ry="8" fill="#080d1a" stroke="rgba(255,255,255,0.1)" />
              
              {/* Floating Ultra-wide Monitor */}
              <rect x="100" y="140" width="300" height="160" rx="10" fill="#080e22" stroke="#4F8BFF" strokeWidth="2.5" />
              <rect x="105" y="145" width="290" height="150" rx="6" fill="#040817" />
              
              {/* Laptop glowing on desk */}
              <path d="M280 340 l30 40 h60 l-15 -40 z" fill="#080d1a" stroke="rgba(0, 229, 255, 0.4)" strokeWidth="1" />
              <path d="M310 380 h65 l5 8 h-75 z" fill="#1e293b" />
              
              {/* Laptop screen glow */}
              <polygon points="310,345 370,345 385,378 325,378" fill="url(#blueGlow)" opacity="0.3" />

              {/* Developer character silhouette */}
              <g transform="translate(180, 250)">
                {/* Body/Shoulders */}
                <path d="M20 120 C10 110, 0 80, 5 70 C10 60, 30 65, 50 65 C70 65, 90 60, 95 70 C100 80, 90 110, 80 120 Z" fill="#0f172a" stroke="rgba(255,255,255,0.1)" />
                {/* Neck */}
                <rect x="42" y="45" width="16" height="25" rx="3" fill="#1e293b" />
                {/* Head */}
                <circle cx="50" cy="30" r="22" fill="#0f172a" stroke="rgba(255,255,255,0.1)" />
                {/* Headphones */}
                <path d="M24 30 A26 26 0 0 1 76 30" fill="none" stroke="#7B61FF" strokeWidth="6" strokeLinecap="round" />
                <rect x="22" y="24" width="8" height="15" rx="3" fill="#7B61FF" />
                <rect x="70" y="24" width="8" height="15" rx="3" fill="#7B61FF" />
              </g>

              {/* Screen graphic layers (Code and graphics on screen) */}
              <rect x="120" y="160" width="80" height="120" rx="3" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
              <circle cx="135" cy="172" r="3" fill="#ef4444" />
              <circle cx="145" cy="172" r="3" fill="#eab308" />
              <circle cx="155" cy="172" r="3" fill="#22c55e" />
              <rect x="130" y="185" width="60" height="4" rx="2" fill="rgba(255,255,255,0.15)" />
              <rect x="130" y="195" width="45" height="4" rx="2" fill="rgba(79, 139, 255, 0.4)" />
              <rect x="130" y="205" width="50" height="4" rx="2" fill="rgba(123, 97, 255, 0.4)" />
              <rect x="130" y="215" width="30" height="4" rx="2" fill="rgba(0, 229, 255, 0.4)" />

              {/* Main dashboard graph */}
              <rect x="210" y="160" width="165" height="70" rx="4" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.05)" />
              <path d="M220 210 Q240 180, 260 200 T300 175 T340 190 T360 170" fill="none" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" />
              
              {/* Coding IDE lines */}
              <rect x="210" y="240" width="165" height="40" rx="4" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.05)" />
              <rect x="220" y="250" width="140" height="3" rx="1" fill="#4F8BFF" />
              <rect x="220" y="260" width="90" height="3" rx="1" fill="#7B61FF" />
              <rect x="220" y="270" width="115" height="3" rx="1" fill="#22c55e" />

              {/* Gradients */}
              <defs>
                <linearGradient id="blueGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            {/* Floating UI Widget 1: Commit Logs (shifts opposite to mouse) */}
            <motion.div
              style={{ x: translateReverseX, y: translateReverseY }}
              className="hidden md:flex absolute -top-4 -left-8 glass-panel border-border-glass p-3 rounded-lg items-center gap-3 w-48 shadow-xl"
            >
              <div className="w-8 h-8 rounded bg-primary-accent/10 border border-primary-accent/20 flex items-center justify-center text-primary-accent">
                <Terminal size={16} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-gray-500 font-mono">GIT COMMIT</span>
                <span className="text-xs font-mono text-white truncate">feat: task-dnd-core</span>
              </div>
            </motion.div>

            {/* Floating UI Widget 2: Database health (shifts normal) */}
            <motion.div
              style={{ x: translateX, y: translateReverseY }}
              className="hidden md:flex absolute bottom-8 -right-8 glass-panel border-border-glass p-3 rounded-lg items-center gap-3 w-48 shadow-xl"
            >
              <div className="w-8 h-8 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Database size={16} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-gray-500 font-mono">MONGO CLUSTER</span>
                <span className="text-xs font-mono text-emerald-400 font-semibold">Active • 99.9%</span>
              </div>
            </motion.div>

            {/* Floating UI Widget 3: Render Metrics */}
            <motion.div
              style={{ x: translateReverseX, y: translateY }}
              className="hidden md:flex absolute -bottom-8 -left-2 glass-panel border-border-glass p-3 rounded-lg items-center gap-3 w-44 shadow-xl"
            >
              <div className="w-8 h-8 rounded bg-highlight/10 border border-highlight/20 flex items-center justify-center text-highlight">
                <Code2 size={16} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-gray-500 font-mono">RENDER TIME</span>
                <span className="text-xs font-mono text-white font-medium">1.2ms (React 19)</span>
              </div>
            </motion.div>

            {/* Floating UI Widget 4: Shield Secure */}
            <motion.div
              style={{ x: translateX, y: translateY }}
              className="hidden md:flex absolute -top-12 -right-2 glass-panel border-border-glass p-2.5 rounded-lg items-center gap-2.5 shadow-xl"
            >
              <Shield size={14} className="text-secondary-accent" />
              <span className="text-[10px] text-gray-400 font-mono">SSL Secure Encrypted</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div 
        onClick={onScrollToProjects}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2 cursor-pointer text-gray-500 hover:text-white transition-colors duration-300"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll to Discover</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-5 h-8 border border-gray-600 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-primary-accent rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};
