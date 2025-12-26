// 'use client';

// export default function PromoBanner() {
//   return (
//     <section className="bg-white px-6 py-12 md:px-20">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
//         {/* Logo and Tagline */}
//         <div className="flex flex-col items-start md:w-1/2">
//           <div className="flex items-center space-x-3 mb-4">
//             <div className="bg-blue-700 text-white font-bold text-2xl px-4 py-2 rounded">PW</div>
//             <span className="text-gray-700 text-lg font-medium">PropertyWiz</span>
//           </div>
//           <p className="text-sm text-gray-500 italic">Simply Smarter</p>
//         </div>

//         {/* Right Content */}
//         <div className="md:w-1/2 space-y-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
//             Invest with Confidence. Not Hope.
//           </h2>
//           <p className="text-gray-700 text-base">
//             Don't let your dream investment become a gamble based on assumptions and seller promises.
//             Know the complete facts before you commit your capital.
//           </p>
//           <p className="text-gray-700 text-base">
//             Contact us today for a free, no-obligation consultation and discover how our comprehensive
//             due diligence service protects your investment.
//           </p>
//           <a
//             href="tel:9930885007"
//             className="inline-block bg-blue-700 text-white px-6 py-3 rounded hover:bg-purple-800 transition-colors duration-200 font-medium"
//           >
//             For Consultation 9930885007
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }



'use client';

import { motion } from "framer-motion";

export default function PromoBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white px-6 py-12 md:px-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Logo and Tagline */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.03 }}
          className="flex flex-col items-start md:w-1/2 cursor-pointer"
        >
          <div className="flex items-center space-x-3 mb-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-blue-700 text-white font-bold text-2xl px-4 py-2 rounded shadow"
            >
              PW
            </motion.div>
            <span className="text-gray-700 text-lg font-medium">PropertyWiz</span>
          </div>
          <p className="text-sm text-gray-500 italic">Simply Smarter</p>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:w-1/2 space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Invest with Confidence. Not Hope.
          </h2>
          <p className="text-gray-700 text-base">
            Don't let your dream investment become a gamble based on assumptions and seller promises.
            Know the complete facts before you commit your capital.
          </p>
          <p className="text-gray-700 text-base">
            Contact us today for a free, no-obligation consultation and discover how our comprehensive
            due diligence service protects your investment.
          </p>

          <motion.a
            href="tel:9930885007"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-blue-700 text-white px-6 py-3 rounded hover:bg-purple-800 transition-colors duration-200 font-medium shadow"
          >
            For Consultation 9930885007
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
