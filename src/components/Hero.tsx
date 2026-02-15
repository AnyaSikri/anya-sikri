"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-[var(--background)]">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--accent)] rounded-full filter blur-[150px] opacity-[0.06]" />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[var(--accent-secondary)] rounded-full filter blur-[150px] opacity-[0.04]" />
        </div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-semibold text-white mb-4 tracking-tight"
        >
          Anya Sikri
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl text-gray-400 mb-3"
        >
          Building AI for Healthcare & Life Sciences
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm md:text-base text-gray-500 mb-8 max-w-xl mx-auto leading-relaxed"
        >
          Data Science & Public Health student at UC Berkeley. Previously at PwC, Rigel Pharmaceuticals, and Abbott.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-6 justify-center items-center"
        >
          <a
            href="#projects"
            className="text-sm text-gray-300 hover:text-white transition-colors underline underline-offset-4 decoration-gray-600 hover:decoration-gray-300"
          >
            see my work
          </a>
          <a
            href="#contact"
            className="text-sm text-gray-300 hover:text-white transition-colors underline underline-offset-4 decoration-gray-600 hover:decoration-gray-300"
          >
            get in touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex justify-center gap-5"
        >
          <a
            href="https://linkedin.com/in/anyasikri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-300 transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/anyasikri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-300 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
