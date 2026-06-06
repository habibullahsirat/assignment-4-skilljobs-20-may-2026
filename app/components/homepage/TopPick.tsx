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
      <div className="text-center mt-[50px] mb-[50px]">
        <h1 className="text-[42px] font-bold font-['Urbanist']">
          Top Pick of the Season
        </h1>
      </div>

      <div className="w-full px-4 sm:px-[10%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full h-[354px]">
                <img
                  src={item.image}
                  alt={item.category}
                  className="w-full h-full object-cover rounded-[16px]"
                />
              </div>

              <p className="mt-2 text-[18px] font-semibold text-center">
                {item.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
