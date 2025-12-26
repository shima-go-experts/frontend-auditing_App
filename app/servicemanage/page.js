// "use client";

// import { useEffect, useState } from "react";
// import Topbar from "@/app/components/Topbar";
// import Sidebar from "../components/sidebar";

// import {
//   PencilSquareIcon,
//   TrashIcon,
//   CheckCircleIcon,
// } from "@heroicons/react/24/outline";
// import * as FaIcons from "react-icons/fa";

// const API_URL = "https://auditing-app.onrender.com/api/services";

// export default function ServicesTablePage() {
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);

//   /* ---------------- FETCH ---------------- */
//   const fetchServices = async () => {
//     try {
//       const res = await fetch(API_URL);
//       const json = await res.json();
//       setServices(json?.data || []);
//     } catch (err) {
//       console.error("Fetch error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   /* ---------------- DELETE ---------------- */
//   const deleteService = async (id) => {
//     if (!confirm("Are you sure you want to delete this service?")) return;

//     try {
//       await fetch(`${API_URL}/${id}`, {
//         method: "DELETE",
//       });

//       setServices((prev) => prev.filter((item) => item._id !== id));
//     } catch (err) {
//       console.error("Delete error:", err);
//     }
//   };

//   if (loading) {
//     return <p className="p-6">Loading...</p>;
//   }

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <div className="overflow-x-auto bg-white rounded-xl shadow">
//         <table className="min-w-full">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="px-6 py-4">Icon</th>
//               <th className="px-6 py-4">Title</th>
//               <th className="px-6 py-4">Description</th>
//               <th className="px-6 py-4">Status</th>
//               <th className="px-6 py-4 text-center">Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {services.map((item) => {
//               const IconComponent =
//                 FaIcons[item.icon?.trim()] || FaIcons.FaShieldAlt;

//               return (
//                 <tr
//                   key={item._id}
//                   className="border-t hover:bg-gray-50 transition"
//                 >
//                   {/* ICON */}
//                   <td className="px-6 py-4">
//                     <IconComponent className="w-6 h-6 text-blue-600" />
//                   </td>

//                   {/* TITLE */}
//                   <td className="px-6 py-4 font-semibold">
//                     {item.title}
//                   </td>

//                   {/* DESCRIPTION */}
//                   <td className="px-6 py-4 text-gray-600">
//                     {item.description}
//                   </td>

//                   {/* STATUS */}
//                   <td className="px-6 py-4">
//                     <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
//                       <CheckCircleIcon className="w-4 h-4" />
//                       {item.status}
//                     </span>
//                   </td>

//                   {/* ACTIONS */}
//                   <td className="px-6 py-4 text-center">
//                     <div className="flex justify-center gap-4">
//                       <button className="text-blue-600 hover:text-blue-800">
//                         <PencilSquareIcon className="w-6 h-6" />
//                       </button>

//                       <button
//                         onClick={() => deleteService(item._id)}
//                         className="text-red-600 hover:text-red-800"
//                       >
//                         <TrashIcon className="w-6 h-6" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               );
//             })}

//             {!services.length && (
//               <tr>
//                 <td colSpan="5" className="text-center py-8 text-gray-500">
//                   No services found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import Topbar from "@/app/components/Topbar";
// import Sidebar from "../components/sidebar";

// import {
//   PencilSquareIcon,
//   TrashIcon,
//   CheckCircleIcon,
// } from "@heroicons/react/24/outline";
// import * as FaIcons from "react-icons/fa";

// const API_URL = "https://auditing-app.onrender.com/api/services";

// export default function ServicesTablePage() {
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);

//   /* ---------------- FETCH ---------------- */
//   const fetchServices = async () => {
//     try {
//       const res = await fetch(API_URL);
//       const json = await res.json();
//       setServices(json?.data || []);
//     } catch (err) {
//       console.error("Fetch error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   /* ---------------- DELETE ---------------- */
//   const deleteService = async (id) => {
//     if (!confirm("Are you sure you want to delete this service?")) return;

//     try {
//       await fetch(`${API_URL}/${id}`, { method: "DELETE" });
//       setServices((prev) => prev.filter((item) => item._id !== id));
//     } catch (err) {
//       console.error("Delete error:", err);
//     }
//   };

//   if (loading) {
//     return <p className="p-6">Loading...</p>;
//   }

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* SIDEBAR */}
//       <Sidebar />

//       {/* MAIN CONTENT */}
//       <div className="flex-1 flex flex-col">
//         {/* TOPBAR */}
//         <Topbar />

//         {/* TABLE */}
//         <div className="p-32">
//           <div className="overflow-x-auto bg-white rounded-xl shadow">
//             <table className="min-w-full">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="px-6 py-4">Icon</th>
//                   <th className="px-6 py-4">Title</th>
//                   <th className="px-6 py-4">Description</th>
//                   <th className="px-6 py-4">Status</th>
//                   <th className="px-6 py-4 text-center">Actions</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {services.map((item) => {
//                   const IconComponent =
//                     FaIcons[item.icon?.trim()] || FaIcons.FaShieldAlt;

//                   return (
//                     <tr
//                       key={item._id}
//                       className="border-t hover:bg-gray-50 transition"
//                     >
//                       {/* ICON */}
//                       <td className="px-6 py-4">
//                         <IconComponent className="w-6 h-6 text-blue-600" />
//                       </td>

//                       {/* TITLE */}
//                       <td className="px-6 py-4 font-semibold">
//                         {item.title}
//                       </td>

//                       {/* DESCRIPTION */}
//                       <td className="px-6 py-4 text-gray-600">
//                         {item.description}
//                       </td>

//                       {/* STATUS */}
//                       <td className="px-6 py-4">
//                         <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
//                           <CheckCircleIcon className="w-4 h-4" />
//                           {item.status}
//                         </span>
//                       </td>

//                       {/* ACTIONS */}
//                       <td className="px-6 py-4 text-center">
//                         <div className="flex justify-center gap-4">
//                           <button className="text-blue-600 hover:text-blue-800">
//                             <PencilSquareIcon className="w-6 h-6" />
//                           </button>

//                           <button
//                             onClick={() => deleteService(item._id)}
//                             className="text-red-600 hover:text-red-800"
//                           >
//                             <TrashIcon className="w-6 h-6" />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   );
//                 })}

//                 {!services.length && (
//                   <tr>
//                     <td
//                       colSpan="5"
//                       className="text-center py-8 text-gray-500"
//                     >
//                       No services found
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import AdminLayout from "@/app/admin/layout";
import {
  PencilSquareIcon,
  TrashIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import * as FaIcons from "react-icons/fa";

const API_URL = "https://auditing-app.onrender.com/api/services";
const PAGE_SIZE = 5;

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  /* Pagination */
  const [currentPage, setCurrentPage] = useState(1);

  /* ADD */
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [addData, setAddData] = useState({
    title: "",
    description: "",
    icon: "FaShieldAlt",
    status: "published",
  });

  /* EDIT */
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editData, setEditData] = useState({
    id: "",
    title: "",
    description: "",
    icon: "",
    status: "published",
  });

  /* FETCH */
  const fetchServices = async () => {
    try {
      const res = await fetch(API_URL);
      const json = await res.json();
      setServices(json?.data || []);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  /* ADD */
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addData),
      });
      const result = await res.json();
      if (result.success) {
        setServices((prev) => [result.data, ...prev]);
        setIsAddOpen(false);
        setAddData({
          title: "",
          description: "",
          icon: "FaShieldAlt",
          status: "published",
        });
        setCurrentPage(1);
      }
    } catch (err) {
      console.error("Add error:", err);
    }
  };

  /* DELETE */
  const deleteService = async (id) => {
    if (!confirm("Are you sure you want to delete this service?")) return;
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setServices((prev) => prev.filter((item) => item._id !== id));
  };

  /* EDIT */
  const openEditModal = (item) => {
    setEditData({
      id: item._id,
      title: item.title,
      description: item.description,
      icon: item.icon,
      status: item.status,
    });
    setIsEditOpen(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await fetch(`${API_URL}/${editData.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editData),
    });
    setServices((prev) =>
      prev.map((item) =>
        item._id === editData.id ? { ...editData, _id: editData.id } : item
      )
    );
    setIsEditOpen(false);
  };

  /* PAGINATION LOGIC */
  const totalPages = Math.ceil(services.length / PAGE_SIZE);
const paginatedData = services.slice(
  (currentPage - 1) * PAGE_SIZE,
  currentPage * PAGE_SIZE
);

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <AdminLayout>
      {/* HEADER */}
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Services</h1>
        <button
          onClick={() => setIsAddOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
        >
          + Add Service
        </button>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4">Icon</th>
              <th className="px-6 py-4 text-left">Title</th>
              <th className="px-6 py-4 text-left">Description</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => {
              const IconComponent = FaIcons[item.icon?.trim()] || FaIcons.FaShieldAlt;
              return (
                <tr key={item._id} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </td>
                  <td className="px-6 py-4 font-semibold">{item.title}</td>
                  <td className="px-6 py-4 text-gray-600">{item.description}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      <CheckCircleIcon className="w-4 h-4" />
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-4">
                      <button onClick={() => openEditModal(item)}>
                        <PencilSquareIcon className="w-6 h-6 text-blue-600" />
                      </button>
                      <button onClick={() => deleteService(item._id)}>
                        <TrashIcon className="w-6 h-6 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}

            {!paginatedData.length && (
              <tr>
                <td colSpan="5" className="text-center py-8 text-gray-500">
                  No services found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 border rounded ${
                currentPage === i + 1 ? "bg-blue-600 text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      {/* MODAL */}
      {(isAddOpen || isEditOpen) && (
        <Modal
          title={isAddOpen ? "Add Service" : "Edit Service"}
          onClose={() => {
            setIsAddOpen(false);
            setIsEditOpen(false);
          }}
          onSubmit={isAddOpen ? handleAdd : handleUpdate}
          data={isAddOpen ? addData : editData}
          setData={isAddOpen ? setAddData : setEditData}
        />
      )}
    </AdminLayout>
  );
}

/* ---------------- MODAL ---------------- */
function Modal({ title, onClose, onSubmit, data, setData }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md p-6">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>

        <form onSubmit={onSubmit} className="space-y-4">
          <input
            className="w-full border px-4 py-2 rounded"
            placeholder="Title"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
            required
          />

          <textarea
            className="w-full border px-4 py-2 rounded"
            placeholder="Description"
            rows="3"
            value={data.description}
            onChange={(e) =>
              setData({ ...data, description: e.target.value })
            }
            required
          />

          <input
            className="w-full border px-4 py-2 rounded"
            placeholder="Icon (FaGavel, FaSearch...)"
            value={data.icon}
            onChange={(e) => setData({ ...data, icon: e.target.value })}
          />

          <select
            className="w-full border px-4 py-2 rounded"
            value={data.status}
            onChange={(e) => setData({ ...data, status: e.target.value })}
          >
            <option value="published">Published</option>
            <option value="unpublished">Unpublished</option>
          </select>

          <div className="flex justify-end gap-3">
            <button type="button" onClick={onClose} className="border px-4 py-2 rounded">
              Cancel
            </button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
