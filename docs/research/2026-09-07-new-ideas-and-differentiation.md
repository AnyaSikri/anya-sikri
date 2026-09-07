# New Ideas — and How to Make Each One Unique

**Date:** September 7, 2026
**Companion to:** `2026-09-07-recent-investments-and-ideas.md` (deal list + first nine theses)
**Rule for this doc:** no idea repeated from the first memo. Every idea carries a named
competitor and a specific reason it isn't already taken.

---

## 0. Where uniqueness actually comes from

"Differentiation" in healthcare AI is almost never the model. Assume any model advantage has an
18-month half-life — ambient scribes went from novel to table stakes in about 24 months. There are
only six durable sources of difference, and a good idea should stack at least two:

| Lever | What it means | The test |
|---|---|---|
| **1. Proprietary data loop** | The product generates data as it runs that no one can buy, and the data makes the product better | *If a competitor raised $100M tomorrow, what could they still not buy?* |
| **2. Regulated position** | You hold a license, a certification, a code, or a legal obligation others must route through | *What breaks for the customer legally if they switch?* |
| **3. Liability transfer** | You are contractually accountable for a result — and you priced the risk | *Can you say "we pay if it's wrong" and survive?* |
| **4. Unserved buyer** | You sell to someone with budget and pain whom the category ignores | *Who signs, and why has no one called them?* |
| **5. Normative authority** | You define the standard/benchmark/protocol others are measured against | *Would a regulator or a court cite you?* |
| **6. Owned operations** | You run the clinic, the site, the lab, the fleet — not software about it | *Do you control the atoms or just the dashboard?* |

The failure mode to avoid: **"AI for X" where X is a workflow.** That's a feature, and 45% of 2026
capital going to 8% of deals means the Series A bar is *higher*, not lower. Every idea below is
scored against these levers.

---

## 1. Site-specific continuous evaluation for deployed clinical AI

**Idea.** Not "does this model work?" but "does this model work **here, this month, on our
patients**." A silent-shadow evaluation layer that runs alongside every deployed clinical AI,
harvests delayed ground truth from the EHR (the outcome shows up weeks later), and reports
site-level performance drift per vendor, per unit, per patient subgroup.

**Who's close.** Public benchmarks — Mass General Brigham's **BRIDGE**, **HealthBench Professional**
(Corti's Symphony reportedly beat OpenAI on it), and the Stanford–Harvard **ARISE** network. All of
them answer the *general* question. None answers the local one, and the local one is what a Chief AI
Officer is actually fired over.

**How to make it unique:**
- **Levers 1 + 5.** Public benchmarks are a commons; you can't own one. What you can own is the
  **cross-site performance ledger** — the only dataset in existence showing how each vendor's model
  performs across 200 real deployments, by subgroup. That is unbuyable and compounds per install.
- Sell the *inverse* product to the vendors: "you're at the 30th percentile in community hospitals
  under 200 beds" is worth more to the vendor than to the hospital, and they'll pay to be measured
  because their competitors are.
- Refuse to be a dashboard. Sit in the inference path, in silent mode, before go-live — become the
  gate that a deployment must pass, and you're in the procurement process forever.

**90-day proof:** get two health systems to let you shadow one *already-purchased* scribe or
sepsis model, and show a subgroup performance gap they didn't know about. If you can't find a gap,
the thesis is dead and you learned it for $0.

---

## 2. Performance warranties for clinical AI (the insurance layer)

**Idea.** The financial product that sits on top of #1: warrant an AI vendor's clinical or financial
performance. If the coding agent's accuracy falls below X, or the denial rate rises above Y, the
policy pays. Sold to the health system; underwritten on the evaluation data.

**Who's close.** Nobody credible, because nobody has the loss data. Malpractice carriers are
actively worried about AI exposure and have no way to price it.

**How to make it unique:**
- **Levers 1 + 3 + 4.** The unserved buyer is the **carrier**, not the CIO. A carrier that can price
  agent risk will *require* instrumentation from its insureds — that's the distribution channel
  everyone else is trying to buy through an IT budget.
- The moat is sequencing: #1 for two years produces the actuarial table, and the actuarial table is
  the only thing that makes #2 possible. A competitor starting at #2 has to survive the losses to
  learn the pricing.
- Structure it as an MGA on someone else's paper first. Do not raise venture money to hold risk.

**Kill criterion:** if you can't get one reinsurer to look at a loss model on synthetic data within
six months, it's a 2030 business.

---

## 3. Fiduciary audit for self-funded employers

**Idea.** Continuous audit of what a self-funded employer's TPA is actually paying, cross-referenced
against published negotiated rates and the plan's own claims — packaged as the evidence file a plan
fiduciary needs to prove they discharged their duty.

**Who's close.** **Turquoise Health**, **Payerset**, **HiLabs**, RightCostIQ — all normalizing
machine-readable files. They sell to **hospitals and payers**, for negotiation leverage. Note that
CY2026 OPPS materially expanded the disclosure requirements and roughly *one in five* hospitals is
fully compliant.

**How to make it unique:**
- **Levers 2 + 4.** Same data, opposite side of the table, different emotion. Hospitals buy price
  transparency to negotiate — an ROI conversation that dies in procurement. Employers buy it because
  **ERISA fiduciary exposure is now being litigated**, and their benefits committee and outside
  counsel need a defensible record. Legal deadlines close; ROI decks don't.
- The unique asset isn't the MRF corpus (that's public). It's the **join** — this employer's actual
  claims against the rates their TPA said were available — plus a repeatable, court-legible
  methodology. Get the methodology reviewed by an ERISA firm and let *them* distribute it.
- Deliverable is a signed report, not a login. Annual, recurring, and it grows with headcount.

**Watch out:** TPAs control the data feed and will resist. Underwrite whether the founder can get
claims files without the TPA's blessing.

---

## 4. A regulatory submission compiler that lives in CI

**Idea.** Not a chatbot over FDA guidance. A build system: every training run of an AI/SaMD product
emits the traceability matrix, verification evidence, algorithm change protocol, and predicate
comparison as **build artifacts**, versioned with the code. `git tag v2.1` produces a submission
package.

**Who's close.** "Regulatory copilot" consultancies, private LLMs trained on a medtech company's
design history files, and Innolitics-style advisory. Everyone has built retrieval over guidance
documents. Nobody has made the artifact a build output.

**How to make it unique:**
- **Levers 1 + 2.** Build a **structured precedent graph** by parsing every 510(k) summary, De Novo
  decision and the AI/ML-enabled device list into machine-readable predicates, endpoints, and
  review questions. It's public data that nobody has assembled properly — the classic "public but
  unstructured" moat, and it compounds every quarter FDA publishes.
- Being *inside CI* is the switching cost. A copilot is a tab; a build step is infrastructure. Once
  a company's quality system depends on your artifact format, replacing you is a QMS change.
- Wedge product before the compiler: **PCCP monitoring** — the change-control plan is a new,
  poorly-tooled obligation with recurring pain, and it drags you into the customer's pipeline.

**Note for you specifically:** this is the closest commercial form of the regulatory-intelligence
prototype already in this repo, and the one with the clearest technical proof-of-life.

---

## 5. A community trial network run as an operating company

**Idea.** Own community oncology and specialty sites as clinical trial infrastructure. Every visit
becomes a screening event via an EHR-embedded agent; sites are pre-papered with master agreements
so a sponsor can activate in weeks, not quarters.

**Who's close.** Software-only trial-matching companies (many, all struggling to prove enrollment
lift) and the big CROs (built for big-pharma budgets).

**How to make it unique:**
- **Lever 6 first, then 1.** Software that recommends patients to sites is a vitamin. Owning or
  exclusively contracting the sites means you control access, and access is what sponsors pay for.
  This is the same structural insight as Allia Health's clinically-integrated-group model, pointed
  at research instead of care.
- If Atlas Discovery's thesis holds — that programs below ~$150M expected revenue never get funded
  because knowledge work is the fixed cost — then a wave of small-indication programs is coming and
  **none of them can afford a traditional CRO.** Price per enrolled patient, not per FTE.
- The compounding asset: a record of *which protocol designs actually enrol where*. Sponsors would
  pay for that at protocol-design time, before they've chosen a CRO. That's the second product.

---

## 6. Deprescribing as a paid clinical service

**Idea.** Everyone is building to *start* patients on drugs. Nobody owns *stopping*. A
pharmacist-led, prescriber-signed service that removes low-value and harmful medications from
polypharmacy patients, paid as a share of verified drug-spend reduction.

**Who's close.** Nobody, at venture scale. Medication therapy management exists inside PBMs as a
compliance checkbox. 9amHealth is expanding toward the chronic conditions behind up to 70% of
employer pharmacy spend — from the *initiation* side.

**How to make it unique:**
- **Levers 3 + 2.** The barrier to stopping a drug has never been knowing which one — the geriatrics
  literature has told us for twenty years. It's **liability and authority**: who signs, who's
  responsible if the patient decompensates. The company that solves the medico-legal wrapper owns
  the category, and the model is the least interesting part.
- Build a **validated stop-protocol library** with outcomes attached — the proprietary asset is the
  evidence that stopping was safe in *n* patients like this one, which is exactly what a prescriber
  needs to sign and a plan needs to pay.
- Contract on measured net drug spend with a safety guarantee (no increase in hospitalization).
  Nobody else in pharmacy will sign that, because nobody else has the outcome data.

**Adjacent, same company:** GLP-1 taper and maintenance. A very large cohort is coming off these
drugs and the regain is predictable and unmanaged.

---

## 7. Compliance rails for the cash-pay peptide/longevity market

**Idea.** Not another consumer brand. The **rails** under the hundreds of them: prescriber network,
prescription and product provenance, lab loop, identity, and structured adverse-event capture —
licensed per transaction.

**Who's close.** Consumer brands competing on funnel and price; compounding pharmacies; YC's
**Illume Labs** on the consumer insight side. All of them are buyers, not competitors.

**How to make it unique:**
- **Levers 2 + 5.** This market is growing much faster than any safety infrastructure around it, and
  regulatory attention is a matter of when. Whoever is already collecting structured adverse events
  when the enforcement wave lands becomes **the standard the regulator points at** — and the vendor
  every brand must buy to keep operating.
- Neutral infrastructure beats a brand here: brands churn, rails accumulate. Every additional brand
  makes the safety signal denser (network effect on the data, not the users).
- Pairs directly with pharmacovigilance work — same primitives, and the registry has independent
  value to any manufacturer trying to defend a product.

---

## 8. Medicaid and duals operating infrastructure

**Idea.** The redetermination churn, HCBS authorization, waiver administration and eligibility
plumbing for the largest, least-served population in American healthcare. Buyer: states and their
managed care organizations.

**Who's close.** Legacy government contractors. Essentially no venture-backed AI-native competition,
because founders find state procurement unglamorous.

**How to make it unique:**
- **Levers 2 + 4.** The barrier *is* the moat. Winning one state contract produces integration,
  security certification and past-performance credentials that a better-funded competitor cannot
  shortcut — public procurement rewards incumbency in a way commercial healthcare doesn't.
- Land with the MCOs in a state (faster sales cycle, same integrations), then use their reference to
  win the state itself. Reverse of how everyone approaches gov-tech.
- Margin structure is unglamorous and that's the point: nobody is bidding your price up.

**Real risk:** policy whiplash on eligibility rules can reset the product. Underwrite whether the
team has lived through a state rule change.

---

## 9. Determination intelligence — disability, workers' comp, med-legal

**Idea.** The medical record's other economy: Social Security disability, workers' compensation,
personal injury, long-term disability. Every one is a slow, adversarial, evidence-heavy
determination made by humans reading records.

**Who's close.** YC's **Docura Health** (medical-legal documentation) and **Hubble** (records
retrieval API) are building the inputs. Nobody owns the determination itself.

**How to make it unique:**
- **Levers 1 + 3.** ALJ and appellate decisions are public and largely unstructured. Pair them with
  the medical evidence that produced them and you have a **decision-outcome corpus nobody else has
  assembled** — the only basis for actually predicting a determination rather than summarizing a
  chart.
- Then price on outcome: paid per successful determination, not per document processed. Law firms
  and claimant advocates already work on contingency, so the business model is native to the buyer.
- Note this is a rare healthcare data business with a **clean, dated, adjudicated ground-truth
  label** — the same property that makes pharmacovigilance attractive.

---

## 10. Consent, provenance and indemnity rails for clinical data licensing

**Idea.** Health systems want a new revenue line; model builders want licensed clinical data;
neither can transact safely. Be the escrow: consent ledger, de-identification attestation, lineage
tracking, and an indemnity the buyer can actually rely on. Take a rake.

**Who's close.** Data brokers with opaque provenance, and one-off system-to-vendor deals negotiated
by general counsel over months.

**How to make it unique:**
- **Levers 2 + 5.** The product isn't the data, it's the **attestation** — the artifact that lets a
  buyer's counsel approve the purchase and a seller's board approve the sale. Whoever writes the
  first credible attestation standard becomes the clearing house.
- The consent ledger compounds: each patient authorization is a durable asset that makes future
  transactions cheaper, and it's the only defensible answer when the rules tighten.
- Sits precisely in the "data foundation" layer of Define's House of Healthcare framework — the
  layer everyone agrees is necessary and nobody wants to build.

---

## 11. Wildcard: compliance-shaped inference routing

**Idea.** A HIPAA-grade inference broker — model routing, BAA coverage, residency guarantees,
prompt/response audit, and cost arbitrage — for health organizations that cannot send PHI to
arbitrary endpoints. YC's RFS explicitly calls for *Inference Chips for Agent Workflows* and
*Software for Agents*; the healthcare version is a compliance problem wearing an infrastructure
costume.

**How to make it unique:** compete on **legal shape, not price**. Generic routers (OpenRouter and
friends) compete on cents per million tokens and will always be cheaper. You win by being the only
endpoint a health system's privacy officer has already approved — and by producing the audit record
that #1 and #4 above need as an input. Three of these ideas share one substrate; that's a portfolio,
not a coincidence.

---

## 12. How to kill any of these in two weeks

Before writing a memo, run all three:

1. **The buyer call.** Five conversations with the *actual signer* (not a user). If you cannot get a
   meeting from a cold ask, the pain is not acute — in this market, acute pain answers email.
2. **The unbuyable test.** Write one sentence: "Even with $100M, a competitor could not get ___."
   If the blank is "our model" or "our UI," stop.
3. **The Series A story.** At $3–5M ARR, what is the narrative and who is the obvious lead? With 45%
   of capital in 8% of deals, a company that can't answer this raises a seed and then dies quietly
   eighteen months later.

And the standing filter from the first memo, unchanged: **does it own a result, or add a feature?**

---

## Sources

- Price transparency / MRF landscape — [Payerset](https://payerset.com/), [HiLabs](https://www.hilabs.com/blog/price-transparency-payer-contract-negotiation), [Gigasheet on CY2026 changes](https://www.gigasheet.com/post/hospital-price-transparency-changes-for-2026)
- Clinical AI evaluation — [ARISE (Stanford–Harvard)](https://www.arise-ai.org/report), [Mass General Brigham BRIDGE](https://www.massgeneralbrigham.org/en/about/newsroom/press-releases/evaluating-ai-performance-for-everyday-patient-care), [Corti / HealthBench Professional](https://www.prnewswire.com/news-releases/corti-steps-up-its-support-for-the-next-wave-of-healthcare-startups-as-openai-pushes-into-the-space-and-others-retreat-from-europe-302771088.html)
- SaMD regulatory pathway and cost structure — [IntuitionLabs FDA AI/ML SaMD guide](https://intuitionlabs.ai/articles/fda-ai-ml-samd-guidance-compliance), [Innolitics on AI SaMD fundraising](https://innolitics.com/articles/ai-samd-fundraising/)
- AI-native services roll-ups in post-acute — [Adaptive Innovations $60M](https://alleywatch.com/2026/06/ai-native-home-health-operations-management-platform/), [MarketScale on 2026 home health / workforce AI](https://www.marketscale.com/industries/healthcare/health-tech-ai-investment-is-accelerating-into-chronic-care-home-health-and-workforce-training-in-2026)
- Market concentration and megadeal share — [Rock Health H1 2026](https://rockhealth.com/insights/h1-2026-funding-and-market-overview-durable-roots-shifting-routes/), [Fierce Healthcare](https://www.fiercehealthcare.com/digital-health/digital-health-brought-74b-vc-funding-ai-powered-rebound-fuels-market)
- YC S26 batch, RFS and companies referenced — [Forbes on YC S26](https://www.forbes.com/sites/dariashunina/2026/09/03/meet-the-yc-startups-betting-on-what-comes-next/), [Atlas Discovery](https://www.ycombinator.com/companies/atlas-discovery), [Allia Health](https://www.ycombinator.com/companies/allia-health), [YC Summer 2026 RFS](https://www.vccafe.com/2026/04/28/requests-for-startups-summer-2026-edition/)
