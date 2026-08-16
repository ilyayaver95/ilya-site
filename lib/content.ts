import profileJson from "@/content/profile.json";
import experienceJson from "@/content/experience.json";
import skillsJson from "@/content/skills.json";
import educationJson from "@/content/education.json";
import projectsJson from "@/content/projects.json";

export type Role = {
  role: string;
  company: string;
  start: string;
  end: string;
  current: boolean;
  bullets: string[];
  stack: string[];
};

export type SkillGroup = {
  group: string;
  items: string[];
};

export type Education = {
  degree: string;
  institution: string;
  start: string;
  end: string;
  note: string;
};

/**
 * Production-ML cards (DRS RADA).
 *
 * CONFIDENTIALITY — see PROJECT_BRIEF.md. These describe methodology and
 * outcomes only. Every claim must already appear on the public CV; no systems,
 * customers, or performance figures beyond it. `image` must not be a screenshot
 * of internal tooling or real data — abstract or self-made diagrams only.
 * `image: null` renders a labelled placeholder rather than a broken image.
 */
export type Project = {
  slug: string;
  name: string;
  summary: string;
  approach: string;
  outcome: string;
  skills: string[];
  image: string | null;
  imageAlt: string;
};

/** Independent projects use the fuller card skeleton from the brief. */
export type IndependentProject = {
  slug: string;
  name: string;
  hook: string;
  stack: string[];
  repo?: string;
  demo?: string;
};

export type Projects = {
  productionMl: Project[];
  independent: IndependentProject[];
};

export const experience: Role[] = experienceJson;
export const skills: SkillGroup[] = skillsJson;
export const education: Education[] = educationJson;
export const projects: Projects = projectsJson;

export type Profile = {
  name: string;
  title: string;
  /** Typewriter phrases under the name. Each must be defensible against the CV. */
  roles: string[];
  location: string;
  email: string;
  github: string;
  linkedin: string;
  cv: string;
  /** The positioning spine — see PROJECT_BRIEF.md. Change with care. */
  positioning: string;
  /** Career arc. Every claim here must be checkable against the CV. */
  background: string;
  quote: string;
};

export const profile: Profile = profileJson;

export const nav = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
] as const;
