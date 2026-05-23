import { describe, it, expect } from "vitest";
import { cn, formatDate, slugify } from "./utils";

describe("cn", () => {
  it("merges class names", () => {
    expect(cn("px-4", "py-2")).toBe("px-4 py-2");
  });

  it("handles conditional classes", () => {
    expect(cn("base", false && "hidden", "visible")).toBe("base visible");
  });

  it("handles undefined values", () => {
    expect(cn("a", undefined, "b")).toBe("a b");
  });
});

describe("slugify", () => {
  it("converts text to URL-safe slug", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });

  it("handles special characters", () => {
    expect(slugify("IEEE CS SBC AVV!")).toBe("ieee-cs-sbc-avv");
  });

  it("removes leading/trailing dashes", () => {
    expect(slugify("--hello--")).toBe("hello");
  });
});

describe("formatDate", () => {
  it("formats date string", () => {
    const result = formatDate("2026-02-26");
    expect(result).toContain("February");
    expect(result).toContain("26");
    expect(result).toContain("2026");
  });
});
