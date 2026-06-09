"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Calendar, FileText } from "lucide-react";
import EventFilterClient from "@/components/EventFilterClient";
import type { Event } from "@/lib/types";
import { formatDate } from "@/lib/utils";

interface NewsSearchItem {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

interface SearchResultsClientProps {
  events: Event[];
  news: NewsSearchItem[];
}

export default function SearchResultsClient({
  events,
  news,
}: SearchResultsClientProps) {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const lowerQuery = query.toLowerCase();

  const filteredEvents = events.filter((event) => {
    return (
      event.title.toLowerCase().includes(lowerQuery) ||
      event.description.toLowerCase().includes(lowerQuery) ||
      event.location.toLowerCase().includes(lowerQuery)
    );
  });

  const filteredNews = news.filter((article) => {
    return (
      article.title.toLowerCase().includes(lowerQuery) ||
      article.excerpt.toLowerCase().includes(lowerQuery)
    );
  });

  const totalResults = filteredEvents.length + filteredNews.length;

  if (!query.trim()) {
    return (
      <div className="py-12 bg-warm min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="cs-card p-12 text-center">
            <h2 className="text-xl font-medium text-gray-900 mb-2">
              Search the site
            </h2>
            <p className="text-gray-600">
              Enter a search term to find events, news, and more.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="py-12 bg-warm min-h-[50vh]"
      aria-live="polite"
      role="region"
      aria-label="Search results"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Search results for:{" "}
            <span className="text-[#00629B]">&quot;{query}&quot;</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Found {totalResults} result{totalResults !== 1 ? "s" : ""} matching
            your search.
          </p>
        </div>

        {totalResults === 0 ? (
          <div className="cs-card p-12 text-center">
            <h2 className="text-xl font-medium text-gray-900 mb-2">
              No results found
            </h2>
            <p className="text-gray-600">
              We couldn&apos;t find anything matching &quot;{query}&quot;. Try
              adjusting your search terms.
            </p>
          </div>
        ) : (
          <div className="space-y-10">
            {filteredEvents.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  Events ({filteredEvents.length})
                </h3>
                <EventFilterClient events={filteredEvents} />
              </div>
            )}

            {filteredNews.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#00629B]" />
                  News Articles ({filteredNews.length})
                </h3>
                <div className="grid gap-4">
                  {filteredNews.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/news/${article.slug}`}
                      className="cs-card p-6"
                    >
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {article.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2 flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(article.date)}
                      </p>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {article.excerpt}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
