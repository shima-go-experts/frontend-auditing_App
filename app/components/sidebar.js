// "use client";

// import React from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { 
//   Briefcase, 
//   Settings, 
//   Cpu, 
//   Users, 
//   ChevronRight 
// } from 'lucide-react';

// const Sidebar = () => {
//   const pathname = usePathname();

//   const navigation = [
//     { name: 'Solution Management', href: '/solutionmanage', icon: Briefcase },
//     { name: 'Service Management', href: '/servicemanage', icon: Settings },
//     { name: 'Process Management', href: '/processemanage', icon: Cpu },
//     { name: 'Contact Management', href: '/contactmanage', icon: Users },
//   ];

//   return (
//     <aside className="flex flex-col w-72 h-screen bg-white border-r border-gray-200">
//       {/* Logo Section */}
//       <div className="flex items-center h-20 px-6 border-b border-gray-100">
//         <div className="w-8 h-8 bg-indigo-600 rounded-lg mr-3" />
//         <span className="text-xl font-bold text-gray-800 tracking-tight">EnterpriseOS</span>
//       </div>

//       {/* Navigation Links */}
//       <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
//         {navigation.map((item) => {
//           const isActive = pathname === item.href;
//           return (
//             <Link
//               key={item.name}
//               href={item.href}
//               className={`
//                 group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200
//                 ${isActive 
//                   ? 'bg-indigo-50 text-indigo-700' 
//                   : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}
//               `}
//             >
//               <div className="flex items-center gap-3">
//                 <item.icon size={20} className={isActive ? 'text-indigo-600' : 'text-gray-400 group-hover:text-gray-600'} />
//                 <span className="text-sm font-semibold">{item.name}</span>
//               </div>
//               {isActive && <ChevronRight size={16} className="text-indigo-600" />}
//             </Link>
//           );
//         })}
//       </nav>

//       {/* Footer / User Profile */}
//       <div className="p-4 bg-gray-50">
//         <button className="flex items-center w-full gap-3 p-2 transition-opacity hover:opacity-80">
//           <img 
//             src="https://ui-avatars.com/api/?name=Admin+User&background=6366f1&color=fff" 
//             alt="User" 
//             className="w-10 h-10 rounded-full"
//           />
//           <div className="text-left">
//             <p className="text-sm font-bold text-gray-900 leading-none">Admin User</p>
//             <p className="text-xs text-gray-500 mt-1">admin@company.com</p>
//           </div>
//         </button>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;


// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import {
//   Briefcase,
//   Settings,
//   Cpu,
//   Users,
//   ChevronRight,
// } from "lucide-react";

// const Sidebar = () => {
//   const pathname = usePathname();

//   const navigation = [
//     {name: "Dashboard",href:"/dashboard"},
//     { name: "Solution Management", href: "/solutionmanage", icon: Briefcase },
//     { name: "Service Management", href: "/servicemanage", icon: Settings },
//     { name: "Process Management", href: "/processemanage", icon: Cpu },
//     { name: "Contact Management", href: "/contactmanage", icon: Users },
//   ];

//   return (
//     <aside className="flex flex-col w-72 h-screen bg-[#1b2f74] text-white shadow-xl">
//       {/* LOGO SECTION */}
//       <div className="flex items-center h-22 px-8 border-b border-white/10">
//         <Image
//           src="/logo.png"   // <-- your logo here
//           alt="Company Logo"
//           width={190}
//           height={80}
//           priority
//           className="object-contain"
//         />
//       </div>

//       {/* NAVIGATION */}
//       <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
//         {navigation.map((item) => {
//           const isActive = pathname === item.href;

//           return (
//             <Link
//               key={item.name}
//               href={item.href}
//               className={`
//                 group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200
//                 ${
//                   isActive
//                     ? "bg-white text-[#1b2f74] shadow-sm"
//                     : "text-white/70 hover:bg-white/10 hover:text-white"
//                 }
//               `}
//             >
//               <div className="flex items-center gap-3">
//                 <item.icon
//                   size={20}
//                   className={
//                     isActive
//                       ? "text-[#1b2f74]"
//                       : "text-white/60 group-hover:text-white"
//                   }
//                 />
//                 <span className="text-sm font-semibold">
//                   {item.name}
//                 </span>
//               </div>

//               {isActive && (
//                 <ChevronRight size={16} className="text-[#1b2f74]" />
//               )}
//             </Link>
//           );
//         })}
//       </nav>

//       {/* FOOTER / PROFILE */}
//       <div className="p-4 border-t border-white/10">
//         <button className="flex items-center w-full gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition">
//           <img
//             src="https://ui-avatars.com/api/?name=Admin+User&background=1b2f74&color=fff"
//             alt="User"
//             className="w-10 h-10 rounded-full border border-white/20"
//           />
//           <div className="text-left">
//             <p className="text-sm font-bold leading-none">Admin User</p>
//             <p className="text-xs text-white/70 mt-1">
//               admin@company.com
//             </p>
//           </div>
//         </button>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;


// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import {
//   Briefcase,
//   Settings,
//   Cpu,
//   Users,
//   ChevronRight,
//   LayoutDashboard,
//   Sliders,
// } from "lucide-react";

// const Sidebar = () => {
//   const pathname = usePathname();

//   const navigation = [
//     { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
//     { name: "Solution Management", href: "/solutionmanage", icon: Briefcase },
//     { name: "Service Management", href: "/servicemanage", icon: Settings },
//     { name: "Process Management", href: "/processemanage", icon: Cpu },
//     { name: "Contact Management", href: "/contactmanage", icon: Users },
//     { name: "Settings", href: "/setting", icon: Sliders },
//   ];

//   return (
//     <aside
//       className="
//         fixed top-0 left-0
//         w-72 h-screen
//         bg-[#1b2f74] text-white
//         shadow-xl
//         flex flex-col
//         z-40
//         overflow-hidden
//       "
//     >
//       {/* LOGO */}
//       <div className="flex items-center px-4 py-1 border-b border-white/10 shrink-0">
//         <Image
//           src="/logo.png"
//           alt="Company Logo"
//           width={190}
//           height={100}
//           priority
//           className="object-contain"
//         />
//       </div>

//       {/* MENU */}
//       <nav className="flex-1 px-4 py-8 space-y-3">
//         {navigation.map((item) => {
//           const isActive = pathname === item.href;

//           return (
//             <Link
//               key={item.name}
//               href={item.href}
//               className={`
//                 group flex items-center justify-between
//                 px-5 py-4 rounded-xl transition-all duration-200
//                 ${
//                   isActive
//                     ? "bg-white text-[#1b2f74] shadow-sm"
//                     : "text-white/70 hover:bg-white/10 hover:text-white"
//                 }
//               `}
//             >
//               <div className="flex items-center gap-4">
//                 <item.icon
//                   size={20}
//                   className={
//                     isActive
//                       ? "text-[#1b2f74]"
//                       : "text-white/60 group-hover:text-white"
//                   }
//                 />
//                 <span className="text-sm font-semibold">
//                   {item.name}
//                 </span>
//               </div>

//               {isActive && (
//                 <ChevronRight
//                   size={16}
//                   className="text-[#1b2f74]"
//                 />
//               )}
//             </Link>
//           );
//         })}
//       </nav>

//       {/* PROFILE */}
//       <div className="p-4 border-t border-white/10 shrink-0">
//         <button className="flex items-center w-full gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition">
//           <img
//             src="https://ui-avatars.com/api/?name=Admin+User&background=1b2f74&color=fff"
//             alt="User"
//             className="w-10 h-10 rounded-full border border-white/20"
//           />
//           <div className="text-left">
//             <p className="text-sm font-bold">Admin User</p>
//             <p className="text-xs text-white/70">admin@company.com</p>
//           </div>
//         </button>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

// components/Sidebar.jsx


// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { Briefcase, Settings, Cpu, Users, ChevronRight, LayoutDashboard, Sliders } from "lucide-react";

// const Sidebar = () => {
//   const pathname = usePathname();

//   const navigation = [
//     { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
//     { name: "Solution Management", href: "/solutionmanage", icon: Briefcase },
//     { name: "Service Management", href: "/servicemanage", icon: Settings },
//     { name: "Process Management", href: "/processemanage", icon: Cpu },
//     { name: "Contact Management", href: "/contactmanage", icon: Users },
//     { name: "Settings", href: "/setting", icon: Sliders },
//   ];

//   return (
//     <aside className="fixed top-0 left-0 w-72 h-screen bg-[#1b2f74] text-white shadow-xl flex flex-col overflow-y-auto z-40">
//       {/* Logo */}
//       <div className="flex items-center px-2 py-1 border-b border-white/10">
//         <Image src="/logo.png" alt="Logo" width={170} height={90} className="object-contain" />
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 px-4 py-8 space-y-3">
//         {navigation.map((item) => {
//           const isActive = pathname === item.href;
//           return (
//             <Link
//               key={item.name}
//               href={item.href}
//               className={`flex items-center justify-between px-5 py-4 rounded-xl transition-all duration-200 ${
//                 isActive ? "bg-white text-[#1b2f74]" : "text-white/70 hover:bg-white/10 hover:text-white"
//               }`}
//             >
//               <div className="flex items-center gap-4">
//                 <item.icon size={20} className={isActive ? "text-[#1b2f74]" : "text-white/60"} />
//                 <span className="text-sm font-semibold">{item.name}</span>
//               </div>
//               {isActive && <ChevronRight size={16} className="text-[#1b2f74]" />}
//             </Link>
//           );
//         })}
//       </nav>

//       {/* Profile */}
//       <div className="p-4 border-t border-white/10">
//         <button className="flex items-center w-full gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition">
//           <img
//             src="https://ui-avatars.com/api/?name=Admin+User&background=1b2f74&color=fff"
//             alt="User"
//             className="w-10 h-10 rounded-full border border-white/20"
//           />
//           <div className="text-left">
//             <p className="text-sm font-bold">Admin User</p>
//             <p className="text-xs text-white/70">admin@company.com</p>
//           </div>
//         </button>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Briefcase,
  Settings,
  Cpu,
  Users,
  ChevronRight,
  LayoutDashboard,
  Sliders,
} from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Solution Management", href: "/solutionmanage", icon: Briefcase },
    { name: "Service Management", href: "/servicemanage", icon: Settings },
    { name: "Process Management", href: "/processemanage", icon: Cpu },
    { name: "Contact Management", href: "/contactmanage", icon: Users },
    { name: "Settings", href: "/setting", icon: Sliders },
  ];

  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-[#1b2f74] text-white flex flex-col shadow-xl z-40">
      
      {/* LOGO (clean & left-aligned) */}
      <div className="h-20 flex items-center px-6">
        <Image
          src="/logo.png"
          alt="Logo"
          width={175}
          height={78}
          priority
          className="object-contain"
        />
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 px-4 py-6 space-y-3 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-white text-[#1b2f74]"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon
                  size={18}
                  className={isActive ? "text-[#1b2f74]" : "text-white/60"}
                />
                <span className="text-sm font-medium">
                  {item.name}
                </span>
              </div>

              {isActive && (
                <ChevronRight size={16} className="text-[#1b2f74]" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* PROFILE */}
      <div className="p-4">
        <button className="flex items-center w-full gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition">
          <img
            src="https://ui-avatars.com/api/?name=Admin+User&background=1b2f74&color=fff"
            alt="User"
            className="w-9 h-9 rounded-full border border-white/20"
          />
          <div className="text-left leading-tight">
            <p className="text-sm font-semibold">Admin User</p>
            <p className="text-xs text-white/70">admin@company.com</p>
          </div>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
