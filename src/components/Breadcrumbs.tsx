import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbSegment {
  label: string;
  href?: string;
}

export function Breadcrumbs({ segments }: { segments: BreadcrumbSegment[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://cs.avv.ie",
      },
      ...segments.map((seg, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: seg.label,
        ...(seg.href ? { item: `https://cs.avv.ie${seg.href}` } : {}),
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="bg-gray-100 border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link
                href="/"
                className="text-gray-500 hover:text-[#00629B] transition flex items-center gap-1 no-underline"
              >
                <Home className="w-4 h-4" />
                <span className="sr-only sm:not-sr-only">Home</span>
              </Link>
            </li>
            {segments.map((seg, i) => (
              <li key={i} className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                {seg.href ? (
                  <Link
                    href={seg.href}
                    className="text-gray-500 hover:text-[#00629B] transition no-underline"
                  >
                    {seg.label}
                  </Link>
                ) : (
                  <span className="text-gray-900 font-medium">{seg.label}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
