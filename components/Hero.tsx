import { profile } from "@/lib/content";
import Typewriter from "@/components/Typewriter";

const links = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Email", href: `mailto:${profile.email}` },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="hero-wash relative flex min-h-[92svh] items-center justify-center overflow-hidden px-5 py-20 sm:px-8"
    >
      {/* Drifting colour field. Decorative only. */}
      <div className="aurora" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* TODO: replace with a real photo (public/ilya.jpg) once available. */}
        <div className="avatar-glow relative mx-auto h-40 w-40 rounded-full sm:h-56 sm:w-56">
          <div
            aria-hidden="true"
            className="conic-ring absolute -inset-2 rounded-full opacity-60 blur-xl"
          />
          <div
            aria-hidden="true"
            className="conic-ring absolute inset-0 rounded-full"
          />
          <div className="absolute inset-[3px] flex flex-col items-center justify-center gap-1 rounded-full bg-background">
            <span className="font-mono text-xs text-muted">photo</span>
            <span className="font-mono text-[10px] text-muted/60">
              1:1 crop
            </span>
          </div>
        </div>

        <h1 className="animate-gradient mt-10 pb-1 text-4xl font-bold tracking-tight sm:text-6xl">
          {profile.name}
        </h1>

        <h2 className="mt-3 text-xl font-semibold text-foreground sm:text-2xl">
          <Typewriter phrases={[...profile.roles]} />
        </h2>

        <p className="mt-2 font-mono text-sm text-muted">{profile.location}</p>

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
