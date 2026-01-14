import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events - IEEE CS SBC AVV",
  description:
    "Discover upcoming and past events at IEEE Computer Society Student Branch - workshops, hackathons, seminars, and networking opportunities.",
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
