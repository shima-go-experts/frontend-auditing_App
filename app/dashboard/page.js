"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminLayout from "@/app/admin/layout";

export default function DashboardPage() {
  const router = useRouter();

  // Protect the dashboard
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.replace("/login");
  }, [router]);

  return (
    <AdminLayout>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Welcome back 👋
      </h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard title="Users" value="120" />
        <DashboardCard title="Active Users" value="95" />
        <DashboardCard title="Reports" value="32" />
        <DashboardCard title="Revenue" value="₹45,000" />
      </div>
    </AdminLayout>
  );
}

/* ---------------- CARD COMPONENT ---------------- */
function DashboardCard({ title, value }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-2xl font-bold text-gray-800 mt-2">{value}</h3>
    </div>
  );
}
