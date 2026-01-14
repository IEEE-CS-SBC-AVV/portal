import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery - IEEE CS SBC AVV",
  description:
    "Photo gallery of IEEE Computer Society Student Branch events, workshops, and activities at Amrita Vishwa Vidyapeetham.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
