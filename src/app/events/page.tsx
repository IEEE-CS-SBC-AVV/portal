"use client";

import { useState } from "react";
import { Calendar, MapPin, Users, Clock, ExternalLink } from "lucide-react";
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

const sampleEvents: Event[] = [
  {
    id: "1",
    title: "Machine Learning Workshop",
    date: new Date("2024-12-15"),
    time: "10:00 AM - 4:00 PM",
    location: "Seminar Hall A, Main Building",
    type: "workshop",
    status: "completed",
    description:
      "A comprehensive hands-on workshop covering the fundamentals of machine learning, including supervised learning, neural networks, and practical implementation using Python and TensorFlow.",
    attendees: 85,
    speaker: "Dr. John Doe, IIT Bombay",
    resources: [
      { title: "Workshop Slides", url: "#" },
      { title: "Code Repository", url: "#" },
    ],
  },
  {
    id: "2",
    title: "Web Development Bootcamp",
    date: new Date("2024-11-20"),
    time: "9:00 AM - 5:00 PM",
    location: "Computer Lab 2",
    type: "workshop",
    status: "completed",
    description:
      "Full-day bootcamp on modern web development covering HTML, CSS, JavaScript, React, and deployment strategies. Participants built and deployed a complete web application.",
    attendees: 60,
    speaker: "Ms. Jane Smith, Google",
    resources: [
      { title: "Tutorial Materials", url: "#" },
      { title: "Project Template", url: "#" },
    ],
  },
  {
    id: "3",
    title: "HackNight 2024",
    date: new Date("2024-10-15"),
    time: "6:00 PM - 6:00 AM",
    location: "Innovation Lab",
    type: "hackathon",
    status: "completed",
    description:
      "12-hour overnight hackathon where teams competed to build innovative solutions to real-world problems. Themes included AI, IoT, and sustainability.",
    attendees: 120,
    resources: [
      { title: "Winning Projects", url: "#" },
      { title: "Photo Gallery", url: "#" },
    ],
  },
  {
    id: "4",
    title: "Cybersecurity Awareness Seminar",
    date: new Date("2025-01-15"),
    time: "2:00 PM - 4:00 PM",
    location: "Auditorium",
    type: "seminar",
    status: "upcoming",
    description:
      "Learn about the latest cybersecurity threats and best practices for protecting your digital identity. Topics include phishing, ransomware, and secure coding practices.",
    speaker: "Industry Expert from Cisco",
    registrationLink: "#",
  },
  {
    id: "5",
    title: "AI Ethics Discussion Panel",
    date: new Date("2025-02-10"),
    time: "3:00 PM - 5:00 PM",
    location: "Virtual (Zoom)",
    type: "webinar",
    status: "upcoming",
    description:
      "Panel discussion featuring experts from academia and industry discussing ethical considerations in AI development and deployment.",
    registrationLink: "#",
  },
];

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
            <Users className="w-4 h-4 mr-2 text-[#00629B]" />
            <span className="text-sm">{event.attendees} attendees</span>
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

export default function EventsPage() {
  const [filter, setFilter] = useState<"all" | "upcoming" | "completed">("all");

  const filteredEvents = sampleEvents.filter((event) => {
    if (filter === "all") return true;
    return event.status === filter;
  });

  const upcomingCount = sampleEvents.filter(
    (e) => e.status === "upcoming"
  ).length;
  const completedCount = sampleEvents.filter(
    (e) => e.status === "completed"
  ).length;

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#00629B] to-[#002855] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Join us for workshops, seminars, hackathons, and more to enhance
            your skills and network with peers
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-[#00629B]">
                {sampleEvents.length}
              </div>
              <div className="text-gray-600">Total Events</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">
                {upcomingCount}
              </div>
              <div className="text-gray-600">Upcoming</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-600">
                {completedCount}
              </div>
              <div className="text-gray-600">Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#00629B]">500+</div>
              <div className="text-gray-600">Total Participants</div>
            </div>
          </div>
        </div>
      </section>

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
              All Events
            </button>
            <button
              onClick={() => setFilter("upcoming")}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                filter === "upcoming"
                  ? "bg-[#00629B] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                filter === "completed"
                  ? "bg-[#00629B] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Completed
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#00629B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Want to Organize an Event?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We&apos;re always looking for new ideas and passionate organizers.
            Get in touch with us!
          </p>
          <a
            href="/contact"
            className="bg-white text-[#00629B] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block no-underline"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
