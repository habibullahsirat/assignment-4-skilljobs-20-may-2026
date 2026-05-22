export default function Navbar() {
  return (
    <>
      <div className="flex justify-between gap-[2px] w-[1440px] h-[66px] px-[80px] pt-[18px] pb-[8px] mx-[16px] m-[16px]">
        <div>
          <img src="/KIZIL.png" alt="Logo" />
        </div>
        <div>
          <img src="/Phone-Info.png" alt="Phone info" />
        </div>
        <div className="flex items-center py-[16px] px-[8px] w-[623px] h-[37px] bg-[#F3F3F3] rounded-[100px]">
          <div>
            <img src="/icon-search.png" alt="" />
          </div>
          <span className="text-[14px] font-[400]">Search for products</span>
        </div>
        <div className="flex">
          <div>
            <img src="/icon-useraccount.png" alt="" />
          </div>
          <span>Your Account</span>
        </div>
        <div className="flex">
          <div>
            <img src="icon-heart.png" alt="" />
          </div>
          <span>Whishlist</span>
        </div>
        <div className="flex">
          <div>
            <img src="icon-cart.png" alt="" />
          </div>
          <span>Cart</span>
        </div>
      </div>
      <div className="flex justify-between gap-[2px] w-[1440px] h-[66px] px-[80px] pt-[18px] pb-[8px] mx-[16px] m-[16px]">
        <div className="flex justify-between gap-[20px]">
          <div className="flex bg-black text-white items-center rounded-[5px] px-[20px] py-[10px]">
            <div>
              <img src="/icon-nav-align.png" alt="" />
            </div>
            <span className="uppercase text-[14px] font-semibold">
              shop by category
            </span>
          </div>
          <div className="flex gap-[20px] items-center">
            <div>Our Collections</div>
            <div className="flex">
              <div>
                <img src="/icon-flash.png" alt="" />
              </div>
              <span>Flash Deals</span>
            </div>
            <div>New Arrivals</div>
            <div className="text-[#F44A22] font-semibold text-[16px]">
              Bundle Products
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-[20px]">
          <div className="">
            <div>
              <img src="/icon-corporate.png" alt="" />
            </div>
            <span>Corporate Enquiries</span>
          </div>
          <div className="flex">
            <div>
              <img src="/icon-location.png" alt="" />
            </div>
            <span>Track Your Order</span>
          </div>
        </div>
      </div>
    </>
  );
}
