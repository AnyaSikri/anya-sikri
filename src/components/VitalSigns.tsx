"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/content";

export default function VitalSigns() {
  return (
    <section className="px-6 pb-4">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto border-t border-[var(--navy)]/20 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 pt-6"
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="font-display text-4xl md:text-5xl font-semibold text-[var(--navy)] tabular-nums">
              {stat.value}
            </div>
            <div className="mt-1 text-[13px] text-[var(--ink-muted)] leading-snug">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
