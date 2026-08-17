// ========================================
// EDIT THIS FILE TO UPDATE YOUR CONTENT
// ========================================

// Headline numbers shown in the "vitals" strip under the hero
export const stats = [
  { value: "6", label: "Industry & research roles" },
  { value: "200+", label: "Pharma patents mapped" },
  { value: "60+", label: "Health-tech startups evaluated" },
  { value: "8", label: "M&A targets assessed" },
];

// The three pillars shown in the "Focus" section
export const focusAreas = [
  {
    index: "01",
    tag: "BUILDER",
    title: "GenAI for Clinical Data",
    description:
      "Product and engineering for AI on clinical data — patient safety narratives from structured data, LLM eval infrastructure, and governance that keeps genAI honest in regulated settings.",
    proof: "Rigel Pharmaceuticals · PwC",
  },
  {
    index: "02",
    tag: "SCIENTIST",
    title: "Bench-to-Data Biology",
    description:
      "Cancer drug screening with patient-derived organoids, scRNA-seq pipelines, and ML models on real patient datasets — where the biology meets the data.",
    proof: "Innovative Genomics Institute · UCSF · Stanford",
  },
  {
    index: "03",
    tag: "OPERATOR",
    title: "Biotech Strategy & Investing",
    description:
      "Due diligence on pharma acquisitions, biotech equity research across drug cycles, and matching health-tech startups with the right investors.",
    proof: "Abbott · Ishara Investments · Health Engine",
  },
];

export const experiences = [
  {
    company: "Rigel Pharmaceuticals",
    logoText: "Rigel",
    logo: "/images/logos/rigel.png",
    link: "https://www.rigel.com/",
    role: "Engineer",
    dates: "Aug 2025 - Jul 2026",
    achievement: "Built an AI-powered system that auto-generates patient safety narratives from structured clinical data, cutting manual drafting time. Deployed using AWS for clinical team.",
    tech: ["Python", "OpenAI API", "AWS", "SQLite"],
  },
  {
    company: "Health Engine",
    logoText: "HE",
    logo: "/images/logos/health_engine.jpeg",
    link: "https://www.readysethealth.io/",
    role: "Analyst",
    dates: "Dec 2024 - Present",
    achievement: "UC Berkeley's healthcare startup accelerator. Building semantic search engine using vector embeddings and FAISS to match startups with investors, while evaluating 60+ cohort startups for product-market fit",
    tech: ["Python", "MongoDB", "FAISS", "SentenceTransformer"],
  },
  {
    company: "PwC",
    logoText: "PwC",
    logo: "/images/logos/pwc.jpg",
    link: "https://www.pwc.com/",
    role: "Engineering Intern",
    dates: "Summer 2025",
    achievement: "Deployed LLM eval infrastructure on SageMaker to benchmark model performance across accuracy, hallucination rate, latency, and more; pipeline processed 100+ test cases and informed model selection from Bedrock catalog.",
    tech: ["AWS Bedrock", "Sagemaker", "Airflow", "dbt"],
  },
  {
    company: "Ishara Investments",
    logoText: "Ishara",
    logoColor: "#7c3aed",
    link: "https://www.isharainvestments.com/",
    role: "Tech Research Analyst Intern",
    dates: "Aug - Dec 2025",
    achievement: "Analyzed 20+ public biotech equities, built investment dashboard and financial models to identify drug cycle inflection points, synthesizing FDA filings into actionable investment memos",
    tech: ["Financial Modeling", "SQL", "Research"],
  },
  {
    company: "Abbott",
    logoText: "Abbott",
    logo: "/images/logos/abbott.jpg",
    link: "https://www.abbott.com/",
    role: "Data Science & Strategy Intern",
    dates: "Aug - Dec 2024",
    achievement: "Led due diligence on 8 pharma acquisition targets, building valuation frameworks and presenting scorecards that synthesized clinical, financial, and competitive data",
    tech: ["Python", "SQL", "Tableau", "Financial Analysis"],
  },
  {
    company: "Stanford Clinical Research (SCCR)",
    logoText: "SCCR",
    logo: "/images/logos/stanford.jpeg",
    link: "https://domcrh.stanford.edu/",
    role: "Data Science Intern",
    dates: "Summer 2023",
    achievement: "Mapped competitive landscapes across 200+ pharmaceutical patents, identifying whitespace in therapeutic areas to inform AI-driven drug development strategy",
    tech: ["Python", "Data Analysis", "Market Research"],
  },
];

// status: "live" (hosted demo) | "prototype" (works, demo/synthetic data)
//         | "case-study" (writeup/screenshots only) | "code" (repo only)
// image: drop a screenshot in /public/images/projects/ and reference it here —
//        cards fall back to a styled placeholder until the file exists
export const technicalProjects = [
  {
    title: "SAE Narrative Generator",
    description:
      "Clinical-style UI for drafting serious adverse event narratives from structured case data — the interface pattern behind my Rigel work, rebuilt as a standalone demo on synthetic patient cases.",
    tags: ["React", "LLMs", "Clinical Safety"],
    status: "live",
    note: "Synthetic data only",
    image: "/images/projects/sae-narratives.png",
    demo: "/sae-demo",
  },
  {
    title: "Athena — Regulatory Dashboard",
    description:
      "Regulatory intelligence for a biotech portfolio on one screen: submission states, a catalyst runway timeline, and program-level regulatory events. Built on an invented portfolio.",
    tags: ["React", "Regulatory Ops", "Data Viz"],
    status: "live",
    note: "Synthetic portfolio",
    image: "/images/projects/athena.png",
    demo: "/athena-demo",
  },
  {
    title: "Drug Script Analysis Tool",
    description:
      "Prescription trend analyzer that compares Week-over-Week and Z-Score methods side-by-side, with drug-maturity-aware thresholds and holiday-adjusted baselines. Ships as a Streamlit web app, CLI, and Colab notebook with interactive Plotly dashboards.",
    tags: ["Python", "Streamlit", "Plotly", "Pandas"],
    status: "prototype",
    github: "https://github.com/AnyaSikri/ishara-demo",
    image: "/images/projects/drug-script.png",
  },
  {
    title: "AI News Scraper",
    description:
      "Automated web scraper that aggregates and summarizes tech news using NLP",
    tags: ["Python", "BeautifulSoup", "OpenAI API"],
    status: "code",
    github: "https://github.com/anyasikri/ai-news-scraper",
  },
];

export const clubs = [
  {
    name: "Phoenix Consulting",
    logoText: "PC",
    role: "Manager",
    description: "Healthcare consulting for Bay Area health-tech companies and healthcare organizations",
    link: "https://www.phoenixconsultinggroup.org/",
  },
  {
    name: "Health Engine",
    logoText: "HE",
    role: "Analyst",
    description: "UC Berkeley's healthcare startup accelerator, supporting 60+ health-tech startups",
    link: "https://www.readysethealth.io/",
  },
  {
    name: "Data Science Society",
    logoText: "DS",
    role: "Project Lead",
    description: "Organized workshops and led a team of 8 on ML competition projects",
    link: "https://dssberkeley.com/",
  },
];

export const research = [
  {
    name: "Innovative Genomics Institute",
    role: "Quantitative Biology Intern",
    dates: "July 2025 - Present",
    description: "Cancer drug screening research using patient-derived organoid models. Built data processing pipelines for fluorescence analysis, developed automated cell-sorting tools, and applied clustering/dimensionality reduction to identify treatment effects on cell behavior.",
    tags: ["Python", "FlowJo", "scRNA-seq", "Clustering"],
    link: "https://innovativegenomics.org/",
  },
  {
    name: "UCSF Singhal Laboratory",
    role: "Data Science Research Intern",
    dates: "Aug 2022 - Jan 2023",
    description: "Analyzed 20 COVID-19 genetic datasets to identify disease variable correlations. Built ML model to forecast seizures in COVID-19 patients with 80% accuracy. Presented findings to neurologists and researchers.",
    tags: ["Python", "ML", "KNN Imputation", "Dimensionality Reduction"],
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11875240/",
  },
];

export const hiking = [
  {
    name: "Half Dome",
    location: "Yosemite, CA",
    image: "/images/hiking/half-dome.jpg",
  },
  {
    name: "Mission Peak",
    location: "Fremont, CA",
    image: "/images/hiking/mission-peak.jpg",
  },
  {
    name: "Mount Tam",
    location: "Marin, CA",
    image: "/images/hiking/mount-tam.jpg",
  },
];

export const writing = [
  {
    title: "Why I Love Building Things",
    description: "Reflections on the joy of creating software from scratch",
    link: "https://medium.com/@anyasikri/example",
  },
  {
    title: "Lessons from My First Internship",
    description: "What I learned about engineering culture and growth",
    link: "https://medium.com/@anyasikri/example2",
  },
];

export const startupsToWatch = [
  {
    name: "Anthropic",
    description: "Building reliable, interpretable AI systems",
    link: "https://anthropic.com",
  },
  {
    name: "Figma",
    description: "Collaborative design tools that changed the industry",
    link: "https://figma.com",
  },
  {
    name: "Linear",
    description: "The best issue tracking tool for modern teams",
    link: "https://linear.app",
  },
];
