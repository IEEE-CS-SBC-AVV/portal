import type { MetadataRoute } from "next";
import { getEvents, getNews } from "@/lib/contents";
import { SITE_CONFIG } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const staticPages = [
    { route: "", priority: 1.0, changeFrequency: "monthly" as const },
    { route: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/committee", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/events", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/news", priority: 0.8, changeFrequency: "weekly" as const },
    { route: "/gallery", priority: 0.6, changeFrequency: "monthly" as const },
    { route: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/join", priority: 0.9, changeFrequency: "monthly" as const },
    {
      route: "/collabratec",
      priority: 0.5,
      changeFrequency: "monthly" as const,
    },
    {
      route: "/membership",
      priority: 0.4,
      changeFrequency: "monthly" as const,
    },
    {
      route: "/scope-members",
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },
  ];

  const staticEntries = staticPages.map(
    ({ route, priority, changeFrequency }) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    })
  );

  let eventEntries: MetadataRoute.Sitemap[number][] = [];
  try {
    const events = getEvents();
    eventEntries = events.map((event) => ({
      url: `${baseUrl}/events/${event.slug}`,
      lastModified: new Date(event.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Failed to load events for sitemap:", error);
    }
    eventEntries = [];
  }

  let newsEntries: MetadataRoute.Sitemap[number][] = [];
  try {
    const news = getNews();
    newsEntries = news.map((article) => ({
      url: `${baseUrl}/news/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Failed to load news for sitemap:", error);
    }
    newsEntries = [];
  }

  return [...staticEntries, ...eventEntries, ...newsEntries];
}
