import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Code, FileText, Terminal } from 'lucide-react';

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

const LinkedinIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Contact: React.FC = () => {
  const [hoveredSocial, setHoveredSocial] = useState<null | 'email' | 'github' | 'linkedin' | 'leetcode' | 'resume'>(null);

  const socials = [
    { id: 'email', label: 'Email', value: 'nandusuresh61@gmail.com', href: 'mailto:nandusuresh61@gmail.com', icon: <Mail size={16} /> },
    { id: 'github', label: 'GitHub', value: 'github.com/nandusuresh61', href: 'https://github.com/nandusuresh61', icon: <GithubIcon size={16} /> },
    { id: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/nandu-suresh-264599347', href: 'https://www.linkedin.com/in/nandu-suresh-264599347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', icon: <LinkedinIcon size={16} /> },
    { id: 'leetcode', label: 'LeetCode', value: 'leetcode.com/nandusuresh20', href: 'https://leetcode.com/nandusuresh20', icon: <Code size={16} /> },
    { id: 'resume', label: 'Resume', value: 'Download Portfolio PDF', href: '/resume.pdf', icon: <FileText size={16} /> }
  ] as const;

  return (
    <section id="contact" className="relative min-h-screen w-full py-24 px-4 md:px-8 bg-bg-dark overflow-hidden flex flex-col justify-center border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute top-[30%] left-[-15%] w-[55%] h-[55%] bg-[#00E5FF]/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[45%] h-[45%] bg-[#7B61FF]/5 rounded-full filter blur-[150px] pointer-events-none" />
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
            Network Interface
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Futuristic Comms Hub
          </motion.h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Establish a secure connection with system endpoints. Trace signals and link directly to active nodes.
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary-accent to-highlight mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Contact Layout */}
        <div className="max-w-xl mx-auto w-full">
          {/* Interactive Trace Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel border border-white/5 bg-[#060a18]/40 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden min-h-[400px]"
          >
            {/* Ambient grid inside hub */}
            <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

            <div>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-6">Directory Nodes</span>
              
              {/* Interactive trace SVG */}
              <div className="relative w-full h-44 mb-8 flex items-center justify-center">
                {/* Central Server Node */}
                <div className="absolute w-12 h-12 rounded-full bg-gradient-to-r from-primary-accent to-highlight shadow-[0_0_25px_rgba(79,139,255,0.5)] flex items-center justify-center border border-white/20 z-[3]">
                  <Terminal size={18} className="text-white" />
                </div>
                
                {/* Trace diagram SVG canvas */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {/* Left Trace line (Email) */}
                  <path
                    d="M 50,40 Q 120,40 190,80"
                    fill="none"
                    stroke={hoveredSocial === 'email' ? '#00E5FF' : 'rgba(255,255,255,0.04)'}
                    strokeWidth={hoveredSocial === 'email' ? 2 : 1}
                    className="transition-colors duration-300"
                    strokeDasharray={hoveredSocial === 'email' ? 'none' : '4, 4'}
                  />
                  {/* Right Trace line (Github) */}
                  <path
                    d="M 330,40 Q 260,40 210,80"
                    fill="none"
                    stroke={hoveredSocial === 'github' ? '#7B61FF' : 'rgba(255,255,255,0.04)'}
                    strokeWidth={hoveredSocial === 'github' ? 2 : 1}
                    className="transition-colors duration-300"
                    strokeDasharray={hoveredSocial === 'github' ? 'none' : '4, 4'}
                  />
                  {/* Bottom Traces */}
                  <line
                    x1="190"
                    y1="130"
                    x2="100"
                    y2="180"
                    stroke={hoveredSocial === 'linkedin' ? '#4F8BFF' : 'rgba(255,255,255,0.04)'}
                    strokeWidth={hoveredSocial === 'linkedin' ? 2 : 0.8}
                    className="transition-colors duration-300"
                  />
                  <line
                    x1="210"
                    y1="130"
                    x2="300"
                    y2="180"
                    stroke={hoveredSocial === 'leetcode' ? '#FFE047' : 'rgba(255,255,255,0.04)'}
                    strokeWidth={hoveredSocial === 'leetcode' ? 2 : 0.8}
                    className="transition-colors duration-300"
                  />
                </svg>

                {/* SVG outer circles acting as endpoints */}
                <div className="absolute top-4 left-6 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-[#050816] text-gray-500 hover:text-[#00E5FF] hover:border-[#00E5FF]/40 hover:shadow-[0_0_12px_rgba(0,229,255,0.3)] transition-all duration-300" onMouseEnter={() => setHoveredSocial('email')} onMouseLeave={() => setHoveredSocial(null)}>
                  <Mail size={14} />
                </div>
                <div className="absolute top-4 right-6 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-[#050816] text-gray-500 hover:text-[#7B61FF] hover:border-[#7B61FF]/40 hover:shadow-[0_0_12px_rgba(123,97,255,0.3)] transition-all duration-300" onMouseEnter={() => setHoveredSocial('github')} onMouseLeave={() => setHoveredSocial(null)}>
                  <GithubIcon size={14} />
                </div>
                <div className="absolute bottom-4 left-16 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-[#050816] text-gray-500 hover:text-[#4F8BFF] hover:border-[#4F8BFF]/40 hover:shadow-[0_0_12px_rgba(79,139,255,0.3)] transition-all duration-300" onMouseEnter={() => setHoveredSocial('linkedin')} onMouseLeave={() => setHoveredSocial(null)}>
                  <LinkedinIcon size={14} />
                </div>
                <div className="absolute bottom-4 right-16 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-[#050816] text-gray-500 hover:text-[#FFE047] hover:border-[#FFE047]/40 hover:shadow-[0_0_12px_rgba(255,224,71,0.3)] transition-all duration-300" onMouseEnter={() => setHoveredSocial('leetcode')} onMouseLeave={() => setHoveredSocial(null)}>
                  <Code size={14} />
                </div>
              </div>

              {/* Social buttons listing */}
              <div className="space-y-3.5">
                {socials.map((soc) => (
                  <a
                    key={soc.id}
                    href={soc.href}
                    target="_blank"
                    rel="noreferrer"
                    download={soc.id === 'resume' ? 'Nandu_Suresh_Resume.pdf' : undefined}
                    onMouseEnter={() => setHoveredSocial(soc.id)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    className="flex items-center gap-3.5 p-3 rounded-lg bg-white/[0.015] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 text-left group"
                  >
                    <div 
                      className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-primary-accent group-hover:scale-105 transition-all duration-300"
                    >
                      {soc.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-500 font-mono uppercase">{soc.label} Node</span>
                      <span className="text-xs text-white font-medium group-hover:text-primary-accent transition-colors duration-200">{soc.value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Signature status bar */}
            <div className="mt-8 border-t border-white/5 pt-4 text-[10px] font-mono text-gray-500 flex justify-between">
              <span>SECURE ENDPOINTS</span>
              <span className="text-emerald-400 font-semibold">SSL 256-BIT ENCRYPTED</span>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};
