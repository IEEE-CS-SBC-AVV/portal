import type { Event as ClientEvent } from "@/lib/types";
import type { Event as MdEvent } from "@/lib/contents";

export function toClientEvent(mdEvent: MdEvent): ClientEvent {
  return {
    id: mdEvent.slug,
    title: mdEvent.title,
    date: mdEvent.date,
    time: mdEvent.time || "TBD",
    location: mdEvent.location,
    type: mdEvent.type,
    description: mdEvent.excerpt,
    speaker: mdEvent.speakers?.[0]?.name || undefined,
    poster: mdEvent.poster,
    registrationUrl: mdEvent.registrationUrl,
    featured: mdEvent.featured === true,
  };
}
