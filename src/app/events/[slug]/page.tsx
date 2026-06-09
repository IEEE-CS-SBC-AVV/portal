import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import {
  Calendar,
  MapPin,
  Clock,
  ArrowLeft,
  FileText,
  Github,
  Video,
  ExternalLink,
  Download,
  Ticket,
} from "lucide-react";
import { getEventBySlug, getEvents } from "@/lib/contents";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShareButtons } from "@/components/ShareButtons";
import type { SlugParams } from "@/lib/types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const dynamicParams = false;

export async function generateStaticParams() {
  const events = getEvents();
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({
  params,
}: SlugParams): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Event Not Found" };

  return {
    title: event.title,
    description: event.excerpt,
    openGraph: {
      title: event.title,
      description: event.excerpt,
      type: "article",
      images: event.poster
        ? [{ url: event.poster, width: 1200, height: 630, alt: event.title }]
        : [
            {
              url: "/assets/Society.jpg",
              width: 1200,
              height: 630,
              alt: "IEEE Computer Society",
            },
          ],
    },
    twitter: {
      card: "summary_large_image",
      title: event.title,
      description: event.excerpt,
      images: event.poster ? [event.poster] : ["/assets/Society.jpg"],
    },
  };
}

function resourceIcon(type?: string) {
  switch (type) {
    case "slides":
      return <FileText className="w-5 h-5" />;
    case "github":
      return <Github className="w-5 h-5" />;
    case "video":
      return <Video className="w-5 h-5" />;
    case "link":
      return <ExternalLink className="w-5 h-5" />;
    default:
      return <Download className="w-5 h-5" />;
  }
}

export default async function EventDetailPage({ params }: SlugParams) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const formattedDate = new Date(event.date).toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.excerpt,
    startDate:
      event.time && event.time !== "TBD"
        ? `${event.date}T${event.time.includes(" - ") ? event.time.split(" - ")[0].trim() : event.time.trim()}`
        : event.date,
    location: {
      "@type": "Place",
      name: event.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Coimbatore",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "IEEE Computer Society Student Branch Chapter, Amrita Vishwa Vidyapeetham",
      url: "https://cs.avv.ie",
    },
    ...(event.speakers && event.speakers.length > 0
      ? {
          performer: event.speakers.map((s) => ({
            "@type": "Person",
            name: s.name,
          })),
        }
      : {}),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Script
        id="event-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs
        segments={[
          { label: "Events", href: "/events" },
          { label: event.title },
        ]}
      />
      <section className="bg-gradient-to-r from-[#00629B] to-[#002855] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/events"
            className="inline-flex items-center text-white hover:text-white transition mb-6 no-underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Events
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{event.title}</h1>
          <div className="flex flex-wrap gap-6 text-white/95">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              {formattedDate}
            </div>
            {event.time && (
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                {event.time}
              </div>
            )}
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              {event.location}
            </div>
          </div>
          {event.speakers && event.speakers.length > 0 && (
            <div className="mt-4 text-white">
              Speaker: {event.speakers.map((s) => s.name).join(", ")}
            </div>
          )}
          {event.registrationUrl && (
            <div className="mt-6">
              <a
                href={event.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cs-primary"
              >
                <Ticket className="w-5 h-5" />
                Register Now
              </a>
            </div>
          )}
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {event.poster && (
            <div className="mb-8 rounded-xl overflow-hidden shadow-md">
              <Image
                src={event.poster}
                alt={`${event.title} poster`}
                width={800}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 prose prose-lg">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {event.content}
            </ReactMarkdown>
          </div>

          {event.resources && event.resources.length > 0 && (
            <div className="mt-8 bg-white rounded-xl shadow-sm p-8 md:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Resources
              </h2>
              <div className="grid gap-4">
                {event.resources.map((resource) => (
                  <a
                    key={resource.url}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-[#00629B] hover:bg-[#e8f0f8] transition no-underline"
                  >
                    <span className="w-10 h-10 bg-[#00629B]/10 rounded-lg flex items-center justify-center text-[#00629B] flex-shrink-0">
                      {resourceIcon(resource.type)}
                    </span>
                    <div className="flex-1 min-w-0">
                      <span className="text-gray-900 font-semibold block truncate">
                        {resource.title}
                      </span>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8">
            <ShareButtons title={event.title} url={`/events/${event.slug}`} />
          </div>
        </div>
      </section>
    </div>
  );
}
