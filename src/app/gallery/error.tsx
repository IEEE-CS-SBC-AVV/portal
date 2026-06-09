"use client";

import { ErrorFallback } from "@/components/ErrorFallback";

export default function GalleryError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorFallback reset={reset} title="Gallery unavailable" />;
}
