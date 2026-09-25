// Data-science projects — single source of truth for the homepage section and
// the per-project pages at /data-science/[slug].

export type DSProject = {
  slug: string;
  tag: string;
  title: string;
  blurb: string;
  flagship?: boolean;
};

export const dsProjects: DSProject[] = [
  {
    slug: "kmeans",
    tag: "Machine Learning",
    title: "K-Means, visually",
    blurb:
      "A scroll-driven visual intro to how a machine finds groups in data — clustering city neighborhoods, step by step.",
    flagship: true,
  },
  {
    slug: "customer-churn",
    tag: "Predictive",
    title: "Customer Churn Prediction",
    blurb:
      "Placeholder: a gradient-boosted model predicting churn, with an interpretable feature dashboard.",
  },
  {
    slug: "urban-mobility",
    tag: "Geospatial",
    title: "Urban Mobility Analysis",
    blurb:
      "Placeholder: spatial analysis of transit flows to surface underserved corridors in a city.",
  },
  {
    slug: "design-trends-nlp",
    tag: "NLP",
    title: "Design-Trend NLP Explorer",
    blurb:
      "Placeholder: topic modelling over architecture/design articles to map emerging themes.",
  },
];

export const getDSProject = (slug: string) =>
  dsProjects.find((p) => p.slug === slug);
