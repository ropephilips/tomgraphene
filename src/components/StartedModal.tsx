"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SupportModal({ isOpen, onClose }: SupportModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    interest: "",
    message: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [currentPage, setCurrentPage] = useState("");
  const [pageName, setPageName] = useState("");
  const [mounted, setMounted] = useState(false);

  // Always run this hook first — it ensures we only render on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Page name detection (safe on client)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      setCurrentPage(path);
      const formatted =
        path
          .split("/")
          .filter(Boolean)
          .pop()
          ?.replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase()) || "Website";
      setPageName(formatted);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    const payload = {
      access_key: "YOUR-WEB3FORMS-ACCESS-KEY", // Replace with your actual key
      subject: `Support Request - ${pageName} | Tomgraphene`,
      from_name: formData.name,
      from_title: formData.title,
      from_interest: formData.interest,
      from_email: formData.email,
      message: `${formData.message}\n\nSubmitted from: ${currentPage}`,
      consent: formData.agree ? "Agreed to receive emails" : "Did not consent",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          title: "",
          interest: "",
          message: "",
          agree: false,
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  if (!mounted || !isOpen) return null; // ✅ Safe to return early after hooks

  return (
    <div className="fixed px-8 inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-xl shadow-lg max-w-lg w-full p-8 relative text-gray-600"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-red-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>

        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">
          {pageName ? `${pageName} Support Request` : "Get Support"}
        </h2>

        {status === "success" ? (
          <div className="text-green-600 text-center font-medium py-6">
            ✅ Thank you! Your request has been submitted.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 font-serif">
            <input
              type="text"
              placeholder="Your name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="text"
              placeholder="Job Title"
              required
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="text"
              placeholder="Service of interest"
              required
              value={formData.interest}
              onChange={(e) =>
                setFormData({ ...formData, interest: e.target.value })
              }
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="email"
              placeholder="you@email.com"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <textarea
              rows={4}
              placeholder="Describe your issue..."
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            />

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="agree"
                checked={formData.agree}
                onChange={(e) =>
                  setFormData({ ...formData, agree: e.target.checked })
                }
                required
              />
              <label htmlFor="agree" className="text-sm text-gray-700">
                I agree to receive email communication from Tomgraphene.
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-gray-500 text-white font-medium rounded-md py-2 transition ${
                loading ? "opacity-70 cursor-not-allowed" : "hover:bg-gray-700"
              }`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>

            {status === "error" && (
              <p className="text-red-600 text-sm text-center">
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}
      </motion.div>
    </div>
  );
}
