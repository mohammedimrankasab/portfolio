export interface GithubRepo {
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  pushed_at: string;
}

const USERNAME = "mohammedimrankasab";

export async function fetchRepo(
  repo: string
): Promise<GithubRepo> {
  const response = await fetch(
    `https://api.github.com/repos/${USERNAME}/${repo}`
  );

  if (!response.ok) {
    throw new Error("Unable to fetch repository");
  }

  return response.json() as Promise<GithubRepo>;
}