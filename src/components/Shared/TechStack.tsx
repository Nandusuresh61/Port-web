import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Server, Database, GitMerge, Check, Code, Shield } from 'lucide-react';

interface TechItem {
  name: string;
  category: 'client' | 'server' | 'database' | 'ops';
  details: string;
  fluency: string; // e.g. "Advanced", "Expert"
}

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'client' | 'server' | 'database' | 'ops'>('client');

  const categories = [
    { id: 'client', label: 'Client Engine', icon: <Layout size={14} />, desc: 'Frontend frameworks, responsive interfaces, state management.' },
    { id: 'server', label: 'Server Core', icon: <Server size={14} />, desc: 'Backend microservices, routers, APIs, real-time channels.' },
    { id: 'database', label: 'Registers & Clusters', icon: <Database size={14} />, desc: 'Document schemas, Relational SQL, aggregation and cache layers.' },
    { id: 'ops', label: 'Cloud & Assembly', icon: <GitMerge size={14} />, desc: 'AWS provisioning, containers, CI/CD integrations, developer environment.' }
  ] as const;

  const techItems: TechItem[] = [
    // Client
    { name: 'React 19', category: 'client', details: 'Hooks, Concurrent rendering, Actions, Server Components', fluency: 'Expert' },
    { name: 'TypeScript', category: 'client', details: 'Strict typing, advanced generics, utility types mapping', fluency: 'Expert' },
    { name: 'Next.js App Router', category: 'client', details: 'Server Actions, RSC caching, hybrid SSR/SSG compilation', fluency: 'Advanced' },
    { name: 'Tailwind CSS v4', category: 'client', details: 'Custom theme directives, fluid layout utilities, responsive grids', fluency: 'Expert' },
    { name: 'Zustand / Redux', category: 'client', details: 'Central stores, action dispatchers, persist middleware configurations', fluency: 'Expert' },
    { name: 'Framer Motion', category: 'client', details: 'Physics-based animations, layout transitions, drag gestures', fluency: 'Expert' },
    
    // Server
    { name: 'Node.js Cluster', category: 'server', details: 'Asynchronous event engines, file streams, child threads logs', fluency: 'Expert' },
    { name: 'Express APIs', category: 'server', details: 'Custom routing controllers, authorization gates, error handler middleware', fluency: 'Expert' },
    { name: 'Socket.io Core', category: 'server', details: 'Real-time duplex transport channels, workspace rooms, heartbeat sync', fluency: 'Advanced' },
    { name: 'REST & GraphQL', category: 'server', details: 'Endpoint layout design, payload schemas, query resolvers', fluency: 'Advanced' },
    { name: 'JWT & OAuth2', category: 'server', details: 'Secure token exchange, session management, cookie authentication', fluency: 'Advanced' },

    // Database
    { name: 'MongoDB Atlas', category: 'database', details: 'Aggregations pipelines, compound indexes, replica sets clusters', fluency: 'Expert' },
    { name: 'PostgreSQL SQL', category: 'database', details: 'ACID transactions, relation mappings, foreign keys constraints', fluency: 'Advanced' },
    { name: 'Redis Cache', category: 'database', details: 'Key-value temporary buffers, database query caching layers', fluency: 'Intermediate' },
    { name: 'Sequelize / Prisma', category: 'database', details: 'Database schema migration, type-safe query generators', fluency: 'Advanced' },

    // DevOps
    { name: 'AWS EC2 & S3', category: 'ops', details: 'Instance provisioning, VPC networks, CloudFront CDN, security groups', fluency: 'Advanced' },
    { name: 'Docker Containers', category: 'ops', details: 'Multi-stage dockerfiles compilation, compose services links', fluency: 'Intermediate' },
    { name: 'GitHub CI/CD Actions', category: 'ops', details: 'Automated lint runs, Vitest checks, Vercel deployments triggers', fluency: 'Advanced' },
    { name: 'Git rebasing', category: 'ops', details: 'Interactive branch refactoring, cherry-picking, conflicts merge', fluency: 'Expert' }
  ];

  const activeTechs = techItems.filter(item => item.category === activeCategory);

  const getInstallerCommand = () => {
    switch (activeCategory) {
      case 'client': return 'npm i react@19 react-dom@19 typescript tailwindcss framer-motion zustand';
      case 'server': return 'npm i express socket.io jsonwebtoken dotenv cors helmethp';
      case 'database': return 'npm i mongodb mongoose pg pg-hstore sequelize redis';
      case 'ops': return 'docker-compose up --build -d && git checkout -b prod-release';
    }
  };

  return (
    <section id="tech-stack" className="relative py-24 px-4 md:px-8 bg-bg-dark overflow-hidden flex flex-col justify-center border-t border-white/5">
      {/* Background blobs */}
      <div className="absolute top-[20%] left-[-10%] w-[45%] h-[45%] bg-primary-accent/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[25%] right-[-10%] w-[45%] h-[45%] bg-highlight/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-[2]">
        
        {/* Title */}
        <div className="max-w-xl mx-auto text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono uppercase tracking-widest text-primary-accent mb-2"
          >
            Engineering Stack
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Integrated Tech Stack
          </motion.h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Review detailed descriptions of framework architectures and packages used across MERN deployments.
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary-accent to-highlight mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
          
          {/* Left Column: Category selectors & Terminal display (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Categories */}
            <div className="glass-panel border border-white/5 bg-[#060a18]/40 rounded-2xl p-5 md:p-6 shadow-xl flex flex-col gap-3">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest text-left mb-2">Systems Directory</span>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full p-4 rounded-xl border text-left flex items-start gap-4 transition-all duration-300 cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-primary-accent/10 border-primary-accent/30 text-white shadow-[0_0_15px_rgba(79,139,255,0.15)]'
                      : 'bg-white/[0.005] border-white/5 text-gray-400 hover:text-white hover:bg-white/[0.02]'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-300 ${
                    activeCategory === cat.id ? 'bg-primary-accent text-white border-primary-accent/20' : 'bg-white/5 text-gray-400 border-white/10'
                  }`}>
                    {cat.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-display font-semibold">{cat.label}</span>
                    <span className="text-[10px] text-gray-500 mt-1 leading-normal">{cat.desc}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Mock Package Installer Terminal */}
            <div className="glass-panel border border-white/5 bg-[#02040b]/90 rounded-2xl p-5 shadow-2xl text-left">
              <div className="flex items-center gap-2 border-b border-white/5 pb-2 mb-3 select-none">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="text-[10px] text-gray-500 font-mono ml-2">package_installer.sh</span>
              </div>
              <div className="font-mono text-[10px] space-y-2 select-text text-gray-400">
                <div className="flex gap-1">
                  <span className="text-primary-accent">&gt;</span>
                  <span>{getInstallerCommand()}</span>
                </div>
                <div className="text-gray-600">
                  Initializing package download...<br />
                  Verifying module peer dependencies...<br />
                  Compiling bundle binaries...<br />
                  <span className="text-emerald-400">Success. Stems added to project modules tree.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Tech Details listing (7 cols) */}
          <div className="lg:col-span-7 glass-panel border border-white/5 bg-[#060a18]/40 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden min-h-[480px]">
            
            {/* Glow backing */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary-accent/5 rounded-full filter blur-[50px] pointer-events-none" />

            <div className="space-y-6">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest text-left block">Active Module Specifications</span>

              <div className="grid grid-cols-1 gap-4">
                <AnimatePresence mode="popLayout">
                  {activeTechs.map((tech) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="p-4 rounded-xl bg-white/[0.01] border border-white/5 hover:border-white/10 hover:bg-white/[0.02] flex items-center justify-between text-left group transition-all duration-300"
                    >
                      <div className="flex flex-col gap-1.5 max-w-[80%]">
                        <div className="flex items-center gap-2.5">
                          <h4 className="text-sm font-display font-semibold text-white group-hover:text-primary-accent transition-colors duration-200">{tech.name}</h4>
                          <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10 uppercase tracking-wider font-semibold">
                            {tech.fluency}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 leading-normal">{tech.details}</p>
                      </div>
                      
                      <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                        <Check size={12} />
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Verification signature */}
            <div className="mt-8 border-t border-white/5 pt-5 flex items-center justify-between text-[10px] font-mono text-gray-500">
              <span className="flex items-center gap-1">
                <Shield size={10} className="text-primary-accent" /> SSL STACK CONFIRMATION
              </span>
              <span className="flex items-center gap-1">
                <Code size={10} /> TSC 6.0 COMPLIANT
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
