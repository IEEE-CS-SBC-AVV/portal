import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

// Event Types
export interface EventFrontmatter {
  title: string;
  date: string;
  time?: string;
  type:
    | "workshop"
    | "seminar"
    | "hackathon"
    | "webinar"
    | "competition"
    | "social"
    | "other";
  location: string;
  speakers?: Array<{
    name: string;
    title?: string;
  }>;
  poster?: string;
  featured?: boolean;
  excerpt: string;
}

export interface Event extends EventFrontmatter {
  slug: string;
  content: string;
}

// Get all events, sorted by date (newest first)
export function getEvents(): Event[] {
  const eventsDirectory = path.join(contentDirectory, "events");

  if (!fs.existsSync(eventsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(eventsDirectory);

  const events = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(eventsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        ...(data as EventFrontmatter),
      };
    });

  // Sort by date (newest first)
  return events.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

// Get a single event by slug
export function getEventBySlug(slug: string): Event | null {
  const events = getEvents();
  return events.find((event) => event.slug === slug) || null;
}

// News Types
export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

// Get all news articles, sorted by date (newest first)
export function getNews(): NewsItem[] {
  const newsDirectory = path.join(contentDirectory, "news");

  if (!fs.existsSync(newsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(newsDirectory);

  const news = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(newsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        title: data.title || slug,
        date: data.date || "",
        excerpt: data.excerpt || "",
      };
    });

  return news.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}
