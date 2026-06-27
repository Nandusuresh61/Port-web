import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cpu, Terminal, Compass, GraduationCap, ShieldCheck } from 'lucide-react';

interface AboutCardProps {
  title: string;
  icon: React.ReactNode;
  content: string[];
  gradientText: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ title, icon, content, gradientText }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to card center (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    // Tilt degree limit: 12 degrees max
    setRotate({
      x: -mouseY * 12,
      y: mouseX * 12
    });

    // Glow position percentage
    const glowX = ((e.clientX - rect.left) / width) * 100;
    const glowY = ((e.clientY - rect.top) / height) * 100;
    setGlow({ x: glowX, y: glowY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: rotate.x === 0 ? 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)' : 'none'
      }}
      className="relative flex flex-col justify-between glass-panel p-6 md:p-8 rounded-xl border border-white/5 bg-white/[0.015] hover:bg-white/[0.04] transition-all duration-300 w-full min-h-[320px] select-none group cursor-grab active:cursor-grabbing overflow-hidden shadow-xl"
    >
      {/* Light border reflection overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle 250px at ${glow.x}% ${glow.y}%, rgba(255, 255, 255, 0.08), transparent 70%)`
        }}
      />
      
      {/* Interactive color glow highlight */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle 120px at ${glow.x}% ${glow.y}%, rgba(79, 139, 255, 0.15), transparent 80%)`
        }}
      />

      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary-accent group-hover:text-secondary-accent transition-colors duration-300">
            {icon}
          </div>
          <span className={`text-[10px] font-mono uppercase tracking-widest ${gradientText}`}>
            Core Principle
          </span>
        </div>

        <h3 className="text-xl font-display font-semibold text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">
          {title}
        </h3>

        <ul className="space-y-2.5 text-sm text-gray-400 text-left list-none pl-0">
          {content.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-accent/70 mt-2 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const cardsData = [
    {
      title: 'Profile Summary',
      icon: <GraduationCap size={22} />,
      gradientText: 'text-primary-accent',
      content: [
        '3-year Electronics Diploma graduate bridging software interfaces with systems architecture.',
        'Intensive full-stack training with over 800 hours committed to modern web paradigms.',
        'Committed to compiling clean, secure, and production-tested codes.'
      ]
    },
    {
      title: 'Developer Philosophy',
      icon: <Terminal size={22} />,
      gradientText: 'text-secondary-accent',
      content: [
        'Adherent of SOLID and OOP principles ensuring high code modularity.',
        'Strong implementation of Clean Architecture to separate domain business rules.',
        'Commitment to type safety, documentation integrity, and clean interface schemas.'
      ]
    },
    {
      title: 'System Thinking',
      icon: <Cpu size={22} />,
      gradientText: 'text-highlight',
      content: [
        'Holistic view on optimization, from browser render timings to DB index layers.',
        'Designing secure REST APIs, WebSocket protocols, and data models.',
        'Structuring scalable structures optimized for high responsiveness.'
      ]
    },
    {
      title: 'Core Values',
      icon: <Compass size={22} />,
      gradientText: 'text-emerald-400',
      content: [
        'Pixel-perfect interfaces using structured Tailwind and reusable component models.',
        'Constant developer refinement through DSA practice and algorithmic problem solving.',
        'Transparent communications, clean commits, and comprehensive unit-testing.'
      ]
    }
  ];

  return (
    <section id="about" className="relative min-h-screen w-full py-24 px-4 md:px-8 bg-bg-dark overflow-hidden flex flex-col justify-center">
      {/* Background radial effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-highlight/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full text-center relative z-[2]">
        
        {/* Title Heading */}
        <div className="max-w-xl mx-auto text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono uppercase tracking-widest text-primary-accent mb-2"
          >
            Engineering Foundation
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Architectural Philosophy
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary-accent to-highlight mx-auto rounded-full"
          />
        </div>

        {/* Floating Cards Grid */}
        <motion.div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.8, 0.25, 1] }}
            >
              <AboutCard
                title={card.title}
                icon={card.icon}
                content={card.content}
                gradientText={card.gradientText}
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Developer Philosophy Footer Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 max-w-3xl mx-auto glass-panel p-6 rounded-xl border border-white/5 bg-white/[0.01] flex flex-col md:flex-row items-center gap-6 justify-between"
        >
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4 className="text-white font-display font-medium text-sm">Strict Standard Compliance</h4>
              <p className="text-gray-400 text-xs mt-0.5">Every system module complies with standard validation structures and dependency layers.</p>
            </div>
          </div>
          <div className="text-xs font-mono text-gray-500 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
            npm run lint -- --strict
          </div>
        </motion.div>

      </div>
    </section>
  );
};
