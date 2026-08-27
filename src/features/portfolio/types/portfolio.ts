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
  /** GPA, honours, or similar — shown as a plain detail line. */
  detail?: string;
  /** True while still enrolled — shown as a status badge instead of `detail`. */
  inProgress?: boolean;
}

export type HarnessNodeId =
  | "model"
  | "post-training"
  | "loop"
  | "tools"
  | "runtime"
  | "production";

export interface HarnessNode {
  id: HarnessNodeId;
  step: string;
  title: string;
  short: string;
  detail: string;
  bullets: string[];
}

export interface SectionRef {
  id: string;
  n: string;
  label: string;
}
