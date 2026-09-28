export type PublicRepo = {
  id: number;
  name: string;
  description: string | null;
  htmlUrl: string;
  stars: number;
  language: string | null;
};

type GithubRepoResponse = {
  id?: unknown;
  name?: unknown;
  description?: unknown;
  html_url?: unknown;
  stargazers_count?: unknown;
  language?: unknown;
  fork?: unknown;
};

function toRepo(value: GithubRepoResponse): PublicRepo | null {
  if (
    typeof value.id !== "number" ||
    typeof value.name !== "string" ||
    typeof value.html_url !== "string" ||
    value.fork === true
  ) {
    return null;
  }

  return {
    id: value.id,
    name: value.name,
    description: typeof value.description === "string" ? value.description : null,
    htmlUrl: value.html_url,
    stars: typeof value.stargazers_count === "number" ? value.stargazers_count : 0,
    language: typeof value.language === "string" ? value.language : null,
  };
}

export async function getPublicRepos(
  username: string,
): Promise<{ ok: true; repos: PublicRepo[] } | { ok: false }> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=30&type=owner`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "sanjay-kumar-portfolio",
          "X-GitHub-Api-Version": "2022-11-28",
        },
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(8000),
      },
    );

    if (!response.ok) {
      return { ok: false };
    }

    const payload: unknown = await response.json();
    if (!Array.isArray(payload)) {
      return { ok: false };
    }

    const repos = payload
      .map((item) => toRepo(item as GithubRepoResponse))
      .filter((repo): repo is PublicRepo => repo !== null)
      .slice(0, 6);

    return { ok: true, repos };
  } catch {
    return { ok: false };
  }
}
