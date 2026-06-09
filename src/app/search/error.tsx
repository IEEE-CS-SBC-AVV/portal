"use client";

import { ErrorFallback } from "@/components/ErrorFallback";

export default function SearchError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorFallback
      reset={reset}
      title="Search unavailable"
      description="An error occurred while searching. Please try again."
    />
  );
}
