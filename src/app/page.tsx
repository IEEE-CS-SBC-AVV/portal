import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Home",
  description:
    "IEEE Computer Society Student Branch at Amrita Vishwa Vidyapeetham. Empowering students through technology, innovation, and professional development.",
  openGraph: {
    title: "IEEE CS SBC AVV - Computer Society Student Branch",
    description:
      "Join our vibrant community of technology enthusiasts and innovators at Amrita Vishwa Vidyapeetham.",
    images: [
      {
        url: "/assets/campus.jpeg",
        width: 1200,
        height: 630,
        alt: "IEEE Computer Society Student Branch Homepage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IEEE CS SBC AVV - Computer Society Student Branch",
    description:
      "Join our vibrant community of technology enthusiasts and innovators at Amrita Vishwa Vidyapeetham.",
    images: ["/assets/campus.jpeg"],
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
