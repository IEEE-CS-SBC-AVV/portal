"use client";

import { useState } from "react";
import { Linkedin, X, Share2 } from "lucide-react";
import { toast } from "sonner";
import { SITE_CONFIG } from "@/lib/constants";

interface ShareButtonsProps {
  title: string;
  url: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copying, setCopying] = useState(false);
  const fullUrl = `${SITE_CONFIG.url}${url}`;
  const encodedUrl = encodeURIComponent(fullUrl);
  const encodedTitle = encodeURIComponent(title);

  const handleCopy = async () => {
    setCopying(true);
    try {
      await navigator.clipboard.writeText(fullUrl);
      toast.success("Link copied to clipboard!");
    } catch {
      toast.error("Failed to copy link. Please copy the URL manually.");
    } finally {
      setCopying(false);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-semibold text-gray-600">Share:</span>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3.5 rounded-full bg-gray-100 text-gray-600 hover:bg-[#00629B]/10 hover:text-[#00629B] transition-colors"
        aria-label={`Share ${title} on LinkedIn`}
      >
        <Linkedin className="w-4 h-4" />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3.5 rounded-full bg-gray-100 text-gray-600 hover:bg-[#00629B]/10 hover:text-[#00629B] transition-colors"
        aria-label={`Share ${title} on X`}
      >
        <X className="w-4 h-4" />
      </a>
      <button
        onClick={handleCopy}
        disabled={copying}
        className="p-3.5 rounded-full bg-gray-100 text-gray-600 hover:bg-[#00629B]/10 hover:text-[#00629B] transition-colors disabled:opacity-50"
        aria-label={`Copy link for ${title}`}
      >
        <Share2 className="w-4 h-4" />
      </button>
    </div>
  );
}
