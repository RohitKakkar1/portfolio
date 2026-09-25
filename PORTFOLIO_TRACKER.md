# Portfolio Tracker

> Living document for Rohit Kakkar's portfolio. Source of truth for the story,
> pages, sections, components, content status, and roadmap.
> Update this whenever a page/section/asset changes.

Last updated: 2026-09-25

> Related: **`DATA_SCIENCE_COURSE.md`** — full curriculum for the "Data Science, Visually" course (`/courses/data-science`).

---

## 1. Who this is for (bio / facts)

- **Name:** Rohit Kakkar
- **From:** Kanpur, Uttar Pradesh, India
- **Architecture:** B.Arch — SPA Delhi (School of Planning and Architecture)
- **ArchiVoice:** Founded/built ArchiVoice — an architecture community of **~140k**
  (organised competitions, workshops; bridged students & professionals).
  Instagram: https://www.instagram.com/archi.voice/ (login-walled; needs user-provided
  metrics, founding year, mission, notable competitions/collabs). _(See Open Questions.)_
- **Masters:** M.Des (UX Design) — IIT Kanpur. Also studied data science + tech;
  learned front-end and **React Three Fibre** (this site is proof of that).
- **Jio Platforms:** Worked on CPaaS products. Two flagship projects:
  - **JioCX Zone** — public Wi-Fi + captive portal (cafes: retention + marketer personalization).
  - **JioCX Alerts** — multi-channel emergency notifications for employee safety / crisis response.
- **Archinza (archinza.com):** **Head of Product.**
  - First ~6 months building product *without* Claude.
  - Then drove the **entire product with Claude**.
  - Leads a **team of 6** across product, design, tech, and marketing — to launch and scale.

### Positioning (one-liner drafts — pick/refine)
- "Architect → UX → Product. I turn messy, ambiguous problems into products people love."
- "From designing spaces to designing products & data — now Head of Product at Archinza."

---

## 2. The Storyline (narrative spine)

### ⭐ Core principle — Rohit is the hero
The site is **Rohit's story**, not a brochure for Archinza/ArchiVoice/Jio. Every
chapter is first-person and about **what he did, built, grew, and learned** — his
role, decisions, leadership, and outcomes. Companies/products are the *stage*, not
the subject. ("I took Archinza 0→1 as Head of Product" — NOT "Archinza is a platform that…")

### Locked decisions (2026-09-25)
- **Primary goal:** Build a **founder/builder brand** (personality-forward; opportunities, network, credibility).
- **Frame:** **Impact-first** — each chapter leads with an outcome/metric; strongest & most recent work up top (not strict chronology).
- **Through-line:** **"A builder & grower who understands people."** (mix of builder-across-disciplines + community/people-first.)
- **AI angle:** **One strong chapter** — featured inside the Archinza story, not the whole brand.

### Positioning (draft headlines — pick/refine)
- "I build and grow products & communities people love."
- "Builder & grower who understands people — architect by training, Head of Product by trade."

### Proposed homepage order (impact-first)
1. **Hero** — bold positioning + at-a-glance impact strip (140k community · products shipped · team of 6 · disciplines).
2. **About** — the thesis: builder & grower who understands people; disciplines shown via isometric cubes.
3. **Archinza (flagship)** — "Head of Product: took Archinza 0→1 and scaled with a team of 6." + AI-native chapter. → case study.
4. **ArchiVoice** — "Grew a 140k-strong architecture community." (the grower/people proof.) → optional deep page.
5. **Jio** — "Shipped CPaaS products at Jio." → JioCX Zone + JioCX Alerts case studies.
6. **Skills / disciplines** — architecture · UX · data · front-end/R3F.
7. **Technical proof** — this 3D site + data-science work (3D Work + Data Science sections).
8. **Academic** — SPA Delhi (B.Arch) + IIT Kanpur (M.Des).
9. **Contact** — founder-brand CTA + socials.

> Each chapter carries: an **impact headline** + the story beat + relevant **projects/skills**.

Status: **Frame locked. Copy = DRAFT pending real metrics (see §8).**

---

## 3. Tech stack

- Next.js 14 (App Router), React 18, TypeScript
- Tailwind CSS (custom colors: `purple #CBACF9`, `black-100 #000319`, `black-200`)
- framer-motion (animations), react-three-fiber + drei + rapier (3D)
- Internal icon set: `components/ui/icons.tsx` (no react-icons/@tabler on new work)
- Dev: `npm run dev` → http://localhost:3000

---

## 4. Sitemap / Pages

| Route | Purpose | Status |
|-------|---------|--------|
| `/` | Homepage (the story) | 🟡 In progress (redesign) |
| `/courses/data-science` | **Data Science course** landing (cover, purchase CTA, enrolment form, featured project + full curriculum) | 🟢 Built (Razorpay TBD; cover = placeholder) |
| `/data-science/projects/world-happiness` | **Flagship data story** — "The Data of Happiness" (55-step scrollytelling on the World Happiness Report; hist/rank/scatter/line/heatmap/importance/actual-vs-predicted) | 🟢 Built (representative WHR sample data) |
| `/data-science/kmeans` | **K-Means visual explainer** (r2d3-style pinned scrollytelling) | 🟢 Built |
| `/data-science/[slug]` | **All ~24 course lessons** (ScrollyLesson + LessonViz engine, registry-driven) + legacy project stubs | 🟢 All lessons built (visuals to enrich; locking TBD) |
| `/projects/jiocx-zone` | JioCX Zone case study | 🔴 Planned |
| `/projects/jiocx-alerts` | JioCX Alerts case study | 🔴 Planned |
| `/projects/archinza` | Archinza case study (Head of Product) | 🔴 Planned |
| `/ux-projects` | Existing 3D/UX experience | ⚪ Legacy (exists) |
| `/Projects` | Existing EcoSphere 3D project | ⚪ Legacy (exists) |
| `/a-friendly-detour` | Existing 3D office experience | ⚪ Legacy (exists) |
| `/apple-style-animation` | Existing MacBook scroll demo | ⚪ Legacy (exists) |
| `/slideshow` | Existing slideshow | ⚪ Legacy (exists) |

Legend: 🟢 done · 🟡 in progress · 🔴 planned · ⚪ legacy/exists

---

## 5. Homepage sections (current order & status)

**Architecture: persona-driven.** Hero → **ExploreChooser** (Professional / Educator /
Personal) → the chosen persona's content → Contact. About section was **removed**
(redundant with the hero). State lives in `app/page.tsx` (`persona`), content swaps
via `AnimatePresence`. Nav: **Explore · Contact**.

| # | Section | Component | Persona | Status |
|---|---------|-----------|---------|--------|
| 1 | Hero | `sections/Hero3D.tsx` | all | 🟢 Built — positioning + impact strip + educator CTA (metrics placeholder) |
| 2 | Explore chooser | `sections/ExploreChooser.tsx` | all | 🟢 Built — 3 persona buttons, default = Professional |
| P1 | What I do | `sections/WhatIDo.tsx` | Professional | 🟢 Built — project grid (4 crafts) + skill chips (Flip link + DS project TBD) |
| P2 | Professional Space (tabbed) | `sections/ProfessionalSpace.tsx` → `Archinza` / `JioStory`+`JioWobble` / `ArchiVoiceStory`+`ArchiVoice` | Professional | 🟢 Built — tabs Archinza · Jio · ArchiVoice (metrics `[X]`) |
| P3 | Technical proof | `sections/ThreeDProjects.tsx` + `DataScienceProjects.tsx` | Professional | 🟢 Built (placeholder) |
| P4 | Academic | `Word` + `wobbleCardDemo.tsx` | Professional | 🟡 "Where I trained"; cards need real content |
| E1 | Educator | `sections/Educator.tsx` | Educator | 🟢 Built — teaching/mentorship (placeholder metrics + offerings) |
| PR1 | Personal | `sections/Personal.tsx` | Personal | 🟢 Built — Kanpur story + interests (placeholder) |
| 3 | Contact | `Footer.tsx` + `signup-form-demo.tsx` | all | 🟡 Real email + socials TBD |

> Unused now: `sections/About.tsx`, `sections/Skills.tsx` (merged/removed) — kept in repo but not imported.

---

## 6. Component inventory (new/edited in redesign)

- `sections/Hero3D.tsx` — lazy 3D hero (physics city) + overlay CTAs
- `sections/About.tsx` — staggered reveal, animated stat counters, fact chips
- `ui/AnimatedImages.jsx` — 3 isometric `SkillCube`s, scroll-driven collide
- `ui/SkillCube.tsx` — flattened isometric (30°) slab, words on faces (orthographic)
- `sections/Skills.tsx` — 3 discipline cards
- `sections/ThreeDProjects.tsx` — single 100vh 3D work section
- `sections/DataScienceProjects.tsx` — DS project cards
- `sections/Archinza.tsx` — Archinza feature panel
- `ui/icons.tsx` — internal SVG icon set

---

## 7. Storytelling references (researched)

- The Product Folks — PM portfolio step-by-step (cohesive narrative)
- Sarah Scussel — "Impact-First Storytelling" (lead with outcomes/metrics)
- Bootcamp/Medium — "The best portfolio… Part 1: Storytelling"
- Design Shack — "Portfolio Storytelling: present work like a narrative"
- storytellercharles — "Crafting a Portfolio That Tells a Story"

Key takeaways applied here:
- Lead chapters with **impact/outcomes**, not just chronology.
- Each project = a **case study** (Situation → Task → Action → Result), showing thinking, not just visuals.
- Always state **role, team size, goal**, then process, then measurable result.
- Narrative voice with personality; strong visuals; consistent thread throughout.

---

## 8. Open questions (blocking the storyline)

See conversation — answers to be folded into §1 and §2.

---

## 9. Roadmap / backlog

- [ ] Lock storyline frame + chapter order (§2)
- [ ] Rewrite homepage section order to match story
- [ ] Real hero headline/positioning copy
- [ ] Real About stats + skills
- [ ] Build `/projects/jiocx-zone` case study
- [ ] Build `/projects/jiocx-alerts` case study
- [ ] Build `/projects/archinza` case study (Head of Product, team of 6, AI-native)
- [ ] ArchiVoice verified metrics + story
- [ ] Real contact email + socials
- [ ] Replace placeholder images across sections
