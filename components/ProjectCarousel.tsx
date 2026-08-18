"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import Image from "next/image";
import type { Project } from "@/lib/content";

const ADVANCE_MS = 6000;
const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

/**
 * Auto-advancing carousel over native CSS scroll-snap: swipe works on touch
 * with no JS, and the buttons, dots and autoplay are progressive enhancement.
 * Built on scroll-snap rather than a carousel library so nothing new is
 * installed — see PROJECT_BRIEF.md.
 *
 * Autoplay pauses on hover, on keyboard focus, and while the user is dragging,
 * and never starts under prefers-reduced-motion. WCAG 2.2.2 also wants an
 * explicit control for moving content, so there is a real pause/play button.
 */
/**
 * The motion preference is external state that can change while the page is
 * open, so it is read through useSyncExternalStore rather than mirrored into
 * component state. The static export has no window, hence the server snapshot.
 */
function subscribeToMotionPreference(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function useReducedMotion() {
  return useSyncExternalStore(
    subscribeToMotionPreference,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false,
  );
}

/**
 * Real footage in the media slot, muted and looping — a moving thumbnail gets
 * watched where a static one gets skipped.
 *
 * `playsInline` is what lets iOS play it in place instead of hijacking the
 * screen with the native player, and `preload="metadata"` keeps several cards'
 * worth of video off the critical path. Under prefers-reduced-motion it holds
 * on the poster frame and offers controls instead, so the card still shows
 * something rather than going blank.
 */
function LoopingVideo({
  src,
  poster,
  label,
}: {
  src: string;
  poster?: string;
  label: string;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative aspect-video w-full border-b border-border bg-black">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-card/80 to-transparent" />
      <video
        // Remounting on the motion preference is what makes autoPlay actually
        // take effect — toggling the attribute on a live element does not.
        key={reducedMotion ? "still" : "playing"}
        src={src}
        poster={poster}
        aria-label={label}
        autoPlay={!reducedMotion}
        controls={reducedMotion}
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-contain"
      />
    </div>
  );
}

export default function ProjectCarousel({
  projects,
  label,
}: {
  projects: Project[];
  /** Names the track for screen readers — there is more than one carousel on the page. */
  label: string;
}) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [playing, setPlaying] = useState(true);

  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[index] as HTMLElement | undefined;
    if (!slide) return;
    // scrollIntoView would also scroll the page vertically; setting scrollLeft
    // keeps the movement inside the track.
    track.scrollTo({
      left: slide.offsetLeft - track.offsetLeft,
      behavior: window.matchMedia(REDUCED_MOTION).matches ? "auto" : "smooth",
    });
  }, []);

  // Derive the active slide from scroll position rather than tracking it on
  // click — keeps swipe, buttons, keyboard and autoplay in sync for free.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const perSlide = track.scrollWidth / track.children.length;
        setActive(Math.round(track.scrollLeft / perSlide));
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!playing || paused) return;
    if (window.matchMedia(REDUCED_MOTION).matches) return;

    const timer = setInterval(() => {
      setActive((current) => {
        const next = (current + 1) % projects.length;
        scrollTo(next);
        return next;
      });
    }, ADVANCE_MS);

    return () => clearInterval(timer);
  }, [playing, paused, projects.length, scrollTo]);

  const go = (delta: number) => {
    const next = (active + delta + projects.length) % projects.length;
    scrollTo(next);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <ul
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project, i) => (
          <li
            key={project.slug}
            className="group card-surface card-spot card-interactive w-full shrink-0 snap-start overflow-hidden rounded-card border border-border"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${projects.length}`}
          >
            {project.video ? (
              <LoopingVideo
                src={project.video}
                poster={project.videoPoster}
                label={project.imageAlt}
              />
            ) : project.image ? (
              <div className="relative aspect-video w-full border-b border-border bg-white">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-contain"
                  priority={i === 0}
                />
              </div>
            ) : (
              <div className="flex aspect-video w-full items-center justify-center border-b border-border bg-background/40">
                <span className="font-mono text-xs text-muted">
                  image slot — 16:9
                </span>
              </div>
            )}

            <div className="p-5 sm:p-6">
              {/* h4: the section is h2 and each track heading is h3. */}
              <h4 className="font-display text-lg font-semibold transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                {project.name}
              </h4>

              <p className="mt-1.5 inline-flex rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[11px] text-accent">
                {project.role}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <ul className="mt-5 space-y-2">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="relative pl-5 text-sm text-foreground before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-gradient-to-br before:from-primary before:to-accent"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>

              {project.cta ? (
                <a
                  href={project.cta.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost mt-6 inline-flex h-10 items-center gap-2 rounded-full border border-border px-4 text-sm text-foreground"
                >
                  {project.cta.label} →
                </a>
              ) : null}

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="chip rounded-md border border-border bg-background/40 px-2.5 py-1 font-mono text-[11px] text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-2 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {projects.map((project, i) => (
            <button
              key={project.slug}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Go to ${project.name}`}
              aria-current={i === active}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === active
                  ? "w-8 bg-gradient-to-r from-primary to-accent shadow-[0_0_10px_hsl(var(--accent)/0.6)]"
                  : "w-1.5 bg-border hover:bg-muted"
              }`}
            />
          ))}

          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause automatic rotation" : "Resume automatic rotation"}
            className="ml-2 rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted transition-colors hover:border-accent hover:text-accent"
          >
            {playing ? "❚❚" : "▶"}
          </button>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous project"
            className="btn-ghost inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-sm text-muted hover:text-foreground"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next project"
            className="btn-ghost inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-sm text-muted hover:text-foreground"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
