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
    "Perforated Square Blue",
    "Perforated Square Ivory",
    "Celery Ice",
    "Marmalade Orange",
    "Brown Tone Chevron",
    "Green Tropical",
    "Orchid",
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-6 py-6">
        <div className="text-sm text-gray-500">
          Home <span className="mx-2">/</span>
          <span className="font-medium text-black">New Arrival</span>
        </div>

        {/* Categories */}
        <div className="flex items-center gap-6 mt-8">
          <button className="w-35 h-10 flex items-center justify-center text-2xl">
            <img src="/icon-left.png" alt="" />
          </button>

          {categories.map((item) => (
            <div key={item.name} className="text-center">
              <div className="w-40 h-40 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-contain"
                />
              </div>
              <p className="mt-3 text-sm font-medium">{item.name}</p>
            </div>
          ))}

          <button className="w-10 h-10 flex items-center justify-center text-2xl ml-auto">
            <img src="/icon-right.png" alt="" />
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-[280px_1fr] gap-8 mt-10">
          {/* Sidebar */}
          <aside>
            {/* Price */}
            <div className="border-b pb-6">
              <h3 className="font-semibold mb-4">Price</h3>

              <div className="space-y-3 text-sm">
                {[
                  "0 - ৳ 1000",
                  "৳ 1000 - ৳ 5000",
                  "৳ 5000 - ৳ 10000",
                  "৳ 10000 - ৳ 20000",
                  "৳ 20000 - ৳ 30000",
                  "৳ 30000 - ৳ 50000",
                  "৳ 50000 +",
                ].map((item) => (
                  <label key={item} className="flex items-center gap-3">
                    <input type="checkbox" />
                    {item}
                  </label>
                ))}
              </div>

              <div className="flex gap-2 mt-5">
                <input
                  placeholder="Min"
                  className="w-20 border rounded px-3 py-2 text-sm"
                />
                <input
                  placeholder="Max"
                  className="w-20 border rounded px-3 py-2 text-sm"
                />
                <button className="bg-yellow-400 px-4 py-2 text-sm font-semibold rounded">
                  FILTER
                </button>
              </div>
            </div>

            {/* Fabric Color */}
            <div className="border-b py-6">
              <h3 className="font-semibold mb-4">Fabric Color</h3>

              <div className="space-y-3">
                {fabricColors.map((color, i) => (
                  <label
                    key={color}
                    className="flex items-center gap-3 text-sm"
                  >
                    <span
                      className="w-3 h-3 rounded-full border"
                      style={{
                        backgroundColor: [
                          "#1D4ED8",
                          "#9CA3AF",
                          "#444",
                          "#F8D5D8",
                          "#E9DCC6",
                          "#2563EB",
                          "#DDD6C3",
                          "#B4C09B",
                          "#D97706",
                          "#9A7B4F",
                          "#166534",
                          "#C084FC",
                        ][i],
                      }}
                    />
                    {color}
                  </label>
                ))}
              </div>
            </div>

            {/* Structure Color */}
            <div className="border-b py-6">
              <h3 className="font-semibold mb-4">Structure Color</h3>

              <div className="space-y-3 text-sm">
                {[
                  "White",
                  "Light",
                  "Dark",
                  "Ebony",
                  "Pale Green",
                  "Yellow",
                  "Medium",
                ].map((item) => (
                  <label key={item} className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-gray-400" />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Material */}
            <div className="border-b py-6">
              <h3 className="font-semibold mb-4">Material</h3>

              <div className="space-y-3 text-sm">
                {[
                  "Wood",
                  "Metal",
                  "Faux Leather",
                  "Fabric",
                  "Velvet",
                  "Ceramics",
                  "Glass",
                  "Cane",
                  "Microfiber",
                ].map((item) => (
                  <label key={item} className="flex items-center gap-3">
                    <input type="checkbox" />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="border-b py-6">
              <h3 className="font-semibold mb-4">Size</h3>

              <div className="space-y-3 text-sm">
                {["1 Seater", "2 Seater", "3 Seater"].map((item) => (
                  <label key={item} className="flex items-center gap-3">
                    <input type="checkbox" />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Sofa Category */}
            <div className="py-6">
              <h3 className="font-semibold uppercase mb-4">Sofa & Ottoman</h3>

              <div className="space-y-3 text-sm text-gray-600">
                <p>One Seater Sofa</p>
                <p>Two Seater Sofa</p>
                <p>Three Seater Sofa</p>
                <p>L Shape Sofa</p>
                <p>Sofa with Chaise</p>
                <p>Sofa Cum Bed</p>
              </div>
            </div>
          </aside>

          {/* Product Section */}
          <section>
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 text-sm">
              <div className="text-gray-500">Showing 1–28 of 30 results</div>

              <div className="flex items-center gap-8">
                <div>
                  Show:
                  <span className="font-semibold ml-2">28</span>
                  <span className="ml-3">56</span>
                  <span className="ml-3">84</span>
                </div>

                <div>
                  Sort:
                  <select className="ml-2 border-none outline-none">
                    <option>Short by latest</option>
                  </select>
                </div>

                <div className="flex gap-3 text-lg">
                  <span>▦</span>
                  <span>☰</span>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="grid grid-cols-3 gap-x-8 gap-y-10">
              {products.map((_, index) => (
                <div key={index}>
                  <div className="bg-gray-100 aspect-square flex items-center justify-center">
                    <img
                      src="/bed-image.png"
                      alt="bed"
                      className="w-56 object-contain"
                    />
                  </div>

                  <h3 className="mt-4 text-[15px] font-medium">
                    Pompeii Faux Leather Dark Queen Bed
                  </h3>

                  <div className="mt-2">
                    <span className="text-red-500 font-semibold">৳ 57,090</span>
                    <span className="ml-2 text-gray-400 line-through">
                      ৳ 60,000
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <div className="text-yellow-400">★★★★★</div>
                    <span className="text-gray-500 text-sm">(88)</span>
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
