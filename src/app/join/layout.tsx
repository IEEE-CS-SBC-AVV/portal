import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join IEEE",
  description:
    "Join IEEE Computer Society and become part of our student chapter at Amrita. Unlock benefits, networking, and career opportunities.",
  openGraph: {
    title: "Join IEEE - IEEE CS SBC AVV",
    description:
      "Become part of our vibrant community. Access exclusive benefits and networking opportunities.",
    images: [
      {
        url: "/assests/IEEE.jpg",
        width: 1200,
        height: 630,
        alt: "Join IEEE Computer Society",
      },
    ],
  },
};

export default function JoinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
