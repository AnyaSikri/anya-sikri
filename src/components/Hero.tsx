"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, ArrowRight } from "lucide-react";
import Ekg from "./Ekg";

const monitorRows = [
  { label: "GENAI PRODUCT", detail: "Qualified Health" },
  { label: "CLINICAL RESEARCH", detail: "IGI · UCSF" },
  { label: "BIOTECH STRATEGY", detail: "Abbott · Ishara" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft teal wash behind the hero */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[var(--accent)] rounded-full filter blur-[180px] opacity-[0.07]" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] bg-[var(--navy)] rounded-full filter blur-[180px] opacity-[0.05]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-[1.4fr_1fr] gap-12 items-center">
        {/* Left: intro */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-[var(--card-border)] bg-white/70"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-bright)] opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
            </span>
            <span className="font-mono text-[11px] tracking-[0.18em] text-[var(--accent)]">
              HEALTHCARE × AI × STRATEGY
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-5xl md:text-6xl font-semibold text-[var(--navy)] tracking-tight mb-2"
          >
            Anya Sikri
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-5 -ml-1"
          >
            <Ekg className="w-64 md:w-80 h-10" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg md:text-xl text-[var(--ink-soft)] mb-3"
          >
            Building AI for healthcare &amp; life sciences.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-[var(--ink-muted)] mb-8 max-w-lg leading-relaxed"
          >
            Product at Qualified Health, building the infrastructure health
            systems need to deploy generative AI safely. UC Berkeley Data
            Science &amp; Bioengineering alum; previously at Rigel
            Pharmaceuticals, PwC, and Abbott.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#resume"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--accent)] text-white text-sm font-medium hover:bg-[#0d635c] transition-colors shadow-sm"
            >
              See my work
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--card-border)] bg-white text-sm font-medium text-[var(--navy)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              Get in touch
            </a>
            <span className="flex items-center gap-4 ml-1">
              <a
                href="https://linkedin.com/in/anyasikri"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[var(--ink-muted)] hover:text-[var(--accent)] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/anyasikri"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[var(--ink-muted)] hover:text-[var(--accent)] transition-colors"
              >
                <Github size={20} />
              </a>
            </span>
          </motion.div>
        </div>

        {/* Right: patient-monitor style status card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden md:block"
        >
          <div className="rounded-2xl border border-[var(--card-border)] bg-white shadow-[0_8px_30px_rgba(18,58,82,0.06)] overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--card-border)] bg-[var(--background)]">
              <span className="font-mono text-[11px] tracking-[0.15em] text-[var(--ink-muted)]">
                SIKRI, ANYA
              </span>
              <span className="font-mono text-[11px] tracking-[0.15em] text-[var(--accent)]">
                STATUS: BUILDING
              </span>
            </div>
            <div className="px-5 pt-4">
              <Ekg className="w-full h-12" />
            </div>
            <ul className="px-5 py-4 space-y-3">
              {monitorRows.map((row) => (
                <li
                  key={row.label}
                  className="flex items-center justify-between gap-4"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-bright)] opacity-50" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]" />
                    </span>
                    <span className="font-mono text-xs tracking-[0.12em] text-[var(--foreground)]">
                      {row.label}
                    </span>
                  </span>
                  <span className="text-xs text-[var(--ink-muted)]">
                    {row.detail}
                  </span>
                </li>
              ))}
            </ul>
            <div className="px-5 py-3 border-t border-[var(--card-border)] bg-[var(--background)]">
              <span className="font-mono text-[10px] tracking-[0.15em] text-[var(--ink-muted)]">
                UC BERKELEY ALUM · DATA SCIENCE + BIOENGINEERING
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
