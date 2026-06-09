"use client";

import { ErrorFallback } from "@/components/ErrorFallback";

export default function NewsDetailError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorFallback
      reset={reset}
      title="News article unavailable"
      description="An unexpected error occurred. Please try again or browse other articles."
      secondaryAction={{ href: "/news", label: "Back to News" }}
    />
  );
}
