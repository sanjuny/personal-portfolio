import { ArrowUpRight, Star } from "lucide-react";

import { githubProfileUrl, social } from "@/data/social";
import { getPublicRepos } from "@/lib/github";

import { Section, SectionHeader } from "@/components/ui/section";

export async function GithubSection() {
  if (!social.githubUsername) {
    return (
      <Section id="github" labelledBy="github-heading">
        <SectionHeader title="GitHub" headingId="github-heading" />
        <div className="mt-10 max-w-2xl border border-border px-6 py-12 sm:px-8">
          <p className="text-lg leading-8">Public repositories will appear here.</p>
          <p className="mt-3 text-sm leading-6 text-muted">
            Set{" "}
            <code className="font-mono text-foreground">
              NEXT_PUBLIC_GITHUB_USERNAME
            </code>{" "}
            to list them.
          </p>
        </div>
      </Section>
    );
  }

  const profileUrl = githubProfileUrl(social.githubUsername);
  const result = await getPublicRepos(social.githubUsername);

  return (
    <Section id="github" labelledBy="github-heading">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader
          title="GitHub"
          headingId="github-heading"
          description={`Public repositories from ${social.githubUsername}.`}
        />
        <a
          href={profileUrl}
          target="_blank"
          rel="noreferrer me"
          className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground"
        >
          View profile
          <ArrowUpRight className="size-4" aria-hidden />
        </a>
      </div>

      {!result.ok ? (
        <p className="mt-10 max-w-2xl text-sm leading-6 text-muted">
          Public repositories could not be loaded right now.{" "}
          <a href={profileUrl} className="text-foreground underline" target="_blank" rel="noreferrer">
            Open the GitHub profile
          </a>
          .
        </p>
      ) : result.repos.length === 0 ? (
        <p className="mt-10 text-sm text-muted">No public repositories to show.</p>
      ) : (
        <ul className="mt-12 grid gap-3 md:grid-cols-2">
          {result.repos.map((repo) => (
            <li key={repo.id} className="border border-border p-5">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-base font-medium">
                  <a
                    href={repo.htmlUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-accent"
                  >
                    {repo.name}
                  </a>
                </h3>
                {repo.stars > 0 ? (
                  <p className="inline-flex items-center gap-1 font-mono text-xs text-muted">
                    <Star className="size-3" aria-hidden />
                    <span className="sr-only">{repo.stars} stars</span>
                    <span aria-hidden>{repo.stars}</span>
                  </p>
                ) : null}
              </div>
              {repo.description ? (
                <p className="mt-2 text-sm leading-6 text-muted">{repo.description}</p>
              ) : null}
              <div className="mt-4 flex items-center justify-between gap-3">
                {repo.language ? (
                  <p className="font-mono text-xs text-muted">{repo.language}</p>
                ) : (
                  <span />
                )}
                <a
                  href={repo.htmlUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground"
                >
                  GitHub
                  <ArrowUpRight className="size-3.5" aria-hidden />
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
