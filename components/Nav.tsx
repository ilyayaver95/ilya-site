import { nav, profile } from "@/lib/content";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-mono text-sm font-medium">
          <span className="text-gradient">ilya</span>
          <span className="text-muted">.yaverbaum</span>
        </a>

        <ul className="flex items-center gap-1 sm:gap-2">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-md px-2 py-1.5 text-xs text-muted transition-colors hover:text-foreground sm:px-3 sm:text-sm"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.cv}
              download
              className="ml-1 rounded-md border border-border px-2.5 py-1.5 text-xs text-foreground transition-colors hover:border-primary hover:text-primary sm:px-3 sm:text-sm"
            >
              CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
