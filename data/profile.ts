export const profile = {
  name: "Sanjay Kumar M.",
  shortName: "Sanjay M.",
  role: "Software Engineer II",
  discipline: "Full Stack",
  positioning: "Full-Stack · AI-Assisted Engineering",
  summary:
    "I build production-grade software and use AI-assisted engineering workflows to understand, debug, refactor and develop software faster.",
  email: "sanjuny07@gmail.com",
  heroTech: ["React", "Next.js", "Node.js", "NestJS", "Java", "PostgreSQL"],
} as const;

export const seo = {
  title:
    "Sanjay Kumar M. — Software Engineer II | Full-Stack & AI-Assisted Engineering",
  description:
    "Full-stack software engineer building production SaaS, B2B platforms, scalable integrations and AI-assisted engineering workflows.",
} as const;

export const about = {
  eyebrow: "About",
  title: "Building production software.",
  paragraphs: [
    "I am a full-stack software engineer with 3+ years of experience building and maintaining production SaaS and B2B applications.",
    "The work covers full-stack development, multi-tenant platforms, REST APIs, third-party integrations, real-time applications, production debugging, application deployments, and legacy application modernization.",
    "I use Cursor, ChatGPT, and Claude for codebase analysis, debugging, refactoring, and development workflows, and I keep ownership of implementation and review.",
  ],
  areas: [
    "Full-stack development",
    "Multi-tenant platforms",
    "REST APIs",
    "Third-party integrations",
    "Real-time applications",
    "Production debugging",
    "Application deployments",
    "Legacy application modernization",
    "AI-assisted development",
  ],
} as const;

export const highlights = [
  { primary: "3+", secondary: "Years experience" },
  { primary: "Full-stack", secondary: "Engineering" },
  { primary: "B2B", secondary: "Platforms" },
  { primary: "AI-assisted", secondary: "Workflows" },
] as const;

export const principles = [
  { number: "01", text: "Understand before changing." },
  { number: "02", text: "Production behaviour matters." },
  {
    number: "03",
    text: "AI accelerates engineering; engineering judgment remains human.",
  },
  {
    number: "04",
    text: "Modernize without breaking what already works.",
  },
] as const;

export const currentFocus = [
  "Full-stack engineering",
  "Production SaaS",
  "B2B systems",
  "AI-assisted engineering",
  "Legacy modernization",
  "Scalable integrations",
] as const;

export const navItems = [
  { href: "#about", id: "about", label: "About" },
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#ai", id: "ai", label: "AI Engineering" },
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#stack", id: "stack", label: "Stack" },
  { href: "#contact", id: "contact", label: "Contact" },
] as const;
