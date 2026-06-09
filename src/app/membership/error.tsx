"use client";

import { ErrorFallback } from "@/components/ErrorFallback";

export default function MembershipError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorFallback
      reset={reset}
      title="Directory unavailable"
      description="The membership directory is temporarily unavailable. Please try again later."
    />
  );
}
