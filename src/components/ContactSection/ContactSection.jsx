
"use client";
import { useState } from "react";
import contactData from "@/data/contact/contact.json";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", company: "", message: "" });
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 md:py-[60px] py-10 lg:py-20">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-3">{contactData.title}</h2>
          <p className="text-gray-400 mb-0 lg:mb-12">{contactData.subtitle}</p>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-[#111] p-4 md:p-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-8">Send us a message</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full bg-[#1a1a1a] p-3 rounded-lg"
              required
            />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail Address"
              className="w-full bg-[#1a1a1a] p-3 rounded-lg"
              required
            />
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company / Brand Name"
              className="w-full bg-[#1a1a1a] p-3 rounded-lg"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write a message"
              rows="5"
              className="w-full bg-[#1a1a1a] p-3 rounded-lg"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-600 hover:bg-orange-700 py-3 rounded-lg font-semibold"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
