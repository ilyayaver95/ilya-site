"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/lib/content";
import Logo from "@/components/Logo";

/**
 * Floating glass pill. Tracks the active section with an IntersectionObserver
 * and draws a scroll-progress hairline along the top of the viewport.
 */
export default function Nav() {
  const [active, setActive] = useState<string>("");
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top that is intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? window.scrollY / max : 0);
        setScrolled(window.scrollY > 24);
        if (window.scrollY < 200) setActive("");
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className="scroll-progress fixed inset-x-0 top-0 z-[60] h-[2px]"
        style={{ transform: `scaleX(${progress})` }}
      />
      <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-4">
        <nav
          className={`nav-glass flex h-12 w-full max-w-3xl items-center justify-between rounded-full pl-2 pr-1.5 transition-[max-width,box-shadow] duration-500 sm:h-13 ${
            scrolled ? "sm:max-w-2xl" : ""
          }`}
          aria-label="Primary"
        >
          <a
            href="#top"
            className="group flex items-center gap-2 rounded-full py-1 pl-1 pr-3 font-mono text-sm font-medium"
            aria-label="Back to top"
          >
            <Logo size={30} className="transition-transform duration-500 group-hover:rotate-[-8deg]" />
            <span className="hidden sm:inline">
              <span className="text-gradient">ilya</span>
              <span className="text-muted">.yaverbaum</span>
            </span>
          </a>

          <ul className="flex items-center gap-0.5">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  data-active={active === item.href}
                  className="nav-link isolate rounded-full px-2 py-1.5 text-xs text-muted hover:text-foreground sm:px-3.5 sm:text-sm"
                >
                  {item.label}
                </a>
              </li>
            ))}
            {/* Hidden on phones — the hero carries the Download CV button and the pill has no room. */}
            <li className="ml-1 hidden sm:block">
              <a
                href={profile.cv}
                download
                className="btn-primary inline-flex h-9 items-center rounded-full px-3.5 text-xs font-semibold sm:text-sm"
              >
                CV
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
