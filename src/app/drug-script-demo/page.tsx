"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import {
  Classification,
  classMeta,
  Drug,
  drugs,
  fmtWeek,
  WeekPoint,
} from "./data";

const INK = "#26241f";
const MUTED = "#7d7a72";
const LINE = "#e6e3dc";

function windowed(drug: Drug): WeekPoint[] {
  // Mature series are long — show the last 52 weeks, classified on full history
  return drug.weeks.length > 52 ? drug.weeks.slice(-52) : drug.weeks;
}

function Chip({ c }: { c: Classification }) {
  const m = classMeta[c];
  return (
    <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
      <span
        className="inline-block w-3 h-3 rounded-[3px] border"
        style={{
          backgroundColor: m.color,
          borderColor: c === "Baseline Building" ? LINE : m.color,
        }}
      />
      <span className="text-[11px]" style={{ color: MUTED }}>
        {m.short}
      </span>
    </span>
  );
}

function TrendChart({
  weeks,
  method,
}: {
  weeks: WeekPoint[];
  method: "wow" | "z";
}) {
  const W = 940;
  const H = 260;
  const PAD = { l: 56, r: 14, t: 14, b: 34 };
  const max = Math.max(...weeks.map((w) => w.scripts));
  const min = Math.min(...weeks.map((w) => w.scripts));
  const span = max - min || 1;
  const x = (i: number) =>
    PAD.l + (i / (weeks.length - 1)) * (W - PAD.l - PAD.r);
  const y = (v: number) =>
    PAD.t + (1 - (v - min) / span) * (H - PAD.t - PAD.b);
  const path = weeks
    .map((w, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)} ${y(w.scripts).toFixed(1)}`)
    .join(" ");
  const yTicks = [min, min + span / 2, max];
  const labelEvery = Math.ceil(weeks.length / 8);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full min-w-[720px]"
      role="img"
      aria-label="Weekly prescription trend with per-week classification markers"
    >
      {yTicks.map((t) => (
        <g key={t}>
          <line x1={PAD.l} x2={W - PAD.r} y1={y(t)} y2={y(t)} stroke={LINE} strokeWidth={1} />
          <text
            x={PAD.l - 8}
            y={y(t) + 3}
            textAnchor="end"
            style={{ font: "10px var(--font-geist-mono, monospace)", fill: MUTED }}
          >
            {t >= 10000 ? `${Math.round(t / 1000)}k` : Math.round(t).toLocaleString()}
          </text>
        </g>
      ))}
      <path d={path} fill="none" stroke={INK} strokeWidth={2} strokeLinejoin="round" />
      {weeks.map((w, i) => {
        const c = method === "wow" ? w.wow : w.z;
        const m = classMeta[c];
        const inline = c === "In-Line" || c === "Baseline Building";
        return (
          <g key={w.date}>
            <circle
              cx={x(i)}
              cy={y(w.scripts)}
              r={inline ? 2.5 : 4.5}
              fill={c === "Baseline Building" ? "#ffffff" : m.color}
              stroke={c === "Baseline Building" ? MUTED : "#ffffff"}
              strokeWidth={inline ? 1 : 1.5}
            >
              <title>
                {`${fmtWeek(w.date)} · ${w.scripts.toLocaleString()} scripts · ${c}` +
                  (method === "wow" && w.wowPct !== null
                    ? ` (${w.wowPct >= 0 ? "+" : ""}${w.wowPct.toFixed(1)}% WoW)`
                    : method === "z" && w.zScore !== null
                      ? ` (${w.zScore >= 0 ? "+" : ""}${w.zScore.toFixed(2)}σ)`
                      : "") +
                  (w.holiday ? " · holiday week" : "")}
              </title>
            </circle>
            {w.holiday && (
              <text
                x={x(i)}
                y={H - 20}
                textAnchor="middle"
                style={{ font: "9px var(--font-geist-mono, monospace)", fill: MUTED }}
              >
                ◆
              </text>
            )}
            {i % labelEvery === 0 && (
              <text
                x={x(i)}
                y={H - 6}
                textAnchor="middle"
                style={{ font: "9px var(--font-geist-mono, monospace)", fill: MUTED }}
              >
                {fmtWeek(w.date)}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

function StripRow({
  label,
  weeks,
  pick,
}: {
  label: string;
  weeks: WeekPoint[];
  pick: (w: WeekPoint) => Classification;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="w-16 flex-shrink-0 text-right"
        style={{ font: "10px var(--font-geist-mono, monospace)", color: MUTED }}
      >
        {label}
      </span>
      <div className="flex gap-[2px] flex-1">
        {weeks.map((w) => {
          const c = pick(w);
          const m = classMeta[c];
          return (
            <div
              key={w.date}
              className="flex-1 h-6 rounded-[2px] border flex items-center justify-center"
              style={{
                backgroundColor: m.color,
                borderColor: c === "Baseline Building" ? LINE : m.color,
              }}
              title={`${fmtWeek(w.date)} · ${c}`}
            >
              <span
                className="text-[7px] leading-none select-none"
                style={{
                  color:
                    c === "In-Line" || c === "Baseline Building"
                      ? MUTED
                      : "#ffffff",
                }}
              >
                {m.glyph}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function DrugScriptDemoPage() {
  const [drugId, setDrugId] = useState(drugs[0].id);
  const [method, setMethod] = useState<"wow" | "z">("z");
  const drug = useMemo(() => drugs.find((d) => d.id === drugId) ?? drugs[0], [drugId]);
  const weeks = useMemo(() => windowed(drug), [drug]);

  const disagreements = useMemo(
    () =>
      weeks
        .filter(
          (w) =>
            w.wow !== "Baseline Building" &&
            w.z !== "Baseline Building" &&
            w.wow !== w.z
        )
        .slice(-4)
        .reverse(),
    [weeks]
  );

  return (
    <main className="min-h-screen bg-[#faf9f6]" style={{ color: INK }}>
      <div className="bg-[#26241f] text-white px-6 py-2 text-center">
        <span className="font-mono text-[11px] tracking-[0.18em]">
          DEMO · SYNTHETIC PRESCRIPTION DATA · GENERATED SERIES, INVENTED DRUGS
        </span>
      </div>

      <nav className="px-6 py-4 border-b bg-white" style={{ borderColor: LINE }}>
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm hover:text-[#164a86] transition-colors"
            style={{ color: MUTED }}
          >
            <ArrowLeft size={16} />
            anyasikri.com
          </Link>
          <span className="font-mono text-[11px] tracking-[0.15em]" style={{ color: MUTED }}>
            WEEKLY TRx · TWO METHODS
          </span>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-7"
        >
          <h1 className="font-display text-4xl font-semibold tracking-tight">
            Drug Script Analysis
          </h1>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed" style={{ color: MUTED }}>
            Is this week&apos;s prescription count signal or noise? Two methods
            answer side by side — simple week-over-week change, and a rolling
            z-score with holiday-excluded baselines — with thresholds that
            adapt to where the drug is in its lifecycle.
          </p>
        </motion.header>

        {/* Drug tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {drugs.map((d) => (
            <button
              key={d.id}
              onClick={() => setDrugId(d.id)}
              className="text-left rounded-lg border px-4 py-2.5 transition-colors"
              style={{
                borderColor: d.id === drugId ? INK : LINE,
                backgroundColor: d.id === drugId ? "#ffffff" : "transparent",
              }}
            >
              <span className="block text-sm font-semibold">{d.name}</span>
              <span className="block text-[11px]" style={{ color: MUTED }}>
                {d.blurb}
              </span>
            </button>
          ))}
        </div>

        {/* Meta tiles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {[
            { v: drug.maturity.stage, l: "Lifecycle stage" },
            {
              v: `${drug.maturity.baselineWindow} wks`,
              l: "Z-score baseline window",
            },
            {
              v: `±${drug.maturity.inline}% / ±${drug.maturity.slight}%`,
              l: "WoW in-line / slight bands",
            },
            { v: `${drug.agreementPct}%`, l: "Methods agree" },
          ].map((t) => (
            <div
              key={t.l}
              className="bg-white border rounded-lg px-4 py-3.5"
              style={{ borderColor: LINE }}
            >
              <div className="font-display text-lg font-semibold leading-tight">
                {t.v}
              </div>
              <div className="text-[11px] mt-1" style={{ color: MUTED }}>
                {t.l}
              </div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <section className="bg-white border rounded-lg overflow-hidden mb-6" style={{ borderColor: LINE }}>
          <div
            className="px-5 py-3 border-b flex flex-wrap items-center justify-between gap-3"
            style={{ borderColor: LINE }}
          >
            <h2 className="font-display text-lg font-semibold">
              Weekly scripts
              {drug.weeks.length > 52 ? " — last 52 weeks" : ""}
            </h2>
            <div className="flex items-center gap-1 rounded-lg border p-0.5" style={{ borderColor: LINE }}>
              {(
                [
                  ["z", "Z-score markers"],
                  ["wow", "WoW markers"],
                ] as const
              ).map(([m, label]) => (
                <button
                  key={m}
                  onClick={() => setMethod(m)}
                  className="px-3 py-1 rounded-md font-mono text-[11px] transition-colors"
                  style={{
                    backgroundColor: method === m ? INK : "transparent",
                    color: method === m ? "#ffffff" : MUTED,
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="overflow-x-auto px-4 py-4">
            <TrendChart weeks={weeks} method={method} />
          </div>
          <div
            className="px-5 py-3 border-t flex flex-wrap items-center gap-x-5 gap-y-2"
            style={{ borderColor: LINE }}
          >
            {(
              [
                "Meaningfully Above",
                "Slightly Above",
                "In-Line",
                "Slightly Below",
                "Meaningfully Below",
                "Baseline Building",
              ] as Classification[]
            ).map((c) => (
              <Chip key={c} c={c} />
            ))}
            <span className="text-[11px]" style={{ color: MUTED }}>
              ◆ holiday week
            </span>
          </div>
        </section>

        {/* Method comparison strips */}
        <section className="bg-white border rounded-lg overflow-hidden mb-6" style={{ borderColor: LINE }}>
          <div className="px-5 py-3 border-b" style={{ borderColor: LINE }}>
            <h2 className="font-display text-lg font-semibold">
              Same weeks, two verdicts
            </h2>
          </div>
          <div className="px-5 py-4 space-y-2 overflow-x-auto">
            <div className="min-w-[720px] space-y-2">
              <StripRow label="WOW" weeks={weeks} pick={(w) => w.wow} />
              <StripRow label="Z-SCORE" weeks={weeks} pick={(w) => w.z} />
            </div>
          </div>
        </section>

        {/* Disagreements */}
        <section className="bg-white border rounded-lg overflow-hidden mb-8" style={{ borderColor: LINE }}>
          <div className="px-5 py-3 border-b" style={{ borderColor: LINE }}>
            <h2 className="font-display text-lg font-semibold">
              Where the methods disagree — and why it matters
            </h2>
          </div>
          {disagreements.length ? (
            <ul className="divide-y" style={{ borderColor: LINE }}>
              {disagreements.map((w) => (
                <li key={w.date} className="px-5 py-3.5 flex flex-col md:flex-row md:items-center gap-1.5 md:gap-6 text-sm">
                  <span className="font-mono text-[11px] whitespace-nowrap" style={{ color: MUTED }}>
                    wk of {fmtWeek(w.date)}
                  </span>
                  <span className="flex-1">
                    WoW says <strong>{w.wow}</strong>
                    {w.wowPct !== null &&
                      ` (${w.wowPct >= 0 ? "+" : ""}${w.wowPct.toFixed(1)}%)`}{" "}
                    · Z-score says <strong>{w.z}</strong>
                    {w.zScore !== null &&
                      ` (${w.zScore >= 0 ? "+" : ""}${w.zScore.toFixed(2)}σ)`}
                  </span>
                  <span className="text-[12px]" style={{ color: MUTED }}>
                    {w.holiday
                      ? "holiday-depressed week — the baseline flags it, WoW understates it"
                      : Math.abs(w.wowPct ?? 0) <= drug.maturity.inline
                        ? `quiet week, but drifting vs its ${drug.maturity.baselineWindow}-week baseline`
                        : "sharp weekly move the baseline says is normal range"}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-5 py-4 text-sm" style={{ color: MUTED }}>
              Methods agree on every scored week for this drug.
            </p>
          )}
        </section>

        <p className="text-center font-mono text-[10px] tracking-[0.15em] pb-6" style={{ color: MUTED }}>
          SYNTHETIC DEMO · SERIES ARE GENERATED · METHODOLOGY MIRRORS THE REAL TOOL
        </p>
      </div>
    </main>
  );
}
