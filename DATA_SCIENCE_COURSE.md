# Data Science, Visually — Course Structure

> A visual, intuition-first course on machine learning. Every lesson is an
> interactive, scroll-driven explainer (r2d3-style) — concepts shown as moving
> data, not equations. Built with framer-motion + SVG.
>
> This file is the **curriculum source of truth**. The site's course page
> (`/courses/data-science`) and lesson pages (`/data-science/[slug]`) should
> track this list.

Last updated: 2026-09-25

---

## 1. Overview

- **Title:** Data Science, Visually
- **Tagline:** Learn the intuition behind machine learning through interactive visuals — no heavy maths, just clarity.
- **Format:** Self-paced, browser-based. Each lesson is a scrollytelling visual (pin the graphic, scroll the story).
- **Instructor:** Rohit Kakkar
- **Pricing:** ₹1,999 one-time · lifetime access _(placeholder — confirm)_
- **Free preview:** Module 2.1 — *K-Means, Visually* (already live)

### Who it's for
- Students & professionals who find ML intimidating and want the *intuition* first.
- Designers, architects, PMs, and career-switchers moving toward data/AI.
- Anyone who learns better by *seeing* than by reading formulas.

### Prerequisites
- Curiosity. Basic comfort with charts. **No coding or calculus required.**
- Optional track: light Python snippets for those who want to go hands-on.

### What you'll be able to do by the end
- Explain how the core ML algorithms actually work, in plain language.
- Read and reason about data (distributions, features, relationships).
- Tell when a model is trustworthy vs. fooling itself (overfitting).
- Pick the right family of model for a problem — and know why.

---

## 2. Curriculum at a glance

> **All lessons are now built** and live at `/data-science/[slug]`, driven by the
> `data/course.ts` registry + `ScrollyLesson` engine + `LessonViz` library.
> Bespoke flagship (K-Means) uses `KMeansStory`. Remaining work: enrich individual
> visuals, decide which lessons to lock, wire payments/form.

| # | Module | Lessons | Status |
|---|--------|---------|--------|
| 0 | Foundations | 3 | 🟢 Built |
| 1 | Seeing Data | 3 | 🟢 Built |
| 2 | Finding Groups (Unsupervised) | 3 | 🟢 Built (2.1 bespoke) |
| 3 | Making Predictions (Supervised) | 4 | 🟢 Built |
| 4 | How Models Learn | 3 | 🟢 Built |
| 5 | Neural Networks | 3 | 🟢 Built |
| 6 | Trusting a Model | 4 | 🟢 Built |
| 7 | Capstone | 1 | 🟢 Built |

Legend: 🟢 built · 🟡 in progress · 🔴 planned

Each lesson below lists: **Big idea · The visual · Example/dataset · Outcome.**

---

## 3. Modules & lessons

### Module 0 — Foundations
*What is this thing, and what is it made of?*

**0.1 What is machine learning?**
- Big idea: learning patterns from examples instead of hand-writing rules.
- The visual: rules-vs-examples toggle; dots the machine "learns" to separate.
- Example: spam vs. not-spam intuition.
- Outcome: define ML in one sentence; know supervised vs. unsupervised.

**0.2 Data, rows & features**
- Big idea: a dataset is rows (things) × columns (features).
- The visual: a table morphs into dots on axes; each column becomes a dimension.
- Example: neighbourhoods (distance, rent, age…).
- Outcome: read a dataset as points in feature-space.

**0.3 Similarity & distance**
- Big idea: "alike" = "close" in feature-space.
- The visual: drag a point; watch distances to others update.
- Example: nearest cafes by two traits.
- Outcome: understand distance as the backbone of many algorithms.

---

### Module 1 — Seeing Data
*Before modelling, look.*

**1.1 Distributions & histograms**
- Big idea: where values pile up tells a story.
- The visual: points drop into bins; the histogram builds as you scroll.
- Example: rent distribution across a city.
- Outcome: read a histogram; spot skew and outliers.

**1.2 Relationships & scatterplots**
- Big idea: two features together reveal patterns one can't.
- The visual: 1D strip → 2D scatter; correlation line appears.
- Example: elevation vs. price.
- Outcome: reason about correlation (and that it isn't causation).

**1.3 Too many dimensions (intro to PCA)**
- Big idea: squeeze many features into a 2D picture without losing the shape.
- The visual: a 3D cloud rotates, then "flattens" onto its best 2D view.
- Example: 7-feature homes → 2D map.
- Outcome: intuition for dimensionality reduction.

---

### Module 2 — Finding Groups (Unsupervised)
*Discovering structure with no labels.*

**2.1 K-Means, Visually** — 🟢 BUILT · FREE PREVIEW
- Big idea: guess centres, assign points, move centres, repeat until stable.
- The visual: 60 neighbourhood dots; markers drop, points recolour, centroids slide, clusters converge.
- Example: clustering city neighbourhoods into "types".
- Outcome: run the K-Means loop in your head; know what k means.
- Route: `/data-science/kmeans`

**2.2 Choosing k (the elbow)**
- Big idea: more clusters always fit better — but not always *usefully*.
- The visual: slider for k; error curve draws; the "elbow" highlights.
- Example: same neighbourhoods, k = 1…8.
- Outcome: choose k deliberately, not arbitrarily.

**2.3 When K-Means fails**
- Big idea: it assumes round, similar-sized blobs.
- The visual: moons/rings datasets where K-Means splits them wrong; contrast with density-based grouping.
- Example: crescent-shaped clusters.
- Outcome: know the assumptions and their limits.

---

### Module 3 — Making Predictions (Supervised)
*Learning from labelled examples.*

**3.1 k-Nearest Neighbours**
- Big idea: predict by asking your closest neighbours to vote.
- The visual: drop a new point; nearest k light up and vote; boundary shifts with k.
- Example: is this home SF or NY?
- Outcome: understand the simplest classifier and the role of k.

**3.2 Decision Trees, Visually**
- Big idea: split the data with simple questions, one at a time.
- The visual: axis-aligned cuts drop in; the tree grows branch by branch; regions colour.
- Example: classify homes/building types.
- Outcome: read a tree; see how splits partition space.

**3.3 Logistic Regression (the boundary)**
- Big idea: draw the best dividing line and turn distance into probability.
- The visual: line rotates to separate classes; sigmoid maps distance→probability.
- Example: pass/fail from two scores.
- Outcome: intuition for linear decision boundaries + probabilities.

**3.4 Ensembles (forests, briefly)**
- Big idea: many weak trees vote → one strong model.
- The visual: several shallow trees, each imperfect, combine into a smooth boundary.
- Example: same classification, single tree vs. forest.
- Outcome: why "wisdom of crowds" beats one tree.

---

### Module 4 — How Models Learn
*The engine under the hood.*

**4.1 Linear Regression (fit a line)**
- Big idea: find the line that misses by the least.
- The visual: line tilts; residual sticks shrink; error read-out drops.
- Example: predict rent from size.
- Outcome: understand fit + residuals.

**4.2 Cost & the error surface**
- Big idea: every model setting has an error; picture it as a landscape.
- The visual: a 2D loss curve / 3D bowl; the current guess is a ball.
- Example: one-parameter fit.
- Outcome: see "learning" as finding the lowest point.

**4.3 Gradient Descent, Visually**
- Big idea: roll downhill in small steps to the minimum.
- The visual: ball steps down the loss curve; learning-rate slider shows too-big/too-small.
- Example: same fit, animated convergence.
- Outcome: understand steps, learning rate, and getting stuck.

---

### Module 5 — Neural Networks
*From one neuron to a network.*

**5.1 The neuron (perceptron)**
- Big idea: weighted inputs → a decision.
- The visual: sliders for weights; the boundary line moves live.
- Example: simple AND/OR.
- Outcome: read a single neuron as a line.

**5.2 Layers & non-linearity**
- Big idea: stack neurons to bend straight lines into curves.
- The visual: XOR problem one neuron can't solve; a hidden layer bends the boundary.
- Example: XOR / concentric classes.
- Outcome: why "deep" unlocks complex shapes.

**5.3 Networks, Visually (how it trains)**
- Big idea: forward pass predicts, backprop nudges weights downhill.
- The visual: activations flow forward; error flows back; boundary sharpens over epochs.
- Example: 2D spiral classification.
- Outcome: end-to-end intuition of training a net.

---

### Module 6 — Trusting a Model
*Is it actually good?*

**6.1 Overfitting & underfitting**
- Big idea: memorising ≠ learning.
- The visual: model complexity slider; fit goes from too-simple → just-right → too-wiggly.
- Example: noisy 1D data.
- Outcome: recognise all three regimes on sight.

**6.2 Train / test split & cross-validation**
- Big idea: judge on data the model hasn't seen.
- The visual: dataset splits; scores on train vs. test diverge as complexity grows.
- Example: the overfitting model, re-scored honestly.
- Outcome: why held-out data matters.

**6.3 Bias–variance tradeoff**
- Big idea: the tension between too-rigid and too-sensitive.
- The visual: dartboard analogy + the classic U-shaped test-error curve.
- Example: repeated fits on resampled data.
- Outcome: name the tradeoff and where the sweet spot is.

**6.4 Metrics that matter (confusion, precision/recall)**
- Big idea: accuracy lies when classes are imbalanced.
- The visual: confusion matrix fills; precision/recall update as the threshold slides.
- Example: rare-event detection.
- Outcome: pick the right metric for the problem.

---

### Module 7 — Capstone
**7.1 End-to-end mini-project**
- Big idea: put it together — look → model → judge → explain.
- The visual: a guided flow reusing earlier interactions on one dataset.
- Example: cluster + classify a small real dataset.
- Outcome: reason through a full ML problem visually.

---

## 4. Per-lesson build template (for consistency)

Each lesson page should have:
1. **Pinned heading** (title + module tag).
2. **Pinned visual** (SVG/canvas) that reacts to scroll.
3. **Swapping text panel** — one idea per beat, with progress dots.
4. **Keep-scrolling cue** that fades on the last beat.
5. **Recap card** at the end (3 bullets) + link back to the course.
6. Optional **"go hands-on"** Python snippet (collapsed).

Reuse the pattern established in `components/dataScience/KMeansStory.tsx`.

---

## 5. Site wiring / TODO

- [ ] Sync `data/dataScience.ts` + course `modules[]` to this structure.
- [ ] Build lessons in priority order: 3.2 Decision Trees → 4.3 Gradient Descent → 6.1 Overfitting → 5.1 Neuron.
- [ ] Free-preview flag per lesson; lock the rest behind purchase.
- [ ] Razorpay checkout (key + order API route) — see `components/course/PurchaseButton.tsx`.
- [ ] Enrolment form → email/CRM — see `components/course/CourseForm.tsx`.
- [ ] Real course cover image (currently `/background3d.png` placeholder).
- [ ] UI polish pass on `/courses/data-science` (noted for later).
