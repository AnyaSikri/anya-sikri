"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CalendarClock, FileCheck2, FolderKanban, Timer } from "lucide-react";
import {
  AS_OF,
  daysUntil,
  fmtDate,
  Program,
  programs,
  statusMeta,
} from "./data";

// Timeline window: Aug 2026 → Jun 2027
const T0 = new Date("2026-08-01").getTime();
const T1 = new Date("2027-06-01").getTime();
const MONTHS = [
  "2026-08-01",
  "2026-09-01",
  "2026-10-01",
  "2026-11-01",
  "2026-12-01",
  "2027-01-01",
  "2027-02-01",
  "2027-03-01",
  "2027-04-01",
  "2027-05-01",
  "2027-06-01",
];

function x(iso: string, width: number): number {
  const t = new Date(iso).getTime();
  return ((t - T0) / (T1 - T0)) * width;
}

function StatusChip({ status }: { status: Program["status"] }) {
  const m = statusMeta[status];
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded font-mono text-[10px] tracking-wide whitespace-nowrap"
      style={{ backgroundColor: m.bg, color: m.text }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: m.dot }} />
      {m.label}
    </span>
  );
}

export default function AthenaDemoPage() {
  const [selectedCode, setSelectedCode] = useState(programs[0].code);
  const selected = useMemo(
    () => programs.find((p) => p.code === selectedCode) ?? programs[0],
    [selectedCode]
  );

  const nextCatalyst = useMemo(
    () =>
      [...programs].sort(
        (a, b) =>
          daysUntil(a.nextMilestone.date) - daysUntil(b.nextMilestone.date)
      )[0],
    []
  );

  const openSubmissions = programs.filter((p) =>
    /under review|planned/i.test(p.submission)
  ).length;

  const W = 980;
  const ROW = 46;
  const H = programs.length * ROW + 30;

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#1d2a3a]">
      {/* Demo banner */}
      <div className="bg-[#1d2a3a] text-white px-6 py-2 text-center">
        <span className="font-mono text-[11px] tracking-[0.18em]">
          DEMO · 100% SYNTHETIC PORTFOLIO · NO REAL DRUGS, COMPANIES, OR FILINGS
        </span>
      </div>

      {/* Top bar */}
      <nav className="px-6 py-4 border-b border-[#e3e7ed] bg-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#5c6b7c] hover:text-[#2b59c3] transition-colors"
          >
            <ArrowLeft size={16} />
            anyasikri.com
          </Link>
          <span className="font-mono text-[11px] tracking-[0.15em] text-[#5c6b7c]">
            DATA AS OF {fmtDate(AS_OF).toUpperCase()}
          </span>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-display text-4xl font-semibold tracking-tight">
            Athena
            <span className="text-[#5c6b7c] font-normal text-2xl ml-3 align-middle">
              regulatory intelligence
            </span>
          </h1>
          <p className="text-[#5c6b7c] mt-1 max-w-2xl text-sm leading-relaxed">
            One screen for a biotech portfolio&apos;s regulatory posture — every
            program, its submission state, and the catalysts ahead.
          </p>
        </motion.header>

        {/* Stat tiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {[
            {
              icon: FolderKanban,
              value: String(programs.length),
              label: "Active programs",
            },
            {
              icon: FileCheck2,
              value: String(openSubmissions),
              label: "Submissions in flight",
            },
            {
              icon: CalendarClock,
              value: `${daysUntil(nextCatalyst.nextMilestone.date)}d`,
              label: `Next catalyst — ${nextCatalyst.code} ${nextCatalyst.nextMilestone.label.toLowerCase()}`,
            },
            {
              icon: Timer,
              value: String(
                programs.filter((p) => p.status !== "on-track").length
              ),
              label: "Programs needing attention",
            },
          ].map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="bg-white border border-[#e3e7ed] rounded-lg px-4 py-4 flex items-start gap-3"
            >
              <Icon size={17} className="text-[#2b59c3] mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-display text-2xl font-semibold tabular-nums leading-none">
                  {value}
                </div>
                <div className="text-[11px] text-[#5c6b7c] mt-1.5 leading-snug">
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Program table */}
        <section className="bg-white border border-[#e3e7ed] rounded-lg overflow-hidden mb-8">
          <div className="px-5 py-3 border-b border-[#e3e7ed] flex items-baseline justify-between">
            <h2 className="font-display text-lg font-semibold">Portfolio</h2>
            <span className="font-mono text-[10px] tracking-wide text-[#5c6b7c]">
              CLICK A ROW FOR DETAIL
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left font-mono text-[10px] tracking-wide text-[#5c6b7c] border-b border-[#e3e7ed]">
                  <th className="px-5 py-2.5 font-normal">PROGRAM</th>
                  <th className="px-3 py-2.5 font-normal">PHASE</th>
                  <th className="px-3 py-2.5 font-normal">SUBMISSION</th>
                  <th className="px-3 py-2.5 font-normal">NEXT MILESTONE</th>
                  <th className="px-5 py-2.5 font-normal">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {programs.map((p) => (
                  <tr
                    key={p.code}
                    onClick={() => setSelectedCode(p.code)}
                    className={`border-b border-[#eef1f5] last:border-b-0 cursor-pointer transition-colors ${
                      p.code === selectedCode
                        ? "bg-[#eef3fd]"
                        : "hover:bg-[#f7f9fc]"
                    }`}
                  >
                    <td className="px-5 py-3">
                      <span className="font-mono text-[13px] font-semibold text-[#2b59c3]">
                        {p.code}
                      </span>
                      <span className="block text-[12px] text-[#5c6b7c]">
                        {p.indication}
                      </span>
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap">{p.phase}</td>
                    <td className="px-3 py-3 whitespace-nowrap">{p.submission}</td>
                    <td className="px-3 py-3 whitespace-nowrap">
                      {p.nextMilestone.label}
                      <span className="block font-mono text-[11px] text-[#5c6b7c]">
                        {fmtDate(p.nextMilestone.date)} ·{" "}
                        {daysUntil(p.nextMilestone.date)}d
                      </span>
                    </td>
                    <td className="px-5 py-3">
                      <StatusChip status={p.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Catalyst runway timeline */}
        <section className="bg-white border border-[#e3e7ed] rounded-lg overflow-hidden mb-8">
          <div className="px-5 py-3 border-b border-[#e3e7ed]">
            <h2 className="font-display text-lg font-semibold">
              Catalyst runway
            </h2>
          </div>
          <div className="overflow-x-auto px-5 py-4">
            <svg
              viewBox={`0 0 ${W + 120} ${H}`}
              className="min-w-[860px] w-full"
              role="img"
              aria-label="Timeline of upcoming regulatory milestones per program"
            >
              {/* Month gridlines */}
              {MONTHS.map((m) => (
                <g key={m} transform={`translate(${100 + x(m, W)}, 0)`}>
                  <line y1={4} y2={H - 22} stroke="#eef1f5" strokeWidth={1} />
                  <text
                    y={H - 8}
                    textAnchor="middle"
                    className="fill-[#8a97a6]"
                    style={{ font: "9px var(--font-geist-mono, monospace)" }}
                  >
                    {new Date(m + "T00:00:00")
                      .toLocaleDateString("en-US", { month: "short" })
                      .toUpperCase()}
                    {m.startsWith("2027-01") ? " '27" : ""}
                  </text>
                </g>
              ))}

              {/* Today line */}
              <g transform={`translate(${100 + x(AS_OF, W)}, 0)`}>
                <line
                  y1={4}
                  y2={H - 22}
                  stroke="#1d2a3a"
                  strokeWidth={1}
                  strokeDasharray="3 3"
                />
                <text
                  y={12}
                  x={4}
                  className="fill-[#1d2a3a]"
                  style={{ font: "9px var(--font-geist-mono, monospace)" }}
                >
                  TODAY
                </text>
              </g>

              {/* Program rows */}
              {programs.map((p, i) => {
                const cy = 30 + i * ROW;
                const future = p.milestones.filter(
                  (ms) => new Date(ms.date).getTime() >= T0
                );
                const isSel = p.code === selectedCode;
                return (
                  <g
                    key={p.code}
                    onClick={() => setSelectedCode(p.code)}
                    className="cursor-pointer"
                  >
                    {isSel && (
                      <rect
                        x={0}
                        y={cy - ROW / 2 + 2}
                        width={W + 120}
                        height={ROW - 4}
                        rx={6}
                        className="fill-[#eef3fd]"
                      />
                    )}
                    <text
                      x={8}
                      y={cy + 3}
                      className={isSel ? "fill-[#2b59c3]" : "fill-[#1d2a3a]"}
                      style={{
                        font: "600 11px var(--font-geist-mono, monospace)",
                      }}
                    >
                      {p.code}
                    </text>
                    <line
                      x1={100}
                      x2={100 + W}
                      y1={cy}
                      y2={cy}
                      stroke="#e3e7ed"
                      strokeWidth={1}
                    />
                    {future.map((ms) => {
                      const cx = 100 + x(ms.date, W);
                      return (
                        <g key={ms.label + ms.date}>
                          <circle
                            cx={cx}
                            cy={cy}
                            r={ms.key ? 5.5 : 3.5}
                            className={
                              ms.key ? "fill-[#2b59c3]" : "fill-white"
                            }
                            stroke="#2b59c3"
                            strokeWidth={1.5}
                          >
                            <title>{`${p.code} — ${ms.label} · ${fmtDate(ms.date)}`}</title>
                          </circle>
                          {ms.key && (
                            <text
                              x={cx}
                              y={cy - 11}
                              textAnchor="middle"
                              className="fill-[#1d2a3a]"
                              style={{
                                font: "9px var(--font-geist-mono, monospace)",
                              }}
                            >
                              {ms.label.length > 22
                                ? ms.label.slice(0, 21) + "…"
                                : ms.label}
                            </text>
                          )}
                        </g>
                      );
                    })}
                  </g>
                );
              })}
            </svg>
          </div>
        </section>

        {/* Selected program detail */}
        <motion.section
          key={selected.code}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="grid md:grid-cols-2 gap-4 mb-10"
        >
          <div className="bg-white border border-[#e3e7ed] rounded-lg p-5">
            <div className="flex items-baseline justify-between mb-1">
              <h3 className="font-display text-xl font-semibold">
                <span className="font-mono text-[#2b59c3]">{selected.code}</span>
                <span className="text-[#5c6b7c] font-normal text-base ml-2">
                  {selected.indication}
                </span>
              </h3>
              <StatusChip status={selected.status} />
            </div>
            <p className="text-[12px] text-[#5c6b7c] mb-4">
              {selected.modality} · {selected.phase} · {selected.submission}
            </p>
            <p className="text-sm leading-relaxed mb-5">{selected.statusNote}</p>
            <h4 className="font-mono text-[10px] tracking-wide text-[#5c6b7c] mb-2">
              MILESTONES
            </h4>
            <ul className="space-y-1.5">
              {selected.milestones.map((ms) => {
                const past = new Date(ms.date) < new Date(AS_OF);
                return (
                  <li
                    key={ms.label + ms.date}
                    className="flex items-baseline justify-between gap-4 text-sm"
                  >
                    <span className={past ? "text-[#8a97a6]" : ""}>
                      {ms.label}
                    </span>
                    <span className="font-mono text-[11px] text-[#5c6b7c] whitespace-nowrap">
                      {fmtDate(ms.date)}
                      {!past && ` · ${daysUntil(ms.date)}d`}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="bg-white border border-[#e3e7ed] rounded-lg p-5">
            <h4 className="font-mono text-[10px] tracking-wide text-[#5c6b7c] mb-3">
              RECENT REGULATORY EVENTS
            </h4>
            <ul className="space-y-3">
              {selected.events.map((ev) => (
                <li key={ev.date + ev.text} className="flex gap-3 text-sm">
                  <span className="font-mono text-[11px] text-[#5c6b7c] whitespace-nowrap pt-0.5">
                    {fmtDate(ev.date)}
                  </span>
                  <span className="leading-relaxed">{ev.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        <p className="text-center font-mono text-[10px] tracking-[0.15em] text-[#8a97a6] pb-6">
          SYNTHETIC DEMO · PROGRAMS, DATES, AND EVENTS ARE INVENTED
        </p>
      </div>
    </main>
  );
}
