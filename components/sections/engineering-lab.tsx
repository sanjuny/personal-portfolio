import { labIntro, labItems } from "@/data/lab";
import { isHttpUrl } from "@/lib/utils";

import { Section, SectionHeader } from "@/components/ui/section";

export function EngineeringLab() {
  const items = labItems.filter((item) => item.title.trim().length > 0);

  return (
    <Section id="lab" labelledBy="lab-heading">
      <SectionHeader title="Engineering lab" headingId="lab-heading" />
      {items.length === 0 ? (
        <p className="mt-10 max-w-2xl text-lg leading-8 text-foreground">
          {labIntro}
        </p>
      ) : (
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {items.map((item) => {
            const href = isHttpUrl(item.href) ? item.href : "";
            return (
              <li key={item.title} className="border border-border p-5">
                <h3 className="text-base font-medium">
                  {href ? (
                    <a
                      href={href}
                      className="hover:text-accent"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </h3>
                {item.description ? (
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                ) : null}
                {item.tags.length > 0 ? (
                  <p className="mt-3 font-mono text-xs text-muted">
                    {item.tags.join(" · ")}
                  </p>
                ) : null}
              </li>
            );
          })}
        </ul>
      )}
    </Section>
  );
}
