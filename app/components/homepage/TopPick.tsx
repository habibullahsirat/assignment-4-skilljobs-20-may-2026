const products = [
  {
    image: "/top1.jpg",
    category: "Tops Collection",
  },
  {
    image: "/top2.jpg",
    category: "Bottoms Wear",
  },
  {
    image: "/top3.jpg",
    category: "Loungewear",
  },
  {
    image: "/top4.jpg",
    category: "Scarves",
  },
];

export default function TopPick() {
  return (
    <>
      <div className="text-center text-[42px] font-[700] font-bold mt-[50px] mb-[50px]">
        <h1 className="font-['Urbanist']">Top Pick of the Season</h1>
      </div>
      <div className="flex flex-nowrap gap-4 overflow-x-auto w-[1280px] h-[387px] items-center mx-[15%] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>

            <p className="mt-2 text-[18px] font-[600] font-semibold text-center">
              {item.category}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
