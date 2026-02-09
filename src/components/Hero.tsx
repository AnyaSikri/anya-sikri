"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden pt-20">
      {/* Layered gradient background for depth */}
      <div className="absolute inset-0 bg-[#0a0a0f]">
        {/* Primary gradient mesh */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#6366f1] rounded-full filter blur-[150px] opacity-20" />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#ec4899] rounded-full filter blur-[150px] opacity-15" />
          <div className="absolute bottom-0 left-1/2 w-[600px] h-[300px] bg-[#3b82f6] rounded-full filter blur-[150px] opacity-10" />
        </div>
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4"
        >
          Anya Sikri
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-3"
        >
          Building AI for Healthcare & Life Sciences
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base md:text-lg text-gray-400 mb-6 max-w-2xl mx-auto"
        >
          Data Science & Public Health student at UC Berkeley. Previously at PwC, Rigel Pharmaceuticals, and Abbott.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-[#6366f1] text-white rounded-full font-semibold hover:bg-[#4f46e5] transition-all hover:shadow-lg hover:shadow-[#6366f1]/25 flex items-center gap-2"
          >
            See My Work
            <ArrowDown size={18} />
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-[#6366f1] text-[#6366f1] rounded-full font-semibold hover:bg-[#6366f1]/10 transition-colors flex items-center gap-2"
          >
            Get in Touch
            <Mail size={18} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex justify-center gap-6"
        >
          <a
            href="https://linkedin.com/in/anyasikri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#6366f1] transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/anyasikri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#6366f1] transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-gray-500" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
