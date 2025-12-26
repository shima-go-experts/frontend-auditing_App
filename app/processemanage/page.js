// "use client";

// import { useEffect, useState } from "react";
// import Sidebar from "../components/sidebar";
// import Topbar from "@/app/components/Topbar";
// import {
//   PencilSquareIcon,
//   TrashIcon,
//   PlusIcon,
// } from "@heroicons/react/24/outline";

// const API_URL = "https://auditing-app.onrender.com/api/process";

// export default function ProcessManagementPage() {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Create modal
//   const [isCreateOpen, setIsCreateOpen] = useState(false);
//   const [newData, setNewData] = useState({
//     title: "",
//     description: "",
//   });

//   // Edit modal
//   const [isEditOpen, setIsEditOpen] = useState(false);
//   const [editData, setEditData] = useState({
//     id: "",
//     title: "",
//     description: "",
//   });

//   /* ---------------- FETCH ---------------- */
//   const fetchItems = async () => {
//     try {
//       const res = await fetch(API_URL);
//       const json = await res.json();
//       setItems(json?.data || []);
//     } catch (err) {
//       console.error("Fetch error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   /* ---------------- CREATE ---------------- */
//   const handleCreate = async (e) => {
//     e.preventDefault();

//     const res = await fetch(API_URL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newData),
//     });

//     const json = await res.json();

//     if (json.success) {
//       setItems((prev) => [json.data, ...prev]);
//       setNewData({ title: "", description: "" });
//       setIsCreateOpen(false);
//     }
//   };

//   /* ---------------- OPEN EDIT ---------------- */
//   const openEditModal = (item) => {
//     setEditData({
//       id: item._id,
//       title: item.title,
//       description: item.description,
//     });
//     setIsEditOpen(true);
//   };

//   /* ---------------- UPDATE ---------------- */
//   const handleUpdate = async (e) => {
//     e.preventDefault();

//     const res = await fetch(`${API_URL}/${editData.id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         title: editData.title,
//         description: editData.description,
//       }),
//     });

//     const json = await res.json();

//     if (json.success) {
//       setItems((prev) =>
//         prev.map((item) =>
//           item._id === json.data._id ? json.data : item
//         )
//       );
//       setIsEditOpen(false);
//     }
//   };

//   /* ---------------- DELETE ---------------- */
//   const deleteItem = async (id) => {
//     if (!confirm("Are you sure?")) return;

//     await fetch(`${API_URL}/${id}`, { method: "DELETE" });
//     setItems((prev) => prev.filter((item) => item._id !== id));
//   };

//   if (loading) return <p className="p-6">Loading...</p>;

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       <Sidebar />

//       <div className="flex-1 flex flex-col">
//         <Topbar />

//         {/* HEADER */}
//         <div className="mt-20 px-8 flex justify-between items-center">
//           <h1 className="text-2xl font-bold text-gray-800">
//             Process Management
//           </h1>
//           <button
//             onClick={() => setIsCreateOpen(true)}
//             className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//           >
//             <PlusIcon className="w-5 h-5" />
//             Add Process
//           </button>
//         </div>

//         {/* TABLE */}
//         <div className="p-8">
//           <div className="overflow-x-auto bg-white rounded-xl shadow">
//             <table className="min-w-full">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="px-6 py-4 text-left">Title</th>
//                   <th className="px-6 py-4 text-left">Description</th>
//                   <th className="px-6 py-4 text-center">Actions</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {items.map((item) => (
//                   <tr
//                     key={item._id}
//                     className="border-t hover:bg-gray-50"
//                   >
//                     <td className="px-6 py-4 font-semibold">
//                       {item.title}
//                     </td>
//                     <td className="px-6 py-4 text-gray-600">
//                       {item.description}
//                     </td>
//                     <td className="px-6 py-4 text-center">
//                       <div className="flex justify-center gap-4">
//                         <button
//                           onClick={() => openEditModal(item)}
//                           className="text-blue-600 hover:text-blue-800"
//                         >
//                           <PencilSquareIcon className="w-6 h-6" />
//                         </button>
//                         <button
//                           onClick={() => deleteItem(item._id)}
//                           className="text-red-600 hover:text-red-800"
//                         >
//                           <TrashIcon className="w-6 h-6" />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}

//                 {!items.length && (
//                   <tr>
//                     <td
//                       colSpan="3"
//                       className="text-center py-8 text-gray-500"
//                     >
//                       No processes found
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       {/* ---------------- CREATE MODAL ---------------- */}
//       {isCreateOpen && (
//         <Modal
//           title="Add Process"
//           onClose={() => setIsCreateOpen(false)}
//           onSubmit={handleCreate}
//           data={newData}
//           setData={setNewData}
//         />
//       )}

//       {/* ---------------- EDIT MODAL ---------------- */}
//       {isEditOpen && (
//         <Modal
//           title="Edit Process"
//           onClose={() => setIsEditOpen(false)}
//           onSubmit={handleUpdate}
//           data={editData}
//           setData={setEditData}
//         />
//       )}
//     </div>
//   );
// }

// /* ---------------- REUSABLE MODAL ---------------- */
// function Modal({ title, onClose, onSubmit, data, setData }) {
//   return (
//     <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//       <div className="bg-white w-full max-w-md rounded-xl p-6">
//         <h2 className="text-xl font-semibold mb-4">{title}</h2>

//         <form onSubmit={onSubmit} className="space-y-4">
//           <div>
//             <label className="font-medium">Title</label>
//             <input
//               value={data.title}
//               onChange={(e) =>
//                 setData({ ...data, title: e.target.value })
//               }
//               className="w-full border rounded px-4 py-2"
//               required
//             />
//           </div>

//           <div>
//             <label className="font-medium">Description</label>
//             <textarea
//               value={data.description}
//               onChange={(e) =>
//                 setData({ ...data, description: e.target.value })
//               }
//               className="w-full border rounded px-4 py-2"
//               rows="4"
//               required
//             />
//           </div>

//           <div className="flex justify-end gap-3">
//             <button
//               type="button"
//               onClick={onClose}
//               className="border px-4 py-2 rounded"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-4 py-2 rounded"
//             >
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import Sidebar from "../components/sidebar";
// import Topbar from "@/app/components/Topbar";
// import {
//   PencilSquareIcon,
//   TrashIcon,
//   PlusIcon,
//   DocumentTextIcon,
//   MagnifyingGlassIcon,
// } from "@heroicons/react/24/outline";

// const API_URL = "https://auditing-app.onrender.com/api/process";

// export default function ProcessManagementPage() {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");

//   // Create modal
//   const [isCreateOpen, setIsCreateOpen] = useState(false);
//   const [newData, setNewData] = useState({ title: "", description: "" });

//   // Edit modal
//   const [isEditOpen, setIsEditOpen] = useState(false);
//   const [editData, setEditData] = useState({ id: "", title: "", description: "" });

//   const fetchItems = async () => {
//     try {
//       const res = await fetch(API_URL);
//       const json = await res.json();
//       setItems(json?.data || []);
//     } catch (err) {
//       console.error("Fetch error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   const handleCreate = async (e) => {
//     e.preventDefault();
//     const res = await fetch(API_URL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newData),
//     });
//     const json = await res.json();
//     if (json.success) {
//       setItems((prev) => [json.data, ...prev]);
//       setNewData({ title: "", description: "" });
//       setIsCreateOpen(false);
//     }
//   };

//   const openEditModal = (item) => {
//     setEditData({ id: item._id, title: item.title, description: item.description });
//     setIsEditOpen(true);
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     const res = await fetch(`${API_URL}/${editData.id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ title: editData.title, description: editData.description }),
//     });
//     const json = await res.json();
//     if (json.success) {
//       setItems((prev) => prev.map((item) => (item._id === json.data._id ? json.data : item)));
//       setIsEditOpen(false);
//     }
//   };

//   const deleteItem = async (id) => {
//     if (!confirm("Are you sure you want to delete this process?")) return;
//     await fetch(`${API_URL}/${id}`, { method: "DELETE" });
//     setItems((prev) => prev.filter((item) => item._id !== id));
//   };

//   const filteredItems = items.filter(item => 
//     item.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="flex min-h-screen bg-[#F8FAFC]">
//       <Sidebar />

//       <div className="flex-1 flex flex-col">
//         <Topbar />

//         <main className="mt-20 px-4 md:px-10 pb-12">
//           {/* HEADER SECTION */}
//           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
//             <div>
//               <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
//                 Process Management
//               </h1>
//               <p className="text-slate-500 mt-1">Manage and monitor organizational workflows.</p>
//             </div>
            
//             <div className="flex items-center gap-3">
//               <div className="relative">
//                 <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
//                 <input 
//                   type="text" 
//                   placeholder="Search processes..." 
//                   className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none w-64 transition-all"
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//               </div>
//               <button
//                 onClick={() => setIsCreateOpen(true)}
//                 className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition-all shadow-sm active:scale-95"
//               >
//                 <PlusIcon className="w-5 h-5" />
//                 New Process
//               </button>
//             </div>
//           </div>

//           {/* TABLE CARD */}
//           <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
//             {loading ? (
//               <div className="flex flex-col items-center justify-center py-20">
//                 <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
//                 <p className="mt-4 text-slate-500">Loading your processes...</p>
//               </div>
//             ) : (
//               <table className="w-full text-left border-collapse">
//                 <thead>
//                   <tr className="bg-slate-50 border-b border-slate-200">
//                     <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Process Title</th>
//                     <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Description</th>
//                     <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 text-right">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-slate-100">
//                   {filteredItems.map((item) => (
//                     <tr key={item._id} className="group hover:bg-blue-50/30 transition-colors">
//                       <td className="px-6 py-5">
//                         <div className="flex items-center gap-3">
//                           <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
//                             <DocumentTextIcon className="w-6 h-6" />
//                           </div>
//                           <span className="font-bold text-slate-700">{item.title}</span>
//                         </div>
//                       </td>
//                       <td className="px-6 py-5 text-slate-600 max-w-md truncate">
//                         {item.description}
//                       </td>
//                       <td className="px-6 py-5 text-right">
//                         <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
//                           <button
//                             onClick={() => openEditModal(item)}
//                             className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
//                             title="Edit"
//                           >
//                             <PencilSquareIcon className="w-5 h-5" />
//                           </button>
//                           <button
//                             onClick={() => deleteItem(item._id)}
//                             className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
//                             title="Delete"
//                           >
//                             <TrashIcon className="w-5 h-5" />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             )}

//             {!loading && filteredItems.length === 0 && (
//               <div className="text-center py-20">
//                 <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <DocumentTextIcon className="w-8 h-8 text-slate-400" />
//                 </div>
//                 <h3 className="text-lg font-medium text-slate-900">No processes found</h3>
//                 <p className="text-slate-500">Try adjusting your search or add a new process.</p>
//               </div>
//             )}
//           </div>
//         </main>
//       </div>

//       {/* MODALS */}
//       {isCreateOpen && (
//         <Modal
//           title="Create New Process"
//           onClose={() => setIsCreateOpen(false)}
//           onSubmit={handleCreate}
//           data={newData}
//           setData={setNewData}
//           confirmText="Create Process"
//         />
//       )}
//       {isEditOpen && (
//         <Modal
//           title="Update Process"
//           onClose={() => setIsEditOpen(false)}
//           onSubmit={handleUpdate}
//           data={editData}
//           setData={setEditData}
//           confirmText="Save Changes"
//         />
//       )}
//     </div>
//   );
// }

// function Modal({ title, onClose, onSubmit, data, setData, confirmText }) {
//   return (
//     <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
//       {/* Backdrop */}
//       <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose} />
      
//       {/* Content */}
//       <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
//         <div className="px-8 pt-8 pb-4">
//           <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
//         </div>

//         <form onSubmit={onSubmit} className="p-8 pt-0 space-y-5">
//           <div className="space-y-1.5">
//             <label className="text-sm font-semibold text-slate-700">Process Title</label>
//             <input
//               value={data.title}
//               onChange={(e) => setData({ ...data, title: e.target.value })}
//               className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
//               placeholder="e.g. Annual Financial Audit"
//               required
//             />
//           </div>

//           <div className="space-y-1.5">
//             <label className="text-sm font-semibold text-slate-700">Description</label>
//             <textarea
//               value={data.description}
//               onChange={(e) => setData({ ...data, description: e.target.value })}
//               className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all min-h-[120px]"
//               placeholder="Describe the steps or purpose of this process..."
//               required
//             />
//           </div>

//           <div className="flex justify-end items-center gap-3 pt-4 border-t border-slate-50 mt-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-6 py-2.5 text-slate-600 font-medium hover:bg-slate-50 rounded-xl transition-colors"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-blue-700 shadow-lg shadow-blue-500/25 transition-all active:scale-95"
//             >
//               {confirmText}
//             </button>
//           </div>
//         </form>
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
  PlusIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const API_URL = "https://auditing-app.onrender.com/api/process";

export default function ProcessManagementPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Create modal
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [newData, setNewData] = useState({ title: "", description: "" });

  // Edit modal
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editData, setEditData] = useState({ id: "", title: "", description: "" });

  const fetchItems = async () => {
    try {
      const res = await fetch(API_URL);
      const json = await res.json();
      setItems(json?.data || []);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    });
    const json = await res.json();
    if (json.success) {
      setItems((prev) => [json.data, ...prev]);
      setNewData({ title: "", description: "" });
      setIsCreateOpen(false);
    }
  };

  const openEditModal = (item) => {
    setEditData({ id: item._id, title: item.title, description: item.description });
    setIsEditOpen(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API_URL}/${editData.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: editData.title, description: editData.description }),
    });
    const json = await res.json();
    if (json.success) {
      setItems((prev) => prev.map((item) => (item._id === json.data._id ? json.data : item)));
      setIsEditOpen(false);
    }
  };

  const deleteItem = async (id) => {
    if (!confirm("Are you sure you want to delete this process?")) return;
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setItems((prev) => prev.filter((item) => item._id !== id));
  };

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p className="p-6">Loading processes...</p>;

  return (
    <AdminLayout>
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Process Management
          </h1>
          <p className="text-slate-500 mt-1">Manage and monitor organizational workflows.</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search processes..."
              className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none w-64 transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            onClick={() => setIsCreateOpen(true)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition-all shadow-sm active:scale-95"
          >
            <PlusIcon className="w-5 h-5" />
            New Process
          </button>
        </div>
      </div>

      {/* TABLE CARD */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {filteredItems.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <DocumentTextIcon className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-medium text-slate-900">No processes found</h3>
            <p className="text-slate-500">Try adjusting your search or add a new process.</p>
          </div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Process Title</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Description</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredItems.map((item) => (
                <tr key={item._id} className="group hover:bg-blue-50/30 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                        <DocumentTextIcon className="w-6 h-6" />
                      </div>
                      <span className="font-bold text-slate-700">{item.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-slate-600 max-w-md truncate">{item.description}</td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => openEditModal(item)}
                        className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                        title="Edit"
                      >
                        <PencilSquareIcon className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => deleteItem(item._id)}
                        className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                        title="Delete"
                      >
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* MODALS */}
      {(isCreateOpen || isEditOpen) && (
        <Modal
          title={isCreateOpen ? "Create New Process" : "Update Process"}
          onClose={() => {
            setIsCreateOpen(false);
            setIsEditOpen(false);
          }}
          onSubmit={isCreateOpen ? handleCreate : handleUpdate}
          data={isCreateOpen ? newData : editData}
          setData={isCreateOpen ? setNewData : setEditData}
          confirmText={isCreateOpen ? "Create Process" : "Save Changes"}
        />
      )}
    </AdminLayout>
  );
}

/* MODAL COMPONENT */
function Modal({ title, onClose, onSubmit, data, setData, confirmText }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="px-8 pt-8 pb-4">
          <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
        </div>
        <form onSubmit={onSubmit} className="p-8 pt-0 space-y-5">
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-slate-700">Process Title</label>
            <input
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
              className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
              placeholder="e.g. Annual Financial Audit"
              required
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-slate-700">Description</label>
            <textarea
              value={data.description}
              onChange={(e) => setData({ ...data, description: e.target.value })}
              className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all min-h-[120px]"
              placeholder="Describe the steps or purpose of this process..."
              required
            />
          </div>
          <div className="flex justify-end items-center gap-3 pt-4 border-t border-slate-50 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 text-slate-600 font-medium hover:bg-slate-50 rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-blue-700 shadow-lg shadow-blue-500/25 transition-all active:scale-95"
            >
              {confirmText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
