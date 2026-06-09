"use client";

import Link from "next/link";

interface ErrorFallbackProps {
  reset: () => void;
  title?: string;
  description?: string;
  showDigest?: boolean;
  digest?: string;
  secondaryAction?: {
    href: string;
    label: string;
  };
}

export function ErrorFallback({
  reset,
  title = "Something went wrong",
  description = "An unexpected error occurred. Please try again or contact us if the problem persists.",
  showDigest = false,
  digest,
  secondaryAction = { href: "/", label: "Go Home" },
}: ErrorFallbackProps) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-bold text-[#00629B] mb-4">Oops!</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className={`text-gray-600 ${showDigest ? "mb-2" : "mb-8"}`}>
          {description}
        </p>
        {showDigest && digest && (
          <p className="text-xs text-gray-400 mb-8">Error ID: {digest}</p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={reset}
            className="btn-cs-primary px-6 py-3"
          >
            Try Again
          </button>
          <Link
            href={secondaryAction.href}
            className="btn-cs-secondary px-6 py-3 no-underline inline-flex items-center justify-center"
          >
            {secondaryAction.label}
          </Link>
        </div>
      </div>
    </div>
  );
}
