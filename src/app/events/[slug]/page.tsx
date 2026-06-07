import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const events = getEvents();
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Event Not Found" };

  return {
    title: event.title,
    description: event.excerpt,
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

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-gray-50">
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
            className="inline-flex items-center text-white/80 hover:text-white transition mb-6 no-underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Events
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{event.title}</h1>
          <div className="flex flex-wrap gap-6 text-white/90">
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
            <div className="mt-4 text-white/80">
              Speaker: {event.speakers.map((s) => s.name).join(", ")}
            </div>
          )}
          {event.registrationUrl && (
            <div className="mt-6">
              <a
                href={event.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cs-primary inline-flex items-center gap-2"
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

          <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 prose prose-lg max-w-none">
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
                {event.resources.map((resource, index) => (
                  <a
                    key={index}
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
        </div>
      </section>
    </div>
  );
}
