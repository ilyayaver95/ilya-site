import { skills } from "@/lib/content";

/**
 * Infinite marquee of stack chips pulled from skills.json (so it can never
 * drift from the skills section). Duplicated once so the -50% translate loops
 * seamlessly; the copy is aria-hidden.
 */
export default function Ticker() {
  const items = skills.flatMap((g) => g.items);

  return (
    <div className="ticker relative -mt-6 overflow-hidden py-4" aria-label="Technology stack">
      <div className="ticker-track">
        <TickerRow items={items} />
        <TickerRow items={items} hidden />
      </div>
    </div>
  );
}

function TickerRow({ items, hidden = false }: { items: string[]; hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 gap-3" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <li
          key={`${item}-${i}`}
          className="flex items-center gap-3 whitespace-nowrap rounded-full border border-border bg-card/50 px-3.5 py-1.5 font-mono text-[11px] text-muted"
        >
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent/70" />
          {item}
        </li>
      ))}
    </ul>
  );
}
