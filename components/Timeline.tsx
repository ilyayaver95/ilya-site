import { experience } from "@/lib/content";

export default function Timeline() {
  return (
    <div className="space-y-5">
      {experience.map((role) => (
        <article
          key={`${role.role}-${role.start}`}
          className="group card-surface card-interactive rounded-card border border-border p-5 sm:p-6"
        >
          <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-primary">
              {role.role}
              <span className="font-normal text-muted"> · {role.company}</span>
            </h3>
            <p className="shrink-0 font-mono text-xs text-accent">
              {role.start} — {role.end}
            </p>
          </div>

          <ul className="mt-4 space-y-2.5">
            {role.bullets.map((bullet) => (
              <li
                key={bullet}
                className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/60"
              >
                {bullet}
              </li>
            ))}
          </ul>

          <ul className="mt-5 flex flex-wrap gap-2">
            {role.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-border bg-background/40 px-2.5 py-1 font-mono text-[11px] text-muted transition-colors duration-300 group-hover:border-primary/25 group-hover:text-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
