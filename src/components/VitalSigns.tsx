"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/content";

export default function VitalSigns() {
  return (
    <section className="px-6 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto rounded-2xl border border-[var(--card-border)] bg-white shadow-[0_8px_30px_rgba(18,58,82,0.05)] grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[var(--card-border)] overflow-hidden"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="px-6 py-6 md:py-7">
            <div className="w-6 h-[3px] rounded-full bg-[var(--accent)] mb-3" />
            <div className="font-mono text-3xl md:text-4xl font-semibold text-[var(--navy)] tabular-nums tracking-tight">
              {stat.value}
            </div>
            <div className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--ink-muted)] leading-snug">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
