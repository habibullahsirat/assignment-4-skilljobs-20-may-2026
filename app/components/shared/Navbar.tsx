// export default function Navbar() {
//   return (
//     <>
//       <div className="flex justify-between gap-[2px] w-[1440px] h-[66px] px-[80px] pt-[18px] pb-[8px] mx-[16px] m-[16px]">
//         <div>
//           <img src="/KIZIL.png" alt="Logo" />
//         </div>
//         <div>
//           <img src="/Phone-Info.png" alt="Phone info" />
//         </div>
//         <div className="flex items-center py-[16px] px-[8px] w-[623px] h-[37px] bg-[#F3F3F3] rounded-[100px]">
//           <div>
//             <img src="/icon-search.png" alt="" />
//           </div>
//           <span className="text-[14px] font-[400]">Search for products</span>
//         </div>
//         <div className="flex">
//           <div>
//             <img src="/icon-useraccount.png" alt="" />
//           </div>
//           <span>Your Account</span>
//         </div>
//         <div className="flex">
//           <div>
//             <img src="icon-heart.png" alt="" />
//           </div>
//           <span>Whishlist</span>
//         </div>
//         <div className="flex">
//           <div>
//             <img src="icon-cart.png" alt="" />
//           </div>
//           <span>Cart</span>
//         </div>
//       </div>
//       <div className="flex justify-between gap-[2px] w-[1440px] h-[66px] px-[80px] pt-[18px] pb-[8px] mx-[16px] m-[16px]">
//         <div className="flex justify-between gap-[20px]">
//           <div className="flex bg-black text-white items-center rounded-[5px] px-[20px] py-[10px]">
//             <div>
//               <img src="/icon-nav-align.png" alt="" />
//             </div>
//             <span className="uppercase text-[14px] font-semibold">
//               shop by category
//             </span>
//           </div>
//           <div className="flex gap-[20px] items-center">
//             <div>Our Collections</div>
//             <div className="flex">
//               <div>
//                 <img src="/icon-flash.png" alt="" />
//               </div>
//               <span>Flash Deals</span>
//             </div>
//             <div>New Arrivals</div>
//             <div className="text-[#F44A22] font-semibold text-[16px]">
//               Bundle Products
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-between gap-[20px]">
//           <div className="">
//             <div>
//               <img src="/icon-corporate.png" alt="" />
//             </div>
//             <span>Corporate Enquiries</span>
//           </div>
//           <div className="flex">
//             <div>
//               <img src="/icon-location.png" alt="" />
//             </div>
//             <span>Track Your Order</span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

export default function Navbar() {
  return (
    <>
      {/* Top Navbar */}
      <div className="w-full border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 px-4 sm:px-6 lg:px-10 py-4">
          {/* Logo */}
          <div className="flex justify-center lg:justify-start w-full lg:w-auto">
            <img src="/KIZIL.png" alt="Logo" className="h-10 object-contain" />
          </div>

          {/* Phone Info */}
          <div className="hidden xl:block">
            <img
              src="/Phone-Info.png"
              alt="Phone info"
              className="h-10 object-contain"
            />
          </div>

          {/* Search Bar */}
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

          {/* Right Side Icons */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
            {/* Account */}
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

            {/* Wishlist */}
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="/icon-heart.png" alt="Wishlist" className="w-5 h-5" />
              <span className="text-sm font-medium hidden sm:block">
                Wishlist
              </span>
            </div>

            {/* Cart */}
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="/icon-cart.png" alt="Cart" className="w-5 h-5" />
              <span className="text-sm font-medium hidden sm:block">Cart</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="w-full border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4 px-4 sm:px-6 lg:px-10 py-4">
          {/* Left Section */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 w-full xl:w-auto">
            {/* Shop by Category */}
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

            {/* Menu Links */}
            <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-sm font-medium">
              <div className="cursor-pointer whitespace-nowrap">
                Our Collections
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

          {/* Right Section */}
          <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-sm font-medium">
            {/* Corporate */}
            <div className="flex items-center gap-2 cursor-pointer whitespace-nowrap">
              <img
                src="/icon-corporate.png"
                alt="Corporate"
                className="w-5 h-5"
              />
              <span>Corporate Enquiries</span>
            </div>

            {/* Track Order */}
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
