import { useState } from "react";

// ──────────────────────────────────────────
// DATA
// ──────────────────────────────────────────
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
    name: "Lyocell Wrap Top",
    img: "/pg3.jpg",
    colors: ["#4A4A35", "#E0D8CC"],
    price: 4090,
    original: 5000,
  },
  {
    id: 7,
    name: "Lyocell Wrap Top",
    img: "/pg3.jpg",
    colors: ["#4A4A35", "#E0D8CC"],
    price: 4090,
    original: 5000,
  },
  {
    id: 8,
    name: "Leather Shopper Bag With Stitching",
    img: "/pg4.jpg",
    colors: ["#DDD0C0", "#CC44CC"],
    price: 7090,
    original: 10000,
  },
  {
    id: 9,
    name: "Leather Shopper Bag With Stitching",
    img: "/pg4.jpg",
    colors: ["#DDD0C0", "#CC44CC"],
    price: 7090,
    original: 10000,
  },
  {
    id: 10,
    name: "Buttons Cotton Top",
    img: "/pg1.jpg",
    colors: ["#C8A882", "#E8DDD0"],
    price: 1090,
    original: 2000,
  },
  {
    id: 11,
    name: "Lyocell Wrap Top",
    img: "/pg3.jpg",
    colors: ["#4A4A35", "#E0D8CC"],
    price: 4090,
    original: 5000,
  },
  {
    id: 12,
    name: "Leather Shopper Bag With Stitching",
    img: "/pg4.jpg",
    colors: ["#DDD0C0", "#CC44CC"],
    price: 7090,
    original: 10000,
  },
];

// ──────────────────────────────────────────
// PRODUCT DETAILS MODAL
// ──────────────────────────────────────────
function ProductDetailsModal({ product, onClose }) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("S");
  const [count, setCount] = useState(0);

  const sizes = ["S", "M", "L", "XL", "XXL"];

  return (
    // Backdrop — clicking it closes the modal
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Modal box — stop click from bubbling to backdrop */}
      <div
        className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button (X) */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 text-lg"
        >
          ✕
        </button>

        <div className="p-6">
          {/* Main Content */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left: Thumbnails + Main Image */}
            <div className="flex gap-3 flex-1">
              {/* Thumbnails */}
              <div className="flex flex-col gap-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-16 h-20 bg-gray-100 border border-gray-300 overflow-hidden cursor-pointer"
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
              <div className="flex-1 bg-gray-100">
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
              <p className="text-sm text-gray-500 mb-1">Blouses</p>
              <h1 className="text-xl font-bold text-gray-900 mb-3">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="text-xl font-semibold text-gray-900">
                  ৳ {product.price.toLocaleString()}.00
                </span>
                <span className="text-sm text-gray-400 line-through">
                  ৳ {product.original.toLocaleString()}.00
                </span>
                <span className="text-xs text-red-400 border border-red-300 px-2 py-0.5 rounded">
                  In stock
                </span>
              </div>

              {/* Shades */}
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Shades</p>
                <div className="flex gap-2">
                  {product.colors.map((color, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedColor(i)}
                      className={`w-7 h-7 rounded-full border-2 transition-all ${
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
                <p className="text-sm font-medium text-gray-700 mb-2">Size</p>
                <div className="flex gap-2 flex-wrap">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1 text-sm border transition-all ${
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
                <p className="text-sm font-medium text-gray-700 mb-2">Count</p>
                <div className="flex items-center gap-3">
                  {/* Counter */}
                  <div className="flex items-center border border-gray-300">
                    <button
                      onClick={() => setCount(Math.max(0, count - 1))}
                      className="px-3 py-1.5 text-lg hover:bg-gray-100"
                    >
                      −
                    </button>
                    <span className="px-4 py-1.5 text-sm font-medium">
                      {count}
                    </span>
                    <button
                      onClick={() => setCount(count + 1)}
                      className="px-3 py-1.5 text-lg hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to Bag */}
                  <button className="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white py-2 px-3 text-sm hover:bg-gray-700 transition-colors">
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
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    Add to Bag
                  </button>
                </div>
              </div>

              {/* Order Now */}
              <button className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white py-2.5 text-sm font-medium hover:bg-orange-600 transition-colors mb-4">
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
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                Order Now
              </button>

              {/* Delivery Info */}
              <div className="space-y-1 text-xs text-gray-600 mb-3">
                <p>
                  🕐 Delivery: 02-04 Days (Dhaka), 04-08 Days (Outside Dhaka)
                </p>
                <p>🔄 Exchangeable within 10 Days. Conditions apply.</p>
              </div>

              {/* Add to Favourites */}
              <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-400 transition-colors mb-3">
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
          <div className="flex flex-col md:flex-row gap-8 mt-8 border-t border-gray-200 pt-6">
            {/* Details */}
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-2 border-b-2 border-gray-900 pb-1 inline-block text-sm">
                DETAILS
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Elevate Your Wardrobe With Our {product.name}, A Blend Of Luxury
                And Comfort. Crafted From Premium Satin, It Features A Graceful
                Cascade Design That Adds A Touch Of Sophistication. Ideal For
                Both Formal Events And Casual Outings, This Blouse Pairs
                Seamlessly With Skirts, Trousers, Or Jeans, Offering A Versatile
                And Elegant Look.
              </p>
            </div>

            {/* Composition */}
            <div className="w-full md:w-56 border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 md:pl-8">
              <h3 className="font-bold text-gray-900 mb-2 border-b-2 border-gray-900 pb-1 inline-block text-sm">
                COMPOSITION
              </h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 100% Satin (Luxurious And Smooth)</li>
                <li>• Lightweight And Breathable</li>
                <li>• Gentle On The Skin</li>
                <li>• Durable And Easy To Care For</li>
                <li>• Elegant Drape And Finish</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────
// PRODUCT GRID
// ──────────────────────────────────────────
function ProductGrid({ onSelectProduct }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-0 bg-black">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white border border-black cursor-pointer"
          onClick={() => onSelectProduct(product)}
        >
          {/* Product Image */}
          <div className="bg-gray-100 aspect-[3/4] overflow-hidden">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Product Info */}
          <div className="p-3">
            <p className="text-sm font-medium text-gray-900 mb-2">
              {product.name}
            </p>

            {/* Color Swatches */}
            <div className="flex gap-1 mb-2">
              {product.colors.map((color, i) => (
                <span
                  key={i}
                  className="w-4 h-4 rounded-full border border-gray-300 inline-block"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            {/* Price */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-semibold text-gray-900">
                ৳ {product.price.toLocaleString()}.00
              </span>
              <span className="text-xs text-gray-400 line-through">
                ৳ {product.original.toLocaleString()}.00
              </span>
            </div>

            {/* Add to Cart Button */}
            <button
              className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white text-sm py-2 px-3 hover:bg-gray-700 transition-colors"
              onClick={(e) => e.stopPropagation()} // prevent card click from firing
            >
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

// ──────────────────────────────────────────
// APP
// ──────────────────────────────────────────
export default function ProductsGrid() {
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

/////////////////////////////////////////////////////////
// 2nd code
// // import { useState } from "react";

// import { useState } from "react";

// // ──────────────────────────────────────────
// // DATA
// // ──────────────────────────────────────────
// const products = [
//   {
//     id: 1,
//     name: "Buttons Cotton Top",
//     img: "/pg1.jpg",
//     colors: ["#C8A882", "#E8DDD0"],
//     price: 1090,
//     original: 2000,
//   },
//   {
//     id: 2,
//     name: "Wool Midi Coat",
//     img: "/pg2.jpg",
//     colors: ["#3B3B2F", "#6B5D3F"],
//     price: 1590,
//     original: 2300,
//   },
//   {
//     id: 3,
//     name: "Lyocell Wrap Top",
//     img: "/pg3.jpg",
//     colors: ["#4A4A35", "#E0D8CC"],
//     price: 4090,
//     original: 5000,
//   },
//   {
//     id: 4,
//     name: "Leather Shopper Bag With Stitching",
//     img: "/pg4.jpg",
//     colors: ["#DDD0C0", "#CC44CC"],
//     price: 7090,
//     original: 10000,
//   },
//   {
//     id: 5,
//     name: "Leather Shopper Bag With Stitching",
//     img: "/pg4.jpg",
//     colors: ["#DDD0C0", "#CC44CC"],
//     price: 7090,
//     original: 10000,
//   },
//   {
//     id: 6,
//     name: "Lyocell Wrap Top",
//     img: "/pg3.jpg",
//     colors: ["#4A4A35", "#E0D8CC"],
//     price: 4090,
//     original: 5000,
//   },
//   {
//     id: 7,
//     name: "Lyocell Wrap Top",
//     img: "/pg3.jpg",
//     colors: ["#4A4A35", "#E0D8CC"],
//     price: 4090,
//     original: 5000,
//   },
//   {
//     id: 8,
//     name: "Leather Shopper Bag With Stitching",
//     img: "/pg4.jpg",
//     colors: ["#DDD0C0", "#CC44CC"],
//     price: 7090,
//     original: 10000,
//   },
//   {
//     id: 9,
//     name: "Leather Shopper Bag With Stitching",
//     img: "/pg4.jpg",
//     colors: ["#DDD0C0", "#CC44CC"],
//     price: 7090,
//     original: 10000,
//   },
//   {
//     id: 10,
//     name: "Buttons Cotton Top",
//     img: "/pg1.jpg",
//     colors: ["#C8A882", "#E8DDD0"],
//     price: 1090,
//     original: 2000,
//   },
//   {
//     id: 11,
//     name: "Lyocell Wrap Top",
//     img: "/pg3.jpg",
//     colors: ["#4A4A35", "#E0D8CC"],
//     price: 4090,
//     original: 5000,
//   },
//   {
//     id: 12,
//     name: "Leather Shopper Bag With Stitching",
//     img: "/pg4.jpg",
//     colors: ["#DDD0C0", "#CC44CC"],
//     price: 7090,
//     original: 10000,
//   },
// ];

// // ──────────────────────────────────────────
// // PRODUCT GRID
// // ──────────────────────────────────────────
// function ProductGrid({ onSelectProduct }) {
//   return (
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-0 bg-black">
//       {products.map((product) => (
//         <div
//           key={product.id}
//           className="bg-white border border-black cursor-pointer"
//           onClick={() => onSelectProduct(product)}
//         >
//           {/* Product Image */}
//           <div className="bg-gray-100 aspect-[3/4] overflow-hidden">
//             <img
//               src={product.img}
//               alt={product.name}
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Product Info */}
//           <div className="p-3">
//             <p className="text-sm font-medium text-gray-900 mb-2">
//               {product.name}
//             </p>

//             {/* Color Swatches */}
//             <div className="flex gap-1 mb-2">
//               {product.colors.map((color, i) => (
//                 <span
//                   key={i}
//                   className="w-4 h-4 rounded-full border border-gray-300 inline-block"
//                   style={{ backgroundColor: color }}
//                 />
//               ))}
//             </div>

//             {/* Price */}
//             <div className="flex items-center gap-2 mb-3">
//               <span className="text-sm font-semibold text-gray-900">
//                 ৳ {product.price.toLocaleString()}.00
//               </span>
//               <span className="text-xs text-gray-400 line-through">
//                 ৳ {product.original.toLocaleString()}.00
//               </span>
//             </div>

//             {/* Add to Cart Button */}
//             <button className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white text-sm py-2 px-3 hover:bg-gray-700 transition-colors">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-4 h-4"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                 />
//               </svg>
//               Add To Cart
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// // ──────────────────────────────────────────
// // PRODUCT DETAILS
// // ──────────────────────────────────────────
// function ProductDetails({ product, onBack }) {
//   const [selectedColor, setSelectedColor] = useState(0);
//   const [selectedSize, setSelectedSize] = useState("S");
//   const [count, setCount] = useState(0);

//   const sizes = ["S", "M", "L", "XL", "XXL"];

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-6">
//       {/* Breadcrumb */}
//       <div className="flex items-center gap-1 text-sm text-gray-500 mb-4 flex-wrap">
//         <button onClick={onBack} className="hover:text-gray-900">
//           Main
//         </button>
//         <span>/</span>
//         <span>Boutique</span>
//         <span>/</span>
//         <span>All Items</span>
//         <span>/</span>
//         <span>Blouses</span>
//         <span>/</span>
//         <span className="font-semibold text-gray-900">{product.name}</span>
//       </div>

//       <hr className="mb-6 border-gray-200" />

//       {/* Main Content */}
//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Left: Thumbnails + Main Image */}
//         <div className="flex gap-3 flex-1">
//           {/* Thumbnails */}
//           <div className="flex flex-col gap-2">
//             {[0, 1, 2].map((i) => (
//               <div
//                 key={i}
//                 className="w-20 h-24 bg-gray-100 border border-gray-300 overflow-hidden cursor-pointer"
//               >
//                 <img
//                   src={product.img}
//                   alt=""
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Main Image */}
//           <div className="flex-1 bg-gray-100">
//             <img
//               src={product.img}
//               alt={product.name}
//               className="w-full h-full object-cover"
//               style={{ maxHeight: "520px" }}
//             />
//           </div>
//         </div>

//         {/* Right: Product Info */}
//         <div className="w-full md:w-80">
//           <p className="text-sm text-gray-500 mb-1">Blouses</p>
//           <h1 className="text-2xl font-bold text-gray-900 mb-3">
//             {product.name}
//           </h1>

//           {/* Price */}
//           <div className="flex items-center gap-3 mb-4">
//             <span className="text-2xl font-semibold text-gray-900">
//               ৳ {product.price.toLocaleString()}.00
//             </span>
//             <span className="text-base text-gray-400 line-through">
//               ৳ {product.original.toLocaleString()}.00
//             </span>
//             <span className="text-sm text-red-400 border border-red-300 px-2 py-0.5 rounded">
//               In stock
//             </span>
//           </div>

//           {/* Shades */}
//           <div className="mb-4">
//             <p className="text-sm font-medium text-gray-700 mb-2">Shades</p>
//             <div className="flex gap-2">
//               {product.colors.map((color, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setSelectedColor(i)}
//                   className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColor === i ? "border-gray-900 scale-110" : "border-gray-300"}`}
//                   style={{ backgroundColor: color }}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Size */}
//           <div className="mb-4">
//             <p className="text-sm font-medium text-gray-700 mb-2">Size</p>
//             <div className="flex gap-2">
//               {sizes.map((size) => (
//                 <button
//                   key={size}
//                   onClick={() => setSelectedSize(size)}
//                   className={`px-3 py-1 text-sm border transition-all ${selectedSize === size ? "border-gray-900 bg-gray-900 text-white" : "border-gray-300 text-gray-700 hover:border-gray-600"}`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Count */}
//           <div className="mb-4">
//             <p className="text-sm font-medium text-gray-700 mb-2">Count</p>
//             <div className="flex items-center gap-3">
//               {/* Counter */}
//               <div className="flex items-center border border-gray-300">
//                 <button
//                   onClick={() => setCount(Math.max(0, count - 1))}
//                   className="px-3 py-2 text-lg hover:bg-gray-100"
//                 >
//                   −
//                 </button>
//                 <span className="px-4 py-2 text-sm font-medium">{count}</span>
//                 <button
//                   onClick={() => setCount(count + 1)}
//                   className="px-3 py-2 text-lg hover:bg-gray-100"
//                 >
//                   +
//                 </button>
//               </div>

//               {/* Add to Bag */}
//               <button className="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white py-2 px-4 text-sm hover:bg-gray-700 transition-colors">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-4 h-4"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
//                   />
//                 </svg>
//                 Add to Bag
//               </button>
//             </div>
//           </div>

//           {/* Order Now */}
//           <button className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white py-3 text-sm font-medium hover:bg-orange-600 transition-colors mb-4">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-4 h-4"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
//               />
//             </svg>
//             Order Now
//           </button>

//           {/* Delivery Info */}
//           <div className="space-y-1 text-sm text-gray-600 mb-4">
//             <p>🕐 Delivery: 02-04 Days (Dhaka), 04-08 Days (Outside Dhaka)</p>
//             <p>🔄 Exchangeable within 10 Days. Conditions apply.</p>
//           </div>

//           {/* Add to Favourites */}
//           <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-400 transition-colors mb-4">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-4 h-4"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//               />
//             </svg>
//             Add to Favourites
//           </button>

//           {/* ID & Category */}
//           <div className="text-sm text-gray-500">
//             <p>ID: KDJ49F02</p>
//             <p>Category: Blouses</p>
//           </div>
//         </div>
//       </div>

//       {/* Details & Composition */}
//       <div className="flex flex-col md:flex-row gap-8 mt-10 border-t border-gray-200 pt-8">
//         {/* Details */}
//         <div className="flex-1">
//           <h3 className="font-bold text-gray-900 mb-3 border-b-2 border-gray-900 pb-1 inline-block">
//             DETAILS
//           </h3>
//           <p className="text-sm text-gray-700 leading-relaxed">
//             Elevate Your Wardrobe With Our {product.name}, A Blend Of Luxury And
//             Comfort. Crafted From Premium Satin, It Features A Graceful Cascade
//             Design That Adds A Touch Of Sophistication. Ideal For Both Formal
//             Events And Casual Outings, This Blouse Pairs Seamlessly With Skirts,
//             Trousers, Or Jeans, Offering A Versatile And Elegant Look.
//           </p>
//         </div>

//         {/* Composition */}
//         <div className="w-full md:w-64 border-l border-gray-200 pl-8">
//           <h3 className="font-bold text-gray-900 mb-3 border-b-2 border-gray-900 pb-1 inline-block">
//             COMPOSITION
//           </h3>
//           <ul className="text-sm text-gray-700 space-y-1">
//             <li>• 100% Satin (Luxurious And Smooth)</li>
//             <li>• Lightweight And Breathable</li>
//             <li>• Gentle On The Skin</li>
//             <li>• Durable And Easy To Care For</li>
//             <li>• Elegant Drape And Finish</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ──────────────────────────────────────────
// // APP (combines both pages)
// // ──────────────────────────────────────────
// export default function ProductsGrid() {
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   if (selectedProduct) {
//     return (
//       <ProductDetails
//         product={selectedProduct}
//         onBack={() => setSelectedProduct(null)}
//       />
//     );
//   }

//   return <ProductGrid onSelectProduct={setSelectedProduct} />;
// }

//////////////////////////////////////////////////////////////////////
// First code
// type Product = {
//   id: number;
//   name: string;
//   img: string;
//   colors: string[];
//   price: number;
//   original: number;
// };

// const products: Product[] = [
//   {
//     id: 1,
//     name: "Buttons Cotton Top",
//     img: "/pg1.jpg",
//     colors: ["#C8A882", "#E8DDD0"],
//     price: 1090,
//     original: 2000,
//   },
//   {
//     id: 2,
//     name: "Wool Midi Coat",
//     img: "/pg2.jpg",
//     colors: ["#3B3B2F", "#6B5D3F"],
//     price: 1590,
//     original: 2300,
//   },
//   {
//     id: 3,
//     name: "Lyocell Wrap Top",
//     img: "/pg3.jpg",
//     colors: ["#4A4A35", "#E0D8CC"],
//     price: 4090,
//     original: 5000,
//   },
//   {
//     id: 4,
//     name: "Leather Shopper Bag With Stitching",
//     img: "/pg4.jpg",
//     colors: ["#DDD0C0", "#CC44CC"],
//     price: 7090,
//     original: 10000,
//   },
//   {
//     id: 5,
//     name: "Leather Shopper Bag With Stitching",
//     img: "pg4.jpg",
//     colors: ["#DDD0C0", "#CC44CC"],
//     price: 7090,
//     original: 10000,
//   },
//   {
//     id: 6,
//     name: "Lyocell Wrap Top",
//     img: "pg3.jpg",
//     colors: ["#4A4A35", "#E0D8CC"],
//     price: 4090,
//     original: 5000,
//   },
//   {
//     id: 7,
//     name: "Lyocell Wrap Top",
//     img: "pg3.jpg",
//     colors: ["#4A4A35", "#E0D8CC"],
//     price: 4090,
//     original: 5000,
//   },
//   {
//     id: 8,
//     name: "Leather Shopper Bag With Stitching",
//     img: "pg4.jpg",
//     colors: ["#DDD0C0", "#CC44CC"],
//     price: 7090,
//     original: 10000,
//   },
//   {
//     id: 9,
//     name: "Leather Shopper Bag With Stitching",
//     img: "pg4.jpg",
//     colors: ["#DDD0C0", "#CC44CC"],
//     price: 7090,
//     original: 10000,
//   },
//   {
//     id: 10,
//     name: "Buttons Cotton Top",
//     img: "pg1.jpg",
//     colors: ["#C8A882", "#E8DDD0"],
//     price: 1090,
//     original: 2000,
//   },
//   {
//     id: 11,
//     name: "Lyocell Wrap Top",
//     img: "pg3.jpg",
//     colors: ["#4A4A35", "#E0D8CC"],
//     price: 4090,
//     original: 5000,
//   },
//   {
//     id: 12,
//     name: "Leather Shopper Bag With Stitching",
//     img: "pg4.jpg",
//     colors: ["#DDD0C0", "#CC44CC"],
//     price: 7090,
//     original: 10000,
//   },
// ];

// function ProductCard({ product }: { product: Product }) {
//   return (
//     <div className="bg-white rounded-sm overflow-hidden flex flex-col  shadow-sm hover:shadow-lg hover:border-white-5 hover:p-2 hover:rounded-lg transition-shadow duration-1200 h-[463.12px] w-[302px]">
//       {/* Image */}
//       <div className="relative overflow-hidden bg-gray-50 aspect-[3/4] rounded-lg hover:rounded-lg">
//         <img
//           src={product.img}
//           alt={product.name}
//           className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
//         />
//       </div>

//       {/* Info */}
//       <div className="p-3 flex flex-col gap-2 flex-1">
//         {/* Name */}
//         <p className="text-xs sm:text-sm font-medium text-gray-900 leading-tight line-clamp-2">
//           {product.name}
//         </p>

//         {/* Color swatches */}
//         <div className="flex items-center gap-1.5">
//           {product.colors.map((color, i) => (
//             <span
//               key={i}
//               className="w-4 h-4 rounded-full border border-gray-200 inline-block flex-shrink-0"
//               style={{ backgroundColor: color }}
//               title={color}
//             />
//           ))}
//         </div>

//         {/* Price */}
//         <div className="flex items-center gap-2 flex-wrap">
//           <span className="text-sm sm:text-base font-bold text-gray-900">
//             ৳ {product.price.toLocaleString()}.00
//           </span>
//           <span className="text-xs text-gray-400 line-through">
//             ৳ {product.original.toLocaleString()}.00
//           </span>
//         </div>

//         {/* Add to Cart button */}
//         <button className="mt-auto w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-700 active:bg-black text-white text-xs sm:text-sm font-medium py-2.5 px-4 transition-colors duration-200 rounded-sm cursor-pointer">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-4 h-4 flex-shrink-0"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//             />
//           </svg>
//           Add To Cart
//         </button>
//       </div>
//     </div>
//   );
// }

// export default function ProductsGrid() {
//   return (
//     <div className="min-h-screen p-3 sm:p-4 md:p-6">
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }
