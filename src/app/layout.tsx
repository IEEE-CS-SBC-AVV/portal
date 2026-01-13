import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "IEEE CS SBC AVV - Computer Society Student Branch",
    template: "%s | IEEE CS SBC AVV",
  },
  description:
    "IEEE Computer Society Student Branch Committee at Amrita Vishwa Vidyapeetham - Empowering students through technology, innovation, and professional development.",
  keywords: [
    "IEEE",
    "Computer Society",
    "Student Branch",
    "Technology",
    "Engineering",
    "Student Organization",
    "Amrita",
    "AVV",
    "Coimbatore",
  ],
  authors: [{ name: "IEEE CS SBC AVV" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "IEEE CS SBC AVV - Computer Society Student Branch",
    description:
      "Join our vibrant community of technology enthusiasts and innovators at Amrita Vishwa Vidyapeetham.",
    siteName: "IEEE CS SBC AVV",
  },
  twitter: {
    card: "summary_large_image",
    title: "IEEE CS SBC AVV",
    description: "Advancing technology for humanity through student innovation",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>{/* Fonts moved to globals.css per Next.js best practices */}</head>
      <body>
        {/* Accessibility: Skip to main content link (WCAG Requirement) */}
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>

        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
