import { skills } from "@/lib/content";

export default function Skills() {
  return (
    <div className="space-y-7">
      {skills.map((group) => (
        <div
          key={group.group}
          className="grid gap-3 sm:grid-cols-[11rem_1fr] sm:gap-6"
        >
          <h3 className="font-mono text-xs text-muted sm:pt-1.5">
            {group.group}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-foreground"
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
