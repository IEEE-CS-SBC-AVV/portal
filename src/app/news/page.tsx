import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { getNews } from "@/lib/contents";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "News",
  description:
    "Latest news and updates from IEEE Computer Society Student Branch at Amrita Vishwa Vidyapeetham.",
};

export default function NewsPage() {
  const articles = getNews();

  return (
    <div>
      <Breadcrumbs segments={[{ label: "News" }]} />
      <section className="bg-gradient-to-r from-[#00629B] to-[#002855] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            News & Updates
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Stay informed about the latest happenings, announcements, and
            achievements from our chapter.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {articles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No news articles yet.</p>
            </div>
          ) : (
            <div className="space-y-8">
              {articles.map((article) => (
                <article key={article.slug} className="cs-card p-8 bg-white">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(article.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
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
