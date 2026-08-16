"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Project } from "@/lib/content";

/**
 * Horizontal carousel built on native CSS scroll-snap: swipe works on touch
 * with no JS, and the buttons/dots are progressive enhancement on top. Chosen
 * over a carousel library so nothing new gets installed — see PROJECT_BRIEF.md.
 */
export default function ProjectCarousel({ projects }: { projects: Project[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[index] as HTMLElement | undefined;
    slide?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "nearest",
      inline: "start",
    });
  }, []);

  // Derive the active dot from scroll position rather than tracking it in
  // state on click — keeps swipe, buttons and keyboard in sync for free.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const { scrollLeft, scrollWidth } = track;
        const perSlide = scrollWidth / track.children.length;
        setActive(Math.round(scrollLeft / perSlide));
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", onScroll);
    };
  }, []);

  const go = (delta: number) =>
    scrollTo(Math.min(Math.max(active + delta, 0), projects.length - 1));

  return (
    <div className="relative">
      <ul
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project) => (
          <li
            key={project.slug}
            className="group card-surface card-interactive w-full shrink-0 snap-start overflow-hidden rounded-card border border-border"
          >
            <div className="relative aspect-video w-full border-b border-border bg-background/40">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-1 text-center">
                  <span className="font-mono text-xs text-muted">
                    image slot — 16:9
                  </span>
                  <span className="px-6 font-mono text-[11px] text-muted/70">
                    no internal screenshots · abstract or self-made only
                  </span>
                </div>
              )}
            </div>

            <div className="p-5 sm:p-6">
              <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-primary">
                {project.name}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted">
                {project.summary}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                <span className="font-mono text-xs uppercase tracking-wider text-accent">
                  Approach ·{" "}
                </span>
                {project.approach}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                <span className="font-mono text-xs uppercase tracking-wider text-accent">
                  Outcome ·{" "}
                </span>
                {project.outcome}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-border bg-background/40 px-2.5 py-1 font-mono text-[11px] text-muted transition-colors duration-300 group-hover:border-primary/25 group-hover:text-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-2 flex items-center justify-between gap-4">
        <div className="flex gap-2">
          {projects.map((project, i) => (
            <button
              key={project.slug}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Go to ${project.name}`}
              aria-current={i === active}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-6 bg-primary"
                  : "w-1.5 bg-border hover:bg-muted"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            disabled={active === 0}
            aria-label="Previous project"
            className="rounded-md border border-border px-3 py-1.5 text-sm text-muted transition-colors hover:border-primary hover:text-primary disabled:pointer-events-none disabled:opacity-30"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            disabled={active === projects.length - 1}
            aria-label="Next project"
            className="rounded-md border border-border px-3 py-1.5 text-sm text-muted transition-colors hover:border-primary hover:text-primary disabled:pointer-events-none disabled:opacity-30"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
