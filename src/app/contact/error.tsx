"use client";

import { ErrorFallback } from "@/components/ErrorFallback";
import { CONTACT_INFO } from "@/lib/constants";

export default function ContactError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorFallback
      reset={reset}
      description={`The contact form encountered an error. Please try again or email us directly at ${CONTACT_INFO.email}.`}
    />
  );
}
