const products = [
  {
    id: 1,
    name: "Top + Bottom + Scarf",
    img: "/popular1.jpg",
    price: 2750,
    original: 3200,
  },
  {
    id: 2,
    name: "Top + Bottom + Scarf",
    img: "/popular1.jpg",
    price: 2750,
    original: 3200,
  },
  {
    id: 3,
    name: "Top + Bottom + Scarf",
    img: "/popular1.jpg",
    price: 2750,
    original: 3200,
  },
  {
    id: 4,
    name: "Top + Bottom + Scarf",
    img: "/popular1.jpg",
    price: 2750,
    original: 3200,
  },
];

export default function PopularBundles() {
  return (
    <>
      <div className="text-center mt-[50px]">
        <h1 className="text-[42px] font-[700] font-bold">Popular Bundles</h1>
        <p className="text-[16px] font-[400]">
          Save more with our best-selling style combos.
        </p>
        <button className="rounded-[5px] border border-black text-[16px] font-[400] px-[24px] py-[10px] mt-[20px]">
          See All Bundles
        </button>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 md:px-20 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col bg-white border border-[#E5E5E5] rounded-[16px] p-3 w-full max-w-[312px] mx-auto group select-none"
            >
              {/* Image Wrapper & Floating Badge */}
              <div className="relative w-full rounded-[12px] overflow-hidden bg-[#F2F2F2]">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Meta Section */}
              <div className="flex flex-col pt-3 pb-2 flex-grow">
                {/* Product Title */}
                <h3 className="font-['Urbanist'] font-bold text-[16px] leading-[22px] text-black line-clamp-1">
                  {product.name}
                </h3>

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
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
