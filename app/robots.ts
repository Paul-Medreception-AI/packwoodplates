import type { MetadataRoute } from "next";

function baseUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "https://packwoodsplates.com";
}

export default function robots(): MetadataRoute.Robots {
  const url = baseUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${url}/sitemap.xml`,
    host: url,
  };
}
