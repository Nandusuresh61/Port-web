import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#02050e] pt-20 pb-10 px-4 md:px-8 overflow-hidden border-t border-white/5 select-none">
      
      {/* Background decoration skyline / stars */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-primary-accent/5 to-transparent pointer-events-none" />

      {/* Skyline vector drawing at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 opacity-[0.03] pointer-events-none z-[1]">
        <svg viewBox="0 0 1200 120" className="w-full h-full" preserveAspectRatio="none">
          {/* Flat vector buildings */}
          <path d="M 0,120 L 0,80 L 30,80 L 35,90 L 50,90 L 60,60 L 80,60 L 85,85 L 110,85 L 120,40 L 150,40 L 155,75 L 180,75 L 190,30 L 220,30 L 230,80 L 270,80 L 280,50 L 310,50 L 315,95 L 340,95 L 350,20 L 390,20 L 400,90 L 440,90 L 450,45 L 480,45 L 490,95 L 530,95 L 540,35 L 570,35 L 580,85 L 620,85 L 630,55 L 660,55 L 665,95 L 700,95 L 710,15 L 750,15 L 760,80 L 800,80 L 810,40 L 840,40 L 850,95 L 890,95 L 900,30 L 930,30 L 945,75 L 970,75 L 980,50 L 1010,50 L 1020,95 L 1060,95 L 1070,25 L 1110,25 L 1120,80 L 1160,80 L 1170,60 L 1200,60 L 1200,120 Z" fill="#ffffff" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-[2] flex flex-col items-center">
        
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full border-b border-white/5 pb-12 mb-10 text-left">
          
          {/* Logo Brand */}
          <div className="md:col-span-2 space-y-4 pr-0 md:pr-12">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-gradient-to-r from-primary-accent to-highlight flex items-center justify-center text-white border border-white/10 font-bold">
                N
              </div>
              <span className="font-display font-bold text-white text-base tracking-wide">Nandu Suresh</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
              Structuring high-performance, robust, and clean MERN stack products. Complying with strict clean code principles and architectural guard boundaries.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-bold">Sitemap</h4>
            <div className="flex flex-col gap-2.5 text-xs text-gray-500 font-medium">
              <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
              <a href="#journey" className="hover:text-white transition-colors duration-200">Milestones</a>
              <a href="#skills" className="hover:text-white transition-colors duration-200">Tech Constellation</a>
              <a href="#projects" className="hover:text-white transition-colors duration-200">Deployments</a>
            </div>
          </div>

        </div>

        {/* Bottom row: copyright + scroll top */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500 font-mono">
          
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Nandu Suresh. Crafted with</span>
            <Heart size={10} className="text-red-500 fill-current animate-pulse mx-0.5" />
            <span>& TypeScript.</span>
          </div>

          {/* Back to top button */}
          <button
            onClick={handleScrollTop}
            className="px-3.5 py-2 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 hover:text-white transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <span>Scroll to Top</span>
            <ArrowUp size={12} className="animate-[bounce_2s_infinite]" />
          </button>

        </div>

      </div>
    </footer>
  );
};
