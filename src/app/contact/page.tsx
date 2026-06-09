"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Instagram,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import { CONTACT_INFO } from "@/lib/constants";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  _hp?: string;
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

      if (!endpoint) {
        toast.error("Form service not configured", {
          description: `Please email us directly at ${CONTACT_INFO.email}`,
        });
        return;
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          _hp: data._hp || "",
        }),
      });

      if (!response.ok) throw new Error("Formspree error");

      toast.success("Message sent successfully!", {
        description: "Thank you! We'll get back to you soon.",
      });
      reset();
    } catch (error) {
      if (process.env.NODE_ENV !== "production") {
        console.error("Contact form error:", error);
      }
      toast.error("Failed to send message", {
        description:
          "Something went wrong. Please try again or email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Breadcrumbs segments={[{ label: "Contact" }]} />
      <PageHeader
        title="Contact Us"
        description="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      />

      {/* Contact Content */}
      <section className="py-16 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Contact Details */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Get in Touch
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#00629B]/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-3">
                      <Mail className="w-5 h-5 text-[#00629B]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-gray-900 text-sm mb-0.5">
                        Email
                      </h3>
                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="text-gray-600 hover:text-[#00629B] transition text-sm break-all"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#00629B]/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-3">
                      <Phone className="w-5 h-5 text-[#00629B]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-gray-900 text-sm mb-0.5">
                        Phone
                      </h3>
                      <a
                        href={CONTACT_INFO.phoneLink}
                        className="text-gray-600 hover:text-[#00629B] transition text-sm"
                      >
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#00629B]/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-3">
                      <MapPin className="w-5 h-5 text-[#00629B]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-gray-900 text-sm mb-0.5">
                        Address
                      </h3>
                      <p className="text-gray-600 text-sm">
                        IEEE CS Student Branch
                        {CONTACT_INFO.address.map((line, i) => (
                          <span key={i}>
                            <br />
                            {line}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-5 pt-5 border-t border-gray-100">
                  <h3 className="font-semibold text-gray-900 text-sm mb-3">
                    Follow Us
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={CONTACT_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 border border-gray-200 hover:text-[#00629B] hover:border-[#00629B] hover:bg-[#e8f0f8] transition"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={CONTACT_INFO.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 border border-gray-200 hover:text-[#00629B] hover:border-[#00629B] hover:bg-[#e8f0f8] transition"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Office Hours
                </h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Monday - Friday</dt>
                    <dd className="text-gray-900 font-medium">
                      10:00 AM - 5:00 PM
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Saturday</dt>
                    <dd className="text-gray-900 font-medium">
                      10:00 AM - 2:00 PM
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Sunday</dt>
                    <dd className="text-gray-900 font-medium">Closed</dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg p-6 shadow-sm h-full">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Honeypot field */}
                  <div className="absolute -left-[9999px]" aria-hidden="true">
                    <label htmlFor="_hp">HP</label>
                    <input
                      id="_hp"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      {...register("_hp")}
                    />
                  </div>

                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="cs-label cs-label-required"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className={`cs-input ${errors.name ? "cs-input-error" : ""}`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      {...register("name", {
                        required: "Name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters",
                        },
                        maxLength: {
                          value: 100,
                          message: "Name must be at most 100 characters",
                        },
                      })}
                    />
                    {errors.name && (
                      <p id="name-error" className="cs-error-text" role="alert">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="cs-label cs-label-required"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`cs-input ${errors.email ? "cs-input-error" : ""}`}
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        className="cs-error-text"
                        role="alert"
                      >
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="cs-label cs-label-required"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className={`cs-input ${errors.subject ? "cs-input-error" : ""}`}
                      aria-invalid={!!errors.subject}
                      aria-describedby={
                        errors.subject ? "subject-error" : undefined
                      }
                      {...register("subject", {
                        required: "Subject is required",
                        minLength: {
                          value: 5,
                          message: "Subject must be at least 5 characters",
                        },
                        maxLength: {
                          value: 200,
                          message: "Subject must be at most 200 characters",
                        },
                      })}
                    />
                    {errors.subject && (
                      <p
                        id="subject-error"
                        className="cs-error-text"
                        role="alert"
                      >
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="cs-label cs-label-required"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className={`cs-input ${errors.message ? "cs-input-error" : ""}`}
                      aria-invalid={!!errors.message}
                      aria-describedby={
                        errors.message ? "message-error" : undefined
                      }
                      {...register("message", {
                        required: "Message is required",
                        minLength: {
                          value: 10,
                          message: "Message must be at least 10 characters",
                        },
                        maxLength: {
                          value: 5000,
                          message: "Message must be at most 5000 characters",
                        },
                      })}
                    />
                    {errors.message && (
                      <p
                        id="message-error"
                        className="cs-error-text"
                        role="alert"
                      >
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-cs-primary w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    * Required fields
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Find Us
          </h2>
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            <iframe
              title="Amrita Vishwa Vidyapeetham Coimbatore campus map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.786871929768!2d76.89348078547205!3d10.903795729136704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85c95d3e828eb%3A0x2785cb4510629029!2sAmrita%20Vishwa%20Vidyapeetham%2C%20Coimbatore!5e0!3m2!1sen!2sin!4v1771991226740!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
