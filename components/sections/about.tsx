import { about } from "@/data/profile";

import { Section, SectionHeader } from "@/components/ui/section";

export function About() {
  return (
    <Section id="about" labelledBy="about-heading" className="border-t-0">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <SectionHeader
          eyebrow={about.eyebrow}
          title={about.title}
          headingId="about-heading"
        />
        <div>
          <div className="space-y-4">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-7 text-muted">
                {paragraph}
              </p>
            ))}
          </div>
          <ul className="mt-8 grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {about.areas.map((area) => (
              <li key={area} className="text-sm text-foreground">
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
