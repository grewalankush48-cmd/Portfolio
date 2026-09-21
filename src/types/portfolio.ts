export interface PersonalInfo {
  name: string;
  lastName: string;
  fullName: string;
  headlineCategory: string;
  tagline: string;
  bio: string;
  bioSecondary: string;
  availability: string;
  specialization: string;
  location: string;
  experienceLevel: string;
  email: string;
  githubUser: string;
  githubUrl: string;
  linkedinUrl: string;
  resumePath: string;
  terminalUser: string;
}

export interface SkillItem {
  id: string;
  title: string;
  category: 'Offensive' | 'Defensive' | 'Programming' | 'Systems' | 'Cloud';
  description: string;
  tools: string[];
  level: number;
}

export interface ProjectItem {
  id: string;
  category: string;
  title: string;
  description: string;
  architectureNotes: string;
  tags: string[];
  githubUrl: string;
  featured: boolean;
  metrics?: string;
}

export interface EducationMilestone {
  id: string;
  title: string;
  institution: string;
  period: string;
  description: string;
  status: string;
}

export interface SocialLink {
  label: string;
  name: string;
  url: string;
  iconName: string;
}
