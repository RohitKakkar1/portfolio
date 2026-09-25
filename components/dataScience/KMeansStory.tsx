"use client";

// A scroll-driven visual explainer of K-Means clustering (r2d3-style).
// A sticky SVG scatter of "neighbourhoods" animates as the reader scrolls
// through the story beats: place markers → assign → move → repeat → converge.
// Built with framer-motion + SVG only (no D3 / charting libs).

import { useMemo, useRef, useState } from "react";
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/icons";

const CLUSTER_COLORS = ["#7c3aed", "#0891b2", "#db2777"]; // violet, cyan, pink
const GRAY = "#cbd5e1";

// ---- deterministic data + k-means (computed once) --------------------------

function makeRNG(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function generatePoints() {
  const rng = makeRNG(42);
  const centers = [
    [0.28, 0.72],
    [0.62, 0.3],
    [0.82, 0.7],
  ];
  const spread = 0.075;
  const pts: [number, number][] = [];
  centers.forEach((c) => {
    for (let i = 0; i < 20; i++) {
      const gx = (rng() + rng() + rng() - 1.5) * spread * 2;
      const gy = (rng() + rng() + rng() - 1.5) * spread * 2;
      pts.push([
        Math.min(0.95, Math.max(0.05, c[0] + gx)),
        Math.min(0.95, Math.max(0.05, c[1] + gy)),
      ]);
    }
  });
  return pts;
}

const dist2 = (a: number[], b: number[]) =>
  (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2;

const nearest = (p: number[], cents: number[][]) => {
  let best = 0;
  let bd = Infinity;
  cents.forEach((c, k) => {
    const d = dist2(p, c);
    if (d < bd) {
      bd = d;
      best = k;
    }
  });
  return best;
};

function recompute(points: number[][], labels: number[], cents: number[][]) {
  return cents.map((c, k) => {
    const group = points.filter((_, i) => labels[i] === k);
    if (!group.length) return c;
    const x = group.reduce((s, p) => s + p[0], 0) / group.length;
    const y = group.reduce((s, p) => s + p[1], 0) / group.length;
    return [x, y];
  });
}

type VizState = { centroids: number[][]; labels: number[] | null };

const STEP_TEXT = [
  {
    title: "60 neighbourhoods",
    text: "Each dot is a neighbourhood, placed by two things: how far it sits from the city centre, and how pricey it is.",
  },
  {
    title: "No labels",
    text: "Nobody told us which neighbourhoods are alike. Could a machine discover the 'types' on its own?",
  },
  {
    title: "Guess: find 3 groups",
    text: "We ask for three groups. The algorithm drops three markers at random — it has no idea if they're right.",
  },
  {
    title: "Assign",
    text: "Every neighbourhood joins its nearest marker. Instant groups — but rough ones.",
  },
  {
    title: "Move",
    text: "Each marker slides to the centre of the neighbourhoods that joined it.",
  },
  {
    title: "Assign again",
    text: "With the markers in better spots, neighbourhoods switch to whichever is now closest.",
  },
  {
    title: "Move again",
    text: "The markers re-centre. Assign, move, assign, move…",
  },
  {
    title: "It settles",
    text: "Soon nothing changes. Three clear neighbourhood types have emerged — without a single label.",
  },
  {
    title: "That's K-Means",
    text: "Guess, assign, move, repeat. The same trick powers customer segments, image palettes, and city planning.",
  },
];

// ---- coordinate mapping (viewBox 0..100) -----------------------------------
const mapX = (x: number) => 10 + x * 82;
const mapY = (y: number) => 90 - y * 80;

export default function KMeansStory({
  title = "K-Means, visually",
  tag = "Machine Learning",
}: {
  title?: string;
  tag?: string;
}) {
  const { points, states } = useMemo(() => {
    const points = generatePoints();
    const init = [
      [0.35, 0.4],
      [0.5, 0.6],
      [0.6, 0.42],
    ];
    const l0 = points.map((p) => nearest(p, init));
    const c1 = recompute(points, l0, init);
    const l1 = points.map((p) => nearest(p, c1));
    const c2 = recompute(points, l1, c1);
    const l2 = points.map((p) => nearest(p, c2));
    const c3 = recompute(points, l2, c2);
    const lF = points.map((p) => nearest(p, c3));

    const INTRO: VizState = { centroids: [], labels: null };
    const states: VizState[] = [
      INTRO, // 0 intro
      INTRO, // 1 no labels
      { centroids: init, labels: null }, // 2 place markers
      { centroids: init, labels: l0 }, // 3 assign
      { centroids: c1, labels: l0 }, // 4 move
      { centroids: c1, labels: l1 }, // 5 assign again
      { centroids: c2, labels: l1 }, // 6 move again
      { centroids: c3, labels: lF }, // 7 converged
      { centroids: c3, labels: lF }, // 8 takeaway
    ];
    return { points, states };
  }, []);

  const stepsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ["start start", "end end"],
  });
  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(
      STEP_TEXT.length - 1,
      Math.max(0, Math.floor(v * STEP_TEXT.length))
    );
    setActive(idx);
  });

  const state = states[active];
  const init = [
    [0.35, 0.4],
    [0.5, 0.6],
    [0.6, 0.42],
  ];

  return (
    <div className="w-full">
      {/* Tall scroll driver; the inner panel is pinned while it scrolls. */}
      <div
        ref={stepsRef}
        style={{ height: `${STEP_TEXT.length * 85}vh` }}
        className="relative"
      >
        <div className="sticky top-0 flex h-screen w-full flex-col overflow-hidden">
          {/* Pinned heading */}
          <div className="mx-auto w-full max-w-6xl px-4 pt-6 md:px-6 md:pt-8">
            <Link
              href="/#explore"
              className="text-sm text-neutral-500 transition-colors hover:text-black-100"
            >
              ← Back to portfolio
            </Link>
            <div className="mt-1 flex flex-wrap items-baseline gap-x-3">
              <h1 className="text-xl font-bold text-black-100 md:text-2xl">
                {title}
              </h1>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-purple">
                {tag}
              </span>
            </div>
          </div>

          {/* Viz + text, centered in remaining space */}
          <div className="flex flex-1 items-center">
            <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
            {/* Visualization (pinned) */}
            <div className="order-1 flex h-[42vh] items-center justify-center lg:h-[70vh]">
            <svg
              viewBox="0 12 100 88"
              className="h-full w-full max-w-[520px]"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* axes */}
              <line x1="10" y1="90" x2="94" y2="90" stroke="#e5e7eb" strokeWidth="0.5" />
              <line x1="10" y1="10" x2="10" y2="90" stroke="#e5e7eb" strokeWidth="0.5" />
              <text x="52" y="98" textAnchor="middle" fontSize="3" fill="#9ca3af">
                Distance from centre →
              </text>
              <text
                x="4"
                y="50"
                textAnchor="middle"
                fontSize="3"
                fill="#9ca3af"
                transform="rotate(-90 4 50)"
              >
                Avg. rent →
              </text>

              {/* points */}
              {points.map((p, i) => {
                const label = state.labels?.[i];
                const fill = label == null ? GRAY : CLUSTER_COLORS[label];
                return (
                  <motion.circle
                    key={i}
                    cx={mapX(p[0])}
                    cy={mapY(p[1])}
                    r={1.5}
                    animate={{ fill }}
                    transition={{ duration: 0.5 }}
                  />
                );
              })}

              {/* centroids (always 3, fade/slide based on state) */}
              {[0, 1, 2].map((k) => {
                const has = state.centroids.length > 0;
                const c = has ? state.centroids[k] : init[k];
                return (
                  <motion.g
                    key={k}
                    animate={{
                      x: mapX(c[0]),
                      y: mapY(c[1]),
                      opacity: has ? 1 : 0,
                      scale: has ? 1 : 0.5,
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 18 }}
                  >
                    <circle
                      r={3.4}
                      fill={CLUSTER_COLORS[k]}
                      stroke="#fff"
                      strokeWidth="1.2"
                    />
                    <circle r={1} fill="#fff" />
                  </motion.g>
                );
              })}
            </svg>
            </div>

            {/* Text panel (pinned) — content swaps with scroll */}
            <div className="order-2 relative min-h-[34vh]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-md"
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-purple">
                    Step {active + 1} / {STEP_TEXT.length}
                  </span>
                  <h3 className="mt-2 text-2xl font-bold text-black-100 md:text-3xl">
                    {STEP_TEXT[active].title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-neutral-700 md:text-lg">
                    {STEP_TEXT[active].text}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Progress dots */}
              <div className="mt-6 flex gap-1.5">
                {STEP_TEXT.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all ${
                      i === active ? "w-6 bg-purple" : "w-1.5 bg-black/15"
                    }`}
                  />
                ))}
              </div>
            </div>
            </div>
          </div>

          {/* Keep-scrolling cue */}
          <motion.div
            animate={{ opacity: active >= STEP_TEXT.length - 1 ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-neutral-500"
          >
            <span className="animate-pulse">Keep scrolling ↓</span>
          </motion.div>
        </div>
      </div>

      {/* Outro */}
      <div className="mx-auto max-w-3xl px-4 pb-20 pt-8 text-center md:px-6">
        <p className="text-sm text-neutral-500">
          Built with framer-motion + SVG — no charting libraries. Part of Rohit
          Kakkar&apos;s data-science work.
        </p>
        <Link
          href="/#explore"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-black-100 px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
        >
          Back to portfolio <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
