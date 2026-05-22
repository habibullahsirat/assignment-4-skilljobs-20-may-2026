export default function Navbar() {
  return (
    <>
      <div className="flex justify-between gap-[2px]">
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
        <div>User Account</div>
        <div>Whishlist</div>
        <div>Cart</div>
      </div>
      <div className="flex justify-between gap-[10px]">
        <div className="flex justify-between gap-[20px]">
          <div>Category</div>
          <div>Collections</div>
          <div>Flash Deals</div>
          <div>New Arrivals</div>
          <div>Bundle Products</div>
        </div>
        <div className="flex justify-between gap-[20px]">
          <div>Corporate Inqueries</div>
          <div>Track Your Order</div>
        </div>
      </div>
    </>
  );
}
