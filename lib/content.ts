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
 * A project card. Both tracks share one skeleton — problem, approach, the one
 * interesting decision, stack chips, link — per PROJECT_BRIEF.md, so a card
 * renders the same wherever it appears and adding a project stays a one-file
 * JSON edit.
 *
 * CONFIDENTIALITY — see PROJECT_BRIEF.md. The production-ML cards (DRS RADA)
 * describe methodology and outcomes only. Every claim must already appear on
 * the public CV; no systems, customers, or performance figures beyond it.
 * `image` must not be a screenshot of internal tooling or real data — abstract
 * or self-made diagrams only. That constraint does not apply to the independent
 * track, where the work is public and real footage is the point.
 */
export type Project = {
  slug: string;
  name: string;
  /** "Role @ Company" for production work; "Independent project" for the rest. */
  role: string;
  description: string;
  /** Three short proof points; the last carries status and scale. */
  highlights: string[];
  tags: string[];
  /** Optional "Explore …" link. Production DRS work has none — nothing public to link. */
  cta?: { label: string; href: string };
  /** `image: null` renders a labelled placeholder rather than a broken image. */
  image: string | null;
  imageAlt: string;
  /**
   * Muted autoplay loop for the media slot; takes precedence over `image`.
   * Keep these short and small (brief: 10–15s, under 2 MB) — a moving thumbnail
   * gets watched, but not at the cost of the page weight.
   */
  video?: string;
  /** Poster frame, shown before the loop plays and wherever autoplay is refused. */
  videoPoster?: string;
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
  /**
   * Hero proof-points. Every number must be checkable against the CV or a
   * public repo README — these sit under the name and read as claims.
   */
  stats: Stat[];
};

export type Stat = {
  value: number;
  prefix: string;
  suffix: string;
  label: string;
  /** Where the number comes from, shown small under the label. */
  note: string;
};

export const profile: Profile = profileJson;

export const nav = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
] as const;
