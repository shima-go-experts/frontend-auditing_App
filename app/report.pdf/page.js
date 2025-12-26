"use client";

import React from "react";
import { FaDownload } from "react-icons/fa";

// ✅ Import your Navbar & Footer
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function VerificationReportForm() {
  return (
    <div className="w-full bg-white min-h-screen flex flex-col">
      
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex flex-col items-center py-20 px-4 flex-grow">
        {/* Heading */}
        <h1 className="text-semibold md:text-3xl font-bold text-center text-gray-800">
          Download Your{" "}
          <span className="text-blue-600">Verification Report</span>
        </h1>

        {/* Sub Heading */}
        <p className="text-gray-500 mt-3 text-center text-lg">
          Enter your details to instantly download a sample Due Diligence Report.
        </p>

        {/* Form Container */}
        <div
          className="
            mt-12 bg-gradient-to-b from-blue-50 to-blue-100 
            p-10 rounded-3xl shadow-xl w-full max-w-6xl
          "
        >
          {/* Inputs Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="
                w-full px-5 py-4 border border-blue-200 rounded-xl 
                outline-none text-gray-700 placeholder-blue-400
                focus:ring-2 focus:ring-blue-500 bg-white
              "
            />

            <input
              type="email"
              placeholder="Email Address"
              className="
                w-full px-5 py-4 border border-blue-200 rounded-xl 
                outline-none text-gray-700 placeholder-blue-400
                focus:ring-2 focus:ring-blue-500 bg-white
              "
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="
                w-full px-5 py-4 border border-blue-200 rounded-xl 
                outline-none text-gray-700 placeholder-blue-400
                focus:ring-2 focus:ring-blue-500 bg-white
              "
            />
          </div>

          {/* Button */}
          <div className="mt-8">
            <button
              className="
                flex items-center justify-center gap-3
                bg-blue-600 text-white px-10 py-3 rounded-xl 
                hover:bg-blue-700 transition transform hover:scale-105 
                shadow-lg text-lg font-semibold
              "
            >
              <FaDownload className="text-white text-xl" />
              Download Report
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
