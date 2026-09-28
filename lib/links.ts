import { profile } from "@/data/profile";
import { githubProfileUrl, social } from "@/data/social";

export type PublicLink = {
  label: string;
  href: string;
  external?: boolean;
  downloadName?: string;
};

export function getPublicLinks(resumeAvailable: boolean): PublicLink[] {
  const links: PublicLink[] = [];

  if (social.githubUsername) {
    links.push({
      label: "GitHub",
      href: githubProfileUrl(social.githubUsername),
      external: true,
    });
  }

  if (social.linkedinUrl) {
    links.push({
      label: "LinkedIn",
      href: social.linkedinUrl,
      external: true,
    });
  }

  if (resumeAvailable) {
    links.push({
      label: "Resume",
      href: social.resumePath,
      downloadName: social.resumeFileName,
    });
  }

  return links;
}

export function mailtoHref() {
  return `mailto:${profile.email}`;
}
