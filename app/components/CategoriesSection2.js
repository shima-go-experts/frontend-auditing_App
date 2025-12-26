// import Image from 'next/image';

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-gray-50 text-gray-800">
//       <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12">
        
//         {/* Single Image on the Left */}
//         <div className="flex-1 rounded-lg overflow-hidden shadow-lg">
//           <Image
//             src="/housedes2.jpg"
//             alt="Modern-style house with pool"
//             width={600}
//             height={100}
//             className="object-cover w-full h-full"
//           />
//         </div>

//         {/* Text Content on the Right */}
//         <div className="flex-1">
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black-900">
//             Boost Your Property Decisions with Real Estate Expertise & Conversion-Driven Insights.
//           </h1>
//           <p className="mt-6 text-lg text-gray-700">
//             We help buyers, investors, and property owners make confident decisions through professional due diligence, legal verification, and real-estate risk assessment. Our expert team ensures every document is checked, every detail is validated, and every investment is protected.
//           </p>
//           <button className="mt-8 px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-mustard transition">
//             Learn More
//           </button>
//         </div>
//       </section>
//     </main>
//   );
// }



// import Image from 'next/image';

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-gray-50 text-gray-800">
//       <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12">
        
//         {/* Image Section */}
//         <div className="flex-1 rounded-lg overflow-hidden shadow-lg">
//           <Image
//             src="/housedes2.jpg"
//             alt="Modern-style house with pool"
//             width={600}
//             height={100}
//             className="object-cover w-full h-full"
//           />
//         </div>

//         {/* Text Section */}
//         <div className="flex-1">
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black-900">
//             Boost Your Property Decisions with Real Estate Expertise & Conversion-Driven Insights.
//           </h1>
//           <p className="mt-6 text-lg text-gray-700">
//             We help buyers, investors, and property owners make confident decisions through professional due diligence, legal verification, and real-estate risk assessment. Our expert team ensures every document is checked, every detail is validated, and every investment is protected.
//           </p>
//           <button className="mt-8 px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-mustard transition">
//             Learn More
//           </button>

//           {/* Impact Cards */}
//           <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {/* Card 1 */}
//             <div className="bg-white border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition">
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">🌍 Global Reach</h3>
//               <p className="text-3xl font-bold text-mustard">85+</p>
//               <p className="text-sm text-gray-600 mt-1">Offices Worldwide</p>
//             </div>

//             {/* Card 2 */}
//             <div className="bg-white border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition">
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">🏢 Local Expertise</h3>
//               <p className="text-3xl font-bold text-mustard">3000+</p>
//               <p className="text-sm text-gray-600 mt-1">Employees</p>
//             </div>

//             {/* Card 3 */}
//             <div className="bg-white border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition">
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">📈 Our Impact</h3>
//               <p className="text-3xl font-bold text-mustard">3K+</p>
//               <p className="text-sm text-gray-600 mt-1">Projects Done</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// components/DueDiligencePromo.tsx


// export default function DueDiligencePromo() {
//   return (
//     <section className="bg-gray-50 px-6 md:px-20 lg:px-32 pt-10 pb-16">
//       {/* Heading */}
//       <div className="max-w-6xl mx-auto text-center md:text-left mb-10">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
//           Our Solution: <span className="text-yellow-600">The 360° Due Diligence Audit</span>
//         </h2>
//       </div>

//       {/* Content Grid */}
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
//         {/* Text Block */}
//         <div className="space-y-6">
//           <p className="text-lg text-gray-700 leading-relaxed">
//             We provide a complete, end-to-end Property Due Diligence Service designed to protect you from legal pitfalls and technical complications that could jeopardize your investment.
//           </p>
//           <p className="text-lg text-gray-700 leading-relaxed">
//             Our multi-disciplinary team combines seasoned real estate attorneys, licensed civil engineers, and certified architects who meticulously investigate every aspect of the property transaction.
//           </p>
//           <p className="text-lg text-gray-700 leading-relaxed">
//             We uncover the hard facts others miss, identify all potential risks before they become problems, and empower you to invest with total peace of mind and confidence.
//           </p>
//         </div>

//         {/* Image Block */}
//         <div className="relative mt-6 md:mt-0">
//           <div className="h-104 w-full rounded-lg overflow-hidden shadow-lg">
//             <img
//               src="/housedes.jpg"
//               alt="Due Diligence Team"
//               className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
//             />
//           </div>
//           <div className="absolute top-4 left-4 bg-yellow-600 text-white px-3 py-1 text-sm font-semibold rounded shadow">
//             Expert Team
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



export default function DueDiligencePromo() {
  return (
    <section
      className="
        bg-gray-50 px-6 md:px-20 lg:px-32 pt-10 pb-16 
        opacity-0 translate-y-6 animate-fadeUp
      "
    >

      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp {
          animation: fadeUp 0.9s ease-out forwards;
        }

        @keyframes floatImg {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }
        .float-animation {
          animation: floatImg 4s ease-in-out infinite;
        }
      `}</style>

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center md:text-left mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug transition-all duration-300 hover:text-yellow-600 hover:scale-[1.01]">
          Our Solution:{" "}
          <span className="text-yellow-600 hover:text-yellow-700 transition">The 360° Due Diligence Audit</span>
        </h2>
      </div>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* Text Block */}
        <div className="space-y-6">
          {[
            "We provide a complete, end-to-end Property Due Diligence Service designed to protect you from legal pitfalls and technical complications that could jeopardize your investment.",
            "Our multi-disciplinary team combines seasoned real estate attorneys, licensed civil engineers, and certified architects who meticulously investigate every aspect of the property transaction.",
            "We uncover the hard facts others miss, identify all potential risks before they become problems, and empower you to invest with total peace of mind and confidence."
          ].map((text, i) => (
            <p
              key={i}
              className="
                text-lg text-gray-700 leading-relaxed opacity-0 
                animate-fadeUp 
              "
              style={{ animationDelay: `${0.3 + i * 0.2}s` }}
            >
              {text}
            </p>
          ))}
        </div>

{/* <div
            className="
              absolute top-4 right-4 bg-yellow-600 text-white 
              px-1 py-1 text-sm font-semibold rounded shadow 
              animate-fadeUp
            "
            style={{ animationDelay: "1.1s" }}
          >
            Expert Team
          </div>  */}


        {/* Image Block */}
        <div
          className="
            relative mt-6 md:mt-0 opacity-0 animate-fadeUp 
          "
          style={{ animationDelay: "0.9s" }}
        >
          <div
            className="
              h-104 w-full rounded-lg overflow-hidden shadow-xl 
              hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 
              float-animation
            "
          >
            <img
              src="/auditwork.png"
              alt="Due Diligence Team"
              className="
                object-cover w-full h-full 
                transition-transform duration-700 hover:scale-110
              "
            />
          </div>

          
        </div>

      </div>
    </section>
  );
}
