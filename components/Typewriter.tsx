"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribeToMotionPreference(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

const prefersReducedMotion = () => window.matchMedia(REDUCED_MOTION).matches;

// On the server there is no media query, so assume reduced motion. The static
// export then contains real text rather than an empty node, and the animation
// starts only once the client confirms motion is welcome.
const prefersReducedMotionOnServer = () => true;

/**
 * Cycles through phrases with a type/erase effect and a blinking caret.
 *
 * Every phrase must be defensible against the CV — this sits directly under the
 * name and reads as a claim, not decoration.
 *
 * Renders the first phrase statically when the user prefers reduced motion, and
 * during SSR, so the static export always contains real text rather than an
 * empty node.
 */
export default function Typewriter({
  phrases,
  className = "",
}: {
  phrases: string[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(phrases[0]?.length ?? 0);
  const [erasing, setErasing] = useState(false);

  const animate = !useSyncExternalStore(
    subscribeToMotionPreference,
    prefersReducedMotion,
    prefersReducedMotionOnServer,
  );

  useEffect(() => {
    if (!animate) return;

    const phrase = phrases[index];
    let delay = erasing ? 40 : 75;

    if (!erasing && length === phrase.length) {
      delay = 1900; // hold the completed phrase before erasing
    } else if (erasing && length === 0) {
      delay = 250;
    }

    const timer = setTimeout(() => {
      if (!erasing && length === phrase.length) {
        setErasing(true);
      } else if (erasing && length === 0) {
        setErasing(false);
        setIndex((i) => (i + 1) % phrases.length);
      } else {
        setLength((n) => n + (erasing ? -1 : 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [animate, erasing, index, length, phrases]);

  // Reserve the width of the longest phrase so the layout never jumps.
  const longest = phrases.reduce((a, b) => (b.length > a.length ? b : a), "");
  const visible = animate ? phrases[index].slice(0, length) : phrases[0];

  return (
    <span className={`relative inline-block ${className}`}>
      <span aria-hidden="true" className="invisible">
        {longest}
      </span>
      <span className="absolute inset-0 flex items-center justify-center whitespace-nowrap">
        <span>{visible}</span>
        <span
          aria-hidden="true"
          className="type-cursor ml-1 inline-block h-[1em] w-[2px] align-middle"
          style={{
            background:
              "linear-gradient(to bottom, hsl(var(--accent)), hsl(var(--primary)))",
          }}
        />
      </span>
    </span>
  );
}
