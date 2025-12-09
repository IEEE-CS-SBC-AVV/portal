import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "IEEE CS SBC - Computer Society Student Branch",
  description:
    "IEEE Computer Society Student Branch Committee - Empowering students through technology, innovation, and professional development.",
  keywords: [
    "IEEE",
    "Computer Society",
    "Student Branch",
    "Technology",
    "Engineering",
    "Student Organization",
  ],
  authors: [{ name: "IEEE CS SBC" }],
  openGraph: {
    type: "website",
    title: "IEEE CS SBC - Computer Society Student Branch",
    description:
      "Join our vibrant community of technology enthusiasts and innovators.",
    siteName: "IEEE CS SBC",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Skip to main content for accessibility */}
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