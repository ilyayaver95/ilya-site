import { experience } from "@/lib/content";

export default function Timeline() {
  return (
    <ol className="relative border-l border-border pl-6 sm:pl-8">
      {experience.map((role) => (
        <li key={`${role.role}-${role.start}`} className="pb-10 last:pb-0">
          <span
            aria-hidden="true"
            className={`absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full border-2 border-background ${
              role.current ? "bg-accent" : "bg-border"
            }`}
          />

          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <h3 className="text-base font-medium sm:text-lg">
              {role.role}
              <span className="text-muted"> · {role.company}</span>
            </h3>
            <p className="shrink-0 font-mono text-xs text-muted">
              {role.start} — {role.end}
            </p>
          </div>

          <ul className="mt-3 space-y-2">
            {role.bullets.map((bullet) => (
              <li
                key={bullet}
                className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-border"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
