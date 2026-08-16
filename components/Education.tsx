import { education } from "@/lib/content";

export default function Education() {
  return (
    <div className="space-y-4">
      {education.map((item) => (
        <article
          key={item.degree}
          className="rounded-card border border-border card-surface p-5 transition-colors hover:border-primary/40"
        >
          <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <h3 className="text-base font-semibold sm:text-lg">
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
