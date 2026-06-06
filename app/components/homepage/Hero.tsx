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
      </div>
    </section>
  );
}
