// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <header>
//       {/* Top bar */}
//       <div className="bg-[#cc9933] flex justify-between items-center px-16 py-3 text-white">
//         <span className="font-bold text-2xl tracking-wider">WELDORK</span>
//         <div className="flex items-center space-x-8">
//           <span className="flex items-center space-x-2">
//             <span>📍</span>
//             <span>123 Street, Telangana, India</span>
//           </span>
//           <span className="flex items-center space-x-2">
//             <span>✉️</span>
//             <span>info@example.com</span>
//           </span>
//           <span className="flex items-center space-x-2">
//             <span>📞</span>
//             <span>+91 9934567890</span>
//           </span>
//           <span className="flex space-x-2">
//             <a href="#" className="bg-white text-[#cc9933] px-2 py-1 rounded-sm font-bold hover:bg-[#fff7e6]">f</a>
//             <a href="#" className="bg-white text-[#cc9933] px-2 py-1 rounded-sm font-bold hover:bg-[#fff7e6]">t</a>
//             <a href="#" className="bg-white text-[#cc9933] px-2 py-1 rounded-sm font-bold hover:bg-[#fff7e6]">in</a>
//           </span>
//         </div>
//       </div>
//       {/* Nav bar */}
//       <nav className="flex justify-between items-center bg-white px-16 pt-6 pb-2">
//         <ul className="flex space-x-8 font-semibold text-[1.15rem]">
//           <li>
//             <Link href="/" className="text-[#cc9933]">
//               HOME
//             </Link>
//           </li>
//           <li>
//             <Link href="/about" className="text-black hover:text-[#cc9933]">
//               ABOUT
//             </Link>
//           </li>
//           <li>
//             <Link href="/services" className="text-black hover:text-[#cc9933]">
//               SERVICES
//             </Link>
//           </li>
//           <li className="relative group">
//             <span className="text-black hover:text-[#cc9933] flex items-center">
//               PAGES <span className="ml-1">▼</span>
//             </span>
//           </li>
//           <li>
//             <Link href="/contact" className="text-black hover:text-[#cc9933]">
//               CONTACT
//             </Link>
//           </li>
//         </ul>
//         <button className="ml-12 bg-[#cc9933] text-white font-bold py-3 px-8">
//           GET A QUOTE
//         </button>
//       </nav>
//     </header>
//   );
// }



// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <header>
//       {/* Top bar */}
//       <div className="bg-[#0018F9] flex justify-between items-center px-16 py-3 text-white">
//         <span className="font-bold text-2xl tracking-wider">WELDORK</span>
//         <div className="flex items-center space-x-8">
//           <span className="flex items-center space-x-2">
//             <span>📍</span>
//             <span>123 Street, Telangana, India</span>
//           </span>
//           <span className="flex items-center space-x-2">
//             <span>✉️</span>
//             <span>info@example.com</span>
//           </span>
//           <span className="flex items-center space-x-2">
//             <span>📞</span>
//             <span>+91 9934567890</span>
//           </span>
//           <span className="flex space-x-2">
//             <a href="#" className="bg-white text-[#cc9933] px-2 py-1 rounded-sm font-bold hover:bg-[#fff7e6]">f</a>
//             <a href="#" className="bg-white text-[#cc9933] px-2 py-1 rounded-sm font-bold hover:bg-[#fff7e6]">t</a>
//             <a href="#" className="bg-white text-[#cc9933] px-2 py-1 rounded-sm font-bold hover:bg-[#fff7e6]">in</a>
//           </span>
//         </div>
//       </div>
//       {/* Nav bar */}
// <nav className="flex justify-between items-center bg-white px-10 py-4">
//   <ul className="flex space-x-6 font-medium text-[15px]">
//     <li>
//       <Link href="/" className="text-black hover:text-[#0018F9]">
//         HOME
//       </Link>
//     </li>
//     <li>
//       <Link href="/about" className="text-black hover:text-[#0018F9]">
//         ABOUT
//       </Link>
//     </li>
//     <li>
//       <Link href="/services" className="text-black hover:text-[#0018F9]">
//         SERVICES
//       </Link>
//     </li>
//     <li className="relative group">
//       <span className="text-black hover:text-[#cc9933] flex items-center">
//         PAGES <span className="ml-1 text-[12px]">▼</span>
//       </span>
//     </li>
//     <li>
//       <Link href="/contact" className="text-black hover:text-[#0018F9]">
//         CONTACT
//       </Link>
//     </li>
//   </ul>

//   <button className="ml-8 bg-[#0018F9] text-white font-medium py-2.5 px-6 rounded">
//     GET A QUOTE
//   </button>
// </nav>

//     </header>
//   );
// }



// import Link from 'next/link';
// import Image from 'next/image';
// import React from "react";

// import { FaEnvelope } from "react-icons/fa"; // ✅ ADD THIS


// export default function Navbar() {
//   return (
//     <header>
//       {/* Top bar */}
//       <div className="bg-[#0018F9] flex justify-between items-center px-20 py-1 text-white">
//         {/* Replace text with logo */}
//         <div className="flex items-center">
//           <Image
//             src="/logo.png"   // place your logo file in /public/logo.png
//             alt="Weldork Logo"
//             width={140}       // adjust width as needed
//             height={40}       // adjust height as needed
//             priority
//           />
//         </div>

//         <div className="flex items-center space-x-8">
//           <span className="flex items-center space-x-2">
//             <span>📍</span>
//             <span>123 Street, Telangana, India</span>
//           </span>
//           <span className="flex items-center space-x-2">
//             <span>✉️</span>
//             <span>info@example.com</span>
//           </span>
//           <span className="flex items-center space-x-2">
//             <span>📞</span>
//             <span>+91 9934567890</span>
//           </span>
//           <span className="flex space-x-2">
//             <a href="#" className="bg-white text-[#cc9933] px-2 py-1 rounded-sm font-bold hover:bg-[#fff7e6]">f</a>
//             <a href="#" className="bg-white text-[#cc9933] px-2 py-1 rounded-sm font-bold hover:bg-[#fff7e6]">t</a>
//             <a href="#" className="bg-white text-[#cc9933] px-2 py-1 rounded-sm font-bold hover:bg-[#fff7e6]">in</a>
//           </span>
//         </div>
//       </div>

//       {/* Nav bar */}
//       <nav className="flex justify-between items-center bg-white px-10 py-4">
//         <ul className="flex space-x-6 font-medium text-[15px]">
//           <li>
//             <Link href="/auditing" className="text-black hover:text-[#0018F9]">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link href="/process" className="text-black hover:text-[#0018F9]">
//               Our Process
//             </Link>
//           </li>
//           <li>
//             <Link href="/services" className="text-black hover:text-[#0018F9]">
//               Our Services
//             </Link>
//           </li>
          
// <li>
//             <Link href="/solutions" className="text-black hover:text-[#0018F9]">
//               Our Solution
//             </Link>
//           </li>


//           <li>
//             <Link href="/contact" className="text-black hover:text-[#0018F9]">
//               Contact Us
//             </Link>
//           </li>
//         </ul>

//         {/* <button className="ml-8 bg-[#0018F9] text-white font-medium py-2.5 px-6 rounded">
//           GET A QUOTE
//         </button> */}

// <Link
//             href="/report.pdf"
//             className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition transform hover:scale-105 shadow-lg"
//           >
//             <FaEnvelope className="mr-2" />
//             Download Report
//           </Link>


//       </nav>
//     </header>
//   );
// }


// import Link from 'next/link';
// import Image from 'next/image';
// import React from "react";
// import { FaEnvelope } from "react-icons/fa";

// // Import Poppins
// import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "600"],
// });

// export default function Navbar() {
//   return (
//     <header>
//       {/* Top bar */}
//       <div className="bg-white flex justify-between items-center px-20 py-0 text-blue h-20">
//         <div className="flex items-center">
//           <Image
//             src="/logo.png"
//             alt="Weldork Logo"
//             width={200}
//             height={30}
//             priority
//           />
//         </div>

//         <div className="flex items-center space-x-8">
//           <span className="flex items-center space-x-2">
//             <span>📍</span>
//             <span>123 Street, Telangana, India</span>
//           </span>
//           <span className="flex items-center space-x-2">
//             <span>✉️</span>
//             <span>info@example.com</span>
//           </span>
//           <span className="flex items-center space-x-2">
//             <span>📞</span>
//             <span>+91 9934567890</span>
//           </span>


          
//           {/* <span className="flex space-x-2">
//             <a href="#" className="bg-white text-[#cc9933] px-2 py-1 rounded-sm font-bold hover:bg-[#fff7e6]">f</a>
//             <a href="#" className="bg-white text-[#cc9933] px-2 py-1 rounded-sm font-bold hover:bg-[#fff7e6]">t</a>
//             <a href="#" className="bg-white text-[#cc9933] px-2 py-1 rounded-sm font-bold hover:bg-[#fff7e6]">in</a>
//           </span> */}
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <nav className="flex justify-between items-center bg-[#0018F9] px-10 py-4">
//         {/* Apply Poppins here */}
//         <ul className={`flex space-x-6 font-medium text-[15px] ${poppins.className}`}>
//           <li>
//             <Link href="/auditing" className="text-white hover:text-black">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link href="/process" className="text-white hover:text-black">
//               Our Process
//             </Link>
//           </li>
//           <li>
//             <Link href="/services" className="text-white hover:text-black">
//               Our Services
//             </Link>
//           </li>
//           <li>
//             <Link href="/solutions" className="text-white hover:text-black">
//               Our Solution
//             </Link>
//           </li>
//           <li>
//             <Link href="/contact" className="text-white hover:text-black">
//               Contact Us
//             </Link>
//           </li>
//         </ul>

//         <Link
//           href="/report.pdf"
//           className="flex items-center bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition transform hover:scale-105 shadow-lg"
//         >
//           <FaEnvelope className="mr-2" />
//           Download Report
//         </Link>
//       </nav>
//     </header>
//   );
// }


// import Link from 'next/link';
// import Image from 'next/image';
// import React from "react";
// import { FaEnvelope, FaDownload } from "react-icons/fa";
// import { Home, Workflow, Wrench, Puzzle, Phone } from "lucide-react";

// // Import Poppins
// import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "600"],
// });

// export default function Navbar() {
//   return (
//     <header>
//       {/* Top bar */}
//       <div className="bg-white flex justify-between items-center px-20 py-0 text-blue h-20">
//         <div className="flex items-center">
//           <Image
//             src="/logo.png"
//             alt="Weldork Logo"
//             width={200}
//             height={30}
//             priority
//           />
//         </div>

//         <div className="flex items-center space-x-8">

    

//           {/* Email */}
//           <span className="flex items-center space-x-2">
//             <span>✉️</span>
//             <span>info@example.com</span>
//           </span>

//           {/* Phone */}
//           <span className="flex items-center space-x-2">
//             <span>📞</span>
//             <span>+91 9934567890</span>
//           </span>

//           {/* ⭐ Download Brochure Button */}
//           <Link
//             href="/brochure.pdf"
//             className="flex items-center bg-[#0018F9] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition transform hover:scale-105 shadow-md"
//           >
//             <FaDownload className="mr-2" />
//              Brochure
//           </Link>
//         </div>
//       </div>

// {/* Main Navbar */}
// <nav className="flex justify-between items-center bg-[#0018F9] px-10 py-4">
//   <ul className={`flex space-x-6 font-medium text-[15px] ${poppins.className}`}>
    
//     <li>
//       <Link href="/auditing" className="text-white hover:text-black flex items-center gap-2 transition-all">
//         <Home size={16} /> Home
//       </Link>
//     </li>

//     <li>
//       <Link href="/process" className="text-white hover:text-black flex items-center gap-2 transition-all">
//         <Workflow size={16} /> Our Process
//       </Link>
//     </li>

//     <li>
//       <Link href="/services" className="text-white hover:text-black flex items-center gap-2 transition-all">
//         <Wrench size={16} /> Our Services
//       </Link>
//     </li>

//     <li>
//       <Link href="/solutions" className="text-white hover:text-black flex items-center gap-2 transition-all">
//         <Puzzle size={16} /> Our Solution
//       </Link>
//     </li>

//     <li>
//       <Link href="/contact" className="text-white hover:text-black flex items-center gap-2 transition-all">
//         <Phone size={16} /> Contact Us
//       </Link>
//     </li>

//   </ul>

//         <Link
//           href="/report.pdf"
//           className="flex items-center bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition transform hover:scale-105 shadow-lg"
//         >
//           <FaEnvelope className="mr-2" />
//           Download Report
//         </Link>

        
//       </nav>
//     </header>
//   );
// }


"use client";

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from "react";
import { FaEnvelope, FaDownload } from "react-icons/fa";
import { Home, Workflow, Wrench, Puzzle, Phone, Menu, X } from "lucide-react";

// Import Poppins
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">

      {/* Top bar */}
      <div className="bg-white flex justify-between items-center 
      px-4 sm:px-10 md:px-20 py-2 text-blue h-20">

        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Weldork Logo"
            width={180}
            height={30}
            priority
          />
        </div>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center space-x-8">

          {/* Email */}
          <span className="flex items-center space-x-2">
            <span>✉️</span>
            <span>info@example.com</span>
          </span>

          {/* Phone */}
          <span className="flex items-center space-x-2">
            <span>📞</span>
            <span>+91 9390885007</span>
          </span>

          {/* Brochure Button */}
          <Link
            href="/brochure.pdf"
            className="flex items-center bg-[#0018F9] text-white px-4 py-2 rounded-md 
            hover:bg-blue-700 transition transform hover:scale-105 shadow-md"
          >
            <FaDownload className="mr-2" />
            Brochure
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden text-[#0018F9] text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>

      </div>

      {/* Main Navbar (desktop only) */}
      <nav className="hidden md:flex justify-between items-center bg-[#0018F9] px-10 py-4">

        <ul className={`flex space-x-6 font-medium text-[15px] ${poppins.className}`}>

          <li>
            <Link href="/auditing" className="text-white hover:text-black flex items-center gap-2 transition-all">
              <Home size={16} /> Home
            </Link>
          </li>

          <li>
            <Link href="/process" className="text-white hover:text-black flex items-center gap-2 transition-all">
              <Workflow size={16} /> Our Process
            </Link>
          </li>

          <li>
            <Link href="/services" className="text-white hover:text-black flex items-center gap-2 transition-all">
              <Wrench size={16} /> Our Services
            </Link>
          </li>

          <li>
            <Link href="/solutions" className="text-white hover:text-black flex items-center gap-2 transition-all">
              <Puzzle size={16} /> Our Solution
            </Link>
          </li>

          <li>
            <Link href="/contact" className="text-white hover:text-black flex items-center gap-2 transition-all">
              <Phone size={16} /> Contact Us
            </Link>
          </li>

        </ul>

        <Link
          href="/report.pdf"
          className="flex items-center bg-blue-900 text-white px-4 py-2 rounded-md 
          hover:bg-blue-700 transition transform hover:scale-105 shadow-lg"
        >
          <FaEnvelope className="mr-2" />
          Download Report
        </Link>

      </nav>

      {/* ⭐ Mobile Menu (visible only when open) */}
      {open && (
        <div className="md:hidden bg-[#0018F9] text-white px-6 py-4 space-y-4">

          <Link href="/auditing" className="block hover:text-black transition-all">
            <Home size={16} className="inline mr-2" /> Home
          </Link>

          <Link href="/process" className="block hover:text-black transition-all">
            <Workflow size={16} className="inline mr-2" /> Our Process
          </Link>

          <Link href="/services" className="block hover:text-black transition-all">
            <Wrench size={16} className="inline mr-2" /> Our Services
          </Link>

          <Link href="/solutions" className="block hover:text-black transition-all">
            <Puzzle size={16} className="inline mr-2" /> Our Solution
          </Link>

          <Link href="/contact" className="block hover:text-black transition-all">
            <Phone size={16} className="inline mr-2" /> Contact Us
          </Link>

          <Link
            href="/report.pdf"
            className="flex items-center justify-center bg-blue-900 text-white px-4 py-2 rounded-md 
            hover:bg-blue-700 transition transform hover:scale-105 shadow-lg"
          >
            <FaEnvelope className="mr-2" />
            Download Report
          </Link>

        </div>
      )}

    </header>
  );
}
