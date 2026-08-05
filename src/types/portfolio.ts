import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string | null;
  status?: string;
  color: string;
  icon: IconType;

  stars?: number;
  forks?: number;
}

export interface PersonalLinks {
  github: string;
  linkedin: string;
  email: string;
  resume: string;
}

export interface PersonalInfo {
  name: string;
  headline: string;
  subtitle: string;
  about: string;
  links: PersonalLinks;
}

export interface Stat {
  label: string;
  value: string;
  description?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string | null;
  status?: string;
  color: string;
  icon: IconType;
}

import type { ComponentType } from "react";

export interface SkillCategory {
  icon: ComponentType<{ size?: number; className?: string }>;
  items: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}
export interface Highlight {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface PracticeCategory {
  title: string;
  items: string[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  stats: Stat[];
  highlights: Highlight[];
  experience: Experience[];
  projects: Project[];
  skills: Record<string, SkillCategory>;
  practices: PracticeCategory[];
  certifications: Certification[];
}