export default function NavLink() {
  return (
    <>
      <div className="">
        <ul className="flex text-xl max-xl:gap-0 xl:gap-10 items-center justify-center font-medium text-nav-black">
          <li className="relative px-6 py-3 text-black group">
            <a href="#" className="relative z-10">
              Home
            </a>
            <span
              className="absolute bottom-0 left-0 w-full h-[3px]
                   bg-gradient-to-r from-[#0040ff] to-[#002060]
                   transform scale-x-0 origin-left
                   transition-transform duration-300
                   group-hover:scale-x-100 rounded-sm"
            />
          </li>

          <li className="relative px-6 py-3 text-black group">
            <a href="#" className="relative z-10">
              Features
            </a>
            <span
              className="absolute bottom-0 left-0 w-full h-[3px]
                   bg-gradient-to-r from-[#0040ff] to-[#002060]
                   transform scale-x-0 origin-left
                   transition-transform duration-300
                   group-hover:scale-x-100 rounded-sm"
            />
          </li>
          <li className="relative px-6 py-3 text-black group">
            <a href="#" className="relative z-10">
              Pricing
            </a>
            <span
              className="absolute bottom-0 left-0 w-full h-[3px]
                   bg-gradient-to-r from-[#0040ff] to-[#002060]
                   transform scale-x-0 origin-left
                   transition-transform duration-300
                   group-hover:scale-x-100 rounded-sm"
            />
          </li>
          <li className="relative px-6 py-3 text-black group">
            <a href="#" className="relative z-10">
              Company
            </a>
            <span
              className="absolute bottom-0 left-0 w-full h-[3px]
                   bg-gradient-to-r from-[#0040ff] to-[#002060]
                   transform scale-x-0 origin-left
                   transition-transform duration-300
                   group-hover:scale-x-100 rounded-sm"
            />
          </li>
        </ul>
      </div>
    </>
  );
}

// import React, { useState } from "react";

// export default function NavLink() {
//   const [style, setStyle] = useState(true);

//   return (
//     <>
//       {style && (
//         <div className="hidden">
//           <ul className="flex text-xl max-xl:gap-0 xl:gap-10 items-center justify-center font-medium text-nav-black">
//             <li className="relative px-6 py-3 text-black group">
//               <a href="#" className="relative z-10">Home</a>
//               <span className="absolute bottom-0 left-0 w-full h-[3px]
//                 bg-gradient-to-r from-[#0040ff] to-[#002060]
//                 transform scale-x-0 origin-left
//                 transition-transform duration-300
//                 group-hover:scale-x-100 rounded-sm" />
//             </li>

//             <li className="relative px-6 py-3 text-black group">
//               <a href="#" className="relative z-10">Features</a>
//               <span className="absolute bottom-0 left-0 w-full h-[3px]
//                 bg-gradient-to-r from-[#0040ff] to-[#002060]
//                 transform scale-x-0 origin-left
//                 transition-transform duration-300
//                 group-hover:scale-x-100 rounded-sm" />
//             </li>

//             <li className="relative px-6 py-3 text-black group">
//               <a href="#" className="relative z-10">Pricing</a>
//               <span className="absolute bottom-0 left-0 w-full h-[3px]
//                 bg-gradient-to-r from-[#0040ff] to-[#002060]
//                 transform scale-x-0 origin-left
//                 transition-transform duration-300
//                 group-hover:scale-x-100 rounded-sm" />
//             </li>

//             <li className="relative px-6 py-3 text-black group">
//               <a href="#" className="relative z-10">Company</a>
//               <span className="absolute bottom-0 left-0 w-full h-[3px]
//                 bg-gradient-to-r from-[#0040ff] to-[#002060]
//                 transform scale-x-0 origin-left
//                 transition-transform duration-300
//                 group-hover:scale-x-100 rounded-sm" />
//             </li>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// }
