import { experience } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function Timeline() {
  return (
    <div className="relative">
      {/* spine */}
      <div
        aria-hidden="true"
        className="timeline-line absolute bottom-0 left-[9px] top-2 w-px sm:left-[11px]"
      />

      <div className="space-y-8">
        {experience.map((role, i) => (
          <Reveal
            key={`${role.role}-${role.start}`}
            as="article"
            delay={i}
            className="relative pl-9 sm:pl-12"
          >
            <span
              aria-hidden="true"
              data-current={role.current}
              className="timeline-node absolute left-[3px] top-7 h-3.5 w-3.5 rounded-full sm:left-[4px]"
            />

            <div className="group card-surface card-spot card-interactive rounded-card border border-border p-5 sm:p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div>
                  <h3 className="font-display text-lg font-semibold transition-colors duration-300 group-hover:text-primary sm:text-xl">
                    {role.role}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted">{role.company}</p>
                </div>
                <p
                  className={`inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px] ${
                    role.current
                      ? "border-accent/40 bg-accent/10 text-accent"
                      : "border-border bg-background/40 text-muted"
                  }`}
                >
                  {role.start} — {role.end}
                </p>
              </div>

              <ul className="mt-5 space-y-3">
                {role.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="relative pl-5 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-gradient-to-br before:from-primary before:to-accent"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-2">
                {role.stack.map((tech) => (
                  <li
                    key={tech}
                    className="chip rounded-md border border-border bg-background/40 px-2.5 py-1 font-mono text-[11px] text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
