import Image from "next/image";

import { personalProjects } from "@/data/personalProjects";
import { isHttpUrl } from "@/lib/utils";

import { Section, SectionHeader } from "@/components/ui/section";

export function PersonalProjects() {
  const projects = personalProjects.filter(
    (project) => project.title.trim().length > 0,
  );

  return (
    <Section id="projects" labelledBy="projects-heading">
      <SectionHeader
        title="Personal projects"
        headingId="projects-heading"
        description="Work I personally own, or that I am allowed to publish."
      />
      {projects.length === 0 ? (
        <p className="mt-10 max-w-2xl border border-border px-6 py-12 text-lg leading-8 sm:px-8">
          Personal projects will appear here.
        </p>
      ) : (
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {projects.map((project) => {
            const github = isHttpUrl(project.githubUrl) ? project.githubUrl : "";
            const live = isHttpUrl(project.liveUrl) ? project.liveUrl : "";
            const image = project.image.startsWith("/") ? project.image : "";
            return (
              <li
                key={project.title}
                className="flex h-full flex-col border border-border"
              >
                {image ? (
                  <Image
                    src={image}
                    alt={project.title}
                    width={1200}
                    height={720}
                    className="h-auto w-full border-b border-border"
                  />
                ) : null}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-medium">{project.title}</h3>
                  {project.description ? (
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {project.description}
                    </p>
                  ) : null}
                  {project.technologies.length > 0 ? (
                    <p className="mt-3 font-mono text-xs text-muted">
                      {project.technologies.join(" · ")}
                    </p>
                  ) : null}
                  {github || live ? (
                    <ul className="mt-4 flex flex-wrap gap-4 text-sm">
                      {github ? (
                        <li>
                          <a
                            href={github}
                            className="text-muted hover:text-foreground"
                            target="_blank"
                            rel="noreferrer"
                          >
                            GitHub
                          </a>
                        </li>
                      ) : null}
                      {live ? (
                        <li>
                          <a
                            href={live}
                            className="text-muted hover:text-foreground"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Live
                          </a>
                        </li>
                      ) : null}
                    </ul>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </Section>
  );
}
