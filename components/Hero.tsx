import { profile } from "@/lib/content";

const links = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Email", href: `mailto:${profile.email}` },
];

export default function Hero() {
  return (
    <section id="top" className="hero-wash px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
      <div className="mx-auto max-w-3xl text-center">
        {/* TODO: replace with a real photo (public/ilya.jpg) once available. */}
        <div
          aria-hidden="true"
          className="glow mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-border card-surface font-mono text-xs text-muted sm:h-32 sm:w-32"
        >
          photo
        </div>

        <h1 className="animate-gradient mt-8 pb-1 text-4xl font-bold tracking-tight sm:text-6xl">
          {profile.name}
        </h1>

        <p className="mt-3 font-mono text-sm sm:text-base">
          <span className="text-gradient font-medium">{profile.title}</span>
          <span className="text-muted"> · {profile.location}</span>
        </p>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-foreground sm:text-lg">
          {profile.positioning}
        </p>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          {profile.background}
        </p>

        <blockquote className="mx-auto mt-8 max-w-xl rounded-card border border-border card-surface px-5 py-4 text-sm italic leading-relaxed text-muted sm:text-base">
          &ldquo;{profile.quote}&rdquo;
        </blockquote>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="card-surface card-interactive rounded-card border border-border px-4 py-2 text-sm text-foreground hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.cv}
            download
            className="card-interactive glow rounded-card bg-primary px-4 py-2 text-sm font-medium text-background"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
