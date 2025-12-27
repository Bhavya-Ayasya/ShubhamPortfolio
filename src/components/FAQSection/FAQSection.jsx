
"use client";
import { useState } from "react";
import faqData from "@/data/faqs/faqs.json";

export default function FAQSection({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="bg-black text-white md:py-[60px] py-10 lg:py-20 px-6 flex flex-col items-center">
      
      {/* Tag */}
      <div className="mb-4">
        <span className="px-4 py-1 rounded-full bg-[#ff55001a] text-[#E12501] text-sm">
          {faqData.subtitleTag}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
        {faqData.title}
      </h2>

      {/* FAQ List */}
      <div className="w-full max-w-3xl space-y-4">
        {faqData.faqs.map((item, i) => {
          const isOpen = openIndex === i;

          return (
            <div
              key={i}
              className="bg-[#111] rounded-xl p-5 cursor-pointer transition hover:bg-[#1a1a1a]"
              onClick={() => toggle(i)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{item.question}</h3>
                <span className="text-xl">{isOpen ? "−" : "+"}</span>
              </div>

              {/* Smooth Accordion Content */}
              <div
                className={`
                  overflow-hidden transition-all duration-300 
                  ${isOpen ? "max-h-[200px] mt-3" : "max-h-0"}
                `}
              >
                <p className="text-gray-400">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Button */}
      <button className="mt-12 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition">
        {faqData.buttonText}
      </button>
    </section>
  );
}
