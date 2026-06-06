import { NavLink } from "react-router";
import { ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  return (
    <>
      <div className="sticky top-0 z-[9999] w-full bg-white shadow-md">
        <div className="w-full">
          {/* ================= TOP NAVBAR ================= */}
          <div className="w-full border-b border-gray-200">
            {/* <div className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"> */}
            <div className="w-full px-4 sm:px-[10%] py-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              {/* Logo + Mobile Menu Button */}
              <div className="flex items-center justify-between w-full lg:w-auto">
                <NavLink to="/">
                  <img
                    src="/KIZIL.png"
                    alt="Logo"
                    className="h-10 object-contain"
                  />
                </NavLink>

                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="lg:hidden"
                >
                  {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>

              {/* Phone Info (desktop only) */}
              <div className="hidden xl:block">
                <img
                  src="/Phone-Info.png"
                  alt="Phone info"
                  className="h-10 object-contain"
                />
              </div>

              {/* Search */}
              <div className="w-full lg:flex-1 lg:max-w-[620px]">
                <div className="flex items-center gap-3 bg-[#F3F3F3] rounded-full px-4 py-3 w-full">
                  <img
                    src="/icon-search.png"
                    alt="Search"
                    className="w-4 h-4"
                  />
                  <input
                    type="text"
                    placeholder="Search for products"
                    className="bg-transparent outline-none w-full text-sm min-w-0"
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-center lg:justify-end gap-4 sm:gap-6 flex-wrap w-full lg:w-auto">
                <div className="flex items-center gap-2 cursor-pointer">
                  <img src="/icon-useraccount.png" className="w-5 h-5" />
                  <span className="hidden sm:block text-sm font-medium">
                    Account
                  </span>
                </div>

                <div className="flex items-center gap-2 cursor-pointer">
                  <img src="/icon-heart.png" className="w-5 h-5" />
                  <span className="hidden sm:block text-sm font-medium">
                    Wishlist
                  </span>
                </div>

                <div className="flex items-center gap-2 cursor-pointer">
                  <img src="/icon-cart.png" className="w-5 h-5" />
                  <span className="hidden sm:block text-sm font-medium">
                    Cart
                  </span>
                </div>
              </div>
            </div>

            {/* MOBILE MENU DRAWER */}
            {mobileOpen && (
              // <div className="lg:hidden border-t bg-white px-4 py-4 space-y-4">
              <div className="lg:hidden border-t bg-white px-4 sm:px-[10%] py-4 space-y-4">
                <NavLink to="/our-collections">Our Collections</NavLink>
                <NavLink to="/flash-deals">Flash Deals</NavLink>
                <NavLink to="/new-arrivals">New Arrivals</NavLink>
                <div className="text-[#F44A22] font-semibold">
                  Bundle Products
                </div>

                <div className="border-t pt-3 space-y-3">
                  <div>Corporate Enquiries</div>
                  <div>Track Your Order</div>
                </div>
              </div>
            )}
          </div>

          {/* ================= BOTTOM NAVBAR (DESKTOP) ================= */}
          <div className="w-full border-b border-gray-200 hidden lg:block">
            {/* <div className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-4 flex items-center justify-between"> */}
            <div className="w-full px-4 sm:px-[10%] py-4 flex items-center justify-between">
              {/* LEFT */}
              <div className="flex items-center gap-6">
                {/* CATEGORY DROPDOWN */}
                <div className="relative group">
                  <div className="flex items-center gap-2 bg-black text-white rounded-md px-5 py-3 cursor-pointer">
                    <img src="/icon-nav-align.png" className="w-4 h-4" />
                    <span className="uppercase text-sm font-semibold">
                      Shop by Category
                    </span>
                  </div>

                  {/* MAIN DROPDOWN */}
                  <div className="absolute top-full left-0 z-50 hidden group-hover:block w-[220px] bg-white shadow-lg rounded-b-xl">
                    {categories.map((category) => (
                      <div key={category.name} className="relative group/item">
                        <div className="flex items-center justify-between px-3 py-3 text-sm hover:bg-gray-50 cursor-pointer">
                          {category.name}
                          <ChevronRight size={16} />
                        </div>

                        {/* SUBMENU */}
                        <div className="absolute left-full top-0 hidden group-hover/item:block w-[240px] bg-white shadow-lg rounded-xl">
                          {category.subcategories.map((sub) => (
                            <div
                              key={sub}
                              className="px-3 py-3 text-sm hover:bg-gray-50 cursor-pointer"
                            >
                              {sub}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* LINKS */}
                <div className="flex items-center gap-6 text-sm font-medium">
                  <NavLink to="/our-collections">Our Collections</NavLink>

                  <div className="flex items-center gap-1">
                    <img src="/icon-flash.png" className="w-4 h-4" />
                    <NavLink to="/flash-deals">Flash Deals</NavLink>
                  </div>

                  <NavLink to="/new-arrivals">New Arrivals</NavLink>

                  <span className="text-[#F44A22] font-semibold cursor-pointer">
                    Bundle Products
                  </span>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-6 text-sm font-medium">
                <div className="flex items-center gap-2 cursor-pointer">
                  <img src="/Icon-corporate.png" className="w-5 h-5" />
                  Corporate Enquiries
                </div>

                <div className="flex items-center gap-2 cursor-pointer">
                  <img src="/icon-location.png" className="w-5 h-5" />
                  Track Order
                </div>
              </div>
            </div>
          </div>

          {/* ================= MOBILE CATEGORY ACCORDION ================= */}
          {mobileOpen && (
            // <div className="lg:hidden border-t px-4 py-4">
            <div className="lg:hidden border-t px-4 sm:px-[10%] py-4">
              <div className="font-semibold mb-3">Shop by Category</div>

              {categories.map((category) => (
                <div key={category.name} className="border-b">
                  <button
                    className="flex justify-between w-full py-3 text-sm"
                    onClick={() =>
                      setOpenCategory(
                        openCategory === category.name ? null : category.name,
                      )
                    }
                  >
                    {category.name}
                    <ChevronRight
                      className={`transition ${
                        openCategory === category.name ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  {openCategory === category.name && (
                    <div className="pl-4 pb-3 space-y-2">
                      {category.subcategories.map((sub) => (
                        <div key={sub} className="text-sm text-gray-600">
                          {sub}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
