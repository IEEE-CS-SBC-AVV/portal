"use client";

import { ErrorFallback } from "@/components/ErrorFallback";

export default function EventDetailError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorFallback
      reset={reset}
      title="Event details unavailable"
      description="An unexpected error occurred. Please try again or browse other events."
      secondaryAction={{ href: "/events", label: "Back to Events" }}
    />
  );
}
