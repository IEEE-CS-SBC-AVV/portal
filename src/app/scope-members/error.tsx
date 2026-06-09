"use client";

import { ErrorFallback } from "@/components/ErrorFallback";

export default function ScopeMembersError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorFallback
      reset={reset}
      title="Members list unavailable"
      description="The members list is temporarily unavailable. Please try again later."
    />
  );
}
