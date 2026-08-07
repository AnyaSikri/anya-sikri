"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import Ekg from "./Ekg";

const socials = [
  {
    href: "https://linkedin.com/in/anyasikri",
    label: "LinkedIn",
    icon: Linkedin,
  },
  { href: "https://github.com/anyasikri", label: "GitHub", icon: Github },
  { href: "https://twitter.com/anyasikri", label: "Twitter", icon: Twitter },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-[var(--card-border)] bg-white shadow-[0_8px_30px_rgba(18,58,82,0.06)] px-8 py-12 md:px-14 text-center"
        >
          <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--accent)] mb-3">
            05 — GET IN TOUCH
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--navy)] mb-4 tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="text-[var(--ink-soft)] mb-8">
            Always open to interesting conversations and opportunities.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            <a
              href="mailto:sikrianya@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white rounded-full text-sm font-medium hover:bg-[#0d635c] transition-colors shadow-sm"
            >
              <Mail size={16} />
              Say hello
            </a>
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 border border-[var(--card-border)] bg-white rounded-full flex items-center justify-center text-[var(--ink-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <Ekg className="w-48 h-8 mx-auto opacity-70" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center font-mono text-[11px] tracking-[0.15em] text-[var(--ink-muted)]"
        >
          BUILT WITH NEXT.JS · TAILWIND · FRAMER MOTION
        </motion.p>
      </div>
    </section>
  );
}
