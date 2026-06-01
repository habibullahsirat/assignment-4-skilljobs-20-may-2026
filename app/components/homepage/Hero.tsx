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
    }, 3000); // stop on each image for 3 seconds

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <section
      className="
                w-full
                max-w-[1280px]
                min-h-[420px]
                sm:min-h-[500px]
                lg:h-[458px]
                rounded-[12px]
                overflow-hidden
                mx-auto
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
              className="
                                w-full
                                h-full
                                object-cover
                                rounded-[12px]
                            "
            />
          </div>
        ))}
      </div>
    </section>
  );
}
