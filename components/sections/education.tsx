import { education } from "@/data/education";

import { Section, SectionHeader } from "@/components/ui/section";

export function Education() {
  return (
    <Section id="education" labelledBy="education-heading">
      <SectionHeader title="Education" headingId="education-heading" />
      <ol className="mt-12 divide-y divide-border border-y border-border">
        {education.map((item) => (
          <li
            key={item.title}
            className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between"
          >
            <div>
              <h3 className="text-base font-medium">{item.title}</h3>
              {item.detail ? (
                <p className="mt-1 text-sm text-muted">{item.detail}</p>
              ) : null}
            </div>
            <p className="font-mono text-xs text-muted">
              <time dateTime={item.start}>{item.start}</time>
              {" — "}
              <time dateTime={item.end}>{item.end}</time>
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
