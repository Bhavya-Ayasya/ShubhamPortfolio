"use client";

export default function CaseStudyProcessSection({data}) {
  return (
    <section className="w-full bg-black text-white md:py-[60px] py-10 lg:py-20 px-6">
      {/* Title + Right Description */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-0">
          {data.title}
        </h2>

        <p className="text-gray-300 max-w-lg text-base md:text-lg leading-relaxed">
          {data.description}
        </p>
      </div>

      {/* Steps Section */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {data.steps.map((step, i) => (
          <div key={i} className="relative">

            {/* Top Timeline Dot & Line */}
            <div className="md:flex hidden items-center gap-2 mb-6">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <div className="flex-1 border-t border-dashed border-gray-600"></div>
            </div>

            {/* Tag */}
            <span className="px-3 py-1 text-sm bg-[#ff55001a] text-[#E12501] rounded-full">
              {step.tag}
            </span>

            {/* Title */}
            <h3 className="text-xl font-semibold mt-4">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mt-3">
              {step.description}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}
