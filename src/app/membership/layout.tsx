import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "IEEE Computer Society membership directory and member information. Connect with fellow technology enthusiasts at our student chapter.",
  openGraph: {
    title: "Membership - IEEE CS SBC AVV",
    description:
      "Explore our diverse community of members and connect with peers.",
    images: [
      {
        url: "/assests/ieee.png",
        width: 1200,
        height: 630,
        alt: "IEEE Computer Society Membership",
      },
    ],
  },
};

export default function MembershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
