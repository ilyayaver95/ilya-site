import ProjectCarousel from "@/components/ProjectCarousel";
import Reveal from "@/components/Reveal";
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
    <div className="space-y-20">
      <div className="space-y-5">
        <Reveal>
          <TrackHeading label="Production ML · DRS RADA" />
          <p className="mt-2 font-mono text-[11px] text-muted">
            Method and outcome only — defense work.
          </p>
        </Reveal>
        <Reveal delay={1}>
          <ProjectCarousel
            projects={projects.productionMl}
            label="Production ML projects"
          />
        </Reveal>
      </div>

      <div className="space-y-5">
        <Reveal>
          <TrackHeading label="Independent projects" />
        </Reveal>
        <Reveal delay={1}>
          <ProjectCarousel
            projects={projects.independent}
            label="Independent projects"
          />
        </Reveal>
      </div>
    </div>
  );
}

function TrackHeading({ label }: { label: string }) {
  return (
    <h3 className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
      <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-primary to-accent" />
      {label}
    </h3>
  );
}
