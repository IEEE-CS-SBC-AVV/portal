import { Camera } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photo gallery of IEEE Computer Society Student Branch events and activities at Amrita Vishwa Vidyapeetham.",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-[#00629B] to-[#002855] text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-10 w-40 h-40 bg-white rounded-full mix-blend-overlay filter blur-2xl"></div>
          <div className="absolute bottom-10 right-20 w-60 h-60 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Capturing moments from our chapter&apos;s journey
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Camera className="w-16 h-16 text-[#00629B] mx-auto mb-6 opacity-60" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Snapping Shots
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            We&apos;re busy capturing moments from our events, workshops, and
            activities. Photos will appear here soon!
          </p>
          <div className="inline-flex items-center gap-2 text-[#00629B] font-semibold">
            <span className="w-2 h-2 bg-[#00629B] rounded-full animate-pulse" />
            Under Progress
          </div>
        </div>
      </section>
    </div>
  );
}
