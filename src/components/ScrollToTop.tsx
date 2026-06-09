"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [launching, setLaunching] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => {
        setLaunching(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => setLaunching(false), 500);
      }}
      className={`fixed bottom-6 right-6 z-40 p-3 bg-[#00629B] text-white rounded-full shadow-lg hover:bg-[#002855] transition-all ${
        launching ? "scale-150 opacity-0" : "hover:scale-110"
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
