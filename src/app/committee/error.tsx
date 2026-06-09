"use client";

import { ErrorFallback } from "@/components/ErrorFallback";

export default function CommitteeError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorFallback reset={reset} title="Committee data unavailable" />;
}
