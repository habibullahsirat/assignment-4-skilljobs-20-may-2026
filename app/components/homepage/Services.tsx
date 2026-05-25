export default function Services() {
  return (
    <div className="flex justify-between gap-[10px] w-[80%] items-center ">
      <div>
        <div className="flex justify-between gap-[20px]">
          <div>
            <img src="/icon-delivery.png" alt="" />
          </div>
          <div>
            <h2 className="font-[600] text-[16px]">Fast, Free Shipping</h2>
            <p className="text-[#A9AAAC] text-[14px] font-[400]">
              On order over BDT-2000
            </p>
          </div>
          <div className="h-full">
            <div className="border-r-2 border-r-gray-400"></div>
          </div>
        </div>
      </div>

      <div>Delivery</div>
      <div></div>
      <div>Quality</div>
    </div>
  );
}
