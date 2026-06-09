import type { Metadata } from "next";
import Link from "next/link";
import { getEvents } from "@/lib/contents";
import { toClientEvent } from "@/lib/events";
import EventFilterClient from "@/components/EventFilterClient";
import type { Event } from "@/lib/types";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Browse upcoming and past events organized by IEEE Computer Society Student Branch Chapter at Amrita Vishwa Vidyapeetham, Coimbatore — workshops, seminars, hackathons, and more.",
  openGraph: {
    title: "Events | IEEE CS @ Amrita",
    description:
      "Browse upcoming and past events organized by IEEE Computer Society Student Branch Chapter at Amrita Vishwa Vidyapeetham, Coimbatore — workshops, seminars, hackathons, and more.",
    images: [
      {
        url: "/assets/Society.jpg",
        width: 1200,
        height: 630,
        alt: "IEEE CS @ Amrita Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Events | IEEE CS @ Amrita",
    description:
      "Browse upcoming and past events from the IEEE Computer Society Student Branch Chapter at Amrita.",
    images: ["/assets/Society.jpg"],
  },
};

export default function EventsPage() {
  const mdEvents = getEvents();
  const events: Event[] = mdEvents.map(toClientEvent);

  return (
    <div>
      <Breadcrumbs segments={[{ label: "Events" }]} />
      <PageHeader
        title="Events"
        description="Join us for workshops, seminars, hackathons, and more to enhance your skills and network with peers"
      />

      {/* Filter Section */}
      <EventFilterClient events={events} />

      {/* CTA Section */}
      <section className="py-16 bg-[#00629B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Want to Organize an Event?
          </h2>
          <p className="text-xl text-white mb-8">
            We&apos;re always looking for new ideas and passionate organizers.
            Get in touch with us!
          </p>
          <Link href="/contact" className="btn-cs-white">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
