"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00629B] to-[#002855] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold text-white/20 leading-none">
            404
          </h1>
        </div>

        {/* Message */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has
            been moved.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#00629B] rounded-lg font-semibold hover:bg-gray-100 transition no-underline"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center px-8 py-3 bg-white/10 text-white border-2 border-white/30 rounded-lg font-semibold hover:bg-white/20 transition"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 text-blue-100">
          <p className="mb-4">You might be looking for:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about" className="hover:text-white transition">
              About Us
            </Link>
            <span className="text-white/30">•</span>
            <Link href="/committee" className="hover:text-white transition">
              Committee
            </Link>
            <span className="text-white/30">•</span>
            <Link href="/events" className="hover:text-white transition">
              Events
            </Link>
            <span className="text-white/30">•</span>
            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
