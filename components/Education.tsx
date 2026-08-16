import { education } from "@/lib/content";

export default function Education() {
  return (
    <div className="space-y-4">
      {education.map((item) => (
        <article
          key={item.degree}
          className="group card-surface card-interactive rounded-card border border-border p-5"
        >
          <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <h3 className="text-base font-semibold transition-colors duration-300 group-hover:text-primary sm:text-lg">
              {item.degree}
              <span className="font-normal text-muted"> · {item.institution}</span>
            </h3>
            <p className="shrink-0 font-mono text-xs text-accent">
              {item.start} — {item.end}
            </p>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted">{item.note}</p>
        </article>
      ))}
    </div>
  );
}
