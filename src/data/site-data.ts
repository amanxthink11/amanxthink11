export const SITE_URL = "https://www.amanxthink11.com";

export type SocialIconName = "github" | "linkedin" | "x" | "instagram" | "facebook";

export interface Social {
  label: string;
  handle: string;
  url: string;
  icon: SocialIconName;
}

export interface FeaturedProject {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  status: string;
  proof: string;
  primaryLink: { label: string; url: string };
  sourceUrl: string;
  /** Real screenshot of the product. Projects without one get an illustration. */
  screenshot?: { src: string; width: number; height: number; displayUrl: string };
}

export interface SideProject {
  name: string;
  kind: "Android app" | "Android game" | "Experiment";
  description: string;
  url?: string;
}

export interface Milestone {
  year: string;
  title: string;
  body: string;
  links?: { label: string; url: string }[];
}

export interface Principle {
  title: string;
  body: string;
}

export const PROFILE = {
  name: "Aman Singh",
  fullName: "Aman Kumar Singh",
  role: "Founder, IND Tech Mark",
  location: "Patna, Bihar, India",
  timezone: "IST (UTC+5:30)",
  email: "contact@amanxthink11.com",
  avatar: "/aman.jpg",
  interests: ["Cricket", "Chess", "Reading"],
  description:
    "Aman Singh is a founder and software engineer from Patna, Bihar, building open-source business software like QuickQR and Billzo through IND Tech Mark.",
};

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "journey", label: "Innings" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "principles", label: "Rules" },
  { id: "contact", label: "Contact" },
];

export const SOCIALS: Social[] = [
  { label: "GitHub", handle: "amanxthink11", url: "https://github.com/amanxthink11", icon: "github" },
  { label: "LinkedIn", handle: "in/amanxthink11", url: "https://www.linkedin.com/in/amanxthink11", icon: "linkedin" },
  { label: "X", handle: "@amanxthink11", url: "https://x.com/amanxthink11", icon: "x" },
  { label: "Instagram", handle: "@amanxthink11", url: "https://www.instagram.com/amanxthink11", icon: "instagram" },
  { label: "Facebook", handle: "amanxthink11", url: "https://www.facebook.com/amanxthink11", icon: "facebook" },
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    slug: "quickqr",
    name: "QuickQR",
    tagline: "Open-source QR infrastructure for Indian businesses.",
    description:
      "Twelve QR generators — UPI payments, WhatsApp chat, Google reviews, menus, Wi-Fi, vCards and more — with styling, printable stand frames and a readability check before every download. Self-hostable, with dynamic links and analytics for teams that need them.",
    highlights: [
      "Static codes are generated in the browser, so payment and contact details never leave the device.",
      "Dynamic short links can be re-pointed without reprinting, with scan analytics that never store raw IPs.",
      "Multi-tenant organisations, Argon2id password hashing and a rate-limited developer API.",
    ],
    stack: ["Next.js 16", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    status: "Live",
    proof: "MIT · 264 tests · CI",
    primaryLink: { label: "Open QuickQR", url: "https://quickqr.amanxthink11.com" },
    sourceUrl: "https://github.com/amanxthink11/quickqr",
    screenshot: { src: "/work/quickqr.png", width: 2560, height: 1600, displayUrl: "quickqr.amanxthink11.com" },
  },
  {
    slug: "billzo",
    name: "Billzo",
    tagline: "Offline-first billing and accounting for small businesses.",
    description:
      "Desktop billing that keeps working when the internet doesn't. GST invoices, purchases, expenses, inventory and a double-entry ledger with Trial Balance, P&L and Balance Sheet built in.",
    highlights: [
      "GST tax invoices with UPI QR codes, printed on A4 or 58/80 mm thermal paper.",
      "Recurring invoices, receivable/payable aging and stock valuation — all computed locally.",
      "Money is stored as integer paise, and every backup is integrity-checked before restore.",
    ],
    stack: ["Flutter", "Dart", "SQLite", "Riverpod"],
    status: "v1.0.1 · Windows",
    proof: "MIT · 315 tests · 0 analyzer issues",
    primaryLink: { label: "Download for Windows", url: "https://github.com/amanxthink11/billzo/releases" },
    sourceUrl: "https://github.com/amanxthink11/billzo",
  },
];

// Add a Google Play `url` to an app and the list links to it automatically.
export const SIDE_PROJECTS: SideProject[] = [
  {
    name: "CardLedger",
    kind: "Android app",
    description: "Offline score ledger for Call Break and other card games — built to end arguments at family game nights.",
  },
  {
    name: "MDR Calculator",
    kind: "Android app",
    description: "Shows small merchants exactly what card and digital payment fees cost them on each transaction.",
  },
  {
    name: "ArrowZen",
    kind: "Android game",
    description: "A minimalist directional-logic puzzle game. No noisy ads, no endless tutorials.",
  },
  {
    name: "StumpTalk",
    kind: "Experiment",
    description: "Cricket scores, match insights and tournament coverage.",
    url: "https://github.com/amanxthink11/stumptalk",
  },
  {
    name: "IND Analytics",
    kind: "Experiment",
    description: "Privacy-focused, cookieless website analytics.",
    url: "https://github.com/amanxthink11/ind-analytics",
  },
  {
    name: "Publicity Poster",
    kind: "Experiment",
    description: "Marketing content and branding tools for small businesses.",
    url: "https://github.com/amanxthink11/publicity-poster",
  },
];

export const MILESTONES: Milestone[] = [
  {
    year: "2020",
    title: "Think11 — the first bet",
    body:
      "My first company: a fantasy sports platform for cricket and football. Match days taught me what real load looks like — everyone arrives in the minutes before the toss, and payments, databases and support all get tested at once. Think11 is no longer an active platform, but most of what I know about shipping under pressure started there.",
    links: [
      { label: "think11.in", url: "https://www.think11.in" },
      { label: "Think11 on LinkedIn", url: "https://www.linkedin.com/company/think11app" },
    ],
  },
  {
    year: "2021",
    title: "Building again",
    body:
      "After Think11 I wanted a company that could ship more than one product. We started taking on web, mobile and automation work for clients, and built our own Android utilities alongside it.",
  },
  {
    year: "2023",
    title: "IND Tech Mark, incorporated",
    body:
      "IND Tech Mark Private Limited was incorporated in Patna on 28 November 2023. Staying in Bihar is deliberate: good software doesn't need a Bengaluru address.",
    links: [
      { label: "indtechmark.com", url: "https://indtechmark.com" },
      { label: "IND Tech Mark on LinkedIn", url: "https://www.linkedin.com/company/indtechmark" },
    ],
  },
  {
    year: "2026",
    title: "Building in the open",
    body:
      "Released QuickQR and Billzo as open-source products — QR codes, billing and GST tools for the shops, cafes and clinics around me.",
    links: [{ label: "github.com/amanxthink11", url: "https://github.com/amanxthink11" }],
  },
];

export const PRINCIPLES: Principle[] = [
  { title: "Build with purpose", body: "Start from a problem someone has today, not from a tool you want to try." },
  { title: "Learn by building", body: "You only understand a system after you've had to fix it in production." },
  { title: "Think long term", body: "Shortcuts in schemas, hiring and client work compound into fragile businesses." },
  { title: "Keep things simple", body: "The best software has the fewest moving parts that still do the whole job." },
  { title: "Ship something real", body: "An imperfect tool in users' hands beats a perfect plan in your head." },
];

export const NOW = [
  { label: "QuickQR", detail: "Phase 2 — dynamic codes, scan analytics and the developer API." },
  { label: "Billzo", detail: "Windows today, on an architecture built to reach Android." },
  { label: "IND Tech Mark", detail: "Web, mobile and automation projects for clients." },
  { label: "Exploring", detail: "AI-assisted workflows and developer tools." },
];

export type Neon = "red" | "lamp" | "green" | "cyan" | "yellow" | "pink";

// Scoreboard counters. `from` is where the count-up starts (a year shouldn't count up from 0).
export const STATS: { value: number; from?: number; label: string; color: Neon }[] = [
  { value: 2020, from: 2000, label: "First company founded", color: "red" },
  { value: 2, label: "Open-source products", color: "lamp" },
  { value: 579, label: "Automated tests across them", color: "green" },
  { value: 3, label: "Android apps shipped", color: "cyan" },
];

// Words on the caution-tape marquee under the hero.
export const TAPE_WORDS = ["QuickQR", "Billzo", "SaaS", "Offline-first", "UPI & GST", "Open source", "Flutter", "Next.js"];

export const TOOLKIT = ["TypeScript", "Next.js", "React", "Flutter", "Dart", "PostgreSQL", "SQLite", "Prisma"];

// Draggable stickers on the skills board: the toolkit, what it's used for, and life off the keyboard.
export const SKILL_STICKERS = [
  ...TOOLKIT,
  "Tailwind CSS",
  "Git",
  "SaaS platforms",
  "Offline-first apps",
  "UPI & GST tooling",
  "Developer APIs",
  "AI-assisted workflows",
  "Open source",
  "Cricket",
  "Chess",
];

// From the sign-off of Aman's GitHub profile README.
export const MOTTO = "Build with purpose. Keep it useful. Ship it.";

export const CLOSING_LINE ="The destination keeps changing. The desire to build doesn't.";
