import Link from "next/link";
import { Clock, ArrowLeft } from "lucide-react";

interface ComingSoonPageProps {
  title: string;
  description: string;
  expectedDate?: string;
}

export default function ComingSoonPage({
  title = "Coming Soon",
  description = "This page is currently under development.",
  expectedDate = "Coming Soon",
}: ComingSoonPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ieee-blue to-ieee-blue-dark flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
            <Clock className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Content */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>

        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          {description}
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/20">
          <p className="text-white text-lg mb-2">Expected Launch</p>
          <p className="text-2xl font-bold text-white">{expectedDate}</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-white text-ieee-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-ieee-blue transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-blue-100">
          <p className="mb-4">Want to be notified when this page launches?</p>
          <Link
            href="/contact"
            className="text-white underline hover:no-underline"
          >
            Get in touch with us
          </Link>
        </div>
      </div>
    </div>
  );
}
