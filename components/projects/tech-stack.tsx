import { skillGroups } from "@/data/skills";

import { Section, SectionHeader } from "@/components/ui/section";

export function TechStack() {
  return (
    <Section id="stack" labelledBy="stack-heading">
      <SectionHeader title="Technology stack" headingId="stack-heading" />
      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
              {group.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
