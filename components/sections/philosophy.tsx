import { principles } from "@/data/profile";

import { Section, SectionHeader } from "@/components/ui/section";

export function Philosophy() {
  return (
    <Section id="philosophy" labelledBy="philosophy-heading">
      <SectionHeader title="How I engineer" headingId="philosophy-heading" />
      <ol className="mt-12 divide-y divide-border border-y border-border">
        {principles.map((principle) => (
          <li
            key={principle.number}
            className="grid gap-3 py-6 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:items-baseline sm:gap-8"
          >
            <p className="font-mono text-sm text-accent">{principle.number}</p>
            <h3 className="text-lg font-medium tracking-tight sm:text-xl">
              {principle.text}
            </h3>
          </li>
        ))}
      </ol>
    </Section>
  );
}
