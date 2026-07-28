"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { technicalProjects } from "@/data/content";

interface Project {
  title: string;
  description: string;
  tags: string[];
  status?: string;
  note?: string;
  image?: string;
  github?: string;
  demo?: string;
}

const statusStyles: Record<
  string,
  { label: string; dot: string; bg: string; text: string }
> = {
  live: { label: "LIVE", dot: "#10b981", bg: "#ecfdf5", text: "#047857" },
  prototype: {
    label: "PROTOTYPE",
    dot: "#f59e0b",
    bg: "#fffbeb",
    text: "#92400e",
  },
  "case-study": {
    label: "CASE STUDY",
    dot: "#3b82f6",
    bg: "#eff6ff",
    text: "#1e40af",
  },
  code: { label: "OPEN SOURCE", dot: "#64748b", bg: "#f1f5f9", text: "#475569" },
};

function StatusChip({ status, note }: { status?: string; note?: string }) {
  const style = status ? statusStyles[status] : undefined;
  if (!style) return null;
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono text-[10px] tracking-[0.14em]"
        style={{ backgroundColor: style.bg, color: style.text }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: style.dot }}
        />
        {style.label}
      </span>
      {note && (
        <span className="inline-flex items-center px-2.5 py-1 rounded-full font-mono text-[10px] tracking-[0.14em] bg-[var(--background)] text-[var(--ink-muted)] border border-[var(--card-border)]">
          {note.toUpperCase()}
        </span>
      )}
    </div>
  );
}

function Thumbnail({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // The image can fail before hydration attaches onError — check on mount
  useEffect(() => {
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div
      className="relative aspect-[16/9] border-b border-[var(--card-border)] overflow-hidden bg-[var(--accent-wash)]"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(15,118,110,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,118,110,0.07) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      {/* Placeholder monogram — visible until a real screenshot loads over it */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
        <span className="font-mono text-6xl font-semibold text-[var(--accent)] opacity-25">
          {project.title[0]}
        </span>
        <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--accent)] opacity-40">
          {project.tags[0]?.toUpperCase()}
        </span>
      </div>
      {project.image && !failed && (
        <img
          ref={imgRef}
          src={project.image}
          alt={`${project.title} screenshot`}
          className="absolute inset-0 w-full h-full object-cover object-top"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-[11px] tracking-[0.2em] text-[var(--accent)] text-center mb-3"
        >
          03 — LAB BENCH
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-[var(--navy)] text-center mb-3 tracking-tight"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[var(--ink-muted)] text-center mb-14"
        >
          Small builds and demos — some live, some prototypes worth a look
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {technicalProjects.map((project: Project, index: number) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group flex flex-col rounded-2xl border border-[var(--card-border)] bg-white overflow-hidden hover:border-[var(--accent)] hover:shadow-[0_12px_40px_rgba(15,118,110,0.1)] hover:-translate-y-1 transition-all duration-300"
            >
              <Thumbnail project={project} />

              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-[var(--navy)]">
                    {project.title}
                  </h3>
                </div>
                <StatusChip status={project.status} note={project.note} />
                <p className="text-sm text-[var(--ink-soft)] leading-relaxed mt-3 mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-[var(--accent-wash)] text-[var(--accent)] rounded-full font-mono text-[11px] tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 border-t border-[var(--card-border)] pt-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:underline underline-offset-4"
                    >
                      <ExternalLink size={15} />
                      Try the demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[var(--ink-muted)] hover:text-[var(--accent)] transition-colors"
                    >
                      <Github size={15} />
                      Code
                    </a>
                  )}
                  {!project.demo && !project.github && (
                    <span className="font-mono text-[10px] tracking-[0.14em] text-[var(--ink-muted)]">
                      DEMO IN THE WORKS
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
