"use client";

// A small library of animated SVG visuals for course lessons. Pick one via
// `type`; it animates from `active`/`total` (scroll progress). Not a rigorous
// simulation of every algorithm — a clear, animated intuition pump.

import { useMemo } from "react";
import { motion } from "framer-motion";

const PURPLE = "#7c3aed";
const CYAN = "#0891b2";
const PINK = "#db2777";
const GRAY = "#cbd5e1";
const INK = "#111827";
const COLORS = [PURPLE, CYAN, PINK];

const clamp = (v: number) => Math.min(0.96, Math.max(0.04, v));
const mapX = (x: number) => 10 + x * 82;
const mapY = (y: number) => 92 - y * 80;

function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function useClusters(k = 3, n = 16, seed = 7) {
  return useMemo(() => {
    const r = rng(seed);
    const centers = [
      [0.28, 0.7],
      [0.62, 0.3],
      [0.82, 0.72],
    ].slice(0, k);
    const pts: { x: number; y: number; c: number }[] = [];
    centers.forEach((c, ci) => {
      for (let i = 0; i < n; i++) {
        const gx = (r() + r() + r() - 1.5) * 0.14;
        const gy = (r() + r() + r() - 1.5) * 0.14;
        pts.push({ x: clamp(c[0] + gx), y: clamp(c[1] + gy), c: ci });
      }
    });
    return { pts, centers };
  }, [k, n, seed]);
}

function useLine(seed = 11, n = 26, slope = 0.7, intercept = 0.15, noise = 0.12) {
  return useMemo(() => {
    const r = rng(seed);
    return Array.from({ length: n }, () => {
      const x = clamp(r());
      const y = clamp(slope * x + intercept + (r() - 0.5) * noise * 2);
      return { x, y };
    });
  }, [seed, n, slope, intercept, noise]);
}

type VizProps = { progress: number };

// ---- individual visuals ----------------------------------------------------

function Axes({ x = "", y = "" }: { x?: string; y?: string }) {
  return (
    <>
      <line x1="10" y1="92" x2="94" y2="92" stroke="#e5e7eb" strokeWidth="0.5" />
      <line x1="10" y1="12" x2="10" y2="92" stroke="#e5e7eb" strokeWidth="0.5" />
      {x && (
        <text x="52" y="99" textAnchor="middle" fontSize="3" fill="#9ca3af">
          {x}
        </text>
      )}
      {y && (
        <text
          x="4"
          y="52"
          textAnchor="middle"
          fontSize="3"
          fill="#9ca3af"
          transform="rotate(-90 4 52)"
        >
          {y}
        </text>
      )}
    </>
  );
}

function ScatterViz({ progress }: VizProps) {
  const { pts, centers } = useClusters(3);
  const colored = progress > 0.25;
  const showC = progress > 0.4;
  return (
    <>
      <Axes x="Feature A" y="Feature B" />
      {pts.map((p, i) => (
        <motion.circle
          key={i}
          cx={mapX(p.x)}
          cy={mapY(p.y)}
          r={1.5}
          animate={{ fill: colored ? COLORS[p.c] : GRAY }}
          transition={{ duration: 0.5 }}
        />
      ))}
      {centers.map((c, k) => (
        <motion.g
          key={k}
          animate={{ x: mapX(c[0]), y: mapY(c[1]), opacity: showC ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
        >
          <circle r={3.4} fill={COLORS[k]} stroke="#fff" strokeWidth="1.2" />
          <circle r={1} fill="#fff" />
        </motion.g>
      ))}
    </>
  );
}

function CorrelationViz({ progress }: VizProps) {
  const data = useLine(5, 28);
  return (
    <>
      <Axes x="Feature X" y="Feature Y" />
      {data.map((p, i) => (
        <circle key={i} cx={mapX(p.x)} cy={mapY(p.y)} r={1.5} fill={PURPLE} />
      ))}
      <motion.line
        x1={mapX(0)}
        y1={mapY(0.15)}
        x2={mapX(1)}
        y2={mapY(0.85)}
        stroke={INK}
        strokeWidth="1"
        strokeDasharray="3 2"
        animate={{ opacity: progress > 0.4 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
    </>
  );
}

function RegressionViz({ progress }: VizProps) {
  const data = useLine(9, 22, 0.7, 0.15, 0.16);
  // Line rotates from flat (bad) to fitted (good) as progress increases.
  const s = 0.05 + progress * 0.65;
  const b = 0.45 - progress * 0.3;
  const yAt = (x: number) => clamp(s * x + b);
  return (
    <>
      <Axes x="Size" y="Price" />
      {data.map((p, i) => (
        <g key={i}>
          <motion.line
            x1={mapX(p.x)}
            y1={mapY(p.y)}
            x2={mapX(p.x)}
            y2={mapY(yAt(p.x))}
            stroke={PINK}
            strokeWidth="0.5"
            animate={{ opacity: progress > 0.3 ? 0.5 : 0 }}
          />
          <circle cx={mapX(p.x)} cy={mapY(p.y)} r={1.5} fill={PURPLE} />
        </g>
      ))}
      <motion.line
        animate={{
          x1: mapX(0),
          y1: mapY(yAt(0)),
          x2: mapX(1),
          y2: mapY(yAt(1)),
        }}
        transition={{ duration: 0.5 }}
        stroke={INK}
        strokeWidth="1.2"
      />
    </>
  );
}

function LossViz({ progress }: VizProps) {
  // Parabola loss curve; a ball rolls down to the minimum as progress grows.
  const curveY = (x: number) => 0.15 + 3.2 * (x - 0.5) ** 2; // min at x=0.5
  const bx = 0.08 + progress * 0.42; // ball moves toward 0.5
  const path = Array.from({ length: 41 }, (_, i) => {
    const x = i / 40;
    return `${i === 0 ? "M" : "L"} ${mapX(x)} ${mapY(clamp(1 - curveY(x)))}`;
  }).join(" ");
  return (
    <>
      <Axes x="Parameter" y="Error" />
      <path d={path} fill="none" stroke={GRAY} strokeWidth="1.2" />
      <motion.circle
        animate={{ cx: mapX(bx), cy: mapY(clamp(1 - curveY(bx))) }}
        transition={{ type: "spring", stiffness: 90, damping: 16 }}
        r={2.6}
        fill={PURPLE}
        stroke="#fff"
        strokeWidth="1"
      />
    </>
  );
}

function BoundaryViz({ progress }: VizProps) {
  const r = useMemo(() => rng(21), []);
  const pts = useMemo(() => {
    const arr: { x: number; y: number; c: number }[] = [];
    for (let i = 0; i < 34; i++) {
      const cls = i % 2;
      const cx = cls === 0 ? 0.35 : 0.68;
      const cy = cls === 0 ? 0.62 : 0.38;
      arr.push({
        x: clamp(cx + (r() - 0.5) * 0.3),
        y: clamp(cy + (r() - 0.5) * 0.3),
        c: cls,
      });
    }
    return arr;
  }, [r]);
  // Boundary line rotates from vertical-ish to the separating diagonal.
  const t = progress;
  const y1 = 0.1 + t * 0.4;
  const y2 = 0.9 - t * 0.4;
  return (
    <>
      <Axes x="Score 1" y="Score 2" />
      {pts.map((p, i) => (
        <circle
          key={i}
          cx={mapX(p.x)}
          cy={mapY(p.y)}
          r={1.6}
          fill={p.c === 0 ? PURPLE : CYAN}
        />
      ))}
      <motion.line
        animate={{ x1: mapX(0), y1: mapY(y1), x2: mapX(1), y2: mapY(y2) }}
        transition={{ duration: 0.5 }}
        stroke={INK}
        strokeWidth="1.2"
        strokeDasharray="3 2"
      />
    </>
  );
}

function HistogramViz({ progress }: VizProps) {
  const heights = [0.2, 0.45, 0.75, 1, 0.85, 0.55, 0.3, 0.15];
  const bw = 82 / heights.length;
  return (
    <>
      <Axes x="Value" y="Count" />
      {heights.map((h, i) => {
        const full = h * 70;
        const shown = full * Math.min(1, progress * 1.4);
        return (
          <motion.rect
            key={i}
            x={10 + i * bw + 1}
            width={bw - 2}
            animate={{ y: 92 - shown, height: shown }}
            transition={{ duration: 0.5 }}
            fill={i === 3 ? PURPLE : "#c4b5fd"}
            rx="0.6"
          />
        );
      })}
    </>
  );
}

function NetworkViz({ progress }: VizProps) {
  const layers = [3, 4, 2];
  const xs = [25, 52, 79];
  const nodes = layers.map((count, li) =>
    Array.from({ length: count }, (_, i) => ({
      x: xs[li],
      y: 30 + (i - (count - 1) / 2) * 14,
    }))
  );
  return (
    <>
      {/* edges */}
      {nodes.slice(0, -1).map((layer, li) =>
        layer.map((a, ai) =>
          nodes[li + 1].map((b, bi) => (
            <motion.line
              key={`${li}-${ai}-${bi}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke={progress > (li + 1) / 3 ? PURPLE : "#e5e7eb"}
              strokeWidth="0.4"
              animate={{ opacity: progress > 0.15 ? 1 : 0.3 }}
            />
          ))
        )
      )}
      {/* nodes */}
      {nodes.map((layer, li) =>
        layer.map((nd, i) => (
          <motion.circle
            key={`${li}-${i}`}
            cx={nd.x}
            cy={nd.y}
            r={3}
            animate={{
              fill: progress > li / 3 ? COLORS[li % COLORS.length] : GRAY,
            }}
            stroke="#fff"
            strokeWidth="1"
          />
        ))
      )}
    </>
  );
}

function ComplexityViz({ progress }: VizProps) {
  const data = useLine(13, 16, 0.5, 0.25, 0.22);
  // 0..0.4 underfit (line), 0.4..0.7 good (gentle curve), 0.7..1 overfit (wiggly)
  const yAt = (x: number) => {
    if (progress < 0.45) return 0.5 * x + 0.25;
    if (progress < 0.72) return 0.25 + 0.5 * x + 0.12 * Math.sin(x * 3.1);
    return 0.25 + 0.5 * x + 0.16 * Math.sin(x * 13);
  };
  const path = Array.from({ length: 61 }, (_, i) => {
    const x = i / 60;
    return `${i === 0 ? "M" : "L"} ${mapX(x)} ${mapY(clamp(yAt(x)))}`;
  }).join(" ");
  const label =
    progress < 0.45 ? "Underfit" : progress < 0.72 ? "Just right" : "Overfit";
  return (
    <>
      <Axes x="x" y="y" />
      {data.map((p, i) => (
        <circle key={i} cx={mapX(p.x)} cy={mapY(p.y)} r={1.5} fill={PURPLE} />
      ))}
      <motion.path
        key={label}
        d={path}
        fill="none"
        stroke={INK}
        strokeWidth="1.2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <text x="90" y="18" textAnchor="end" fontSize="4" fontWeight="700" fill={INK}>
        {label}
      </text>
    </>
  );
}

function ConfusionViz({ progress }: VizProps) {
  const cells = [
    { l: "TP", v: 42, good: true },
    { l: "FP", v: 8, good: false },
    { l: "FN", v: 6, good: false },
    { l: "TN", v: 44, good: true },
  ];
  return (
    <>
      {cells.map((c, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const x = 26 + col * 30;
        const y = 26 + row * 30;
        return (
          <motion.g
            key={c.l}
            initial={{ opacity: 0 }}
            animate={{ opacity: progress > i * 0.22 ? 1 : 0.15 }}
            transition={{ duration: 0.4 }}
          >
            <rect
              x={x}
              y={y}
              width={28}
              height={28}
              rx="2"
              fill={c.good ? "#ede9fe" : "#fee2e2"}
              stroke={c.good ? PURPLE : PINK}
              strokeWidth="0.6"
            />
            <text
              x={x + 14}
              y={y + 13}
              textAnchor="middle"
              fontSize="4"
              fontWeight="700"
              fill={INK}
            >
              {c.l}
            </text>
            <text
              x={x + 14}
              y={y + 21}
              textAnchor="middle"
              fontSize="4"
              fill="#6b7280"
            >
              {c.v}
            </text>
          </motion.g>
        );
      })}
    </>
  );
}

function GenericViz({ progress }: VizProps) {
  const r = useMemo(() => rng(3), []);
  const pts = useMemo(
    () =>
      Array.from({ length: 40 }, () => ({
        x: clamp(r()),
        y: clamp(r()),
      })),
    [r]
  );
  return (
    <>
      <Axes />
      {pts.map((p, i) => (
        <motion.circle
          key={i}
          cx={mapX(p.x)}
          cy={mapY(p.y)}
          r={1.5}
          animate={{
            fill: i / pts.length < progress ? PURPLE : GRAY,
          }}
          transition={{ duration: 0.4 }}
        />
      ))}
    </>
  );
}

const REGISTRY: Record<string, (p: VizProps) => JSX.Element> = {
  scatter: ScatterViz,
  correlation: CorrelationViz,
  regression: RegressionViz,
  loss: LossViz,
  boundary: BoundaryViz,
  histogram: HistogramViz,
  network: NetworkViz,
  complexity: ComplexityViz,
  confusion: ConfusionViz,
  generic: GenericViz,
};

export default function LessonViz({
  type,
  active,
  total,
}: {
  type: string;
  active: number;
  total: number;
}) {
  const progress = total > 1 ? active / (total - 1) : 0;
  const Comp = REGISTRY[type] || GenericViz;
  return (
    <svg
      viewBox="0 8 100 94"
      className="h-full w-full max-w-[520px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <Comp progress={progress} />
    </svg>
  );
}
