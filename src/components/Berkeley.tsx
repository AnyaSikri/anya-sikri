"use client";

import { motion } from "framer-motion";
import { clubs, research } from "@/data/content";

export default function Berkeley() {
  return (
    <section id="berkeley" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-baseline justify-between gap-4 border-b border-[var(--navy)]/20 pb-3 mb-10"
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-[var(--navy)] tracking-tight">
            The Berkeley chapter
          </h2>
          <span className="hidden sm:block font-mono text-xs text-[var(--ink-muted)] whitespace-nowrap">
            where I grew
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-14 gap-y-10">
          {/* Clubs & Organizations */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-wide text-[var(--berkeley-blue)] mb-4">
              <span className="w-2 h-2 bg-[#FDB515] rounded-full" />
              Clubs &amp; organizations
            </h3>
            <div>
              {clubs.map((club, index) => (
                <div
                  key={index}
                  className="py-4 border-b border-[var(--card-border)] last:border-b-0"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    {club.link ? (
                      <a
                        href={club.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display font-semibold text-[var(--navy)] hover:text-[var(--berkeley-blue)] hover:underline underline-offset-4 transition-colors"
                      >
                        {club.name}
                      </a>
                    ) : (
                      <h4 className="font-display font-semibold text-[var(--navy)]">
                        {club.name}
                      </h4>
                    )}
                    <span className="font-mono text-[11px] text-[var(--berkeley-gold)] whitespace-nowrap">
                      {club.role}
                    </span>
                  </div>
                  <p className="text-[var(--ink-soft)] text-sm mt-1.5 leading-relaxed">
                    {club.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Research & Academic */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-wide text-[var(--berkeley-blue)] mb-4">
              <span className="w-2 h-2 bg-[var(--berkeley-blue)] rounded-full" />
              Research &amp; academic
            </h3>
            <div>
              {research.map((item, index) => (
                <div
                  key={index}
                  className="py-4 border-b border-[var(--card-border)] last:border-b-0"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display font-semibold text-[var(--navy)] hover:text-[var(--berkeley-blue)] hover:underline underline-offset-4 transition-colors"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <h4 className="font-display font-semibold text-[var(--navy)]">
                        {item.name}
                      </h4>
                    )}
                    {item.dates && (
                      <span className="font-mono text-[11px] text-[var(--ink-muted)] whitespace-nowrap">
                        {item.dates}
                      </span>
                    )}
                  </div>
                  {item.role && (
                    <p className="text-[var(--accent)] text-sm mt-0.5">
                      {item.role}
                    </p>
                  )}
                  <p className="text-[var(--ink-soft)] text-sm mt-1.5 mb-2 leading-relaxed">
                    {item.description}
                  </p>
                  {item.tags && (
                    <p className="font-mono text-[11px] text-[var(--ink-muted)]">
                      {item.tags.join(" · ")}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
