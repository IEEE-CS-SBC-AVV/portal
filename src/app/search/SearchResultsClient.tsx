"use client";

import { useSearchParams } from "next/navigation";
import EventFilterClient from "@/components/EventFilterClient";
import type { Event } from "@/components/EventFilterClient";

interface SearchResultsClientProps {
  events: Event[];
}

export default function SearchResultsClient({
  events,
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

  return (
    <div className="py-12 bg-gray-50 min-h-[50vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Search results for:{" "}
            <span className="text-[#00629B]">&quot;{query}&quot;</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Found {filteredEvents.length} event
            {filteredEvents.length !== 1 ? "s" : ""} matching your search.
          </p>
        </div>

        {filteredEvents.length > 0 ? (
          <EventFilterClient events={filteredEvents} />
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              No results found
            </h3>
            <p className="text-gray-600">
              We couldn&apos;t find anything matching &quot;{query}&quot;. Try
              adjusting your search terms.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
