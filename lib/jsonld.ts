import { education } from "@/data/education";
import { profile, seo } from "@/data/profile";
import { skillGroups } from "@/data/skills";
import { githubProfileUrl, social } from "@/data/social";

export function personJsonLd(siteUrl: string) {
  const sameAs = [
    social.githubUsername ? githubProfileUrl(social.githubUsername) : "",
    social.linkedinUrl,
  ].filter(Boolean);

  const alumniOf = education
    .filter((item) => item.detail.length > 0)
    .map((item) => ({
      "@type": "EducationalOrganization",
      name: item.detail.replace(/^Distance Education · /, ""),
    }));

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: siteUrl,
    jobTitle: `${profile.role} — ${profile.discipline}`,
    email: `mailto:${profile.email}`,
    description: seo.description,
    knowsAbout: skillGroups.flatMap((group) => group.items),
    worksFor: {
      "@type": "Organization",
      name: "Opskube",
    },
    ...(alumniOf.length > 0 ? { alumniOf } : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}
