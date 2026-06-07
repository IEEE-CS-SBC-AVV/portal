"use client";

import { useState, type FormEvent } from "react";
import { Mail, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setSubmitting(true);

    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

      if (!endpoint) {
        toast.error("Form service not configured", {
          description:
            "Please email us directly at computersociety.avv@gmail.com",
        });
        return;
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, _subject: "Newsletter Signup" }),
      });

      if (!response.ok) throw new Error("Formspree error");

      setSubmitted(true);
      toast.success("You've been subscribed to our newsletter!");
      setEmail("");
    } catch {
      toast.error("Failed to subscribe", {
        description:
          "Something went wrong. Please try again or email us directly.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="cs-card p-8 text-center bg-white">
        <CheckCircle className="w-16 h-16 text-[#00629B] mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          You&apos;re Subscribed!
        </h3>
        <p className="text-gray-600">
          Thank you for signing up. You&apos;ll receive updates about our latest
          events and activities.
        </p>
      </div>
    );
  }

  return (
    <div className="cs-card p-8 bg-white">
      <div className="w-16 h-16 bg-[#e8f0f8] rounded-full flex items-center justify-center mx-auto mb-4">
        <Mail className="h-8 w-8 text-[#00629B]" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
        Stay Updated
      </h3>
      <p className="text-gray-600 text-center mb-6">
        Get notified about upcoming events, workshops, and chapter news.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="cs-input text-center"
          required
        />
        <button
          type="submit"
          disabled={submitting}
          className="btn-cs-primary w-full"
        >
          {submitting ? "Subscribing..." : "Subscribe to Newsletter"}
        </button>
      </form>
    </div>
  );
}
