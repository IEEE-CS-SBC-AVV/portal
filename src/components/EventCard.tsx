"use client";

import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  MapPin,
  Clock,
  Ticket,
  Wrench,
  Presentation,
  Terminal,
  Video,
  Trophy,
  Heart,
  FileText,
  Star,
} from "lucide-react";
import { isUpcoming, formatDate } from "@/lib/utils";
import { EVENT_TYPE_COLORS } from "@/lib/constants";
import type { Event } from "@/lib/types";

const EVENT_ICON: Record<string, React.ReactNode> = {
  workshop: <Wrench className="w-3.5 h-3.5" />,
  seminar: <Presentation className="w-3.5 h-3.5" />,
  hackathon: <Terminal className="w-3.5 h-3.5" />,
  webinar: <Video className="w-3.5 h-3.5" />,
  competition: <Trophy className="w-3.5 h-3.5" />,
  social: <Heart className="w-3.5 h-3.5" />,
  other: <FileText className="w-3.5 h-3.5" />,
};

export function EventCard({ event }: { event: Event }) {
  const upcoming = useMemo(
    () => isUpcoming(event.date, event.time),
    [event.date, event.time]
  );

  const typeColors = EVENT_TYPE_COLORS;
  const statusColor = upcoming
    ? "bg-[#78BE20] text-black"
    : "bg-[#75787b] text-black";
  const formattedDate = formatDate(event.date);

  return (
    <Link
      href={`/events/${event.id}`}
      className="cs-card bg-white hover:shadow-lg transition-shadow overflow-hidden cursor-pointer group block no-underline"
      aria-label={`View details for ${event.title}`}
    >
      {event.poster && (
        <div className="relative w-full h-48 overflow-hidden">
          {event.featured && (
            <div className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-[#FFA300] text-black text-xs font-bold rounded-full shadow-md flex items-center gap-1">
              <Star className="w-3 h-3" aria-hidden="true" /> Featured
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
            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${typeColors[event.type] || typeColors.other}`}
          >
            <span aria-hidden="true">
              {EVENT_ICON[event.type] || EVENT_ICON.other}
            </span>
            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
          </span>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor}`}
          >
            {upcoming ? "Upcoming" : "Completed"}
          </span>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00629B] transition-colors">
          {event.title}
        </h2>

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
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFA300] text-black text-sm font-semibold rounded-lg hover:bg-[#E87722] transition no-underline"
          >
            <Ticket className="w-4 h-4" />
            Register
          </a>
        )}
      </div>
    </Link>
  );
}
