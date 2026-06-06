export default function NewArrival() {
  const categories = [
    { name: "Bedroom", image: "/bed-image.png" },
    { name: "Sofas", image: "/sofa.png" },
    { name: "Office", image: "/office.png" },
    { name: "Storage", image: "/storage.png" },
    { name: "Table", image: "/table.png" },
    { name: "Chair", image: "/chair.png" },
  ];

  const products = Array.from({ length: 15 });

  const fabricColors = [
    "Perforated Arrow Blue",
    "Mint",
    "Monochrome Triangular",
    "Rose Printed",
    "Daisy Printed",
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="text-xs sm:text-sm text-gray-500">
          Home <span className="mx-2">/</span>
          <span className="font-medium text-black">New Arrival</span>
        </div>

        {/* Categories Carousel */}
        <div className="flex items-center gap-3 sm:gap-6 mt-6 sm:mt-8 overflow-x-auto pb-2">
          <button className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-lg">
            <img src="/icon-left.png" alt="" className="w-5 h-5" />
          </button>

          {categories.map((item) => (
            <div key={item.name} className="text-center flex-shrink-0">
              <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden mx-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 sm:w-24 sm:h-24 object-contain"
                />
              </div>
              <p className="mt-2 text-xs sm:text-sm font-medium">{item.name}</p>
            </div>
          ))}

          <button className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-lg">
            <img src="/icon-right.png" alt="" className="w-5 h-5" />
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] lg:grid-cols-[280px_1fr] gap-6 sm:gap-8 mt-8 sm:mt-10">
          {/* Sidebar - Hidden on Mobile, Shows on Tablet+ */}
          <aside className="hidden md:block space-y-4 text-sm">
            {/* Price */}
            <div className="border-b pb-4">
              <h3 className="font-semibold mb-3 text-sm">Price</h3>

              <div className="space-y-2 text-xs">
                {[
                  "0 - ৳ 1000",
                  "৳ 1000 - ৳ 5000",
                  "৳ 5000 - ৳ 10000",
                ].map((item) => (
                  <label key={item} className="flex items-center gap-2">
                    <input type="checkbox" className="w-3 h-3" />
                    {item}
                  </label>
                ))}
              </div>

              <div className="flex gap-2 mt-3">
                <input
                  placeholder="Min"
                  className="w-16 border rounded px-2 py-1.5 text-xs"
                />
                <input
                  placeholder="Max"
                  className="w-16 border rounded px-2 py-1.5 text-xs"
                />
                <button className="bg-yellow-400 px-3 py-1.5 text-xs font-semibold rounded">
                  FILTER
                </button>
              </div>
            </div>

            {/* Fabric Color */}
            <div className="border-b py-4">
              <h3 className="font-semibold mb-3 text-sm">Fabric Color</h3>

              <div className="space-y-2">
                {fabricColors.map((color, i) => (
                  <label
                    key={color}
                    className="flex items-center gap-2 text-xs"
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full border"
                      style={{
                        backgroundColor: [
                          "#1D4ED8",
                          "#9CA3AF",
                          "#444",
                          "#F8D5D8",
                          "#E9DCC6",
                        ][i],
                      }}
                    />
                    {color}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Section */}
          <section>
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8 text-xs">
              <div className="text-gray-500">Showing 1–15 of 30 results</div>

              <div className="flex flex-wrap items-center gap-4 sm:gap-8">
                <div className="text-xs">
                  Show: <span className="font-semibold ml-2">15</span>
                </div>

                <div className="text-xs">
                  Sort:
                  <select className="ml-2 border-none outline-none text-xs">
                    <option>Latest</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {products.map((_, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-100 w-full aspect-square flex items-center justify-center rounded overflow-hidden group-hover:shadow-lg transition-shadow">
                    <img
                      src="/bed-image.png"
                      alt="bed"
                      className="w-40 sm:w-48 lg:w-56 object-contain"
                    />
                  </div>

                  <h3 className="mt-3 sm:mt-4 text-xs sm:text-[15px] font-medium line-clamp-2">
                    Pompeii Faux Leather Dark Queen Bed
                  </h3>

                  <div className="mt-2">
                    <span className="text-red-500 font-semibold text-xs sm:text-sm">
                      ৳ 57,090
                    </span>
                    <span className="ml-2 text-gray-400 line-through text-xs">
                      ৳ 60,000
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <div className="text-yellow-400 text-sm">★★★★★</div>
                    <span className="text-gray-500 text-xs">(88)</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
