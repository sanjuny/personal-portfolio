import { isGithubUsername, isHttpUrl } from "@/lib/utils";

function readEnv(name: string) {
  return process.env[name]?.trim() ?? "";
}

const githubUsername = readEnv("NEXT_PUBLIC_GITHUB_USERNAME") || "sanjuny";
const linkedinUrl =
  readEnv("NEXT_PUBLIC_LINKEDIN_URL") ||
  "https://www.linkedin.com/in/sanjay-kumar-2b27b9243";

export const social = {
  githubUsername: isGithubUsername(githubUsername) ? githubUsername : "",
  linkedinUrl: isHttpUrl(linkedinUrl) ? linkedinUrl : "",
  resumePath: "/Sanjay-Kumar-Resume.pdf",
  resumeFileName: "Sanjay-Kumar-Resume.pdf",
} as const;

export function githubProfileUrl(username: string) {
  return `https://github.com/${username}`;
}
