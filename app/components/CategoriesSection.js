// export default function WordSlider() {
//   return (
//     <div className="overflow-hidden bg-white py-6">
//       <div className="animate-marquee whitespace-nowrap flex gap-12 text-4xl font-bold uppercase">
//         {/* Repeat content for seamless loop */}
//         {[...Array(2)].map((_, i) => (
//           <div key={i} className="flex gap-12 items-center">
//              <span className="text-orange-500">URBAN</span>
//              <span className="text-black">*</span>
//               <span className="text-orange-500">MODERN</span>
//               <span className="text-black">*</span>
//             <span className="text-orange-500">COMMUNITY</span>
//             <span className="text-black border-2 border-black px-2">BUILDING</span>
//             <span className="text-black">*</span>
//             <span className="text-black">SEASIDE</span>
           
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// export default function WordSlider() {
//   return (
//     <div className="overflow-hidden bg-white py-6">
//       <div className="animate-marquee whitespace-nowrap flex gap-12 text-4xl uppercase items-center">
//         {[...Array(2)].map((_, i) => (
//           <div key={i} className="flex gap-12 items-center">
//             <span className="font-bold text-orange-500">URBAN</span>
//             <span className="text-black">*</span>
//             <span className="font-bold text-orange-500">MODERN</span>
//             <span className="text-black">*</span>
//             <span className="font-bold text-orange-500">COMMUNITY</span>
//             <span className="text-black px-2 border-2 border-black font-medium">BUILDING</span>
//             <span className="text-black">*</span>
//             <span className="font-bold text-black">SEASIDE</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

export default function WordSlider() {
  return (
    <div className="overflow-hidden bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 py-6">
      <div className="animate-marquee whitespace-nowrap flex gap-12 text-4xl uppercase items-center">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-12 items-center">
            <span className="font-bold text-yellow-600">URBAN</span>
            <span className="text-black">*</span>
            <span className="font-bold text-yellow-600">MODERN</span>
            <span className="text-black">*</span>
            <span className="font-bold text-yellow-600">COMMUNITY</span>
            <span className="text-black px-2 border-2 border-black font-medium">BUILDING</span>
            <span className="text-black">*</span>
            <span className="font-bold text-black">SEASIDE</span>
          </div>
        ))}
      </div>
    </div>
  );
}
