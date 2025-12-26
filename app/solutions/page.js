"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ServicesSection from "@/app/components/ServicesSection";
export default function DueDiligencePromo() {
  return (
    <>
      <Navbar />

      <section className="bg-gray-50 px-6 md:px-20 lg:px-32 pt-10 pb-16">
        {/* Heading */}
        <div className="max-w-6xl mx-auto text-center md:text-left mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Our Solution:{" "}
            <span className="text-yellow-600">The 360° Due Diligence Audit</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Text Block */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              We provide a complete, end-to-end Property Due Diligence Service designed to protect you from legal pitfalls and technical complications that could jeopardize your investment.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our multi-disciplinary team combines seasoned real estate attorneys, licensed civil engineers, and certified architects who meticulously investigate every aspect of the property transaction.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We uncover the hard facts others miss, identify all potential risks before they become problems, and empower you to invest with total peace of mind and confidence.
            </p>
          </div>

          {/* Image Block */}
          <div className="relative mt-6 md:mt-0">
            <div className="h-104 w-full rounded-lg overflow-hidden shadow-lg">
              <img
                src="/housedes.jpg"
                alt="Due Diligence Team"
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="absolute top-4 left-4 bg-yellow-600 text-white px-3 py-1 text-sm font-semibold rounded shadow">
              Expert Team
            </div>
          </div>
        </div>
      </section>
<ServicesSection />
      <Footer />
    </>
  );
}

