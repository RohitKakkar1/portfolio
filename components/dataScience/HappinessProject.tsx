"use client";

// Flagship data story: "The Data of Happiness" — a long-form scrollytelling
// analysis of the World Happiness Report. Reuses the ScrollyLesson engine; each
// step swaps/morphs a chart (hist, ranking, scatter, line, heatmap, importance,
// actual-vs-predicted). Built with framer-motion + SVG only.

import { motion, AnimatePresence } from "framer-motion";
import ScrollyLesson from "./ScrollyLesson";
import {
  countries,
  globalTrend,
  FEATURES,
  FeatureKey,
  Region,
  REGION_COLORS,
} from "@/data/happiness";

const PURPLE = "#7c3aed";
const INK = "#111827";
const GRAY = "#cbd5e1";

// ---- stats (computed once; data is static) ---------------------------------
const mean = (a: number[]) => a.reduce((s, x) => s + x, 0) / a.length;
const std = (a: number[]) => {
  const m = mean(a);
  return Math.sqrt(mean(a.map((x) => (x - m) ** 2)));
};
const corr = (a: number[], b: number[]) => {
  const ma = mean(a);
  const mb = mean(b);
  const cov = mean(a.map((x, i) => (x - ma) * (b[i] - mb)));
  return cov / (std(a) * std(b) || 1);
};
const linreg = (xs: number[], ys: number[]) => {
  const mx = mean(xs);
  const my = mean(ys);
  const b =
    xs.reduce((s, x, i) => s + (x - mx) * (ys[i] - my), 0) /
    (xs.reduce((s, x) => s + (x - mx) ** 2, 0) || 1);
  return { b, a: my - b * mx };
};

const MODEL_FEATS: FeatureKey[] = [
  "gdp",
  "social",
  "life",
  "freedom",
  "generosity",
  "corruption",
];
const HEAT_FEATS: FeatureKey[] = [
  "score",
  "gdp",
  "social",
  "life",
  "freedom",
  "generosity",
  "corruption",
];
const scoreArr = countries.map((c) => c.score);
const corrWithScore: Record<string, number> = {};
MODEL_FEATS.forEach((f) => {
  corrWithScore[f] = corr(countries.map((c) => c[f]), scoreArr);
});
// simple data-driven model: weight standardised features by their correlation
const zmap: Record<string, number[]> = {};
MODEL_FEATS.forEach((f) => {
  const a = countries.map((c) => c[f]);
  const m = mean(a);
  const s = std(a) || 1;
  zmap[f] = a.map((x) => (x - m) / s);
});
const rawPred = countries.map((_, i) =>
  MODEL_FEATS.reduce((s, f) => s + corrWithScore[f] * zmap[f][i], 0)
);
const fit = linreg(rawPred, scoreArr);
const predicted = rawPred.map((r) => fit.a + fit.b * r);
const corrMatrix = HEAT_FEATS.map((a) =>
  HEAT_FEATS.map((b) => corr(countries.map((c) => c[a]), countries.map((c) => c[b])))
);
const importance = MODEL_FEATS.map((f) => ({ f, v: corrWithScore[f] })).sort(
  (a, b) => Math.abs(b.v) - Math.abs(a.v)
);

// ---- geometry --------------------------------------------------------------
const PL = 15,
  PR = 6,
  PT = 10,
  PB = 15;
const sx = (v: number, f: FeatureKey) =>
  PL + ((v - FEATURES[f].min) / (FEATURES[f].max - FEATURES[f].min)) * (100 - PL - PR);
const syScore = (v: number) =>
  100 - PB - ((v - FEATURES.score.min) / (FEATURES.score.max - FEATURES.score.min)) * (100 - PT - PB);
const fmtFeat = (f: FeatureKey, v: number) =>
  f === "life" ? String(Math.round(v)) : f === "gdp" ? v.toFixed(1) : v.toFixed(2);

type Tick = { pos: number; label: string };
// evenly spaced ticks (svg positions) for a feature along the x-axis
const xTicksFor = (f: FeatureKey, n = 4): Tick[] =>
  Array.from({ length: n }, (_, i) => {
    const v = FEATURES[f].min + (i / (n - 1)) * (FEATURES[f].max - FEATURES[f].min);
    return { pos: sx(v, f), label: fmtFeat(f, v) };
  });
const yScoreTicks: Tick[] = [2, 4, 6, 8].map((v) => ({
  pos: syScore(v),
  label: String(v),
}));

// ---- chart spec ------------------------------------------------------------
type ChartSpec =
  | { kind: "hist" }
  | { kind: "rank"; order: "top" | "bottom"; n: number; highlightRegion?: Region }
  | {
      kind: "scatter";
      x: FeatureKey;
      trend?: boolean;
      colorByRegion?: boolean;
      highlightRegion?: Region;
      highlightNames?: string[];
    }
  | { kind: "line"; highlightYear?: number }
  | { kind: "heatmap"; highlight?: FeatureKey[] }
  | { kind: "importance" }
  | { kind: "avp"; highlightNames?: string[] };

// ---- individual charts -----------------------------------------------------
function Axes({
  x,
  y,
  xTicks = [],
  yTicks = [],
}: {
  x?: string;
  y?: string;
  xTicks?: Tick[];
  yTicks?: Tick[];
}) {
  return (
    <>
      {/* horizontal gridlines at y ticks */}
      {yTicks.map((t, i) => (
        <line
          key={"g" + i}
          x1={PL}
          y1={t.pos}
          x2={100 - PR}
          y2={t.pos}
          stroke="#f1f5f9"
          strokeWidth="0.3"
        />
      ))}
      <line x1={PL} y1={100 - PB} x2={100 - PR} y2={100 - PB} stroke="#e5e7eb" strokeWidth="0.4" />
      <line x1={PL} y1={PT} x2={PL} y2={100 - PB} stroke="#e5e7eb" strokeWidth="0.4" />

      {xTicks.map((t, i) => (
        <text key={"x" + i} x={t.pos} y={100 - PB + 3.4} textAnchor="middle" fontSize="2.2" fill="#9ca3af">
          {t.label}
        </text>
      ))}
      {yTicks.map((t, i) => (
        <text key={"y" + i} x={PL - 1.6} y={t.pos + 0.8} textAnchor="end" fontSize="2.2" fill="#9ca3af">
          {t.label}
        </text>
      ))}

      {x && (
        <text x={(PL + 100 - PR) / 2} y={99.6} textAnchor="middle" fontSize="2.6" fill="#6b7280">
          {x}
        </text>
      )}
      {y && (
        <text
          x={3.5}
          y={(PT + 100 - PB) / 2}
          textAnchor="middle"
          fontSize="2.6"
          fill="#6b7280"
          transform={`rotate(-90 3.5 ${(PT + 100 - PB) / 2})`}
        >
          {y}
        </text>
      )}
    </>
  );
}

function ScatterChart({ spec }: { spec: Extract<ChartSpec, { kind: "scatter" }> }) {
  const tl = spec.trend
    ? linreg(countries.map((c) => c[spec.x]), scoreArr)
    : null;
  const isHi = (c: (typeof countries)[number]) => {
    if (spec.highlightRegion) return c.region === spec.highlightRegion;
    if (spec.highlightNames) return spec.highlightNames.includes(c.name);
    return true;
  };
  const anyHi = !!(spec.highlightRegion || spec.highlightNames);
  const r = corr(countries.map((c) => c[spec.x]), scoreArr);
  return (
    <>
      <Axes
        x={FEATURES[spec.x].label}
        y="Happiness"
        xTicks={xTicksFor(spec.x)}
        yTicks={yScoreTicks}
      />
      {spec.trend && (
        <text x={100 - PR} y={PT + 1} textAnchor="end" fontSize="2.8" fontWeight="700" fill={INK}>
          r = {r.toFixed(2)}
        </text>
      )}
      {tl && (
        <line
          x1={sx(FEATURES[spec.x].min, spec.x)}
          y1={syScore(tl.a + tl.b * FEATURES[spec.x].min)}
          x2={sx(FEATURES[spec.x].max, spec.x)}
          y2={syScore(tl.a + tl.b * FEATURES[spec.x].max)}
          stroke={INK}
          strokeWidth="0.8"
          strokeDasharray="2 1.5"
        />
      )}
      {countries.map((c) => {
        const hi = isHi(c);
        const fill = spec.colorByRegion ? REGION_COLORS[c.region] : PURPLE;
        return (
          <motion.circle
            key={c.name}
            r={anyHi && hi ? 2.4 : 1.7}
            animate={{
              cx: sx(c[spec.x], spec.x),
              cy: syScore(c.score),
              fill: anyHi && !hi ? GRAY : fill,
              opacity: anyHi && !hi ? 0.25 : 1,
            }}
            transition={{ type: "spring", stiffness: 90, damping: 18 }}
          />
        );
      })}
      {anyHi &&
        countries.filter(isHi).map((c) => (
          <text
            key={c.name + "l"}
            x={sx(c[spec.x], spec.x) + 2.6}
            y={syScore(c.score) + 1}
            fontSize="2.4"
            fill={INK}
          >
            {c.name}
          </text>
        ))}
    </>
  );
}

function HistChart() {
  const bins = 9;
  const lo = FEATURES.score.min;
  const hi = FEATURES.score.max;
  const counts = new Array(bins).fill(0);
  countries.forEach((c) => {
    const idx = Math.min(bins - 1, Math.floor(((c.score - lo) / (hi - lo)) * bins));
    counts[idx]++;
  });
  const maxC = Math.max(...counts);
  const bw = (100 - PL - PR) / bins;
  const hx = (v: number) => PL + ((v - lo) / (hi - lo)) * (100 - PL - PR);
  return (
    <>
      <Axes
        x="Happiness (ladder)"
        y="Countries"
        xTicks={[2, 4, 6, 8].map((v) => ({ pos: hx(v), label: String(v) }))}
      />
      {counts.map((c, i) => {
        const h = (c / maxC) * (100 - PT - PB);
        return (
          <motion.rect
            key={i}
            x={PL + i * bw + 0.6}
            width={bw - 1.2}
            initial={{ y: 100 - PB, height: 0 }}
            animate={{ y: 100 - PB - h, height: h }}
            transition={{ duration: 0.5, delay: i * 0.03 }}
            fill={i >= 4 && i <= 6 ? PURPLE : "#c4b5fd"}
            rx="0.5"
          />
        );
      })}
    </>
  );
}

function RankChart({ spec }: { spec: Extract<ChartSpec, { kind: "rank" }> }) {
  const sorted = [...countries].sort((a, b) => b.score - a.score);
  const list =
    spec.order === "top" ? sorted.slice(0, spec.n) : sorted.slice(-spec.n).reverse();
  const rh = (100 - PT - PB) / spec.n;
  return (
    <>
      {list.map((c, i) => {
        const w = ((c.score - FEATURES.score.min) / (FEATURES.score.max - FEATURES.score.min)) * (100 - PL - PR);
        const hi = spec.highlightRegion ? c.region === spec.highlightRegion : true;
        const y = PT + i * rh;
        return (
          <g key={c.name}>
            <motion.rect
              x={PL}
              y={y + rh * 0.15}
              height={rh * 0.7}
              initial={{ width: 0 }}
              animate={{ width: w }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              fill={
                spec.highlightRegion
                  ? hi
                    ? REGION_COLORS[c.region]
                    : GRAY
                  : PURPLE
              }
              rx="0.6"
            />
            <text x={PL - 1} y={y + rh * 0.6} textAnchor="end" fontSize="2.6" fill={INK}>
              {c.name}
            </text>
            <text x={PL + w + 1} y={y + rh * 0.6} fontSize="2.6" fill="#6b7280">
              {c.score.toFixed(1)}
            </text>
          </g>
        );
      })}
    </>
  );
}

function LineChart({ spec }: { spec: Extract<ChartSpec, { kind: "line" }> }) {
  const yrs = globalTrend.map((d) => d.year);
  const xmin = Math.min(...yrs),
    xmax = Math.max(...yrs);
  const ymin = 5.0,
    ymax = 5.8;
  const X = (yr: number) => PL + ((yr - xmin) / (xmax - xmin)) * (100 - PL - PR);
  const Y = (v: number) => 100 - PB - ((v - ymin) / (ymax - ymin)) * (100 - PT - PB);
  const path = globalTrend
    .map((d, i) => `${i === 0 ? "M" : "L"} ${X(d.year)} ${Y(d.avg)}`)
    .join(" ");
  return (
    <>
      <Axes
        x="Year"
        y="Global avg happiness"
        xTicks={[2011, 2015, 2019, 2023].map((yr) => ({ pos: X(yr), label: String(yr) }))}
        yTicks={[5.0, 5.4, 5.8].map((v) => ({ pos: Y(v), label: v.toFixed(1) }))}
      />
      <motion.path
        d={path}
        fill="none"
        stroke={PURPLE}
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />
      {globalTrend.map((d) => (
        <circle
          key={d.year}
          cx={X(d.year)}
          cy={Y(d.avg)}
          r={spec.highlightYear === d.year ? 2.4 : 1.4}
          fill={spec.highlightYear === d.year ? INK : PURPLE}
        />
      ))}
      {spec.highlightYear && (
        <text
          x={X(spec.highlightYear)}
          y={Y(globalTrend.find((d) => d.year === spec.highlightYear)!.avg) - 3}
          textAnchor="middle"
          fontSize="2.6"
          fill={INK}
        >
          {spec.highlightYear}
        </text>
      )}
    </>
  );
}

function HeatmapChart({ spec }: { spec: Extract<ChartSpec, { kind: "heatmap" }> }) {
  const n = HEAT_FEATS.length;
  const size = (100 - PL - PR) / n;
  const top = PT + 4;
  const color = (v: number) =>
    v >= 0
      ? `rgba(124,58,237,${Math.abs(v).toFixed(2)})`
      : `rgba(219,39,119,${Math.abs(v).toFixed(2)})`;
  return (
    <>
      {HEAT_FEATS.map((f, i) => (
        <text
          key={"c" + f}
          x={PL + i * size + size / 2}
          y={top - 1}
          textAnchor="middle"
          fontSize="2.1"
          fill="#6b7280"
        >
          {FEATURES[f].short}
        </text>
      ))}
      {corrMatrix.map((row, i) =>
        row.map((v, j) => {
          const dim =
            spec.highlight &&
            !(spec.highlight.includes(HEAT_FEATS[i]) && spec.highlight.includes(HEAT_FEATS[j]));
          return (
            <motion.rect
              key={`${i}-${j}`}
              x={PL + j * size + 0.4}
              y={top + i * size + 0.4}
              width={size - 0.8}
              height={size - 0.8}
              rx="0.5"
              animate={{ opacity: dim ? 0.15 : 1 }}
              fill={color(v)}
            />
          );
        })
      )}
      {HEAT_FEATS.map((f, i) => (
        <text
          key={"r" + f}
          x={PL - 1}
          y={top + i * size + size / 2 + 0.8}
          textAnchor="end"
          fontSize="2.1"
          fill="#6b7280"
        >
          {FEATURES[f].short}
        </text>
      ))}
    </>
  );
}

function ImportanceChart() {
  const rh = (100 - PT - PB) / importance.length;
  const maxV = Math.max(...importance.map((d) => Math.abs(d.v)));
  return (
    <>
      <text x={PL} y={PT - 2} fontSize="2.6" fill="#6b7280">
        Correlation with happiness
      </text>
      {importance.map((d, i) => {
        const w = (Math.abs(d.v) / maxV) * (100 - PL - PR);
        const y = PT + i * rh;
        return (
          <g key={d.f}>
            <motion.rect
              x={PL}
              y={y + rh * 0.18}
              height={rh * 0.64}
              initial={{ width: 0 }}
              animate={{ width: w }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              fill={d.v >= 0 ? PURPLE : "#db2777"}
              rx="0.6"
            />
            <text x={PL - 1} y={y + rh * 0.62} textAnchor="end" fontSize="2.6" fill={INK}>
              {FEATURES[d.f].short}
            </text>
            <text x={PL + w + 1} y={y + rh * 0.62} fontSize="2.4" fill="#6b7280">
              {d.v.toFixed(2)}
            </text>
          </g>
        );
      })}
    </>
  );
}

function AvpChart({ spec }: { spec: Extract<ChartSpec, { kind: "avp" }> }) {
  const S = (v: number) =>
    PL + ((v - FEATURES.score.min) / (FEATURES.score.max - FEATURES.score.min)) * (100 - PL - PR);
  const anyHi = !!spec.highlightNames;
  return (
    <>
      <Axes
        x="Predicted happiness"
        y="Actual happiness"
        xTicks={[2, 4, 6, 8].map((v) => ({ pos: S(v), label: String(v) }))}
        yTicks={yScoreTicks}
      />
      <line
        x1={S(FEATURES.score.min)}
        y1={syScore(FEATURES.score.min)}
        x2={S(FEATURES.score.max)}
        y2={syScore(FEATURES.score.max)}
        stroke={GRAY}
        strokeWidth="0.8"
        strokeDasharray="2 1.5"
      />
      {countries.map((c, i) => {
        const hi = anyHi ? spec.highlightNames!.includes(c.name) : true;
        return (
          <motion.circle
            key={c.name}
            animate={{
              cx: S(predicted[i]),
              cy: syScore(c.score),
              opacity: anyHi && !hi ? 0.2 : 1,
              fill: anyHi && !hi ? GRAY : PURPLE,
            }}
            transition={{ type: "spring", stiffness: 90, damping: 18 }}
            r={anyHi && hi ? 2.4 : 1.7}
          />
        );
      })}
      {anyHi &&
        countries
          .filter((c) => spec.highlightNames!.includes(c.name))
          .map((c) => {
            const i = countries.indexOf(c);
            return (
              <text key={c.name} x={S(predicted[i]) + 2.4} y={syScore(c.score)} fontSize="2.4" fill={INK}>
                {c.name}
              </text>
            );
          })}
    </>
  );
}

function ChartBody({ spec }: { spec: ChartSpec }) {
  switch (spec.kind) {
    case "hist":
      return <HistChart />;
    case "rank":
      return <RankChart spec={spec} />;
    case "scatter":
      return <ScatterChart spec={spec} />;
    case "line":
      return <LineChart spec={spec} />;
    case "heatmap":
      return <HeatmapChart spec={spec} />;
    case "importance":
      return <ImportanceChart />;
    case "avp":
      return <AvpChart spec={spec} />;
  }
}

function HappinessChart({ spec }: { spec: ChartSpec }) {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full max-w-[560px]" preserveAspectRatio="xMidYMid meet">
      <AnimatePresence mode="wait">
        <motion.g
          key={spec.kind}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChartBody spec={spec} />
        </motion.g>
      </AnimatePresence>
    </svg>
  );
}

// ---- narrative (55 beats) --------------------------------------------------
type Beat = { title: string; text: string; chart: ChartSpec };

const BEATS: Beat[] = [
  { title: "Can you measure a nation's mood?", text: "Every year the World Happiness Report tries. It's not GDP or life expectancy — it's people rating their own lives.", chart: { kind: "hist" } },
  { title: "The Cantril ladder", text: "The question is simple: imagine a ladder from 0 (worst possible life) to 10 (best). Which rung are you on?", chart: { kind: "hist" } },
  { title: "One number, ~150 countries", text: "Average those answers per country, every year since 2005. That's the happiness score we'll dig into.", chart: { kind: "hist" } },
  { title: "Where most countries land", text: "Plot the scores and they pile up in the middle — most of the world sits between 4 and 6.", chart: { kind: "hist" } },
  { title: "The full spread", text: "But the range is enormous: from below 2 to nearly 8. A gap of six ladder rungs between the top and bottom of the world.", chart: { kind: "hist" } },
  { title: "The happiest places", text: "At the top, a familiar set of names. Small, wealthy, cold — and remarkably consistent year to year.", chart: { kind: "rank", order: "top", n: 8 } },
  { title: "The Nordic clean sweep", text: "Finland, Denmark, Iceland, Sweden, Norway. The Nordics don't just make the top ten — they own the top of it.", chart: { kind: "rank", order: "top", n: 8, highlightRegion: "Nordic" } },
  { title: "The other end", text: "At the bottom, countries scarred by conflict, poverty, and instability. Afghanistan sits near 2 — barely a third of Finland's score.", chart: { kind: "rank", order: "bottom", n: 8 } },
  { title: "So what separates them?", text: "The report tracks six factors that might explain the gap. Let's take them one at a time.", chart: { kind: "scatter", x: "gdp", colorByRegion: true } },
  { title: "First, geography", text: "Colour by region and clusters appear — the built-in advantages and disadvantages of where you happen to be born.", chart: { kind: "scatter", x: "gdp", colorByRegion: true } },
  { title: "Factor 1: does money buy happiness?", text: "Put GDP per capita on the x-axis. The cloud tilts up and to the right — richer countries are, on average, happier.", chart: { kind: "scatter", x: "gdp", trend: true } },
  { title: "Yes — clearly", text: "This is one of the strongest relationships in the whole dataset. Wealth really does track with reported wellbeing.", chart: { kind: "scatter", x: "gdp", trend: true } },
  { title: "But with a catch", text: "We used log GDP for a reason: the first ₹100 a day changes life far more than the ten-thousandth. Money has diminishing returns.", chart: { kind: "scatter", x: "gdp", trend: true } },
  { title: "Punching above their wealth", text: "Look at Latin America — Costa Rica, Brazil, Mexico sit well above the line. Mid-income, but happier than money alone predicts.", chart: { kind: "scatter", x: "gdp", trend: true, highlightRegion: "Latin America" } },
  { title: "And below it", text: "Some wealthy nations sit under the line — high GDP, more modest happiness. Money clearly isn't the whole story.", chart: { kind: "scatter", x: "gdp", trend: true, highlightNames: ["Saudi Arabia", "UAE", "South Korea", "Japan"] } },
  { title: "Factor 2: someone to count on", text: "Social support — do you have people to rely on in trouble? On its own it tracks happiness almost as tightly as money.", chart: { kind: "scatter", x: "social", trend: true } },
  { title: "Relationships matter — a lot", text: "This is the quiet headline of the whole report: connection is nearly as powerful as cash.", chart: { kind: "scatter", x: "social", trend: true } },
  { title: "Factor 3: healthy years", text: "Healthy life expectancy also rises with happiness. Longer, healthier lives feel better lived.", chart: { kind: "scatter", x: "life", trend: true } },
  { title: "Health and wealth travel together", text: "Careful, though — richer countries also tend to be healthier. These factors overlap, which we'll untangle later.", chart: { kind: "scatter", x: "life", trend: true } },
  { title: "Factor 4: freedom", text: "Freedom to make your own life choices shows a clear positive pull. Agency matters.", chart: { kind: "scatter", x: "freedom", trend: true } },
  { title: "Factor 5: generosity", text: "Does a giving culture help? Plot generosity and… the cloud is nearly flat.", chart: { kind: "scatter", x: "generosity", trend: true } },
  { title: "Surprisingly weak", text: "On its own, generosity barely moves the needle across countries. A humbling reminder: intuition isn't evidence.", chart: { kind: "scatter", x: "generosity", trend: true } },
  { title: "Factor 6: trust", text: "Perceived corruption is the mirror image — where people distrust institutions, happiness tends to be lower.", chart: { kind: "scatter", x: "corruption", trend: true } },
  { title: "Less trust, less joy", text: "The line slopes down. Trust in government and business is part of the fabric of a happy society.", chart: { kind: "scatter", x: "corruption", trend: true } },
  { title: "All six at once", text: "Rather than eyeball six charts, let's see every relationship in one grid — a correlation heatmap.", chart: { kind: "heatmap" } },
  { title: "Reading the grid", text: "Purple = move together, pink = move apart, darker = stronger. The top row is each factor's link to happiness.", chart: { kind: "heatmap" } },
  { title: "The big three", text: "GDP, social support, and healthy life expectancy light up brightest against happiness. These do the heavy lifting.", chart: { kind: "heatmap", highlight: ["score", "gdp", "social", "life"] } },
  { title: "What barely matters", text: "Generosity's row is pale — weakly related to everything. Not useless, just not decisive.", chart: { kind: "heatmap", highlight: ["score", "generosity"] } },
  { title: "Watch the overlaps", text: "GDP, social support and health are also correlated with each other — so they share credit. This is why we need a model, not just single charts.", chart: { kind: "heatmap" } },
  { title: "Money isn't destiny", text: "Back to GDP. The countries above the line tell the most interesting story.", chart: { kind: "scatter", x: "gdp", trend: true, highlightRegion: "Latin America" } },
  { title: "The Latin American surplus", text: "Warm cultures, strong family and community ties — a happiness 'bonus' that GDP can't see. Costa Rica rivals nations twice as rich.", chart: { kind: "scatter", x: "gdp", trend: true, highlightRegion: "Latin America" } },
  { title: "The wealth that underdelivers", text: "Some high-GDP nations sit below the line — proof that money spent without trust, freedom, or connection buys less happiness.", chart: { kind: "scatter", x: "gdp", trend: true, highlightNames: ["USA", "Saudi Arabia", "UAE"] } },
  { title: "The residual", text: "Whatever's left after GDP explains its part — that's culture, governance, history. The interesting stuff often lives in the residual.", chart: { kind: "scatter", x: "gdp", trend: true } },
  { title: "Has the world gotten happier?", text: "Zoom out to the global average over time. What's the trend?", chart: { kind: "line" } },
  { title: "Remarkably flat", text: "Despite huge economic growth, the world's average happiness has barely moved. Growth alone doesn't lift the mood.", chart: { kind: "line" } },
  { title: "Even through the pandemic", text: "2020 barely dented the global average. Shared adversity — and the support that came with it — showed real resilience.", chart: { kind: "line", highlightYear: 2020 } },
  { title: "Underneath the average, churn", text: "A flat global line hides big individual moves — some countries climbed, others fell hard. Averages always hide stories.", chart: { kind: "line" } },
  { title: "Can we predict it?", text: "We've seen the factors one by one. Could we combine all six into a single model that predicts a country's happiness?", chart: { kind: "avp" } },
  { title: "A simple model", text: "Weight each (standardised) factor by how strongly it correlates with happiness, add them up, and rescale. Crude — but data-driven.", chart: { kind: "avp" } },
  { title: "Actual vs. predicted", text: "Plot each country's predicted score against its real one. If the model were perfect, every dot would sit on the dashed line.", chart: { kind: "avp" } },
  { title: "It does pretty well", text: "Most dots hug the line. Six numbers capture a surprising amount of something as human as happiness.", chart: { kind: "avp" } },
  { title: "Which factor matters most?", text: "Rank the factors by their correlation with happiness — the model's rough sense of importance.", chart: { kind: "importance" } },
  { title: "Social support and wealth lead", text: "Connection and money top the list, health close behind. The 'big three' again.", chart: { kind: "importance" } },
  { title: "Freedom in the middle", text: "Freedom of choice matters, but less than the top three. Corruption pulls the other way (negative).", chart: { kind: "importance" } },
  { title: "Generosity trails", text: "Generosity sits at the bottom — real, but a minor player at the country level.", chart: { kind: "importance" } },
  { title: "Where the model misses", text: "The interesting failures: countries the model gets most wrong reveal what six numbers can't capture.", chart: { kind: "avp", highlightNames: ["Costa Rica", "Israel", "Afghanistan"] } },
  { title: "Culture in the gaps", text: "Costa Rica beats its prediction; some others fall short. Optimism, cohesion, meaning — the model is blind to them.", chart: { kind: "avp", highlightNames: ["Costa Rica", "Israel"] } },
  { title: "A caveat: it's self-reported", text: "This is how people say they feel, filtered through culture and mood. Some cultures rate themselves higher by habit.", chart: { kind: "hist" } },
  { title: "Correlation, not causation", text: "Every relationship here is a correlation. Wealth may cause happiness, happiness may boost productivity, or a third factor drives both.", chart: { kind: "scatter", x: "gdp", trend: true } },
  { title: "Averages hide inequality", text: "A country's single score says nothing about the spread inside it. Two nations with the same average can feel very different.", chart: { kind: "rank", order: "top", n: 8 } },
  { title: "Yet the patterns hold", text: "Despite the caveats, the big signals repeat year after year, method after method. That consistency is what we trust.", chart: { kind: "heatmap" } },
  { title: "So what makes a nation happy?", text: "Not one thing — a stack. Let's put the story together.", chart: { kind: "importance" } },
  { title: "Enough money, then people", text: "Get past basic material security, and relationships and social support do the rest of the heavy lifting.", chart: { kind: "scatter", x: "social", trend: true } },
  { title: "Health, freedom, trust", text: "Long healthy lives, the freedom to choose them, and institutions you can trust round out the recipe.", chart: { kind: "scatter", x: "freedom", trend: true } },
  { title: "Happiness is built, not bought", text: "The data's quiet lesson: prosperity helps, but the happiest places invest in each other. Want to learn the methods behind this? The course is below.", chart: { kind: "scatter", x: "gdp", trend: true, highlightRegion: "Latin America" } },
];

const RECAP = [
  "Wealth, social support and healthy life expectancy are the strongest correlates of happiness",
  "Money has diminishing returns; connection, freedom and trust matter enormously",
  "A simple six-factor model predicts happiness well — but culture lives in the residual",
  "It's self-reported and correlational — read it as strong signal, not proof",
];

export default function HappinessProject() {
  return (
    <ScrollyLesson
      title="The Data of Happiness"
      tag="Featured project · World Happiness Report"
      stepVh={68}
      steps={BEATS.map((b) => ({ title: b.title, text: b.text }))}
      recap={RECAP}
      source={{
        label: "World Happiness Report (Kaggle)",
        href: "https://www.kaggle.com/datasets/unsdsn/world-happiness",
      }}
      renderViz={(active) => <HappinessChart spec={BEATS[active].chart} />}
    />
  );
}
