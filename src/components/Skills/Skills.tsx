import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILLS } from '../../data/portfolioData';
import type { Skill } from '../../types';
import { Cpu, Eye, GitBranch, Layers, Star, Database } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill>(SKILLS[0]);
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  // Connections map between skills to draw constelation lines
  // Index-based relationships: React (0), TS (1), Node (2), Express (3), MongoDB (4), Postgres (5), AWS (6), Tailwind (7), Next (8), Git/GitHub (9), JavaScript (10), Redis (11), Cloudinary (12), Vercel (13), DSA/Algorithms (14), Linux (15), DevOps (16)
  const CONNECTIONS = [
    [0, 1], // React -> TS
    [0, 7], // React -> Tailwind
    [0, 8], // React -> Next.js
    [1, 8], // TS -> Next.js
    [2, 3], // Node -> Express
    [3, 4], // Express -> MongoDB
    [3, 5], // Express -> PostgreSQL
    [2, 6], // Node -> AWS
    [6, 4], // AWS -> MongoDB
    [9, 1], // Git -> TS
    [9, 2], // Git -> Node
    [10, 1], // JS -> TS
    [10, 0], // JS -> React
    [2, 11], // Node -> Redis
    [3, 11], // Express -> Redis
    [6, 12], // AWS -> Cloudinary
    [3, 12], // Express -> Cloudinary
    [8, 13], // Next.js -> Vercel
    [9, 13], // Git -> Vercel
    [9, 16], // Git -> DevOps
    [6, 16], // AWS -> DevOps
    [9, 15], // Git -> Linux
    [15, 16], // Linux -> DevOps
    [10, 14]  // JS -> DSA
  ];

  return (
    <section id="skills" className="relative min-h-screen w-full py-24 px-4 md:px-8 bg-bg-dark overflow-hidden flex flex-col justify-center">
      {/* Background decorations */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-secondary-accent/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-primary-accent/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-[2]">
        
        {/* Section Title */}
        <div className="max-w-xl mx-auto text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono uppercase tracking-widest text-primary-accent mb-2"
          >
            System Inventory
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Technology Universe
          </motion.h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Interact with the glowing nodes to inspect specific tech properties, project integrations, and telemetry metrics.
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary-accent to-highlight mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Main Interface Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full min-h-[500px]">
          
          {/* Left Column: Interactive Map (Constellation Arena on Desktop) */}
          <div className="hidden lg:flex lg:col-span-8 glass-panel border border-white/5 bg-[#070b19]/40 rounded-2xl p-6 relative overflow-hidden items-center justify-center min-h-[550px] select-none">
            
            {/* Ambient Background Grid inside Arena */}
            <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
            
            {/* Center Core Sun */}
            <div className="absolute flex flex-col items-center justify-center z-[3]">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary-accent via-secondary-accent to-highlight shadow-[0_0_40px_rgba(79,139,255,0.6)] flex items-center justify-center border border-white/20 animate-pulse">
                <Cpu size={24} className="text-white" />
              </div>
              <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest mt-2 bg-[#050816] px-2 py-0.5 rounded border border-white/5">
                MERN Core
              </span>
            </div>

            {/* SVG Connecting Constellation Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {CONNECTIONS.map(([startIdx, endIdx], idx) => {
                const s = SKILLS[startIdx];
                const e = SKILLS[endIdx];
                const active = (hoveredSkill && (hoveredSkill.name === s.name || hoveredSkill.name === e.name)) ||
                               (selectedSkill && (selectedSkill.name === s.name || selectedSkill.name === e.name));
                return (
                  <line
                    key={idx}
                    x1={`${s.coordinates.x}%`}
                    y1={`${s.coordinates.y}%`}
                    x2={`${e.coordinates.x}%`}
                    y2={`${e.coordinates.y}%`}
                    stroke={active ? '#00E5FF' : 'rgba(255, 255, 255, 0.05)'}
                    strokeWidth={active ? 1.5 : 0.8}
                    className="transition-all duration-300"
                    strokeDasharray={active ? "none" : "5, 5"}
                  />
                );
              })}
            </svg>

            {/* Orbiting technology planets */}
            {SKILLS.map((skill) => {
              const isSelected = selectedSkill.name === skill.name;
              const isHovered = hoveredSkill?.name === skill.name;
              return (
                <motion.div
                  key={skill.name}
                  style={{
                    position: 'absolute',
                    left: `${skill.coordinates.x}%`,
                    top: `${skill.coordinates.y}%`,
                  }}
                  className="transform -translate-x-1/2 -translate-y-1/2 z-[4]"
                  whileHover={{ scale: 1.15 }}
                >
                  {/* Planet glow ring */}
                  <div
                    onClick={() => setSelectedSkill(skill)}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    style={{
                      borderColor: isSelected || isHovered ? skill.color : 'rgba(255,255,255,0.08)',
                      boxShadow: isSelected || isHovered ? `0 0 20px ${skill.color}50` : 'none',
                    }}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#080d20] border-2 flex items-center justify-center cursor-pointer transition-all duration-300 group"
                  >
                    <span 
                      className="text-xs md:text-sm font-display font-medium group-hover:text-white transition-colors duration-300"
                      style={{ color: isSelected || isHovered ? '#ffffff' : '#9ca3af' }}
                    >
                      {skill.name.substring(0, 4)}
                    </span>
                    
                    {/* Small Orbit Dot */}
                    {(isSelected || isHovered) && (
                      <span
                        className="absolute w-2 h-2 rounded-full -top-1 left-1/2 -translate-x-1/2 animate-[spin_4s_linear_infinite]"
                        style={{ backgroundColor: skill.color }}
                      />
                    )}
                  </div>

                  {/* Fully displayed Floating Name under planet */}
                  <span className={`absolute top-14 left-1/2 -translate-x-1/2 text-[10px] font-mono whitespace-nowrap transition-colors duration-200 ${isSelected ? 'text-white font-semibold' : 'text-gray-500'}`}>
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Left Column: Mobile & Tablet View (Responsive Grid Layout) */}
          <div className="lg:hidden col-span-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 w-full self-start">
            {SKILLS.map((skill) => {
              const isSelected = selectedSkill.name === skill.name;
              return (
                <button
                  key={skill.name}
                  onClick={() => setSelectedSkill(skill)}
                  className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-white/10 border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)]'
                      : 'bg-white/[0.01] border-white/5 hover:bg-white/5 hover:border-white/10'
                  }`}
                >
                  <div
                    className="w-2.5 h-2.5 rounded-full shrink-0 animate-pulse"
                    style={{ backgroundColor: skill.color }}
                  />
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-semibold text-white truncate">{skill.name}</span>
                    <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wider">{skill.category}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Telemetry System Telemetry HUD */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <AnimatePresence mode="wait">
              {selectedSkill && (
                <motion.div
                  key={selectedSkill.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="glass-panel border border-white/5 bg-[#070b19]/30 rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full relative overflow-hidden shadow-2xl"
                >
                  {/* Decorative telemetry glow corner */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full filter blur-[50px] pointer-events-none opacity-25"
                    style={{ backgroundColor: selectedSkill.color }}
                  />

                  {/* Header */}
                  <div>
                    <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center text-white border font-bold"
                          style={{ 
                            backgroundColor: `${selectedSkill.color}15`,
                            borderColor: `${selectedSkill.color}30`,
                            color: selectedSkill.color
                          }}
                        >
                          {selectedSkill.name[0]}
                        </div>
                        <div>
                          <h3 className="text-xl font-display font-semibold text-white">{selectedSkill.name}</h3>
                          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{selectedSkill.category} Module</span>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                        Lvl {selectedSkill.level}%
                      </span>
                    </div>

                    {/* Stats block */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/[0.02] border border-white/5 p-3 rounded-lg text-left">
                        <span className="text-[10px] text-gray-500 font-mono block">EXPERIENCE</span>
                        <span className="text-lg font-display font-semibold text-white">
                          {selectedSkill.experienceYears} <span className="text-xs text-gray-400 font-normal">Years</span>
                        </span>
                      </div>
                      <div className="bg-white/[0.02] border border-white/5 p-3 rounded-lg text-left">
                        <span className="text-[10px] text-gray-500 font-mono block">INTEGRATIONS</span>
                        <span className="text-lg font-display font-semibold text-white">
                          {selectedSkill.projectsCount} <span className="text-xs text-gray-400 font-normal">Projects</span>
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="text-left space-y-2 mb-6">
                      <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest flex items-center gap-1.5">
                        <Eye size={12} className="text-primary-accent" /> Node Telemetry Description
                      </span>
                      <p className="text-sm text-gray-300 leading-relaxed bg-white/[0.01] border border-white/5 p-3.5 rounded-lg">
                        {selectedSkill.description}
                      </p>
                    </div>

                    {/* Featured project links */}
                    <div className="text-left space-y-2.5">
                      <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest flex items-center gap-1.5">
                        <GitBranch size={12} className="text-secondary-accent" /> Active Deployments
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {selectedSkill.featuredProjects.map((proj) => (
                          <span 
                            key={proj} 
                            className="text-xs font-mono px-2.5 py-1 rounded bg-[#0a1024] text-white border border-white/5 flex items-center gap-1.5"
                          >
                            <Star size={10} className="text-[#FFE047]" /> {proj}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Flow integrity validator */}
                  <div className="mt-8 border-t border-white/5 pt-4 flex items-center justify-between text-[10px] font-mono text-gray-500">
                    <span className="flex items-center gap-1">
                      <Layers size={10} className="text-emerald-400" /> STABLE DESCRIPTOR
                    </span>
                    <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                      <Database size={10} /> SYNCHRONIZED
                    </span>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
