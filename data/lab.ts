export type LabItem = {
  title: string;
  description: string;
  href: string;
  tags: string[];
};

export const labIntro =
  "Experiments, technical explorations and things I'm building outside of production work.";

/** Public experiments only. Leave empty until there is something to publish. */
export const labItems: LabItem[] = [];
