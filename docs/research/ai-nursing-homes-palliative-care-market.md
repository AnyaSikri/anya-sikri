# Market Research: AI Solutions for Nursing Homes & Palliative Care

*Research date: August 2026*

## Executive Summary

AI in aging and elderly care is a fast-growing market — projected to grow from roughly $54B (2025) to $68B (2026) at ~24% CAGR. The market has matured past pilots: nearly every major long-term-care EHR now ships embedded AI, and a dense ecosystem of point solutions covers fall detection, predictive clinical analytics, documentation, staffing, end-of-life prognostication, advance care planning, and companionship. The dominant 2026 trend is consolidation of standalone point solutions into EHR-native features (PointClickCare, MatrixCare, Netsmart, WellSky, Homecare Homebase).

## Market Segments & Key Players

### 1. Fall Detection & Prevention (largest sensor-based segment)

| Company | Approach | Notes |
|---|---|---|
| **SafelyYou** | Edge-processed camera AI | Leader in memory care/assisted living; detects and confirms falls with video review, footage processed on-device for privacy |
| **Vayyar Care** | 4D imaging radar (camera-free) | Works in darkness/steam; also monitors occupancy and vitals; consumer channel via Alexa Together |
| **VirtuSense** | Machine vision | VSTAlert predicts bed exits 30–65 seconds in advance; VSTBalance does 2-minute AI gait/balance fall-risk assessments; used in hundreds of SNFs |
| **CarePredict** | Wearable + predictive analytics | Tracks activities of daily living to flag decline |

### 2. Predictive Clinical Analytics (EHR-driven early warning)

- **Saiva AI** — Evaluates thousands of daily clinical/medication signals per facility to surface the ~15 residents most at risk of decline or unplanned hospital transfer within 72 hours. Facility-specific models trained on the site's own EHR data; integrates with MatrixCare and PointClickCare.
- **Real Time Medical Systems** — Live EHR-data interventional analytics for SNFs (readmission reduction, infection surveillance).
- **Sensi.AI** — Audio-based "virtual care agent" for in-home/senior care; detects 100+ insight types (early pneumonia, UTIs, cognitive changes, falls, care resistance). ~$98M raised (Series C $45M, 2025–26 timeframe; Insight Partners, Entree, Flint).

### 3. Clinical Documentation & Administrative AI (most active category)

EHR-embedded:
- **PointClickCare** — Chart Advisor (AI documentation) and Referral Advisor (Jan 2026) for referral intake with instant clinical/financial insight.
- **Netsmart Bells AI** — Ambient listening, automated therapy notes, quality coaching for LTPAC; claims up to 50% documentation-time reduction.
- **MatrixCare CareAssist** — LTC documentation assistant inside MatrixCare.
- **Homecare Homebase Curate: Scribe** (Mar 2026) and **WellSky Scribe** (late 2025) — embedded scribes in the two dominant hospice/home-health EMRs.

Standalone/overlay:
- **Twofold** (AI scribe for SNF notes, no recording required), **Skypoint Scribe** (multi-platform LTC overlay), **Lime Health** (hospice documentation), **Oler Health** (MDS/PDPM coding support — reviews hospital records and EMR to support reimbursement and quality-measure accuracy).

Compliance caveat: no vendor recommends fully autonomous MDS/PDPM coding — suggested codes carry billing and license exposure and still require clinician/certified-coder review.

### 4. End-of-Life Prognostication & Hospice Analytics

- **Medalogix Muse** — The category leader. ML on 800+ hospice assessment data points to predict, with ~97% claimed accuracy, patients likely to die within 7–12 days, triggering intensified visit schedules. Users report >50% increase in final-week home visits. Widely deployed (AccentCare and many others).
- **Acclivity Health** — Cloud analytics/AI platform that segments populations and predicts prognosis (~95% claimed accuracy) to identify palliative/hospice-appropriate patients; HITRUST-certified, works with CMS value-based programs; outcomes include longer hospice length of stay and lower ED/hospital utilization.
- Academic/health-system tools (e.g., mortality-prediction models integrating unstructured notes and wearables) are an active research frontier, but systematic reviews flag weak real-world validation and transparency as open concerns for end-of-life deployment.

### 5. Advance Care Planning & Goals-of-Care

- **Koda Health** — AI-guided patient decision platform for advance care planning at scale (condition-specific education, documented values/proxies/preferences). Validated results: 79% reduction in terminal hospitalizations, 38% lower ICU utilization, 19% lower total cost of care. Series A from UPMC Enterprises (April 2026); partnership with Guidehealth.
- **Vynca** — Advance care planning + palliative care management platform (ACP documentation integrated into EHRs).

### 6. Companionship & Social AI

- **ElliQ (Intuition Robotics)** — Proactive voice companion robot; New York State Office for the Aging reported 95% loneliness reduction among sustained users; state programs in NY, FL, NJ distribute units free. ~$600–1,000/year privately.
- General-purpose AI companions are increasingly used by older adults, raising engagement-vs-dependency questions covered widely in 2026 press.

### 7. Workforce & Staffing AI

- **IntelyCare** — AI-matched flexible nurse staffing for post-acute; acquired CareRev (Jan 2026), signaling platform consolidation across acute and post-acute.
- **ShiftKey** — Credential-based shift marketplace for LTC.
- **OnShift** — Scheduling, labor management, and compliance for senior care.

### 8. Remote Patient Monitoring (hospice/palliative-adjacent)

- Telehospice platforms combine video, RPM devices, and AI analytics to anticipate symptom flare-ups; wearables/smart patches track vitals, pain proxies, and mobility continuously.
- Cross-market RPM leaders: **TimeDoc Health**, **VitalTech** (VitalCare), **HealthSnap** — general chronic-care platforms increasingly applied to serious-illness populations.

## Key Market Dynamics (2026)

1. **EHR-native AI is winning.** Vendors like PointClickCare, Netsmart, MatrixCare, WellSky, and HCHB shipping embedded scribes/advisors compresses the space for standalone documentation startups.
2. **Prognostication is the most differentiated palliative-care niche.** Muse and Acclivity have proven models; clinical-decision support for symptom management is the "advancing frontier" per Hospice News (March 2026).
3. **Privacy-preserving sensing is a selling point.** Radar (Vayyar) and audio (Sensi) position explicitly against cameras; SafelyYou counters with edge processing and no stored footage.
4. **Workforce shortage is the demand driver.** Nearly every vendor pitch centers on doing more with fewer staff — documentation time, predictive staffing, early-warning triage.
5. **Validation gap.** Peer-reviewed scoping reviews (JPSM 2025) note that real-world validation, transparency, and reproducibility of palliative AI tools remain largely unexamined — a risk and an opportunity for evidence-first entrants.
6. **Value-based care alignment.** Tools that reduce hospitalizations/ICU use (Koda, Acclivity, Saiva) monetize through shared savings and CMS programs, not just SaaS fees.

## Gaps / Whitespace Observations

- Palliative-specific **symptom-management decision support** is early; most deployed AI is prognostic or administrative.
- **Family communication and bereavement support** is largely unaddressed by AI vendors.
- Few tools bridge **nursing home ↔ hospice transitions** (identifying residents who should shift to comfort-focused care); Acclivity is closest but is ACO/payer-oriented.
- Multilingual and culturally-adapted goals-of-care tools are scarce.

## Sources

- [The Business Research Company — AI in Aging & Elderly Care Market 2026–2030](https://www.thebusinessresearchcompany.com/report/artificial-intelligence-ai-in-aging-and-elderly-care-global-market-report)
- [IntuitionLabs — AI Documentation for Skilled Nursing Facilities](https://intuitionlabs.ai/articles/ai-documentation-skilled-nursing-facilities)
- [Hospice News — Clinical Decision Support an Advancing Frontier for Palliative AI (Mar 2026)](https://hospicenews.com/2026/03/13/clinical-decision-support-an-advancing-frontier-for-palliative-ai/)
- [JPSM — AI in Palliative Care: Scoping Review of Foundational Gaps (2025)](https://www.jpsmjournal.com/article/S0885-3924(25)00783-3/abstract)
- [AAHPM Quarterly — The Role for AI in Hospice and Palliative Care (Fall 2025)](https://aahpm.org/publications/aahpm-quarterly/issue-archive/fall-2025/the-role-for-ai-in-hospice-and-palliative-care/)
- [SafelyYou](https://www.safely-you.com/) · [Vayyar Care](https://vayyar.com/care-docs/b2c/) · [VirtuSense VSTAlert](https://www.virtusense.ai/products/vstalert) · [VSTBalance](https://www.virtusense.ai/products/vstbalance)
- [Saiva AI](https://saiva.ai/) · [Saiva × MatrixCare partnership](https://www.matrixcare.com/partner-marketplace/saiva-ai/)
- [Medalogix Muse — Data-Driven Care Decisions at End-of-Life](https://medalogix.com/data-driven-care-decisions/) · [HCHB — Hospice Predictive Analytics](https://hchb.com/hospice-predictive-analytics-a-game-changer-for-end-of-life-care/)
- [Acclivity Health platform overview (CGM marketplace)](https://www.cgm.com/usa_en/products/third-party-marketplace/acclivity-health.html)
- [HIT Consultant — Koda Health Secures UPMC Enterprises Investment (Apr 2026)](https://hitconsultant.net/2026/04/28/koda-health-upmc-enterprises-ai-advance-care-planning/) · [Fierce Healthcare — Guidehealth × Koda Health](https://www.fiercehealthcare.com/providers/guidehealth-teams-koda-health-ease-end-life-care-planning-patients-and-providers)
- [ElliQ](https://elliq.com/) · [NYSOFA — 95% loneliness reduction](https://aging.ny.gov/news/nysofas-rollout-ai-companion-robot-elliq-shows-95-reduction-loneliness)
- [Netsmart Bells AI](https://www.ntst.com/carefabric/careguidance-solutions/ai-documentation-assistant)
- [Sensi.AI Series B (Insight Partners)](https://www.insightpartners.com/ideas/sensi-ai-raises-31m-in-series-b-funding-to-advance-senior-care-intelligence-for-home-care-agencies/) · [Sensi.AI Series C (Ctech)](https://www.calcalistech.com/ctechnews/article/hyawomspex)
- [Nurse.org — IntelyCare acquires CareRev](https://nurse.org/news/intelycare-carerev-acquisition-nurses/)
- [McKnight's — Nursing homes and AI: what's in use, what's not](https://www.mcknights.com/news/nursing-homes-and-ai-whats-in-use-whats-not-and-how-to-decide/)
- [Hospice News — 3 Key Hospice Technology Trends (Jan 2025)](https://hospicenews.com/2025/01/31/3-key-hospice-technology-trends/)
- [AllSeniors — Innovations in Hospice Care: AI and Remote Monitoring in 2026](https://allseniors.org/articles/innovations-in-hospice-care-ai-and-remote-monitoring-in-2026/)
