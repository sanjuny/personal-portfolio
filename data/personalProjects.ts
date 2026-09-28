export type PersonalProject = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
  featured: boolean;
};

/**
 * Personal projects Sanjay owns or is allowed to publish.
 * Leave this empty until there is something to show.
 * Employment work does not belong here.
 */
export const personalProjects: PersonalProject[] = [];
