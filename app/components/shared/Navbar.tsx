import { NavLink } from "react-router";
import { ChevronRight } from "lucide-react";

const categories = [
  {
    name: "Tops Collection",
    subcategories: [
      "T-Shirts & Tees",
      "Shirts & Blouses",
      "Tank Tops & Camis",
      "Sweaters & Cardigans",
      "Crop Tops",
      "Tunics",
      "Hoodies & Sweatshirts",
    ],
  },
  {
    name: "Bottoms Wear",
    subcategories: [
      "Jeans & Denim",
      "Trousers & Pants",
      "Leggings & Jeggings",
      "Skirts",
      "Shorts",
      "Palazzo & Culottes",
      "Joggers & Lounge Pants",
    ],
  },
  {
    name: "Loungewear",
    subcategories: [
      "Pyjamas & Nightwear",
      "Tracksuits & Sweat Sets",
      "Robe & House Dresses",
      "Lounge Shorts & Pants",
      "Sleep Shirts & Night Gowns",
    ],
  },
  {
    name: "Scarves & Wraps",
    subcategories: [
      "Silk Scarves",
      "Cotton Scarves",
      "Wool & Knit Scarves",
      "Shawls & Stoles",
      "Infinity Scarves",
    ],
  },
  {
    name: "Accessories",
    subcategories: [
      "Bags & Purses",
      "Belts",
      "Hats & Caps",
      "Sunglasses",
      "Jewelry",
      "Hair Accessories",
      "Watches",
    ],
  },
];

export default function Navbar() {
  return (
    <>
      <div className="sticky top-0 z-[9999] w-full bg-white shadow-md">
        {/* Top Navbar */}
        <div className="w-full border-b border-gray-200">
          <div
            className="
            w-full
            px-4
            sm:px-[10%]
            py-4
            flex flex-col lg:flex-row
            items-center
            justify-between
            gap-2
            sm:gap-4
          "
          >
            {/* Logo */}
            <div className="flex justify-center lg:justify-start w-full lg:w-auto">
              <NavLink to="/">
                <img
                  src="/KIZIL.png"
                  alt="Logo"
                  className="h-8 sm:h-10 object-contain"
                />
              </NavLink>
            </div>

            {/* Phone Info */}
            <div className="hidden xl:block">
              <img
                src="/Phone-Info.png"
                alt="Phone info"
                className="h-8 sm:h-10 object-contain"
              />
            </div>

            {/* Search */}
            <div className="w-full lg:flex-1 lg:max-w-[620px]">
              <div className="flex items-center gap-2 sm:gap-3 bg-[#F3F3F3] rounded-full px-3 sm:px-4 py-2 sm:py-3 w-full">
                <img src="/icon-search.png" alt="Search" className="w-3 h-3 sm:w-4 sm:h-4" />

                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent outline-none w-full text-xs sm:text-sm"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-center lg:justify-end gap-3 sm:gap-4 md:gap-6 flex-wrap w-full lg:w-auto">
              <div className="flex items-center gap-1.5 sm:gap-2 cursor-pointer">
                <img
                  src="/icon-useraccount.png"
                  alt="Account"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span className="text-xs sm:text-sm font-medium hidden sm:block">
                  Account
                </span>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 cursor-pointer">
                <img src="/icon-heart.png" alt="Wishlist" className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-medium hidden sm:block">
                  Wishlist
                </span>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 cursor-pointer">
                <img src="/icon-cart.png" alt="Cart" className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-medium hidden sm:block">
                  Cart
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navbar */}
        <div className="w-full border-b border-gray-200 overflow-x-auto">
          <div
            className="
            w-full
            px-4
            sm:px-[10%]
            py-3
            sm:py-4
            flex flex-col xl:flex-row
            items-start xl:items-center
            justify-between
            gap-3
            sm:gap-4
            min-w-max
            xl:min-w-0
          "
          >
            {/* Left Section */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-3 sm:gap-4 w-full xl:w-auto">
              {/* Category Dropdown */}
              <div className="relative group">
                <div className="flex items-center justify-center gap-2 bg-black text-white rounded-md px-3 sm:px-5 py-2 sm:py-3 cursor-pointer w-full sm:w-fit text-xs sm:text-sm">
                  <img
                    src="/icon-nav-align.png"
                    alt="Category"
                    className="w-3 h-3 sm:w-4 sm:h-4"
                  />

                  <span className="uppercase font-semibold whitespace-nowrap">
                    Shop by Category
                  </span>
                </div>

                {/* Main Dropdown */}
                <div
                  className="
                  absolute top-full left-0 z-50 hidden
                  group-hover:block
                  w-[207px]
                  max-w-[90vw]
                  bg-white
                  shadow-[4px_4px_10px_rgba(0,0,0,0.25)]
                  rounded-b-[12px]
                "
                >
                  {categories.map((category) => (
                    <div key={category.name} className="relative group/item">
                      <div
                        className="
                        flex items-center justify-between
                        px-[10px] py-3 sm:py-4
                        text-[12px] sm:text-[14px]
                        hover:bg-gray-50
                        cursor-pointer
                      "
                      >
                        <span>{category.name}</span>

                        <ChevronRight size={16} className="sm:w-[18px]" />
                      </div>

                      {/* Subcategories */}
                      <div
                        className="
                        absolute left-full top-0
                        hidden group-hover/item:block
                        w-[245px]
                        max-w-[90vw]
                        bg-white
                        rounded-[12px]
                        shadow-[4px_4px_10px_rgba(0,0,0,0.25)]
                        overflow-hidden
                      "
                      >
                        {category.subcategories.map((sub) => (
                          <div
                            key={sub}
                            className="
                            px-[10px]
                            py-3 sm:py-4
                            text-[12px] sm:text-[14px]
                            hover:bg-gray-50
                            cursor-pointer
                          "
                          >
                            {sub}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Menu Links */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm font-medium">
                <NavLink to="/our-collections">Collections</NavLink>

                <div className="flex items-center gap-1">
                  <img src="/icon-flash.png" alt="Flash" className="w-3 h-3 sm:w-4 sm:h-4" />
                  <NavLink to="/flash-deals">Flash</NavLink>
                </div>

                <NavLink to="/new-arrivals">Arrivals</NavLink>

                <span className="text-[#F44A22] font-semibold cursor-pointer whitespace-nowrap">
                  Bundles
                </span>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm font-medium whitespace-nowrap">
              <div className="flex items-center gap-1.5 sm:gap-2 cursor-pointer">
                <img
                  src="/Icon-corporate.png"
                  alt="Corporate"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span className="hidden md:inline">Enquiries</span>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 cursor-pointer">
                <img
                  src="/icon-location.png"
                  alt="Location"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span className="hidden md:inline">Track</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
