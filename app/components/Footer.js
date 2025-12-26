// 'use client';

// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
// import { FiSend } from 'react-icons/fi';

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white px-6 py-12 md:px-20">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
//         {/* Left Message & Social */}
//         <div className="md:col-span-1 space-y-6">
//           <p className="text-lg font-medium leading-relaxed">
//             We are committed to helping you succeed, and we will work with you every step of the way.
//           </p>
//           <div className="flex space-x-4 text-white text-xl">
//             <FaFacebookF className="hover:text-yellow-500 transition-colors duration-200 cursor-pointer" />
//             <FaTwitter className="hover:text-yellow-500 transition-colors duration-200 cursor-pointer" />
//             <FaLinkedinIn className="hover:text-yellow-500 transition-colors duration-200 cursor-pointer" />
//             <FaInstagram className="hover:text-yellow-500 transition-colors duration-200 cursor-pointer" />
//           </div>
//         </div>

//         {/* Services */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">Services</h3>
//           <ul className="space-y-2 text-sm">
//             {['Home', 'Services', 'Process', 'Report', 'Contact'].map((item) => (
//               <li key={item} className="hover:text-yellow-500 cursor-pointer transition-colors duration-200">
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Company */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">Company</h3>
//           <ul className="space-y-2 text-sm">
//             {['Blog', 'FAQs', 'Team', 'Pricing'].map((item) => (
//               <li key={item} className="hover:text-yellow-500 cursor-pointer transition-colors duration-200">
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Newsletter */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
//           <p className="text-sm mb-4">Subscribe for the latest news and updates.</p>
//           <form className="flex items-center border border-white rounded overflow-hidden">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="bg-transparent px-4 py-2 text-sm w-full outline-none placeholder-white"
//             />
//             <button type="submit" className="bg-yellow-500 p-2 hover:bg-yellow-600 transition-colors duration-200">
//               <FiSend className="text-white" />
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//         <p>© 2023 PropertyME. All Rights Reserved.</p>
//         <div className="space-y-1">
//           <p>Phone: +123-456-7890</p>
//           <p>Email: Propertyme@mail.com</p>
//           <p>Address: 123 Hydrabank, Hyderabad, India</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

'use client';

import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12 md:px-20 relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-black pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-12 z-10">

        {/* LEFT — Logo + Message + Social */}
        <div className="space-y-6 transform hover:translate-y-1 transition-all duration-300">

          {/* LOGO */}
          <div className="flex items-center">
            <Image
              src="/logo.png"
              width={200}
              height={80}
              alt="Logo"
              className="drop-shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            We are committed to helping you succeed with complete confidence,
            supporting you every step of your investment journey.
          </p>

          {/* SOCIAL */}
          <div className="flex space-x-4 text-xl">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
              <div
                key={i}
                className="p-3 bg-gray-800 rounded-full hover:bg-yellow-500 hover:text-black 
                transition-all duration-300 cursor-pointer hover:scale-110 shadow-md"
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>

        {/* SERVICES */}
        <div className="space-y-4 transform hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-xl font-semibold">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {['Home', 'Services', 'Process', 'Report', 'Contact'].map((item) => (
              <li
                key={item}
                className="hover:text-yellow-500 cursor-pointer transition-colors duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* COMPANY INFORMATION */}
        <div className="space-y-4 transform hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-xl font-semibold">Company</h3>

          <ul className="space-y-2 text-sm text-gray-300">
            <li>Phone: +91 9390885007</li>
            <li>Email: Propertyme@mail.com</li>
            <li>Address: 123 Hydrabank, Hyderabad, India</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="space-y-4 transform hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-xl font-semibold">Newsletter</h3>
          <p className="text-sm text-gray-300">
            Subscribe for the latest updates and insights.
          </p>

          <form className="flex items-center border border-gray-600 rounded-lg overflow-hidden bg-gray-800">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-4 py-3 text-sm w-full outline-none placeholder-gray-400"
            />
            <button
              type="submit"
              className="bg-yellow-500 px-4 py-3 hover:bg-yellow-600 transition-colors duration-300"
            >
              <FiSend className="text-black text-lg" />
            </button>
          </form>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative mt-12 border-t border-gray-700 pt-6 text-sm text-gray-400 flex flex-col 
      md:flex-row justify-between items-start md:items-center gap-4 z-10">
        <p>© 2025 PropertyME. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
