import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { getNews } from "@/lib/contents";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "News",
  description:
    "Latest news and updates from IEEE Computer Society Student Branch at Amrita Vishwa Vidyapeetham.",
  openGraph: {
    title: "News | IEEE CS @ Amrita",
    description:
      "Latest news and updates from IEEE Computer Society Student Branch at Amrita Vishwa Vidyapeetham.",
    images: [
      {
        url: "/assets/Society.jpg",
        width: 1200,
        height: 630,
        alt: "IEEE CS @ Amrita News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "News | IEEE CS @ Amrita",
    description:
      "Latest news and updates from IEEE Computer Society Student Branch at Amrita Vishwa Vidyapeetham.",
    images: ["/assets/Society.jpg"],
  },
};

export default function NewsPage() {
  const articles = getNews();

  return (
    <div>
      <Breadcrumbs segments={[{ label: "News" }]} />
      <PageHeader
        title="News & Updates"
        description="Stay informed about the latest happenings, announcements, and achievements from our chapter."
      />

      <section className="py-16 bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {articles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No news articles yet.</p>
            </div>
          ) : (
            <div className="space-y-8">
              {articles.map((article) => (
                <article key={article.slug} className="cs-card p-8 bg-white">
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(article.date)}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Link
                    href={`/news/${article.slug}`}
                    className="inline-flex items-center text-[#00629B] font-semibold hover:text-[#002855] transition no-underline group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
