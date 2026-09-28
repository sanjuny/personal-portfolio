export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Java", "SQL"],
  },
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Angular",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Ant Design",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "NestJS", "REST APIs", "WebSockets"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MongoDB"],
  },
  {
    title: "DevOps / Cloud",
    items: ["AWS", "Docker", "Nginx", "GitLab CI/CD"],
  },
  {
    title: "Engineering",
    items: [
      "Multi-tenant SaaS",
      "RBAC",
      "Microservices",
      "B2B Integrations",
      "Production Debugging",
      "Git",
    ],
  },
  {
    title: "AI-assisted engineering",
    items: ["Cursor", "ChatGPT", "Claude"],
  },
];
