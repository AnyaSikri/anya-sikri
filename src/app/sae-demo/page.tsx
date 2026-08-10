"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Check,
  Download,
  FileText,
  Flag,
  Loader2,
  Lock,
  PenLine,
  Sparkles,
} from "lucide-react";
import { demoCases, DemoCase, STUDY_ID } from "./data";

// Pastel palette carried over from the original Streamlit tool
const tints: Record<string, { dot: string; bg: string; text: string }> = {
  lav: { dot: "#a78bdb", bg: "#f1ecfb", text: "#6b4ba8" },
  mint: { dot: "#6fcf97", bg: "#e7f7ee", text: "#2e7d52" },
  peach: { dot: "#f2a488", bg: "#fcebe3", text: "#b85c3c" },
  sky: { dot: "#7ec8e3", bg: "#e6f5fb", text: "#2c7894" },
  sun: { dot: "#f2c879", bg: "#fcf4e2", text: "#94690e" },
};

const pipelineSteps = [
  "Loading SDTM domains (ae, dm, ex, cm, mh)…",
  "Deterministic field mapping — direct column lookups, no LLM…",
  "Drafting narrative from structured data (LLM)…",
  "Compiling flags for human review…",
];

function ProvChip({ prov }: { prov: string }) {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md font-mono text-[10px] tracking-wide bg-[#e7f7ee] text-[#2e7d52]">
      {prov}
    </span>
  );
}

function FlagChip({ reason }: { reason: string }) {
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md font-mono text-[10px] tracking-wide bg-[#fcebe3] text-[#b85c3c]"
      title={reason}
    >
      <Flag size={10} /> NEEDS REVIEW
    </span>
  );
}

export default function SaeDemoPage() {
  const [selected, setSelected] = useState<DemoCase | null>(null);
  const [phase, setPhase] = useState<"pick" | "populating" | "review">("pick");
  const [pipelineStep, setPipelineStep] = useState(0);
  const [narrativeShown, setNarrativeShown] = useState(0);
  const [narrative, setNarrative] = useState("");
  const [signName, setSignName] = useState("");
  const [attested, setAttested] = useState(false);
  const [exported, setExported] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach(clearTimeout);
  }, []);

  const stats = useMemo(() => {
    if (!selected) return { det: 0, flagged: 0 };
    const fields = selected.sections.flatMap((s) => s.fields);
    return {
      det: fields.filter((f) => f.prov).length,
      flagged: fields.filter((f) => f.flag).length,
    };
  }, [selected]);

  function startPopulate(c: DemoCase) {
    setSelected(c);
    setPhase("populating");
    setPipelineStep(0);
    setNarrative(c.narrative);
    setNarrativeShown(0);
    setSignName("");
    setAttested(false);
    setExported(false);
    pipelineSteps.forEach((_, i) => {
      timers.current.push(
        setTimeout(() => setPipelineStep(i + 1), 550 * (i + 1))
      );
    });
    timers.current.push(
      setTimeout(() => setPhase("review"), 550 * pipelineSteps.length + 400)
    );
  }

  // Narrative typewriter reveal once review opens
  useEffect(() => {
    if (phase !== "review" || !selected) return;
    let i = 0;
    const total = selected.narrative.length;
    const iv = setInterval(() => {
      i = Math.min(total, i + 7);
      setNarrativeShown(i);
      if (i >= total) clearInterval(iv);
    }, 12);
    return () => clearInterval(iv);
  }, [phase, selected]);

  const canExport = attested && signName.trim().length > 2;

  function exportForm() {
    if (!selected || !canExport) return;
    const lines: string[] = [
      "SERIOUS ADVERSE EVENT FORM — DEMO EXPORT",
      `Study ${STUDY_ID} · Subject ${selected.subject}`,
      "SYNTHETIC DATA — generated for demonstration only",
      "",
    ];
    for (const section of selected.sections) {
      lines.push(`== ${section.title} ==`);
      for (const f of section.fields) {
        lines.push(
          `${f.label}: ${f.value ?? "[LEFT BLANK — " + (f.flag ?? "needs review") + "]"}`
        );
      }
      lines.push("");
    }
    lines.push("== Section I — Event Description (LLM-drafted, human-reviewed) ==");
    lines.push(narrative);
    lines.push("");
    lines.push(`Electronically signed by: ${signName.trim()}`);
    lines.push(`Signed at: ${new Date().toISOString()}`);
    const blob = new Blob([lines.join("\n")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `SAE_${STUDY_ID}_${selected.subject}_demo.txt`;
    a.click();
    URL.revokeObjectURL(url);
    setExported(true);
  }

  return (
    <main className="min-h-screen bg-[#faf9fd] text-[#3a3a4a]">
      {/* Demo banner */}
      <div className="bg-[#3a3a4a] text-white px-6 py-2 text-center">
        <span className="font-mono text-[11px] tracking-[0.18em]">
          DEMO · 100% SYNTHETIC DATA · NO REAL PATIENT INFORMATION
        </span>
      </div>

      {/* Top bar */}
      <nav className="px-6 py-4 border-b border-[#ece6f7] bg-white/70 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#7a7a8c] hover:text-[#6b4ba8] transition-colors"
          >
            <ArrowLeft size={16} />
            anyasikri.com
          </Link>
          <span className="font-mono text-[11px] tracking-[0.15em] text-[#7a7a8c]">
            SAE FORM AUTO-POPULATION
          </span>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-[#ece6f7] p-7 md:p-9 mb-8"
          style={{
            background:
              "linear-gradient(135deg, #F1ECFB 0%, #E6F5FB 45%, #E7F7EE 100%)",
          }}
        >
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#3a3a4a] mb-2">
            SAE Form Auto-Population
          </h1>
          <p className="text-[#7a7a8c] max-w-2xl leading-relaxed mb-4">
            Reads structured clinical study data for one patient and fills out a
            Serious Adverse Event form. Deterministic fields come from direct
            column lookups — fully traceable, no LLM. The narrative is the only
            LLM-drafted piece, and a human reviews and signs before anything
            exports.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 rounded-full text-[13px] font-semibold bg-[#ede4fb] text-[#6b4ba8]">
              Deterministic-first
            </span>
            <span className="px-3 py-1.5 rounded-full text-[13px] font-semibold bg-[#ddf3e7] text-[#2e7d52]">
              Full provenance
            </span>
            <span className="px-3 py-1.5 rounded-full text-[13px] font-semibold bg-[#fbe2d6] text-[#b85c3c]">
              Flags, not guesses
            </span>
            <span className="px-3 py-1.5 rounded-full text-[13px] font-semibold bg-[#dcf0f9] text-[#2c7894]">
              Human sign-off
            </span>
          </div>
        </motion.div>

        {/* Step 1: case picker */}
        <div className="mb-8">
          <h2 className="flex items-center gap-2.5 text-lg font-bold mb-4">
            <span className="w-3 h-3 rounded-full bg-[#a78bdb]" />
            1 · Pick a subject
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {demoCases.map((c) => (
              <button
                key={c.subject}
                onClick={() => startPopulate(c)}
                className={`text-left rounded-2xl border p-5 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(167,139,219,0.18)] ${
                  selected?.subject === c.subject
                    ? "border-[#a78bdb] shadow-[0_8px_24px_rgba(167,139,219,0.18)]"
                    : "border-[#ece6f7]"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-sm font-bold text-[#6b4ba8]">
                    {c.subject}
                  </span>
                  <span className="font-mono text-[10px] tracking-wide text-[#7a7a8c]">
                    {STUDY_ID}
                  </span>
                </div>
                <p className="text-sm text-[#3a3a4a] font-medium">{c.event}</p>
                <p className="text-[13px] text-[#7a7a8c]">{c.summary}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: populate pipeline */}
        <AnimatePresence>
          {phase === "populating" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="rounded-2xl border border-[#ece6f7] bg-white p-6 mb-8"
            >
              <ul className="space-y-2.5">
                {pipelineSteps.map((step, i) => (
                  <li key={step} className="flex items-center gap-3 text-sm">
                    {i < pipelineStep ? (
                      <Check size={15} className="text-[#2e7d52] flex-shrink-0" />
                    ) : i === pipelineStep ? (
                      <Loader2
                        size={15}
                        className="animate-spin text-[#6b4ba8] flex-shrink-0"
                      />
                    ) : (
                      <span className="w-[15px] flex-shrink-0" />
                    )}
                    <span
                      className={
                        i <= pipelineStep ? "text-[#3a3a4a]" : "text-[#c2c2d0]"
                      }
                    >
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 3: review */}
        {phase === "review" && selected && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            {/* Metric cards */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="rounded-2xl p-4 bg-[#e7f7ee]">
                <div className="text-2xl font-extrabold text-[#2e7d52] tabular-nums">
                  {stats.det}
                </div>
                <div className="text-xs font-semibold text-[#2e7d52]/80">
                  Deterministic fields
                </div>
              </div>
              <div className="rounded-2xl p-4 bg-[#fcebe3]">
                <div className="text-2xl font-extrabold text-[#b85c3c] tabular-nums">
                  {stats.flagged}
                </div>
                <div className="text-xs font-semibold text-[#b85c3c]/80">
                  Flagged for human entry
                </div>
              </div>
              <div className="rounded-2xl p-4 bg-[#f1ecfb]">
                <div className="text-2xl font-extrabold text-[#6b4ba8] tabular-nums">
                  1
                </div>
                <div className="text-xs font-semibold text-[#6b4ba8]/80">
                  LLM-drafted narrative
                </div>
              </div>
            </div>

            {/* Sections */}
            <h2 className="flex items-center gap-2.5 text-lg font-bold mb-4">
              <span className="w-3 h-3 rounded-full bg-[#7ec8e3]" />
              2 · Review populated fields
            </h2>
            <div className="space-y-5 mb-10">
              {selected.sections.map((section) => {
                const tint = tints[section.tint];
                return (
                  <div
                    key={section.id}
                    className="rounded-2xl border border-[#ece6f7] bg-white overflow-hidden"
                  >
                    <div
                      className="px-5 py-3 flex items-center gap-2.5"
                      style={{ backgroundColor: tint.bg }}
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: tint.dot }}
                      />
                      <span
                        className="text-sm font-bold"
                        style={{ color: tint.text }}
                      >
                        {section.title}
                      </span>
                    </div>
                    <ul className="divide-y divide-[#f3f0fa]">
                      {section.fields.map((f) => (
                        <li
                          key={f.label}
                          className="px-5 py-3 flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4"
                        >
                          <span className="sm:w-64 flex-shrink-0 text-[13px] font-medium text-[#7a7a8c]">
                            {f.label}
                          </span>
                          <span className="flex-1 text-sm text-[#3a3a4a]">
                            {f.value ?? (
                              <em className="text-[#c2c2d0]">left blank</em>
                            )}
                          </span>
                          <span className="flex-shrink-0">
                            {f.prov ? (
                              <ProvChip prov={f.prov} />
                            ) : f.flag ? (
                              <FlagChip reason={f.flag} />
                            ) : null}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}

              {/* Narrative */}
              <div className="rounded-2xl border border-[#ece6f7] bg-white overflow-hidden">
                <div className="px-5 py-3 flex items-center justify-between bg-[#f1ecfb]">
                  <span className="flex items-center gap-2.5 text-sm font-bold text-[#6b4ba8]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#a78bdb]" />
                    Section I — Event Description
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-mono text-[10px] tracking-wide bg-white text-[#6b4ba8]">
                    <Sparkles size={11} /> LLM-DRAFTED · REVIEW REQUIRED
                  </span>
                </div>
                <div className="p-5">
                  {narrativeShown < selected.narrative.length ? (
                    <p className="text-sm leading-relaxed text-[#3a3a4a] whitespace-pre-wrap min-h-[120px]">
                      {selected.narrative.slice(0, narrativeShown)}
                      <span className="inline-block w-1.5 h-4 align-middle bg-[#a78bdb] animate-pulse ml-0.5" />
                    </p>
                  ) : (
                    <>
                      <textarea
                        value={narrative}
                        onChange={(e) => setNarrative(e.target.value)}
                        rows={9}
                        className="w-full text-sm leading-relaxed text-[#3a3a4a] border border-[#ece6f7] rounded-xl p-4 focus:outline-none focus:border-[#a78bdb] resize-y"
                      />
                      <p className="mt-2 flex items-center gap-1.5 text-xs text-[#7a7a8c]">
                        <PenLine size={12} />
                        Editable — the draft is a starting point, never the final
                        word.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* E-sign + export */}
            <h2 className="flex items-center gap-2.5 text-lg font-bold mb-4">
              <span className="w-3 h-3 rounded-full bg-[#6fcf97]" />
              3 · Sign &amp; export
            </h2>
            <div className="rounded-2xl border border-[#ece6f7] bg-white p-6">
              <div className="flex flex-col md:flex-row md:items-end gap-4">
                <label className="flex-1">
                  <span className="block text-[13px] font-medium text-[#7a7a8c] mb-1.5">
                    Full name (electronic signature)
                  </span>
                  <input
                    value={signName}
                    onChange={(e) => setSignName(e.target.value)}
                    placeholder="e.g. Dr. Jordan Reyes"
                    className="w-full border border-[#ece6f7] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#a78bdb]"
                  />
                </label>
                <button
                  onClick={exportForm}
                  disabled={!canExport}
                  className={`inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity ${
                    canExport ? "opacity-100" : "opacity-40 cursor-not-allowed"
                  }`}
                  style={{
                    background: "linear-gradient(135deg,#a78bdb,#7ec8e3)",
                  }}
                >
                  {canExport ? <Download size={16} /> : <Lock size={16} />}
                  Export form
                </button>
              </div>
              <label className="mt-4 flex items-start gap-2.5 text-[13px] text-[#3a3a4a] cursor-pointer">
                <input
                  type="checkbox"
                  checked={attested}
                  onChange={(e) => setAttested(e.target.checked)}
                  className="mt-0.5 accent-[#a78bdb]"
                />
                I have reviewed every populated field and the narrative, and I
                understand flagged fields require manual completion. (Demo
                attestation — nothing exports without this step.)
              </label>
              {exported && (
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#2e7d52] bg-[#e7f7ee] px-3.5 py-2 rounded-xl">
                  <FileText size={15} />
                  Exported — check your downloads for the demo form.
                </p>
              )}
            </div>
          </motion.div>
        )}

        <p className="mt-12 text-center font-mono text-[10px] tracking-[0.15em] text-[#c2c2d0]">
          SYNTHETIC DEMO · THE PRODUCTION TOOL RUNS ON REAL SDTM DATASETS BEHIND
          A FIREWALL
        </p>
      </div>
    </main>
  );
}
