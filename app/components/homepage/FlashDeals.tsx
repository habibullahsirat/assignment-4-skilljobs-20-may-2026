import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Buttons Cotton Top",
    img: "/pg1.jpg",
    colors: ["#C8A882", "#E8DDD0"],
    price: 1090,
    original: 2000,
  },
  {
    id: 2,
    name: "Wool Midi Coat",
    img: "/pg2.jpg",
    colors: ["#3B3B2F", "#6B5D3F"],
    price: 1590,
    original: 2300,
  },
  {
    id: 3,
    name: "Lyocell Wrap Top",
    img: "/pg3.jpg",
    colors: ["#4A4A35", "#E0D8CC"],
    price: 4090,
    original: 5000,
  },
  {
    id: 4,
    name: "Leather Shopper Bag With Stitching",
    img: "/pg4.jpg",
    colors: ["#DDD0C0", "#CC44CC"],
    price: 7090,
    original: 10000,
  },
];

export default function FlashDeals() {
  const [selectedColors, setSelectedColors] = useState(
    products.reduce(
      (acc, product) => ({ ...acc, [product.id]: product.colors[0] }),
      {} as Record<number, string>,
    ),
  );

  return (
    <>
      {/* Header Section */}
      <div className="w-full px-4 sm:px-[10%] py-4 mt-8 sm:mt-[50px]">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 sm:gap-6 w-full min-h-[50px]">
          {/* Flash Deals Title */}
          <h2 className="font-['Urbanist'] font-bold text-[28px] sm:text-[42px] leading-[34px] sm:leading-[50px] text-black select-none">
            Flash Deals
          </h2>

          {/* Timer & Action */}
          <div className="flex flex-wrap items-end justify-start lg:justify-end gap-3 sm:gap-6 lg:gap-[39px] w-full lg:max-w-[466px] h-auto">
            {/* Countdown */}
            <div className="flex flex-row items-start gap-2 sm:gap-5 max-w-full sm:max-w-[300px]">
              {/* Days */}
              <div className="flex flex-row justify-between items-end gap-[3px] sm:gap-[5px]">
                <div className="flex flex-col items-start gap-[2px] sm:gap-[5px]">
                  <span className="font-['Poppins'] font-semibold text-[9px] sm:text-[12px] leading-[14px] sm:leading-[18px]">
                    Days
                  </span>
                  <span className="font-['Urbanist'] font-bold text-[18px] sm:text-[28px] leading-[22px] sm:leading-[34px] tracking-[0.04em]">
                    03
                  </span>
                </div>

                <div className="flex flex-col items-start gap-[4px] sm:gap-[8px] w-[3px] sm:w-[4px]">
                  <div className="w-[3px] sm:w-[4px] h-[3px] sm:h-[4px] rounded-full bg-[#FF5F39]" />
                  <div className="w-[3px] sm:w-[4px] h-[3px] sm:h-[4px] rounded-full bg-[#FF5F39]" />
                </div>
              </div>

              {/* Hours */}
              <div className="flex flex-row justify-between items-end gap-[3px] sm:gap-[5px]">
                <div className="flex flex-col items-start gap-[2px] sm:gap-[5px]">
                  <span className="font-['Poppins'] font-semibold text-[9px] sm:text-[12px] leading-[14px] sm:leading-[18px]">
                    Hours
                  </span>
                  <span className="font-['Urbanist'] font-bold text-[18px] sm:text-[28px] leading-[22px] sm:leading-[34px] tracking-[0.04em]">
                    23
                  </span>
                </div>

                <div className="flex flex-col items-start gap-[4px] sm:gap-[8px] w-[3px] sm:w-[4px]">
                  <div className="w-[3px] sm:w-[4px] h-[3px] sm:h-[4px] rounded-full bg-[#FF5F39]" />
                  <div className="w-[3px] sm:w-[4px] h-[3px] sm:h-[4px] rounded-full bg-[#FF5F39]" />
                </div>
              </div>

              {/* Minutes */}
              <div className="flex flex-row justify-between items-end gap-[3px] sm:gap-[5px]">
                <div className="flex flex-col items-start gap-[2px] sm:gap-[5px]">
                  <span className="font-['Poppins'] font-semibold text-[9px] sm:text-[12px] leading-[14px] sm:leading-[18px]">
                    Mins
                  </span>
                  <span className="font-['Urbanist'] font-bold text-[18px] sm:text-[28px] leading-[22px] sm:leading-[34px] tracking-[0.04em]">
                    19
                  </span>
                </div>

                <div className="flex flex-col justify-end items-start gap-[4px] sm:gap-[8px] w-[3px] sm:w-[4px]">
                  <div className="w-[3px] sm:w-[4px] h-[3px] sm:h-[4px] rounded-full bg-[#FF5F39]" />
                  <div className="w-[3px] sm:w-[4px] h-[3px] sm:h-[4px] rounded-full bg-[#FF5F39]" />
                </div>
              </div>

              {/* Seconds */}
              <div className="flex flex-row items-end gap-[3px] sm:gap-[5px]">
                <div className="flex flex-col items-start gap-[2px] sm:gap-[5px]">
                  <span className="font-['Poppins'] font-semibold text-[9px] sm:text-[12px] leading-[14px] sm:leading-[18px]">
                    Secs
                  </span>
                  <span className="font-['Urbanist'] font-bold text-[18px] sm:text-[28px] leading-[22px] sm:leading-[34px] tracking-[0.04em]">
                    56
                  </span>
                </div>
              </div>
            </div>

            {/* See All Products */}
            <a
              href="#all-products"
              className="font-['Poppins'] font-normal text-[12px] sm:text-[16px] leading-[18px] sm:leading-[24px] underline text-black hover:opacity-75 transition-opacity whitespace-nowrap"
            >
              See All
            </a>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="w-full px-4 sm:px-[10%] py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col bg-white border border-[#E5E5E5] rounded-[16px] p-3 w-full group select-none"
            >
              {/* Product Image */}
              <div className="relative w-full aspect-[288/240] rounded-[12px] overflow-hidden bg-[#F2F2F2]">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Details */}
              <div className="flex flex-col pt-3 pb-2 flex-grow">
                <h3 className="font-['Urbanist'] font-bold text-[16px] leading-[22px] text-black line-clamp-1">
                  {product.name}
                </h3>

                {/* Color Options */}
                <div className="flex items-center gap-1.5 mt-2 h-6">
                  {product.colors.map((color) => {
                    const isSelected = selectedColors[product.id] === color;

                    return (
                      <button
                        key={color}
                        onClick={() =>
                          setSelectedColors((prev) => ({
                            ...prev,
                            [product.id]: color,
                          }))
                        }
                        className="w-[18px] h-[18px] rounded-full relative transition-all"
                        style={{ backgroundColor: color }}
                      >
                        {isSelected && (
                          <span className="absolute inset-[-3px] rounded-full border border-black/40" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mt-3 font-['Urbanist'] font-bold text-[18px] leading-[24px]">
                  <span className="text-black">
                    ৳{" "}
                    {product.price.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                    })}
                  </span>

                  <span className="text-[#A3A3A3] line-through text-[14px] font-medium">
                    ৳{" "}
                    {product.original.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </div>
              </div>

              {/* Add To Cart */}
              <button className="w-full h-[40px] mt-auto bg-[#1A1A1A] hover:bg-black text-white font-['Poppins'] font-medium text-[13px] flex items-center justify-center gap-2 rounded-[6px] transition-colors active:scale-[0.98]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
