"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Calendar, MapPin, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type:
    | "workshop"
    | "seminar"
    | "hackathon"
    | "webinar"
    | "competition"
    | "social"
    | "other";
  description: string;
  speaker?: string;
}

function isUpcoming(dateStr: string): boolean {
  try {
    return new Date(dateStr) > new Date();
  } catch {
    return false;
  }
}

function EventCard({ event }: { event: Event }) {
  const upcoming = isUpcoming(event.date);

  const typeColors: Record<string, string> = {
    workshop: "bg-[#00B5E2]/10 text-[#004D66]",
    seminar: "bg-[#78BE20]/10 text-[#3D5F13]",
    hackathon: "bg-[#981D97]/10 text-[#772583]",
    webinar: "bg-[#FFD100]/10 text-[#7A6300]",
    competition: "bg-[#BA0C2F]/10 text-[#6E0916]",
    social: "bg-[#009CA6]/10 text-[#005D63]",
    other: "bg-[#75787b]/10 text-[#4A4A4A]",
  };

  const statusColor = upcoming ? "bg-[#78BE20]" : "bg-[#75787b]";

  const formattedDate = (() => {
    try {
      const d = new Date(event.date);
      if (isNaN(d.getTime())) return event.date;
      return format(d, "MMMM d, yyyy");
    } catch {
      return event.date;
    }
  })();

  return (
    <Link href={`/events/${event.id}`} className="block no-underline group">
      <div className="cs-card p-6 bg-white group-hover:shadow-lg transition-shadow">
        {/* Status Badge */}
        <div className="flex justify-between items-start mb-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${typeColors[event.type] || typeColors.other}`}
          >
            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
          </span>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${statusColor}`}
          >
            {upcoming ? "Upcoming" : "Completed"}
          </span>
        </div>

        {/* Event Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00629B] transition-colors">
          {event.title}
        </h3>

        {/* Event Details */}
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

        {/* Speaker */}
        {event.speaker && (
          <p className="text-sm text-gray-700 mb-3">
            <span className="font-semibold">Speaker:</span> {event.speaker}
          </p>
        )}

        {/* Description */}
        <p className="text-gray-600 mb-4 text-sm line-clamp-3">
          {event.description}
        </p>
      </div>
    </Link>
  );
}

export default function EventFilterClient({ events }: { events: Event[] }) {
  const [filter, setFilter] = useState<"all" | "upcoming" | "completed">("all");

  const counts = useMemo(() => {
    const upcoming = events.filter((e) => isUpcoming(e.date)).length;
    const completed = events.filter((e) => !isUpcoming(e.date)).length;
    return { all: events.length, upcoming, completed };
  }, [events]);

  const filteredEvents = events.filter((event) => {
    if (filter === "all") return true;
    const upcoming = isUpcoming(event.date);
    return filter === "upcoming" ? upcoming : !upcoming;
  });

  return (
    <>
      {/* Filter Buttons */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-2 sm:space-x-4">
            {(["all", "upcoming", "completed"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`relative px-5 sm:px-6 py-2.5 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 ${
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

      {/* Events Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {filteredEvents.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center py-16"
              >
                <p className="text-gray-500 text-lg">No events found.</p>
                <p className="text-gray-400 text-sm mt-2">
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
      </section>
    </>
  );
}
