import ProjectCarousel from "@/components/ProjectCarousel";
import { projects } from "@/lib/content";

/**
 * Production ML track (DRS RADA) — architecture and outcomes only, per the
 * confidentiality constraint in PROJECT_BRIEF.md.
 *
 * The independent track (Northbeam, Beat the ASPP, Menu Alchemist) is still
 * stubbed: blocked on the three repos going public and the copy being written.
 * When it lands it renders below this, under its own "Independent projects"
 * heading, so the two tracks stay clearly labelled — that honest labelling is
 * what makes the production track credible.
 */
export default function Projects() {
  return (
    <div className="space-y-4">
      <p className="text-sm leading-relaxed text-muted">
        Production work at DRS RADA, described at the level of method and
        outcome. Defense work — no systems, customers or figures beyond the
        public CV.
      </p>
      <ProjectCarousel projects={projects.productionMl} />
    </div>
  );
}
