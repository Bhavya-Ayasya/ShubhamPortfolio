"use client";

import { useRef, useState } from "react";

/* ---------- Helpers ---------- */
const isYouTubeUrl = (url) =>
  url?.includes("youtube.com") || url?.includes("youtu.be");

const getYouTubeEmbedUrl = (url) => {
  if (url.includes("embed")) return url + "?autoplay=1";

  const videoId = url.includes("youtu.be")
    ? url.split("youtu.be/")[1]
    : new URL(url).searchParams.get("v");

  return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
};

/* ---------- Component ---------- */
export default function TestimonialSlider({ testimonialsData }) {
  const { subHeading, heading, description, items } = testimonialsData;

  const [activeVideo, setActiveVideo] = useState(null);
  const videoRefs = useRef([]);

  const toggleVideo = (id, index) => {
    videoRefs.current.forEach((v) => v?.pause?.());

    if (activeVideo === id) {
      videoRefs.current[index]?.pause?.();
      setActiveVideo(null);
    } else {
      videoRefs.current[index]?.play?.();
      setActiveVideo(id);
    }
  };

  return (
    <section className="py-20 px-4 max-w-[1300px] mx-auto overflow-hidden">
      {/* HEADER */}
      <div className="text-center mb-14">
        <span className="inline-block bg-[#2e1a12] text-orange-400 px-4 py-1 rounded-full text-sm">
          {subHeading}
        </span>

        <h2 className="text-3xl md:text-4xl font-semibold mt-4">
          {heading}
        </h2>

        <p className="text-gray-400 mt-3 max-w-[600px] mx-auto text-sm md:text-base">
          {description}
        </p>
      </div>

      {/* MARQUEE */}
      <div className="relative overflow-hidden">
        <div className="marquee-track flex gap-6">
          {[...items, ...items].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="max-w-[320px] w-full md:max-w-[380px]"
            >
              <div className="bg-[#141414] rounded-2xl p-6 h-full flex flex-col">
                {/* VIDEO */}
                {item.video && (
                  <div className="relative rounded-xl overflow-hidden mb-4 cursor-pointer">
                    {/* YOUTUBE */}
                    {isYouTubeUrl(item.video) ? (
                      activeVideo === item.id ? (
                        <iframe
                          src={getYouTubeEmbedUrl(item.video)}
                          className="w-full h-[200px]"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                        />
                      ) : (
                        <div onClick={() => setActiveVideo(item.id)}>
                          <img
                            src={item.thumbnail}
                            className="w-full h-[200px] object-cover"
                            alt=""
                          />
                          <img
                            src="/assets/icon/playIcon.png"
                            className="absolute inset-0 m-auto w-14"
                            alt=""
                          />
                        </div>
                      )
                    ) : (
                      /* MP4 / NORMAL VIDEO */
                      <>
                        <video
                          ref={(el) => (videoRefs.current[index] = el)}
                          src={item.video}
                          className="w-full h-[200px] object-cover"
                          playsInline
                        />

                        {activeVideo !== item.id && (
                          <div onClick={() => toggleVideo(item.id, index)}>
                            <img
                              src={item.thumbnail}
                              className="absolute inset-0 w-full h-full object-cover"
                              alt=""
                            />
                            <img
                              src="/assets/icon/playIcon.png"
                              className="absolute inset-0 m-auto w-14"
                              alt=""
                            />
                          </div>
                        )}
                      </>
                    )}
                  </div>
                )}

                {/* RATING */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-yellow-400 text-lg ${
                        i >= item.rating ? "opacity-30" : ""
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* TEXT */}
                <p className="text-white text-base leading-relaxed mb-6">
                  “{item.text}”
                </p>

                <hr className="border-gray-700 mb-4" />

                {/* AUTHOR */}
                <div>
                  <p className="font-semibold">{item.author}</p>
                  <p className="text-sm text-gray-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
