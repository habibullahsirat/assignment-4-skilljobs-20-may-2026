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
];

export default function FlashDeals() {
  return (
    <>
      <div className="flex justify-around ">
        <div>
          <h1 className="text-[48px]">Flash Deals</h1>
        </div>
        <div className="flex justify-between gap-[10px] text-center">
          <div>
            <div>Days</div>
            <div>03</div>
          </div>
          <div>
            <div>Hours</div>
            <div>23</div>
          </div>
          <div>
            <div>Minutes</div>
            <div>19</div>
          </div>
          <div>
            <div>Seconds</div>
            <div>56</div>
          </div>
        </div>
        <div>
          <a href="">See All Products</a>
        </div>
      </div>
    </>
  );
}
