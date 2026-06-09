import { describe, it, expect } from "vitest";
import { toClientEvent } from "../events";
import type { Event as MdEvent } from "../contents";

describe("toClientEvent", () => {
  const baseMdEvent: MdEvent = {
    slug: "test-event",
    title: "Test Event",
    date: "2026-06-15",
    time: "10:00 AM",
    location: "Amrita Vishwa Vidyapeetham",
    type: "workshop",
    excerpt: "A test event description",
    content: "# Test Event\n\nThis is the content.",
  };

  it("maps all required fields correctly", () => {
    const result = toClientEvent(baseMdEvent);
    expect(result.id).toBe("test-event");
    expect(result.title).toBe("Test Event");
    expect(result.date).toBe("2026-06-15");
    expect(result.time).toBe("10:00 AM");
    expect(result.location).toBe("Amrita Vishwa Vidyapeetham");
    expect(result.type).toBe("workshop");
    expect(result.description).toBe("A test event description");
  });

  it("maps speaker from first speaker entry", () => {
    const eventWithSpeaker: MdEvent = {
      ...baseMdEvent,
      speakers: [{ name: "Dr. Smith", title: "Professor" }],
    };
    const result = toClientEvent(eventWithSpeaker);
    expect(result.speaker).toBe("Dr. Smith");
  });

  it("leaves speaker undefined when no speakers", () => {
    const result = toClientEvent(baseMdEvent);
    expect(result.speaker).toBeUndefined();
  });

  it("maps poster and registrationUrl when present", () => {
    const eventWithExtras: MdEvent = {
      ...baseMdEvent,
      poster: "/images/poster.jpg",
      registrationUrl: "https://example.com/register",
    };
    const result = toClientEvent(eventWithExtras);
    expect(result.poster).toBe("/images/poster.jpg");
    expect(result.registrationUrl).toBe("https://example.com/register");
  });

  it("defaults time to TBD when missing", () => {
    const eventNoTime: MdEvent = {
      ...baseMdEvent,
      time: undefined,
    };
    const result = toClientEvent(eventNoTime);
    expect(result.time).toBe("TBD");
  });

  it("sets featured to false when not marked", () => {
    const result = toClientEvent(baseMdEvent);
    expect(result.featured).toBe(false);
  });

  it("sets featured to true when marked", () => {
    const eventFeatured: MdEvent = {
      ...baseMdEvent,
      featured: true,
    };
    const result = toClientEvent(eventFeatured);
    expect(result.featured).toBe(true);
  });
});
