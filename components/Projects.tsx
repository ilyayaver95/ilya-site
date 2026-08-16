import ProjectCarousel from "@/components/ProjectCarousel";
import { projects } from "@/lib/content";

/**
 * Two tracks, each under its own heading.
 *
 * Production ML (DRS RADA) is architecture and outcomes only, per the
 * confidentiality constraint in PROJECT_BRIEF.md. Independent projects are
 * labelled as personal on purpose — that honest labelling is what makes the
 * production track credible.
 */
export default function Projects() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Production ML · DRS RADA
        </h3>
        <p className="text-sm leading-relaxed text-muted">
          Production work at DRS RADA, described at the level of method and
          outcome. Defense work — no systems, customers or figures beyond the
          public CV.
        </p>
        <ProjectCarousel
          projects={projects.productionMl}
          label="Production ML projects"
        />
      </div>

      <div className="space-y-4">
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Independent projects
        </h3>
        <p className="text-sm leading-relaxed text-muted">
          Built on my own time, and public end to end — the code, the tests and
          the decisions behind them are all linked.
        </p>
        <ProjectCarousel
          projects={projects.independent}
          label="Independent projects"
        />
      </div>
    </div>
  );
}
