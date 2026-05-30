const products = [
  {
    image: "/cat1.png",
    category: "Tops Collection",
  },
  {
    image: "/cat2.png",
    category: "Bottoms Wear",
  },
  {
    image: "/cat3.jpg",
    category: "Loungewear",
  },
  {
    image: "/cat4.jpg",
    category: "Scarves",
  },
  {
    image: "/cat5.jpg",
    category: "Accessories",
  },
];

export default function CategoryProducts() {
  return (
    <div className="flex flex-nowrap gap-4 overflow-x-auto w-[1280px] h-[387px] items-center">
      {products.map((item, index) => (
        <div
          key={index}
          className="flex flex-col overflow-hidden items-center shrink-0 rounded-[16px]"
        >
          {/* Fixed image size */}
          <div className="w-[302px] h-[354px]">
            <img
              src={item.image}
              alt={item.category}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="mt-2 text-sm text-center">{item.category}</p>
        </div>
      ))}
    </div>
  );
}
