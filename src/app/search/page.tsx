import { Suspense } from "react";
import { getEvents, getNews } from "@/lib/contents";
import SearchResultsClient from "./SearchResultsClient";
import type { Event } from "@/components/EventFilterClient";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Search Results",
  description:
    "Search events, news, and resources across the IEEE Computer Society Student Branch website.",
};

export default function SearchPage() {
  const mdEvents = getEvents();
  const mdNews = getNews();

  const events: Event[] = mdEvents.map((mdEvent, index) => ({
    id: mdEvent.slug || `event-${index}`,
    title: mdEvent.title,
    date: mdEvent.date,
    time: mdEvent.time || "TBD",
    location: mdEvent.location,
    type: (
      [
        "workshop",
        "seminar",
        "hackathon",
        "webinar",
        "competition",
        "social",
        "other",
      ] as const
    ).includes(mdEvent.type as Event["type"])
      ? (mdEvent.type as Event["type"])
      : "seminar",
    description: mdEvent.excerpt,
    speaker: mdEvent.speakers?.[0]?.name || undefined,
  }));

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs segments={[{ label: "Search" }]} />
      <section className="bg-gradient-to-r from-[#00629B] to-[#002855] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Search Results</h1>
          <p className="text-xl text-white/90">Find events, news, and more</p>
        </div>
      </section>

      <Suspense
        fallback={
          <div className="py-20 text-center text-xl text-gray-500">
            Searching...
          </div>
        }
      >
        <SearchResultsClient events={events} news={mdNews} />
      </Suspense>
    </div>
  );
}
