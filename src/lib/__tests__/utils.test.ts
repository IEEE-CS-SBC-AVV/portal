import { describe, it, expect } from "vitest";
import { formatDate, isUpcoming } from "../utils";

describe("formatDate", () => {
  it("formats a valid date string", () => {
    const result = formatDate("2026-06-15");
    expect(result).toBe("15 June 2026");
  });

  it("formats a Date object", () => {
    const result = formatDate(new Date("2026-06-15"));
    expect(result).toBe("15 June 2026");
  });

  it("returns 'Invalid Date' for bad input", () => {
    expect(formatDate("not-a-date")).toBe("Invalid Date");
    expect(formatDate("")).toBe("Invalid Date");
  });
});

describe("isUpcoming", () => {
  it("returns false for a past date", () => {
    expect(isUpcoming("2020-01-01")).toBe(false);
  });

  it("returns true for a future date", () => {
    const future = new Date();
    future.setFullYear(future.getFullYear() + 1);
    const dateStr = future.toISOString().split("T")[0];
    expect(isUpcoming(dateStr)).toBe(true);
  });

  it("returns false for invalid date", () => {
    expect(isUpcoming("")).toBe(false);
    expect(isUpcoming("invalid")).toBe(false);
  });

  it("considers time when provided", () => {
    expect(isUpcoming("2020-01-01", "10:00 AM")).toBe(false);
  });
});
