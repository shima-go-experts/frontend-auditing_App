

// export default function Home() {
//   return (
//     <main className="font-sans">
//       {/* Hero Section */}
//       <section
//         className="relative w-full h-[80vh] bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: "url('/team/hero-bg.jpg')" }}
//       >
//         <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
//           <p className="text-white text-sm tracking-widest uppercase mb-2">* Meet the Team</p>
//           <h1 className="text-white text-3xl md:text-5xl font-semibold max-w-3xl">
//             Trusted Professionals Who Treat Your Home Like Their Own
//           </h1>
//         </div>
//       </section>

//       {/* Static Team Grid */}
//       <section className="py-16 bg-white">
//         <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//           <div className="flex flex-col items-center text-center">
//             <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg mb-4">
//               <img src="/team1.jpg" alt="Alex Morgan" className="w-full h-full object-cover" />
//             </div>
//             <h3 className="text-lg font-medium text-gray-800">Alex Morgan</h3>
//           </div>
//           <div className="flex flex-col items-center text-center">
//             <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg mb-4">
//               <img src="/team2.jpg" alt="Jamie Lee" className="w-full h-full object-cover" />
//             </div>
//             <h3 className="text-lg font-medium text-gray-800">Jamie Lee</h3>
//           </div>
//           <div className="flex flex-col items-center text-center">
//             <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg mb-4">
//               <img src="/team3.jpg" alt="Taylor Smith" className="w-full h-full object-cover" />
//             </div>
//             <h3 className="text-lg font-medium text-gray-800">Taylor Smith</h3>
//           </div>
//           <div className="flex flex-col items-center text-center">
//             <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg mb-4">
//               <img src="/team4.jpg" alt="Jordan Kim" className="w-full h-full object-cover" />
//             </div>
//             <h3 className="text-lg font-medium text-gray-800">Jordan Kim</h3>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }


export default function Home() {
  return (
    <main className="font-sans">

      {/* Hero Section */}
      <section
        className="relative w-full h-[80vh] bg-cover bg-center bg-no-repeat animate-fadeIn"
        style={{ backgroundImage: "url('/team/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <p className="text-white text-sm tracking-widest uppercase mb-2 animate-slideUp">
            * Meet the Team
          </p>
          <h1 className="text-white text-3xl md:text-5xl font-semibold max-w-3xl animate-slideUp delay-150">
            Trusted Professionals Who Treat Your Home Like Their Own
          </h1>
        </div>
      </section>

      {/* Static Team Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Member */}
          <div className="flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl p-2 rounded-xl">
            <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg mb-4">
              <img
                src="/team1.jpg"
                alt="Alex Morgan"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="text-lg font-medium text-gray-800 opacity-0 animate-fadeUp">
              Alex Morgan
            </h3>
          </div>

          {/* Member */}
          <div className="flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl p-2 rounded-xl">
            <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg mb-4">
              <img
                src="/team2.jpg"
                alt="Jamie Lee"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="text-lg font-medium text-gray-800 opacity-0 animate-fadeUp delay-100">
              Jamie Lee
            </h3>
          </div>

          {/* Member */}
          <div className="flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl p-2 rounded-xl">
            <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg mb-4">
              <img
                src="/team3.jpg"
                alt="Taylor Smith"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="text-lg font-medium text-gray-800 opacity-0 animate-fadeUp delay-200">
              Taylor Smith
            </h3>
          </div>

          {/* Member */}
          <div className="flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl p-2 rounded-xl">
            <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg mb-4">
              <img
                src="/team4.jpg"
                alt="Jordan Kim"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="text-lg font-medium text-gray-800 opacity-0 animate-fadeUp delay-300">
              Jordan Kim
            </h3>
          </div>

        </div>
      </section>

    </main>
  );
}


