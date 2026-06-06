import React from "react";
import { Navigation, Mail, Copy } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("info@kinzil.com");
  };

  return (
    <footer className="w-full bg-[#F6F6F6] py-6 sm:py-10 font-['Poppins']">
      {/* Main Container - Same as Navbar */}
      <div className="w-full px-4 sm:px-[10%]">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 sm:gap-10 md:gap-[60px]">
          {/* Left Column */}
          <div className="flex-1 flex flex-col items-start gap-6 sm:gap-10 max-w-[698px] w-full">
            {/* Logo */}
            <div className="font-['Philosopher'] text-2xl sm:text-3xl font-bold tracking-wide">
              KI<span className="text-[#FF5B26]">ZIL</span>
            </div>

            {/* Contact Info */}
            <div className="w-full flex flex-col items-start gap-3 sm:gap-5">
              <div className="w-full flex flex-col items-start gap-2 sm:gap-2.5 text-[12px] sm:text-[14px] font-light text-black/70">
                {/* Address */}
                <div className="flex items-start gap-2 sm:gap-2.5">
                  <Navigation className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-black rotate-45 flex-shrink-0 mt-0.5" />
                  <span className="line-clamp-2">29 SE 2nd Ave, Miami Florida 33131</span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
                  <Mail className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-black flex-shrink-0" />

                  <span className="break-all">info@kinzil.com</span>

                  <button
                    onClick={handleCopyEmail}
                    className="p-1 hover:bg-black/5 rounded transition-colors flex-shrink-0"
                    title="Copy email address"
                  >
                    <Copy className="w-3 h-3 sm:w-[15px] sm:h-[15px] text-slate-700/50" />
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="font-['Philosopher'] font-bold text-[14px] sm:text-[18px] leading-5 tracking-[0.03em] text-black">
                (+92) 3942 7879
              </div>
            </div>
          </div>

          {/* Right Columns */}
          <div className="flex flex-wrap md:flex-row justify-start md:justify-end items-start gap-6 sm:gap-10 lg:gap-[90px] w-full md:w-auto">
            {/* Shopping */}
            <div className="flex flex-col items-start gap-3 sm:gap-5 min-w-[100px]">
              <h3 className="font-['Urbanist'] font-bold text-[13px] sm:text-[16px] uppercase tracking-wider">
                Shopping
              </h3>

              <ul className="text-[12px] sm:text-[14px] font-light text-black flex flex-col gap-1.5 sm:gap-2">
                <li>
                  <a href="#" className="hover:underline py-1 block">
                    Wishlist
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:underline py-1 block">
                    Cart
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:underline py-1 block">
                    Shop by Category
                  </a>
                </li>
              </ul>
            </div>

            {/* Information */}
            <div className="flex flex-col items-start gap-3 sm:gap-5 min-w-[110px]">
              <h3 className="font-['Urbanist'] font-bold text-[13px] sm:text-[16px] uppercase tracking-wider">
                Information
              </h3>

              <ul className="text-[12px] sm:text-[14px] font-light text-black flex flex-col gap-1.5 sm:gap-2">
                <li>
                  <a href="#" className="hover:underline py-1 block">
                    Track My Order
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:underline py-1 block">
                    Enquires
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:underline py-1 block">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Account */}
            <div className="flex flex-col items-start gap-3 sm:gap-5 min-w-[80px]">
              <h3 className="font-['Urbanist'] font-bold text-[13px] sm:text-[16px] uppercase tracking-wider">
                Account
              </h3>

              <ul className="text-[12px] sm:text-[14px] font-light text-black flex flex-col gap-1.5 sm:gap-2">
                <li>
                  <a href="#" className="hover:underline py-1 block">
                    My Account
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:underline py-1 block">
                    My Orders
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-black/20 pt-4 sm:pt-[30px] mt-4 sm:mt-[30px] flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-[30px]">
          {/* Copyright */}
          <div className="font-['Urbanist'] font-semibold text-[11px] sm:text-[16px] text-[#444] text-center md:text-left flex-1">
            Copyright ©{" "}
            <span className="text-[#FFB84D]">360D Soul Limited</span> 2025
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6 sm:gap-8 px-4 text-[#444]">
            <a href="#" className="hover:text-black transition-colors">
              <FaFacebookF size={16} className="sm:w-5 sm:h-5" />
            </a>

            <a href="#" className="hover:text-black transition-colors">
              <FaTwitter size={16} className="sm:w-5 sm:h-5" />
            </a>

            <a href="#" className="hover:text-black transition-colors">
              <FaInstagram size={16} className="sm:w-5 sm:h-5" />
            </a>
          </div>

          {/* Policy Links */}
          <div className="font-['Urbanist'] font-semibold text-[11px] sm:text-[16px] text-[#444] flex flex-wrap justify-center md:justify-end items-center gap-3 sm:gap-6 lg:gap-[50px] flex-1">
            <a href="#" className="hover:underline whitespace-nowrap">
              Terms
            </a>

            <a href="#" className="hover:underline whitespace-nowrap">
              Privacy
            </a>

            <a href="#" className="hover:underline whitespace-nowrap">
              Refund
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
