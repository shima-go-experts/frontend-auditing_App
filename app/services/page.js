// "use client";


// import Navbar from '@/app/components/Navbar';
// import Footer from '@/app/components/Footer';

// import { FaGavel, FaTools, FaSearch, FaMapMarkedAlt, FaCity, FaFileAlt } from "react-icons/fa";

// const services = [
//   {
//     title: "Legal Verification",
//     description:
//       "Full forensic verification of titles, encumbrance, revenue records, approvals & litigation checks.",
//     icon: <FaGavel className="text-blue-600 text-3xl" />,
//   },
//   {
//     title: "Technical Verification",
//     description:
//       "Complete inspection of structure, quality, measurements, and compliance with approved plans.",
//     icon: <FaTools className="text-blue-600 text-3xl" />,
//   },
//   {
//     title: "Encumbrance & Court Search",
//     description:
//       "Deep search for mortgages, loans, court cases, NOCs, and any hidden restrictions.",
//     icon: <FaSearch className="text-blue-600 text-3xl" />,
//   },
//   {
//     title: "Land Classification Check",
//     description:
//       "Verification of land type, usage rights, and conversion status for legal and planning clarity.",
//     icon: <FaMapMarkedAlt className="text-blue-600 text-3xl" />,
//   },
//   {
//     title: "Zoning & Master Plan Audit",
//     description:
//       "Assessment of zoning compliance and alignment with city master plans and development norms.",
//     icon: <FaCity className="text-blue-600 text-3xl" />,
//   },
//   {
//     title: "Government Records",
//     description:
//       "Cross-checking ownership, mutation, tax, and registry records with official government databases.",
//     icon: <FaFileAlt className="text-blue-600 text-3xl" />,
//   },
// ];

// export default function ExpertServices() {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Expert Services</h2>
//         <p className="text-gray-600 mb-12">
//           Comprehensive due diligence across legal, technical, and regulatory domains.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-md p-6 text-left hover:shadow-lg transition"
//             >
//               <div className="mb-4">{service.icon}</div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
//               <p className="text-gray-600 text-sm">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import Navbar from '@/app/components/Navbar';
// import Footer from '@/app/components/Footer';

// import {
//   FaGavel,
//   FaTools,
//   FaSearch,
//   FaMapMarkedAlt,
//   FaCity,
//   FaFileAlt,
// } from "react-icons/fa";

// const services = [
//   {
//     title: "Legal Verification",
//     description:
//       "Full forensic verification of titles, encumbrance, revenue records, approvals & litigation checks.",
//     icon: <FaGavel className="text-blue-700 text-3xl" />,
//   },
//   {
//     title: "Technical Verification",
//     description:
//       "Complete inspection of structure, quality, measurements, and compliance with approved plans.",
//     icon: <FaTools className="text-blue-700 text-3xl" />,
//   },
//   {
//     title: "Encumbrance & Court Search",
//     description:
//       "Deep search for mortgages, loans, court cases, NOCs, and any hidden restrictions.",
//     icon: <FaSearch className="text-blue-700 text-3xl" />,
//   },
//   {
//     title: "Land Classification Check",
//     description:
//       "Verification of land type, usage rights, and conversion status for legal and planning clarity.",
//     icon: <FaMapMarkedAlt className="text-blue-700 text-3xl" />,
//   },
//   {
//     title: "Zoning & Master Plan Audit",
//     description:
//       "Assessment of zoning compliance and alignment with city master plans and development norms.",
//     icon: <FaCity className="text-blue-700 text-3xl" />,
//   },
//   {
//     title: "Government Records",
//     description:
//       "Cross-checking ownership, mutation, tax, and registry records with official government databases.",
//     icon: <FaFileAlt className="text-blue-700 text-3xl" />,
//   },
// ];

// export default function ExpertServices() {
//   return (
//     <>
//       <Navbar />

//       <main className="py-20 bg-gray-50 min-h-screen">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Our Expert Services
//           </h2>
//           <p className="text-gray-600 mb-14 max-w-2xl mx-auto">
//             Comprehensive due diligence across legal, technical, and regulatory domains.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="
//                   bg-white
//                   rounded-2xl
//                   shadow-lg
//                   p-8
//                   text-left
//                   border border-gray-200
//                   hover:shadow-2xl
//                   hover:border-blue-500/50
//                   transition
//                   duration-300
//                   ease-out
//                   group
//                   relative
//                   overflow-hidden
//                 "
//               >
//                 {/* Glow Hover Background */}
//                 <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>

//                 {/* Icon Bubble */}
//                 <div
//                   className="
//                     w-14 h-14
//                     rounded-xl
//                     bg-blue-100
//                     flex items-center justify-center
//                     mb-5
//                     group-hover:scale-110
//                     transition
//                     duration-300
//                     relative z-10
//                   "
//                 >
//                   {service.icon}
//                 </div>

//                 <h3 className="text-xl font-semibold text-gray-900 mb-3 relative z-10">
//                   {service.title}
//                 </h3>

//                 <p className="text-gray-600 text-sm leading-relaxed relative z-10">
//                   {service.description}
//                 </p>

//                 {/* Bottom Blue Bar Animation */}
//                 <div
//                   className="
//                     absolute bottom-0 left-0 h-1 w-0
//                     bg-blue-600
//                     group-hover:w-full
//                     transition-all duration-300
//                   "
//                 ></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import Navbar from "@/app/components/Navbar";
// import Footer from "@/app/components/Footer";
// import {
//   FaGavel,
//   FaTools,
//   FaSearch,
//   FaMapMarkedAlt,
//   FaCity,
//   FaFileAlt,
// } from "react-icons/fa";

// /* Icon map for API icon names */
// const iconMap = {
//   FaGavel,
//   FaTools,
//   FaSearch,
//   FaMapMarkedAlt,
//   FaCity,
//   FaFileAlt,
// };

// export default function ExpertServices() {
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const res = await fetch("https://auditing-app.onrender.com/api/services");
//         const data = await res.json();

//         // Normalize response: array or { data: [] }
//         if (Array.isArray(data)) {
//           setServices(data);
//         } else if (Array.isArray(data.data)) {
//           setServices(data.data);
//         } else {
//           setServices([]);
//           console.error("Unexpected API response:", data);
//         }
//       } catch (err) {
//         console.error("Failed to fetch services:", err);
//         setError("Failed to load services. Please try again later.");
//         setServices([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchServices();
//   }, []);

//   if (loading) {
//     return (
//       <section className="py-20 text-center text-lg font-medium">
//         Loading services...
//       </section>
//     );
//   }

//   if (error) {
//     return (
//       <section className="py-20 text-center text-lg font-medium text-red-500">
//         {error}
//       </section>
//     );
//   }

//   if (!services.length) {
//     return (
//       <section className="py-20 text-center text-lg font-medium text-gray-500">
//         No services available at the moment.
//       </section>
//     );
//   }

//   return (
//     <>
//       <Navbar />

//       <main className="py-20 bg-gray-50 min-h-screen">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Our Expert Services
//           </h2>
//           <p className="text-gray-600 mb-14 max-w-2xl mx-auto">
//             Comprehensive due diligence across legal, technical, and regulatory domains.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//             {services.map((service) => {
//               const IconComponent = iconMap[service.icon] || FaGavel;

//               return (
//                 <div
//                   key={service._id || service.title}
//                   className="
//                     bg-white
//                     rounded-2xl
//                     shadow-lg
//                     p-8
//                     text-left
//                     border border-gray-200
//                     hover:shadow-2xl
//                     hover:border-blue-500/50
//                     transition
//                     duration-300
//                     ease-out
//                     group
//                     relative
//                     overflow-hidden
//                   "
//                 >
//                   {/* Glow Hover Background */}
//                   <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>

//                   {/* Icon Bubble */}
//                   <div className="
//                     w-14 h-14
//                     rounded-xl
//                     bg-blue-100
//                     flex items-center justify-center
//                     mb-5
//                     group-hover:scale-110
//                     transition
//                     duration-300
//                     relative z-10
//                   ">
//                     <IconComponent className="text-blue-700 text-3xl" />
//                   </div>

//                   <h3 className="text-xl font-semibold text-gray-900 mb-3 relative z-10">
//                     {service.title}
//                   </h3>

//                   <p className="text-gray-600 text-sm leading-relaxed relative z-10">
//                     {service.description}
//                   </p>

//                   {/* Bottom Blue Bar Animation */}
//                   <div className="
//                     absolute bottom-0 left-0 h-1 w-0
//                     bg-blue-600
//                     group-hover:w-full
//                     transition-all duration-300
//                   "></div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import {
  FaGavel,
  FaTools,
  FaSearch,
  FaMapMarkedAlt,
  FaCity,
  FaFileAlt,
  FaArrowRight,
} from "react-icons/fa";

const iconMap = {
  FaGavel,
  FaTools,
  FaSearch,
  FaMapMarkedAlt,
  FaCity,
  FaFileAlt,
};

export default function ExpertServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("https://auditing-app.onrender.com/api/services");
        const data = await res.json();
        setServices(Array.isArray(data) ? data : data.data || []);
      } catch (err) {
        setError("Failed to load services. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow bg-[#fcfdfe] pt-24 pb-20">
        {/* HERO HEADER */}
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Due Diligence</span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We provide specialized auditing across legal, technical, and regulatory domains to safeguard your investments and operations.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          {loading ? (
            /* SKELETON LOADING STATE */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-64 bg-slate-100 rounded-3xl animate-pulse" />
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-20 bg-red-50 rounded-3xl border border-red-100">
              <p className="text-red-600 font-medium text-lg">{error}</p>
            </div>
          ) : !services.length ? (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
              <p className="text-slate-500 text-lg">No services found.</p>
            </div>
          ) : (
            /* SERVICE GRID */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {services.map((service, index) => {
                const IconComponent = iconMap[service.icon] || FaGavel;

                return (
                  <div
                    key={service._id || index}
                    className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-500"
                  >
                    {/* Background Accent */}
                    <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                       <IconComponent className="text-9xl transform rotate-12" />
                    </div>

                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 mb-8 group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-500 shadow-inner">
                      <IconComponent className="text-3xl" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Action */}
                    <div className="flex items-center gap-2 text-sm font-bold text-blue-600 cursor-pointer">
                      View Details
                      <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>

                    {/* Decorative bar */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-blue-600 rounded-b-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}