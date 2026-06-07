import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scope Members",
  description:
    "Meet the active members of IEEE Computer Society Student Branch at Amrita. Search and filter through our technical community.",
};

export default function ScopeMembersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
