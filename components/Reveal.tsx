"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/**
 * Scroll-triggered entrance. Adds `is-visible` once the element enters the
 * viewport; the CSS in globals.css does the rest. Content is hidden only when
 * `html.js` is present, so the static export never ships invisible text and
 * reduced-motion users get everything at once.
 *
 * Two triggers share one registry so the page has exactly one observer and one
 * scroll listener no matter how many Reveals mount:
 *  - IntersectionObserver reveals elements as they scroll into view.
 *  - A rAF-throttled scroll check reveals anything already *above* the viewport.
 *    An element that jumps from below to above (anchor link, fast scroll,
 *    reload mid-page) never intersects, so the observer alone would leave it
 *    hidden forever.
 */
const pending = new Set<HTMLElement>();
let observer: IntersectionObserver | null = null;
let scrollBound = false;
let frame = 0;

function show(el: HTMLElement) {
  el.classList.add("is-visible");
  pending.delete(el);
  observer?.unobserve(el);
  if (pending.size === 0) teardown();
}

function revealPassed() {
  cancelAnimationFrame(frame);
  frame = requestAnimationFrame(() => {
    for (const el of Array.from(pending)) {
      if (el.getBoundingClientRect().bottom < 0) show(el);
    }
  });
}

function ensureInfra() {
  if (!observer && "IntersectionObserver" in window) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) show(entry.target as HTMLElement);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
  }
  if (!scrollBound) {
    window.addEventListener("scroll", revealPassed, { passive: true });
    scrollBound = true;
  }
}

function teardown() {
  observer?.disconnect();
  observer = null;
  if (scrollBound) {
    window.removeEventListener("scroll", revealPassed);
    scrollBound = false;
  }
}

function register(el: HTMLElement) {
  if (!("IntersectionObserver" in window)) {
    el.classList.add("is-visible");
    return () => {};
  }
  pending.add(el);
  ensureInfra();
  observer?.observe(el);
  revealPassed(); // covers a reload that restores scroll mid-page
  return () => {
    pending.delete(el);
    observer?.unobserve(el);
    if (pending.size === 0) teardown();
  };
}

export default function Reveal({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
  ...rest
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  /** Stagger index; multiplied by 90ms in CSS. */
  delay?: number;
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return register(el);
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ "--i": delay } as React.CSSProperties}
      {...rest}
    >
      {children}
    </Tag>
  );
}
