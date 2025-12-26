// import {
//   HomeModernIcon,
//   SparklesIcon,
//   BuildingOfficeIcon,
//   SunIcon,
//   PaintBrushIcon,
//   SwatchIcon,
// } from '@heroicons/react/24/outline';

// export default function CategoriesSection() {
//   const categories = [
//     { label: 'Complete Ownership History', icon: HomeModernIcon },
//     { label: 'Building Plan Approval', icon: SparklesIcon },
//     { label: 'Zoning Compliance', icon: BuildingOfficeIcon },
//     { label: 'Clear Title Status', icon: SunIcon },
//     { label: 'Land Classification', icon: SwatchIcon },
//     { label: 'Future Risk Assesment', icon: PaintBrushIcon },
//   ];

//   return (
//     <section className="bg-white py-20 px-6 text-gray-800">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
//             *Significant Investments*
//           </p>
//           <h2 className="text-3xl md:text-4xl font-semibold">
//             The Hidden <span className="font-bold">Risks Of Property </span> Investment
//           </h2>
//         </div>

//         {/* Horizontal Row of Cards */}
//         <div className="overflow-x-auto">
//           <div className="flex gap-6 min-w-max">
//             {categories.map((cat, index) => {
//               const Icon = cat.icon;
//               return (
//                 <div
//                   key={index}
//                   className="flex flex-col items-center justify-center w-44 h-52 rounded-xl border border-gray-200 bg-yellow-600 text-white font-semibold transition-colors duration-300 shrink-0 hover:bg-yellow-500"
//                 >
//                   <Icon className="w-10 h-10 mb-3" />
//                   <span className="text-sm text-center px-2">{cat.label}</span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="mt-10 text-center">
//           <a href="#" className="text-yellow-600 font-medium hover:underline">
//             View All Categories
//           </a>
//           <p className="mt-2 text-sm text-gray-500">
//             Don't Risk Your Life Savings On Uncertainity and Assumptions
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";

// import {
//   HomeModernIcon,
//   SparklesIcon,
//   BuildingOfficeIcon,
//   SunIcon,
//   PaintBrushIcon,
//   SwatchIcon,
// } from '@heroicons/react/24/outline';

// export default function CategoriesSection() {
//   const [shadow, setShadow] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setShadow(true);
//       } else {
//         setShadow(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section
//       className={`
//         relative py-20 px-6 text-gray-800 overflow-hidden
//         bg-gradient-to-br from-white via-[#f9f9f9] to-gray-100
//         animate-[gradientMove_6s_ease_infinite]
//         transition-shadow duration-500
//         ${shadow ? "shadow-2xl shadow-gray-300/40" : "shadow-none"}
//       `}
//     >
//       {/* Dotted Pattern Overlay */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[length:20px_20px] opacity-20 pointer-events-none" />

//       {/* Glassmorphism Block */}
//       <div className="absolute inset-0 backdrop-blur-[6px] bg-white/30 pointer-events-none" />

//       {/* Diagonal Glossy Shine */}
//       <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/20 rotate-45 blur-3xl opacity-30" />
//       <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/10 rotate-45 blur-2xl opacity-20" />

//       <style>{`
//         @keyframes gradientMove {
//           0% { background-position: 0% 0%; }
//           50% { background-position: 100% 100%; }
//           100% { background-position: 0% 0%; }
//         }
//       `}</style>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
//             *Significant Investments*
//           </p>
//           <h2 className="text-3xl md:text-4xl font-semibold">
//             The Hidden <span className="font-bold">Risks Of Property </span> Investment
//           </h2>
//         </div>

//         {/* Horizontal Row of Cards */}
//         <div className="overflow-x-auto">
//           <div className="flex gap-6 min-w-max">
//             {[
//               { label: 'Complete Ownership History', icon: HomeModernIcon },
//               { label: 'Building Plan Approval', icon: SparklesIcon },
//               { label: 'Zoning Compliance', icon: BuildingOfficeIcon },
//               { label: 'Clear Title Status', icon: SunIcon },
//               { label: 'Land Classification', icon: SwatchIcon },
//               { label: 'Future Risk Assesment', icon: PaintBrushIcon },
//             ].map((cat, index) => {
//               const Icon = cat.icon;
//               return (
//                 <div
//                   key={index}
//                   className="
//                     flex flex-col items-center justify-center
//                     w-44 h-52 rounded-xl border border-gray-200
//                     bg-yellow-600 text-white font-semibold
//                     transition-all duration-300 shrink-0
//                     hover:bg-yellow-500 hover:scale-105
//                     shadow-md
//                   "
//                 >
//                   <Icon className="w-10 h-10 mb-3" />
//                   <span className="text-sm text-center px-2">{cat.label}</span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="mt-10 text-center">
//           <a href="#" className="text-yellow-600 font-medium hover:underline">
//             View All Categories
//           </a>
//           <p className="mt-2 text-sm text-gray-500">
//             Don't Risk Your Life Savings On Uncertainity and Assumptions
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import {
  HomeModernIcon,
  SparklesIcon,
  BuildingOfficeIcon,
  SunIcon,
  PaintBrushIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";

export default function CategoriesSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when component becomes visible
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { label: "Complete Ownership History", icon: HomeModernIcon },
    { label: "Building Plan Approval", icon: SparklesIcon },
    { label: "Zoning Compliance", icon: BuildingOfficeIcon },
    { label: "Clear Title Status", icon: SunIcon },
    { label: "Land Classification", icon: SwatchIcon },
    { label: "Future Risk Assessment", icon: PaintBrushIcon },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white relative">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
            *Significant Investments*
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
            The Hidden{" "}
            <span className="text-yellow-600 drop-shadow-sm">Risks of Property</span>{" "}
            Investment
          </h2>
        </div>

        {/* CARD GRID */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div
                key={i}
                className="
                  backdrop-blur-md bg-white/70 border border-gray-200
                  rounded-2xl p-6 shadow-lg hover:shadow-2xl
                  transition-all duration-300 cursor-pointer group
                  hover:-translate-y-2 overflow-hidden relative
                "
              >
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-200/40 to-yellow-600/20 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"></div>

                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <Icon className="w-14 h-14 text-yellow-600 group-hover:scale-110 transition duration-300" />
                </div>

                {/* Text */}
                <p className="text-lg font-semibold text-gray-800 text-center">
                  {cat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* FOOTER */}
        <div
          className={`mt-12 text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="#"
            className="text-yellow-600 font-semibold hover:underline tracking-wide"
          >
            View All Categories
          </a>
          <p className="mt-3 text-sm text-gray-500">
            Don’t risk your life savings on uncertainty and assumptions.
          </p>
        </div>
      </div>
    </section>
  );
}
