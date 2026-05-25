export default function Services() {
  return (
    <div className="flex justify-between gap-[10px] w-[80%] items-center mx-[10%] my-[32px] px-[8px] py-[16px]">
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
            <div className="border-r-2 border-r-gray-400"></div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className="flex justify-between gap-[20px]">
            <div>
              <img src="/icon-clock.png" alt="" />
            </div>
            <div>
              <h2 className="font-[600] text-[16px]">Next Day Delivery</h2>
              <p className="text-[#A9AAAC] text-[14px] font-[400]">
                Free - spend over BDT-20,000
              </p>
              <div className="border-r-2 border-r-gray-400"></div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div>
            <div className="flex justify-between gap-[20px]">
              <div>
                <img src="/icon-quality.png" alt="" />
              </div>
              <div>
                <h2 className="font-[600] text-[16px]">Quality Guarantee</h2>
                <p className="text-[#A9AAAC] text-[14px] font-[400]">
                  We guarantee our proucts
                </p>
                <div className="border-r-2 border-r-gray-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
