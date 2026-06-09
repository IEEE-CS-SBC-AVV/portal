import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

function logError(...args: unknown[]) {
  if (process.env.NODE_ENV !== "production") {
    console.error(...args);
  }
}

// Event Types
interface EventResource {
  title: string;
  url: string;
  type?: "slides" | "github" | "video" | "link";
}

interface EventFrontmatter {
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
  resources?: EventResource[];
  registrationUrl?: string;
  poster?: string;
  featured?: boolean;
  excerpt: string;
}

export interface Event extends EventFrontmatter {
  slug: string;
  content: string;
}

// Get all events, sorted by date (newest first)
const VALID_EVENT_TYPES = [
  "workshop",
  "seminar",
  "hackathon",
  "webinar",
  "competition",
  "social",
  "other",
] as const;

function parseEventFrontmatter(
  data: Record<string, unknown>,
  slug: string
): EventFrontmatter | null {
  const title = data.title;
  const dateRaw = data.date;
  const excerpt = data.excerpt;
  const location = data.location;
  const type = data.type;

  let date: string;
  if (typeof dateRaw === "string") {
    date = dateRaw;
  } else if (dateRaw instanceof Date && !isNaN(dateRaw.getTime())) {
    date = dateRaw.toISOString().split("T")[0];
  } else {
    logError(`Event "${slug}": missing or invalid date`);
    return null;
  }

  if (
    typeof title !== "string" ||
    typeof excerpt !== "string" ||
    typeof location !== "string"
  ) {
    logError(
      `Event "${slug}": missing required fields (title, excerpt, location)`
    );
    return null;
  }

  if (isNaN(new Date(date).getTime())) {
    logError(`Event "${slug}": invalid date "${date}"`);
    return null;
  }

  const eventType =
    typeof type === "string" &&
    (VALID_EVENT_TYPES as readonly string[]).includes(type)
      ? type
      : "other";

  return {
    title,
    date,
    excerpt,
    location,
    type: eventType as EventFrontmatter["type"],
    time: typeof data.time === "string" ? data.time : undefined,
    speakers: Array.isArray(data.speakers)
      ? (data.speakers as Array<{ name: string; title?: string }>)
      : undefined,
    resources: Array.isArray(data.resources)
      ? (data.resources as Array<{
          title: string;
          url: string;
          type?: "slides" | "github" | "video" | "link";
        }>)
      : undefined,
    registrationUrl:
      typeof data.registrationUrl === "string"
        ? data.registrationUrl
        : undefined,
    poster: typeof data.poster === "string" ? data.poster : undefined,
    featured: data.featured === true,
  };
}

export function getEvents(): Event[] {
  try {
    const eventsDirectory = path.join(contentDirectory, "events");

    if (!fs.existsSync(eventsDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(eventsDirectory);

    const events = fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => {
        try {
          const slug = fileName.replace(/\.md$/, "");
          const fullPath = path.join(eventsDirectory, fileName);
          const fileContents = fs.readFileSync(fullPath, "utf8");
          const { data, content } = matter(fileContents);

          const frontmatter = parseEventFrontmatter(
            data as Record<string, unknown>,
            slug
          );
          if (!frontmatter) return null;

          return {
            slug,
            content,
            ...frontmatter,
          };
        } catch {
          logError("Failed to parse event file:", fileName);
          return null;
        }
      })
      .filter((event): event is Event => event !== null);

    return events.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch {
    logError("Failed to read events directory");
    return [];
  }
}

// Get a single event by slug
export function getEventBySlug(slug: string): Event | null {
  try {
    const eventsDirectory = path.join(contentDirectory, "events");
    const filePath = path.join(eventsDirectory, `${slug}.md`);
    if (!fs.existsSync(filePath)) return null;
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    const frontmatter = parseEventFrontmatter(
      data as Record<string, unknown>,
      slug
    );
    if (!frontmatter) return null;
    return { slug, content, ...frontmatter };
  } catch {
    logError(`Failed to read event: ${slug}`);
    return null;
  }
}

// News Types
export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

// Get a single news article by slug
export function getNewsBySlug(slug: string): NewsItem | null {
  try {
    const newsDirectory = path.join(contentDirectory, "news");
    const filePath = path.join(newsDirectory, `${slug}.md`);
    if (!fs.existsSync(filePath)) return null;
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    const title = data.title || slug;
    const date = data.date || "";
    if (!date || isNaN(new Date(date).getTime())) return null;
    return { slug, content, title, date, excerpt: data.excerpt || title };
  } catch {
    logError(`Failed to read news: ${slug}`);
    return null;
  }
}

// Get all news articles, sorted by date (newest first)
export function getNews(): NewsItem[] {
  try {
    const newsDirectory = path.join(contentDirectory, "news");

    if (!fs.existsSync(newsDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(newsDirectory);

    const news = fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => {
        try {
          const slug = fileName.replace(/\.md$/, "");
          const fullPath = path.join(newsDirectory, fileName);
          const fileContents = fs.readFileSync(fullPath, "utf8");
          const { data, content } = matter(fileContents);

          const title = data.title || slug;
          const date = data.date || "";
          if (!date || isNaN(new Date(date).getTime())) {
            return null;
          }
          return {
            slug,
            content,
            title,
            date,
            excerpt: data.excerpt || title,
          };
        } catch {
          logError("Failed to parse news file:", fileName);
          return null;
        }
      })
      .filter((item): item is NewsItem => item !== null);

    return news.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch {
    logError("Failed to read news directory");
    return [];
  }
}
