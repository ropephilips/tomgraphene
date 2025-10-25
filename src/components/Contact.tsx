"use client";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FaEnvelope, FaLinkedinIn, FaMapLocation, FaPhone } from "react-icons/fa6";
import Image from "next/image";
import Script from "next/script";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [status, setStatus] = useState("");

  // 🌗 Detect system or page theme and apply Turnstile theme
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }

    const listener = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light");
    };

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", listener);

    return () => mq.removeEventListener("change", listener);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://submit-form.com/8x2tUbBpY", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        e.currentTarget.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ✅ Cloudflare Turnstile Script */}
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />

      <section id="contact" className="scroll-mt-24 py-6 lg:py-20 bg-gray-50 text-black">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* Left Section */}
          <div>
            <h2 className="text-xl md:text-4xl font-bold font-serif mb-6 text-center">
              Contact Us
            </h2>

            <div className="bg-black p-6 rounded-lg shadow-md">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/logo/logoL.PNG"
                  alt="Logo"
                  className="brightness-150 contrast-150 saturate-150 opacity-100 w-50 h-15 object-cover"
                  width={100}
                  height={50}
                  priority
                />
              </div>

              <div className="font-serif space-y-2 mt-4">
                <p className="flex items-center gap-3 text-white text-sm">
                  <FaMapLocation className="text-red-600" /> Toronto, Canada.
                </p>
                <p className="flex items-center gap-3 text-white text-sm">
                  <FaPhone className="text-green-600" /> +1 365-720-1748
                </p>
                <p className="flex items-center gap-3 text-white text-sm">
                  <FaEnvelope className="text-orange-600" /> info@tomgraphene.com
                </p>
                <p className="flex items-center gap-3 text-white text-sm">
                  <FaLinkedinIn className="text-blue-600" /> tomgraphene
                </p>
              </div>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full">
            <h3 className="text-xs md:text-sm text-gray-900 text-start font-semibold uppercase mb-3 tracking-[0.35em]">
              Send Us A Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-gray-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-gray-500"
              />
              <input
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-gray-500"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Enter Message"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-gray-500"
              />

              {/* ✅ Cloudflare Turnstile Widget (Auto theme) */}
              <div className="flex justify-center items-center">
                <div
                  className="cf-turnstile rounded-md border border-gray-200 bg-gray-50 p-2"
                  data-sitekey="0x4AAAAAAB8kWP2bi0jnWpAj"
                  data-theme={theme}
                ></div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded text-black font-bold lowercase transition tracking-[0.35em] ${
                  loading
                    ? "bg-gray-800 cursor-not-allowed"
                    : "bg-gray-200 hover:bg-gray-500 cursor-pointer"
                }`}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
               {status && (
            <p
              className={`mt-4 text-sm ${
                status.includes("✅") ? "text-green-600" : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}
          </div>
        </div>
      </section>
    </>
  );
}
