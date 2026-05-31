import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <>
      <div className="w-full border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 px-4 sm:px-6 lg:px-10 py-4">
          <div className="flex justify-center lg:justify-start w-full lg:w-auto">
            <img src="/KIZIL.png" alt="Logo" className="h-10 object-contain" />
          </div>

          <div className="hidden xl:block">
            <img
              src="/Phone-Info.png"
              alt="Phone info"
              className="h-10 object-contain"
            />
          </div>

          <div className="w-full lg:flex-1 lg:max-w-[620px]">
            <div className="flex items-center gap-3 bg-[#F3F3F3] rounded-full px-4 py-3 w-full">
              <img src="/icon-search.png" alt="Search" className="w-4 h-4" />

              <input
                type="text"
                placeholder="Search for products"
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src="/icon-useraccount.png"
                alt="Account"
                className="w-5 h-5"
              />
              <span className="text-sm font-medium hidden sm:block">
                Your Account
              </span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer">
              <img src="/icon-heart.png" alt="Wishlist" className="w-5 h-5" />
              <span className="text-sm font-medium hidden sm:block">
                Wishlist
              </span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer">
              <img src="/icon-cart.png" alt="Cart" className="w-5 h-5" />
              <span className="text-sm font-medium hidden sm:block">Cart</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4 px-4 sm:px-6 lg:px-10 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 w-full xl:w-auto">
            <div className="flex items-center justify-center gap-2 bg-black text-white rounded-md px-5 py-3 cursor-pointer w-full sm:w-fit">
              <img
                src="/icon-nav-align.png"
                alt="Category"
                className="w-4 h-4"
              />

              <span className="uppercase text-sm font-semibold whitespace-nowrap">
                Shop by Category
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-sm font-medium">
              <div className="cursor-pointer whitespace-nowrap">
                <NavLink to="/ourcollections">Our Collections</NavLink>
              </div>

              <div className="flex items-center gap-1 cursor-pointer whitespace-nowrap">
                <img src="/icon-flash.png" alt="Flash" className="w-4 h-4" />
                <span>Flash Deals</span>
              </div>

              <div className="cursor-pointer whitespace-nowrap">
                New Arrivals
              </div>

              <div className="text-[#F44A22] font-semibold cursor-pointer whitespace-nowrap">
                Bundle Products
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-sm font-medium">
            <div className="flex items-center gap-2 cursor-pointer whitespace-nowrap">
              <img
                src="/Icon-corporate.png"
                alt="Corporate"
                className="w-5 h-5"
              />
              <span>Corporate Enquiries</span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer whitespace-nowrap">
              <img
                src="/icon-location.png"
                alt="Location"
                className="w-5 h-5"
              />
              <span>Track Your Order</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
