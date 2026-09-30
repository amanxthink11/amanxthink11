export interface Venture {
  id: string;
  name: string;
  tagline: string;
  role: string;
  period: string;
  status: "Active" | "Historical Foundation";
  description: string;
  longDescription: string;
  url: string;
  linkedinUrl: string;
  tags: string[];
  accentColor: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: "Sports Tech" | "Utility & Finance" | "Gaming & Logic" | "Analytics & SaaS";
  status: "Published Utility" | "Published Game" | "Product Concept" | "Engineering Experiment";
  description: string;
  tags: string[];
  platform: string;
  url?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  role: string;
  narrative: string;
  type: "Venture" | "Incorporation" | "Expansion" | "Present";
  verifiedDate?: string;
}

export interface Repository {
  name: string;
  description: string;
  url: string;
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
}

export const SITE_DATA = {
  personal: {
    name: "Aman Singh",
    fullName: "Aman Kumar Singh",
    tagline: "Building ideas into reality.",
    bioShort:
      "I'm Aman Singh, a technology entrepreneur and builder from Patna, Bihar. I build companies, products and technology around ideas that solve real problems.",
    location: "Patna, Bihar, India",
    email: "contact@amanxthink11.com",
    avatar: "/aman.jpg",
    roles: [
      "Founder @ Think11",
      "CEO & Co-Founder @ IND Tech Mark",
      "Product & Software Builder"
    ],
  },

  socials: [
    {
      name: "LinkedIn",
      handle: "amanxthink11",
      url: "https://www.linkedin.com/in/amanxthink11",
      icon: "linkedin",
      description: "Professional updates, venture insights, and leadership thoughts",
    },
    {
      name: "GitHub",
      handle: "amanxthink11",
      url: "https://github.com/amanxthink11",
      icon: "github",
      description: "Open-source repositories, experiments, and code footprints",
    },
    {
      name: "X (Twitter)",
      handle: "@amanxthink11",
      url: "https://x.com/amanxthink11",
      icon: "twitter",
      description: "Real-time thoughts on technology, building, and startups",
    },
    {
      name: "Instagram",
      handle: "@amanxthink11",
      url: "https://instagram.com/amanxthink11",
      icon: "instagram",
      description: "Personal highlights, life behind the screen, and journey",
    },
    {
      name: "Facebook",
      handle: "amanxthink11",
      url: "https://facebook.com/amanxthink11",
      icon: "facebook",
      description: "Network, community connections, and local ecosystem",
    },
  ],

  ventures: [
    {
      id: "think11",
      name: "Think11",
      tagline: "Sports technology, fantasy sports and the beginning of my founder journey.",
      role: "Founder",
      period: "Founded 2020",
      status: "Historical Foundation",
      description:
        "Think11 was founded in 2020 as a competitive sports-technology platform focused on fantasy gaming, interactive digital sports experiences, and match engagement. It marked the foundational venture of my founder journey.",
      longDescription:
        "Launched at the intersection of consumer sports interest and cloud architecture, Think11 served as an intensive learning ground in high-concurrency systems, contest mechanisms, payment gateway flows, and consumer sports user experience.",
      url: "https://www.think11.in",
      linkedinUrl: "https://www.linkedin.com/company/think11app",
      tags: ["Sports Tech", "Fantasy Sports", "High-Concurrency", "Mobile Gaming"],
      accentColor: "#f97316",
    },
    {
      id: "indtechmark",
      name: "IND Tech Mark",
      tagline: "Building software, digital products and technology solutions for businesses.",
      role: "CEO & Co-Founder",
      period: "2023 – Present (Active since 2021)",
      status: "Active",
      description:
        "IND Tech Mark Private Limited is a software development and technology solutions firm incorporated in Patna, Bihar, delivering digital products, custom web and mobile development, SaaS solutions, and technology consultancy.",
      longDescription:
        "Formally incorporated on November 28, 2023, following ongoing technology operations since 2021. IND Tech Mark operates both as a technology services partner for businesses and as a product laboratory building specialized mobile utilities, logic games, and digital software.",
      url: "https://indtechmark.com",
      linkedinUrl: "https://www.linkedin.com/company/indtechmark",
      tags: ["Software Engineering", "Web & Mobile", "SaaS Development", "Enterprise Tech", "Patna HQ"],
      accentColor: "#ff4d2e",
    },
  ] as Venture[],

  timeline: [
    {
      year: "2020",
      title: "Think11 Begins",
      role: "Founder",
      narrative:
        "Ventured into sports technology and fantasy gaming. Designed the initial platform architecture, tackled low-latency contest management, and ignited a deep passion for digital product creation.",
      type: "Venture",
      verifiedDate: "2020 (Venture Foundation)",
    },
    {
      year: "2021+",
      title: "Expansion into Multi-Disciplinary Building",
      role: "Product & Engineering Lead",
      narrative:
        "The founder journey broadened beyond fantasy sports into custom web applications, digital marketing strategies, customer experience engineering, and assembling multidisciplinary technical teams.",
      type: "Expansion",
      verifiedDate: "2021 – 2022",
    },
    {
      year: "2023",
      title: "IND Tech Mark Incorporated",
      role: "CEO & Co-Founder",
      narrative:
        "Formalized technology operations under IND TECH MARK PRIVATE LIMITED (incorporated November 28, 2023, Patna). Scaled engineering services and initiated proprietary software development.",
      type: "Incorporation",
      verifiedDate: "November 28, 2023",
    },
    {
      year: "2024–2026",
      title: "Product Studio & Digital Expansion",
      role: "Technology Entrepreneur",
      narrative:
        "Expanded the digital footprint with mobile utilities, analytical tools, logic games on Google Play, and enterprise software. Focused on building lean, high-utility digital assets.",
      type: "Expansion",
      verifiedDate: "2024 – 2026",
    },
    {
      year: "TODAY",
      title: "Building the Next Generation",
      role: "Active Founder & Builder",
      narrative:
        "Architecting modern software products, AI-assisted workflows, analytics platforms, and sustainable SaaS businesses with long-term technological vision.",
      type: "Present",
      verifiedDate: "Present",
    },
  ] as TimelineMilestone[],

  products: [
    {
      id: "thinkscore",
      name: "ThinkScore / StumpTalk",
      subtitle: "Cricket Scoring & Match Intelligence Concept",
      category: "Sports Tech",
      status: "Product Concept",
      description:
        "A cricket scoring engine, tournament organizer, and real-time match analytics concept built for amateur leagues, academies, and live cricket enthusiasts.",
      tags: ["Live Scoring", "Cricket Analytics", "Tournament Engine", "Cloud API"],
      platform: "Product Concept & Open Source Repository",
      githubUrl: "https://github.com/amanxthink11/stumptalk",
      featured: true,
    },
    {
      id: "cardledger",
      name: "CardLedger",
      subtitle: "Precision Score Tracking for Card Games",
      category: "Utility & Finance",
      status: "Published Utility",
      description:
        "A streamlined, zero-friction score ledger application for round-based card games like Call Break. Eliminates manual math errors with real-time audit trails and historical round breakdowns.",
      tags: ["Score Tracking", "Call Break", "Mobile App", "Offline-First"],
      platform: "Google Play Store / Android",
      featured: true,
    },
    {
      id: "mdr-calc",
      name: "MDR Calculator",
      subtitle: "Merchant Discount Rate & Settlement Cost Tool",
      category: "Utility & Finance",
      status: "Published Utility",
      description:
        "Specialized financial utility that enables merchants and small businesses across India to calculate exact MDR deductions, interchange charges, and net settlement revenue on digital transactions.",
      tags: ["Fintech Utility", "MDR Deductions", "Merchant Tools", "UPI / Cards"],
      platform: "Google Play Store / Android",
      featured: true,
    },
    {
      id: "arrowzen",
      name: "ArrowZen",
      subtitle: "Minimalist Directional Logic & Spatial Puzzle Game",
      category: "Gaming & Logic",
      status: "Published Game",
      description:
        "An engaging spatial reasoning and directional logic puzzle game published on Google Play. Features progressive complexity, clean acoustics, and tactile arrow-path resolution.",
      tags: ["Logic Puzzle", "Mobile Game", "Game Mechanics", "Google Play"],
      platform: "Google Play Store / Android",
      featured: true,
    },
    {
      id: "ind-analytics",
      name: "IND Analytics",
      subtitle: "Privacy-Focused Web Analytics Tool",
      category: "Analytics & SaaS",
      status: "Engineering Experiment",
      description:
        "Lightweight, cookieless web analytics experiment designed to capture essential user traffic metrics without invading visitor privacy or bloating page load times.",
      tags: ["Web Analytics", "Privacy First", "Cookieless", "SaaS Experiment"],
      platform: "Engineering Experiment / GitHub",
      githubUrl: "https://github.com/amanxthink11/ind-analytics",
      featured: false,
    },
    {
      id: "publicity-poster",
      name: "Publicity Poster",
      subtitle: "Marketing Automation Platform Experiment",
      category: "Analytics & SaaS",
      status: "Engineering Experiment",
      description:
        "Marketing workflow experiment integrating AI generation with social channel syndication to explore automated distribution pipelines for brands.",
      tags: ["AI Automation", "Social Syndication", "Content Workflow"],
      platform: "Engineering Experiment / GitHub",
      githubUrl: "https://github.com/amanxthink11/publicity-poster",
      featured: false,
    },
  ] as Product[],

  focusAreas: [
    {
      title: "AI & Autonomous Workflows",
      description:
        "Integrating intelligent automation, LLM orchestration, and smart workflows into operational software pipelines.",
      badge: "Exploration",
    },
    {
      title: "Software Products & Mobile Apps",
      description:
        "Building lightweight, high-utility Android and web applications that solve specific daily pain points.",
      badge: "Product Focus",
    },
    {
      title: "SaaS Infrastructure",
      description:
        "Engineering multi-tenant cloud platforms, subscription billing, and privacy-conscious analytics tools.",
      badge: "Cloud Architecture",
    },
    {
      title: "Sports Technology & Analytics",
      description:
        "Continuing the domain interest initiated with Think11, focusing on live sports data, tournament management, and audience engagement.",
      badge: "Domain Interest",
    },
    {
      title: "Digital Business Enablement",
      description:
        "Empowering businesses through digital services, modern web applications, and technology implementation via IND Tech Mark.",
      badge: "Commercial Venture",
    },
  ],

  philosophy: {
    quote: "The chapter may change. The fire to build doesn't.",
    principles: [
      {
        number: "01",
        title: "Learn by Building",
        description:
          "The fastest way to understand a problem is to ship a solution for it. Theory informs, but code and real feedback teach the real lesson.",
      },
      {
        number: "02",
        title: "Pragmatic Engineering",
        description:
          "Complexity is not a virtue. The best software is reliable, performant, and does exactly what the user expects with minimum friction.",
      },
      {
        number: "03",
        title: "Long-Term Compounding",
        description:
          "Great businesses and products are not built overnight. Steady execution, daily iteration, and deep resilience create lasting value.",
      },
      {
        number: "04",
        title: "Local Roots, Global Horizons",
        description:
          "Building from Patna, Bihar with global engineering standards, proving that impactful technology ventures can emerge from anywhere.",
      },
    ],
  },

  githubRepos: [
    {
      name: "stumptalk",
      description: "Cricket scores, news, insights and match intelligence platform.",
      url: "https://github.com/amanxthink11/stumptalk",
      language: "TypeScript",
      stars: 0,
      forks: 0,
      updatedAt: "2026-06",
    },
    {
      name: "ind-analytics",
      description: "Privacy-focused web analytics platform.",
      url: "https://github.com/amanxthink11/ind-analytics",
      language: "JavaScript",
      stars: 0,
      forks: 0,
      updatedAt: "2026-06",
    },
    {
      name: "publicity-poster",
      description: "AI-powered social media poster and marketing platform.",
      url: "https://github.com/amanxthink11/publicity-poster",
      language: "TypeScript",
      stars: 0,
      forks: 0,
      updatedAt: "2026-06",
    },
    {
      name: "portfolio",
      description: "Personal portfolio website and engineering showcase.",
      url: "https://github.com/amanxthink11/portfolio",
      language: "TypeScript",
      stars: 0,
      forks: 0,
      updatedAt: "2026-06",
    },
    {
      name: "amanxthink11",
      description: "Building SaaS, AI systems, analytics platforms, and digital products.",
      url: "https://github.com/amanxthink11/amanxthink11",
      language: "Markdown",
      stars: 0,
      forks: 0,
      updatedAt: "2026-06",
    },
  ] as Repository[],
};
