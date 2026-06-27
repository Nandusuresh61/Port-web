import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../../data/portfolioData';
import type { Project } from '../../types';
import { ExternalLink, Activity, Layers, Play, CheckCircle } from 'lucide-react';

const GithubIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface ProjectsProps {
  onScrollToProjectFlow: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onScrollToProjectFlow }) => {
  return (
    <section id="projects" className="relative min-h-screen w-full py-24 px-4 md:px-8 bg-bg-dark overflow-hidden flex flex-col justify-center">
      {/* Background blobs */}
      <div className="absolute top-[30%] right-[-10%] w-[45%] h-[45%] bg-highlight/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[45%] h-[45%] bg-primary-accent/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-[2]">
        
        {/* Section Header */}
        <div className="max-w-xl mx-auto text-center mb-20">
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono uppercase tracking-widest text-primary-accent mb-2"
          >
            Engineering Portfolio
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Featured Deployments
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary-accent to-highlight mx-auto rounded-full"
          />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch w-full">
          
          {/* Flagship Project Card - Gates to custom Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
            className="lg:col-span-1 glass-panel border-2 border-primary-accent/30 bg-[#081024]/40 rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_0_40px_rgba(79,139,255,0.15)] group"
          >
            {/* Animated accent gradient blob */}
            <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-primary-accent/20 filter blur-[40px] group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono text-primary-accent bg-primary-accent/10 border border-primary-accent/20 px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold">
                  Flagship SaaS System
                </span>
                <span className="text-xs text-gray-500 font-mono">01 / 03</span>
              </div>

              <h3 className="text-3xl font-display font-bold text-white mb-2 group-hover:text-gradient-cyan transition-all duration-300">
                ProjectFlow
              </h3>
              
              <p className="text-xs text-gray-400 font-mono mb-4">
                Enterprise Workspace & Agile Planner
              </p>

              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                An advanced agile software development workspace utilizing clean architecture backend boundaries. Features socket synchronization and interactive board controls.
              </p>

              <div className="space-y-3.5 mb-8 text-left">
                <div className="flex items-center gap-2.5 text-xs text-gray-300">
                  <CheckCircle size={14} className="text-primary-accent" />
                  <span>Real-time Kanban dragging</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-gray-300">
                  <CheckCircle size={14} className="text-primary-accent" />
                  <span>Clean architecture design layers</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-gray-300">
                  <CheckCircle size={14} className="text-primary-accent" />
                  <span>Multi-tenant workspaces</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {/* Technologies list */}
              <div className="flex flex-wrap gap-1.5">
                {['React 19', 'Node.js', 'PostgreSQL', 'Socket.io'].map(t => (
                  <span key={t} className="text-[10px] font-mono bg-white/5 border border-white/5 text-gray-400 px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>

              {/* Call to action trigger */}
              <button
                onClick={onScrollToProjectFlow}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-primary-accent to-highlight text-white font-display text-xs font-semibold hover:shadow-[0_0_20px_rgba(79,139,255,0.4)] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                <Play size={12} className="fill-current" />
                <span>Launch Interactive Demo</span>
              </button>
            </div>
          </motion.div>

          {/* Standard Project 2: Fabrico */}
          <ProjectCard 
            project={PROJECTS[1]}
            index="02"
            onAction={onScrollToProjectFlow}
          />

          {/* Standard Project 3: Netflix Clone */}
          <ProjectCard 
            project={PROJECTS[2]}
            index="03"
            onAction={onScrollToProjectFlow}
          />

        </div>

      </div>
    </section>
  );
};

// Internal Subcomponent for standard cards
interface ProjectCardProps {
  project: Project;
  index: string;
  onAction: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.8, 0.25, 1] }}
      className="glass-panel border border-white/5 bg-white/[0.015] hover:bg-white/[0.04] transition-all duration-300 rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden shadow-xl group"
    >
      {/* Glow shadow based on project color */}
      <div 
        className="absolute -top-12 -right-12 w-32 h-32 rounded-full filter blur-[40px] group-hover:scale-125 transition-transform duration-500 opacity-20 pointer-events-none"
        style={{ backgroundColor: project.accentColor }}
      />

      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest bg-white/5 border border-white/5 px-2 py-0.5 rounded">
            {project.category}
          </span>
          <span className="text-xs text-gray-500 font-mono">{index} / 03</span>
        </div>

        <h3 className="text-2xl font-display font-semibold text-white mb-1.5 group-hover:translate-x-1 transition-all duration-300">
          {project.title}
        </h3>
        
        <p className="text-xs text-gray-500 font-mono mb-4">
          {project.subtitle}
        </p>

        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Dynamic Architectural details breakdown */}
        <div className="bg-black/25 border border-white/5 rounded-lg p-3.5 mb-6 text-left space-y-2">
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
            <Layers size={10} style={{ color: project.accentColor }} /> Project Architecture
          </span>
          <p className="text-xs text-gray-400 leading-relaxed">
            {project.architecture.description}
          </p>
        </div>

        {/* Telemetry Metrics */}
        <div className="bg-[#050816]/40 border border-white/5 p-3 rounded-lg text-left flex justify-between items-center mb-6">
          <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest flex items-center gap-1">
            <Activity size={10} style={{ color: project.accentColor }} /> system logs
          </span>
          <div className="flex gap-2">
            {project.metrics.slice(0, 2).map((m, idx) => (
              <span key={idx} className="text-[9px] font-mono text-emerald-400 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10">
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {/* Technologies list */}
        <div className="flex flex-wrap gap-1">
          {project.technologies.slice(0, 5).map(t => (
            <span key={t} className="text-[9px] font-mono bg-white/[0.03] text-gray-400 px-2 py-0.5 rounded">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-2 border-t border-white/5">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors duration-200"
          >
            <GithubIcon size={14} />
            <span>Source Code</span>
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors duration-200 ml-auto"
          >
            <span>Live Demo</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
