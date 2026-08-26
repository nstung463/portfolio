export type ProjectArtVariant = "rag" | "chat" | "radar" | "vision" | "camera" | "hand" | "helmet";

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface ExperienceItem {
  period: string;
  org: string;
  role: string;
  meta: string;
  points: string[];
}

export interface FeaturedWorkItem {
  tag: string;
  title: string;
  desc: string;
  href: string;
}

export interface ProjectItem {
  date: string;
  title: string;
  desc: string;
  stack: string[];
  art: ProjectArtVariant;
  href?: string;
}

export interface EducationItem {
  period: string;
  title: string;
  org: string;
}
