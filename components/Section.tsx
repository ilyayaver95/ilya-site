import type { ReactNode } from "react";

export default function Section({
  id,
  title,
  kicker,
  children,
}: {
  id: string;
  title: string;
  kicker?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          <span className="text-gradient">{title}</span>
        </h2>
        {kicker ? <p className="mt-2 text-sm text-muted">{kicker}</p> : null}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
