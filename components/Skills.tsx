import { skills } from "@/lib/content";

export default function Skills() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {skills.map((group) => (
        <div
          key={group.group}
          className="group card-surface card-interactive rounded-card border border-border p-5"
        >
          <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
            {group.group}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="rounded-md border border-border bg-background/40 px-2.5 py-1 text-xs text-muted transition-colors duration-300 group-hover:border-accent/25 group-hover:text-foreground"
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
