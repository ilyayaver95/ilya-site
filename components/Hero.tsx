import { profile } from "@/lib/content";
import Typewriter from "@/components/Typewriter";
import Logo from "@/components/Logo";

const links = [
  { label: "GitHub", href: profile.github, icon: GitHubIcon },
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedInIcon },
  { label: "Email", href: `mailto:${profile.email}`, icon: MailIcon },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="hero-wash relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 pb-24 pt-28 sm:px-8"
    >
      {/* Radar: rings, crosshair, sweep and a few returns. Decorative only. */}
      <div className="radar" aria-hidden="true">
        <div className="radar-rings" />
        <div className="radar-cross" />
        <div className="radar-sweep" />
        <span className="radar-blip" style={{ left: "62%", top: "31%", animationDelay: "1.2s" }} />
        <span className="radar-blip" style={{ left: "38%", top: "66%", animationDelay: "6.6s" }} />
        <span className="radar-blip" style={{ left: "70%", top: "58%", animationDelay: "9.9s" }} />
      </div>

      {/* Drifting colour field. Decorative only. */}
      <div className="aurora" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="hero-fade" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* TODO: replace the mark with a real photo (public/ilya.jpg) once available. */}
        <div
          className="rise avatar-glow relative mx-auto h-36 w-36 rounded-full sm:h-44 sm:w-44"
          style={{ "--i": 0 } as React.CSSProperties}
        >
          <div aria-hidden="true" className="conic-ring absolute -inset-2 rounded-full opacity-60 blur-xl" />
          <div aria-hidden="true" className="conic-ring absolute inset-0 rounded-full" />
          <div className="absolute inset-[3px] flex items-center justify-center rounded-full bg-background">
            <Logo size={88} withRing={false} />
          </div>
        </div>

        <p
          className="rise mx-auto mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted backdrop-blur"
          style={{ "--i": 1 } as React.CSSProperties}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {profile.location}
        </p>

        <h1
          className="rise font-display animate-gradient mt-5 pb-2 text-5xl font-extrabold sm:text-7xl md:text-8xl"
          style={{ "--i": 2 } as React.CSSProperties}
        >
          {profile.name}
        </h1>

        <h2
          className="rise font-display mt-3 text-xl font-semibold text-foreground sm:text-3xl"
          style={{ "--i": 3 } as React.CSSProperties}
        >
          <Typewriter phrases={[...profile.roles]} />
        </h2>

        <p
          className="rise mx-auto mt-8 max-w-2xl text-balance text-base leading-relaxed text-foreground/90 sm:text-lg"
          style={{ "--i": 4 } as React.CSSProperties}
        >
          {profile.positioning}
        </p>

        <p
          className="rise mx-auto mt-4 max-w-2xl text-balance text-sm leading-relaxed text-muted sm:text-base"
          style={{ "--i": 5 } as React.CSSProperties}
        >
          {profile.background}
        </p>

        <blockquote
          className="rise card-surface card-spot relative mx-auto mt-8 max-w-xl overflow-hidden rounded-card border border-border px-6 py-4 text-sm leading-relaxed text-foreground/90 sm:text-base"
          style={{ "--i": 6 } as React.CSSProperties}
        >
          <span aria-hidden="true" className="font-display absolute -left-1 -top-3 text-6xl leading-none text-primary/30">
            &ldquo;
          </span>
          <span className="italic">{profile.quote}</span>
        </blockquote>

        <div
          className="rise mt-10 flex flex-wrap items-center justify-center gap-3"
          style={{ "--i": 7 } as React.CSSProperties}
        >
          <a
            href={profile.cv}
            download
            className="btn-primary inline-flex h-11 items-center gap-2 rounded-full px-6 text-sm font-semibold"
          >
            <DownloadIcon />
            Download CV
          </a>
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="btn-ghost inline-flex h-11 items-center gap-2 rounded-full border border-border px-5 text-sm text-foreground"
            >
              <Icon />
              {label}
            </a>
          ))}
        </div>
      </div>

      <a
        href="#experience"
        aria-label="Scroll to experience"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-muted transition-colors hover:text-foreground"
      >
        <span className="block h-9 w-5 rounded-full border border-border/80 p-1">
          <span className="block h-2 w-1.5 animate-bounce rounded-full bg-accent" />
        </span>
      </a>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}
