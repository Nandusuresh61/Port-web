import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Loader } from './components/Loader/Loader';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Timeline } from './components/Timeline/Timeline';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { ProjectFlowShowcase } from './components/Projects/ProjectFlowShowcase';
import { Architecture } from './components/Architecture/Architecture';
import { TechStack } from './components/Shared/TechStack';
import { Experience } from './components/Shared/Experience';
import { Achievements } from './components/Shared/Achievements';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { CanvasBackground } from './components/Shared/CanvasBackground';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <div className="relative min-h-screen bg-bg-dark text-white select-none selection:bg-primary-accent/30 selection:text-white">
          {/* Global interactive particle backdrop */}
          <CanvasBackground density={50} speed={0.3} />
          
          {/* Cinematic noise film overlay */}
          <div className="noise-overlay" />

          {/* Navigation/Header bar */}
          <header className="fixed top-0 left-0 w-full z-50 bg-bg-dark/10 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-7 h-7 rounded bg-gradient-to-r from-primary-accent to-highlight flex items-center justify-center text-white border border-white/10 font-bold text-sm">
                N
              </div>
              <span className="font-display font-bold text-white text-sm tracking-wide">Nandu Suresh</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-6 text-[10px] font-mono uppercase tracking-wider text-gray-400">
              <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
              <a href="#journey" className="hover:text-white transition-colors duration-200">Journey</a>
              <a href="#skills" className="hover:text-white transition-colors duration-200">Skills</a>
              <a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a>
              <a href="#architecture" className="hover:text-white transition-colors duration-200">Architecture</a>
              <a href="#experience" className="hover:text-white transition-colors duration-200">Experience</a>
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  scrollToSection('contact');
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-1.5 rounded-lg border border-primary-accent/30 bg-primary-accent/5 hover:bg-primary-accent/15 text-primary-accent font-display text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-[0_0_12px_rgba(79,139,255,0.1)]"
              >
                Secure Tunnel
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-1.5 rounded-lg border border-white/10 bg-white/5 text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </header>

          {/* Mobile Fullscreen Navigation Overlay */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="fixed inset-0 z-40 bg-[#030611]/95 backdrop-blur-lg flex flex-col justify-center px-8 md:hidden"
              >
                <nav className="flex flex-col gap-6 text-lg font-display font-semibold tracking-wider text-left mt-16">
                  <a
                    href="#about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-400 hover:text-white border-b border-white/5 pb-2 transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="#journey"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-400 hover:text-white border-b border-white/5 pb-2 transition-colors"
                  >
                    Journey
                  </a>
                  <a
                    href="#skills"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-400 hover:text-white border-b border-white/5 pb-2 transition-colors"
                  >
                    Skills
                  </a>
                  <a
                    href="#projects"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-400 hover:text-white border-b border-white/5 pb-2 transition-colors"
                  >
                    Projects
                  </a>
                  <a
                    href="#architecture"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-400 hover:text-white border-b border-white/5 pb-2 transition-colors"
                  >
                    Architecture
                  </a>
                  <a
                    href="#experience"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-400 hover:text-white border-b border-white/5 pb-2 transition-colors"
                  >
                    Experience
                  </a>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Page Sections */}
          <main className="relative pt-16">
            
            {/* 1. Hero Landing Arena */}
            <Hero 
              onScrollToProjects={() => scrollToSection('projects')} 
              onScrollToProjectFlow={() => scrollToSection('projectflow-showcase')}
            />

            {/* 2. Architectural Values */}
            <About />

            {/* 3. Milestone Journey Timeline */}
            <Timeline />

            {/* 4. Skills Planet Universe */}
            <Skills />

            {/* 5. Deployments Showcase */}
            <Projects 
              onScrollToProjectFlow={() => scrollToSection('projectflow-showcase')}
            />

            {/* 6. Flagship ProjectFlow Showcase */}
            <ProjectFlowShowcase />

            {/* 7. Clean Architecture Concentric Map */}
            <Architecture />

            {/* 8. Active Tech Stack */}
            <TechStack />

            {/* 9. Experience Roles Dashboard */}
            <Experience />

            {/* 10. Counter achievements */}
            <Achievements />

            {/* 12. Encryption contact Comms Hub */}
            <Contact />

          </main>

          {/* 13. Digital Neon Skyline Footer */}
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
