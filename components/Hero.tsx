import { profile } from "@/lib/content";

const links = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Email", href: `mailto:${profile.email}` },
];

export default function Hero() {
  return (
    <section className="border-b border-border px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
          {/* TODO: replace with a real photo (public/ilya.jpg) once available. */}
          <div
            aria-hidden="true"
            className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-dashed border-border bg-surface font-mono text-xs text-muted sm:h-28 sm:w-28"
          >
            photo
          </div>

          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 font-mono text-xs text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Open to work
            </p>

            <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              {profile.name}
            </h1>
            <p className="mt-1 font-mono text-sm text-accent">
              {profile.title} · {profile.location}
            </p>

            <p className="mt-6 text-base leading-relaxed text-foreground sm:text-lg">
              ML engineer who builds LLM systems the way production ML gets
              built — deterministic where the answer is knowable, evaluated
              where it isn&rsquo;t, and instrumented either way.
            </p>

            <blockquote className="mt-5 border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted sm:text-base">
              &ldquo;For every decision in an agent, ask: is the right answer
              enumerable?&rdquo;
            </blockquote>

            <p className="mt-6 text-sm text-muted">{profile.availability}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={profile.cv}
                download
                className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Download CV
              </a>
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="rounded-md border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
