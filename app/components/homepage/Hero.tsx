export default function Hero() {
  return (
    <section className="flex justify-center mt-10">
      <div
        className="
          w-[1280px]
          h-[458px]
          rounded-[12px]
          bg-[url('/banner1.jpg')]
          bg-cover
          bg-top
          relative
          overflow-hidden
        "
      >
        {/* Overlay (optional for better text visibility) */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full pl-[60px] max-w-[620px]">
          <h1 className="text-white text-[68px] font-bold leading-[74px]">
            Redefine Your
            <br />
            Everyday Style
          </h1>

          <p className="text-white text-[24px] leading-[34px] mt-5">
            Discover chic tops, comfy loungewear, trendy bottoms, and timeless
            accessories — all in one place.
          </p>

          <button
            className="
              mt-8
              w-fit
              bg-[#161616]
              text-white
              px-6
              py-3
              rounded-[6px]
              text-[16px]
              font-medium
              hover:bg-black
              transition
            "
          >
            Explore Collection
          </button>
        </div>

        {/* Slider dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          <div className="w-10 h-[4px] bg-[#ff6b3d] rounded-full"></div>
          <div className="w-4 h-[4px] bg-white rounded-full opacity-70"></div>
          <div className="w-4 h-[4px] bg-white rounded-full opacity-70"></div>
          <div className="w-4 h-[4px] bg-white rounded-full opacity-70"></div>
        </div>
      </div>
    </section>
  );
}
