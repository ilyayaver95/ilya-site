import type { ReactNode } from "react";

export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="border-b border-border px-5 py-14 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {title}
        </h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
