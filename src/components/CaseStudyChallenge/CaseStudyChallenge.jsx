"use client";

export default function CaseStudyChallenge({ data }) {
  if (!data) return null;

  return (
    <section className="w-full px-4 py-16 bg-[#131313]">
      <div className="max-w-7xl mx-auto">
        
        {/* TITLE */}
        <h2 className="text-4xl font-semibold text-white mb-6">
          {data.title}
        </h2>

        {/* PARAGRAPHS */}
        <div className="text-gray-300 space-y-4 max-w-3xl mb-12">
          {data.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.cards.map((item, index) => (
            <div
              key={index}
              className="bg-[#111111] border-t border-gray-700 rounded-xl p-8"
            >
              <h3 className="text-white text-lg font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
