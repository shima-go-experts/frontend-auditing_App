"use client";

import { useEffect, useState } from "react";
import {
  ShieldCheck,
  FileSearch,
  BadgeCheck,
  Building2,
  MapPinCheck,
  Landmark,
  ScanSearch,
  History,
  FileCheck2,
  Layers,
  AlertTriangle,
  HelpCircle,
} from "lucide-react";

/* ICON MAP */
const iconMap = {
  ShieldCheck,
  FileSearch,
  BadgeCheck,
  Building2,
  MapPinCheck,
  Landmark,
  ScanSearch,
  History,
  FileCheck2,
  Layers,
  AlertTriangle,
  HelpCircle,
};

export default function ServicesSection() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(
          "https://auditing-app.onrender.com/api/solutions"
        );
        const data = await res.json();

        // Normalize response: handle array or { data: [] } structure
        if (Array.isArray(data)) {
          setServices(data);
        } else if (Array.isArray(data.data)) {
          setServices(data.data);
        } else {
          setServices([]);
          console.error("Unexpected API response:", data);
        }
      } catch (err) {
        console.error("Failed to fetch services:", err);
        setError("Failed to load services. Please try again later.");
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <section className="py-20 text-center text-lg font-medium">
        Loading services...
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

  if (!services.length) {
    return (
      <section className="py-20 text-center text-lg font-medium text-gray-500">
        No services available at the moment.
      </section>
    );
  }

  return (
    <section className="px-6 md:px-16 lg:px-32 py-20 bg-gray-50">
      <div className="text-center mb-14">
        <h2 className="text-xl md:text-4xl font-bold text-gray-900">
          Our <span className="text-blue-600">Solutions to Audit Your</span>{" "}
          Properties
        </h2>
        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          We offer a complete suite of professional audits designed to secure
          your real-estate investment.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => {
          // Default to ShieldCheck if icon name not found
          const Icon = iconMap[service.icon] || ShieldCheck;

          return (
            <div
              key={service._id || service.title}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all duration-300">
                <Icon
                  size={30}
                  className="text-blue-600 group-hover:text-white"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
