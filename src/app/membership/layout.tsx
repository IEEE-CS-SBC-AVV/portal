import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership - IEEE CS SBC AVV",
  description:
    "IEEE Computer Society membership directory and member information. Connect with fellow technology enthusiasts at our student chapter.",
};

export default function MembershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
