/**
 * The mark: a signal pulse that forks into a Y.
 *
 * Reads three ways at once — the initials (I as the incoming pulse, Y as the
 * fork), a radar return, and the positioning line itself: every decision
 * splits into "enumerable, decide in code" (the solid arm, terminated by a
 * blip) and "not enumerable, ask the model" (the dashed arm). One gradient,
 * violet -> cyan, same as the rest of the site.
 */
export default function Logo({
  className = "",
  size = 32,
  withRing = true,
}: {
  className?: string;
  size?: number;
  withRing?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="iy-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="hsl(var(--primary))" />
          <stop offset="1" stopColor="hsl(var(--accent))" />
        </linearGradient>
        <linearGradient id="iy-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="hsl(var(--primary) / 0.7)" />
          <stop offset="1" stopColor="hsl(var(--accent) / 0.7)" />
        </linearGradient>
      </defs>

      {withRing ? (
        <rect
          x="2"
          y="2"
          width="60"
          height="60"
          rx="16"
          fill="hsl(var(--card) / 0.6)"
          stroke="url(#iy-ring)"
          strokeWidth="1.5"
        />
      ) : null}

      {/* incoming pulse — the "I" */}
      <path
        d="M10 36 H19 L23 22 L28 46 L32 36 H37"
        fill="none"
        stroke="url(#iy-grad)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* fork — the "Y". Solid arm: decided in code. Dashed arm: asked the model. */}
      <path
        d="M37 36 L51 24"
        fill="none"
        stroke="url(#iy-grad)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M37 36 L51 48"
        fill="none"
        stroke="url(#iy-grad)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeDasharray="0.1 5.2"
      />
      {/* the blip */}
      <circle cx="53" cy="22.5" r="3.2" fill="hsl(var(--accent))" />
    </svg>
  );
}
