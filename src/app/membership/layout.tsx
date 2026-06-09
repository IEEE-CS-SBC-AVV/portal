import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership Directory",
  description:
    "Browse the IEEE Computer Society Student Branch committee directory. Connect with chapter leadership and active members.",
  openGraph: {
    title: "Membership Directory | IEEE CS @ Amrita",
    description:
      "Browse the IEEE Computer Society Student Branch committee directory. Connect with chapter leadership and active members.",
    images: [
      {
        url: "/assets/Society.jpg",
        width: 1200,
        height: 630,
        alt: "IEEE CS @ Amrita Membership",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Membership Directory | IEEE CS @ Amrita",
    description:
      "Browse the IEEE Computer Society Student Branch committee directory.",
    images: ["/assets/Society.jpg"],
  },
};

export default function MembershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
