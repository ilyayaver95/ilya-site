import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Ticker from "@/components/Ticker";
import Logo from "@/components/Logo";
import { profile } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />

        <Ticker />

        <Section id="experience" title="Experience">
          <Timeline />
        </Section>

        <Section
          id="projects"
          title="Projects"
          kicker="Production sensor ML at DRS RADA, and three independent LLM systems — public end to end."
        >
          <Projects />
        </Section>

        <Section
          id="skills"
          title="Skills"
          kicker="From RF and signal processing to production ML pipelines and evaluated LLM systems — the stack behind the work above."
        >
          <Skills />
        </Section>

        <Section id="education" title="Education">
          <Education />
        </Section>
      </main>

      <footer className="relative mt-10 overflow-hidden border-t border-border px-5 py-14 sm:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
        />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <a href="#top" className="flex items-center gap-3" aria-label="Back to top">
            <Logo size={36} />
            <div>
              <p className="font-mono text-sm">
                <span className="text-gradient">ilya</span>
                <span className="text-muted">.yaverbaum</span>
              </p>
              <p className="text-xs text-muted">
                {profile.title} · {profile.location}
              </p>
            </div>
          </a>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted">
            <a className="transition-colors hover:text-accent" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="transition-colors hover:text-accent" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="transition-colors hover:text-accent" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
