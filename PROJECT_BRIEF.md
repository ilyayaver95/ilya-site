cv:# Personal Site — Project Brief

Handoff document for building `ilyayaverbaum.com`. Contains every decision made
during planning. Drop this in the repo root and reference it from `CLAUDE.md`.

---

## Purpose

A landing page whose single job is **landing full-time AI/ML roles**. Not
freelance, not services, not a personal blog. Every section is optimized for a
hiring manager who gives the page 40 seconds.

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

Backed by 8 years shipping ML against real radar data at DRS RADA. The combination
— production sensor ML plus disciplined LLM engineering — is the differentiator.

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

---

## Site structure

Single page with anchors, plus one detail route per project.

1. **Hero** — name, "AI/ML Engineer", positioning lines, GitHub/LinkedIn/email,
   download-CV button, and an explicit availability signal:
   *"Currently open to AI/ML roles — Tel Aviv / hybrid / remote."*
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
6. **Skills** — grouped as on the CV. The signal-processing / RF group is a
   feature, not filler.
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
  backend wakes. A recruiter will not wait a minute.
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
  experience.json
  projects.json
  skills.json
/components   → Hero, Timeline, ProjectCard, DemoWidget, Skills
/public       → cv.pdf, og-image.png, project screenshots, northbeam-loop.mp4
```

---

## Features

**In v1:** hero with availability signal · experience timeline · project cards
(two tracks) · Northbeam video · Menu Alchemist live demo · skills · downloadable
CV PDF · full SEO + OG metadata (geo tags, keywords, og-image — this is what
surfaces the site for "AI engineer Israel") · mobile-first · dark mode ·
analytics (Plausible or Vercel).

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

1. Scaffold + deploy an empty site to Vercel first — never debug deployment and
   design simultaneously.
2. Hero + experience + skills.
3. Project cards + case-study routes.
4. Menu Alchemist demo integration.
5. SEO, OG image, analytics.

---

## Prerequisites (manual, before the build)

- [ ] Rename the two repos; `git remote set-url origin <new-url>` locally.
- [ ] Secret-scan git history in all three:
      `git log -p | grep -inE "api[_-]?key|secret|token|password|sk-ant|sk-|AIza"`
      Rotate anything found — deleting the file does not unexpose the commit.
      Confirm `.env`, `*.db`, `data/local.db` are gitignored.
- [ ] Flip all three repos public. Non-negotiable: for AI/ML roles the code gets
      read, and a "View code" button that 404s reads as a broken site.
- [ ] Add a screenshot or GIF to each README — recruiters skim READMEs and rarely
      open a `.py` file.
- [ ] Buy the domain.
- [ ] Compress + upload the Northbeam video.
- [ ] Photo for the hero (pending).

---

## Reference

Structure inspiration: https://rampakanayev.com/ — take the information
architecture and the SEO thoroughness, not the positioning. That site sells
production agentic AI at named companies; this one sells engineering rigor plus
production sensor ML. Copying its framing would invite an unfavorable comparison.
