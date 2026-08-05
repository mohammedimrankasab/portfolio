import { useEffect, useState } from "react";

import { fetchRepo } from "../../services/github";
import type { GithubRepo } from "../../services/github";

import { PORTFOLIO_DATA } from "../data/portfolio";

export function useGithubRepos() {
  const [repos, setRepos] = useState<
    Record<string, GithubRepo>
  >({});

  useEffect(() => {
    async function loadRepos() {
      const results = await Promise.all(
        PORTFOLIO_DATA.projects.map(async (project) => {
          const repo = await fetchRepo(project.repo);

          return [project.repo, repo] as const;
        })
      );

      setRepos(Object.fromEntries(results));
    }

    loadRepos();
  }, []);

  return repos;
}