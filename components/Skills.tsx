import { skills } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function Skills() {
  return (
    <div className="sm:columns-2 sm:gap-4">
      {skills.map((group, i) => (
        <Reveal key={group.group} delay={i % 2} className="mb-4 break-inside-avoid">
          <div className="group card-surface card-spot card-interactive rounded-card border border-border p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <span className="font-display text-gradient text-2xl font-bold leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                {group.group}
              </h3>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="chip rounded-md border border-border bg-background/40 px-2.5 py-1 text-xs text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
