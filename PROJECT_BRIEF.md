# Personal Site — Project Brief

Handoff document for building `ilyayaverbaum.com`. Contains every decision made
during planning. Drop this in the repo root and reference it from `CLAUDE.md`.

---

## Purpose

A professional portfolio whose single job is **establishing technical
credibility**. Not freelance, not services, not a personal blog. Every section
is optimized for a technical reader — an engineer, a hiring manager, a
conference organizer — who gives the page 40 seconds.

**Not a job hunt.** Ilya is not actively searching for roles, and the site
carries no availability signalling: no "open to work" badge, no "currently
open to…" line, no availability copy anywhere. The site earns its keep by
showing the work, not by asking for anything. If that changes, the availability
signal goes back in the hero and this section gets rewritten first.

Owner: Ilya Yaverbaum — AI/ML Engineer, Tel Aviv.
GitHub: github.com/ilyayaver95 · LinkedIn: linkedin.com/in/ilya-yaverbaum ·
ilya.yaver@gmail.com

---

## Positioning

The spine of the whole site:

> **ML engineer who builds LLM systems the way production ML gets built —
> deterministic where the answer is knowable, evaluated where it isn't, and
> instrumented either way.**

This is not marketing copy; it is the actual, demonstrable through-line across
all three side projects:

- **Northbeam** — explicit code-vs-model decision table; 62% of declines decided
  deterministically with zero false positives; 196 tests + 77 graded evals.
- **Beat the ASPP** — indicators computed in Python; the LLM interprets and
  never invents numbers; rubric-constrained grading.
- **Menu Alchemist** — LLM extracts the recipe; pantry detection, package sizing
  and serving math are pure Python and unit-tested.

Backed by production sensor ML at DRS RADA. The combination — production sensor
ML plus disciplined LLM engineering — is the differentiator.

**Do not claim "8 years shipping ML."** An earlier draft of this brief did, and
it does not survive the CV: 8 years is DRS RADA *tenure* (2018→), which began in
field engineering. ML/data-science work starts at the Data Science Analyst role
in 2021. The defensible framing is the arc, not a single number — radar and RF
since 2015, ML since 2021. Prefer "since 2015" over a year count so the copy
does not silently rot. Every number on the page must be checkable against the CV.

Northbeam's own line is the best single sentence available and should appear on
the page close to verbatim: *"For every decision in an agent, ask: is the right
answer enumerable?"*

**What NOT to do:** do not position as "Agentic AI Engineer" competing on
framework name-dropping. The agentic work is personal projects and is labeled as
such. The credibility comes from the rigor and from the production ML history.

---

## Confidentiality constraint

DRS RADA is a defense company. Production-work cards describe **methodology and
outcomes only** — no systems, customers, screenshots, or performance figures
beyond what already appears on the public CV. Cleared scope = exactly the
resume bullets, nothing beyond.

Northbeam is built on a fully synthetic, fictional company, which sidesteps this
entirely. That fact should be the **first line** of its card, not a footnote.

**Images are part of this constraint, not an exception to it.** The production-ML
carousel has a 16:9 image slot per card. It must never hold a screenshot of
internal tooling, a radar display, a labeling UI, or a plot of real data —
"no screenshots" above covers these. Cleared: abstract or self-made
illustrations, generic stock, or diagrams drawn from scratch that show only the
method already described in the CV bullet. When in doubt the slot stays empty;
`image: null` renders a labelled placeholder, which is a better outcome than an
uncleared image on a public site. Anything sourced from work needs employer
sign-off before it ships.

---

## Site structure

Single page with anchors, plus one detail route per project.

1. **Hero** — centered: photo, name, "AI/ML Engineer · Tel Aviv", positioning
   lines, the "is the right answer enumerable?" pull quote, then
   GitHub/LinkedIn/email and the download-CV button. No availability signal —
   see Purpose.
2. **Flagship demo** — Northbeam video, high on the page. This is proof of work
   and is treated as hero-adjacent, not buried at projects position 3.
3. **Experience** — timeline of the four roles. The arc (Unit 8200 RF → field
   engineer → data science → ML engineer) is stated explicitly: he has touched
   the hardware, the data, and the model. Metrics in bullets, not adjectives.
4. **Projects**, in two clearly labeled tracks:
   - *Production ML (DRS RADA)* — active-learning labeling pipeline;
     performance-analysis / overfit-mapping tooling; time-series anomaly
     detection and enrichment. Architecture-level only.
   - *Independent projects* — Northbeam, Beat the ASPP, Menu Alchemist.
     Honestly labeled as personal. This labeling is what makes the rest credible.
5. **Live demo** — Menu Alchemist, interactive.
6. **Skills** — grouped as on the CV, **plus** a "LLM Reliability & Evaluation"
   group that the CV does not have. The site deliberately claims more than the
   CV here: everything added is demonstrated by a project card on the page, but
   **the CV is now behind the site and should be brought up to match.** The
   signal-processing / RF group is a feature, not filler.

   Skills live in three places and drift apart easily — `skills.json`, the
   `stack` chips per role in `experience.json`, and the `tags` per card in
   `projects.json`. When adding a capability, check all three.
7. **Education**, **contact**, **footer**.

Every project card uses the same skeleton: problem → approach → architecture →
the one genuinely interesting technical decision → stack chips → repo/demo link.

---

## The three projects

### Northbeam Support Copilot — FLAGSHIP
Repo: `Radar_copilot_RAG` → rename to `northbeam-support-copilot`

Tool-calling support agent over a fully synthetic, fictional radar company
(33 operators, 213 units, 18 cases, 225 log entries, 55 tickets, 7 policy docs).
12 read-only tools in three layers (records / calculation / retrieval). Hybrid
BM25 + embedding policy search. Deterministic refusal layer. Trace-based
observability feeding a KPI dashboard. 196 offline tests, 77 behavioural evals
across six categories, deterministic binary grading.

Hook: *"A tool-calling support agent where 62% of refusals are decided in code,
not by the model — with 196 tests and 77 graded evals to prove it stays that way."*

Presentation: embedded demo video + deep case-study page. The video is better
than a live widget here — no cost, no latency, no cold start, and it shows the
eval dashboard a chat window wouldn't.

### Beat the ASPP
Repo: `beat_the_aspp` (name is correct — ASPP, not S&P)

Multi-agent equity research. Three specialist agents (technical / fundamental /
sentiment) run in parallel via ThreadPoolExecutor, then a synthesizer reconciles
them into one verdict. Pydantic-enforced structured outputs. Provider
abstraction across Anthropic / Groq / Ollama. Prompt caching, cost telemetry per
call, two-stage write-then-extract (Opus writes prose, Sonnet extracts JSON,
~5× cheaper). Streamlit multi-page UI with auth, SQLAlchemy over Postgres or
SQLite, portfolio baseline tracking, scheduled scanner with Telegram alerts.

Hook: *"Three specialist analyst agents run in parallel; a strategist agent
reconciles them into one defensible verdict. Opus writes the narrative, Sonnet
extracts the JSON — same quality, ~5× cheaper."*

Presentation: case study only. NOT a live demo — slow, expensive per run, and it
sits too close to looking like published investment advice. Carry the README's
"this is not investment advice" disclaimer onto the card.

### Menu Alchemist — LIVE DEMO
Repo: `the_alchemist_lens` → rename to `menu-alchemist`

Photograph a drink or a menu, get a reconstructed recipe (ingredients, steps,
glassware, garnish, estimated ABV) plus a buy list of only what you don't own.
FastAPI with versioned REST API, pluggable vision providers behind a
`VisionProvider` interface (Gemini / Ollama / fake), deterministic pure-Python
buy-list logic, response cache, vanilla JS PWA frontend, Render blueprint,
pytest suite.

Hook: *"Photograph a drink, get the recipe and a shopping list of only what you
don't own. Vision model extracts; pure Python decides."*

Chosen as the interactive demo because a stranger can use it in 15 seconds with
zero domain knowledge. Framing on the card should be technical
("vision extraction + deterministic constraint logic"), even though the topic is
playful.

---

## Demo hosting

**Menu Alchemist** — decide between:
- Render free tier (blueprint already exists) — ~1 min cold start after 15 min
  idle. If chosen, the page MUST show a canned example immediately while the
  backend wakes. A visitor will not wait a minute.
- Re-host as a Vercel serverless route alongside the site — no cold start,
  one deployment.

Either way: rate limit by IP (~5/hour, Upstash Redis free tier), hard daily
spend ceiling, cache common inputs, and fall back to the existing `fake`
provider's canned response when limited so the demo never looks broken. Cheap
model, short max_tokens. Target cost: a couple of dollars a month.

Add a "how this works" panel beside the demo showing the actual pipeline. The
demo proves it runs; the panel proves he understands what he built.

**Northbeam video** — compress with ffmpeg (`-crf 26`, scale 1280,
`-movflags +faststart`), host unlisted on YouTube for the README and the site.
Additionally cut a 10–15s muted autoplay loop (<2 MB, ideally showing the KPI
dashboard) for the project card thumbnail. A moving thumbnail gets watched; a
static one gets skipped. Do not serve large MP4s from raw.githubusercontent.com
— no proper range-request support, so it downloads instead of playing.

---

## Tech stack

- Next.js with static export + Tailwind, deployed on Vercel.
- Content lives in `/content/*.json` — adding project #6 must be a one-file edit,
  never a JSX change.
- Domain registered at GoDaddy (`ilyayaverbaum.com` or similar), nameservers
  pointed at Vercel. Skip all GoDaddy upsells.

```
/app          → page routes (single page + /projects/[slug])
/content
  experience.json      (includes per-role `stack` tags)
  education.json
  skills.json
  projects.json        (empty until the repos are public)
/lib
  content.ts    → typed re-export of all JSON + `profile` and `nav` constants
/components   → Nav, Hero, Section, Timeline, Skills, Education,
                Projects (stub), ProjectCard, DemoWidget
/public       → cv.pdf, og-image.png, project screenshots, northbeam-loop.mp4
```

Static export is on (`output: "export"` → `/out`), so nothing server-only:
no route handlers, no dynamic functions, no image optimizer. The Menu Alchemist
demo therefore cannot be a Next.js API route without turning the export off —
factor that into the demo-hosting decision below.

---

## Features

**In v1:** sticky anchor nav · centered hero · experience cards with per-role
tech tags · project cards (two tracks) · Northbeam video · Menu Alchemist live
demo · skills · education · downloadable CV PDF · full SEO + OG metadata (geo
tags, keywords, og-image — this is what surfaces the site for "AI engineer
Israel") · mobile-first · dark mode · analytics (Plausible or Vercel).

**Deferred:** "chat with my CV" RAG widget (on-brand — it is the skill it
demonstrates; small ChromaDB/FAISS index over CV + project write-ups).

**Explicitly skipped:** terminal-style FAQ widget (derivative of the reference
site) · Hebrew version · blog, unless actually committed to writing — an empty
blog tab is worse than none. Note that Northbeam's "is the answer enumerable?"
thesis is already a written post sitting inside a README, if a blog ever starts.

**Possible v3:** a small interactive visualization of a signal-processing or
active-learning concept. Nobody else in this space has one and it is uniquely his.

---

## Build order

1. [x] Scaffold — Next.js 16 App Router + Tailwind v4, static export. Pushed to
       `github.com/ilyayaver95/ilya-site` (**private**; contains this brief).
2. [~] Deploy to Vercel — import pending, then point `ilyayaverbaum.com` DNS at
       it from GoDaddy. Read the records off Vercel; never guess the values.
3. [x] Hero + experience + skills + education, restyled to the reference palette.
4. [~] Project cards. Production-ML track (DRS RADA) is built as a scroll-snap
       carousel driven by `content/projects.json`, copy taken strictly from the
       CV bullets, image slots awaiting cleared art. Independent track and
       case-study routes still **blocked** on the prerequisites below — repos
       public, copy written.
5. [ ] Menu Alchemist demo integration.
6. [ ] SEO, OG image, analytics.

Deviation from the original order: the site was styled before deploying rather
than after. The "deploy an empty site first" rule still holds for the *Vercel
import* — do that before adding anything server-shaped.

### Working rules

- Push only to feature branches. `main` auto-deploys; never push it unasked.
- Ask before installing anything beyond Next.js, Tailwind, and their deps.

---

## Prerequisites (manual, before the build)

- [ ] Rename the two repos; `git remote set-url origin <new-url>` locally.
- [ ] Secret-scan git history in all three:
      `git log -p | grep -inE "api[_-]?key|secret|token|password|sk-ant|sk-|AIza"`
      Rotate anything found — deleting the file does not unexpose the commit.
      Confirm `.env`, `*.db`, `data/local.db` are gitignored.
- [ ] Flip all three repos public. Non-negotiable: the whole point is that the
      code gets read, and a "View code" button that 404s reads as a broken site.
      This gates the entire projects section.
- [ ] Add a screenshot or GIF to each README — readers skim READMEs and rarely
      open a `.py` file.
- [x] Buy the domain — `ilyayaverbaum.com`, registered at GoDaddy.
- [ ] Compress + upload the Northbeam video.
- [ ] Photo for the hero (pending).

---

## Reference

Structure **and visual** inspiration: https://rampakanayev.com/ — take the
information architecture, the design language, and the SEO thoroughness, but
**not the positioning**. That site sells production agentic AI at named
companies; this one sells engineering rigor plus production sensor ML. Copying
its framing would invite an unfavorable comparison, so all copy stays original.

What was adopted from it: the token palette (below), gradient headings, gradient
card surfaces, glow shadows, the sticky blurred anchor nav, the centered
photo-above-name hero, experience-as-cards with tech tags, and the skills card
grid.

### Visual identity — "Signal"

The site is dark-only (both references are). The visual language is his and
nobody else's: a radar sweep with concentric rings behind the hero (radar/RF
since 2015), a faint grid + noise ground, violet/cyan aurora, Sora for display
headings, scroll-reveal sections, spotlight-on-hover cards, a floating glass
nav with active-section tracking, and animated stat counters whose numbers are
all CV/README-checkable (`profile.json → stats`).

**Logo** (`components/Logo.tsx`, `app/icon.svg`, `public/logo.svg`): a signal
pulse that forks into a Y. Reads as the initials (I = incoming pulse, Y = fork),
as a radar return, and as the positioning line — every decision splits into
"enumerable → decide in code" (solid arm, terminated by a blip) and "not
enumerable → ask the model" (dashed arm). Violet→cyan gradient, same as the
rest of the site. Swap the hero mark for a real photo when one is available.

### Design tokens

Lifted from the reference site's stylesheet, kept as bare HSL triplets so they
compose with alpha. Defined in `app/globals.css`; light mode carries the same
token names. **Never hardcode a hex — always go through a token.**

| Token          | Dark value    | Role                     |
| -------------- | ------------- | ------------------------ |
| `--background` | `220 26% 6%`  | cool near-black ground   |
| `--card`       | `220 26% 8%`  | card base (→ `10%` grad) |
| `--foreground` | `210 40% 98%` | primary text             |
| `--muted-foreground` | `215 20% 65%` | secondary text     |
| `--border`     | `220 26% 15%` | hairlines                |
| `--primary`    | `264 83% 70%` | violet                   |
| `--accent`     | `197 71% 52%` | cyan                     |
| `--radius`     | `0.75rem`     | card corner              |

Helper classes: `.hero-wash` (violet/cyan radial wash), `.card-surface`
(gradient + shadow), `.text-gradient` (violet→cyan clip), `.glow`.
