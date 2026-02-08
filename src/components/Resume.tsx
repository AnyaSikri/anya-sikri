"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { experiences } from "@/data/content";

export default function Resume() {
  return (
    <section id="resume" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Experience
        </motion.h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-[#1e293b] border border-[#334155] rounded-2xl p-6 hover:border-[#3b82f6] transition-all duration-300 hover:shadow-lg hover:shadow-[#3b82f6]/10"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Company Logo */}
                <div className="w-16 h-16 bg-[#334155] rounded-xl flex items-center justify-center text-2xl font-bold text-gray-400 group-hover:text-[#3b82f6] transition-colors flex-shrink-0">
                  {exp.logoText}
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <span className="text-gray-400 text-sm">{exp.dates}</span>
                  </div>
                  <p className="text-[#3b82f6] font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-300 mb-4">{exp.achievement}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-[#334155] text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#334155] text-white rounded-full font-medium hover:bg-[#475569] transition-colors"
          >
            <Download size={18} />
            Download Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
