type Product = {
  id: number;
  name: string;
  img: string;
  colors: string[];
  price: number;
  original: number;
};

const products: Product[] = [
  {
    id: 1,
    name: "Buttons Cotton Top",
    img: "img1.png",
    colors: ["#C8A882", "#E8DDD0"],
    price: 1090,
    original: 2000,
  },
  {
    id: 2,
    name: "Wool Midi Coat",
    img: "img2.png",
    colors: ["#3B3B2F", "#6B5D3F"],
    price: 1590,
    original: 2300,
  },
  {
    id: 3,
    name: "Lyocell Wrap Top",
    img: "img3.png",
    colors: ["#4A4A35", "#E0D8CC"],
    price: 4090,
    original: 5000,
  },
  {
    id: 4,
    name: "Leather Shopper Bag With Stitching",
    img: "img4.png",
    colors: ["#DDD0C0", "#CC44CC"],
    price: 7090,
    original: 10000,
  },
  {
    id: 5,
    name: "Leather Shopper Bag With Stitching",
    img: "img5.png",
    colors: ["#DDD0C0", "#CC44CC"],
    price: 7090,
    original: 10000,
  },
  {
    id: 6,
    name: "Lyocell Wrap Top",
    img: "img6.png",
    colors: ["#4A4A35", "#E0D8CC"],
    price: 4090,
    original: 5000,
  },
  {
    id: 7,
    name: "Lyocell Wrap Top",
    img: "img7.png",
    colors: ["#4A4A35", "#E0D8CC"],
    price: 4090,
    original: 5000,
  },
  {
    id: 8,
    name: "Leather Shopper Bag With Stitching",
    img: "img8.png",
    colors: ["#DDD0C0", "#CC44CC"],
    price: 7090,
    original: 10000,
  },
  {
    id: 9,
    name: "Leather Shopper Bag With Stitching",
    img: "img9.png",
    colors: ["#DDD0C0", "#CC44CC"],
    price: 7090,
    original: 10000,
  },
  {
    id: 10,
    name: "Buttons Cotton Top",
    img: "img10.png",
    colors: ["#C8A882", "#E8DDD0"],
    price: 1090,
    original: 2000,
  },
  {
    id: 11,
    name: "Lyocell Wrap Top",
    img: "img11.png",
    colors: ["#4A4A35", "#E0D8CC"],
    price: 4090,
    original: 5000,
  },
  {
    id: 12,
    name: "Leather Shopper Bag With Stitching",
    img: "img12.png",
    colors: ["#DDD0C0", "#CC44CC"],
    price: 7090,
    original: 10000,
  },
  {
    id: 13,
    name: "Buttons Cotton Top",
    img: "img13.png",
    colors: ["#C8A882", "#E8DDD0"],
    price: 1090,
    original: 2000,
  },
  {
    id: 14,
    name: "Wool Midi Coat",
    img: "img14.png",
    colors: ["#3B3B2F", "#6B5D3F"],
    price: 1590,
    original: 2300,
  },
  {
    id: 15,
    name: "Lyocell Wrap Top",
    img: "img15.png",
    colors: ["#4A4A35", "#E0D8CC"],
    price: 4090,
    original: 5000,
  },
  {
    id: 16,
    name: "Leather Shopper Bag With Stitching",
    img: "img16.png",
    colors: ["#DDD0C0", "#CC44CC"],
    price: 7090,
    original: 10000,
  },
  {
    id: 17,
    name: "Leather Shopper Bag With Stitching",
    img: "img17.png",
    colors: ["#DDD0C0", "#CC44CC"],
    price: 7090,
    original: 10000,
  },
  {
    id: 18,
    name: "Lyocell Wrap Top",
    img: "img18.png",
    colors: ["#4A4A35", "#E0D8CC"],
    price: 4090,
    original: 5000,
  },
  {
    id: 19,
    name: "Lyocell Wrap Top",
    img: "img19.png",
    colors: ["#4A4A35", "#E0D8CC"],
    price: 4090,
    original: 5000,
  },
  {
    id: 20,
    name: "Leather Shopper Bag With Stitching",
    img: "img20.png",
    colors: ["#DDD0C0", "#CC44CC"],
    price: 7090,
    original: 10000,
  },
  {
    id: 21,
    name: "Leather Shopper Bag With Stitching",
    img: "img21.png",
    colors: ["#DDD0C0", "#CC44CC"],
    price: 7090,
    original: 10000,
  },
  {
    id: 22,
    name: "Buttons Cotton Top",
    img: "img22.png",
    colors: ["#C8A882", "#E8DDD0"],
    price: 1090,
    original: 2000,
  },
  {
    id: 23,
    name: "Lyocell Wrap Top",
    img: "img23.png",
    colors: ["#4A4A35", "#E0D8CC"],
    price: 4090,
    original: 5000,
  },
  {
    id: 24,
    name: "Leather Shopper Bag With Stitching",
    img: "img24.png",
    colors: ["#DDD0C0", "#CC44CC"],
    price: 7090,
    original: 10000,
  },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-sm overflow-hidden flex flex-col border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-50 aspect-[3/4]">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Info */}
      <div className="p-3 flex flex-col gap-2 flex-1">
        {/* Name */}
        <p className="text-xs sm:text-sm font-medium text-gray-900 leading-tight line-clamp-2">
          {product.name}
        </p>

        {/* Color swatches */}
        <div className="flex items-center gap-1.5">
          {product.colors.map((color, i) => (
            <span
              key={i}
              className="w-4 h-4 rounded-full border border-gray-200 inline-block flex-shrink-0"
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm sm:text-base font-bold text-gray-900">
            ৳ {product.price.toLocaleString()}.00
          </span>
          <span className="text-xs text-gray-400 line-through">
            ৳ {product.original.toLocaleString()}.00
          </span>
        </div>

        {/* Add to Cart button */}
        <button className="mt-auto w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-700 active:bg-black text-white text-xs sm:text-sm font-medium py-2.5 px-4 transition-colors duration-200 rounded-sm cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default function ProductsGrid() {
  return (
    <div className="min-h-screen bg-gray-950 p-3 sm:p-4 md:p-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
