import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Discover upcoming and past events at IEEE Computer Society Student Branch - workshops, hackathons, seminars, and networking opportunities.",
  openGraph: {
    title: "Events - IEEE CS SBC AVV",
    description:
      "Explore our exciting workshops, hackathons, seminars, and networking events.",
    images: [
      {
        url: "/assests/ieeecs.png",
        width: 1200,
        height: 630,
        alt: "IEEE Computer Society Events",
      },
    ],
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
