import { getGitHubRepos, getLanguagesForFilter, getTopicsForFilter } from "@/lib/github";
import ProjectsClient from "./ProjectsClient";

export default async function Projects() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "jakubsokal";
  let repos = [];
  let languages: string[] = [];
  let topics: string[] = [];

  try {
    repos = await getGitHubRepos(username);
    languages = getLanguagesForFilter(repos);
    topics = getTopicsForFilter(repos).slice(0, 12);
  } catch (e) {
    console.error("Failed to fetch GitHub repos:", e);
  }

  return (
    <ProjectsClient
      repos={repos}
      languages={languages}
      topics={topics}
      username={username}
    />
  );
}
