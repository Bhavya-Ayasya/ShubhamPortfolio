import Image from "next/image";

import "@/app/globals.css";
import VideoCard from "../VideoCardComponent/VideoCard";
export default function HomeBanner({data}) {
  return (
    <div
      className="relative w-full overflow-hidden bg-black text-white mt-[-120px] lg:pb-[100px] md:pb-[60px] pb-10"
      style={{
        backgroundImage: "url('/assets/images/homeBannerImg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition:"center"
      }}
    >
      {/* --- Main Text Content --- */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4 mt-[170px] ">
        <div className=" bg-[#FF55001A] flex justify-between gap-2.5 items-center text-[#E12501] py-4 px-2.5 text-base font-medium rounded-[10px] mb-6 max-w-[228px] w-full mx-auto backdrop-blur-[34px]">
          <img src={data.tagicon} alt="tagicon" />
          {data.tag}
        </div>

        <h1 className="text-4xl md:text-[52px] font-urbanis  font-bold mb-4">
          {data.title}
        </h1>

        <p className="mb-8 text-[#858585] text-[20px] font-normal max-w-[626px] w-full mx-auto">{data.subtitle}</p>

        <div className="flex md:flex-row flex-col justify-center gap-4">
          <button className="bg-[#FF5503] hover:bg-orange-600 font-medium px-8 py-3 rounded-lg cursor-pointer">
            {data.ctaPrimary}
          </button>

          <button className="bg-[#212121] hover:bg-gray-700 font-medium px-5 py-3 rounded-lg cursor-pointer">
            {data.ctaSecondary}
          </button>
        </div>
      </div>

      {/* --- MOVING MARQUEE CARDS --- */}
      <div className="relative overflow-hidden mt-16">
  <div className="flex whitespace-nowrap">

    {/* Scroll Track */}
    <div className="flex animate-marquee">
      {data.cards.map((card) => (
            <VideoCard key={card.id + "-duplicate"} card={card} />
          ))}
    </div>

    {/* Duplicate Track */}
    <div className="flex animate-marquee">
    {data.cards.map((card) => (
            <VideoCard key={card.id + "-duplicate"} card={card} />
          ))}
    </div>

  </div>
</div>

    </div>
  );
}
