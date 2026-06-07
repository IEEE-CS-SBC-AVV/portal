import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Home",
  description:
    "IEEE Computer Society Student Branch at Amrita Vishwa Vidyapeetham. Join 150+ members for workshops, hackathons, and networking events.",
  openGraph: {
    title: "IEEE CS SBC AVV - Computer Society Student Branch",
    description:
      "Join our vibrant community of technology enthusiasts and innovators at Amrita Vishwa Vidyapeetham.",
    images: [
      {
        url: "/assets/home.jpeg",
        width: 1200,
        height: 600,
        alt: "IEEE Computer Society Student Branch Homepage",
      },
    ],
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
