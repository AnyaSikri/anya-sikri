"use client";

import { motion } from "framer-motion";
import { clubs, research } from "@/data/content";

export default function Berkeley() {
  return (
    <section id="berkeley" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-[11px] tracking-[0.2em] text-[var(--accent)] text-center mb-3"
        >
          03 — CAMPUS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-[var(--navy)] text-center mb-3 tracking-tight"
        >
          The Berkeley Chapter
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[var(--ink-muted)] text-center mb-14"
        >
          Where I grew
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Clubs & Organizations */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-[var(--berkeley-blue)] mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#FDB515] rounded-full" />
              Clubs &amp; Organizations
            </h3>
            <div className="space-y-4">
              {clubs.map((club, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-[var(--card-border)] rounded-2xl p-5 hover:border-[var(--berkeley-blue)]/40 hover:shadow-[0_8px_30px_rgba(0,50,98,0.07)] transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-[var(--berkeley-blue)] rounded-xl flex items-center justify-center text-sm font-bold text-[#FDB515]">
                      {club.logoText}
                    </div>
                    <div>
                      {club.link ? (
                        <a
                          href={club.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-[var(--navy)] hover:text-[var(--berkeley-blue)] hover:underline underline-offset-4 transition-colors"
                        >
                          {club.name}
                        </a>
                      ) : (
                        <h4 className="font-semibold text-[var(--navy)]">
                          {club.name}
                        </h4>
                      )}
                      <p className="text-[var(--berkeley-gold)] text-xs font-mono tracking-wide">
                        {club.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-[var(--ink-soft)] text-sm mt-3 leading-relaxed">
                    {club.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Research & Academic */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-[var(--berkeley-blue)] mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-[var(--berkeley-blue)] rounded-full" />
              Research &amp; Academic
            </h3>
            <div className="space-y-4">
              {research.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-[var(--card-border)] rounded-2xl p-5 hover:border-[var(--berkeley-blue)]/40 hover:shadow-[0_8px_30px_rgba(0,50,98,0.07)] transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-[var(--navy)] hover:text-[var(--berkeley-blue)] hover:underline underline-offset-4 transition-colors"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <h4 className="font-semibold text-[var(--navy)]">
                        {item.name}
                      </h4>
                    )}
                    {item.dates && (
                      <span className="font-mono text-xs text-[var(--ink-muted)]">
                        {item.dates}
                      </span>
                    )}
                  </div>
                  {item.role && (
                    <p className="text-[var(--accent)] text-sm mb-2">
                      {item.role}
                    </p>
                  )}
                  <p className="text-[var(--ink-soft)] text-sm mb-3 leading-relaxed">
                    {item.description}
                  </p>
                  {item.tags && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag: string, tagIndex: number) => (
                        <span
                          key={tagIndex}
                          className="px-2.5 py-1 bg-[var(--accent-wash)] text-[var(--accent)] rounded-full font-mono text-[11px] tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
