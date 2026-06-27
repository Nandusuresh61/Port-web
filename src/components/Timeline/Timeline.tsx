import React from 'react';
import { motion } from 'framer-motion';
import { TIMELINE_ITEMS } from '../../data/portfolioData';
import { Calendar, Briefcase, GraduationCap, Award, Compass, Star, ArrowRight } from 'lucide-react';

export const Timeline: React.FC = () => {
  
  // Decide Icon based on type
  const getTimelineIcon = (type: string) => {
    switch (type) {
      case 'academic':
        return <GraduationCap size={18} />;
      case 'bootcamp':
        return <Award size={18} />;
      case 'project':
        return <Briefcase size={18} />;
      case 'future':
        return <Compass size={18} />;
      default:
        return <Star size={18} />;
    }
  };

  return (
    <section id="journey" className="relative min-h-screen w-full py-24 px-4 md:px-8 bg-bg-dark overflow-hidden flex flex-col justify-center">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary-accent/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-highlight/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-dot-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-[2]">
        
        {/* Section Header */}
        <div className="max-w-xl mx-auto text-center mb-20">
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono uppercase tracking-widest text-primary-accent mb-2"
          >
            Milestones
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Engineering Journey
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary-accent to-highlight mx-auto rounded-full"
          />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary-accent via-highlight to-transparent -translate-x-[1px]" />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {TIMELINE_ITEMS.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={item.id} 
                  className="flex flex-col md:flex-row items-stretch md:justify-between relative w-full"
                >
                  {/* Outer dot/icon on the center line */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-[3] flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ type: 'spring', damping: 12, stiffness: 100 }}
                      className="w-9 h-9 rounded-full bg-[#050816] border-2 flex items-center justify-center text-white cursor-pointer transition-all duration-300 hover:scale-110 shadow-lg"
                      style={{
                        borderColor: item.accentColor,
                        boxShadow: `0 0 15px ${item.accentColor}40`
                      }}
                    >
                      {getTimelineIcon(item.type)}
                    </motion.div>
                  </div>

                  {/* Desktop alignment columns */}
                  {/* Left Column */}
                  <div className="w-full md:w-[45%] pl-12 md:pl-0 flex md:justify-end">
                    {isEven ? (
                      <TimelineCard item={item} isEven={isEven} />
                    ) : (
                      <div className="hidden md:block w-full" />
                    )}
                  </div>

                  {/* Middle Column Spacer */}
                  <div className="hidden md:block md:w-[10%]" />

                  {/* Right Column */}
                  <div className="w-full md:w-[45%] pl-12 md:pl-0 flex md:justify-start">
                    {!isEven ? (
                      <TimelineCard item={item} isEven={isEven} />
                    ) : (
                      <div className="hidden md:block w-full" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

// Internal Subcomponent to keep code clean and animate individually
interface TimelineCardProps {
  item: typeof TIMELINE_ITEMS[0];
  isEven: boolean;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ item, isEven }) => {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: isMobile ? 25 : (isEven ? -40 : 40), y: 10 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
      className="w-full max-w-xl glass-panel p-5 md:p-6 rounded-xl border border-white/5 bg-white/[0.015] hover:bg-white/[0.04] transition-all duration-300 relative shadow-xl text-left"
    >
      {/* Glow aura */}
      <div 
        className="absolute top-0 right-0 w-24 h-24 rounded-full filter blur-[35px] pointer-events-none opacity-20"
        style={{ backgroundColor: item.accentColor }}
      />

      {/* Date badge */}
      <div className="flex items-center gap-2 mb-3">
        <Calendar size={12} className="text-gray-500" />
        <span 
          className="text-xs font-mono font-bold"
          style={{ color: item.accentColor }}
        >
          {item.year}
        </span>
        <span className="text-[10px] text-gray-500 font-mono px-2 py-0.5 rounded bg-white/5 uppercase">
          {item.type}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-display font-semibold text-white mb-0.5">
        {item.title}
      </h3>
      
      {/* Organization */}
      <div className="text-xs font-mono text-gray-400 mb-4">
        {item.organization}
      </div>

      {/* Description */}
      <p className="text-sm text-gray-300 leading-relaxed mb-4">
        {item.description}
      </p>

      {/* Accordion/Bullets list */}
      <ul className="space-y-1.5 text-xs text-gray-400 list-none pl-0 mb-4 border-l border-white/10 pl-2">
        {item.details.map((detail, idx) => (
          <li key={idx} className="relative pl-2.5">
            <span className="absolute left-0 top-[6px] w-1 h-1 rounded-full bg-gray-600" />
            {detail}
          </li>
        ))}
      </ul>

      {/* Skill tags & Live Link */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <div className="flex flex-wrap gap-1.5">
          {item.skills.map((skill) => (
            <span 
              key={skill} 
              className="text-[10px] font-mono px-2 py-1 rounded bg-white/[0.03] text-gray-300 border border-white/5 hover:border-white/20 transition-all duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
        {item.liveUrl && (
          <a
            href={item.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase px-2.5 py-1.5 rounded bg-primary-accent/15 border border-primary-accent/30 text-primary-accent hover:bg-primary-accent/25 transition-all duration-200 cursor-pointer shadow-[0_0_10px_rgba(79,139,255,0.1)]"
          >
            <span>Live Site</span>
            <ArrowRight size={10} />
          </a>
        )}
      </div>
    </motion.div>
  );
};
