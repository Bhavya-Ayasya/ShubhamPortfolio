"use client"
import { useState } from "react";

export default function VideoCard({ card }) {
  const [play, setPlay] = useState(false);

  return (
    <div
      className="inline-block w-80 h-48 mr-6 rounded-xl overflow-hidden bg-[#0d0f1a] cursor-pointer"
      onClick={() => setPlay(true)}
    >
      {!play ? (
        // Thumbnail image
        <img
          src={card.thumbnail}
          alt="thumbnail"
          className="w-full h-full object-cover"
        />
      ) : (
        // Iframe video autoplay
        <iframe
          src={`${card.videoUrl}?autoplay=1&mute=1`}
          title="video"
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}
