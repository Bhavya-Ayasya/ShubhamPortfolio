"use client";
import { useState } from "react";
import { Play, Video, BarChart2, Heart } from "lucide-react";

export default function CaseStudyTheResult({data}) {
  const [play, setPlay] = useState(false);
  const icons = {
    video: <Video className="text-orange-500" size={28} />,
    chart: <BarChart2 className="text-orange-500" size={28} />,
    heart: <Heart className="text-orange-500" size={28} />
  };

  return (
    <div className="w-full bg-black text-white py-10 md:py-14 px-4 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        {data.title}
      </h2>

      {/* Video Container */}
      <div className="relative w-full max-w-5xl md:rounded-[40px] rounded-3xl lg:rounded-[60px] overflow-hidden">
        {!play ? (
          <div className="relative">
            <img
              src={data.videoPoster}
              alt=""
              className="w-full h-[250px] md:h-[400px] lg:h-[495px] object-cover"
            />

            {/* Play Button */}
            <button
              onClick={() => setPlay(true)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-white/30 hover:bg-white/50 backdrop-blur-md p-6 rounded-full transition">
                <Play size={40} className="text-white" />
              </div>
            </button>
          </div>
        ) : (
          <video
            src={data.videoSrc}
            controls
            autoPlay
            className="w-full h-[250px] md:h-[400px] lg:h-[495px] object-cover"
          />
        )}
      </div>

      {/* Metrics Section */}
      <div className="mt-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.metrics.map((item, index) => (
          <div
            key={index}
            className="bg-[#111] border border-[#222] px-6 py-6 rounded-xl flex gap-4 items-start justify-start"
          >
            <div className="p-3 bg-black rounded-lg shadow-inner">
              {icons[item.icon]}
            </div>

            <div>
              <p className="text-sm text-gray-300">{item.label}</p>
              <p className="text-green-400 font-semibold mt-1">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
