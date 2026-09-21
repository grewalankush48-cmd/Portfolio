export interface SkillItem {
  number: string;
  title: string;
  category: string;
  description: string;
  tools: string[];
  level: number;
}

export interface ProjectItem {
  number: string;
  category: string;
  title: string;
  description: string;
  architectureNotes?: string;
  tags: string[];
  link: string;
  liveDemo?: string;
  featured?: boolean;
}

export interface EducationMilestone {
  number: string;
  title: string;
  institution: string;
  period: string;
  description: string;
  status: 'Completed' | 'In Progress' | 'Active';
}

export interface SocialLink {
  label: string;
  name: string;
  url: string;
  iconName: string;
}

export type ThemeMode = 'emerald' | 'amber' | 'slate';
