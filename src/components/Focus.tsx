"use client";

import { motion } from "framer-motion";
import { focusAreas } from "@/data/content";

export default function Focus() {
  return (
    <section id="focus" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-baseline justify-between gap-4 border-b border-[var(--navy)]/20 pb-3 mb-10"
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-[var(--navy)] tracking-tight">
            Three ways into the same problem
          </h2>
          <span className="hidden sm:block font-mono text-xs text-[var(--ink-muted)] whitespace-nowrap">
            what I do
          </span>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-x-10 gap-y-8">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="w-7 h-[3px] bg-[var(--accent)] mb-4" />
              <h3 className="font-display text-xl font-semibold text-[var(--navy)] mb-2">
                {area.title}
              </h3>
              <p className="text-sm text-[var(--ink-soft)] leading-relaxed mb-3">
                {area.description}
              </p>
              <p className="font-mono text-[11px] text-[var(--ink-muted)]">
                {area.proof}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
