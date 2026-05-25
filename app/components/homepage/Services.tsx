export default function Services() {
  return (
    <div className="w-[90%] lg:w-[80%] mx-auto my-[32px] px-[12px] py-[16px] flex flex-col md:flex-row justify-center items-center gap-[24px] md:gap-[40px]">
      {/* Item 1 */}
      <div className="flex items-center gap-[20px]">
        <img
          src="/icon-delivery.png"
          alt="Delivery Icon"
          className="w-[40px] h-[40px] object-contain"
        />
        <div>
          <h2 className="font-[600] text-[16px] text-black">
            Fast, Free Shipping
          </h2>
          <p className="text-[#9CA3AF] text-[14px] font-[400]">
            On order over BDT-2000
          </p>
        </div>
      </div>

      {/* Divider 1 */}
      <div className="hidden md:block h-[40px] w-[1px] bg-gray-200 self-center"></div>

      {/* Item 2 */}
      <div className="flex items-center gap-[20px]">
        <img
          src="/icon-clock.png"
          alt="Clock Icon"
          className="w-[40px] h-[40px] object-contain"
        />
        <div>
          <h2 className="font-[600] text-[16px] text-black">
            Next Day Delivery
          </h2>
          <p className="text-[#9CA3AF] text-[14px] font-[400]">
            Free - spend over BDT-20,000
          </p>
        </div>
      </div>

      {/* Divider 2 */}
      <div className="hidden md:block h-[40px] w-[1px] bg-gray-200 self-center"></div>

      {/* Item 3 */}
      <div className="flex items-center gap-[20px]">
        <img
          src="/icon-quality.png"
          alt="Quality Icon"
          className="w-[40px] h-[40px] object-contain"
        />
        <div>
          <h2 className="font-[600] text-[16px] text-black">
            Quality Guarantee
          </h2>
          <p className="text-[#9CA3AF] text-[14px] font-[400]">
            We guarantee our products
          </p>
        </div>
      </div>
    </div>
  );
}
