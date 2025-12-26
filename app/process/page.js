
// export default function Home() {
//   const cards = [
//     {
//       title: 'Dimension & Area Audit',
//       description:
//         'Physical measurement of the built-up area, comparing on-ground measurements against the Title Deed and official FMB/Survey Sketch to identify any discrepancies.',
//       color: 'bg-blue-100',
//       border: 'border-blue-400',
//     },
//     {
//       title: 'Zoning Confirmation',
//       description:
//         'Verification of land use classification (Residential, Commercial) per the Master Plan, checking for required zones (FTL, buffer, contour), and identifying proposed road widening plans.',
//       color: 'bg-green-100',
//       border: 'border-green-400',
//     },
//     {
//       title: 'Construction Quality Assessment',
//       description:
//         'Evaluation of building construction quality, including structural components, beams, columns, basement, inspection for dampness, cracks, and seepage, and assessment of material quality. Advanced 3D laser scanning is used for enhanced verification.',
//       color: 'bg-yellow-100',
//       border: 'border-yellow-400',
//     },
//     {
//       title: 'Systems & Infrastructure Review',
//       description:
//         'Review of electrical wiring (load capacity), plumbing systems, mechanical components, borewell, and sewage systems (STP; septic tank) for condition, age, and functionality.',
//       color: 'bg-purple-100',
//       border: 'border-purple-400',
//     },
//     {
//       title: 'Road Access Verification',
//       description:
//         'Confirmation of legal, clear road access, including measurement of existing road width and identification of any shared right-of-way concerns or encroachments.',
//       color: 'bg-red-100',
//       border: 'border-red-400',
//     },
//     {
//       title: 'Site Visit Summary',
//       description:
//         'Final report consolidating all findings from the technical verification process, highlighting risks, discrepancies, and compliance status for investment decisions.',
//       color: 'bg-teal-100',
//       border: 'border-teal-400',
//     },
//   ];

//   return (
//     <main className="min-h-screen bg-gray-50 py-12 px-6">
//       <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
//         Pillar 2: On-Site Technical Verification
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//         {cards.map((card, idx) => (
//           <div
//             key={idx}
//             className={`p-6 rounded-lg shadow-md border-t-4 ${card.color} ${card.border}`}
//           >
//             <h2 className="text-xl font-semibold mb-3 text-gray-800">{card.title}</h2>
//             <p className="text-gray-700 text-sm leading-relaxed">{card.description}</p>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }




// import Navbar from '@/app/components/Navbar';
// import Footer from '@/app/components/Footer';


// export default function Home() {
//   const cards = [
//     {
//       title: 'Dimension & Area Audit',
//       description:
//         'Physical measurement of the built-up area, comparing on-ground measurements against the Title Deed and official FMB/Survey Sketch to identify any discrepancies.',
//       color: 'bg-blue-100',
//       border: 'border-blue-400',
//     },
//     {
//       title: 'Zoning Confirmation',
//       description:
//         'Verification of land use classification (Residential, Commercial) per the Master Plan, checking for required zones (FTL, buffer, contour), and identifying proposed road widening plans.',
//       color: 'bg-green-100',
//       border: 'border-green-400',
//     },
//     {
//       title: 'Construction Quality Assessment',
//       description:
//         'Evaluation of building construction quality, including structural components, beams, columns, basement, inspection for dampness, cracks, and seepage, and assessment of material quality. Advanced 3D laser scanning is used for enhanced verification.',
//       color: 'bg-yellow-100',
//       border: 'border-yellow-400',
//     },
//     {
//       title: 'Systems & Infrastructure Review',
//       description:
//         'Review of electrical wiring (load capacity), plumbing systems, mechanical components, borewell, and sewage systems (STP; septic tank) for condition, age, and functionality.',
//       color: 'bg-purple-100',
//       border: 'border-purple-400',
//     },
//     {
//       title: 'Road Access Verification',
//       description:
//         'Confirmation of legal, clear road access, including measurement of existing road width and identification of any shared right-of-way concerns or encroachments.',
//       color: 'bg-red-100',
//       border: 'border-red-400',
//     },
//     {
//       title: 'Site Visit Summary',
//       description:
//         'Final report consolidating all findings from the technical verification process, highlighting risks, discrepancies, and compliance status for investment decisions.',
//       color: 'bg-teal-100',
//       border: 'border-teal-400',
//     },
//   ];

//   return (
//     <>
//       <Navbar />

//       <main className="min-h-screen bg-gray-50 py-12 px-6">
//         <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
//            On-Site Technical Verification
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {cards.map((card, idx) => (
//             <div
//               key={idx}
//               className={`p-6 rounded-lg shadow-md border-t-4 ${card.color} ${card.border}`}
//             >
//               <h2 className="text-xl font-semibold mb-3 text-gray-800">{card.title}</h2>
//               <p className="text-gray-700 text-sm leading-relaxed">{card.description}</p>
//             </div>
//           ))}
//         </div>
//       </main>

//       <Footer />
//     </>
//   );
// }



// import Navbar from '@/app/components/Navbar';
// import Footer from '@/app/components/Footer';

// export default function Home() {
//   const cards = [
//     {
//       title: 'Consultation & Document Kick-off',

//       description:
//         'Physical measurement of the built-up area, comparing on-ground measurements against the Title Deed and official FMB/Survey Sketch to identify any discrepancies.',
//       color: 'bg-blue-100',
//       border: 'border-blue-400',
//     },
//     {
//       title: 'Investigation & Analysis',

//       description:
//         'Verification of land use classification (Residential, Commercial) per the Master Plan, checking for required zones (FTL, buffer, contour), and identifying proposed road widening plans.',
//       color: 'bg-green-100',
//       border: 'border-green-400',
//     },
//     {
//       title: 'Report Delivery & Consultation',

//       description:
//         'Evaluation of building construction quality, including structural components, beams, columns, basement, inspection for dampness, cracks, and seepage, and assessment of material quality. Advanced 3D laser scanning is used for enhanced verification.',
//       color: 'bg-yellow-100',
//       border: 'border-yellow-400',
//     },
//     {
//       title: 'Systems & Infrastructure Review',
//       description:
//         'Review of electrical wiring (load capacity), plumbing systems, mechanical components, borewell, and sewage systems (STP; septic tank) for condition, age, and functionality.',
//       color: 'bg-purple-100',
//       border: 'border-purple-400',
//     },
//     {
//       title: 'Document collection',
//       description:
//         'Confirmation of legal, clear road access, including measurement of existing road width and identification of any shared right-of-way concerns or encroachments.',
//       color: 'bg-red-100',
//       border: 'border-red-400',
//     },
//     {
//       title: 'Technical inspection',
//       description:
//         'Final report consolidating all findings from the technical verification process, highlighting risks, discrepancies, and compliance status for investment decisions.',
//       color: 'bg-teal-100',
//       border: 'border-teal-400',
//     },
//   ];

//   return (
//     <>
//       <Navbar />

//       <main className="min-h-screen bg-gray-50 py-12 px-6">
//         <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
//           On-Site Technical Verification
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {cards.map((card, idx) => (
//             <div
//               key={idx}
//               className={`
//                 p-6 rounded-lg shadow-md border-t-4 ${card.color} ${card.border}
//                 transform transition-all duration-300 ease-out
//                 hover:scale-[1.04] hover:shadow-xl hover:-translate-y-2
//                 animate-fadeIn
//               `}
//               style={{ animationDelay: `${idx * 120}ms` }}
//             >
//               <h2 className="text-xl font-semibold mb-3 text-gray-800">{card.title}</h2>
//               <p className="text-gray-700 text-sm leading-relaxed">{card.description}</p>
//             </div>
//           ))}
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

// Predefined color & border classes (keep original design)
const cardStyles = [
  { color: "bg-blue-100", border: "border-blue-400" },
  { color: "bg-green-100", border: "border-green-400" },
  { color: "bg-yellow-100", border: "border-yellow-400" },
  { color: "bg-purple-100", border: "border-purple-400" },
  { color: "bg-red-100", border: "border-red-400" },
  { color: "bg-teal-100", border: "border-teal-400" },
];

export default function TechnicalVerification() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await fetch("https://auditing-app.onrender.com/api/process");
        const data = await res.json();

        // Normalize response: array or { data: [] }
        if (Array.isArray(data)) {
          setCards(data);
        } else if (Array.isArray(data.data)) {
          setCards(data.data);
        } else {
          setCards([]);
          console.error("Unexpected API response:", data);
        }
      } catch (err) {
        console.error("Failed to fetch process data:", err);
        setError("Failed to load process steps. Please try again later.");
        setCards([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (loading) {
    return (
      <section className="py-20 text-center text-lg font-medium">
        Loading process steps...
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 text-center text-lg font-medium text-red-500">
        {error}
      </section>
    );
  }

  if (!cards.length) {
    return (
      <section className="py-20 text-center text-lg font-medium text-gray-500">
        No process steps available at the moment.
      </section>
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 py-12 px-6">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
          On-Site Technical Verification
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cards.map((card, idx) => {
            const style = cardStyles[idx % cardStyles.length]; // cycle through predefined styles
            return (
              <div
                key={card._id || idx}
                className={`
                  p-6 rounded-lg shadow-md border-t-4 
                  transform transition-all duration-300 ease-out
                  hover:scale-[1.04] hover:shadow-xl hover:-translate-y-2
                  animate-fadeIn
                  ${style.color} ${style.border}
                `}
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                <h2 className="text-xl font-semibold mb-3 text-gray-800">{card.title}</h2>
                <p className="text-gray-700 text-sm leading-relaxed">{card.description}</p>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </>
  );
}
