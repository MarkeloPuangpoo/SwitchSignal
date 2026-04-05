const fallbackUrl = "https://switchsignal.pondetpuangpoo.online";

export function getSiteUrl() {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!envUrl) {
    return fallbackUrl;
  }

  return envUrl.startsWith("http") ? envUrl : `https://${envUrl}`;
}

export const siteConfig = {
  name: "Switch Signal",
  shortName: "Switch Signal",
  description:
    "Switch Signal is a premium Thai-first hub for quiz games, character reads, and share-worthy mini experiences built with a polished modern feel.",
  keywords: [
    "Switch Signal",
    "quiz hub",
    "game hub",
    "character quiz",
    "personality quiz",
    "thai personality quiz",
    "interactive quiz hub",
    "mini game hub",
    "school character quiz",
    "Next.js game hub",
  ],
  creator: "MarkeloPuangpoo",
  githubUrl: "https://github.com/MarkeloPuangpoo",
};
