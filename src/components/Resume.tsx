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
          className="text-3xl md:text-4xl font-semibold text-white text-center mb-16"
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
              transition={{ duration: 0.3 }}
              className="group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 hover:border-gray-600 transition-colors duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Company Logo */}
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden bg-white"
                  style={!exp.logo ? { backgroundColor: exp.logoColor || '#2a2a3c' } : {}}
                >
                  {exp.logo ? (
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain p-2"
                    />
                  ) : (
                    <span className="text-white font-bold text-sm">{exp.logoText}</span>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <span className="text-gray-400 text-sm">{exp.dates}</span>
                  </div>
                  {exp.link ? (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--accent)] font-medium mb-3 hover:underline inline-block"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    <p className="text-[var(--accent)] font-medium mb-3">{exp.company}</p>
                  )}
                  <p className="text-gray-300 mb-4">{exp.achievement}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-[var(--card-border)] text-gray-400 rounded-full text-sm"
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--card-border)] text-white rounded-full font-medium hover:bg-gray-700 transition-colors"
          >
            <Download size={18} />
            Download Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
