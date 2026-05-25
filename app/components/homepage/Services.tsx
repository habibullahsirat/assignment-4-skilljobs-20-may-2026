// export default function Services() {
//   return (
//     <div className="flex justify-between gap-[10px] w-[80%] items-center mx-[10%] my-[32px] px-[8px] py-[16px]">
//       <div>
//         <div className="flex justify-between gap-[20px]">
//           <div>
//             <img src="/icon-delivery.png" alt="" />
//           </div>
//           <div>
//             <h2 className="font-[600] text-[16px]">Fast, Free Shipping</h2>
//             <p className="text-[#A9AAAC] text-[14px] font-[400]">
//               On order over BDT-2000
//             </p>
//             <div className="border-r-2 border-gray-400"></div>
//           </div>
//         </div>
//       </div>

//       <div>
//         <div>
//           <div className="flex justify-between gap-[20px]">
//             <div>
//               <img src="/icon-clock.png" alt="" />
//             </div>
//             <div>
//               <h2 className="font-[600] text-[16px]">Next Day Delivery</h2>
//               <p className="text-[#A9AAAC] text-[14px] font-[400]">
//                 Free - spend over BDT-20,000
//               </p>
//               <div className="border-r-2 border-r-gray-400"></div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div>
//         <div>
//           <div>
//             <div className="flex justify-between gap-[20px]">
//               <div>
//                 <img src="/icon-quality.png" alt="" />
//               </div>
//               <div>
//                 <h2 className="font-[600] text-[16px]">Quality Guarantee</h2>
//                 <p className="text-[#A9AAAC] text-[14px] font-[400]">
//                   We guarantee our proucts
//                 </p>
//                 <div className="border-r-2 border-r-gray-400"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Services() {
//   return (
//     <div className="flex justify-between w-[80%] mx-auto my-[32px] px-[8px] py-[16px]">
//       {/* Item 1 */}
//       <div className="flex items-center gap-[20px] pr-[30px] border-r border-gray-300">
//         <img src="/icon-delivery.png" alt="" />

//         <div>
//           <h2 className="font-[600] text-[16px]">Fast, Free Shipping</h2>

//           <p className="text-[#A9AAAC] text-[14px]">On order over BDT-2000</p>
//         </div>
//       </div>

//       {/* Item 2 */}
//       <div className="flex items-center gap-[20px] pr-[30px] border-r border-gray-300">
//         <img src="/icon-clock.png" alt="" />

//         <div>
//           <h2 className="font-[600] text-[16px]">Next Day Delivery</h2>

//           <p className="text-[#A9AAAC] text-[14px]">
//             Free - spend over BDT-20,000
//           </p>
//         </div>
//       </div>

//       {/* Item 3 */}
//       <div className="flex items-center gap-[20px]">
//         <img src="/icon-quality.png" alt="" />

//         <div>
//           <h2 className="font-[600] text-[16px]">Quality Guarantee</h2>

//           <p className="text-[#A9AAAC] text-[14px]">
//             We guarantee our products
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Services() {
//   return (
//     <div
//       className="
//         w-[90%]
//         lg:w-[80%]
//         mx-auto
//         my-[32px]
//         px-[12px]
//         py-[16px]
//         flex
//         flex-col
//         md:flex-row
//         justify-between
//         items-center
//         gap-[24px]
//       "
//     >
//       {/* Item 1 */}
//       <div className="flex items-center gap-[20px]">
//         <img
//           src="/icon-delivery.png"
//           alt="Delivery Icon"
//           className="w-[40px] h-[40px]"
//         />

//         <div>
//           <h2 className="font-[600] text-[16px]">Fast, Free Shipping</h2>

//           <p className="text-[#A9AAAC] text-[14px] font-[400]">
//             On order over BDT-2000
//           </p>
//         </div>

//         {/* Smaller right border */}
//         <div className="hidden md:block h-[45px] w-[1px] bg-gray-300 ml-[24px]"></div>
//       </div>

//       {/* Item 2 */}
//       <div className="flex items-center gap-[20px]">
//         <img
//           src="/icon-clock.png"
//           alt="Clock Icon"
//           className="w-[40px] h-[40px]"
//         />

//         <div>
//           <h2 className="font-[600] text-[16px]">Next Day Delivery</h2>

//           <p className="text-[#A9AAAC] text-[14px] font-[400]">
//             Free - spend over BDT-20,000
//           </p>
//         </div>

//         {/* Smaller right border */}
//         <div className="hidden md:block h-[45px] w-[1px] bg-gray-300 ml-[24px]"></div>
//       </div>

//       {/* Item 3 */}
//       <div className="flex items-center gap-[20px]">
//         <img
//           src="/icon-quality.png"
//           alt="Quality Icon"
//           className="w-[40px] h-[40px]"
//         />

//         <div>
//           <h2 className="font-[600] text-[16px]">Quality Guarantee</h2>

//           <p className="text-[#A9AAAC] text-[14px] font-[400]">
//             We guarantee our products
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

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
