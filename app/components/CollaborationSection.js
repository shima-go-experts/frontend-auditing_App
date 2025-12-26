// import Image from 'next/image';

// export default function CollaborationSection() {
//   return (
//     <main className="font-sans">
//       <section className="relative w-full h-[80vh]">
//         {/* Background Image */}
//         <Image
//           src="/collab/collab-bg.jpg" // ← Replace with your chosen image path
//           alt="Collaboration Background"
//           fill
//           priority
//           style={{ objectFit: 'cover' }}
//           className="z-0"
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/50 z-10" />

//         {/* Content */}
//         <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
//           <div className="bg-white/90 rounded-xl shadow-xl p-6 max-w-4xl w-full flex flex-col md:flex-row items-center gap-6">
//             {/* Left: Image of collaboration */}
//             <div className="relative w-full md:w-1/2 h-64 rounded-lg overflow-hidden">
//               <Image
//                 src="/collab/engineers.jpg" // ← Replace with your image of two people collaborating
//                 alt="Engineers Collaborating"
//                 fill
//                 style={{ objectFit: 'cover' }}
//               />
//             </div>

//             {/* Right: Description */}
//             <div className="md:w-1/2 text-gray-800">
//               <h2 className="text-2xl font-bold mb-3">Collaborative Planning</h2>
//               <p className="text-sm leading-relaxed">
//                 Our field engineers and project managers work together to ensure every detail of your construction plan is aligned with your vision. From blueprint reviews to on-site adjustments, we prioritize teamwork and precision.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }



// import Image from 'next/image';

// export default function CollaborationSection() {
//   return (
//     <main className="relative w-full h-screen">
//       <Image
//         src="/building.png" // ← Replace with your custom image path
//         alt="Background"
//         fill
//         priority
//         style={{ objectFit: 'cover' }}
//       />
//     </main>
//   );
// }


// import Image from 'next/image';

// export default function CollaborationSection() {
//   return (
//     <main className="relative w-full h-screen font-sans">
//       {/* Background Image */}
//       <Image
//         src="/housedes3.png"
//         alt="Background"
//         fill
//         priority
//         style={{ objectFit: 'cover' }}
//       />

//       {/* Overlay for readability */}
//       <div className="absolute inset-0 bg-black/50 z-10" />

//       {/* Text Content */}
//       <div className="absolute inset-0 z-20 flex items-start justify-center px-6 pt-24">
//         <div className="max-w-3xl text-white text-center space-y-6">
//           <p className="text-lg md:text-xl leading-relaxed">
//             Our team brings together field expertise and strategic planning to deliver construction projects that exceed expectations. Every blueprint is reviewed with precision, and every decision is made with your vision in mind.
//           </p>
//           {/* <p className="text-lg md:text-xl leading-relaxed">
//             From site analysis to final execution, we ensure seamless collaboration between engineers, architects, and project managers. Your dream space is built on a foundation of trust, quality, and teamwork.
//           </p> */}
//         </div>
//       </div>
//     </main>
//   );
// }



// import Image from 'next/image';

// export default function CollaborationSection() {
//   return (
//     <main className="relative w-full h-[70vh] font-sans"> 
//       {/* Background Image */}
//       <Image
//         src="/housedes3.png"
//         alt="Background"
//         fill
//         priority
//         style={{ objectFit: 'cover' }}
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50 z-10" />

//       {/* Text Content */}
//       <div className="absolute inset-0 z-20 flex items-start justify-center px-6 pt-16">
//         <div className="max-w-3xl text-white text-center space-y-6">
//           <p className="text-lg md:text-xl leading-relaxed">
//             Our team brings together field expertise and strategic planning to deliver construction projects that exceed expectations. Every blueprint is reviewed with precision, and every decision is made with your vision in mind.
//           </p>
//         </div>
//       </div>
//     </main>
//   );
// }


'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CollaborationSection() {
  return (
    <main className="relative w-full h-[70vh] font-sans overflow-hidden">
      
      {/* Background Image with fade-in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0"
      >
        <Image
          src="/building.png"
          alt="Background"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </motion.div>

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black/50 z-10"
      />

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute inset-0 z-20 flex items-start justify-center px-6 pt-16"
      >
        <motion.div
          whileHover={{ scale: 1.03, y: -5 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="max-w-3xl text-white text-center space-y-6 p-4 rounded-lg"
        >
          <p className="text-lg md:text-xl leading-relaxed drop-shadow-md">
            Our team brings together field expertise and strategic planning to deliver construction
            projects that exceed expectations. Every blueprint is reviewed with precision, and every
            decision is made with your vision in mind.
          </p>
        </motion.div>
      </motion.div>
    </main>
  );
}
