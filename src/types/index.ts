export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'tools';
  level: number; // 1-100
  iconName: string;
  description: string;
  experienceYears: number;
  projectsCount: number;
  featuredProjects: string[];
  color: string; // Hex code or tailwind color name
  coordinates: { x: number; y: number }; // For visual layout of skills universe
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: string;
  technologies: string[];
  features: string[];
  architecture: {
    layers: string[];
    description: string;
  };
  metrics: string[];
  githubUrl: string;
  liveUrl: string;
  accentColor: string; // e.g., 'primary-accent', 'secondary-accent', 'highlight'
  glowColor: string; // e.g., rgba color for shadow
  previewImage: string; // Placeholder or generated asset
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  organization: string;
  type: 'academic' | 'bootcamp' | 'project' | 'future' | 'professional';
  description: string;
  details: string[];
  skills: string[];
  accentColor: string;
  liveUrl?: string;
}

export interface Achievement {
  id: string;
  metric: string;
  number: number;
  suffix: string;
  label: string;
  description: string;
  glowColor: string;
}

export interface CodeFile {
  filename: string;
  language: string;
  code: string;
  description: string;
}
