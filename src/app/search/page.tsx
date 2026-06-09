import { Suspense } from "react";
import { getEvents, getNews } from "@/lib/contents";
import { toClientEvent } from "@/lib/events";
import SearchResultsClient from "./SearchResultsClient";
import type { Metadata } from "next";
import type { Event } from "@/lib/types";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Search Results",
  description:
    "Search events, news, and resources across the IEEE Computer Society Student Branch Chapter website at Amrita Vishwa Vidyapeetham, Coimbatore.",
  robots: { index: false, follow: true },
  openGraph: {
    title: "Search Results | IEEE CS @ Amrita",
    description:
      "Search events, news, and resources across the IEEE Computer Society Student Branch Chapter website at Amrita Vishwa Vidyapeetham, Coimbatore.",
    images: [
      {
        url: "/assets/Society.jpg",
        width: 1200,
        height: 630,
        alt: "Search IEEE CS @ Amrita",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Search Results | IEEE CS @ Amrita",
    description:
      "Search events, news, and resources across the IEEE Computer Society Student Branch Chapter website.",
    images: ["/assets/Society.jpg"],
  },
};

export default function SearchPage() {
  const mdEvents = getEvents();
  const events: Event[] = mdEvents.map(toClientEvent);
  const newsItems = getNews();
  const mdNews = newsItems.map((item) => ({
    slug: item.slug,
    title: item.title,
    date: item.date,
    excerpt: item.excerpt,
  }));

  return (
    <div className="min-h-screen bg-warm">
      <Breadcrumbs segments={[{ label: "Search" }]} />
      <PageHeader
        title="Search Results"
        description="Find events, news, and more"
      />

      <Suspense
        fallback={
          <div className="py-20 text-center text-xl text-gray-600">
            Searching...
          </div>
        }
      >
        <SearchResultsClient events={events} news={mdNews} />
      </Suspense>
    </div>
  );
}
