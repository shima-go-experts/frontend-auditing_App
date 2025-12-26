// "use client";

// import Sidebar from "@/app/components/sidebar";
// import Topbar from "@/app/components/Topbar";

// export default function AdminLayout({ children }) {
//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Sidebar (fixed) */}
//       <Sidebar />

//       {/* Main content */}
//       <div className="flex-1 ml-72">
//         {/* Topbar fixed */}
//         <div className="fixed top-0 left-72 right-0 z-50">
//           <Topbar />
//         </div>

//         {/* Page content */}
//         <main className="pt-20 px-10">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/app/components/sidebar";
import Topbar from "@/app/components/Topbar";

export default function AdminLayout({ children }) {
  const router = useRouter();

  // 🔐 Protect admin routes
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.replace("/login");
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN AREA */}
      <div className="flex-1 md:ml-72">
        {/* TOPBAR */}
        <div className="fixed top-0 left-0 md:left-72 right-0 z-50">
          <Topbar onLogout={handleLogout} />
        </div>

        {/* PAGE CONTENT */}
        <main className="pt-20 px-4 md:px-10">
          {children}
        </main>
      </div>
    </div>
  );
}
