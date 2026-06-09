import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with IEEE Computer Society Student Branch at Amrita. Reach out via email, visit our campus, or connect on social media.",
  openGraph: {
    title: "Contact Us | IEEE CS @ Amrita",
    description:
      "Get in touch with IEEE Computer Society Student Branch at Amrita. Reach out via email, visit our campus, or connect on social media.",
    images: [
      {
        url: "/assets/Society.jpg",
        width: 1200,
        height: 630,
        alt: "Contact IEEE CS @ Amrita",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | IEEE CS @ Amrita",
    description:
      "Get in touch with IEEE Computer Society Student Branch at Amrita. Reach out via email, visit our campus, or connect on social media.",
    images: ["/assets/Society.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
