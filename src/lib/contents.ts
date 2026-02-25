import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

// Event Types
export interface EventFrontmatter {
  title: string;
  date: string;
  time?: string;
  type: "workshop" | "seminar" | "competition" | "social" | "other";
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

// Team Types
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  email?: string;
  photo?: string;
  linkedin?: string;
  github?: string;
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

// Get all team members
export function getTeamMembers(): TeamMember[] {
  const teamFile = path.join(contentDirectory, "team", "team.json");

  if (!fs.existsSync(teamFile)) {
    return [];
  }

  const fileContents = fs.readFileSync(teamFile, "utf8");
  return JSON.parse(fileContents);
}
