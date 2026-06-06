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
      <div className="text-center mt-8 sm:mt-[50px] mb-8 sm:mb-[50px] px-4">
        <h1 className="text-[24px] sm:text-[32px] md:text-[42px] font-bold font-['Urbanist']">
          Top Pick
        </h1>
      </div>

      <div className="w-full px-4 sm:px-[10%]">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
          {products.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full h-[180px] sm:h-[280px] md:h-[354px]">
                <img
                  src={item.image}
                  alt={item.category}
                  className="w-full h-full object-cover rounded-[12px] sm:rounded-[16px]"
                />
              </div>

              <p className="mt-2 text-[12px] sm:text-[16px] md:text-[18px] font-semibold text-center line-clamp-2">
                {item.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
