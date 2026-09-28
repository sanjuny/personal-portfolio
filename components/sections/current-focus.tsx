import { currentFocus } from "@/data/profile";

import { Section, SectionHeader } from "@/components/ui/section";

export function CurrentFocus() {
  return (
    <Section id="focus" labelledBy="focus-heading">
      <SectionHeader
        title="Currently focused on"
        headingId="focus-heading"
      />
      <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {currentFocus.map((item) => (
          <li
            key={item}
            className="border border-border px-4 py-4 text-sm text-foreground"
          >
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
