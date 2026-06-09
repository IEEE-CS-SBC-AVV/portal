import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { Calendar, ArrowLeft } from "lucide-react";
import { getNews, getNewsBySlug } from "@/lib/contents";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShareButtons } from "@/components/ShareButtons";
import type { SlugParams } from "@/lib/types";
import { SITE_CONFIG } from "@/lib/constants";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const dynamicParams = false;

export async function generateStaticParams() {
  const articles = getNews();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: SlugParams): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      images: [
        {
          url: "/assets/Society.jpg",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: ["/assets/Society.jpg"],
    },
  };
}

export default async function NewsDetailPage({ params }: SlugParams) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);

  if (!article) notFound();

  const formattedDate = new Date(article.date).toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    image: `${SITE_CONFIG.url}/assets/Society.jpg`,
    mainEntityOfPage: `${SITE_CONFIG.url}/news/${article.slug}`,
    author: {
      "@type": "Organization",
      name: SITE_CONFIG.fullName,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Script
        id="news-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs
        segments={[{ label: "News", href: "/news" }, { label: article.title }]}
      />
      <section className="bg-gradient-to-r from-[#00629B] to-[#002855] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/news"
            className="inline-flex items-center text-white hover:text-white transition mb-6 no-underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {article.title}
          </h1>
          <div className="flex items-center text-white/95">
            <Calendar className="w-5 h-5 mr-2" />
            {formattedDate}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 prose prose-lg">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {article.content}
            </ReactMarkdown>
          </div>
          <div className="mt-8">
            <ShareButtons title={article.title} url={`/news/${article.slug}`} />
          </div>
        </div>
      </section>
    </div>
  );
}
