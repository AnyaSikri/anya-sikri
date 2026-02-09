import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anya Sikri | Building AI for Healthcare & Life Sciences",
  description: "Anya Sikri - AI Engineer building intelligent systems for healthcare, pharma, and life sciences.",
  keywords: ["software engineer", "berkeley", "portfolio", "developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} antialiased font-sans`}
        style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
