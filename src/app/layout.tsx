import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans, Nunito } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OrganizationSchema } from "@/components/StructuredData";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";
import { SITE_CONFIG } from "@/lib/constants";
import { ScrollToTop } from "@/components/ScrollToTop";
import { UnhandledRejectionCatcher } from "@/components/UnhandledRejectionCatcher";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#00629B",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default:
      "IEEE CS @ Amrita - Computer Society Student Branch Chapter at Amrita Vishwa Vidyapeetham, Coimbatore",
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "IEEE Computer Society Student Branch Chapter at Amrita Vishwa Vidyapeetham, Coimbatore - Empowering students through technology, innovation, and professional development.",
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
  authors: [{ name: "IEEE CS @ Amrita" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title:
      "IEEE CS @ Amrita - Computer Society Student Branch Chapter at Amrita Vishwa Vidyapeetham, Coimbatore",
    description:
      "Join the IEEE Computer Society Student Branch Chapter at Amrita Vishwa Vidyapeetham, Coimbatore — a community of technology enthusiasts and innovators.",
    siteName: "IEEE CS @ Amrita",
    images: [
      {
        url: `${SITE_CONFIG.url}/assets/Society.jpg`,
        width: 1200,
        height: 630,
        alt: "IEEE Computer Society Student Branch Chapter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IEEE CS @ Amrita",
    description:
      "IEEE Computer Society Student Branch Chapter at Amrita Vishwa Vidyapeetham, Coimbatore — advancing technology through student innovation",
    images: [`${SITE_CONFIG.url}/assets/Society.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  icons: {
    icon: [
      { url: "/assets/favicon/favicon.ico", sizes: "any" },
      {
        url: "/assets/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/assets/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: "/assets/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable} ${nunito.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <OrganizationSchema />
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>

        <div className="flex flex-col min-h-screen bg-white">
          <Navbar />
          <main id="main-content" className="flex-1" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </div>
        <SpeedInsights />
        <Toaster position="top-center" richColors closeButton />
        <ScrollToTop />
        <UnhandledRejectionCatcher />
      </body>
    </html>
  );
}
