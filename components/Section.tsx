import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

export default function Section({
  id,
  title,
  kicker,
  children,
  wide = false,
}: {
  id: string;
  title: string;
  kicker?: string;
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <section id={id} className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className={`mx-auto ${wide ? "max-w-5xl" : "max-w-3xl"}`}>
        <Reveal className="mb-12">
          <h2 className="font-display text-3xl font-bold sm:text-5xl">
            <span className="text-gradient">{title}</span>
          </h2>
          {kicker ? (
            <p className="mt-4 max-w-2xl text-balance text-sm leading-relaxed text-muted sm:text-base">
              {kicker}
            </p>
          ) : null}
          <div className="rule mt-6 w-40" aria-hidden="true" />
        </Reveal>
        {children}
      </div>
    </section>
  );
}
