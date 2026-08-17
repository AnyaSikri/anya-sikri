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
    <section
      id="contact"
      className="mt-8 px-6 py-20 bg-[var(--navy)] text-white"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-[1.4fr_1fr] gap-10 items-center"
        >
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Let&apos;s talk.
            </h2>
            <p className="text-white/70 mb-8 max-w-md leading-relaxed">
              Always open to interesting conversations and opportunities in
              healthcare, biotech, and AI.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <a
                href="mailto:sikrianya@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[var(--navy)] text-sm font-semibold hover:bg-[#d8efe9] transition-colors"
              >
                <Mail size={16} />
                sikrianya@gmail.com
              </a>
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <Ekg className="w-full h-16 opacity-80" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-6 border-t border-white/15 font-mono text-[11px] text-white/40"
        >
          anya sikri · built with next.js, tailwind &amp; framer motion
        </motion.p>
      </div>
    </section>
  );
}
