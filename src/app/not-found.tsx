"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { GradientAvatar } from "@/components/GradientAvatar";

const FUN_FACTS = [
  "IEEE has 423,000+ members worldwide across 160+ countries.",
  "IEEE publishes 30% of the world's technical literature in electrical engineering and computer science.",
  "IEEE standards impact everything from WiFi to your phone charger.",
  "The IEEE Computer Society is the world's largest computing professional organization.",
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00629B] to-[#002855] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8 group">
          <div
            className="text-9xl md:text-[12rem] font-bold text-white/20 leading-none group-hover:animate-pulse transition-all duration-300"
            aria-hidden="true"
          >
            404
          </div>
          <div className="flex justify-center -mt-8">
            <div className="w-20 h-20 opacity-40 group-hover:opacity-70 transition-opacity hover:rotate-12 hover:scale-110 duration-300">
              <GradientAvatar name="lost" size="lg" />
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-white mb-8">
            The page you are looking for does not exist or has been moved.
            Please use the navigation below to find what you need.
          </p>

          <div className="text-white/70 text-sm mb-8 italic">
            {FUN_FACTS[0]}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-cs-white">
              <Home className="w-5 h-5" />
              Go Home
            </Link>
            <button
              type="button"
              onClick={() => {
                if (
                  document.referrer &&
                  window.location.origin &&
                  document.referrer.includes(window.location.origin)
                ) {
                  window.history.back();
                } else {
                  window.location.href = "/";
                }
              }}
              className="btn-cs-white"
              aria-label="Go back to previous page"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 text-white">
          <p className="mb-4">You might be looking for:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about" className="hover:text-white transition">
              About Us
            </Link>
            <span className="text-white/30" aria-hidden="true">
              •
            </span>
            <Link href="/committee" className="hover:text-white transition">
              Committee
            </Link>
            <span className="text-white/30" aria-hidden="true">
              •
            </span>
            <Link href="/events" className="hover:text-white transition">
              Events
            </Link>
            <span className="text-white/30" aria-hidden="true">
              •
            </span>
            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
