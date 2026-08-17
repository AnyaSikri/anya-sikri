// ========================================
// ATHENA DEMO — 100% SYNTHETIC DATA
// Invented portfolio, program codes, dates, and events for a demo
// biotech ("Athena Bio"). No real drugs, companies, or filings.
// ========================================

export type ProgramStatus = "on-track" | "watch" | "at-risk";

export interface Milestone {
  label: string;
  date: string; // ISO
  key?: boolean; // key catalyst — direct-labeled on the timeline
}

export interface RegEvent {
  date: string;
  text: string;
}

export interface Program {
  code: string;
  indication: string;
  modality: string;
  phase: string;
  submission: string;
  status: ProgramStatus;
  statusNote: string;
  nextMilestone: Milestone;
  milestones: Milestone[];
  events: RegEvent[];
}

export const AS_OF = "2026-08-15";

export const statusMeta: Record<
  ProgramStatus,
  { label: string; dot: string; bg: string; text: string }
> = {
  "on-track": { label: "ON TRACK", dot: "#1a7f4e", bg: "#e8f5ee", text: "#166241" },
  watch: { label: "WATCH", dot: "#c98a00", bg: "#fdf3d9", text: "#7a5200" },
  "at-risk": { label: "AT RISK", dot: "#c0392b", bg: "#fdeae7", text: "#93291e" },
};

export const programs: Program[] = [
  {
    code: "ATH-101",
    indication: "Rheumatoid arthritis",
    modality: "Oral small molecule",
    phase: "Phase 3",
    submission: "NDA under review",
    status: "on-track",
    statusNote: "Label negotiations underway; no major information requests open.",
    nextMilestone: { label: "PDUFA action date", date: "2026-09-28", key: true },
    milestones: [
      { label: "NDA submitted", date: "2025-11-24" },
      { label: "Filing accepted", date: "2026-01-23" },
      { label: "Mid-cycle review", date: "2026-05-12" },
      { label: "PDUFA action date", date: "2026-09-28", key: true },
    ],
    events: [
      { date: "2026-08-04", text: "Draft labeling comments returned to division" },
      { date: "2026-07-18", text: "Late-cycle meeting held — no AdCom planned" },
      { date: "2026-05-12", text: "Mid-cycle communication: review on schedule" },
    ],
  },
  {
    code: "ATH-207",
    indication: "IgA nephropathy",
    modality: "Targeted biologic",
    phase: "Phase 2b",
    submission: "Pre-Phase 3 (EOP2)",
    status: "watch",
    statusNote: "CMC information request open; EOP2 meeting scheduled.",
    nextMilestone: { label: "End-of-Phase-2 meeting", date: "2026-10-15", key: true },
    milestones: [
      { label: "Ph2b topline readout", date: "2026-04-02" },
      { label: "EOP2 meeting request", date: "2026-06-20" },
      { label: "End-of-Phase-2 meeting", date: "2026-10-15", key: true },
      { label: "Phase 3 first patient in", date: "2027-03-15" },
    ],
    events: [
      { date: "2026-08-11", text: "CMC information request received — response due 10 Sep" },
      { date: "2026-07-02", text: "EOP2 meeting granted, briefing book in preparation" },
    ],
  },
  {
    code: "ATH-330",
    indication: "Moderate-to-severe psoriasis",
    modality: "IL-targeted biologic",
    phase: "Phase 3",
    submission: "BLA planned",
    status: "on-track",
    statusNote: "Both Phase 3 trials met primary endpoints; BLA on schedule.",
    nextMilestone: { label: "BLA submission", date: "2027-04-30", key: true },
    milestones: [
      { label: "Ph3 second readout", date: "2026-06-18" },
      { label: "Pre-BLA meeting", date: "2026-11-10" },
      { label: "BLA submission", date: "2027-04-30", key: true },
    ],
    events: [
      { date: "2026-07-25", text: "Pre-BLA meeting request submitted" },
      { date: "2026-06-18", text: "Second pivotal readout: co-primary endpoints met" },
    ],
  },
  {
    code: "ATH-042",
    indication: "Chronic heart failure (label expansion)",
    modality: "Approved small molecule",
    phase: "Marketed",
    submission: "sNDA under review",
    status: "at-risk",
    statusNote: "AdCom scheduled; division raised post-hoc subgroup questions.",
    nextMilestone: { label: "Advisory committee", date: "2026-11-05", key: true },
    milestones: [
      { label: "sNDA submitted", date: "2026-02-14" },
      { label: "AdCom announced", date: "2026-07-08" },
      { label: "Advisory committee", date: "2026-11-05", key: true },
      { label: "PDUFA action date", date: "2027-02-14", key: true },
    ],
    events: [
      { date: "2026-08-09", text: "Briefing materials due to division 24 Sep" },
      { date: "2026-07-08", text: "CRDAC advisory committee scheduled for 05 Nov" },
      { date: "2026-06-30", text: "Information request: subgroup analyses by baseline EF" },
    ],
  },
  {
    code: "ATH-114",
    indication: "Acute myeloid leukemia",
    modality: "Menin inhibitor",
    phase: "Phase 1",
    submission: "IND active",
    status: "on-track",
    statusNote: "Dose escalation proceeding; no clinical holds.",
    nextMilestone: { label: "Dose-escalation data", date: "2026-12-08", key: true },
    milestones: [
      { label: "IND cleared", date: "2025-09-30" },
      { label: "First patient dosed", date: "2026-01-12" },
      { label: "Dose-escalation data", date: "2026-12-08", key: true },
    ],
    events: [
      { date: "2026-07-29", text: "Cohort 4 cleared by safety review committee" },
    ],
  },
  {
    code: "ATH-518",
    indication: "Friedreich's ataxia",
    modality: "Gene therapy",
    phase: "Phase 3",
    submission: "Pivotal ongoing",
    status: "on-track",
    statusNote: "RMAT designation granted; enrollment complete.",
    nextMilestone: { label: "Pivotal readout", date: "2027-03-22", key: true },
    milestones: [
      { label: "RMAT granted", date: "2025-12-15" },
      { label: "Enrollment complete", date: "2026-05-30" },
      { label: "Pivotal readout", date: "2027-03-22", key: true },
    ],
    events: [
      { date: "2026-08-01", text: "Type B CMC meeting minutes received" },
      { date: "2026-05-30", text: "Last patient enrolled in pivotal study" },
    ],
  },
];

export function daysUntil(iso: string, from: string = AS_OF): number {
  return Math.round(
    (new Date(iso).getTime() - new Date(from).getTime()) / 86400000
  );
}

export function fmtDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
