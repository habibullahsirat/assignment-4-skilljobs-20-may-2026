export default function Hero() {
  return (
    <section className="flex justify-center px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10">
      <div
        className="
          w-full
          max-w-[1280px]
          min-h-[420px]
          sm:min-h-[500px]
          lg:h-[458px]
          rounded-[12px]
          bg-[url('/banner1.jpg')]
          bg-cover
          bg-top
          relative
          overflow-hidden
        "
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div
          className="
            relative
            z-10
            flex
            flex-col
            justify-center
            h-full
            px-6
            sm:px-10
            lg:pl-[60px]
            py-12
            max-w-full
            sm:max-w-[620px]
          "
        >
          <h1
            className="
              text-white
              font-bold
              leading-tight
              text-[34px]
              sm:text-[48px]
              md:text-[58px]
              lg:text-[68px]
              lg:leading-[74px]
            "
          >
            Redefine Your
            <br />
            Everyday Style
          </h1>

          <p
            className="
              text-white
              mt-4
              sm:mt-5
              leading-relaxed
              text-[16px]
              sm:text-[20px]
              lg:text-[24px]
              lg:leading-[34px]
            "
          >
            Discover chic tops, comfy loungewear, trendy bottoms, and timeless
            accessories — all in one place.
          </p>

          <button
            className="
              mt-6
              sm:mt-8
              w-fit
              bg-[#161616]
              text-white
              px-5
              sm:px-6
              py-3
              rounded-[6px]
              text-[14px]
              sm:text-[16px]
              font-medium
              hover:bg-black
              transition
            "
          >
            Explore Collection
          </button>
        </div>

        {/* Slider dots */}
        <div
          className="
            absolute
            bottom-4
            sm:bottom-6
            left-1/2
            -translate-x-1/2
            flex
            gap-2
            sm:gap-3
            z-10
          "
        >
          <div className="w-8 sm:w-10 h-[4px] bg-[#ff6b3d] rounded-full"></div>
          <div className="w-3 sm:w-4 h-[4px] bg-white rounded-full opacity-70"></div>
          <div className="w-3 sm:w-4 h-[4px] bg-white rounded-full opacity-70"></div>
          <div className="w-3 sm:w-4 h-[4px] bg-white rounded-full opacity-70"></div>
        </div>
      </div>
    </section>
  );
}
