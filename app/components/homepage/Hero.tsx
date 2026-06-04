// "use client";

// import { useEffect, useState } from "react";

// export default function Hero() {
//   const banners = [
//     { id: 1, image: "/banner1.png" },
//     { id: 2, image: "/banner2.png" },
//     { id: 3, image: "/banner3.png" },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % banners.length);
//     }, 3000); // stop on each image for 3 seconds

//     return () => clearInterval(interval);
//   }, [banners.length]);

//   return (
//     <section
//       className="
//                 w-full
//                 max-w-[1280px]
//                 min-h-[420px]
//                 sm:min-h-[500px]
//                 lg:h-[458px]
//                 rounded-[12px]
//                 overflow-hidden
//                 mx-auto
//             "
//     >
//       <div
//         className="flex h-full transition-transform duration-700 ease-in-out"
//         style={{
//           transform: `translateX(-${currentIndex * 100}%)`,
//         }}
//       >
//         {banners.map((banner) => (
//           <div key={banner.id} className="w-full h-full flex-shrink-0">
//             <img
//               src={banner.image}
//               alt={`Banner ${banner.id}`}
//               className="w-full h-full object-cover rounded-[12px]"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const banners = [
    { id: 1, image: "/banner1.png" },
    { id: 2, image: "/banner2.png" },
    { id: 3, image: "/banner3.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full px-4 sm:px-[10%] py-4">
      <div
        className="
          relative
          w-full
          overflow-hidden
          rounded-[12px]
          aspect-[16/9]
          sm:aspect-[16/7]
          lg:aspect-[1280/458]
        "
      >
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {banners.map((banner) => (
            <div key={banner.id} className="w-full h-full flex-shrink-0">
              <img
                src={banner.image}
                alt={`Banner ${banner.id}`}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div
          className="
            absolute
            bottom-4
            left-1/2
            -translate-x-1/2
            flex
            items-center
            gap-2
          "
        >
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? "w-8 h-2 bg-white"
                  : "w-2 h-2 bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
