import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drug Script Analysis — Demo | Anya Sikri",
  description:
    "Interactive demo of a prescription trend analyzer: week-over-week vs z-score classification side by side, with drug-maturity-aware thresholds and holiday-adjusted baselines. Synthetic data.",
  robots: { index: false },
};

export default function DrugScriptDemoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
