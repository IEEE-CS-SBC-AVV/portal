import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scope Members - IEEE CS SBC AVV",
  description:
    "Scope members of IEEE Computer Society Student Branch at Amrita - active participants and contributors to our chapter.",
};

export default function ScopeMembersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
