import { Linkedin, Instagram, Camera } from "lucide-react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photo gallery of IEEE Computer Society Student Branch events and activities at Amrita Vishwa Vidyapeetham.",
  openGraph: {
    title: "Gallery | IEEE CS @ Amrita",
    description:
      "Photo gallery of IEEE Computer Society Student Branch events and activities at Amrita Vishwa Vidyapeetham.",
    images: [
      {
        url: "/assets/Society.jpg",
        width: 1200,
        height: 630,
        alt: "IEEE CS @ Amrita Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | IEEE CS @ Amrita",
    description:
      "Photo gallery of IEEE Computer Society Student Branch events and activities at Amrita Vishwa Vidyapeetham.",
    images: ["/assets/Society.jpg"],
  },
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumbs segments={[{ label: "Gallery" }]} />
      <PageHeader
        title="Gallery"
        description="Capturing moments from our chapter's journey"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-[#00629B]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Camera className="w-10 h-10 text-[#00629B]" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Photo Gallery Coming Soon
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We&apos;re collecting photos from our events and activities. While
              we build the gallery, follow us on social media for the latest
              snapshots and updates.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://www.linkedin.com/company/computer-society-avv"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cs-secondary"
              >
                <Linkedin className="w-5 h-5" />
                Follow on LinkedIn
              </a>
              <a
                href="https://www.instagram.com/cs_asai_cbe"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cs-secondary"
              >
                <Instagram className="w-5 h-5" />
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
