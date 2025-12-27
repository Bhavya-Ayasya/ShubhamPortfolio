"use client";


export default function CaseStudyAbout({ data }) {
  if (!data) return null;

  return (
    <div className="w-full px-4 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* LEFT — IMAGE CARD */}
        <div>
          <img
            src={data.image}
            alt="Client Logo"
            className="object-contain rounded-2xl"
          />
        </div>

        {/* RIGHT — CONTENT CARD */}
        <div className="bg-[#131313] rounded-2xl p-5 md:p-10 text-white flex flex-col justify-center">
          {/* Title */}
          <h2 className="text-3xl font-semibold mb-4">
            {data.title}
          </h2>

          {/* Industry */}
          <p className="text-gray-400 uppercase tracking-widest text-sm mb-2">
            {data.industryTitle}
            <span className="text-white font-semibold normal-case ml-2">
              {data.industryValue}
            </span>
          </p>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed mt-4">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
}
