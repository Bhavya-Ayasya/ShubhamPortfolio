
"use client";
import { useState, useRef } from "react";

export default function CaseStudyBanner({ data }) {
  const [activeVideo, setActiveVideo] = useState(null);
  const videoRefs = useRef([]);

  const togglePlay = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (activeVideo === index) {
      video.pause();
      setActiveVideo(null);
    } else {
      videoRefs.current.forEach((v, i) => {
        if (i !== index && v) v.pause();
      });
      video.play();
      setActiveVideo(index);
    }
  };

  if (!data) return null;

  return (
    <div className="w-full py-10 px-4">
      <div className="max-w-7xl w-full mx-auto">

        {/* ========= Heading + Button ========= */}
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start lg:flex-row lg:justify-between mb-10 gap-4">

          {/* Heading */}
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
              {data?.heading}
            </h1>
            <p className="text-3xl md:text-4xl font-semibold mt-2">
              {data?.subHeading}
            </p>
          </div>

          {/* Button */}
          {data?.buttons?.[0] && (
            <a
              href={data?.buttons?.[0]?.link}
              className="px-6 py-3 bg-orange-500 rounded-lg font-medium text-white text-lg w-full max-w-[220px] lg:w-auto text-center"
            >
              {data?.buttons?.[0]?.label}
            </a>
          )}
        </div>

        {/* ========= Banner Video/Thumbnail ========= */}
        {data?.thumbnails?.[0] && (
          <div
            className="relative w-full rounded-3xl overflow-hidden cursor-pointer group aspect-[16/9]" 
            onClick={() => data?.thumbnails?.[0]?.video && togglePlay(0)}
          >
            {/* VIDEO */}
            {data?.thumbnails?.[0]?.video && (
              <video
                ref={(el) => (videoRefs.current[0] = el)}
                src={data?.thumbnails?.[0]?.video}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}

            {/* THUMBNAIL */}
            <img
              src={data?.thumbnails?.[0]?.thumbnail}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300
                ${activeVideo === 0 ? "opacity-0" : "opacity-100"}`}
              alt="Thumbnail"
            />

            {/* PLAY BUTTON */}
            {data?.thumbnails?.[0]?.video && activeVideo !== 0 && (
              <img
                src="/assets/icon/playIcon.png"
                className="absolute inset-0 m-auto w-16 h-16 md:w-20 md:h-20 opacity-90 group-hover:scale-110 transition"
                alt="Play"
              />
            )}
          </div>
        )}

        {/* ========= Stats ========= */}
        <div className="grid grid-cols-2  lg:grid-cols-4 gap-4 mt-6">
          {data?.stats?.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1b1b1b] p-3 lg:p-5 rounded-xl"
            >
              <p className="text-gray-400 text-xs md:text-sm mb-1 uppercase">
                {item?.title}
              </p>
              <p className="text-white text-sm md:text-xl font-semibold">
                {item?.value}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
