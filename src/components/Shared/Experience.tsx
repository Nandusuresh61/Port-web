import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Star, ShieldCheck } from 'lucide-react';

interface JobRole {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  metrics: string[];
  techs: string[];
}

export const Experience: React.FC = () => {
  const job: JobRole = {
    id: 'freelance',
    role: 'Freelance Full-Stack Engineer',
    company: 'Contract / Client Deployments',
    period: 'June 2024 - Present',
    location: 'Remote',
    highlights: [
      'Architected cloud ERP solution (Fabrico) for manufacturing inventories, replacing spreadsheets.',
      'Engineered responsive custom streaming views with low-latency API call gateways.',
      'Developed security rules using JWT, cookies sessions, and Role-Based Access Controls (RBAC).',
      'Implemented database transaction safeguards ensuring ACID updates under high concurrency.'
    ],
    metrics: [
      'Reduced client inventory latency from minutes to real-time (under 100ms updates).',
      'Achieved 99.9% application uptime on AWS deployments.',
      'Improved Lighthouse scores from average 70s to 95+.'
    ],
    techs: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'AWS', 'Tailwind CSS']
  };

  return (
    <section id="experience" className="relative min-h-screen w-full py-24 px-4 md:px-8 bg-[#030610] overflow-hidden flex flex-col justify-center border-t border-white/5">
      {/* Background decorations */}
      <div className="absolute top-[40%] left-[-15%] w-[55%] h-[55%] bg-primary-accent/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[45%] h-[45%] bg-highlight/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-[2]">
        
        {/* Title Block */}
        <div className="max-w-xl mx-auto text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono uppercase tracking-widest text-primary-accent mb-2"
          >
            Engineering Roles
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Professional Experience
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary-accent to-highlight mx-auto rounded-full"
          />
        </div>

        {/* Detailed Experience Panel */}
        <div className="max-w-3xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel border border-white/5 bg-[#060a18]/40 rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl text-left"
          >
            {/* Decorative glow backing */}
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full filter blur-[50px] pointer-events-none opacity-10"
              style={{ backgroundColor: '#4F8BFF' }}
            />

            <div>
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/5 pb-4 mb-6 gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary-accent shrink-0">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-white">
                      {job.role}
                    </h3>
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block">
                      {job.company} • {job.location}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-primary-accent bg-primary-accent/10 border border-primary-accent/20 px-3 py-1 rounded-lg shrink-0 self-start md:self-auto">
                  {job.period}
                </span>
              </div>

              {/* Highlights list */}
              <div className="space-y-4 mb-8">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">Core Duties</span>
                <ul className="space-y-3 pl-0 list-none">
                  {job.highlights.map((high, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-accent mt-2 shrink-0" />
                      <span>{high}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics achievements */}
              <div className="space-y-4 mb-6">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">Key Outcomes</span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {job.metrics.map((met, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white/[0.01] border border-white/5 text-left flex items-start gap-2.5 hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300">
                      <Star size={14} className="text-[#FFE047] shrink-0 mt-0.5" />
                      <span className="text-[11px] text-gray-400 leading-normal">{met}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills tagging footer */}
            <div className="mt-8 border-t border-white/5 pt-5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {job.techs.map((tech) => (
                  <span key={tech} className="text-[9px] font-mono bg-white/[0.03] text-gray-400 px-2 py-0.5 rounded border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
              <span className="text-[9px] font-mono text-gray-500 flex items-center gap-1">
                <ShieldCheck size={12} className="text-emerald-400" /> STABILITY VERIFIED
              </span>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};
