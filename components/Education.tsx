import { education } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function Education() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {education.map((item, i) => (
        <Reveal key={item.degree} delay={i}>
          <article className="group card-surface card-spot card-interactive h-full rounded-card border border-border p-5 sm:p-6">
            <p className="inline-flex rounded-full border border-border bg-background/40 px-2.5 py-1 font-mono text-[11px] text-muted">
              {item.start} — {item.end}
            </p>
            <h3 className="font-display mt-4 text-base font-semibold transition-colors duration-300 group-hover:text-primary sm:text-lg">
              {item.degree}
            </h3>
            <p className="mt-1 text-sm text-accent">{item.institution}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.note}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
