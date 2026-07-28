"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { experiences } from "@/data/content";

export default function Resume() {
  return (
    <section id="resume" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-[11px] tracking-[0.2em] text-[var(--accent)] text-center mb-3"
        >
          02 — CASE HISTORY
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-[var(--navy)] text-center mb-14 tracking-tight"
        >
          Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative pl-6 md:pl-8">
          <div className="absolute left-[5px] md:left-[7px] top-2 bottom-2 w-px bg-[var(--card-border)]" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Timeline node */}
                <span className="absolute -left-6 md:-left-8 top-8 flex h-[11px] w-[11px] items-center justify-center">
                  <span className="h-[11px] w-[11px] rounded-full border-2 border-[var(--accent)] bg-white" />
                </span>

                <div className="group bg-white border border-[var(--card-border)] rounded-2xl p-6 hover:border-[var(--accent)] hover:shadow-[0_12px_40px_rgba(15,118,110,0.08)] transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start gap-5">
                    {/* Company Logo */}
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden border border-[var(--card-border)] bg-white"
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
                          className="w-full h-full object-contain p-2"
                        />
                      ) : (
                        <span className="text-white font-bold text-xs">
                          {exp.logoText}
                        </span>
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                        <h3 className="text-lg font-semibold text-[var(--navy)]">
                          {exp.role}
                        </h3>
                        <span className="font-mono text-xs text-[var(--ink-muted)]">
                          {exp.dates}
                        </span>
                      </div>
                      {exp.link ? (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--accent)] text-sm font-medium mb-3 hover:underline underline-offset-4 inline-block"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        <p className="text-[var(--accent)] text-sm font-medium mb-3">
                          {exp.company}
                        </p>
                      )}
                      <p className="text-sm text-[var(--ink-soft)] leading-relaxed mb-4">
                        {exp.achievement}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-[var(--accent-wash)] text-[var(--accent)] rounded-full font-mono text-[11px] tracking-wide"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--navy)] text-white rounded-full text-sm font-medium hover:bg-[var(--accent)] transition-colors shadow-sm"
          >
            <Download size={16} />
            Download Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
