import Image from "next/image";

export default function WhoWeAreSection({ data }) {
  const section = data.whoWeAreSection;

  return (
    <section className="bg-black text-white md:px-6 px-5 lg:px-20 lg:py-20 md:py-[60px] py-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <div className="mb-4">
            <span className="px-4 py-1 rounded-full bg-[#ff55001a] text-[#E12501] text-sm">
              {section.tag}
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            {section.title}
          </h2>

          <p className="text-gray-400 max-w-md leading-relaxed">
            {section.subtitle}
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <div className="flex gap-4 mb-8">
            {section.images.map((img) => (
              <div key={img.id} className="rounded-xl overflow-hidden">
                <Image
                  src={img.src}
                  alt="editor"
                  width={400}
                  height={400}
                  className="object-cover rounded-xl"
                />
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-3">
            {section.contentTitle}
          </h3>

          <p className="text-gray-400 leading-relaxed mb-6">
            {section.contentText}
          </p>

          <div className="flex md:flex-row flex-col gap-4 items-center">
            <button className="bg-orange-600 hover:bg-orange-700 px-5 md:px-6 py-3 rounded-md text-white md:max-w-[150px] w-full">
              {section.ctaPrimary}
            </button>

            <button className="bg-white/10 hover:bg-white/20 px-5 md:px-6 py-3 rounded-md text-white md:max-w-[178px] w-full">
              {section.ctaSecondary}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
