"use client";

import { ErrorFallback } from "@/components/ErrorFallback";

export default function NewsError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorFallback
      reset={reset}
      title="Something went wrong loading news"
      secondaryAction={{ href: "/news", label: "Back to News" }}
    />
  );
}
