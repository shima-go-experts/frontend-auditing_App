// export default function ScrollableTeamBanner() {
//   return (
//     <section className="bg-white py-12 px-6">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold text-gray-900 mb-6">
//           Meet the Team
//         </h2>
//         <p className="text-lg text-gray-700 mb-8">
//           Trusted Professionals Who Treat Your Home Like Their Own
//         </p>

//         {/* Scrollable Row of Images */}
//         <div className="overflow-x-auto">
//           <div className="flex gap-6 min-w-[1000px]">
//             {/* Team Member 1 */}
//             <div className="flex-shrink-0 w-64 h-80 rounded-lg overflow-hidden shadow-md">
//               <img
//                 src="/team1.jpg"
//                 alt="Team Member 1"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Team Member 2 */}
//             <div className="flex-shrink-0 w-64 h-80 rounded-lg overflow-hidden shadow-md">
//               <img
//                 src="/team2.jpg"
//                 alt="Team Member 2"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Team Member 3 */}
//             <div className="flex-shrink-0 w-64 h-80 rounded-lg overflow-hidden shadow-md">
//               <img
//                 src="/team3.jpg"
//                 alt="Team Member 3"
//                 className="w-full h-full object-cover"
//               />
//             </div>
 
//             {/* Team Member 4 */}
//             <div className="flex-shrink-0 w-64 h-80 rounded-lg overflow-hidden shadow-md">
//               <img
//                 src="/team4.jpg"
//                 alt="Team Member 4"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


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


export default function Home() {
  const cards = [
    {
      title: "Dimension & Area Audit",
      description:
        "Physical measurement of the built-up area, comparing on-ground measurements against the Title Deed and official FMB/Survey Sketch to identify any discrepancies.",
      color: "bg-blue-100",
      border: "border-blue-400",
    },
    {
      title: "Zoning Confirmation",
      description:
        "Verification of land use classification (Residential, Commercial) per the Master Plan, checking for required zones (FTL, buffer, contour), and identifying proposed road widening plans.",
      color: "bg-green-100",
      border: "border-green-400",
    },
    {
      title: "Construction Quality Assessment",
      description:
        "Evaluation of building construction quality, including structural components, beams, columns, basement, inspection for dampness, cracks, and seepage, and assessment of material quality. Advanced 3D laser scanning is used for enhanced verification.",
      color: "bg-yellow-100",
      border: "border-yellow-400",
    },
    {
      title: "Systems & Infrastructure Review",
      description:
        "Review of electrical wiring (load capacity), plumbing systems, mechanical components, borewell, and sewage systems (STP; septic tank) for condition, age, and functionality.",
      color: "bg-purple-100",
      border: "border-purple-400",
    },
    {
      title: "Road Access Verification",
      description:
        "Confirmation of legal, clear road access, including measurement of existing road width and identification of any shared right-of-way concerns or encroachments.",
      color: "bg-red-100",
      border: "border-red-400",
    },
    {
      title: "Site Visit Summary",
      description:
        "Final report consolidating all findings from the technical verification process, highlighting risks, discrepancies, and compliance status for investment decisions.",
      color: "bg-teal-100",
      border: "border-teal-400",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800 animate-fadeIn">
        Pillar 2: On-Site Technical Verification
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`
              p-6 rounded-lg shadow-md border-t-4 ${card.color} ${card.border}
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-xl
              opacity-0 animate-fadeUp
            `}
            style={{ animationDelay: `${idx * 0.15}s` }}
          >
            <h2 className="text-xl font-semibold mb-3 text-gray-800">{card.title}</h2>
            <p className="text-gray-700 text-sm leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
