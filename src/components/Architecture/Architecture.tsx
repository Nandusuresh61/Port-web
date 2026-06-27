import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Cpu, Database, Server, Terminal } from 'lucide-react';

interface LayerInfo {
  name: string;
  subtitle: string;
  details: string[];
  dependencyRule: string;
  icon: React.ReactNode;
}

export const Architecture: React.FC = () => {
  const [selectedRing, setSelectedRing] = useState<'domain' | 'application' | 'infrastructure'>('domain');

  const ringsData: Record<'domain' | 'application' | 'infrastructure', LayerInfo> = {
    domain: {
      name: 'Domain Core (Entities)',
      subtitle: 'The Heart of the Enterprise',
      details: [
        'Contains enterprise business entities and validation rules.',
        'Zero outer framework imports (completely decoupled from DB/HTTP).',
        'Implements strict type guards and invariant rule validation.',
        'Highest level of code reuse and stability.'
      ],
      dependencyRule: 'Independent: Has no knowledge of databases, endpoints, or frameworks.',
      icon: <Cpu size={20} className="text-purple-400" />
    },
    application: {
      name: 'Application Use Cases',
      subtitle: 'Orchestrating Business Operations',
      details: [
        'Implements application-specific business actions (e.g. CreateTaskUseCase).',
        'Orchestrates data flow to and from Domain entities.',
        'Defines boundary interfaces (ports) for repositories.',
        'Directly maps client DTOs to entity structures.'
      ],
      dependencyRule: 'Points Inward: Only relies on the Domain Core. Interacts with DB via Repository interfaces.',
      icon: <Terminal size={20} className="text-amber-400" />
    },
    infrastructure: {
      name: 'Infrastructure & Adaptors',
      subtitle: 'The Delivery Channels',
      details: [
        'Implements repository interfaces using MongoDB, Postgres, or AWS S3.',
        'Handles HTTP Express routers, controllers, and socket listeners.',
        'Configures security middleware, JWT, and network configurations.',
        'Prone to frequent change when technologies scale.'
      ],
      dependencyRule: 'Outer Bound: Translates raw requests/DB queries into interfaces required by Application Use Cases.',
      icon: <Database size={20} className="text-blue-400" />
    }
  };

  return (
    <section id="architecture" className="relative min-h-screen w-full py-24 px-4 md:px-8 bg-bg-dark overflow-hidden flex flex-col justify-center border-t border-white/5">
      {/* Background Blobs */}
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-highlight/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[50%] h-[50%] bg-secondary-accent/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-[2]">
        
        {/* Title block */}
        <div className="max-w-xl mx-auto text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono uppercase tracking-widest text-primary-accent mb-2"
          >
            Design Patterns
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Clean Architecture Paradigm
          </motion.h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Decoupled dependencies enforce stability. Inspect the concentric circles to see how Nandu structures production applications.
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary-accent to-highlight mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Core Layout split: SVG Diagram on Left, Telemetry on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Left Side: Circular SVG Concentric Diagram */}
          <div className="lg:col-span-7 flex justify-center items-center relative min-h-[350px] md:min-h-[480px]">
            
            {/* Interactive Outer Glow Ring Wrapper */}
            <div className="relative w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] flex items-center justify-center">
              
              <svg viewBox="0 0 500 500" className="w-full h-full select-none">
                
                {/* 1. Infrastructure Layer Outer Circle */}
                <circle
                  cx="250"
                  cy="250"
                  r="210"
                  fill="rgba(5, 8, 22, 0.2)"
                  stroke={selectedRing === 'infrastructure' ? '#4F8BFF' : 'rgba(255, 255, 255, 0.04)'}
                  strokeWidth={selectedRing === 'infrastructure' ? 2 : 1}
                  className="cursor-pointer transition-all duration-300 hover:fill-blue-500/[0.02]"
                  onClick={() => setSelectedRing('infrastructure')}
                />
                
                {/* 2. Application Layer Middle Circle */}
                <circle
                  cx="250"
                  cy="250"
                  r="140"
                  fill="rgba(5, 8, 22, 0.3)"
                  stroke={selectedRing === 'application' ? '#FFE047' : 'rgba(255, 255, 255, 0.05)'}
                  strokeWidth={selectedRing === 'application' ? 2 : 1}
                  className="cursor-pointer transition-all duration-300 hover:fill-amber-500/[0.02]"
                  onClick={() => setSelectedRing('application')}
                />
                
                {/* 3. Domain Core Inner Circle */}
                <circle
                  cx="250"
                  cy="250"
                  r="70"
                  fill="rgba(123, 97, 255, 0.1)"
                  stroke={selectedRing === 'domain' ? '#7B61FF' : 'rgba(123, 97, 255, 0.2)'}
                  strokeWidth={selectedRing === 'domain' ? 3 : 1.5}
                  className="cursor-pointer transition-all duration-300 hover:fill-[#7B61FF]/15"
                  onClick={() => setSelectedRing('domain')}
                />

                {/* Animated Pulsing Dependency Inversion Arrows (Pulsing Inward to Core) */}
                {/* Outer to Middle */}
                <path
                  d="M 250,20 L 250,100 M 480,250 L 400,250 M 250,480 L 250,400 M 20,250 L 100,250"
                  stroke="rgba(79, 139, 255, 0.3)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="4, 4"
                  className="animate-[pulse_2s_infinite]"
                />

                {/* Middle to Inner */}
                <path
                  d="M 250,110 L 250,170 M 390,250 L 330,250 M 250,390 L 250,330 M 110,250 L 170,250"
                  stroke="rgba(255, 224, 71, 0.3)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="4, 4"
                  className="animate-[pulse_1.5s_infinite]"
                />

                {/* Labels inside the SVG rings */}
                <text
                  x="250"
                  y="252"
                  fill="#7B61FF"
                  fontSize="12"
                  fontFamily="monospace"
                  textAnchor="middle"
                  fontWeight="bold"
                  className="pointer-events-none tracking-widest"
                >
                  DOMAIN CORE
                </text>

                <text
                  x="250"
                  y="125"
                  fill="#94a3b8"
                  fontSize="10"
                  fontFamily="monospace"
                  textAnchor="middle"
                  className="pointer-events-none font-semibold tracking-wider opacity-60"
                >
                  APPLICATION USE CASES
                </text>

                <text
                  x="250"
                  y="21"
                  fill="#475569"
                  fontSize="9"
                  fontFamily="monospace"
                  textAnchor="middle"
                  className="pointer-events-none font-semibold tracking-widest uppercase opacity-55"
                >
                  Infrastructure / Adapters (DB, Web, Cloud)
                </text>
              </svg>

              {/* Floating micro widgets displaying active status around the architecture circle */}
              <div className="absolute top-8 left-12 flex items-center gap-1.5 glass-panel p-2 rounded-lg border border-white/5 text-[9px] font-mono text-gray-400">
                <Server size={10} className="text-blue-400" />
                <span>Express Server Adaptor</span>
              </div>

              <div className="absolute bottom-8 right-6 flex items-center gap-1.5 glass-panel p-2 rounded-lg border border-white/5 text-[9px] font-mono text-gray-400">
                <Database size={10} className="text-emerald-400" />
                <span>MongoDB Repository</span>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Ring Telemetry Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel border border-white/5 bg-[#070b19]/30 rounded-2xl p-6 md:p-8 text-left shadow-2xl relative overflow-hidden min-h-[380px] flex flex-col justify-between">
              
              {/* Telemetry panel glow */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary-accent/10 rounded-full filter blur-[50px] pointer-events-none" />

              <div>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary-accent">
                      {ringsData[selectedRing].icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-semibold text-white">
                        {ringsData[selectedRing].name}
                      </h3>
                      <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-0.5">
                        {ringsData[selectedRing].subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Dependency Rule Callout */}
                <div className="bg-black/35 border border-white/5 rounded-xl p-4 mb-6 text-left flex items-start gap-3">
                  <ShieldAlert size={16} className="text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[9px] text-gray-500 font-mono block">DEPENDENCY CONSTRAINT</span>
                    <span className="text-xs text-red-400 font-mono font-semibold">
                      {ringsData[selectedRing].dependencyRule}
                    </span>
                  </div>
                </div>

                {/* Layer bullet items */}
                <ul className="space-y-3 pl-0 list-none">
                  {ringsData[selectedRing].details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-accent mt-2 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom navigation selectors */}
              <div className="mt-8 border-t border-white/5 pt-5 flex justify-between gap-2.5">
                {(['domain', 'application', 'infrastructure'] as const).map((r) => (
                  <button
                    key={r}
                    onClick={() => setSelectedRing(r)}
                    className={`flex-grow py-2 rounded-lg font-display text-[9px] uppercase tracking-wider font-bold transition-all duration-300 ${
                      selectedRing === r
                        ? 'bg-primary-accent/10 border border-primary-accent/30 text-primary-accent shadow-[0_0_12px_rgba(79,139,255,0.15)]'
                        : 'bg-white/5 border border-white/5 text-gray-400 hover:text-white cursor-pointer'
                    }`}
                  >
                    {r === 'domain' ? 'Domain' : r === 'application' ? 'Application' : 'Infrastructure'}
                  </button>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
