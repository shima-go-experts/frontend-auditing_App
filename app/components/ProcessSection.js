"use client";
import { FaFileAlt, FaSearch, FaHandshake } from "react-icons/fa";

export default function ProcessSection() {
  const steps = [
    {
      icon: <FaHandshake className="text-2xl text-[#6b6b9c]" />,
      title: "Consultation & Document Kick-Off",
      desc: "You share initial property details and any available documents from the seller. We provide a transparent quote with clear timeline expectations and explain our methodology.",
    },
    {
      icon: <FaSearch className="text-2xl text-[#6b6b9c]" />,
      title: "Investigation & Analysis",
      desc: "Our legal and technical teams begin comprehensive work—visiting government offices, searching official registries, and conducting detailed on-site inspections. Typical turnaround: 7–10 working days.",
    },
    {
      icon: <FaFileAlt className="text-2xl text-[#6b6b9c]" />,
      title: "Report Delivery & Consultation",
      desc: "We deliver your detailed final report and schedule a consultation call. We walk through findings, explain complex technical points, and answer all your questions.",
    },
  ];

  return (
    <section className="py-24 bg-[#f7f8fc]">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">
          Our Simple & Transparent Process
        </h2>
        <p className="text-gray-600 text-lg mt-3">
          We’ve streamlined property due diligence into three straightforward
          phases, ensuring you stay informed every step of the way.
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className="group flex flex-col items-start md:items-center bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
          >
            {/* Icon with progress bar */}
            <div className="flex items-center w-full">
              <div className="w-16 h-16 rounded-full bg-[#ecebfd] flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110">
                {step.icon}
              </div>

              {/* Progress Line */}
              <div className="hidden md:block h-3 w-full bg-gradient-to-r from-[#e1e0fb] to-[#d2d1f7] rounded-lg ml-3 transition-all duration-300 group-hover:from-[#d6d4ff] group-hover:to-[#c7c5ff]" />
            </div>

            {/* Text */}
            <div className="mt-6 md:text-center">
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#6b6b9c] transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-600 mt-3 leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
