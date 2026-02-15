"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { technicalProjects, ventures } from "@/data/content";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className={`group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl overflow-hidden hover:border-gray-600 transition-colors duration-200 ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Thumbnail placeholder */}
      <div className="h-48 bg-gradient-to-br from-[var(--card-border)] to-[var(--card-bg)] flex items-center justify-center">
        <span className="text-6xl opacity-20">{project.title[0]}</span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <Github size={18} />
              <span className="text-sm">Code</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <ExternalLink size={18} />
              <span className="text-sm">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0a0a0f]/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-white text-center mb-16"
        >
          Projects
        </motion.h2>

        {/* Technical Projects */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-[var(--accent)] mb-8"
          >
            Technical Projects
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-6">
            {technicalProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Ventures */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-[var(--accent-secondary)] mb-8"
          >
            Ventures
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-6">
            {ventures.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
