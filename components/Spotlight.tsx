"use client";

import { useEffect } from "react";

/**
 * One delegated pointermove listener that feeds --mx/--my to any `.card-spot`
 * element under the pointer. Cheaper than a listener per card, and cards stay
 * server components.
 */
export default function Spotlight() {
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      const target = (e.target as Element | null)?.closest?.(".card-spot");
      if (!(target instanceof HTMLElement)) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = target.getBoundingClientRect();
        target.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        target.style.setProperty("--my", `${e.clientY - rect.top}px`);
      });
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", onMove);
    };
  }, []);

  return null;
}
