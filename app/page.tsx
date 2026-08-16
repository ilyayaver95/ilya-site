import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import { profile } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />

        <Section
          id="experience"
          title="Experience"
          kicker="RF hardware to field engineering to data science to production ML — the hardware, the data, and the model."
        >
          <Timeline />
        </Section>

        <Section
          id="projects"
          title="Production ML"
          kicker="Shipped against real sensor data, at the level of method and outcome."
        >
          <Projects />
        </Section>

        <Section id="skills" title="Skills">
          <Skills />
        </Section>

        <Section id="education" title="Education">
          <Education />
        </Section>
      </main>

      <footer className="border-t border-border px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-3xl flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            {profile.name} · {profile.location}
          </p>
          <div className="flex flex-wrap gap-4">
            <a className="hover:text-primary" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a
              className="hover:text-primary"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="hover:text-primary"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
