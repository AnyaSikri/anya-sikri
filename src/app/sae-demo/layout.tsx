import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SAE Form Auto-Population — Demo | Anya Sikri",
  description:
    "Interactive demo of an SAE form auto-population tool: deterministic field mapping with full provenance, an LLM-drafted narrative, and human sign-off. 100% synthetic data.",
  robots: { index: false },
};

export default function SaeDemoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
