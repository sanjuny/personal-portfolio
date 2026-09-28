import { experience } from "@/data/experience";

import { Section, SectionHeader } from "@/components/ui/section";

export function Experience() {
  return (
    <Section id="experience" labelledBy="experience-heading">
      <SectionHeader
        title="Professional experience"
        headingId="experience-heading"
        description="Roles and the products I have contributed to as an engineer."
      />
      <div className="mt-14 space-y-16">
        {experience.map((role) => (
          <article key={`${role.company}-${role.startDate}`}>
            <div className="flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
                  {role.title}
                </h3>
                <p className="mt-2 text-sm text-muted">
                  {role.company} · {role.location}
                </p>
              </div>
              <p className="font-mono text-xs text-muted">
                <time dateTime={role.startDate}>{role.start}</time>
                {" — "}
                {role.endDate ? (
                  <time dateTime={role.endDate}>{role.end}</time>
                ) : (
                  role.end
                )}
              </p>
            </div>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-muted sm:text-base">
              {role.summary}
            </p>
            {role.capabilities ? (
              <ul className="mt-6 flex flex-wrap gap-2">
                {role.capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="border border-border px-2.5 py-1 text-xs text-muted"
                  >
                    {capability}
                  </li>
                ))}
              </ul>
            ) : null}
            {role.engagements ? (
              <div className="mt-10">
                <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
                  Scope of work
                </p>
                <ol className="mt-2 divide-y divide-border border-t border-border">
                  {role.engagements.map((engagement) => (
                    <li key={engagement.name} className="py-6">
                      <h4 className="text-base font-medium">{engagement.name}</h4>
                      <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">
                        {engagement.summary}
                      </p>
                      <p className="mt-3 font-mono text-xs text-muted">
                        {engagement.technologies.join(" · ")}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}
