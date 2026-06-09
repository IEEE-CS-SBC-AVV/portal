"use client";

import { ErrorFallback } from "@/components/ErrorFallback";

export default function JoinError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorFallback reset={reset} title="Join page unavailable" />;
}
