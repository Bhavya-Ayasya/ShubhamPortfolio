"use client";

import { useState } from "react";

export default function WorkVideoSection({data}) {

  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="w-full max-w-[1150px] mx-auto md:py-[60px] py-10 lg:py-20 px-5">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div>
          <span className="px-3 py-1 bg-[#ff55001a] text-[#E12501] rounded-full text-sm font-medium">
            {data.sectionTag}
          </span>

          <h2 className="text-2xl md:text-4xl font-bold mt-4">
            {data.heading}
          </h2>
        </div>

        <p className="text-[#858585] max-w-md">
          {data.description}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-[60px]">
        {data.videos.map((item) => (
          <div
            key={item.id}
            className="relative group rounded-xl overflow-hidden bg-[#111] border border-[#222]"
          >

            {/* Thumbnail → Video */}
            {activeVideo === item.id ? (
              <iframe
                src={item.videoUrl + "?autoplay=1"}
                className="w-full h-[300px]"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            ) : (
              <>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-[300px] object-cover"
                />

                {/* Play Button */}
                <button
                  onClick={() => setActiveVideo(item.id)}
                  className="absolute inset-0 flex items-center justify-center bg-black/10"
                >
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-black text-xl font-bold">
                    ▶
                  </div>
                </button>

                {/* CTA */}
                <button className="absolute bottom-4 left-4 px-5 py-2 bg-white/20 backdrop-blur-md text-white rounded-full text-sm">
                  {item.cta} →
                </button>
              </>
            )}

          </div>
        ))}
      </div>

      {/* Bottom Buttons */}
      <div className="flex md:flex-row flex-col justify-center gap-6 mt-14">
        <button className="px-7 py-3 bg-orange-500 text-black rounded-full font-semibold">
          {data.primaryButton}
        </button>

        <button className="px-7 py-3 bg-[#1a1a1a] border border-[#333] rounded-full font-semibold">
          {data.secondaryButton}
        </button>
      </div>
    </section>
  );
}
