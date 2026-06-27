import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, ArrowRight, Terminal, RefreshCw, Layers, CheckCircle2 
} from 'lucide-react';

interface TaskItem {
  id: string;
  title: string;
  priority: 'low' | 'medium' | 'high';
  category: string;
  assignee: string;
}

interface WorkspaceTasks {
  [key: string]: {
    todo: TaskItem[];
    inProgress: TaskItem[];
    inReview: TaskItem[];
    done: TaskItem[];
  }
}

export const ProjectFlowShowcase: React.FC = () => {

  const [activeWorkspace, setActiveWorkspace] = useState<'acme' | 'personal' | 'oss'>('acme');
  const [boardState, setBoardState] = useState<WorkspaceTasks>({
    acme: {
      todo: [
        { id: 'acme-1', title: 'Review SSO OAuth2 logs', priority: 'high', category: 'Security', assignee: 'NS' },
        { id: 'acme-2', title: 'Write container build rules', priority: 'medium', category: 'DevOps', assignee: 'NS' }
      ],
      inProgress: [
        { id: 'acme-3', title: 'Refactor task DND endpoints', priority: 'high', category: 'Backend', assignee: 'NS' }
      ],
      inReview: [
        { id: 'acme-4', title: 'Optimize Postgres indexing', priority: 'high', category: 'Database', assignee: 'NS' }
      ],
      done: [
        { id: 'acme-5', title: 'Setup clean log formatter', priority: 'low', category: 'LogEngine', assignee: 'NS' }
      ]
    },
    personal: {
      todo: [
        { id: 'pers-1', title: 'Compile WebGL stars grid', priority: 'medium', category: 'Frontend', assignee: 'NS' }
      ],
      inProgress: [
        { id: 'pers-2', title: 'Write canvas particle physics', priority: 'high', category: 'Canvas', assignee: 'NS' }
      ],
      inReview: [
        { id: 'pers-3', title: 'Audit bundle dependencies', priority: 'low', category: 'Build', assignee: 'NS' }
      ],
      done: [
        { id: 'pers-4', title: 'Configure tailwind.config v4', priority: 'medium', category: 'Styles', assignee: 'NS' }
      ]
    },
    oss: {
      todo: [
        { id: 'oss-1', title: 'Draft release notes v2.4.0', priority: 'low', category: 'Docs', assignee: 'NS' }
      ],
      inProgress: [
        { id: 'oss-2', title: 'Migrate unit tests to Vitest', priority: 'high', category: 'Testing', assignee: 'NS' }
      ],
      inReview: [
        { id: 'oss-3', title: 'Translate settings options', priority: 'medium', category: 'i18n', assignee: 'NS' }
      ],
      done: [
        { id: 'oss-4', title: 'Merge PR #412 refactor-auth', priority: 'high', category: 'Auth', assignee: 'NS' }
      ]
    }
  });

  // Task creation form state
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState<'low' | 'medium' | 'high'>('medium');

  // Request flow animation state
  // Phases: null -> 'presentation' -> 'application' -> 'domain' -> 'infrastructure' -> 'response' -> null
  const [flowPhase, setFlowPhase] = useState<null | 'presentation' | 'application' | 'domain' | 'infrastructure' | 'response'>(null);
  const [consoleLogs, setConsoleLogs] = useState<string[]>(['[System]: Socket connected to port 5000.', '[System]: Workspace loaded successfully.']);

  // Helper to append console logs
  const addLog = (msg: string) => {
    setConsoleLogs((prev) => [...prev.slice(-8), `[${new Date().toLocaleTimeString()}] ${msg}`]);
  };

  // Run architectural request flow animation before committing state action
  const triggerRequestFlow = (actionDescription: string, commitAction: () => void) => {
    if (flowPhase !== null) return; // Prevent double trigger
    addLog(`Initiating action: ${actionDescription}`);

    // Step 1: Presentation layer
    setFlowPhase('presentation');
    addLog(`HTTP POST Request caught at Presentation Layer (React Component). Raw DTO: "${actionDescription.substring(0, 25)}..."`);

    // Step 2: Application UseCase (after 800ms)
    setTimeout(() => {
      setFlowPhase('application');
      addLog(`Invoking application UseCase layer. Decoupling Express controllers, parsing DTO into Domain requirements.`);
    }, 1000);

    // Step 3: Domain Entity validation (after 1800ms)
    setTimeout(() => {
      setFlowPhase('domain');
      addLog(`Entering core Domain Entity validation. Running SOLID guard checks, testing entity state invariants.`);
    }, 2000);

    // Step 4: Infrastructure DB persist (after 2800ms)
    setTimeout(() => {
      setFlowPhase('infrastructure');
      addLog(`Dependency Inversion injection: Infrastructure Repository persistent call. Writing record to database cluster.`);
    }, 3000);

    // Step 5: Database returns response and pushes back to client UI (after 3800ms)
    setTimeout(() => {
      setFlowPhase('response');
      addLog(`Infrastructure persisted. Returning database status codes: 201 Created. Bubbling up to Presentation.`);
    }, 4000);

    // Step 6: Apply the actual state change and clear flow state
    setTimeout(() => {
      commitAction();
      setFlowPhase(null);
      addLog(`Presentation state updated. WebSocket Broadcast sent. Interface re-rendered at 60 FPS.`);
    }, 4800);
  };

  // Move task card to next column
  const handleMoveCard = (taskId: string, currentColumn: 'todo' | 'inProgress' | 'inReview' | 'done') => {
    const nextColMap = {
      todo: 'inProgress',
      inProgress: 'inReview',
      inReview: 'done',
      done: null
    } as const;

    const nextColumn = nextColMap[currentColumn];
    if (!nextColumn) return;

    const task = boardState[activeWorkspace][currentColumn].find(t => t.id === taskId);
    if (!task) return;

    const commitAction = () => {
      setBoardState((prev) => {
        const workspaceData = prev[activeWorkspace];
        return {
          ...prev,
          [activeWorkspace]: {
            ...workspaceData,
            [currentColumn]: workspaceData[currentColumn].filter(t => t.id !== taskId),
            [nextColumn]: [...workspaceData[nextColumn], task]
          }
        };
      });
    };

    triggerRequestFlow(`Move Task [${task.title}] to ${nextColumn}`, commitAction);
  };

  // Add a new task card
  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const newTask: TaskItem = {
      id: `task-${Date.now()}`,
      title: newTaskTitle,
      priority: newTaskPriority,
      category: 'Feature',
      assignee: 'NS'
    };

    const commitAction = () => {
      setBoardState((prev) => {
        const workspaceData = prev[activeWorkspace];
        return {
          ...prev,
          [activeWorkspace]: {
            ...workspaceData,
            todo: [...workspaceData.todo, newTask]
          }
        };
      });
      setNewTaskTitle('');
    };

    triggerRequestFlow(`Create Task [${newTask.title}]`, commitAction);
  };

  const getPriorityColor = (p: string) => {
    if (p === 'high') return 'text-red-400 bg-red-500/10 border-red-500/20';
    if (p === 'medium') return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
    return 'text-sky-400 bg-sky-500/10 border-sky-500/20';
  };

  return (
    <section id="projectflow-showcase" className="relative min-h-screen w-full py-24 px-4 md:px-8 bg-bg-dark overflow-hidden flex flex-col justify-center border-t border-white/5">
      {/* Background decorations */}
      <div className="absolute top-[40%] left-[-10%] w-[55%] h-[55%] bg-primary-accent/5 rounded-full filter blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[45%] h-[45%] bg-highlight/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-[2]">
        
        {/* Title Block */}
        <div className="text-left mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-0.5 w-8 bg-primary-accent" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary-accent font-semibold">Flagship Showcase</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              Inside ProjectFlow Architecture
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-3xl leading-relaxed">
              ProjectFlow is built around standard Clean Architecture design boundaries. To demonstrate this separation of concerns, execute actions on the mock Kanban board below and watch the request trace down through the application layers in real-time.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="https://projectflow.nandusuresh.online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary-accent/30 bg-primary-accent/5 hover:bg-primary-accent/15 text-primary-accent font-display text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(79,139,255,0.15)] hover:scale-[1.02]"
            >
              <span>Launch Live Site</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Major Showcase Box */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-stretch w-full">
          
          {/* Left Block: The Interactive Kanban Dashboard (8 cols on XL) */}
          <div className="xl:col-span-8 flex flex-col glass-panel border border-white/5 bg-[#060a18]/60 rounded-2xl overflow-hidden shadow-2xl">
            
            {/* Header top bar */}
            <div className="bg-[#0b1124]/80 border-b border-white/5 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">websocket sync connected</span>
                </div>
                <span className="text-xs text-gray-500 font-mono hidden sm:inline">|</span>
                <span className="text-xs text-gray-400 font-mono hidden sm:inline">User: nandu_suresh</span>
              </div>
              
              {/* Workspace buttons */}
              <div className="flex bg-white/5 p-1 rounded-lg border border-white/5">
                {(['acme', 'personal', 'oss'] as const).map((ws) => (
                  <button
                    key={ws}
                    disabled={flowPhase !== null}
                    onClick={() => {
                      setActiveWorkspace(ws);
                      addLog(`Switched active workspace to "${ws.toUpperCase()}"`);
                    }}
                    className={`px-3 py-1.5 rounded-md font-display text-[10px] uppercase font-bold tracking-wider transition-all duration-300 ${
                      activeWorkspace === ws 
                        ? 'bg-primary-accent text-white shadow-[0_0_12px_rgba(79,139,255,0.4)]' 
                        : 'text-gray-400 hover:text-white cursor-pointer'
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {ws === 'acme' ? 'Acme Corp' : ws === 'personal' ? 'Personal' : 'OSS Core'}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Interactive Arena */}
            <div className="p-6 flex-grow grid grid-cols-1 md:grid-cols-4 gap-4 items-stretch select-none">
              
              {/* Columns map */}
              {(['todo', 'inProgress', 'inReview', 'done'] as const).map((colName) => {
                const tasks = boardState[activeWorkspace][colName];
                const colLabels = {
                  todo: { title: 'To Do', border: 'border-blue-500/25', dot: 'bg-blue-400' },
                  inProgress: { title: 'In Progress', border: 'border-amber-500/25', dot: 'bg-amber-400' },
                  inReview: { title: 'In Review', border: 'border-purple-500/25', dot: 'bg-purple-400' },
                  done: { title: 'Completed', border: 'border-emerald-500/25', dot: 'bg-emerald-400' }
                };

                return (
                  <div 
                    key={colName} 
                    className={`bg-white/[0.015] border ${colLabels[colName].border} rounded-xl p-4 flex flex-col min-h-[250px]`}
                  >
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${colLabels[colName].dot}`} />
                        <h4 className="text-xs font-display font-semibold text-white">{colLabels[colName].title}</h4>
                      </div>
                      <span className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded">
                        {tasks.length}
                      </span>
                    </div>

                    <div className="space-y-3 flex-grow overflow-y-auto scrollbar-none">
                      <AnimatePresence>
                        {tasks.map((task) => (
                          <motion.div
                            key={task.id}
                            layoutId={task.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-[#0b1227]/90 border border-white/5 p-3 rounded-lg flex flex-col justify-between text-left shadow-lg hover:border-white/10 transition-colors duration-200 relative group"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[9px] font-mono text-gray-400">{task.category}</span>
                              <span className={`text-[8px] font-mono font-bold px-1.5 py-0.5 border rounded uppercase ${getPriorityColor(task.priority)}`}>
                                {task.priority}
                              </span>
                            </div>
                            
                            <h5 className="text-xs text-white font-medium mb-3.5 leading-snug">
                              {task.title}
                            </h5>

                            <div className="flex items-center justify-between pt-2 border-t border-white/5">
                              <div className="w-5 h-5 rounded-full bg-primary-accent/15 border border-primary-accent/25 flex items-center justify-center text-[9px] font-mono text-primary-accent">
                                {task.assignee}
                              </div>

                              {colName !== 'done' && (
                                <button
                                  disabled={flowPhase !== null}
                                  onClick={() => handleMoveCard(task.id, colName)}
                                  className="text-[9px] font-mono text-primary-accent hover:text-secondary-accent flex items-center gap-1 transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                  <span>Promote</span>
                                  <ArrowRight size={10} />
                                </button>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>

                      {tasks.length === 0 && (
                        <div className="flex-grow flex items-center justify-center py-8">
                          <span className="text-[10px] font-mono text-gray-600 uppercase">empty stack</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

            </div>

            {/* Bottom Add Task Form Panel */}
            <div className="bg-[#080d1e]/80 border-t border-white/5 p-4 flex flex-col md:flex-row items-center gap-4">
              <form onSubmit={handleAddTask} className="w-full flex flex-col sm:flex-row items-center gap-3">
                <input
                  type="text"
                  placeholder="Create new task on board..."
                  value={newTaskTitle}
                  disabled={flowPhase !== null}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  className="w-full sm:flex-grow bg-white/5 border border-white/5 hover:border-white/10 focus:border-primary-accent focus:bg-white/10 rounded-lg px-4 py-2 text-xs font-sans text-white focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <select
                    value={newTaskPriority}
                    disabled={flowPhase !== null}
                    onChange={(e) => setNewTaskPriority(e.target.value as any)}
                    className="bg-[#0b1227] border border-white/5 rounded-lg px-3 py-2 text-xs font-mono text-gray-400 focus:outline-none focus:border-primary-accent shrink-0 disabled:opacity-50"
                  >
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                  </select>

                  <button
                    type="submit"
                    disabled={flowPhase !== null || !newTaskTitle.trim()}
                    className="px-4 py-2 rounded-lg bg-primary-accent hover:bg-primary-accent/80 text-white font-display text-xs font-semibold tracking-wide transition-all duration-300 shadow-[0_0_12px_rgba(79,139,255,0.3)] disabled:opacity-40 disabled:shadow-none disabled:cursor-not-allowed flex items-center gap-1.5 cursor-pointer shrink-0"
                  >
                    <Plus size={14} />
                    <span>Create Task</span>
                  </button>
                </div>
              </form>
            </div>

          </div>

          {/* Right Block: Clean Architecture Flow Visualizer (4 cols on XL) */}
          <div className="xl:col-span-4 flex flex-col gap-6">
            
            {/* Architecture Node Stack */}
            <div className="glass-panel border border-white/5 bg-[#060a18]/40 rounded-2xl p-6 flex flex-col justify-between flex-grow shadow-2xl relative">
              <h3 className="text-sm font-display font-semibold text-white mb-6 flex items-center gap-2 border-b border-white/5 pb-3">
                <Layers size={16} className="text-primary-accent" /> Clean Architecture Pipeline
              </h3>

              {/* Stacking Layers */}
              <div className="space-y-4 relative z-[2]">
                
                {/* 1. Presentation Layer Node */}
                <ArchitectureLayerNode
                  active={flowPhase === 'presentation'}
                  label="1. Presentation Layer"
                  sublabel="React View / Tailwind CSS"
                  description="Catches DTO inputs, formats view data, monitors DOM state."
                  colorClass="border-blue-500/35 bg-blue-500/5 text-blue-400 shadow-blue-500/20"
                />

                {/* 2. Application Layer Node */}
                <ArchitectureLayerNode
                  active={flowPhase === 'application'}
                  label="2. Application Layer"
                  sublabel="Use Cases / Decoupled Logic"
                  description="Invokes domain entities. Zero database framework dependencies."
                  colorClass="border-amber-500/35 bg-amber-500/5 text-amber-400 shadow-amber-500/20"
                />

                {/* 3. Domain Layer Node */}
                <ArchitectureLayerNode
                  active={flowPhase === 'domain'}
                  label="3. Domain Core (SOLID)"
                  sublabel="Entities / Guard Invariants"
                  description="Validates enterprise business rules. Pure logic."
                  colorClass="border-purple-500/35 bg-purple-500/5 text-purple-400 shadow-purple-500/20"
                />

                {/* 4. Infrastructure Layer Node */}
                <ArchitectureLayerNode
                  active={flowPhase === 'infrastructure'}
                  label="4. Infrastructure Layer"
                  sublabel="MongoDB / PostgreSQL / Drivers"
                  description="Implements DB operations through Repository interface."
                  colorClass="border-emerald-500/35 bg-emerald-500/5 text-emerald-400 shadow-emerald-500/20"
                />

              </div>

              {/* Animated Progress Signal overlay */}
              {flowPhase === 'response' && (
                <div className="absolute inset-0 z-[3] bg-emerald-500/5 backdrop-blur-[1px] border border-emerald-500/20 rounded-2xl flex flex-col items-center justify-center gap-2 p-6 animate-pulse">
                  <CheckCircle2 size={36} className="text-emerald-400" />
                  <span className="text-xs font-mono font-bold text-emerald-400">PIPELINE COMMIT SUCCESS</span>
                  <span className="text-[10px] text-gray-500 font-mono text-center">Entity validated and persisted to databases.</span>
                </div>
              )}
            </div>

            {/* Terminal Logs Panel */}
            <div className="glass-panel border border-white/5 bg-[#02050c]/90 rounded-2xl p-5 shadow-2xl h-48 flex flex-col">
              <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
                  <Terminal size={12} className="text-primary-accent" /> node telemetry logs
                </span>
                <button
                  onClick={() => setConsoleLogs([])}
                  className="text-[9px] font-mono text-gray-600 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Clear Console
                </button>
              </div>

              <div className="flex-grow overflow-y-auto space-y-1.5 font-mono text-[9px] text-gray-400 text-left scrollbar-none pr-1 select-text">
                {consoleLogs.map((log, idx) => (
                  <div key={idx} className="leading-normal flex items-start gap-1">
                    <span className="text-primary-accent shrink-0">&gt;</span>
                    <span>{log}</span>
                  </div>
                ))}
                {flowPhase !== null && (
                  <div className="flex items-center gap-1 text-secondary-accent animate-pulse">
                    <span>&gt;</span>
                    <RefreshCw size={8} className="animate-spin" />
                    <span>Processing request flow...</span>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

// Architecture Node helper component
interface ArchitectureNodeProps {
  active: boolean;
  label: string;
  sublabel: string;
  description: string;
  colorClass: string;
}

const ArchitectureLayerNode: React.FC<ArchitectureNodeProps> = ({
  active,
  label,
  sublabel,
  description,
  colorClass
}) => {
  return (
    <div 
      className={`border rounded-xl p-3.5 text-left transition-all duration-300 relative overflow-hidden ${
        active 
          ? `${colorClass} shadow-[0_0_20px_rgba(255,255,255,0.05)] border-white/40 scale-[1.03]` 
          : 'border-white/5 bg-white/[0.005] opacity-50'
      }`}
    >
      <div className="flex items-center justify-between mb-1">
        <h4 className={`text-xs font-display font-semibold ${active ? '' : 'text-gray-400'}`}>{label}</h4>
        <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest">{sublabel}</span>
      </div>
      <p className="text-[10px] text-gray-400 leading-normal">
        {description}
      </p>

      {/* Pulsing signal background light */}
      {active && (
        <div className="absolute inset-0 bg-white/[0.02] animate-pulse pointer-events-none" />
      )}
    </div>
  );
};
