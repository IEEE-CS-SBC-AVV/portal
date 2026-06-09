import type { Metadata } from "next";
import { ExternalLink, Users, MessageSquare, Globe } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Collabratec",
  description:
    "IEEE Collabratec is the networking platform for IEEE members. Connect with our chapter and the global tech community.",
  openGraph: {
    title: "Collabratec | IEEE CS @ Amrita",
    description:
      "IEEE Collabratec is the networking platform for IEEE members. Connect with our chapter and the global tech community.",
    images: [
      {
        url: "/assets/Society.jpg",
        width: 1200,
        height: 630,
        alt: "IEEE Collabratec",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Collabratec | IEEE CS @ Amrita",
    description:
      "IEEE Collabratec is the networking platform for IEEE members. Connect with our chapter and the global tech community.",
    images: ["/assets/Society.jpg"],
  },
};

export default function CollabratecPage() {
  return (
    <div>
      <Breadcrumbs segments={[{ label: "Collabratec" }]} />
      <PageHeader
        title="IEEE Collabratec"
        description="Connect, collaborate, and network with the global IEEE community through the official professional networking platform."
      >
        <a
          href="https://ieee-collabratec.ieee.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cs-white text-lg"
        >
          Visit IEEE Collabratec
          <ExternalLink className="ml-2 h-5 w-5" />
        </a>
      </PageHeader>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What It Is
            </h2>
            <p className="text-xl text-gray-600">
              IEEE Collabratec is the official networking and collaboration
              platform for the global IEEE community, designed for professional
              engagement and knowledge sharing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="cs-card p-6 bg-white text-center">
              <div className="w-14 h-14 bg-[#e8f0f8] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-7 w-7 text-[#00629B]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Connect with Peers
              </h3>
              <p className="text-gray-600">
                Discover and connect with IEEE members working in your areas of
                interest, from artificial intelligence to embedded systems.
              </p>
            </div>

            <div className="cs-card p-6 bg-white text-center">
              <div className="w-14 h-14 bg-[#e8f0f8] rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-7 w-7 text-[#00629B]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Join Communities
              </h3>
              <p className="text-gray-600">
                Participate in technical discussions, ask questions, and share
                what you are working on.
              </p>
            </div>

            <div className="cs-card p-6 bg-white text-center">
              <div className="w-14 h-14 bg-[#e8f0f8] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="h-7 w-7 text-[#00629B]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Global Reach
              </h3>
              <p className="text-gray-600">
                Expand your professional network beyond Coimbatore. Collabratec
                connects you with IEEE members across 160+ countries.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-warm rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Our Chapter Is on Collabratec
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Search for &quot;IEEE Computer Society Student Branch Chapter,
              Amrita&quot; on Collabratec and follow our chapter page. That is
              where we share resources, post updates, and connect with other
              chapters.
            </p>
            <a
              href="https://ieee-collabratec.ieee.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cs-primary mt-6"
            >
              Access Collabratec
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
