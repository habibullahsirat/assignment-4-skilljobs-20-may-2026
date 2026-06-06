export default function Services() {
  return (
    <div className="w-[90%] lg:w-[80%] mx-auto my-6 sm:my-[32px] px-3 sm:px-[12px] py-4 sm:py-[16px] flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-[40px]">
      {/* Item 1 */}
      <div className="flex items-center gap-3 sm:gap-[20px] flex-1 md:flex-none">
        <img
          src="/icon-delivery.png"
          alt="Delivery Icon"
          className="w-8 h-8 sm:w-[40px] sm:h-[40px] object-contain flex-shrink-0"
        />
        <div>
          <h2 className="font-[600] text-[13px] sm:text-[16px] text-black">
            Free Shipping
          </h2>
          <p className="text-[#9CA3AF] text-[11px] sm:text-[14px] font-[400]">
            Over BDT 2000
          </p>
        </div>
      </div>

      {/* Divider 1 */}
      <div className="hidden md:block h-[40px] w-[1px] bg-gray-200 self-center"></div>

      {/* Item 2 */}
      <div className="flex items-center gap-3 sm:gap-[20px] flex-1 md:flex-none">
        <img
          src="/icon-clock.png"
          alt="Clock Icon"
          className="w-8 h-8 sm:w-[40px] sm:h-[40px] object-contain flex-shrink-0"
        />
        <div>
          <h2 className="font-[600] text-[13px] sm:text-[16px] text-black">
            Next Day
          </h2>
          <p className="text-[#9CA3AF] text-[11px] sm:text-[14px] font-[400]">
            Over BDT 20,000
          </p>
        </div>
      </div>

      {/* Divider 2 */}
      <div className="hidden md:block h-[40px] w-[1px] bg-gray-200 self-center"></div>

      {/* Item 3 */}
      <div className="flex items-center gap-3 sm:gap-[20px] flex-1 md:flex-none">
        <img
          src="/icon-quality.png"
          alt="Quality Icon"
          className="w-8 h-8 sm:w-[40px] sm:h-[40px] object-contain flex-shrink-0"
        />
        <div>
          <h2 className="font-[600] text-[13px] sm:text-[16px] text-black">
            Quality
          </h2>
          <p className="text-[#9CA3AF] text-[11px] sm:text-[14px] font-[400]">
            Guaranteed
          </p>
        </div>
      </div>
    </div>
  );
}
