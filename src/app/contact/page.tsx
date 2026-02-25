"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone, Linkedin, Instagram } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Send email via EmailJS
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration missing. Please check .env.local file."
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          to_email: "computersociety.avv@gmail.com",
        },
        publicKey
      );

      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Email sending error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#00629B] to-[#002855] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Have questions? We&apos;d love to hear from you. Send us a message
            and we&apos;ll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-[#00629B] mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:computersociety.avv@gmail.com"
                      className="text-gray-700 hover:text-[#00629B] transition"
                    >
                      computersociety.avv@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-[#00629B] mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a
                      href="tel:+917397468974"
                      className="text-gray-700 hover:text-[#00629B] transition"
                    >
                      +91-7397468974
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-[#00629B] mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Address
                    </h3>
                    <p className="text-gray-700">
                      IEEE CS Student Branch
                      <br />
                      Amrita School of Artificial Intelligence
                      <br />
                      Amrita Vishwa Vidyapeetham, Ettimadai
                      <br />
                      Coimbatore - 641112
                      <br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/company/computer-society-avv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-[#00629B] hover:bg-[#e8f0f8] transition"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/cs_asai_cbe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-[#00629B] hover:bg-[#e8f0f8] transition"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-8 bg-white rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Office Hours
                </h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-gray-700">Monday - Friday</dt>
                    <dd className="text-gray-900 font-medium">
                      10:00 AM - 5:00 PM
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-700">Saturday</dt>
                    <dd className="text-gray-900 font-medium">
                      10:00 AM - 2:00 PM
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-700">Sunday</dt>
                    <dd className="text-gray-900 font-medium">Closed</dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                      {...register("name", {
                        required: "Name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters",
                        },
                      })}
                    />
                    {errors.name && (
                      <p className="cs-error-text">{errors.name.message}</p>
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
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="cs-error-text">{errors.email.message}</p>
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
                      {...register("subject", {
                        required: "Subject is required",
                        minLength: {
                          value: 5,
                          message: "Subject must be at least 5 characters",
                        },
                      })}
                    />
                    {errors.subject && (
                      <p className="cs-error-text">{errors.subject.message}</p>
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
                      rows={6}
                      className={`cs-input ${errors.message ? "cs-input-error" : ""}`}
                      {...register("message", {
                        required: "Message is required",
                        minLength: {
                          value: 10,
                          message: "Message must be at least 10 characters",
                        },
                      })}
                    />
                    {errors.message && (
                      <p className="cs-error-text">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Status Messages */}
                  {submitStatus === "success" && (
                    <div className="cs-alert cs-alert-success">
                      ✓ Thank you! Your message has been sent successfully.
                      We&apos;ll get back to you soon.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="cs-alert cs-alert-error">
                      ✗ Something went wrong. Please try again or email us
                      directly.
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-cs-primary w-full"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
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
