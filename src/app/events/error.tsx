"use client";

import { ErrorFallback } from "@/components/ErrorFallback";

export default function EventsError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorFallback
      reset={reset}
      title="Something went wrong loading events"
      secondaryAction={{ href: "/events", label: "Back to Events" }}
    />
  );
}
