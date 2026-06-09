import { getEvents } from "@/lib/contents";
import type { Event } from "@/lib/contents";
import { SITE_CONFIG } from "@/lib/constants";

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const baseUrl = SITE_CONFIG.url;
  let events: Event[] = [];
  try {
    events = getEvents();
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Failed to load events for feed.xml:", error);
    }
    events = [];
  }

  const items = events.map((event) => {
    const formattedDate = new Date(event.date).toUTCString();
    const description = escapeXml(event.excerpt);
    const title = escapeXml(event.title);

    return `
  <item>
    <title>${title}</title>
    <link>${baseUrl}/events/${event.slug}</link>
    <description>${description}</description>
    <pubDate>${formattedDate}</pubDate>
    <guid>${baseUrl}/events/${event.slug}</guid>
  </item>`;
  });

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>IEEE CS SBC AVV - Events</title>
    <link>${baseUrl}</link>
    <description>Latest events from IEEE Computer Society Student Branch at Amrita Vishwa Vidyapeetham</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items.join("")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
