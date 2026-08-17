"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { experiences } from "@/data/content";

export default function Resume() {
  return (
    <section
      id="resume"
      className="py-20 px-6 bg-white border-y border-[var(--card-border)]"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-baseline justify-between gap-4 border-b border-[var(--navy)]/20 pb-3 mb-2"
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-[var(--navy)] tracking-tight">
            Experience
          </h2>
          <span className="font-mono text-xs text-[var(--ink-muted)] whitespace-nowrap">
            2023 — present
          </span>
        </motion.div>

        <div>
          {experiences.map((exp, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="group grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto] gap-x-5 gap-y-1 py-7 border-b border-[var(--card-border)] last:border-b-0"
            >
              {/* Logo */}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden border border-[var(--card-border)] bg-white row-span-3"
                style={
                  !exp.logo
                    ? { backgroundColor: exp.logoColor || "var(--navy)" }
                    : {}
                }
              >
                {exp.logo ? (
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-full h-full object-contain p-1.5"
                  />
                ) : (
                  <span className="text-white font-bold text-[10px]">
                    {exp.logoText}
                  </span>
                )}
              </div>

              <div>
                <h3 className="font-display text-lg font-semibold text-[var(--navy)] leading-snug">
                  {exp.role}
                  <span className="text-[var(--ink-muted)] font-normal"> · </span>
                  {exp.link ? (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--accent)] hover:underline underline-offset-4"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    <span className="text-[var(--accent)]">{exp.company}</span>
                  )}
                </h3>
              </div>

              <span className="font-mono text-xs text-[var(--ink-muted)] md:text-right whitespace-nowrap col-start-2 md:col-start-3 row-start-2 md:row-start-1">
                {exp.dates}
              </span>

              <p className="col-start-2 md:col-span-2 text-sm text-[var(--ink-soft)] leading-relaxed max-w-3xl">
                {exp.achievement}
              </p>

              <p className="col-start-2 md:col-span-2 font-mono text-[11px] text-[var(--ink-muted)] mt-1">
                {exp.tech.join(" · ")}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--navy)] underline underline-offset-4 decoration-[var(--card-border)] hover:text-[var(--accent)] hover:decoration-[var(--accent)] transition-colors"
          >
            <Download size={15} />
            Download the full resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
