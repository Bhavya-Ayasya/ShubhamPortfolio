

"use client";
import { useState, useRef } from "react";

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

export default function ThumbnailGallery({ data }) {
  const [visibleCount, setVisibleCount] = useState(4);
  const [activeVideo, setActiveVideo] = useState(null);
  const videoRefs = useRef([]);

  const togglePlay = (index, hasVideo) => {
    if (!hasVideo) return;

    // Pause all MP4 videos
    videoRefs.current.forEach((v, i) => {
      if (i !== index && v?.pause) v.pause();
    });

    if (activeVideo === index) {
      videoRefs.current[index]?.pause?.();
      setActiveVideo(null);
    } else {
      videoRefs.current[index]?.play?.();
      setActiveVideo(index);
    }
  };

  const handleLoadMore = () => setVisibleCount((prev) => prev + 2);
  const allLoaded = visibleCount >= data.thumbnails.length;

  return (
    <div className="mb-16 px-4 sm:px-0">
      <div
        className="max-w-7xl w-full mx-auto bg-[#1a1a1a] rounded-3xl 
        px-5 py-8 sm:p-12 text-center"
      >
        {/* Heading */}
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-3">
            {data.heading}
          </h2>

          <p className="text-[#858585] text-sm sm:text-xl max-w-xl mx-auto mb-10 sm:mb-[60px]">
            {data.description}
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10">
          {data.thumbnails.slice(0, visibleCount).map((item, index) => {
            const hasVideo = !!item.video;
            const isYouTube = isYouTubeUrl(item.video);

            return (
              <div
                key={index}
                onClick={() => !isYouTube && togglePlay(index, hasVideo)}
                className={`relative rounded-xl overflow-hidden group 
                  h-[220px] sm:h-[341px]
                  ${hasVideo ? "cursor-pointer" : "cursor-default"}`}
              >
                {/* YOUTUBE */}
                {hasVideo && isYouTube ? (
                  activeVideo === index ? (
                    <iframe
                      src={getYouTubeEmbedUrl(item.video)}
                      className="w-full h-full"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  ) : (
                    <div onClick={() => setActiveVideo(index)}>
                      <img
                        src={item.thumbnail}
                        alt="Thumbnail"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <img
                        src="/assets/icon/playIcon.png"
                        className="absolute inset-0 m-auto w-14 h-14 sm:w-16 sm:h-16 
                        opacity-80 group-hover:scale-110 transition"
                      />
                    </div>
                  )
                ) : (
                  /* MP4 / NORMAL VIDEO */
                  <>
                    {hasVideo && (
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        src={item.video}
                        className="w-full h-full object-cover"
                        playsInline
                      />
                    )}

                    <img
                      src={item.thumbnail}
                      alt="Thumbnail"
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300
                        ${
                          hasVideo && activeVideo === index
                            ? "opacity-0"
                            : "opacity-100"
                        }`}
                    />

                    {hasVideo && activeVideo !== index && (
                      <img
                        src="/assets/icon/playIcon.png"
                        className="absolute inset-0 m-auto w-14 h-14 sm:w-16 sm:h-16 
                        opacity-80 group-hover:scale-110 transition"
                      />
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={data.buttons[0].link}
            className="w-full sm:w-auto px-6 py-3 rounded-md font-semibold 
            bg-orange-500 text-center"
          >
            {data.buttons[0].label}
          </a>

          {!allLoaded && (
            <button
              onClick={handleLoadMore}
              className="w-full sm:w-auto px-6 py-3 rounded-md font-semibold 
              bg-[#2c2c2c]"
            >
              {data.buttons[1].label}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
