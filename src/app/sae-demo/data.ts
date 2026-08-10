// ========================================
// SAE DEMO — 100% SYNTHETIC DATA
// Every value here is invented for the demo. No real study, site,
// patient, or narrative content appears anywhere in this file.
// ========================================

export interface DemoField {
  label: string;
  value: string | null;
  // provenance: dataset.column the value was looked up from (deterministic)
  prov?: string;
  // flag reason: field left blank for human entry
  flag?: string;
}

export interface DemoSection {
  id: string;
  title: string;
  tint: "lav" | "mint" | "peach" | "sky" | "sun";
  fields: DemoField[];
}

export interface DemoCase {
  subject: string;
  summary: string;
  event: string;
  grade: string;
  narrative: string;
  sections: DemoSection[];
}

export const STUDY_ID = "DEMO-4201-001";

export const demoCases: DemoCase[] = [
  {
    subject: "1001-004",
    summary: "Male, 57 · Seizure · Grade 3 · Hospitalized · Recovered",
    event: "Seizure",
    grade: "Grade 3 (Severe)",
    narrative:
      "Subject 1001-004 is a 57-year-old male enrolled in study DEMO-4201-001 who began Study Drug A 200 mg twice daily on 02 Jan 2026. His medical history is notable for hypertension; he had no prior history of seizure disorder. On 14 Mar 2026 (study day 72), the subject experienced a witnessed generalized tonic-clonic seizure lasting approximately two minutes and was transported to the emergency department, where he was admitted for observation. The event was assessed as Grade 3 (severe) and serious due to hospitalization. Study drug was interrupted on the day of onset. Treatment included levetiracetam 500 mg twice daily initiated on 14 Mar 2026. Neurological workup, including MRI and EEG, revealed no structural abnormality. The event resolved on 16 Mar 2026 and the subject was discharged in stable condition. The investigator assessed the event as not related to study drug, citing a plausible alternative etiology under evaluation. Study drug was resumed at the same dose on 20 Mar 2026 without recurrence as of the report date.",
    sections: [
      {
        id: "header",
        title: "Header",
        tint: "lav",
        fields: [
          { label: "Study", value: STUDY_ID, prov: "config.study" },
          { label: "Patient ID", value: "1001-004", prov: "ae.Subject" },
          {
            label: "Country",
            value: null,
            flag: "No country column exists in the dataset package",
          },
          {
            label: "Report Type / Follow-up #",
            value: "Initial report",
            prov: "derived.report_type",
          },
          { label: "Report Date", value: "18 Mar 2026", prov: "run.date" },
        ],
      },
      {
        id: "sectionA",
        title: "Section A — Serious Adverse Event",
        tint: "peach",
        fields: [
          { label: "SAE Term (coded PT)", value: "Seizure", prov: "ae.AETERM_PT" },
          { label: "Reason Serious — Death", value: "No", prov: "ae.AESDTH" },
          {
            label: "Reason Serious — Life-threatening",
            value: "No",
            prov: "ae.AESLIFE",
          },
          {
            label: "Reason Serious — Hospitalization",
            value: "Yes",
            prov: "ae.AESHOSP",
          },
          { label: "CTCAE Grade", value: "Grade 3 (Severe)", prov: "ae.AETOXGR" },
          { label: "SAE Start Date", value: "14 Mar 2026", prov: "ae.AESTDAT" },
          { label: "SAE End Date", value: "16 Mar 2026", prov: "ae.AEENDAT" },
          {
            label: "Outcome",
            value: "Recovered / Resolved",
            prov: "ae.AEOUT",
          },
          {
            label: "Relationship to Study Drug",
            value: "Not related (investigator)",
            prov: "ae.AEREL",
          },
          {
            label: "Hospital Admission / Discharge Dates",
            value: null,
            flag: "Only a yes/no hospitalization flag exists in the data",
          },
        ],
      },
      {
        id: "sectionC",
        title: "Section C — Patient",
        tint: "sky",
        fields: [
          { label: "Sex at Birth", value: "Male", prov: "dm.SEX" },
          { label: "Year of Birth", value: "1968", prov: "dm.BRTHYR" },
          {
            label: "Date of Birth (month/day)",
            value: null,
            flag: "Only birth year is collected in this study",
          },
          { label: "Age at Event", value: "57", prov: "dm.AGE" },
          {
            label: "Ethnicity",
            value: "Not Hispanic or Latino",
            prov: "dm.ETHNIC",
          },
          { label: "Race", value: "White", prov: "dm.RACE1–8" },
          {
            label: "Height / Weight",
            value: null,
            flag: "No vital signs dataset in this package",
          },
        ],
      },
      {
        id: "sectionD",
        title: "Section D/E — Study Drug & Dosing",
        tint: "mint",
        fields: [
          {
            label: "Suspect Drug",
            value: "Study Drug A (blinded)",
            prov: "ex.EXTRT",
          },
          { label: "Dose / Frequency", value: "200 mg BID", prov: "ex.EXDOSE" },
          { label: "First Dose Date", value: "02 Jan 2026", prov: "ex.EXSTDAT" },
          {
            label: "Action Taken",
            value: "Dose interrupted, resumed 20 Mar 2026",
            prov: "ae.AEACN",
          },
          {
            label: "Relevant Concomitant Medication",
            value: "Levetiracetam 500 mg BID (started 14 Mar 2026)",
            prov: "cm.CMTRT",
          },
          {
            label: "Relevant Medical History",
            value: "Hypertension; no prior seizure disorder",
            prov: "mh.MHTERM",
          },
        ],
      },
    ],
  },
  {
    subject: "1002-011",
    summary: "Female, 36 · Anaphylactic reaction · Grade 3 · Life-threatening · Recovered",
    event: "Anaphylactic reaction",
    grade: "Grade 3 (Severe)",
    narrative:
      "Subject 1002-011 is a 36-year-old female enrolled in study DEMO-4201-001 who received her first dose of Study Drug A 200 mg on 22 Apr 2026. Her medical history includes seasonal allergic rhinitis; she reported no known drug allergies at screening. Approximately 25 minutes after dose administration, the subject developed generalized urticaria, facial flushing, and progressive dyspnea with wheezing, accompanied by hypotension (BP 82/50 mmHg). The event was assessed as an anaphylactic reaction, Grade 3 (severe), and serious as life-threatening; the subject was hospitalized for monitoring. Treatment included intramuscular epinephrine 0.3 mg, intravenous diphenhydramine, and methylprednisolone, with rapid clinical improvement. Study drug was permanently withdrawn. The subject was discharged the following morning, 23 Apr 2026, with the event assessed as recovered/resolved. The investigator assessed the event as related to study drug. The subject was withdrawn from the study and referred for allergy evaluation.",
    sections: [
      {
        id: "header",
        title: "Header",
        tint: "lav",
        fields: [
          { label: "Study", value: STUDY_ID, prov: "config.study" },
          { label: "Patient ID", value: "1002-011", prov: "ae.Subject" },
          {
            label: "Country",
            value: null,
            flag: "No country column exists in the dataset package",
          },
          {
            label: "Report Type / Follow-up #",
            value: "Initial report",
            prov: "derived.report_type",
          },
          { label: "Report Date", value: "24 Apr 2026", prov: "run.date" },
        ],
      },
      {
        id: "sectionA",
        title: "Section A — Serious Adverse Event",
        tint: "peach",
        fields: [
          {
            label: "SAE Term (coded PT)",
            value: "Anaphylactic reaction",
            prov: "ae.AETERM_PT",
          },
          { label: "Reason Serious — Death", value: "No", prov: "ae.AESDTH" },
          {
            label: "Reason Serious — Life-threatening",
            value: "Yes",
            prov: "ae.AESLIFE",
          },
          {
            label: "Reason Serious — Hospitalization",
            value: "Yes",
            prov: "ae.AESHOSP",
          },
          { label: "CTCAE Grade", value: "Grade 3 (Severe)", prov: "ae.AETOXGR" },
          { label: "SAE Start Date", value: "22 Apr 2026", prov: "ae.AESTDAT" },
          { label: "SAE End Date", value: "23 Apr 2026", prov: "ae.AEENDAT" },
          {
            label: "Outcome",
            value: "Recovered / Resolved",
            prov: "ae.AEOUT",
          },
          {
            label: "Relationship to Study Drug",
            value: "Related (investigator)",
            prov: "ae.AEREL",
          },
          {
            label: "Hospital Admission / Discharge Dates",
            value: null,
            flag: "Only a yes/no hospitalization flag exists in the data",
          },
        ],
      },
      {
        id: "sectionC",
        title: "Section C — Patient",
        tint: "sky",
        fields: [
          { label: "Sex at Birth", value: "Female", prov: "dm.SEX" },
          { label: "Year of Birth", value: "1990", prov: "dm.BRTHYR" },
          {
            label: "Date of Birth (month/day)",
            value: null,
            flag: "Only birth year is collected in this study",
          },
          { label: "Age at Event", value: "36", prov: "dm.AGE" },
          {
            label: "Ethnicity",
            value: "Hispanic or Latino",
            prov: "dm.ETHNIC",
          },
          { label: "Race", value: "Asian", prov: "dm.RACE1–8" },
          {
            label: "Height / Weight",
            value: null,
            flag: "No vital signs dataset in this package",
          },
        ],
      },
      {
        id: "sectionD",
        title: "Section D/E — Study Drug & Dosing",
        tint: "mint",
        fields: [
          {
            label: "Suspect Drug",
            value: "Study Drug A (blinded)",
            prov: "ex.EXTRT",
          },
          { label: "Dose / Frequency", value: "200 mg single dose", prov: "ex.EXDOSE" },
          { label: "First Dose Date", value: "22 Apr 2026", prov: "ex.EXSTDAT" },
          {
            label: "Action Taken",
            value: "Drug permanently withdrawn",
            prov: "ae.AEACN",
          },
          {
            label: "Relevant Concomitant Medication",
            value: "Epinephrine IM, diphenhydramine IV, methylprednisolone IV",
            prov: "cm.CMTRT",
          },
          {
            label: "Relevant Medical History",
            value: "Seasonal allergic rhinitis; no known drug allergies",
            prov: "mh.MHTERM",
          },
        ],
      },
    ],
  },
];
