export type AiPractice = {
  id: string;
  number: string;
  title: string;
  summary: string;
  detail: string;
};

export type WorkflowStep = {
  id: string;
  label: string;
  note: string;
};

export const aiPractices: AiPractice[] = [
  {
    id: "analysis",
    number: "01",
    title: "Codebase analysis",
    summary:
      "Use AI to understand unfamiliar codebases, dependencies, and application structures faster.",
    detail:
      "Get oriented in a system, follow how the pieces connect, and read the structure before changing it.",
  },
  {
    id: "debugging",
    number: "02",
    title: "Debugging",
    summary:
      "Use AI-assisted reasoning to investigate issues and accelerate debugging.",
    detail:
      "Narrow the problem, compare explanations, and move faster toward a cause that can be verified.",
  },
  {
    id: "refactoring",
    number: "03",
    title: "Refactoring",
    summary:
      "Use AI to assist with modernization and refactoring while keeping engineering review in the loop.",
    detail:
      "Reshape existing code with a human review pass before a change is accepted.",
  },
  {
    id: "development",
    number: "04",
    title: "Development",
    summary:
      "Use AI tools as engineering copilots during feature development and implementation.",
    detail:
      "Draft and implement with Cursor, ChatGPT, and Claude, then own the code that ships.",
  },
];

export const workflowBefore: WorkflowStep[] = [
  {
    id: "idea",
    label: "Idea",
    note: "Start from the problem and the constraints around it.",
  },
  {
    id: "understand",
    label: "Understand system",
    note: "Read the codebase and its behaviour before changing anything.",
  },
  {
    id: "ai",
    label: "AI",
    note: "Bring in AI tools to accelerate analysis and implementation.",
  },
];

export const workflowTools: WorkflowStep[] = [
  {
    id: "cursor",
    label: "Cursor",
    note: "Work inside the codebase with an engineering copilot.",
  },
  {
    id: "chatgpt",
    label: "ChatGPT",
    note: "Reason through issues, options, and implementation details.",
  },
  {
    id: "claude",
    label: "Claude",
    note: "Analyze code and draft changes that still go through review.",
  },
];

export const workflowAfter: WorkflowStep[] = [
  {
    id: "implementation",
    label: "Implementation",
    note: "Write the change and integrate it into the system.",
  },
  {
    id: "review",
    label: "Human review",
    note: "Engineering judgment stays with the person shipping the work.",
  },
  {
    id: "test",
    label: "Test",
    note: "Check behaviour before it reaches production.",
  },
  {
    id: "production",
    label: "Production",
    note: "Ship and support what is running.",
  },
];

export const workflowSteps: WorkflowStep[] = [
  ...workflowBefore,
  ...workflowTools,
  ...workflowAfter,
];
