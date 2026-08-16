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
 * Shape reserved for the project cards. Nothing renders these yet — see the
 * stub in components/Projects.tsx.
 */
export type Project = {
  slug: string;
  name: string;
  hook: string;
  stack: string[];
  repo?: string;
  demo?: string;
};

export type Projects = {
  productionMl: Project[];
  independent: Project[];
};

export const experience: Role[] = experienceJson;
export const skills: SkillGroup[] = skillsJson;
export const education: Education[] = educationJson;
export const projects: Projects = projectsJson;

export type Profile = {
  name: string;
  title: string;
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
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
] as const;
