import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join IEEE - IEEE CS SBC AVV",
  description:
    "Join IEEE Computer Society and become part of our student chapter at Amrita. Unlock benefits, networking, and career opportunities.",
};

export default function JoinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
