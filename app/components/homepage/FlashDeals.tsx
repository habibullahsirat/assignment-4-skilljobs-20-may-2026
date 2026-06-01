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
      {},
    ),
  );
  return (
    <>
      <div className="mx-auto max-w-[1440px] px-5 md:px-20 py-4">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 w-full min-h-[50px]">
          {/* Flash Deals Title */}
          <h2 className="font-['Urbanist'] font-bold text-[42px] leading-[50px] text-black select-none">
            Flash Deals
          </h2>

          {/* Flash Deals Timer & Action Container */}
          <div className="flex flex-wrap items-end justify-start lg:justify-end gap-[39px] max-w-[466px] h-auto lg:h-[43px]">
            {/* Days, Hours, Minutes, Seconds Box Wrapper */}
            <div className="flex flex-row items-start gap-5 max-w-[300px] h-[43px]">
              {/* Days Box */}
              <div className="flex flex-row justify-between items-end gap-[5px] w-[60px] h-[43px]">
                <div className="flex flex-col items-start gap-[5px] w-[33px] h-[43px] mx-auto">
                  <span className="font-['Poppins'] font-semibold text-[12px] leading-[18px] text-black">
                    Days
                  </span>
                  <span className="font-['Urbanist'] font-bold text-[28px] leading-[34px] tracking-[0.04em] text-black">
                    03
                  </span>
                </div>

                {/* Semicolon (Colon 1) */}
                <div className="flex flex-col items-start gap-[8px] w-[4px] h-[16px] mx-auto mb-[2px]">
                  <div className="w-[4px] h-[4px] rounded-full bg-[#FF5F39]" />
                  <div className="w-[4px] h-[4px] rounded-full bg-[#FF5F39]" />
                </div>
              </div>

              {/* Hours Box */}
              <div className="flex flex-row justify-between items-end gap-[5px] w-[60px] h-[43px]">
                <div className="flex flex-col items-start gap-[5px] w-[36px] h-[43px] mx-auto">
                  <span className="font-['Poppins'] font-semibold text-[12px] leading-[18px] text-black">
                    Hours
                  </span>
                  <span className="font-['Urbanist'] font-bold text-[28px] leading-[34px] tracking-[0.04em] text-black">
                    23
                  </span>
                </div>

                {/* Semicolon (Colon 2) */}
                <div className="flex flex-col items-start gap-[8px] w-[4px] h-[16px] mx-auto mb-[2px]">
                  <div className="w-[4px] h-[4px] rounded-full bg-[#FF5F39]" />
                  <div className="w-[4px] h-[4px] rounded-full bg-[#FF5F39]" />
                </div>
              </div>

              {/* Minutes Box */}
              <div className="flex flex-row justify-between items-end gap-[5px] w-[60px] h-[43px]">
                <div className="flex flex-col items-start gap-[5px] w-[49px] h-[43px] mx-auto">
                  <span className="font-['Poppins'] font-semibold text-[12px] leading-[18px] text-black">
                    Minutes
                  </span>
                  <span className="font-['Urbanist'] font-bold text-[28px] leading-[34px] tracking-[0.04em] text-black">
                    19
                  </span>
                </div>

                {/* Semicolon (Colon 3 - matches the explicit 23px h layout) */}
                <div className="flex flex-col justify-end items-start gap-[8px] w-[4px] h-[23px] mx-auto">
                  <div className="w-[4px] h-[4px] rounded-full bg-[#FF5F39]" />
                  <div className="w-[4px] h-[4px] rounded-full bg-[#FF5F39]" />
                </div>
              </div>

              {/* Seconds Box */}
              <div className="flex flex-row items-end gap-[5px] w-[60px] h-[43px]">
                <div className="flex flex-col items-start gap-[5px] w-[53px] h-[43px]">
                  <span className="font-['Poppins'] font-semibold text-[12px] leading-[18px] text-black">
                    Seconds
                  </span>
                  <span className="font-['Urbanist'] font-bold text-[28px] leading-[34px] tracking-[0.04em] text-black">
                    56
                  </span>
                </div>
              </div>
            </div>

            {/* See All Flash Deals Link */}
            <a
              href="#all-products"
              className="w-[127px] h-[24px] font-['Poppins'] font-normal text-[16px] leading-[24px] text-right underline text-black hover:opacity-75 transition-opacity"
            >
              See All Products
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 md:px-20 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col bg-white border border-[#E5E5E5] rounded-[16px] p-3 w-full max-w-[312px] mx-auto group select-none"
            >
              {/* Image Wrapper & Floating Badge */}
              <div className="relative w-full aspect-[288/240] rounded-[12px] overflow-hidden bg-[#F2F2F2]">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* "X Left" Badge */}
                <div className="absolute bottom-3 left-3 bg-[#FFF0ED] text-[#FF5F39] text-[11px] font-['Poppins'] font-semibold px-2 py-0.5 rounded-[4px]">
                  {/* {product.left} */}
                </div>
              </div>

              {/* Product Meta Section */}
              <div className="flex flex-col pt-3 pb-2 flex-grow">
                {/* Product Title */}
                <h3 className="font-['Urbanist'] font-bold text-[16px] leading-[22px] text-black line-clamp-1">
                  {product.name}
                </h3>

                {/* Color Swatches */}
                <div className="flex items-center gap-1.5 mt-2 h-6">
                  {product.colors.map((color) => {
                    // const isSelected = selectedColors[product.id] === color;
                    return (
                      <button
                        className={`w-[18px] h-[18px] rounded-full relative transition-all`}
                        style={{ backgroundColor: color }}
                      >
                        {/* Active Ring Outer Border matching the design layout */}
                        {/* {isSelected && (
                          <span className="absolute inset-[-3px] rounded-full border border-black/40" />
                        )} */}
                      </button>
                    );
                  })}
                </div>

                {/* Pricing Blocks */}
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

              {/* Add To Cart Interactive Element */}
              <button className="w-full h-[40px] mt-auto bg-[#1A1A1A] hover:bg-black text-white font-['Poppins'] font-medium text-[13px] flex items-center justify-center gap-2 rounded-[6px] transition-colors active:scale-[0.98]">
                {/* Dynamic inline SVG Shopping Cart Icon */}
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
