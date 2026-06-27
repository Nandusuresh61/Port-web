import type { Skill, Project, TimelineItem, Achievement, CodeFile } from '../types';

export const HERO_TITLES = [
  'Software Engineer',
  'MERN Stack Developer',
  'System Designer',
  'Cloud Enthusiast',
  'Clean Code Advocate'
];

export const LOADER_STEPS = [
  'Initializing Portfolio...',
  'Loading Core UI Components...',
  'Compiling React 19 Engine...',
  'Checking TypeScript Configurations...',
  'Loading Clean Architecture Layers...',
  'Assembling Technology Universe...',
  'Optimizing GPU Animations...',
  'Launching Cinematic Experience...'
];

export const SKILLS: Skill[] = [
  {
    name: 'React',
    category: 'frontend',
    level: 95,
    iconName: 'React',
    description: 'Component architecture, state optimization, hooks, Concurrent features, and React 19 actions.',
    experienceYears: 2,
    projectsCount: 8,
    featuredProjects: ['ProjectFlow', 'Fabrico', 'Netflix Clone'],
    color: '#00D8FF',
    coordinates: { x: 30, y: 35 }
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    level: 90,
    iconName: 'TypeScript',
    description: 'Strict type safety, generic interfaces, advanced utility types, and structural type systems.',
    experienceYears: 2,
    projectsCount: 7,
    featuredProjects: ['ProjectFlow', 'Fabrico'],
    color: '#3178C6',
    coordinates: { x: 40, y: 20 }
  },
  {
    name: 'Node.js',
    category: 'backend',
    level: 88,
    iconName: 'Node',
    description: 'Asynchronous event-driven backend engineering, stream processing, and multi-thread clusters.',
    experienceYears: 1.5,
    projectsCount: 6,
    featuredProjects: ['ProjectFlow', 'Fabrico'],
    color: '#339933',
    coordinates: { x: 50, y: 55 }
  },
  {
    name: 'Express',
    category: 'backend',
    level: 90,
    iconName: 'Express',
    description: 'RESTful API architectures, custom middleware systems, performance optimizations, and security controls.',
    experienceYears: 1.5,
    projectsCount: 6,
    featuredProjects: ['ProjectFlow', 'Fabrico'],
    color: '#ffffff',
    coordinates: { x: 65, y: 40 }
  },
  {
    name: 'MongoDB',
    category: 'database',
    level: 85,
    iconName: 'MongoDB',
    description: 'Document-oriented modeling, complex aggregation pipelines, performance indexing, and replication clusters.',
    experienceYears: 1.5,
    projectsCount: 5,
    featuredProjects: ['ProjectFlow', 'Fabrico', 'Netflix Clone'],
    color: '#47A248',
    coordinates: { x: 58, y: 70 }
  },
  {
    name: 'PostgreSQL',
    category: 'database',
    level: 80,
    iconName: 'PostgreSQL',
    description: 'Relational design, ACID compliance, complex SQL queries, views, indexes, and connection pooling.',
    experienceYears: 1.5,
    projectsCount: 3,
    featuredProjects: ['ProjectFlow'],
    color: '#4169E1',
    coordinates: { x: 72, y: 65 }
  },
  {
    name: 'AWS',
    category: 'cloud',
    level: 78,
    iconName: 'AWS',
    description: 'Deploying robust cloud solutions using EC2, S3, RDS, Lambda functions, VPC networking, and CloudFront.',
    experienceYears: 2,
    projectsCount: 4,
    featuredProjects: ['Fabrico', 'ProjectFlow'],
    color: '#FF9900',
    coordinates: { x: 80, y: 30 }
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 92,
    iconName: 'Tailwind',
    description: 'Utility-first styling systems, custom design tokens, responsive layouts, and Tailwind v4 features.',
    experienceYears: 2,
    projectsCount: 9,
    featuredProjects: ['ProjectFlow', 'Fabrico', 'Netflix Clone'],
    color: '#38BDF8',
    coordinates: { x: 22, y: 50 }
  },
  {
    name: 'Next.js',
    category: 'frontend',
    level: 85,
    iconName: 'NextJS',
    description: 'App Router architecture, React Server Components (RSC), SSR/SSG caching, and server actions.',
    experienceYears: 2,
    projectsCount: 4,
    featuredProjects: ['ProjectFlow'],
    color: '#ffffff',
    coordinates: { x: 45, y: 38 }
  },
  {
    name: 'Git/GitHub',
    category: 'tools',
    level: 92,
    iconName: 'Git',
    description: 'Distributed version control, pull request workflows, branch actions, merge resolution, and repository hosting.',
    experienceYears: 2,
    projectsCount: 12,
    featuredProjects: ['All Deployments', 'ProjectFlow'],
    color: '#F05032',
    coordinates: { x: 28, y: 75 }
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    level: 95,
    iconName: 'JavaScript',
    description: 'Core ECMAScript paradigms, asynchronous event loops, closures, scope chains, and prototype systems.',
    experienceYears: 2,
    projectsCount: 10,
    featuredProjects: ['All Projects'],
    color: '#F7DF1E',
    coordinates: { x: 18, y: 20 }
  },
  {
    name: 'Redis',
    category: 'database',
    level: 82,
    iconName: 'Redis',
    description: 'In-memory caching architectures, pub/sub channels, session stores, and key-value operations.',
    experienceYears: 1.5,
    projectsCount: 3,
    featuredProjects: ['ProjectFlow', 'Fabrico'],
    color: '#DC382D',
    coordinates: { x: 48, y: 85 }
  },
  {
    name: 'Cloudinary',
    category: 'cloud',
    level: 80,
    iconName: 'Cloudinary',
    description: 'Cloud media uploads, optimization filters, dynamic image transformations, and responsive asset delivery.',
    experienceYears: 1.5,
    projectsCount: 3,
    featuredProjects: ['Fabrico', 'Netflix Clone'],
    color: '#3448C5',
    coordinates: { x: 88, y: 45 }
  },
  {
    name: 'Vercel',
    category: 'cloud',
    level: 90,
    iconName: 'Vercel',
    description: 'Serverless architecture deployment pipelines, edge routing, domain mapping, and preview environments.',
    experienceYears: 2,
    projectsCount: 6,
    featuredProjects: ['ProjectFlow', 'Netflix Clone'],
    color: '#ffffff',
    coordinates: { x: 70, y: 15 }
  },
  {
    name: 'DSA/Algorithms',
    category: 'tools',
    level: 85,
    iconName: 'DSA',
    description: 'Advanced data structures, dynamic programming, backtracking, search/sort optimization, and time/space complexity audits.',
    experienceYears: 2,
    projectsCount: 15,
    featuredProjects: ['LeetCode Ledger'],
    color: '#00E5FF',
    coordinates: { x: 12, y: 68 }
  },
  {
    name: 'Linux',
    category: 'tools',
    level: 80,
    iconName: 'Linux',
    description: 'Unix shell command scripting, process telemetry monitors, SSH connections, and directory access controls.',
    experienceYears: 2,
    projectsCount: 4,
    featuredProjects: ['Fabrico (AWS Setup)'],
    color: '#FCC624',
    coordinates: { x: 18, y: 85 }
  },
  {
    name: 'DevOps',
    category: 'tools',
    level: 75,
    iconName: 'DevOps',
    description: 'Docker container deployments, automated GitHub CI/CD Actions pipelines, and cloud platform routing.',
    experienceYears: 1.5,
    projectsCount: 3,
    featuredProjects: ['ProjectFlow', 'Fabrico'],
    color: '#7B61FF',
    coordinates: { x: 88, y: 75 }
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'projectflow',
    title: 'ProjectFlow',
    subtitle: 'Enterprise Workspace & Project Planner',
    description: 'An advanced real-time project management suite that supports sprint boards, active Kanban cards, workspace switching, custom automation rules, and live collaborative doc editing.',
    longDescription: 'ProjectFlow was designed to solve coordination friction in agile teams. It implements a layered Clean Architecture structure on the backend to enforce strict decoupling of business rules from databases and HTTP layers. The frontend leverages React 19 concurrent features, drag-and-drop workspace structures, optimistic UI updates, and a responsive workspace-switching system.',
    category: 'Full-Stack / Workspace Platform',
    technologies: ['React 19', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'Socket.io'],
    features: [
      'Interactive Kanban Boards with fluid drag-and-drop animations',
      'Multi-tenant workspace switching and invite-only member access',
      'Real-time active collaborative text documents',
      'Sprint backlog management with customizable automation rules',
      'Sophisticated clean architecture structure separating enterprise core from delivery'
    ],
    architecture: {
      layers: ['Presentation (React/Tailwind)', 'Application (Use Cases / Controllers)', 'Domain (Core Entities & Validation)', 'Infrastructure (MongoDB, PostgreSQL, AWS S3)'],
      description: 'The backend operates on a strict dependency-inversion model. Domain rules are placed at the core and have zero dependencies on outer framework layers. Infrastructure and controllers adapt outward to meet Domain needs.'
    },
    metrics: [
      '60 FPS UI transitions under heavy state updates',
      '<100ms average websocket response time',
      '100% test coverage on Domain validation logic'
    ],
    githubUrl: 'https://github.com/nandusuresh61/projectflow',
    liveUrl: 'https://projectflow.nandusuresh.online',
    accentColor: '#4F8BFF',
    glowColor: 'rgba(79, 139, 255, 0.4)',
    previewImage: 'projectflow'
  },
  {
    id: 'fabrico',
    title: 'Fabrico',
    subtitle: 'Industrial ERP & Manufacturing Planner',
    description: 'A cloud-based industrial resource planner enabling manufacturing plants to track assembly logs, audit material inventories, schedule labor, and forecast shipment timelines.',
    longDescription: 'Fabrico bridges the gap between hardware floor logs and cloud management. Built for complex inventories, it features dynamic search caching, a visual factory floor tracker, item ledger aggregation pipelines, and comprehensive multi-role access controls (Admin, Supervisor, Floor Worker).',
    category: 'MERN Stack / Cloud ERP',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'AWS EC2', 'AWS S3', 'Tailwind CSS'],
    features: [
      'Factory floor live logs dashboard with automatic system heartbeats',
      'Role-based Access Control (RBAC) securing warehouse ledgers',
      'Inventory forecasting engine with responsive chart aggregates',
      'Exportable audit reports with automatic PDF layout rendering'
    ],
    architecture: {
      layers: ['UI Presentation', 'Express Controllers & Routing', 'Service Logic Layers', 'Mongoose Domain Schema Controllers', 'AWS Infrastructure Logs'],
      description: 'Employs a controller-service pattern logic. Business calculations are isolated in decoupled services, facilitating unit testing and enabling easy transition to alternative databases in the future.'
    },
    metrics: [
      '99.9% uptime on AWS deployment',
      'Instant aggregate analytics under 10k items',
      'Optimistic updates reducing inventory input latency'
    ],
    githubUrl: 'https://github.com/nandusuresh61/fabrico',
    liveUrl: 'https://fabrico.nandusuresh61.dev',
    accentColor: '#00E5FF',
    glowColor: 'rgba(0, 229, 255, 0.4)',
    previewImage: 'fabrico'
  },
  {
    id: 'netflix-clone',
    title: 'Cinestream (Netflix Clone)',
    subtitle: 'Cinematic Movie Catalog & Playback UI',
    description: 'A pixel-perfect movie exploration application utilizing TMDB APIs, offering categorizations, dynamic trailer overlays, user bookmark lists, and sleek glassmorphic navigation.',
    longDescription: 'Designed to challenge frontend performance bounds. This application replicates standard Netflix catalog styling, combining custom video overlay playbacks, list caching, lazy-loading thumbnails, and smooth animated cards.',
    category: 'Frontend / Streaming Experience',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'TMDB API', 'Zustand', 'Vite'],
    features: [
      'High-performance grid browsing with lazy-loaded image posters',
      'Sleek preview overlays displaying movie statistics and trailer playbacks',
      'Custom theme configurations using HSL and Tailwind utilities',
      'Persistent personal lists managed with Zustand state'
    ],
    architecture: {
      layers: ['Framer Motion Views', 'Zustand Store Engine', 'TMDB API Gateway Integration', 'Local Storage Cache Provider'],
      description: 'Constructed around a centralized state container (Zustand) that optimizes rendering. API gateway calls are throttled and cached locally to bypass unnecessary web traffic costs.'
    },
    metrics: [
      '98/100 Lighthouse performance rating',
      '60 FPS scroll and hover scaling effects',
      '100% responsive grid adapting from 320px to 4K displays'
    ],
    githubUrl: 'https://github.com/nandusuresh61/netflix-clone',
    liveUrl: 'https://cinestream.nandusuresh61.dev',
    accentColor: '#7B61FF',
    glowColor: 'rgba(123, 97, 255, 0.4)',
    previewImage: 'netflix'
  }
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: 'education',
    year: '2020 - 2024',
    title: 'Diploma in Electronics Engineering (3-Year)',
    organization: 'Technical University',
    type: 'academic',
    description: 'Laid the bedrock of systems thinking, signal processing, and low-level computing. Explored embedded systems and software interface design.',
    details: [
      'Specialized in Microcontrollers, Digital Systems, and Computer Architecture.',
      'Developed firmware for automatic sorting robots using C++ and assembly.',
      'Represented college in National Robotics Hackathons.'
    ],
    skills: ['Embedded Systems', 'C/C++', 'Systems Thinking', 'Hardware Interfaces'],
    accentColor: '#4F8BFF'
  },
  {
    id: 'bootcamp',
    year: '2024 (Early)',
    title: 'MERN Stack Bootcamp Certification',
    organization: 'Pro Dev Academy',
    type: 'bootcamp',
    description: 'Immersed in advanced web engineering. Dedicated 800+ hours to coding complex databases, backend REST frameworks, and frontend architectures.',
    details: [
      'Graduated at the top 3% of the cohort with honors.',
      'Led the final capstone project design using a Scrum model.',
      'Mastered MongoDB aggregation pipelines and JWT-based authentication.'
    ],
    skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Data Structures'],
    accentColor: '#00E5FF'
  },
  {
    id: 'netflix-launch',
    year: '2024 (Mid)',
    title: 'Launched Cinestream Portfolio',
    organization: 'Open Source',
    type: 'project',
    description: 'Engineered a highly responsive streaming UI. Focused on achieving high Lighthouse ratings and custom glassmorphic aesthetics.',
    details: [
      'Integrated TMDB API with smart query caching.',
      'Designed responsive catalog transitions using Framer Motion.',
      'Attracted positive reviews on Reddit developer communities.'
    ],
    skills: ['React', 'Framer Motion', 'ZustandState', 'API Integration'],
    accentColor: '#7B61FF'
  },
  {
    id: 'fabrico-erp',
    year: '2024 (Late)',
    title: 'Shipped Fabrico ERP System',
    organization: 'Industrial Freelance / Client App',
    type: 'project',
    description: 'Constructed an ERP solution for a regional manufacturer, replacing manual spreadsheet logging with automated cloud registers.',
    details: [
      'Reduced inventory data entry times by 40% with optimistic updates.',
      'Deployed on AWS using EC2, RDS, and automated S3 backups.',
      'Implemented secure RBAC for floor operators and executive auditors.'
    ],
    skills: ['AWS Deployment', 'Node.js Cluster', 'Express API', 'MongoDB Atlas'],
    accentColor: '#4F8BFF'
  },
  {
    id: 'projectflow-flagship',
    year: '2025',
    title: 'Engineered ProjectFlow (Flagship Suite)',
    organization: 'SaaS Startup Project',
    type: 'project',
    description: 'Architected and launched an enterprise-grade workspace planner utilizing Clean Architecture. Emphasized codebase maintainability and testability.',
    details: [
      'Enforced domain decoupling ensuring zero framework dependencies on entities.',
      'Integrated web sockets for instant Kanban status synchronization.',
      'Configured Postgres and MongoDB hybrid data models for logs and accounts.'
    ],
    skills: ['Clean Architecture', 'WebSockets', 'PostgreSQL', 'TypeScript Generics'],
    accentColor: '#00E5FF',
    liveUrl: 'https://projectflow.nandusuresh.online'
  },
  {
    id: 'future-goals',
    year: '2026 & Beyond',
    title: 'Future Horizons: Cloud-Native & Distributed Systems',
    organization: 'Professional Focus',
    type: 'future',
    description: 'Expanding engineering expertise into large-scale distributed databases, Kubernetes container orchestration, and serverless architectures.',
    details: [
      'Earning AWS Solutions Architect Certification.',
      'Contributing to open-source distributed tracing libraries.',
      'Advocating for robust software testing and clean architectures globally.'
    ],
    skills: ['Docker & Kubernetes', 'System Design', 'Serverless', 'Distributed Logs'],
    accentColor: '#7B61FF'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'projects',
    metric: '12+',
    number: 12,
    suffix: '+',
    label: 'Projects Delivered',
    description: 'Production-ready full-stack applications, interactive UI components, and corporate SaaS interfaces.',
    glowColor: 'rgba(79, 139, 255, 0.3)'
  },
  {
    id: 'technologies',
    metric: '15+',
    number: 15,
    suffix: '+',
    label: 'Technologies Mastered',
    description: 'Frontend frameworks, databases, server protocols, cloud engines, testing setups, and tooling.',
    glowColor: 'rgba(0, 229, 255, 0.3)'
  },
  {
    id: 'deployments',
    metric: '20+',
    number: 20,
    suffix: '+',
    label: 'Cloud Deployments',
    description: 'Scalable services hosted on AWS EC2, ECS, Vercel, Heroku, and Netlify with automated CI/CD.',
    glowColor: 'rgba(123, 97, 255, 0.3)'
  },

  {
    id: 'contributions',
    metric: '1.5k+',
    number: 1500,
    suffix: '+',
    label: 'GitHub Contributions',
    description: 'Consistent daily development commit history, repository audits, and open-source contributions.',
    glowColor: 'rgba(0, 229, 255, 0.3)'
  },
  {
    id: 'coffee',
    metric: '999+',
    number: 999,
    suffix: '+',
    label: 'Coffee Cups Brewed',
    description: 'The energetic fuel driving code compilation, debugging sessions, and system design mockups.',
    glowColor: 'rgba(123, 97, 255, 0.3)'
  }
];

export const CODE_FILES: CodeFile[] = [
  {
    filename: 'TaskUseCase.ts',
    language: 'typescript',
    code: `import { ITaskRepository } from '../repositories/ITaskRepository';
import { Task, TaskProps } from '../entities/Task';
import { Guard } from '../../shared/Guard';
import { Result } from '../../shared/Result';

export interface CreateTaskDTO {
  title: string;
  description: string;
  workspaceId: string;
  assigneeId: string;
  dueDate: string;
}

export class CreateTaskUseCase {
  private taskRepo: ITaskRepository;

  constructor(taskRepo: ITaskRepository) {
    this.taskRepo = taskRepo;
  }

  public async execute(request: CreateTaskDTO): Promise<Result<Task>> {
    // 1. Core Domain Validation (SOLID principles - Guard rails)
    const titleGuard = Guard.againstNullOrUndefined(request.title, 'title');
    if (!titleGuard.succeeded) {
      return Result.fail<Task>(titleGuard.message);
    }

    // 2. Create Domain Entity Core
    const taskProps: TaskProps = {
      title: request.title,
      description: request.description,
      workspaceId: request.workspaceId,
      assigneeId: request.assigneeId,
      status: 'BACKLOG',
      dueDate: new Date(request.dueDate),
      createdAt: new Date(),
    };

    const taskOrError = Task.create(taskProps);
    if (taskOrError.isFailure) {
      return Result.fail<Task>(taskOrError.errorValue());
    }

    const task = taskOrError.getValue();

    // 3. Persist using Repository interface (Dependency Inversion)
    await this.taskRepo.save(task);

    return Result.ok<Task>(task);
  }
}`,
    description: 'Clean Architecture Use Case implementing dependency inversion. Domain rules are decoupled from Databases and Express framework.'
  },
  {
    filename: 'Server.js',
    language: 'javascript',
    code: `const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: { origin: '*', methods: ['GET', 'POST'] }
});

// Middlewares
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB cluster connected.'))
  .catch(err => console.error('Database connection failed:', err));

// WebSocket Sync Orchestration
io.on('connection', (socket) => {
  console.log(\`Socket connected: \${socket.id}\`);
  
  socket.on('join-workspace', (workspaceId) => {
    socket.join(workspaceId);
    console.log(\`User joined workspace: \${workspaceId}\`);
  });

  socket.on('card-moved', (data) => {
    // Broadcast workspace movement to other teammates
    socket.to(data.workspaceId).emit('card-moved-sync', data);
  });

  socket.on('disconnect', () => {
    console.log('Socket disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(\`Server active on port \${PORT}\`));`,
    description: 'Express server initializing CORS, MongoDB driver, and Socket.io event dispatchers to synchronize workspace changes.'
  },
  {
    filename: 'WorkspaceModel.js',
    language: 'javascript',
    code: `const mongoose = require('mongoose');

const WorkspaceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Workspace name is required'],
    trim: true,
    maxlength: [50, 'Name cannot exceed 50 characters']
  },
  slug: {
    type: String,
    lowercase: true,
    unique: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  members: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    role: { type: String, enum: ['ADMIN', 'MEMBER', 'VIEWER'], default: 'MEMBER' }
  }],
  settings: {
    allowInvites: { type: Boolean, default: true },
    themeAccent: { type: String, default: '#4F8BFF' }
  }
}, { timestamps: true });

// Pre-save hook to generate URL friendly slug
WorkspaceSchema.pre('save', function(next) {
  if (!this.isModified('name')) return next();
  this.slug = this.name.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-');
  next();
});

module.exports = mongoose.model('Workspace', WorkspaceSchema);`,
    description: 'MongoDB Mongoose Schema representing Workspace structures. Includes custom pre-save middleware hooks to compile user friendly URL slugs.'
  }
];
