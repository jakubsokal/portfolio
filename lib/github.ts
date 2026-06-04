import type { GitHubRepo } from "@/types";

const GITHUB_API = "https://api.github.com";

export async function getGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const res = await fetch(
      `${GITHUB_API}/users/${username}/repos?per_page=100&sort=updated&type=owner`,
      {
        headers,
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      console.error(`GitHub API error: ${res.status} ${res.statusText}`);
      return [];
    }

    const repos: GitHubRepo[] = await res.json();

    return repos
      .filter((repo) => !repo.fork && repo.visibility === "public")
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 24);
  } catch (error) {
    console.error("Failed to fetch GitHub repos:", error);
    return [];
  }
}

export function getTopicsForFilter(repos: GitHubRepo[]): string[] {
  const topicSet = new Set<string>();
  repos.forEach((repo) => {
    repo.topics?.forEach((topic) => topicSet.add(topic));
  });
  return Array.from(topicSet).sort();
}

export function getLanguagesForFilter(repos: GitHubRepo[]): string[] {
  const langSet = new Set<string>();
  repos.forEach((repo) => {
    if (repo.language) langSet.add(repo.language);
  });
  return Array.from(langSet).sort();
}
