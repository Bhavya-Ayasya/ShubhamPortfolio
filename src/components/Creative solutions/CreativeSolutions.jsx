export default function CreativeSolutions({ CreativeSolutionsData }) {

  return (
    <section className="bg-black text-white px-6  lg:px-20 md:py-[60px] py-10 lg:py-20">
      <div className="max-w-7xl mx-auto ">
        <div className="flex  lg:flex-row flex-col justify-between gap-5">
          {/* LEFT CONTENT */}
          <div className="mb-12 lg:max-w-112.5 w-full">
            <p className="px-4 py-1 rounded-full bg-[#ff55001a] text-[#E12501] text-sm max-w-[220px] w-full">
              {CreativeSolutionsData.section.tag}
            </p>

            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              {CreativeSolutionsData.section.title}
            </h2>

            <p className="text-[#858585] mb-[60px] text-xl">
              {CreativeSolutionsData.section.subtitle}
            </p>

            <div className="flex md:flex-row flex-col gap-4 items-center ">
              <button className="bg-[#FF6A1A] hover:bg-[#ff7f3e] px-5 py-3 rounded-lg text-sm font-medium w-full">
                {CreativeSolutionsData.section.ctaPrimary}
              </button>
              <button className="bg-[#1A1A1A] hover:bg-[#2a2a2a] px-5 py-3 rounded-lg text-sm font-medium w-full">
                {CreativeSolutionsData.section.ctaSecondary}
              </button>
            </div>
          </div>

          {/* SERVICES RIGHT LIST */}
          <div className="grid grid-cols-2 gap-10">
            {CreativeSolutionsData.services.map((service) => (
              <div
                key={service.id}
                className="bg-[#0E0E0E] rounded-[20px] flex flex-col items-center justify-between p-5 lg:py-5 lg:px-5 max-w-171.75 w-full" 
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className=" max-w-20 xl:max-w-32 w-full block"
                />

                <div className="flex-1 ml-8">
                  <h3 className="text-lg md:text-2xl font-bold mb-2">
                    {service.title}
                  </h3>

                  <p className="text-[#858585] text-base max-w-[370px] mb-4  md:block hidden" >
                    {service.description}
                  </p>

                  <button className="bg-[#FFFFFF1A] hover:bg-[#FFFFFF1A] text-sm px-4 py-2.5 rounded-[10px] flex items-center gap-2 cursor-pointer md:block hidden">
                    {service.button}
                    <span className="ml-2.5">›</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
