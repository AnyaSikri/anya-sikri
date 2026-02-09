// ========================================
// EDIT THIS FILE TO UPDATE YOUR CONTENT
// ========================================

export const experiences = [
  {
    company: "Rigel Pharmaceuticals",
    logoText: "Rigel",
    logo: "/images/logos/rigel.png",
    link: "https://www.rigel.com/",
    role: "AI Engineer",
    dates: "Aug 2025 - Present",
    achievement: "Built AI-powered Patient Safety Narrative System that cut medical writer workload from 2-4 hours to 15-30 minutes, automating clinical data extraction and report generation",
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
    role: "Cloud Engineering & Data Intern",
    dates: "Summer 2025",
    achievement: "Designed LLM Evaluation Framework and vendor intelligence system that reduced model selection time by 60%, enabling transparent AI adoption decisions for insurance clients",
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
    link: "https://med.stanford.edu/clinicalresearch.html",
    role: "Data Science Intern",
    dates: "Summer 2023",
    achievement: "Mapped competitive landscapes across 200+ pharmaceutical patents, identifying whitespace in therapeutic areas to inform AI-driven drug development strategy",
    tech: ["Python", "Data Analysis", "Market Research"],
  },
];

export const technicalProjects = [
  {
    title: "AI News Scraper",
    description: "Automated web scraper that aggregates and summarizes tech news using NLP",
    tags: ["Python", "BeautifulSoup", "OpenAI API"],
    github: "https://github.com/anyasikri/ai-news-scraper",
    featured: true,
  },
  {
    title: "Single-Cell Lung vs. Trachea Analysis",
    description: "Analyzed 3,000+ cells from Tabula Muris scRNA-seq data using Smart-seq2. Applied KMeans, spectral clustering, and Phenograph on PCA-reduced features. Validated clusters via marker genes and generated UMAP embeddings.",
    tags: ["scRNA-seq", "Clustering", "UMAP", "Seurat"],
  },
  {
    title: "Influenza A Vaccine Target Evolution",
    description: "Performed MSA and conservation scoring across HA, NA, PB1, PB2 proteins from 2018-2022 strains. Quantified selection pressure using dN/dS ratios and visualized mutation maps with JBrowse.",
    tags: ["Bioinformatics", "MSA", "dN/dS Analysis", "JBrowse"],
  },
];

export const ventures = [
  {
    title: "Startup Idea 1",
    description: "A platform that helps students discover and connect with research opportunities",
    tags: ["EdTech", "Marketplace", "B2B"],
    live: "https://example.com",
  },
  {
    title: "Side Project",
    description: "Consumer app that gamifies sustainable living habits",
    tags: ["Consumer", "Sustainability", "Mobile"],
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
