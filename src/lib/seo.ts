const fallbackUrl = "https://switch-signal.vercel.app";

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
    "Switch Signal is a premium Thai-first relationship-dynamic personality quiz with cinematic motion, share-worthy archetype reveals, and soft-luxe editorial energy.",
  keywords: [
    "Switch Signal",
    "relationship dynamic quiz",
    "personality quiz",
    "thai personality quiz",
    "archetype quiz",
    "romantic quiz",
    "interactive quiz app",
    "Next.js quiz app",
  ],
  creator: "MarkeloPuangpoo",
  githubUrl: "https://github.com/MarkeloPuangpoo",
};
