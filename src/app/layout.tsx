import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OrganizationSchema } from "@/components/StructuredData";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://cs.avv.ie"),
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
  alternates: {
    canonical: "https://cs.avv.ie",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cs.avv.ie",
    title: "IEEE CS SBC AVV - Computer Society Student Branch",
    description:
      "Join our vibrant community of technology enthusiasts and innovators at Amrita Vishwa Vidyapeetham.",
    siteName: "IEEE CS SBC AVV",
    images: [
      {
        url: "/assets/Society.jpg",
        width: 1200,
        height: 630,
        alt: "IEEE Computer Society Student Branch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IEEE CS SBC AVV",
    description: "Advancing technology for humanity through student innovation",
    images: ["/assets/Society.jpg"],
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
      <head>
        <OrganizationSchema />
      </head>
      <body>
        {/* Accessibility: Skip to main content link (WCAG Requirement) */}
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>

        <div className="flex flex-col min-h-screen bg-white">
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <SpeedInsights />
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
