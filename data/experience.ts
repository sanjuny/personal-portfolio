export type Engagement = {
  name: string;
  summary: string;
  technologies: string[];
};

export type Role = {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  startDate: string;
  endDate?: string;
  summary: string;
  capabilities?: string[];
  engagements?: Engagement[];
};

export const experience: Role[] = [
  {
    title: "Software Engineer II / Full Stack",
    company: "Opskube",
    location: "Noida, UP",
    start: "Mar 2023",
    end: "Present",
    startDate: "2023-03",
    summary:
      "Build and maintain production SaaS and B2B travel applications across frontend, backend, integrations, deployment and production support. Work closely with clients on live issues: take calls, ship a fix in a short time, and update them directly, including on WhatsApp, so production is not left waiting.",
    capabilities: [
      "SaaS Development",
      "B2B Platforms",
      "API Development",
      "Third-Party Integrations",
      "Production Debugging",
      "Client Communication",
      "Legacy Modernization",
      "Deployment",
      "Real-Time Applications",
    ],
    engagements: [
      {
        name: "SYSTACC",
        summary:
          "Worked on a multi-tenant travel accounting SaaS platform covering full-stack features, financial workflows, reporting, tenant-aware functionality, production debugging and legacy application modernization.",
        technologies: [
          "Next.js",
          "React",
          "TypeScript",
          "Node.js",
          "NestJS",
          "Express",
          "PostgreSQL",
        ],
      },
      {
        name: "Aadesh Travels",
        summary:
          "Worked on a B2B travel platform spanning flight, hotel, car and insurance workflows, including frontend modernization, backend services, integrations, production issue resolution and deployments.",
        technologies: ["Next.js", "React", "NestJS", "Java"],
      },
      {
        name: "Aadesh Cabs",
        summary:
          "Worked on backend and admin functionality for a ride-sharing platform, including APIs, fare calculation, wallet, referral/promocode functionality, real-time notifications, payments, location tracking and user management.",
        technologies: ["Java", "NestJS", "React"],
      },
      {
        name: "Catapulto",
        summary:
          "Refactored legacy React class components to functional components and worked on courier tracking with Yandex Maps, along with SEO improvements.",
        technologies: ["React", "Yandex Maps"],
      },
    ],
  },
  {
    title: "Fullstack Developer Intern",
    company: "Brototype",
    location: "Kochi, KL",
    start: "Apr 2022",
    end: "Feb 2023",
    startDate: "2022-04",
    endDate: "2023-02",
    summary:
      "Developed fullstack features with React and Node.js using REST APIs, Redux state management, and realtime communication patterns.",
  },
];
