"use client";

import { useEffect } from "react";

export function UnhandledRejectionCatcher() {
  useEffect(() => {
    const handler = (event: PromiseRejectionEvent) => {
      if (process.env.NODE_ENV !== "production") {
        console.error("Unhandled promise rejection:", event.reason);
      }
    };
    window.addEventListener("unhandledrejection", handler);
    return () => window.removeEventListener("unhandledrejection", handler);
  }, []);

  return null;
}
