import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collabratec - IEEE CS SBC AVV",
  description:
    "Learn about IEEE Collabratec platform - a collaborative environment for IEEE members to connect, innovate, and build projects.",
};

export default function CollabratecLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
