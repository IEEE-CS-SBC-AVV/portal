import { getEvents } from "@/lib/contents";
import EventFilterClient from "@/components/EventFilterClient";

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

export default function EventsPage() {
  // Load events from markdown files
  const mdEvents = getEvents();

  // Convert markdown events to component Event format
  const events: Event[] = mdEvents.map((mdEvent, index) => ({
    id: mdEvent.slug || `event-${index}`,
    title: mdEvent.title,
    date: new Date(mdEvent.date),
    time: mdEvent.time || "TBD",
    location: mdEvent.location,
    type:
      (mdEvent.type as
        | "workshop"
        | "seminar"
        | "hackathon"
        | "webinar"
        | "competition") || "seminar",
    status: new Date(mdEvent.date) > new Date() ? "upcoming" : "completed",
    description: mdEvent.excerpt,
    speaker: mdEvent.speakers?.[0]?.name || undefined,
  }));

  const upcomingCount = events.filter((e) => e.status === "upcoming").length;
  const completedCount = events.filter((e) => e.status === "completed").length;

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#00629B] to-[#002855] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
          <p className="text-xl text-white/90 max-w-3xl">
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
                {events.length}
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
              <div className="text-3xl font-bold text-[#00629B]">50+</div>
              <div className="text-gray-600">Total Participants</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <EventFilterClient events={events} />

      {/* CTA Section */}
      <section className="py-16 bg-[#00629B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Want to Organize an Event?
          </h2>
          <p className="text-xl text-white/90 mb-8">
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
