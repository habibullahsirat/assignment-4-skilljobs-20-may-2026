import { useState } from "react";
import { createPortal } from "react-dom";

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
  {
    id: 5,
    name: "Leather Shopper Bag With Stitching",
    img: "/pg4.jpg",
    colors: ["#DDD0C0", "#CC44CC"],
    price: 7090,
    original: 10000,
  },
  {
    id: 6,
    name: "Leather Shopper Bag With Stitching",
    img: "/pg4.jpg",
    colors: ["#DDD0C0", "#CC44CC"],
    price: 7090,
    original: 10000,
  },
  {
    id: 7,
    name: "Leather Shopper Bag With Stitching",
    img: "/pg4.jpg",
    colors: ["#DDD0C0", "#CC44CC"],
    price: 7090,
    original: 10000,
  },
  {
    id: 8,
    name: "Leather Shopper Bag With Stitching",
    img: "/pg4.jpg",
    colors: ["#DDD0C0", "#CC44CC"],
    price: 7090,
    original: 10000,
  },
];

function ProductDetailsModal({ product, onClose }) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("S");
  const [count, setCount] = useState(0);

  const sizes = ["S", "M", "L", "XL", "XXL"];

  return createPortal(
    // Backdrop — clicking it closes the modal
    <div
      className="fixed inset-0 bg-black/30 backdrop-blur-md z-[10000] flex items-center justify-center p-3 sm:p-4"
      onClick={onClose}
    >
      {/* Modal box — stop click from bubbling to backdrop */}
      <div
        className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg sm:rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button (X) */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 text-lg"
        >
          ✕
        </button>

        <div className="p-3 sm:p-6">
          {/* Main Content */}
          <div className="flex flex-col md:flex-row gap-4 sm:gap-8">
            {/* Left: Thumbnails + Main Image */}
            <div className="flex gap-2 sm:gap-3 flex-1 flex-col sm:flex-row">
              {/* Thumbnails */}
              <div className="flex flex-row sm:flex-col gap-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-16 sm:w-16 sm:h-20 bg-gray-100 border border-gray-300 overflow-hidden cursor-pointer flex-shrink-0"
                  >
                    <img
                      src={product.img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1 bg-gray-100 min-h-[200px] sm:min-h-[300px]">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  style={{ maxHeight: "420px" }}
                />
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="w-full md:w-72">
              <p className="text-xs sm:text-sm text-gray-500 mb-1">Blouses</p>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-center gap-2 mb-4 flex-wrap text-xs sm:text-base">
                <span className="font-semibold text-gray-900">
                  ৳ {product.price.toLocaleString()}.00
                </span>
                <span className="text-gray-400 line-through">
                  ৳ {product.original.toLocaleString()}.00
                </span>
                <span className="text-xs text-red-400 border border-red-300 px-2 py-0.5 rounded">
                  In stock
                </span>
              </div>

              {/* Shades */}
              <div className="mb-4">
                <p className="text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Shades
                </p>
                <div className="flex gap-2">
                  {product.colors.map((color, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedColor(i)}
                      className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 transition-all flex-shrink-0 ${
                        selectedColor === i
                          ? "border-gray-900 scale-110"
                          : "border-gray-300"
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Size */}
              <div className="mb-4">
                <p className="text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Size
                </p>
                <div className="flex gap-2 flex-wrap">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-2 sm:px-3 py-1 text-xs sm:text-sm border transition-all flex-shrink-0 ${
                        selectedSize === size
                          ? "border-gray-900 bg-gray-900 text-white"
                          : "border-gray-300 text-gray-700 hover:border-gray-600"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Count + Add to Bag */}
              <div className="mb-4">
                <p className="text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Count
                </p>
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  {/* Counter */}
                  <div className="flex items-center border border-gray-300 flex-shrink-0">
                    <button
                      onClick={() => setCount(Math.max(0, count - 1))}
                      className="px-2 sm:px-3 py-1 text-lg hover:bg-gray-100"
                    >
                      −
                    </button>
                    <span className="px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium">
                      {count}
                    </span>
                    <button
                      onClick={() => setCount(count + 1)}
                      className="px-2 sm:px-3 py-1 text-lg hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to Bag */}
                  <button className="flex-1 flex items-center justify-center gap-1 sm:gap-2 bg-gray-900 text-white py-2 px-2 sm:px-3 text-xs sm:text-sm hover:bg-gray-700 transition-colors min-w-[120px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    Add to Bag
                  </button>
                </div>
              </div>

              {/* Order Now */}
              <button className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white py-2 px-2 sm:py-2.5 sm:px-3 text-xs sm:text-sm font-medium hover:bg-orange-600 transition-colors mb-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                Order Now
              </button>

              {/* Delivery Info */}
              <div className="space-y-1 text-[10px] sm:text-xs text-gray-600 mb-3">
                <p>🕐 Delivery: 02-04 Days (Dhaka), 04-08 Days (Outside)</p>
                <p>🔄 Exchangeable within 10 Days</p>
              </div>

              {/* Add to Favourites */}
              <button className="flex items-center gap-1 text-xs sm:text-sm text-gray-500 hover:text-red-400 transition-colors mb-3 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                Add to Favourites
              </button>

              {/* ID & Category */}
              <div className="text-xs text-gray-500">
                <p>ID: KDJ49F0{product.id}</p>
                <p>Category: Blouses</p>
              </div>
            </div>
          </div>

          {/* Details & Composition */}
          <div className="flex flex-col md:flex-row gap-4 sm:gap-8 mt-6 sm:mt-8 border-t border-gray-200 pt-4 sm:pt-6">
            {/* Details */}
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-2 border-b-2 border-gray-900 pb-1 inline-block text-xs sm:text-sm">
                DETAILS
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Elevate Your Wardrobe With Our {product.name}, A Blend Of Luxury
                And Comfort. Crafted From Premium Satin, It Features A Graceful
                Cascade Design That Adds A Touch Of Sophistication.
              </p>
            </div>

            {/* Composition */}
            <div className="w-full md:w-56 border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 md:pl-8">
              <h3 className="font-bold text-gray-900 mb-2 border-b-2 border-gray-900 pb-1 inline-block text-xs sm:text-sm">
                COMPOSITION
              </h3>
              <ul className="text-xs sm:text-sm text-gray-700 space-y-1">
                <li>• 100% Satin</li>
                <li>• Lightweight</li>
                <li>• Breathable</li>
                <li>• Durable</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

function ProductGrid({ onSelectProduct }) {
  return (
    <>
      {/* Section Heading */}
      <div className="text-center mt-6 sm:mt-12 mb-6 sm:mb-12 px-4">
        <h1 className="text-[24px] sm:text-[32px] md:text-[42px] font-bold font-['Urbanist']">
          New Arrivals
        </h1>

        <p className="text-[12px] sm:text-base font-normal font-['Poppins'] mt-2">
          Be the first to wear latest trends
        </p>
      </div>

      {/* Products */}
      <div className="w-full px-4 sm:px-[10%]">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="group relative bg-white rounded-[8px] sm:rounded-[11px] p-1.5 sm:p-[9px] cursor-pointer transition-all duration-300 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-[6px] sm:rounded-[8px]">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-[180px] sm:h-[220px] md:h-[290px] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Action Icons */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex flex-col gap-2 sm:gap-3 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <button className="w-8 h-8 sm:w-11 sm:h-11 bg-white rounded-full shadow flex items-center justify-center flex-shrink-0">
                    <img
                      src="/icon-heart2.png"
                      alt=""
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    />
                  </button>

                  <button className="w-8 h-8 sm:w-11 sm:h-11 bg-white rounded-full shadow flex items-center justify-center flex-shrink-0">
                    <img
                      src="/icon-eye.png"
                      alt=""
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    />
                  </button>

                  <button className="w-8 h-8 sm:w-11 sm:h-11 bg-white rounded-full shadow flex items-center justify-center flex-shrink-0">
                    <img
                      src="/icon-share.png"
                      alt=""
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="mt-2 sm:mt-4 flex flex-col gap-2 sm:gap-3">
                <h3 className="text-[12px] sm:text-[15px] md:text-[17px] font-semibold text-black capitalize leading-4 sm:leading-5 line-clamp-2">
                  {product.name}
                </h3>

                {/* Colors */}
                <div className="flex gap-1">
                  {product.colors.map((color, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 sm:w-[22px] sm:h-[22px] rounded-full border border-black flex items-center justify-center flex-shrink-0"
                    >
                      <span
                        className="w-3 h-3 sm:w-[16px] sm:h-[16px] rounded-full"
                        style={{ backgroundColor: color }}
                      />
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[13px] sm:text-[18px] md:text-[20px] font-semibold text-black">
                    ৳ {product.price.toLocaleString()}
                  </span>

                  <span className="text-[10px] sm:text-[13px] text-black/30 line-through">
                    ৳ {product.original.toLocaleString()}
                  </span>
                </div>

                {/* Add To Cart */}
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="w-full h-[32px] sm:h-[41px] bg-[#161616] text-white rounded text-[11px] sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 hover:bg-black transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 sm:w-[18px] sm:h-[18px]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>

                  <span>Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default function NewArrivals() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div>
      {/* Product Grid is always visible in background */}
      <ProductGrid onSelectProduct={setSelectedProduct} />

      {/* Modal appears on top when a product is selected */}
      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
