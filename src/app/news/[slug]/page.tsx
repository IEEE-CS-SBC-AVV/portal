import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, ArrowLeft } from "lucide-react";
import { getNews } from "@/lib/contents";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getNews();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const allNews = getNews();
  const article = allNews.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };
  return { title: article.title, description: article.excerpt };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const allNews = getNews();
  const article = allNews.find((a) => a.slug === slug);

  if (!article) notFound();

  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-[#00629B] to-[#002855] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/news"
            className="inline-flex items-center text-white/80 hover:text-white transition mb-6 no-underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {article.title}
          </h1>
          <div className="flex items-center text-white/90">
            <Calendar className="w-5 h-5 mr-2" />
            {formattedDate}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 prose prose-lg max-w-none">
            <div
              dangerouslySetInnerHTML={{
                __html: article.content
                  .replace(/^### (.*$)/gm, "<h3>$1</h3>")
                  .replace(/^## (.*$)/gm, "<h2>$1</h2>")
                  .replace(/^# (.*$)/gm, "<h1>$1</h1>")
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                  .replace(/\n\n/g, "</p><p>")
                  .replace(/^- (.*)/gm, "<li>$1</li>")
                  .replace(/<\/li>\n<li>/g, "</li><li>")
                  .replace(/(<li>[\s\S]*<\/li>)/, "<ul>$1</ul>"),
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
