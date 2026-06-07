"use client";

import { useState, useMemo, useRef } from "react";
import Image from "next/image";
import { Calendar, MapPin, Clock, Ticket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { EVENT_TYPE_COLORS } from "@/lib/constants";
import { isUpcoming, formatDate } from "@/lib/utils";
import type { Event } from "@/lib/types";

const EVENT_EMOJI: Record<string, string> = {
  workshop: "🔬",
  seminar: "🎤",
  hackathon: "💻",
  webinar: "🎥",
  competition: "🏁",
  social: "🎉",
  other: "📌",
};

function EventCard({ event }: { event: Event }) {
  const upcoming = isUpcoming(event.date, event.time);

  const typeColors = EVENT_TYPE_COLORS;

  const statusColor = upcoming ? "bg-[#78BE20]" : "bg-[#75787b]";

  const formattedDate = formatDate(event.date);

  return (
    <a
      href={`/events/${event.id}`}
      className="cs-card bg-white hover:shadow-lg transition-shadow overflow-hidden cursor-pointer group block no-underline"
      aria-label={`View details for ${event.title}`}
    >
      {event.poster && (
        <div className="relative w-full h-48 overflow-hidden">
          {event.featured && (
            <div className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-[#FFA300] text-black text-xs font-bold rounded-full shadow-md flex items-center gap-1">
              <span aria-hidden="true">⭐</span> Featured
            </div>
          )}
          <Image
            src={event.poster}
            alt={`${event.title} poster`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${typeColors[event.type] || typeColors.other}`}
          >
            <span aria-hidden="true">
              {EVENT_EMOJI[event.type] || EVENT_EMOJI.other}{" "}
            </span>
            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
          </span>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${statusColor}`}
          >
            {upcoming ? "Upcoming" : "Completed"}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00629B] transition-colors">
          {event.title}
        </h3>

        <div className="space-y-2 mb-4 text-gray-600">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-[#00629B]" />
            <span className="text-sm">{formattedDate}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-[#00629B]" />
            <span className="text-sm">{event.time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-[#00629B]" />
            <span className="text-sm">{event.location}</span>
          </div>
        </div>

        {event.speaker && (
          <p className="text-sm text-gray-700 mb-3">
            <span className="font-semibold">Speaker:</span> {event.speaker}
          </p>
        )}

        <p className="text-gray-600 mb-4 text-sm line-clamp-3">
          {event.description}
        </p>

        {event.registrationUrl && upcoming && (
          <a
            href={event.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFA300] text-black text-sm font-semibold rounded-lg hover:bg-[var(--cs-orange-dark)] transition no-underline"
            onClick={(e) => e.stopPropagation()}
          >
            <Ticket className="w-4 h-4" />
            Register
          </a>
        )}
      </div>
    </a>
  );
}

export default function EventFilterClient({ events }: { events: Event[] }) {
  const [filter, setFilter] = useState<"all" | "upcoming" | "completed">("all");

  const counts = useMemo(() => {
    const upcoming = events.filter((e) => isUpcoming(e.date, e.time)).length;
    const completed = events.filter((e) => !isUpcoming(e.date, e.time)).length;
    return { all: events.length, upcoming, completed };
  }, [events]);

  const filteredEvents = useMemo(
    () =>
      events.filter((event) => {
        if (filter === "all") return true;
        const upcoming = isUpcoming(event.date, event.time);
        return filter === "upcoming" ? upcoming : !upcoming;
      }),
    [events, filter]
  );

  const panelRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <section className="py-12 bg-[var(--warm-bg)] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex justify-center space-x-2 sm:space-x-4"
            role="tablist"
            aria-label="Event filters"
          >
            {(["all", "upcoming", "completed"] as const).map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={filter === tab}
                aria-controls="events-panel"
                onClick={() => setFilter(tab)}
                className={`relative px-5 sm:px-6 py-2.5 min-h-[44px] rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 ${
                  filter === tab
                    ? "bg-[#00629B] text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                {tab === "all"
                  ? "All Events"
                  : tab === "upcoming"
                    ? "Upcoming"
                    : "Completed"}{" "}
                <span
                  className={`inline-flex items-center justify-center ml-1.5 min-w-[22px] h-[22px] rounded-full text-xs font-bold ${
                    filter === tab
                      ? "bg-white/20 text-white"
                      : "bg-[#00629B]/10 text-[#00629B]"
                  }`}
                >
                  {counts[tab]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[var(--warm-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            id="events-panel"
            role="tabpanel"
            ref={panelRef}
            tabIndex={-1}
            aria-live="polite"
            className="focus:outline-none"
          >
            <AnimatePresence mode="wait">
              {filteredEvents.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-center py-16"
                >
                  <p className="text-gray-600 text-lg">No events found.</p>
                  <p className="text-gray-600 text-sm mt-2">
                    {filter === "upcoming"
                      ? "Check back soon for upcoming events!"
                      : "No completed events to show."}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={filter}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className={`grid gap-8 ${
                    filteredEvents.length === 1
                      ? "grid-cols-1 max-w-md mx-auto"
                      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  }`}
                >
                  {filteredEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
