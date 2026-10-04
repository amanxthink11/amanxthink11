export interface StoryChapter {
  number: string;
  id: string;
  legacyId?: string;
  title: string;
  shortTitle: string;
  period?: string;
  tagline?: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: "Sports Tech" | "Utility & Finance" | "Gaming & Logic" | "Analytics & SaaS" | "Automation & Marketing";
  status: "Published Utility" | "Published Game" | "Product Concept" | "Engineering Experiment";
  description: string;
  storyNote: string;
  platform: string;
  url?: string;
  githubUrl?: string;
}

export interface FounderPrinciple {
  number: string;
  title: string;
  statement: string;
  explanation: string;
}

export interface FocusArea {
  title: string;
  action: "Exploring" | "Building" | "Experimenting";
  actionStyle: string;
  dotColor: string;
  description: string;
}

export interface Repository {
  name: string;
  description: string;
  url: string;
  language: string;
  langColor: string;
}

export const CHAPTERS: StoryChapter[] = [
  { number: "01", id: "beginning", legacyId: "about", title: "The Beginning", shortTitle: "Beginning" },
  { number: "02", id: "first-bet", legacyId: "ventures", title: "The First Bet", shortTitle: "First Bet", period: "2020" },
  { number: "03", id: "building-again", legacyId: "indtechmark", title: "Building Again", shortTitle: "Building Again", period: "2021—Present" },
  { number: "04", id: "products", legacyId: "work", title: "From Ideas to Products", shortTitle: "Products" },
  { number: "05", id: "building-in-public", legacyId: "builder", title: "Building in Public", shortTitle: "GitHub" },
  { number: "06", id: "things-learned", legacyId: "philosophy", title: "Things I've Learned", shortTitle: "Principles" },
  { number: "07", id: "building-now", legacyId: "focus", title: "What I'm Building Now", shortTitle: "Now" },
  { number: "08", id: "road-ahead", legacyId: "journey", title: "The Road Ahead", shortTitle: "Road Ahead" },
  { number: "09", id: "message", legacyId: "gratitude", title: "A Message to the Visitor", shortTitle: "Message" },
  { number: "10", id: "connect", legacyId: "contact", title: "Let's Connect", shortTitle: "Connect" },
];

export const SITE_DATA = {
  personal: {
    name: "Aman Singh",
    fullName: "Aman Kumar Singh",
    tagline: "Building ideas into reality.",
    heroIntro:
      "I'm Aman Singh — a founder, builder and technology entrepreneur from Patna, Bihar.",
    location: "Patna, Bihar, India",
    email: "contact@amanxthink11.com",
    avatar: "/aman.jpg",
  },

  socials: [
    {
      name: "LinkedIn",
      handle: "in/amanxthink11",
      url: "https://www.linkedin.com/in/amanxthink11",
      description: "Professional updates, venture insights, and leadership thoughts",
    },
    {
      name: "GitHub",
      handle: "github.com/amanxthink11",
      url: "https://github.com/amanxthink11",
      description: "Open-source repositories, experiments, and code footprints",
    },
    {
      name: "X (Twitter)",
      handle: "@amanxthink11",
      url: "https://x.com/amanxthink11",
      description: "Real-time thoughts on technology, building, and startups",
    },
    {
      name: "Instagram",
      handle: "@amanxthink11",
      url: "https://instagram.com/amanxthink11",
      description: "Personal highlights, life behind the screen, and journey",
    },
    {
      name: "Facebook",
      handle: "facebook.com/amanxthink11",
      url: "https://facebook.com/amanxthink11",
      description: "Network, community connections, and local ecosystem",
    },
  ],

  // CHAPTER 02 — THE FIRST BET (Think11)
  think11: {
    name: "Think11",
    year: "2020",
    url: "https://www.think11.in",
    linkedinUrl: "https://www.linkedin.com/company/think11app",
    headline: "The First Bet: Sports, High-Concurrency & the Realities of Scale",
    narrative: [
      "Every founder remembers the first time they put something of their own on the line. In 2020, sports and digital technology were colliding across India with unprecedented velocity. Hundreds of millions of people lived and breathed cricket every evening, but the digital experience was largely spectator-only.",
      "I wanted to build an interactive platform where game intelligence, fan intuition, and real-time engagement came together. That conviction became Think11.",
      "Building Think11 was an unforgiving masterclass. It was my first true venture into high-concurrency architecture. When the match toss happened at 7:00 PM, hundreds of thousands of users rushed into contests in a matter of seconds. I had to learn how databases fail, how payment gateways drop transactions at peak load, how latency creates user panic, and how fraud detection must work in real time.",
      "More than the code, Think11 taught me about entrepreneurship: recruiting engineers when you are just getting started, sitting with customer support at midnight during IPL season, listening to frustrated users, and taking absolute accountability when things break. It was the crucible that transformed me from an aspiring builder into a committed founder.",
    ],
    clarification:
      "Think11 marks the foundational chapter of my founder journey. It is preserved here as a historical venture and school of hard knocks, not as an active real-money fantasy platform.",
  },

  // CHAPTER 03 — BUILDING AGAIN (IND Tech Mark)
  indTechMark: {
    name: "IND Tech Mark",
    period: "2021 — Present (Incorporated Nov 28, 2023)",
    url: "https://indtechmark.com",
    linkedinUrl: "https://www.linkedin.com/company/indtechmark",
    hook: "One company taught me how to start. The next taught me how to build.",
    narrative: [
      "Starting a company teaches you hunger; sustaining one teaches you discipline. After Think11, I knew I didn't want to build just one product. I wanted to build a technology engine that could repeatedly turn ambitious concepts into reliable, production-ready software.",
      "In 2021, we began informal engineering operations that steadily matured into IND Tech Mark Private Limited, formally incorporated in Patna, Bihar on November 28, 2023.",
      "IND Tech Mark is our active technology enterprise. We don't view it as a corporate services firm; we treat it as an engineering laboratory and software consultancy. On one hand, we engineer high-performance web systems, cross-platform mobile apps, cloud architectures, and automation pipelines for clients who need dependable execution. On the other hand, it serves as an incubator for our own software experiments, Android utilities, and SaaS concepts.",
      "Building an enterprise from Patna is a deliberate statement. You do not need to be in Silicon Valley, Bengaluru, or London to build modern, robust technology. With curious minds, strict engineering standards, and persistence, world-class products can emerge from anywhere.",
    ],
    disciplines: [
      "Software Engineering",
      "Digital Products",
      "Web Architecture",
      "Mobile Applications",
      "SaaS Development",
      "Process Automation",
      "Technology Solutions",
    ],
  },

  // CHAPTER 04 — FROM IDEAS TO PRODUCTS
  products: [
    {
      id: "cardledger",
      name: "CardLedger",
      subtitle: "Precision Score Ledger for Card Games",
      category: "Utility & Finance",
      status: "Published Utility",
      description:
        "A zero-friction, offline-first round score tracking ledger designed for popular Indian card games like Call Break. Eliminates manual math disputes with real-time audit trails and round breakdowns.",
      storyNote:
        "Born out of family game nights where arguments over pencil-and-paper math ruined the fun. Built lean, fast, and completely usable without an internet connection.",
      platform: "Google Play Store / Android",
    },
    {
      id: "mdr-calc",
      name: "MDR Calculator",
      subtitle: "Merchant Discount Rate & Settlement Cost Tool",
      category: "Utility & Finance",
      status: "Published Utility",
      description:
        "Specialized financial utility that enables small merchants, shopkeepers, and businesses across India to calculate exact MDR deductions, interchange fees, and net settlement revenues on card and digital transactions.",
      storyNote:
        "Built after speaking with local business owners in Patna who were confused by hidden interchange cuts on POS card swipes.",
      platform: "Google Play Store / Android",
    },
    {
      id: "arrowzen",
      name: "ArrowZen",
      subtitle: "Minimalist Directional Logic & Spatial Puzzle Game",
      category: "Gaming & Logic",
      status: "Published Game",
      description:
        "An engaging spatial reasoning and directional logic puzzle game published on Google Play. Features progressive complexity, clean acoustics, and tactile arrow-path resolution.",
      storyNote:
        "An experiment in minimalist game mechanics. No noisy ads, no endless tutorials—just clean spatial logic and soothing problem solving.",
      platform: "Google Play Store / Android",
    },
    {
      id: "thinkscore",
      name: "ThinkScore / StumpTalk",
      subtitle: "Cricket Scoring & Match Intelligence Concept",
      category: "Sports Tech",
      status: "Product Concept",
      description:
        "A live cricket tournament scoring engine, amateur league organizer, and real-time match analytics concept built for local academies, club matches, and cricket enthusiasts.",
      storyNote:
        "Carrying forward the sports-tech passion from Think11 into grassroots cricket tournament administration.",
      platform: "Product Concept & Open Source",
      githubUrl: "https://github.com/amanxthink11/stumptalk",
    },
    {
      id: "ind-analytics",
      name: "IND Analytics",
      subtitle: "Privacy-Focused Web Analytics Experiment",
      category: "Analytics & SaaS",
      status: "Engineering Experiment",
      description:
        "Lightweight, cookieless web analytics experiment designed to capture essential user traffic metrics without invading visitor privacy or bloating page load times.",
      storyNote:
        "Exploring how modern sites can measure engagement honestly without tracking scripts or GDPR compliance headaches.",
      platform: "Engineering Experiment / GitHub",
      githubUrl: "https://github.com/amanxthink11/ind-analytics",
    },
    {
      id: "publicity-poster",
      name: "Publicity Poster",
      subtitle: "Marketing Automation Platform Experiment",
      category: "Automation & Marketing",
      status: "Engineering Experiment",
      description:
        "Marketing workflow experiment integrating AI generation with social channel syndication to explore automated distribution pipelines for brands.",
      storyNote:
        "Testing whether small teams can automate multi-channel content syndication without enterprise price tags.",
      platform: "Engineering Experiment / GitHub",
      githubUrl: "https://github.com/amanxthink11/publicity-poster",
    },
  ] as Product[],

  // CHAPTER 05 — BUILDING IN PUBLIC (GitHub)
  github: {
    url: "https://github.com/amanxthink11",
    tagline: "I don't just talk about building. I actually build.",
    narrative:
      "In a world where it's easy to make claims in slide decks, code remains the only honest proof of craftsmanship. Open source is where I document ideas, test technical architectures, and share working software with the broader developer community.",
    repos: [
      {
        name: "stumptalk",
        description: "Cricket scores, tournament intelligence, and real-time match analytics platform.",
        language: "TypeScript",
        langColor: "bg-blue-400",
        url: "https://github.com/amanxthink11/stumptalk",
      },
      {
        name: "ind-analytics",
        description: "Privacy-focused, cookieless web analytics experiment for lightweight metric tracking.",
        language: "JavaScript",
        langColor: "bg-amber-400",
        url: "https://github.com/amanxthink11/ind-analytics",
      },
      {
        name: "publicity-poster",
        description: "AI-powered social media poster and automated marketing syndication engine.",
        language: "TypeScript",
        langColor: "bg-blue-400",
        url: "https://github.com/amanxthink11/publicity-poster",
      },
      {
        name: "portfolio",
        description: "Personal founder website, editorial digital story, and engineering showcase.",
        language: "TypeScript",
        langColor: "bg-blue-400",
        url: "https://github.com/amanxthink11/portfolio",
      },
      {
        name: "amanxthink11",
        description: "Public engineering profile, open-source trajectory, and technology architecture roadmap.",
        language: "Markdown",
        langColor: "bg-emerald-400",
        url: "https://github.com/amanxthink11/amanxthink11",
      },
    ] as Repository[],
  },

  // CHAPTER 06 — THINGS I'VE LEARNED (Founder Principles)
  principles: [
    {
      number: "01",
      title: "BUILD WITH PURPOSE",
      statement: "Code is meaningless without a clear human problem.",
      explanation:
        "Don't build technology simply because the tool exists. Build because someone is struggling with a bottleneck, a calculation, or an inefficient workflow that is genuinely worth solving.",
    },
    {
      number: "02",
      title: "LEARN BY BUILDING",
      statement: "Theory only gets you to the starting line.",
      explanation:
        "True comprehension happens when you deploy to real users, watch what breaks under unexpected conditions, and iterate in public. You understand systems only after you've had to fix them under pressure.",
    },
    {
      number: "03",
      title: "THINK LONG TERM",
      statement: "Short cuts compound into fragile businesses.",
      explanation:
        "Hasty architectures and transactional relationships collapse quickly. Whether designing database schemas, hiring team members, or serving clients, compound value comes from steady, dependable decisions.",
    },
    {
      number: "04",
      title: "KEEP THINGS SIMPLE",
      statement: "Complexity is easy; clarity is hard.",
      explanation:
        "It's tempting to add layers of abstraction, microservices, and buzzwords. The most resilient software is the one with the fewest moving parts that still completely fulfills the user's intent.",
    },
    {
      number: "05",
      title: "SHIP SOMETHING REAL",
      statement: "An imperfect deployed tool beats a flawless mental model.",
      explanation:
        "Perfectionism is often fear in disguise. Ship the simplest working version, get honest feedback from actual users, and let the real world guide your roadmap.",
    },
  ] as FounderPrinciple[],

  // CHAPTER 07 — WHAT I'M BUILDING NOW
  focusAreas: [
    {
      title: "AI",
      action: "Exploring",
      actionStyle: "bg-purple-500/10 text-purple-400 border-purple-500/30",
      dotColor: "bg-purple-400",
      description:
        "Intelligent automation, agentic workflows, and structured LLM integrations to remove tedious manual friction from daily operations.",
    },
    {
      title: "SaaS",
      action: "Building",
      actionStyle: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      dotColor: "bg-emerald-400",
      description:
        "Multi-tenant architectures, subscription infrastructure, and high-reliability cloud software solutions for modern teams.",
    },
    {
      title: "Sports Technology",
      action: "Experimenting",
      actionStyle: "bg-amber-500/10 text-amber-400 border-amber-500/30",
      dotColor: "bg-amber-400",
      description:
        "Real-time grassroots cricket scoring engines, tournament brackets, and live telemetry data pipelines.",
    },
    {
      title: "Automation",
      action: "Experimenting",
      actionStyle: "bg-amber-500/10 text-amber-400 border-amber-500/30",
      dotColor: "bg-amber-400",
      description:
        "Automated distribution pipelines, social media syndication, and webhook-driven orchestration workflows.",
    },
    {
      title: "Mobile Utilities",
      action: "Building",
      actionStyle: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      dotColor: "bg-emerald-400",
      description:
        "Focused Android tools and offline-first calculators (like CardLedger and MDR Calc) solving concrete computational issues.",
    },
    {
      title: "Enterprise Technology",
      action: "Building",
      actionStyle: "bg-[#ff4d2e]/10 text-[#ff8a65] border-[#ff4d2e]/30",
      dotColor: "bg-[#ff4d2e]",
      description:
        "Full-cycle web and mobile application engineering, digital transformations, and scalable client systems via IND Tech Mark.",
    },
    {
      title: "Open Source",
      action: "Exploring",
      actionStyle: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      dotColor: "bg-blue-400",
      description:
        "Contributing lightweight utilities, sharing architectural patterns, and publishing experiments on GitHub for others to build upon.",
    },
  ] as FocusArea[],

  // CHAPTER 08 — THE ROAD AHEAD
  roadAhead: {
    hook: "The next chapter is still being written.",
    narrative: [
      "Looking back from where I started in 2020 to where I stand today, nothing about the journey has been linear. There were miscalculations, systems that failed under pressure, products that didn't take off, and bets that demanded every ounce of resolve.",
      "I don't make speculative predictions about where the technology industry will be in five or ten years. Trends flare up and burn out. But the fundamental craft remains steady.",
      "What I know with certainty is that I will continue to be here: writing code, testing new ideas, assembling small determined teams, and creating tools that solve real human friction points. Whether it involves autonomous agents, mobile utilities, or enterprise infrastructure, the work is always the same—take an idea, build it thoughtfully, and ship it into reality.",
    ],
  },

  // CHAPTER 09 — A MESSAGE TO THE VISITOR
  messageToVisitor: {
    title: "A Message to the Visitor",
    opener: "If you've made it this far, thank you.",
    paragraphs: [
      "The modern internet moves at dizzying speed. Feeds demand infinite scroll, attention spans are measured in seconds, and genuine stories often get drowned in promotional noise. Taking five minutes out of your day to read my journey, my bets, and what I've learned along the way is a gesture I genuinely value.",
      "Whether you are an aspiring engineer typing out your first scripts, a fellow founder navigating the quiet uncertainty of an early-stage company, or someone who stumbled across my corner of the web by chance—I hope something in these chapters struck a chord with you.",
      "Building is difficult. You will doubt your decisions, wrestle with complex bugs, and face moments when walking away seems like the only rational choice. But nothing compares to the quiet satisfaction of seeing something you envisioned running in production, helping real people accomplish what they couldn't before.",
    ],
    closingMotto: "The destination keeps changing. The desire to build doesn't.",
    signature: "Aman Singh",
    signatureLocation: "Patna, Bihar, India",
  },

  // CHAPTER 10 — LET'S CONNECT
  connect: {
    title: "Let's build something.",
    subtitle: "For partnerships, technology, products, open source, or interesting ideas.",
    topics: [
      "Partnerships",
      "Technology",
      "Products",
      "Open Source",
      "Interesting Ideas",
    ],
  },
};
