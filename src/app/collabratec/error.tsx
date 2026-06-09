"use client";

import { ErrorFallback } from "@/components/ErrorFallback";

export default function CollabratecError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorFallback reset={reset} title="Collabratec page unavailable" />;
}
