"use client";

import { useState } from "react";
import { Calendar, MapPin, Clock, ExternalLink } from "lucide-react";
import { format } from "date-fns";

interface Event {
  id: string;
  title: string;
  date: Date;
  time: string;
  location: string;
  type: "workshop" | "seminar" | "hackathon" | "webinar" | "competition";
  status: "upcoming" | "completed";
  description: string;
  attendees?: number;
  speaker?: string;
  image?: string;
  registrationLink?: string;
  resources?: Array<{
    title: string;
    url: string;
  }>;
}

function EventCard({ event }: { event: Event }) {
  const typeColors = {
    workshop: "bg-[#00B5E2]/10 text-[#004D66]",
    seminar: "bg-[#78BE20]/10 text-[#3D5F13]",
    hackathon: "bg-[#981D97]/10 text-[#772583]",
    webinar: "bg-[#FFD100]/10 text-[#7A6300]",
    competition: "bg-[#BA0C2F]/10 text-[#6E0916]",
  };

  const statusColors = {
    upcoming: "bg-[#78BE20]",
    completed: "bg-[#75787b]",
  };

  return (
    <div className="cs-card p-6">
      {/* Status Badge */}
      <div className="flex justify-between items-start mb-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${typeColors[event.type]}`}
        >
          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
        </span>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${statusColors[event.status]}`}
        >
          {event.status === "upcoming" ? "Upcoming" : "Completed"}
        </span>
      </div>

      {/* Event Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>

      {/* Event Details */}
      <div className="space-y-2 mb-4 text-gray-600">
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-2 text-[#00629B]" />
          <span className="text-sm">{format(event.date, "MMMM d, yyyy")}</span>
        </div>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-2 text-[#00629B]" />
          <span className="text-sm">{event.time}</span>
        </div>
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-2 text-[#00629B]" />
          <span className="text-sm">{event.location}</span>
        </div>
        {event.attendees && (
          <div className="flex items-center">
            <span className="text-sm font-semibold text-[#00629B]">
              {event.attendees} attendees
            </span>
          </div>
        )}
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

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2">
        {event.status === "upcoming" && event.registrationLink && (
          <a
            href={event.registrationLink}
            className="btn-cs-primary text-sm flex items-center no-underline"
          >
            Register Now
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        )}
        {event.status === "completed" && event.resources && (
          <>
            {event.resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                className="btn-cs-secondary text-sm flex items-center no-underline"
              >
                {resource.title}
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default function EventFilterClient({ events }: { events: Event[] }) {
  const [filter, setFilter] = useState<"all" | "upcoming" | "completed">("all");

  const filteredEvents = events.filter((event) => {
    if (filter === "all") return true;
    return event.status === filter;
  });

  return (
    <>
      {/* Filter Buttons */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                filter === "all"
                  ? "bg-[#00629B] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              All Events ({events.length})
            </button>
            <button
              onClick={() => setFilter("upcoming")}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                filter === "upcoming"
                  ? "bg-[#00629B] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Upcoming ({events.filter((e) => e.status === "upcoming").length})
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                filter === "completed"
                  ? "bg-[#00629B] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Completed ({events.filter((e) => e.status === "completed").length}
              )
            </button>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No events found.</p>
            </div>
          ) : (
            <div
              className={`grid gap-8 ${
                filteredEvents.length === 1
                  ? "grid-cols-1 max-w-md mx-auto"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
