import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scope Members",
  description:
    "Meet the active members of IEEE Computer Society Student Branch Chapter at Amrita Vishwa Vidyapeetham, Coimbatore. Search and filter through our technical community.",
  openGraph: {
    title: "Scope Members | IEEE CS @ Amrita",
    description:
      "Meet the active members of IEEE Computer Society Student Branch Chapter at Amrita Vishwa Vidyapeetham, Coimbatore. Search and filter through our technical community.",
    images: [
      {
        url: "/assets/Society.jpg",
        width: 1200,
        height: 630,
        alt: "IEEE CS @ Amrita Scope Members",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scope Members | IEEE CS @ Amrita",
    description:
      "Meet the active members of IEEE Computer Society Student Branch Chapter at Amrita Vishwa Vidyapeetham, Coimbatore.",
    images: ["/assets/Society.jpg"],
  },
};

export default function ScopeMembersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
