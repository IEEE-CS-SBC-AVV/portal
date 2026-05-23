import { getEvents } from "@/lib/contents";
import EventFilterClient from "@/components/EventFilterClient";
import type { Event } from "@/components/EventFilterClient";

export default function EventsPage() {
  const mdEvents = getEvents();

  const events: Event[] = mdEvents.map((mdEvent, index) => ({
    id: mdEvent.slug || `event-${index}`,
    title: mdEvent.title,
    date: mdEvent.date,
    time: mdEvent.time || "TBD",
    location: mdEvent.location,
    type: (
      [
        "workshop",
        "seminar",
        "hackathon",
        "webinar",
        "competition",
        "social",
        "other",
      ] as const
    ).includes(mdEvent.type as Event["type"])
      ? (mdEvent.type as Event["type"])
      : "seminar",
    description: mdEvent.excerpt,
    speaker: mdEvent.speakers?.[0]?.name || undefined,
  }));

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#00629B] to-[#002855] text-white py-12">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-10 w-40 h-40 bg-white rounded-full mix-blend-overlay filter blur-2xl"></div>
          <div className="absolute bottom-10 right-20 w-60 h-60 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Join us for workshops, seminars, hackathons, and more to enhance
            your skills and network with peers
          </p>
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
