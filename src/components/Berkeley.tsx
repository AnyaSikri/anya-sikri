"use client";

import { motion } from "framer-motion";
import { clubs, research } from "@/data/content";

export default function Berkeley() {
  return (
    <section id="berkeley" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
        >
          The Berkeley Chapter
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-center mb-16 text-lg"
        >
          Where I grew
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Clubs & Organizations */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#FDB515] mb-8 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#FDB515] rounded-full" />
              Clubs & Organizations
            </h3>
            <div className="space-y-4">
              {clubs.map((club, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#1e293b] border border-[#334155] rounded-xl p-4 hover:border-[#FDB515]/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#003262] rounded-lg flex items-center justify-center text-lg font-bold text-[#FDB515]">
                      {club.logoText}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{club.name}</h4>
                      <p className="text-[#FDB515] text-sm">{club.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mt-3">{club.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Research & Academic */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#003262] mb-8 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#003262] rounded-full" />
              Research & Academic
            </h3>
            <div className="space-y-4">
              {research.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#1e293b] border border-[#334155] rounded-xl p-4 hover:border-[#003262]/50 transition-colors"
                >
                  <h4 className="font-semibold text-white">{item.name}</h4>
                  {item.advisor && (
                    <p className="text-gray-400 text-sm">Advisor: {item.advisor}</p>
                  )}
                  <p className="text-gray-300 text-sm mt-2">{item.description}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3b82f6] text-sm mt-2 inline-block hover:underline"
                    >
                      View Paper →
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
