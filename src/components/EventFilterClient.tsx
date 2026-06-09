"use client";

import { useState, useMemo, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { isUpcoming } from "@/lib/utils";
import type { Event } from "@/lib/types";
import { EventCard } from "./EventCard";

const TABS = ["all", "upcoming", "completed"] as const;

export default function EventFilterClient({ events }: { events: Event[] }) {
  const [filter, setFilter] = useState<"all" | "upcoming" | "completed">("all");

  const handleKeyDown = useCallback((e: React.KeyboardEvent, index: number) => {
    let newIndex: number | null = null;
    if (e.key === "ArrowRight") {
      newIndex = (index + 1) % TABS.length;
    } else if (e.key === "ArrowLeft") {
      newIndex = (index - 1 + TABS.length) % TABS.length;
    }
    if (newIndex !== null) {
      e.preventDefault();
      setFilter(TABS[newIndex]);
    }
  }, []);

  const counts = useMemo(() => {
    const upcoming = events.filter((e) => isUpcoming(e.date, e.time)).length;
    const completed = events.filter((e) => !isUpcoming(e.date, e.time)).length;
    return { all: events.length, upcoming, completed };
  }, [events]);

  const filteredEvents = useMemo(() => {
    if (filter === "all") return events;
    return events.filter((event) => {
      const upcoming = isUpcoming(event.date, event.time);
      return filter === "upcoming" ? upcoming : !upcoming;
    });
  }, [events, filter]);

  const panelRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <section className="py-12 bg-warm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex justify-center space-x-2 sm:space-x-4"
            role="tablist"
            aria-label="Event filters"
          >
            {TABS.map((tab, index) => (
              <button
                key={tab}
                role="tab"
                aria-selected={filter === tab}
                aria-controls="events-panel"
                onClick={() => setFilter(tab)}
                type="button"
                onKeyDown={(e) => handleKeyDown(e, index)}
                tabIndex={filter === tab ? 0 : -1}
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

      <section className="py-12 bg-warm">
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
