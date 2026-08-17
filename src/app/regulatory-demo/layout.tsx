import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulatory Intelligence Dashboard — Demo | Anya Sikri",
  description:
    "Interactive demo of a regulatory intelligence dashboard: portfolio submission states, catalyst timeline, and program-level regulatory events. 100% synthetic data.",
  robots: { index: false },
};

export default function RegulatoryDemoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
