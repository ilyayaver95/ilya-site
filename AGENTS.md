<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Personal site

Read `PROJECT_BRIEF.md` before doing anything. It contains all positioning,
structure, and content decisions for this site — follow it rather than
inventing an approach.

## Conventions

- All copy and data lives in `/content/*.json`, surfaced through `lib/content.ts`.
  Adding a project must be a one-file JSON edit, never a JSX change.
- Static export (`output: "export"`); `next build` emits `/out`. No server-only
  features — no route handlers, no dynamic functions, no image optimizer.
- Mobile-first. Colors come from the CSS variables in `app/globals.css`
  (light default, `data-theme="dark"` override, HSL triplets) — never hardcode a hex.

## Working rules

- Push only to feature branches. Never push to `main` without asking — `main`
  auto-deploys to the live site.
- Ask before installing anything beyond Next.js, Tailwind, and their deps.
