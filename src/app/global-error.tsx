"use client";

/* eslint-disable @next/next/no-html-link-for-pages */

import "./globals.css";
import { Montserrat, Open_Sans, Nunito } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable} ${nunito.variable}`}
    >
      <body className="m-0 font-sans">
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            That wasn&apos;t supposed to happen
          </h1>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
            Our tech team has been notified. Try again, or head back home.
          </p>
          <div className="flex gap-4">
            <button type="button" onClick={reset} className="btn-cs-secondary">
              Try Again
            </button>
            <a href="/" className="btn-cs-primary">
              Go Home
            </a>
          </div>
          {error.digest && (
            <p className="mt-8 text-sm text-gray-400">
              Error ID: {error.digest}
            </p>
          )}
        </div>
      </body>
    </html>
  );
}
