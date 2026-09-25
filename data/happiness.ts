// Representative sample of the World Happiness Report (illustrative values,
// close to real WHR figures). Used by the flagship data story at
// /data-science/projects/world-happiness. Not the full dataset — a compact,
// realistic slice so the graphs are meaningful in a static site.

export type Country = {
  name: string;
  region: Region;
  score: number; // Cantril ladder 0–10
  gdp: number; // log GDP per capita
  social: number; // social support 0–1
  life: number; // healthy life expectancy (years)
  freedom: number; // freedom to make life choices 0–1
  generosity: number; // -0.3–0.4
  corruption: number; // perceptions of corruption 0–1 (higher = more corrupt)
};

export type Region =
  | "Nordic"
  | "Western Europe"
  | "North America & ANZ"
  | "Latin America"
  | "Middle East"
  | "East Asia"
  | "South Asia"
  | "Sub-Saharan Africa"
  | "CIS & E. Europe";

export const REGION_COLORS: Record<Region, string> = {
  Nordic: "#7c3aed",
  "Western Europe": "#2563eb",
  "North America & ANZ": "#0891b2",
  "Latin America": "#f59e0b",
  "Middle East": "#db2777",
  "East Asia": "#dc2626",
  "South Asia": "#65a30d",
  "Sub-Saharan Africa": "#0d9488",
  "CIS & E. Europe": "#6b7280",
};

export const countries: Country[] = [
  { name: "Finland", region: "Nordic", score: 7.8, gdp: 10.8, social: 0.97, life: 71, freedom: 0.96, generosity: 0.15, corruption: 0.18 },
  { name: "Denmark", region: "Nordic", score: 7.6, gdp: 10.9, social: 0.96, life: 71, freedom: 0.95, generosity: 0.20, corruption: 0.17 },
  { name: "Iceland", region: "Nordic", score: 7.5, gdp: 10.9, social: 0.98, life: 72, freedom: 0.95, generosity: 0.25, corruption: 0.67 },
  { name: "Sweden", region: "Nordic", score: 7.4, gdp: 10.9, social: 0.95, life: 72, freedom: 0.95, generosity: 0.20, corruption: 0.20 },
  { name: "Norway", region: "Nordic", score: 7.3, gdp: 11.1, social: 0.96, life: 72, freedom: 0.96, generosity: 0.22, corruption: 0.28 },
  { name: "Netherlands", region: "Western Europe", score: 7.4, gdp: 10.9, social: 0.94, life: 71, freedom: 0.91, generosity: 0.28, corruption: 0.36 },
  { name: "Switzerland", region: "Western Europe", score: 7.2, gdp: 11.1, social: 0.94, life: 73, freedom: 0.92, generosity: 0.18, corruption: 0.29 },
  { name: "Germany", region: "Western Europe", score: 6.9, gdp: 10.8, social: 0.90, life: 71, freedom: 0.87, generosity: 0.13, corruption: 0.48 },
  { name: "UK", region: "Western Europe", score: 6.8, gdp: 10.7, social: 0.91, life: 71, freedom: 0.84, generosity: 0.24, corruption: 0.44 },
  { name: "France", region: "Western Europe", score: 6.7, gdp: 10.7, social: 0.90, life: 72, freedom: 0.82, generosity: -0.10, corruption: 0.55 },
  { name: "Israel", region: "Middle East", score: 7.5, gdp: 10.6, social: 0.94, life: 73, freedom: 0.83, generosity: 0.10, corruption: 0.72 },
  { name: "UAE", region: "Middle East", score: 6.6, gdp: 11.1, social: 0.85, life: 67, freedom: 0.93, generosity: 0.15, corruption: 0.55 },
  { name: "Saudi Arabia", region: "Middle East", score: 6.5, gdp: 10.8, social: 0.87, life: 66, freedom: 0.90, generosity: -0.14, corruption: 0.65 },
  { name: "USA", region: "North America & ANZ", score: 6.9, gdp: 11.1, social: 0.92, life: 68, freedom: 0.83, generosity: 0.22, corruption: 0.70 },
  { name: "Canada", region: "North America & ANZ", score: 6.9, gdp: 10.9, social: 0.93, life: 72, freedom: 0.90, generosity: 0.18, corruption: 0.42 },
  { name: "Australia", region: "North America & ANZ", score: 7.0, gdp: 10.8, social: 0.94, life: 72, freedom: 0.90, generosity: 0.20, corruption: 0.47 },
  { name: "New Zealand", region: "North America & ANZ", score: 7.1, gdp: 10.6, social: 0.95, life: 71, freedom: 0.91, generosity: 0.25, corruption: 0.25 },
  { name: "Costa Rica", region: "Latin America", score: 7.0, gdp: 9.9, social: 0.89, life: 71, freedom: 0.93, generosity: -0.10, corruption: 0.80 },
  { name: "Mexico", region: "Latin America", score: 6.3, gdp: 9.9, social: 0.82, life: 68, freedom: 0.86, generosity: -0.15, corruption: 0.79 },
  { name: "Brazil", region: "Latin America", score: 6.1, gdp: 9.6, social: 0.88, life: 66, freedom: 0.80, generosity: -0.12, corruption: 0.76 },
  { name: "Chile", region: "Latin America", score: 6.3, gdp: 10.1, social: 0.87, life: 70, freedom: 0.78, generosity: -0.05, corruption: 0.83 },
  { name: "Argentina", region: "Latin America", score: 6.0, gdp: 9.9, social: 0.90, life: 69, freedom: 0.83, generosity: -0.16, corruption: 0.83 },
  { name: "Japan", region: "East Asia", score: 6.1, gdp: 10.6, social: 0.88, life: 75, freedom: 0.79, generosity: -0.20, corruption: 0.64 },
  { name: "South Korea", region: "East Asia", score: 5.9, gdp: 10.7, social: 0.80, life: 73, freedom: 0.72, generosity: -0.07, corruption: 0.73 },
  { name: "China", region: "East Asia", score: 5.8, gdp: 9.9, social: 0.80, life: 69, freedom: 0.85, generosity: -0.15, corruption: 0.50 },
  { name: "Singapore", region: "East Asia", score: 6.6, gdp: 11.4, social: 0.91, life: 74, freedom: 0.92, generosity: 0.05, corruption: 0.09 },
  { name: "Thailand", region: "East Asia", score: 6.0, gdp: 9.7, social: 0.87, life: 68, freedom: 0.90, generosity: 0.30, corruption: 0.85 },
  { name: "India", region: "South Asia", score: 4.0, gdp: 8.8, social: 0.60, life: 60, freedom: 0.88, generosity: 0.10, corruption: 0.77 },
  { name: "Bangladesh", region: "South Asia", score: 4.3, gdp: 8.6, social: 0.68, life: 64, freedom: 0.87, generosity: 0.05, corruption: 0.68 },
  { name: "Pakistan", region: "South Asia", score: 4.5, gdp: 8.7, social: 0.63, life: 59, freedom: 0.72, generosity: 0.17, corruption: 0.76 },
  { name: "Nepal", region: "South Asia", score: 5.4, gdp: 8.5, social: 0.77, life: 63, freedom: 0.79, generosity: 0.20, corruption: 0.72 },
  { name: "Russia", region: "CIS & E. Europe", score: 5.7, gdp: 10.2, social: 0.90, life: 65, freedom: 0.72, generosity: -0.15, corruption: 0.85 },
  { name: "South Africa", region: "Sub-Saharan Africa", score: 5.3, gdp: 9.5, social: 0.86, life: 57, freedom: 0.80, generosity: -0.06, corruption: 0.85 },
  { name: "Nigeria", region: "Sub-Saharan Africa", score: 4.9, gdp: 8.7, social: 0.72, life: 51, freedom: 0.71, generosity: 0.10, corruption: 0.86 },
  { name: "Kenya", region: "Sub-Saharan Africa", score: 4.5, gdp: 8.4, social: 0.70, life: 60, freedom: 0.80, generosity: 0.22, corruption: 0.80 },
  { name: "Egypt", region: "Middle East", score: 4.0, gdp: 9.3, social: 0.74, life: 62, freedom: 0.68, generosity: -0.19, corruption: 0.70 },
  { name: "Zimbabwe", region: "Sub-Saharan Africa", score: 3.3, gdp: 8.0, social: 0.68, life: 55, freedom: 0.65, generosity: -0.07, corruption: 0.76 },
  { name: "Afghanistan", region: "South Asia", score: 1.9, gdp: 7.7, social: 0.30, life: 55, freedom: 0.38, generosity: 0.05, corruption: 0.93 },
];

export type FeatureKey =
  | "score"
  | "gdp"
  | "social"
  | "life"
  | "freedom"
  | "generosity"
  | "corruption";

export const FEATURES: Record<
  FeatureKey,
  { label: string; short: string; min: number; max: number }
> = {
  score: { label: "Happiness (ladder 0–10)", short: "Happiness", min: 1.5, max: 8 },
  gdp: { label: "GDP per capita (log)", short: "GDP", min: 7.5, max: 11.6 },
  social: { label: "Social support", short: "Social", min: 0.28, max: 1 },
  life: { label: "Healthy life expectancy", short: "Health", min: 48, max: 78 },
  freedom: { label: "Freedom of choice", short: "Freedom", min: 0.35, max: 1 },
  generosity: { label: "Generosity", short: "Generosity", min: -0.25, max: 0.35 },
  corruption: { label: "Perceived corruption", short: "Corruption", min: 0, max: 1 },
};

// Global average happiness over time (illustrative, ~stable around 5.4–5.5).
export const globalTrend: { year: number; avg: number }[] = [
  { year: 2011, avg: 5.42 },
  { year: 2013, avg: 5.46 },
  { year: 2015, avg: 5.38 },
  { year: 2017, avg: 5.4 },
  { year: 2019, avg: 5.47 },
  { year: 2020, avg: 5.43 },
  { year: 2021, avg: 5.5 },
  { year: 2022, avg: 5.54 },
  { year: 2023, avg: 5.52 },
];
