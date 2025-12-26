// import Image from 'next/image';

// export default function HeroSection() {
//   return (
//     <section className="relative w-full flex items-center justify-center bg-gray-100">
//       {/* Responsive background image showing full without cropping */}
//       <div className="w-full max-w-screen-xl relative">
//         <Image
//           src="/home.jpg"
//           alt="Modern House"
//           width={1920}
//           height={1080}
//           layout="responsive"
//           objectFit="contain" // show entire image with letterbox/pillarbox if needed
//           priority
//           className="rounded-md"
//         />
//       </div>

//       {/* Text content over image */}
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-white text-center px-4 max-w-4xl">
//         <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Welcome Home</h1>
//         <p className="text-xl font-light mb-8 drop-shadow-md">
//           Discover beautiful modern living in the heart of nature.
//         </p>
//         <button className="bg-white text-black px-8 py-3 rounded shadow-lg font-semibold transition hover:bg-gray-200">
//           Learn More
//         </button>
//       </div>
//     </section>
//   );
// }



// import Image from 'next/image';

// export default function HeroSection() {
//   return (
//     <section className="relative w-full h-screen flex items-center justify-center bg-gray-100">
//       {/* Make this wrapper cover the full section; add rounded corners here */}
//       <div className="absolute inset-0 w-full h-full rounded-md overflow-hidden">
//         <Image
//           src="/home.jpg"
//           alt="Modern House"
//           layout="fill"         // Fill all available space
//           objectFit="cover"     // Automatically crop and fill left/right space
//           priority
//         />
//       </div>

//       {/* Text content over image */}
//       <div className="relative z-20 flex flex-col items-center justify-center text-center text-white px-4 max-w-4xl">
//         <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Welcome Home</h1>
//         <p className="text-xl font-light mb-8 drop-shadow-md">
//           Discover beautiful modern living in the heart of nature.
//         </p>
//         <button className="bg-white text-black px-8 py-3 rounded shadow-lg font-semibold transition hover:bg-gray-200">
//           Learn More
//         </button>
//       </div>
//     </section>
//   );
// }


// "use client";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// export default function HeroSection() {
//   const images = ["/resort.png", "/resort.png", "/resort.png"]; // Add your images
//   const [index, setIndex] = useState(0);

//   // Auto-slide every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
//       {/* Background Images */}
//       <div className="absolute inset-0 w-full h-full">
//         {images.map((img, i) => (
//           <div
//             key={i}
//             className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
//               i === index ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <Image
//               src={img}
//               alt={`Slide ${i}`}
//               fill
//               className="object-cover"
//               priority={i === 0}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Text Content */}
//       <div className="relative z-20 text-center text-white px-6 max-w-3xl">
//         <h1 className="text-5xl font-bold mb-4 drop-shadow-xl">Secure Your Investment :</h1>
//         <p className="text-xl mb-8 drop-shadow-2xl">
//           Comprehensive Property Due Dilligence & Legal Verification Services
//         </p>
//         <button className="bg-white text-black px-8 py-3 rounded-md shadow-xl font-semibold hover:bg-gray-200 transition">
//           Verify Your Property
//         </button>
//       </div>

//       {/* Optional Overlay */}
//       <div className="absolute inset-0 bg-black/30"></div>
//     </section>
//   );
// }



// "use client";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// export default function HeroSection() {
//   const images = ["/resort.png", "/resort.png", "/resort.png"];
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      
//       {/* Background Images */}
//       <div className="absolute inset-0 w-full h-full">
//         {images.map((img, i) => (
//           <div
//             key={i}
//             className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
//               i === index ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <Image
//               src={img}
//               alt={`Slide ${i}`}
//               fill
//               className="object-cover scale-105 animate-zoomSlow"
//               priority={i === 0}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Text Content */}
//       <div className="relative z-20 text-center text-white px-6 max-w-3xl animate-floatUp opacity-0 animate-fadeInSlow">
//         <h1 className="text-5xl font-bold mb-4 drop-shadow-2xl animate-float">
//           Secure Your Investment :
//         </h1>
//         <p className="text-xl mb-8 drop-shadow-2xl animate-float delay-200">
//           Comprehensive Property Due Dilligence & Legal Verification Services
//         </p>
//         <button className="bg-white text-black px-8 py-3 rounded-md shadow-xl font-semibold hover:bg-gray-200 transition animate-float delay-300">
//           Verify Your Property
//         </button>
//       </div>

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       {/* ANIMATIONS */}
//       <style>{`
//         @keyframes float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-12px); }
//           100% { transform: translateY(0px); }
//         }

//         @keyframes fadeInSlow {
//           0% { opacity: 0; transform: translateY(20px); }
//           100% { opacity: 1; transform: translateY(0px); }
//         }

//         @keyframes zoomSlow {
//           0% { transform: scale(1); }
//           100% { transform: scale(1.07); }
//         }

//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }

//         .animate-fadeInSlow {
//           animation: fadeInSlow 1.5s ease-out forwards;
//         }

//         .animate-zoomSlow {
//           animation: zoomSlow 8s ease-in-out alternate infinite;
//         }
//       `}</style>
//     </section>
//   );
// }



// "use client";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// export default function HeroSection() {
//   const images = ["/resort.png", "/resort.png", "/resort.png"];
//   const [index, setIndex] = useState(0);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//     const int = setInterval(() => {
//       setIndex((p) => (p + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(int);
//   }, []);

//   return (
//     <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      
//       {/* Background Images */}
//       <div className="absolute inset-0">
//         {images.map((img, i) => (
//           <div
//             key={i}
//             className={`absolute inset-0 transition-opacity duration-[1600ms] ${
//               i === index ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <Image
//               src={img}
//               alt="slide"
//               fill
//               className="object-cover animate-zoomSlow"
//               priority={i === 0}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Dark Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>

//       {/* TEXT CONTENT */}
//       <div className="relative z-20 text-white px-6 max-w-4xl text-center">

//         {/* MAIN HEADING */}
//         <h1
//           className={`font-extrabold tracking-wide drop-shadow-2xl text-4xl md:text-6xl lg:text-7xl mb-5 
//           bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500
//           ${mounted ? "animate-slideLeft" : "opacity-0"}`}
//         >
//           Secure Your Investment
//         </h1>

//         {/* SUB TEXT */}
//         <p
//           className={`text-lg md:text-2xl lg:text-3xl text-gray-200 font-light mb-6 leading-snug 
//           ${mounted ? "animate-fadeUp delay-200" : "opacity-0"}`}
//         >
//           Detailed Property Due-Diligence • Legal Verification • Ownership Validation
//         </p>

//         {/* DESCRIPTION */}
//         <p
//           className={`text-base md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 
//           ${mounted ? "animate-slideRight delay-300" : "opacity-0"}`}
//         >
//           We inspect documents, verify titles, check past records, evaluate risks,
//           and deliver a complete legal safety report before you invest.
//         </p>

//         {/* BUTTON */}
//         <button
//           className={`bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-10 py-4 rounded-full shadow-2xl text-lg md:text-xl transition-all 
//           ${mounted ? "animate-fadeUp delay-500" : "opacity-0"}`}
//         >
//           Verify Your Property
//         </button>

//       </div>

//       {/* Animations */}
//       <style>{`
//         @keyframes slideLeft {
//           0% { opacity: 0; transform: translateX(60px); }
//           100% { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes slideRight {
//           0% { opacity: 0; transform: translateX(-60px); }
//           100% { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes fadeUp {
//           0% { opacity: 0; transform: translateY(30px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes zoomSlow {
//           0% { transform: scale(1); }
//           100% { transform: scale(1.07); }
//         }
//         .animate-slideLeft { animation: slideLeft 1.3s ease-out forwards; }
//         .animate-slideRight { animation: slideRight 1.3s ease-out forwards; }
//         .animate-fadeUp { animation: fadeUp 1.3s ease-out forwards; }
//         .animate-zoomSlow { animation: zoomSlow 10s ease-in-out alternate infinite; }
//       `}</style>
//     </section>
//   );
// }

// "use client";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// export default function HeroSection() {
//   const images = ["/resort.png", "/resort.png", "/resort.png"];
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const int = setInterval(() => {
//       setIndex((p) => (p + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(int);
//   }, []);

//   // Framer Motion variants for staggered text
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.3 },
//     },
//   };
//   const item = {
//     hidden: { opacity: 0, y: 40 },
//     show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
//   };

//   return (
//     <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      
//       {/* Background Images with parallax zoom */}
//       <div className="absolute inset-0">
//         {images.map((img, i) => (
//           <div
//             key={i}
//             className={`absolute inset-0 transition-opacity duration-[1600ms] ${
//               i === index ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <Image
//               src={img}
//               alt="slide"
//               fill
//               className="object-cover animate-zoomSlow will-change-transform"
//               priority={i === 0}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Animated Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 animate-gradientFlow"></div>

//       {/* Floating Blurred Shapes */}
//       <div className="absolute top-1/3 left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl animate-floatSlow"></div>
//       <div className="absolute bottom-1/4 right-16 w-24 h-24 bg-pink-500/20 rounded-full blur-2xl animate-floatSlow delay-700"></div>

//       {/* TEXT CONTENT */}
//       <motion.div
//         variants={container}
//         initial="hidden"
//         animate="show"
//         className="relative z-20 text-white px-6 max-w-4xl text-center"
//       >
//         {/* MAIN HEADING */}
//         <motion.h1
//           variants={item}
//           className="font-extrabold tracking-wide drop-shadow-2xl text-4xl md:text-6xl lg:text-7xl mb-5 
//           bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-600 animate-textShimmer"
//         >
//           Secure Your Investment
//         </motion.h1>

//         {/* SUB TEXT */}
//         <motion.p
//           variants={item}
//           className="text-lg md:text-2xl lg:text-3xl text-gray-200 font-light mb-6 leading-snug"
//         >
//           Detailed Property Due-Diligence • Legal Verification • Ownership Validation
//         </motion.p>

//         {/* DESCRIPTION */}
//         <motion.p
//           variants={item}
//           className="text-base md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-10"
//         >
//           We inspect documents, verify titles, check past records, evaluate risks,
//           and deliver a complete legal safety report before you invest.
//         </motion.p>

//         {/* BUTTON */}
//         <motion.button
//           variants={item}
//           whileHover={{ scale: 1.08 }}
//           whileTap={{ scale: 0.95 }}
//           className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-10 py-4 rounded-full shadow-2xl text-lg md:text-xl transition-all"
//         >
//           Verify Your Property
//         </motion.button>
//       </motion.div>

//       {/* Animations */}
//       <style>{`
//         @keyframes zoomSlow {
//           0% { transform: scale(1.05) translateY(0); }
//           50% { transform: scale(1.1) translateY(-10px); }
//           100% { transform: scale(1.05) translateY(0); }
//         }
//         @keyframes gradientFlow {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         @keyframes floatSlow {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-20px); }
//         }
//         @keyframes textShimmer {
//           0% { background-position: -200% center; }
//           100% { background-position: 200% center; }
//         }
//         .animate-zoomSlow { animation: zoomSlow 12s ease-in-out infinite; }
//         .animate-gradientFlow { background-size: 200% 200%; animation: gradientFlow 15s ease infinite; }
//         .animate-floatSlow { animation: floatSlow 6s ease-in-out infinite; }
//         .animate-textShimmer { background-size: 200% auto; animation: textShimmer 4s linear infinite; }
//       `}</style>
//     </section>
//   );
// }



// "use client";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// export default function HeroSection() {
//   const images = ["/resort.png", "/resort.png", "/resort.png"];
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const int = setInterval(() => {
//       setIndex((p) => (p + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(int);
//   }, []);

//   // Framer Motion variants
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.3 },
//     },
//   };
//   const item = {
//     hidden: { opacity: 0, y: 40 },
//     show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
//   };

//   return (
//     <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      
//       {/* Background Images */}
//       <div className="absolute inset-0">
//         {images.map((img, i) => (
//           <div
//             key={i}
//             className={`absolute inset-0 transition-opacity duration-[1600ms] ${
//               i === index ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <Image
//               src={img}
//               alt="slide"
//               fill
//               className="object-cover animate-zoomSlow will-change-transform"
//               priority={i === 0}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 animate-gradientFlow"></div>

//       {/* Floating Light Blobs */}
//       <div className="absolute top-1/3 left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl animate-floatSlow"></div>
//       <div className="absolute bottom-1/4 right-16 w-24 h-24 bg-pink-500/20 rounded-full blur-2xl animate-floatSlow delay-700"></div>

//       {/* MAIN TEXT CONTENT */}
//       <motion.div
//         variants={container}
//         initial="hidden"
//         animate="show"
//         className="relative z-20 text-white px-6 max-w-4xl text-center"
//       >

//         {/* MAIN HEADING */}
//         <motion.h1
//           variants={item}
//           className="font-extrabold tracking-wide drop-shadow-2xl text-4xl md:text-6xl lg:text-7xl mb-5 
//           bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-600 animate-textShimmer"
//         >
//           Secure Your Investment
//         </motion.h1>

//         {/* ⭐ UPDATED SUB-TEXT WITH UNDERLINE ANIMATION */}
//         <motion.p
//           variants={item}
//           className="relative inline-block text-lg md:text-2xl lg:text-3xl font-light mb-6 leading-snug 
//             bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-pink-300 to-purple-400 animate-textShimmer"
//         >
//           Detailed Property Due-Dilligence • Legal Verification • Ownership Validation

//           {/* Animated gradient underline */}
//           <span className="absolute left-0 -bottom-2 w-full h-[2px] 
//             bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 
//             animate-gradientFlow"></span>
//         </motion.p>

//         {/* ⭐ UPDATED DESCRIPTION WITH GLOW & FLOAT EFFECT */}
//         <motion.p
//           variants={item}
//           className="relative text-base md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 animate-floatSlow"
//         >
//           We inspect documents, verify titles, check past records, evaluate risks,
//           and deliver a complete legal safety report before you invest.

//           {/* Glow highlight behind text */}
//           <span className="absolute inset-0 -z-10 bg-gradient-to-r 
//             from-yellow-400/10 via-pink-400/10 to-purple-600/10 
//             blur-xl rounded-lg"></span>
//         </motion.p>

//         {/* BUTTON */}
//         <motion.button
//           variants={item}
//           whileHover={{ scale: 1.08 }}
//           whileTap={{ scale: 0.95 }}
//           className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-10 py-4 rounded-full shadow-2xl text-lg md:text-xl transition-all"
//         >
//           Verify Your Property
//         </motion.button>

//       </motion.div>

//       {/* Animations */}
//       <style>{`
//         @keyframes zoomSlow {
//           0% { transform: scale(1.05) translateY(0); }
//           50% { transform: scale(1.1) translateY(-10px); }
//           100% { transform: scale(1.05) translateY(0); }
//         }
//         @keyframes gradientFlow {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         @keyframes floatSlow {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-20px); }
//         }
//         @keyframes textShimmer {
//           0% { background-position: -200% center; }
//           100% { background-position: 200% center; }
//         }
//         .animate-zoomSlow { animation: zoomSlow 12s ease-in-out infinite; }
//         .animate-gradientFlow { background-size: 200% 200%; animation: gradientFlow 12s linear infinite; }
//         .animate-floatSlow { animation: floatSlow 6s ease-in-out infinite; }
//         .animate-textShimmer { background-size: 200% auto; animation: textShimmer 4s linear infinite; }
//       `}</style>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import Particles from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";

export default function HeroSection() {
  const images = ["/resort.png", "/resort.png", "/resort.png"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const int = setInterval(() => {
      setIndex((p) => (p + 1) % images.length);
    }, 4000);
    return () => clearInterval(int);
  }, []);

  // FIX: you forgot to import useCallback
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Framer Motion Variants
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* BACKGROUND SLIDER */}
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[1600ms] ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt="slide"
              fill
              className="object-cover animate-zoomSlow"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* APPLE-STYLE PARTICLES */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 60 },
            size: { value: 2 },
            move: { speed: 1 },
            color: { value: "#ffffff" },
            links: { enable: true, color: "#ffffff" }
          }
        }}
        className="absolute inset-0"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b 
        from-black/80 via-black/40 to-black/80 animate-gradientFlow">
      </div>

      {/* FLOATING BLOBS */}
      <div className="absolute top-1/3 left-10 w-40 h-40 
        bg-yellow-400/20 rounded-full blur-3xl animate-floatSlow">
      </div>

      <div className="absolute bottom-1/4 right-16 w-28 h-28 
        bg-yellow-500/20 rounded-full blur-2xl animate-floatSlow">
      </div>


      {/* TEXT CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-20 text-white px-6 max-w-5xl text-center"
      >
 {/* CUSTOM HEADING */}
  <motion.h2
    variants={item}
    className="text-3xl md:text-4xl font-bold text-white mb-6"
  >
    <span className="text-yellow-300">
      The 360° PROPERTY HEALTH CHECK
    </span>
  </motion.h2>


        {/* AUTO-TYPING TITLE */}
        <motion.h1
          variants={item}
          className="font-extrabold tracking-wide text-4xl md:text-6xl lg:text-7xl mb-6 
            bg-clip-text text-transparent bg-gradient-to-r 
            from-yellow-300 via-pink-400 to-purple-600 animate-textShimmer"
        >
          <TypeAnimation
            sequence={[
              "Audit Your Property",
              1500,
              "Before You  Invest",
              1500,
              "Avoid Risky  Deals",
              1500,
            ]}
            wrapper="span"
            repeat={Infinity}
          />
        </motion.h1>

        {/* SUB TEXT + SHIMMER UNDERLINE */}
        <motion.p
          variants={item}
          className="relative inline-block text-lg md:text-2xl lg:text-3xl font-light mb-6
            bg-clip-text text-transparent bg-gradient-to-r 
            from-yellow-200 via-pink-300 to-purple-400 animate-textShimmer"
        >
          Detailed Property Due-Diligence • Legal Verification • Ownership Validation
          <span className="absolute left-0 -bottom-2 w-full h-[2px]
            bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 animate-gradientFlow"></span>
        </motion.p>

        {/* DESCRIPTION WITH GLOW */}
        <motion.p
          variants={item}
          className="relative text-base md:text-xl lg:text-2xl text-gray-300 
            max-w-3xl mx-auto mb-10 animate-floatSlow"
        >
         Comprehensive Legal Verification + technical Property Valuation.Buy With 100% confidence
          <span className="absolute inset-0 -z-10 bg-gradient-to-r
            from-yellow-400/10 via-pink-400/10 to-purple-600/10 blur-xl rounded-lg">
          </span>
        </motion.p>

        {/* BUTTON */}
        <motion.button
          variants={item}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-10 py-4
            rounded-full shadow-2xl text-lg md:text-xl transition-all"
        >
          Verify Your Property
        </motion.button>
      </motion.div>

      {/* FLOATING 3D CARD */}
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        whileHover={{ rotateY: 15, rotateX: 5, scale: 1.05 }}
        className="absolute right-10 bottom-20 hidden lg:block"
      >
        <div className="w-80 h-56 rounded-2xl overflow-hidden shadow-2xl 
          bg-white/10 backdrop-blur-xl border border-white/20">
          <Image src="/resort.png" alt="Property Card" width={500} height={300}
            className="object-cover h-full w-full" />
        </div>
      </motion.div>

      {/* CURVED WAVE BOTTOM */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-32"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M321.39 56.44C120.74 39.17 0 0 0 0v120h1200V0s-110.73 30.76-308.1 53.22c-197.37 22.46-389.57 41.58-570.51 3.22z"
            className="fill-black"
          />
        </svg>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes zoomSlow {
          0% { transform: scale(1.05); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1.05); }
        }

        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes textShimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .animate-zoomSlow { animation: zoomSlow 12s ease-in-out infinite; }
        .animate-gradientFlow { background-size: 200% 200%; animation: gradientFlow 10s ease infinite; }
        .animate-floatSlow { animation: floatSlow 6s ease-in-out infinite; }
        .animate-textShimmer { background-size: 200% auto; animation: textShimmer 4s linear infinite; }
      `}</style>
    </section>
  );
}
