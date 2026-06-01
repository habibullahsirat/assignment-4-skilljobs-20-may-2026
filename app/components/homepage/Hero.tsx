// export default function Hero() {
//   return (
//     <section className="flex justify-center px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10">
//       <div
//         className="
//           w-full
//           max-w-[1280px]
//           min-h-[420px]
//           sm:min-h-[500px]
//           lg:h-[458px]
//           rounded-[12px]
//           bg-[url('/banner1.jpg')]
//           bg-cover
//           bg-top
//           relative
//           overflow-hidden
//         "
//       >
//         <div className="absolute inset-0 bg-black/30"></div>

//         <div
//           className="
//             relative
//             z-10
//             flex
//             flex-col
//             justify-center
//             h-full
//             px-6
//             sm:px-10
//             lg:pl-[60px]
//             py-12
//             max-w-full
//             sm:max-w-[620px]
//           "
//         >
//           <h1
//             className="
//               text-white
//               font-bold
//               leading-tight
//               text-[34px]
//               sm:text-[48px]
//               md:text-[58px]
//               lg:text-[68px]
//               lg:leading-[74px]
//             "
//           >
//             Redefine Your
//             <br />
//             Everyday Style
//           </h1>

//           <p
//             className="
//               text-white
//               mt-4
//               sm:mt-5
//               leading-relaxed
//               text-[16px]
//               sm:text-[20px]
//               lg:text-[24px]
//               lg:leading-[34px]
//             "
//           >
//             Discover chic tops, comfy loungewear, trendy bottoms, and timeless
//             accessories — all in one place.
//           </p>

//           <button
//             className="
//               mt-6
//               sm:mt-8
//               w-fit
//               bg-[#161616]
//               text-white
//               px-5
//               sm:px-6
//               py-3
//               rounded-[6px]
//               text-[14px]
//               sm:text-[16px]
//               font-medium
//               hover:bg-black
//               transition
//             "
//           >
//             Explore Collection
//           </button>
//         </div>

//         {/* Slider dots */}
//         <div
//           className="
//             absolute
//             bottom-4
//             sm:bottom-6
//             left-1/2
//             -translate-x-1/2
//             flex
//             gap-2
//             sm:gap-3
//             z-10
//           "
//         >
//           <div className="w-8 sm:w-10 h-[4px] bg-[#ff6b3d] rounded-full"></div>
//           <div className="w-3 sm:w-4 h-[4px] bg-white rounded-full opacity-70"></div>
//           <div className="w-3 sm:w-4 h-[4px] bg-white rounded-full opacity-70"></div>
//           <div className="w-3 sm:w-4 h-[4px] bg-white rounded-full opacity-70"></div>
//         </div>
//       </div>
//     </section>
//   );
// }

/////////////////////////////////
// Code v2.
"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const banners = ["/banner1.jpg", "/banner2.jpg", "/banner3.jpg"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, []);

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
          relative
          overflow-hidden
        "
      >
        {/* Slider */}
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            width: `${banners.length * 100}%`,
            transform: `translateX(-${current * (100 / banners.length)}%)`,
          }}
        >
          {banners.map((banner, index) => (
            <div
              key={index}
              className="w-full h-full shrink-0 bg-cover bg-top relative"
              style={{
                backgroundImage: `url(${banner})`,
                width: `${100 / banners.length}%`,
              }}
            >
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div
          className="
            absolute
            inset-0
            z-10
            flex
            flex-col
            justify-center
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

        {/* Dots */}
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
            z-20
          "
        >
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-[4px] rounded-full transition-all duration-300 ${
                current === index ? "w-10 bg-[#ff6b3d]" : "w-4 bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
