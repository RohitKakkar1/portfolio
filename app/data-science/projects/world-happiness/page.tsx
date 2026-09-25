import HappinessProject from "@/components/dataScience/HappinessProject";

export const metadata = {
  title: "The Data of Happiness — Rohit Kakkar",
  description:
    "A visual, scroll-driven analysis of the World Happiness Report: what really predicts a nation's happiness.",
};

export default function WorldHappinessProjectPage() {
  return (
    <main className="min-h-screen bg-white">
      <HappinessProject />
    </main>
  );
}
