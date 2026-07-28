"use client";

import { motion } from "framer-motion";
import { Cpu, Dna, TrendingUp } from "lucide-react";
import { focusAreas } from "@/data/content";

const icons = [Cpu, Dna, TrendingUp];

export default function Focus() {
  return (
    <section id="focus" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-[11px] tracking-[0.2em] text-[var(--accent)] text-center mb-3"
        >
          01 — FOCUS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-[var(--navy)] text-center mb-14 tracking-tight"
        >
          Three ways into the same problem
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-5">
          {focusAreas.map((area, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={area.index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative rounded-2xl border border-[var(--card-border)] bg-white p-6 hover:border-[var(--accent)] hover:shadow-[0_12px_40px_rgba(15,118,110,0.1)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[var(--accent-wash)] flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white transition-colors duration-300">
                    <Icon size={20} />
                  </div>
                  <span className="font-mono text-[11px] tracking-[0.15em] text-[var(--ink-muted)]">
                    {area.index} / {area.tag}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[var(--navy)] mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-[var(--ink-soft)] leading-relaxed mb-5">
                  {area.description}
                </p>
                <p className="font-mono text-[11px] tracking-wide text-[var(--ink-muted)] border-t border-[var(--card-border)] pt-3">
                  {area.proof}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
