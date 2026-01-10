import type { MetadataRoute } from "next";

function baseUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "https://packwoodsplates.com";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const url = baseUrl();
  const lastModified = new Date();

  return [
    { url: `${url}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${url}/sports-teams`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${url}/custom-plates`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${url}/pricing`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${url}/business-events`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${url}/nameplates`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${url}/nameplates/pricing`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${url}/contact`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
