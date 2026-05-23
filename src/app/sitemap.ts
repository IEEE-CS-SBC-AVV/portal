import type { MetadataRoute } from "next";
import { getEvents, getNews } from "@/lib/contents";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cs.avv.ie";

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

  const events = getEvents();
  const eventEntries = events.map((event) => ({
    url: `${baseUrl}/events/${event.slug}`,
    lastModified: new Date(event.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const news = getNews();
  const newsEntries = news.map((article) => ({
    url: `${baseUrl}/news/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...eventEntries, ...newsEntries];
}
