"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#13131a]/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Let's Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-300 text-lg mb-12"
        >
          Always open to interesting conversations and opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-6"
        >
          <a
            href="mailto:sikrianya@gmail.com"
            className="w-14 h-14 bg-[#2a2a3c] rounded-full flex items-center justify-center text-gray-300 hover:bg-[#6366f1] hover:text-white transition-all"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://linkedin.com/in/anyasikri"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-[#2a2a3c] rounded-full flex items-center justify-center text-gray-300 hover:bg-[#6366f1] hover:text-white transition-all"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/anyasikri"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-[#2a2a3c] rounded-full flex items-center justify-center text-gray-300 hover:bg-[#6366f1] hover:text-white transition-all"
          >
            <Github size={24} />
          </a>
          <a
            href="https://twitter.com/anyasikri"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-[#2a2a3c] rounded-full flex items-center justify-center text-gray-300 hover:bg-[#6366f1] hover:text-white transition-all"
          >
            <Twitter size={24} />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-gray-500 text-sm"
        >
          Built with Next.js, Tailwind CSS, and Framer Motion
        </motion.p>
      </div>
    </section>
  );
}
