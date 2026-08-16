import { skills } from "@/lib/content";

export default function Skills() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {skills.map((group) => (
        <div
          key={group.group}
          className="rounded-card border border-border card-surface p-5 transition-colors hover:border-accent/40"
        >
          <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
            {group.group}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="rounded-md border border-border bg-background/40 px-2.5 py-1 text-xs text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
