import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership Directory",
  description:
    "Browse the IEEE Computer Society Student Branch committee directory. Connect with chapter leadership and active members.",
};

export default function MembershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
