# Value and Profit — Scoring the Verticals on Money

**Date:** September 12, 2026
**Fourth in the series.** Adds the economics layer the vertical map was missing.

**Read the arithmetic, not the conclusions.** Every number below is an order-of-magnitude model
built from stated inputs, not a researched TAM. Published market-size reports for the same market
disagree by 3x (the RCM outsourcing market is variously $18.9B, $34B and $61.7B in 2025 depending
on who's selling the report), so I've anchored on physical denominators — how many buyers, how many
transactions, how many dollars flow through the artifact — and shown the multiplication so you can
swap inputs.

---

## 1. The four numbers, in order

Most "TAM slides" collapse these and are useless as a result.

| | Question | Typical failure |
|---|---|---|
| **Value created** | How many dollars of labor, leakage or risk does this remove, per year? | Counting the whole industry's revenue as the pie |
| **Value captured** | What share can you charge for? | Assuming you get more than 30% of it |
| **Profit** | What's left after inference, human QA, and delivery? | Modeling gross margin at demo accuracy |
| **Enterprise value** | What multiple does that profit earn? | Pricing a services business as software |

**Capture rule of thumb:** you get **10–30% of value you can prove**, and roughly **0% of value you
can't**. This is the single most useful line in this memo. An "efficiency" claim nobody measures
converts to zero pricing power; a dollar recovered on an invoice converts to 25–35%.

**The pricing ladder** — capture ceiling rises as you take on more accountability:

| Model | Typical capture | Who's using it |
|---|---|---|
| Seat license | 1–3% of the labor cost you displace | Most failed vertical SaaS |
| Usage / per-transaction | 5–10% | Ambient scribes |
| % of collections | **4–9%** | Outsourced medical billing, empirically |
| Share of savings / contingency | **25–35% of recovered dollars** | Denial recovery, tax credits |
| Own the P&L | 100% of the margin — but you paid 3–11x EBITDA for it | AI roll-ups |

**The margin-to-multiple table** — the same value pool becomes a wildly different company:

| Delivery shape | Gross margin | Revenue multiple |
|---|---|---|
| Labor-led services | 15–25% | 1–2x |
| Tech-enabled services | 50–65% | 3–6x |
| Software | 75–85% | 8–15x |

Confirmed in the RCM market specifically: lower-middle-market billing companies trade at **3–11x
EBITDA**, while **tech-enabled/AI-driven RCM platforms command 12–25x+**. GeBBS went at **17.2x**.
Two RCM companies with identical $2M EBITDA sold for **$7M and $14M** — the delta was net collection
rate (92% vs 96%), days in A/R (60 vs 38), client concentration, and whether the workflow was manual
or AI-augmented. That spread *is* the business model.

**The AI-specific margin trap:** inference is COGS and scales with usage; human-in-the-loop review is
COGS and scales with error rate. A vertical AI company at 94% accuracy with a mandatory human check
is a 45% gross margin services business wearing a SaaS price list. Model margin at the accuracy you
actually ship.

---

## 2. The verticals, with the math

### EMS — run-report capture + billing

**Denominators.** ~28M ambulance transports/year. Ambulance services industry revenue ~$22B (2025).
Outsourced billing runs **4–9% of collections**; specialized EMS billers report ~**5.5% average lift
in net collections**.

```
28M transports × ~$350 blended net collection   ≈ $9.8B collected annually
Billing fee pool at 6%                          ≈ $590M / year
Software-only alternative: $1.50/transport      ≈ $42M / year   ← the trap
```

**The lesson in one line:** selling software into EMS addresses a $42M pool; *doing the billing*
addresses a $590M pool. Same customers, same product, 14x the revenue — because the pricing model,
not the technology, sets the capture.

- **Revenue at 10% of the fee pool:** ~$59M. Gross margin 60–70% AI-native vs 35–40% for
  offshore-labor incumbents → **~$38M gross profit**.
- **Second pool:** the 5.5% collection lift on $9.8B is ~$540M of value created. Contract for
  25% of the lift on top of the base fee.
- **The actual profit engine is the arbitrage:** buy an EMS billing shop at $2M EBITDA / 5x = $10M.
  Take margin from 20% to 35%. Exit as a tech-enabled platform at 12–15x. That's a 4–6x on the
  multiple alone, before growth.
- **Score: highest absolute profit of anything on this list — but it needs debt, operators and
  5–7 years.** It is not a two-person company.

### SNF and home health assessments (MDS / OASIS)

**Denominators.** ~15,000 certified nursing homes, ~11,500 home health agencies = **~26,500 buyers**.
PDPM sets the Medicare Part A per-diem from five components, all driven by the MDS. CMS rewrote the
ICD-10→PDPM mappings for FY2026 and OIG is actively auditing upcoding.

```
100-bed SNF, ~15 Medicare Part A residents      ≈ 5,500 Part A days / year
Accuracy improvement of $20/day                 ≈ $110K / facility / year
Capture 25%                                     ≈ $27K ACV
1,500 facilities (10% of SNFs)                  ≈ $40M ARR
Add home health OASIS at similar economics      ≈ $70M ARR at 10% of both
```

- **Gross margin 75–85%** — this is the one genuinely software-shaped business on the list, because
  the artifact is structured, the ground truth is auditable, and no human has to sit in the loop for
  every case.
- **Channel is concentrated:** the top LTC chains cover a large share of those 15,000 buildings, so
  10% penetration is a handful of logos, not 1,500 sales cycles.
- **The critical framing risk:** with OIG auditing PDPM upcoding, a product sold as "increase your
  reimbursement" is a legal liability. Sell **accuracy plus audit defensibility** — the documentation
  that survives the review — and price off avoided clawbacks as well as captured revenue.
- **Score: best profit quality. Software margins, $27K ACV, 26,500 buyers, concentrated channel,
  fundable at seed without debt.** This is the one I'd start.

### AI-native RCM roll-up (general healthcare)

**Denominators.** Outsourced RCM somewhere between $19B and $62B depending on the report; ~70% of
health systems say they plan to expand outsourcing. R1 RCM went private at $8.9B; Waystar/Iodine at
$1.25B; EQT, KKR, Vista and Silver Lake are all active.

```
Acquire $10M revenue / $2M EBITDA firm at 5x    = $10M enterprise value
AI lifts EBITDA margin 20% → 35%                = $3.5M EBITDA
Exit at 12x as a tech-enabled platform          = $42M
```

- **Highest absolute dollars, lowest dollars-per-founder-hour.** You need acquisition financing, an
  M&A function, integration operators, and patience. Fine if you want to run a holdco; wrong if you
  want a product company.
- Note the sub-pattern almost nobody discusses: **buy the billing companies and run the automation
  inside them.** You own the customer relationship *and* the workflow, which is why the multiple
  re-rates.

### HCBS / IDD provider services

**Denominators.** Medicaid HCBS spending **$82.5B** (CY2021) across **2.5M users**; per-person cost
for the I/DD population ~**$48,900/year**. Provider agencies run 3–8% operating margins, worst
software in healthcare, and 2026 waiver cuts are squeezing them.

- **Value pool is enormous; capture is hard** — these agencies have no budget for software. The
  only way to monetize is to own the agency (roll-up) or price off compliance risk (EVV, audits).
- **Rate risk cuts both ways:** cuts force efficiency adoption but shrink the pool you're capturing
  from, and a state can change your unit economics with a bulletin.
- **Score: big pie, poor capture, high policy beta.** Good for a roll-up with state expertise, bad
  for a first company.

### Answer engine for a profession — the profit test nobody applies

OpenEvidence is worth ~$12B reaching ~40% of US physicians, and the thing to notice is **how it makes
money**: pharma advertising, not subscriptions. So the profit question for any vertical copy is not
"do these professionals want an answer engine," it's **"who wants to advertise to them, and what's
that budget?"**

| Profession | Advertiser exists? | Verdict |
|---|---|---|
| Veterinarians | Yes — Zoetis, Elanco, pet pharma and nutrition | **Strongest copy of the model** |
| Dentists | Yes — implant, aligner, materials manufacturers | Strong |
| Pharmacists | Yes — pharma, generics, wholesalers | Strong |
| Nurses / NPs | Weak — limited prescribing influence | Subscription only, smaller |
| Immigration attorneys, code officials, EHS | No | Subscription only; a $10–30M business, not a $12B one |

This single question separates a $12B outcome from a good $20M ARR company, and it takes ten minutes
to answer per vertical.

### Foundation model on a modality

Profit arrives through one of two doors, both slow and lumpy: **diagnostics reimbursement** (per-test
$500–3,000, gated by CPT/PLA coding and coverage — the bottleneck I flagged as its own business in
memo #1) or **pharma partnership milestones** (Superluminal's $60M round has NVIDIA and Eli Lilly on
it; Blank Bio's structure is an AI lab married to PacBio).

- **No meaningful revenue for 3–5 years**, binary outcomes, and the capital need is real.
- Expected value can be very high; variance is extreme. This is a portfolio bet, not a business plan.
- If you want the modality play with a revenue floor, sell the model to the **instrument vendor**
  rather than the patient — that's the PacBio-shaped deal, and it pays during development.

### Voice front desk

~32,000 US veterinary practices, ACV $10–30K, so a real pool. But: undifferentiated, crowded
(Assort at $120M is already scaling, Patientdesk.ai owns dental), telephony plus inference costs sit
in COGS, and competitors will price against you.

- **Gross margin 45–60% and falling.** Value created is genuine; value *captured* erodes to
  commodity pricing because switching costs are near zero.
- **Score: skip unless you have a channel** (a PIMS vendor, a corporate group, a franchise).

### Medicaid school-based claiming

~13,000 districts, contingency fees for claiming consultants typically 8–12%, districts chronically
under-claim. Value per district is real but I could not find a defensible national pool — **treat as
unsized and verify before it goes in any memo.** High margin, very unglamorous, essentially zero
competition, and the buyer is a district business office, which means slow procurement but almost no
churn.

---

## 3. Ranked on profit, not excitement

| # | Vertical | Value pool / yr | Capture model | Revenue at realistic share | GM | Capital | Time to $10M | Exit mult. |
|---|---|---|---|---|---|---|---|---|
| 1 | **MDS / OASIS accuracy** | ~$1–2B of mispriced per-diem | SaaS + share of captured/defended $ | $40–70M ARR | **75–85%** | Seed | 3–4 yr | 8–15x rev |
| 2 | **EMS billing (own the service)** | **$590M** fee pool + $540M lift | % of collections + roll-up | $59M+ | 60–70% | Debt + equity | 4–5 yr | 12–25x EBITDA |
| 3 | **Vet / dental / pharmacist answer engine** | pharma & manufacturer ad budgets | Advertising | Depends entirely on ad budget | **85%+** | Seed | 3–5 yr | 10–20x rev |
| 4 | **RCM roll-up** | $19–62B outsourced | Own the P&L | Unbounded | 35–50% | **Heavy** | 5–7 yr | 12–25x EBITDA |
| 5 | **State Medicaid policy intelligence** | thousands of providers + MCOs | Subscription | $10–25M ARR | 80%+ | Seed | 4–5 yr | 6–10x rev |
| 6 | **School-based claiming** | unsized — verify | Contingency 8–12% | $10–30M | 70%+ | Seed | 4–6 yr | 4–8x rev |
| 7 | **HCBS / IDD** | $82.5B spend | Roll-up or compliance | Large but hard | 20–40% | Heavy | 5–7 yr | 6–10x EBITDA |
| 8 | **Modality foundation model** | milestones / per-test | Partnership or dx | ~$0 for 3–5 yr | n/a | Heavy | — | binary |
| 9 | **Voice front desk** | $300M+ across vet | Per-seat/usage | $10–20M | 45–60% ↓ | Seed | 3 yr | 3–6x rev |

**Reading the table:** #1 has the best profit *quality* (software margins, modest capital, fundable
at seed). #2 and #4 have the most absolute dollars and require a completely different kind of
company. #3 has the highest ceiling and the answer hinges on one ten-minute question about ad
budgets. #8 isn't a business plan, it's a lottery ticket with good expected value.

---

## 4. Five questions that decide the economics

Run these before the market research, not after:

1. **What's the transaction count, and what dollar rides on each one?** Value pool = transactions ×
   dollars at risk × the fraction you can influence. If you can't name all three, you don't have a
   market, you have a category.
2. **Which rung of the pricing ladder can you actually climb to?** EMS is 14x bigger as a service
   than as software with no change to the product. Decide this before you build.
3. **What's the gross margin at your real accuracy?** Add inference plus the human review your error
   rate forces. If that lands under 60%, you're building a services company — fine, but price the
   equity accordingly.
4. **Who's the advertiser, or who's the payer?** If neither exists, your ceiling is what a small
   business will put on a credit card.
5. **What does a buyer pay for this profit?** Same EBITDA, 3x or 25x, decided by concentration,
   automation and retention — design for the metrics that move the multiple from day one.

---

## Sources

- EMS volume and economics — [WorldMetrics EMS stats (28M transports)](https://worldmetrics.org/ems-ambulance-industry-statistics/), [IBISWorld ambulance services market size](https://www.ibisworld.com/industry-statistics/market-size/ambulance-services-united-states/), [New England Medical Billing on outsourcing models](https://www.nembgroup.com/ems-billing-software-vs-outsourcing/), [EMS|MC on collection lift](https://emsmc.com/blog/beyond-breaking-even-5-ways-outsourcing-your-ems-billing-changes-the-game/), [AMS Solutions billing pricing models](https://ams-solutions.com/medical-billing-services-pricing/)
- SNF / home health — [SingleCare long-term care statistics](https://www.singlecare.com/blog/news/long-term-care-statistics/), [Baker Tilly on FY26 SNF rates](https://www.bakertilly.com/insights/fy-26-medicare-skilled-nursing-facility-reimbursement-rates), [SNF Solutions on PDPM 2026](https://snf-solutions.com/pdpm-in-2026-what-snf-business-offices-need-to-know/), [OIG SNF reimbursement work plan](https://oig.hhs.gov/reports/work-plan/browse-work-plan-projects/srs-a-25-010/)
- RCM multiples and market — [CT Acquisitions on selling an RCM company](https://ctacquisitions.com/how-to-sell-a-medical-billing-company/), [FOCUS healthcare EBITDA multiples](https://focusbankers.com/healthcare-ebitda-multiples/), [Scope Research on RCM valuation](https://www.scoperesearch.co/post/healthcare-revenue-cycle-valuation-multiples-and-m-a-trends-2025), [Auxis 2026 RCM trends](https://www.auxis.com/2026-healthcare-revenue-cycle-management-trends/)
- HCBS — [MACPAC spending and utilization](https://www.macpac.gov/wp-content/uploads/2025/07/Spending-and-Utilization-for-Medicaid-Home-and-Community-Based-Services.pdf), [KFF on HCBS](https://www.kff.org/medicaid/medicaid-home-community-based-services-people-served-and-spending-during-covid-19/), [ShiftCare on 2026 waiver cuts](https://shiftcare.com/us/blog/medicaid-waiver-cuts-impact-2026-idd-hcbs-providers-need-know-now)
- Anchor comparables — [OpenEvidence $12B](https://valueaddvc.com/blog/openevidence-valuation-2026-12b-round-40-percent-of-us-doctors-and-why-it-moved-to-miami), [GC Creation Fund roll-ups](https://capitalandclarity.substack.com/p/the-general-catalyst-behind-15-billion), [Rock Health H1 2026](https://rockhealth.com/insights/h1-2026-funding-and-market-overview-durable-roots-shifting-routes/)
