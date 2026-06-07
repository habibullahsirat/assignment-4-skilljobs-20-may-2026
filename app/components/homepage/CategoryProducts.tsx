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
    <div className="w-full px-2 sm:px-4 lg:px-[10%] py-6 sm:py-8">
      <div
        className="
          flex
          flex-nowrap
          gap-2 sm:gap-4
          overflow-x-auto
          items-center
          [&::-webkit-scrollbar]:hidden
          [-ms-overflow-style:none]
          [scrollbar-width:none]
        "
      >
        {products.map((item, index) => (
          <div
            key={index}
            className="
              flex
              flex-col
              items-center
              shrink-0
              overflow-hidden
              rounded-[16px]
            "
          >
            <div className="w-[280px] sm:w-[302px] h-[320px] sm:h-[354px]">
              <img
                src={item.image}
                alt={item.category}
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>

            <p className="mt-2 text-xs sm:text-sm text-center font-medium">
              {item.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
