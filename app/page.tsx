import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import { profile } from "@/lib/content";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />

      <Section id="experience" title="Experience">
        <Timeline />
      </Section>

      <Section id="skills" title="Skills">
        <Skills />
      </Section>

      {/*
        Projects section goes here — see components/Projects.tsx for the stub
        and what it's blocked on (private repos, unwritten copy). The Northbeam
        video and the Menu Alchemist live demo slot in around it.
      */}

      <footer className="px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-3xl flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            {profile.name} · {profile.location}
          </p>
          <div className="flex flex-wrap gap-4">
            <a className="hover:text-accent" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a
              className="hover:text-accent"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="hover:text-accent"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
