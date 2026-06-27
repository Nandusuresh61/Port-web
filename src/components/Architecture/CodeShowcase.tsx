import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CODE_FILES } from '../../data/portfolioData';
import { FileCode, Terminal, GitBranch, Shield, Play, Layers } from 'lucide-react';

export const CodeShowcase: React.FC = () => {
  const [selectedFileIdx, setSelectedFileIdx] = useState(0);
  const [terminalTab, setTerminalTab] = useState<'console' | 'git'>('console');
  const [typedCode, setTypedCode] = useState('');

  const activeFile = CODE_FILES[selectedFileIdx];

  // Typing animation effect when switching files
  useEffect(() => {
    setTypedCode('');

    const fullCode = activeFile.code;
    let currentText = '';
    let i = 0;
    
    // Type in larger chunks for longer codes to ensure speed
    const stepSize = Math.max(1, Math.floor(fullCode.length / 80));
    
    const interval = setInterval(() => {
      if (i >= fullCode.length) {
        setTypedCode(fullCode);
        clearInterval(interval);
        return;
      }
      currentText += fullCode.substring(i, i + stepSize);
      setTypedCode(currentText);
      i += stepSize;
    }, 15);

    return () => clearInterval(interval);
  }, [selectedFileIdx, activeFile.code]);

  const serverLogs = [
    '[SYSTEM] Boot sequence successfully initialized.',
    '[DB] MongoDB cluster primary shard linked - status: green.',
    '[PORT] API Core active at http://localhost:5000.',
    '[HTTP] GET /api/v1/workspaces - 200 OK - 8.4ms',
    '[WS] WebSocket sync dispatcher connection opened.',
    '[HTTP] POST /api/v1/tasks/new - 201 Created - 41.2ms',
    '[DB] aggregate pipeline triggered: { $match: { workspaceId: "acme" } }',
    '[HTTP] GET /api/v1/tasks - 304 Not Modified - 1.2ms'
  ];

  const gitLogs = [
    'commit b291fa841b9fe0 (HEAD -> main, origin/main)',
    'Author: Nandu Suresh <nandusuress@gmail.com>',
    'Date:   Sat Jun 27 10:42:01 2026 +0530',
    '',
    '    feat: enforce strict domain decoupling on Task Use Cases',
    '    ',
    '    - Add Guard class validation boundaries',
    '    - Add strict interface types to DB repository contracts',
    '    - Deploy unit verification tests with 100% coverage',
    '',
    'commit a109df2481024a',
    'Author: Nandu Suresh <nandusuress@gmail.com>',
    '    feat: initialize socket.io workspace syncing heartbeat'
  ];

  return (
    <section id="code-showcase" className="relative min-h-screen w-full py-24 px-4 md:px-8 bg-[#030611] overflow-hidden flex flex-col justify-center border-t border-white/5">
      {/* Background gradients */}
      <div className="absolute top-[30%] left-[-10%] w-[45%] h-[45%] bg-primary-accent/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[45%] h-[45%] bg-highlight/5 rounded-full filter blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full relative z-[2]">
        
        {/* Header Title */}
        <div className="max-w-xl mx-auto text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono uppercase tracking-widest text-primary-accent mb-2"
          >
            System Console
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Code Showcase
          </motion.h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Interact with the editor files to inspect core system classes, routes, and schemas.
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary-accent to-highlight mx-auto mt-4 rounded-full"
          />
        </div>

        {/* VS Code Window Simulator Box */}
        <div className="w-full max-w-5xl mx-auto glass-panel border border-white/5 bg-[#060a16]/80 rounded-xl overflow-hidden shadow-2xl flex flex-col min-h-[580px]">
          
          {/* 1. Header Toolbar (Window dots & tabs) */}
          <div className="bg-[#090f22] border-b border-white/5 px-4 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="text-xs text-gray-500 font-mono ml-4 hidden sm:inline">vscode://nandu-suresh-workspace</span>
            </div>

            {/* File tabs selection */}
            <div className="flex bg-[#030612] p-1 rounded-lg border border-white/5">
              {CODE_FILES.map((file, idx) => (
                <button
                  key={file.filename}
                  onClick={() => setSelectedFileIdx(idx)}
                  className={`px-3 py-1.5 rounded font-mono text-[10px] flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                    selectedFileIdx === idx 
                      ? 'bg-white/5 text-white border border-white/10' 
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  <FileCode size={12} className={selectedFileIdx === idx ? 'text-primary-accent' : 'text-gray-500'} />
                  <span>{file.filename}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Main Workspace Split: Sidebar (folders) & Code Editor Panel */}
          <div className="flex-grow grid grid-cols-1 md:grid-cols-12 items-stretch min-h-[320px]">
            
            {/* Folder Explorer (Sidebar) - 3 cols */}
            <div className="hidden md:block md:col-span-3 bg-[#080d1e]/80 border-r border-white/5 p-4 text-left select-none">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-4">Workspace Files</span>
              
              <div className="space-y-3 font-mono text-xs text-gray-400">
                <div className="text-gray-500 flex items-center gap-1.5"><Layers size={12} /> src/</div>
                
                <div className="pl-3 space-y-2">
                  <div className="text-gray-500 flex items-center gap-1.5"><Layers size={12} /> core/</div>
                  <div className="pl-4 text-white flex items-center gap-1.5 font-medium cursor-pointer" onClick={() => setSelectedFileIdx(0)}>
                    <FileCode size={12} className="text-primary-accent" /> TaskUseCase.ts
                  </div>

                  <div className="text-gray-500 flex items-center gap-1.5"><Layers size={12} /> server/</div>
                  <div className="pl-4 text-white flex items-center gap-1.5 cursor-pointer" onClick={() => setSelectedFileIdx(1)}>
                    <FileCode size={12} className="text-emerald-400" /> Server.js
                  </div>
                  
                  <div className="pl-4 text-white flex items-center gap-1.5 cursor-pointer" onClick={() => setSelectedFileIdx(2)}>
                    <FileCode size={12} className="text-purple-400" /> WorkspaceModel.js
                  </div>
                </div>
              </div>
            </div>

            {/* Code Text Panel - 9 cols */}
            <div className="md:col-span-9 bg-[#040815]/95 p-6 text-left relative overflow-hidden flex flex-col justify-between">
              
              {/* Context Tag top right */}
              <div className="absolute top-4 right-4 bg-white/5 border border-white/10 rounded px-2.5 py-1 text-[9px] font-mono text-gray-500">
                {activeFile.language.toUpperCase()}
              </div>

              {/* Code scroll view */}
              <div className="font-mono text-xs md:text-sm text-gray-300 overflow-y-auto max-h-[350px] scrollbar-none select-text pr-2 leading-relaxed">
                <pre className="whitespace-pre-wrap">
                  <code>{typedCode}</code>
                  <span className="w-1.5 h-4 bg-primary-accent inline-block animate-pulse ml-0.5" />
                </pre>
              </div>

              {/* Code Description footer note */}
              <div className="mt-4 border-t border-white/5 pt-3.5 flex items-start gap-2.5">
                <Shield size={14} className="text-primary-accent mt-0.5 shrink-0" />
                <p className="text-[10px] md:text-xs text-gray-400 font-sans leading-relaxed">
                  {activeFile.description}
                </p>
              </div>
            </div>

          </div>

          {/* 3. Terminal/Output Tray at Bottom */}
          <div className="bg-[#030612] border-t border-white/5 p-4 flex flex-col justify-between h-44">
            
            {/* Terminal Tab Selector */}
            <div className="flex items-center gap-4 border-b border-white/5 pb-2 mb-2 select-none">
              <button
                onClick={() => setTerminalTab('console')}
                className={`text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5 pb-1 transition-colors duration-200 cursor-pointer ${
                  terminalTab === 'console' 
                    ? 'text-white border-b-2 border-primary-accent font-semibold' 
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                <Terminal size={12} />
                <span>Active Server Telemetry</span>
              </button>

              <button
                onClick={() => setTerminalTab('git')}
                className={`text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5 pb-1 transition-colors duration-200 cursor-pointer ${
                  terminalTab === 'git' 
                    ? 'text-white border-b-2 border-primary-accent font-semibold' 
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                <GitBranch size={12} />
                <span>Git Commits</span>
              </button>

              <div className="ml-auto flex items-center gap-1 text-[8px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                <Play size={8} className="fill-current" /> RUNNING PREVIEW
              </div>
            </div>

            {/* Log list outputs */}
            <div className="flex-grow overflow-y-auto space-y-1 font-mono text-[9px] text-gray-400 text-left scrollbar-none select-text">
              {terminalTab === 'console' ? (
                serverLogs.map((log, idx) => (
                  <div key={idx} className="leading-normal flex gap-1.5">
                    <span className="text-gray-600">[{new Date().toLocaleDateString()}]</span>
                    <span className={log.includes('[SYSTEM]') ? 'text-blue-400' : log.includes('[DB]') ? 'text-purple-400' : 'text-gray-400'}>
                      {log}
                    </span>
                  </div>
                ))
              ) : (
                gitLogs.map((log, idx) => (
                  <div key={idx} className="leading-normal">
                    {log}
                  </div>
                ))
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
