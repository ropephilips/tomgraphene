"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaEnvelope, FaLinkedinIn , FaMapLocation, FaPhone } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xjkoorvk", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error(" Something went wrong, Please try again.");
      }
    } catch (error) {
      toast.error(" Network error, Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-6 lg:py-20 bg-gray-50 text-black"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div>
          <h2 className="text-xl md:text-4xl font-bold font-serif mb-6 text-center">
            Contact Us
          </h2>

                  <div className="bg-black p-6 rounded-lg shadow-md">
                       
                        <div className="flex flex-col items-center justify-center p-0 m-0 leading-0">
                            <Image src="/logo/logoL.PNG" alt="Logo" 
                            className="brightness-150 contrast-150 saturate-150 opacity-100 
                            w-50 h-15 object-cover object-center" width={100} height={50} priority/>
                        </div>
                        
                        <div className="font-serif">
                        <p className="flex items-center gap-3 text-white text-sm space-x-0">
                            <FaMapLocation className="text-red-600"/> North York, Ontario.
                        </p>
                        <p className="flex items-center gap-3 text-white text-sm">
                            <FaPhone className="text-green-600"/> +1 365-720-1748
                        </p>
                        <p className="flex items-center gap-3 text-white text-sm">
                            <FaEnvelope className="text-orange-600"/>info@tomgraphene.com
                        </p>
                        <p className="flex items-center gap-3 text-white text-sm">
                            <FaLinkedinIn className="text-blue-600"/>tomgraphene
                        </p>
                        </div>
                        
                  </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 tracking-tighter">Send Us A Message</h3>
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
              placeholder="Phone number"
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
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded text-black font-bold font-serif transition ${
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
  );
}
