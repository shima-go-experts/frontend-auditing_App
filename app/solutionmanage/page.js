// "use client";

// import { useEffect, useState } from "react";
// import Topbar from "@/app/components/Topbar";
// import Sidebar from "../components/sidebar";
// import {
//   PencilSquareIcon,
//   TrashIcon,
//   CheckCircleIcon,
//   XCircleIcon,
//   ShieldCheckIcon,
// } from "@heroicons/react/24/outline";

// const API_URL = "https://auditing-app.onrender.com/api/solutions";

// export default function SolutionsTablePage() {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   /* ---------------- FETCH ---------------- */
//   const fetchItems = async () => {
//     try {
//       const res = await fetch(API_URL);
//       const data = await res.json();
//       setItems(Array.isArray(data.data) ? data.data : data);
//     } catch (err) {
//       console.error("Fetch error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   /* ---------------- DELETE ---------------- */
//   const deleteItem = async (id) => {
//     if (!confirm("Are you sure you want to delete this item?")) return;

//     try {
//       await fetch(`${API_URL}/${id}`, { method: "DELETE" });
//       setItems((prev) => prev.filter((item) => item._id !== id));
//     } catch (err) {
//       console.error("Delete error:", err);
//     }
//   };

//   if (loading) {
//     return <p className="p-6">Loading...</p>;
//   }

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       {/* TABLE ONLY */}
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
//             {items.map((item) => (
//               <tr key={item._id} className="border-t hover:bg-gray-50">
//                 <td className="px-6 py-4">
//                   <ShieldCheckIcon className="w-7 h-7 text-blue-600" />
//                 </td>

//                 <td className="px-6 py-4 font-semibold">
//                   {item.title}
//                 </td>

//                 <td className="px-6 py-4 text-gray-600">
//                   {item.description}
//                 </td>

//                 <td className="px-6 py-4">
//                   {item.status === "active" ? (
//                     <span className="inline-flex items-center gap-1 text-green-700 bg-green-100 px-3 py-1 rounded-full text-sm">
//                       <CheckCircleIcon className="w-4 h-4" /> Active
//                     </span>
//                   ) : (
//                     <span className="inline-flex items-center gap-1 text-red-700 bg-red-100 px-3 py-1 rounded-full text-sm">
//                       <XCircleIcon className="w-4 h-4" /> Inactive
//                     </span>
//                   )}
//                 </td>

//                 <td className="px-6 py-4 text-center">
//                   <div className="flex justify-center gap-4">
//                     <button className="text-blue-600 hover:text-blue-800">
//                       <PencilSquareIcon className="w-6 h-6" />
//                     </button>

//                     <button
//                       onClick={() => deleteItem(item._id)}
//                       className="text-red-600 hover:text-red-800"
//                     >
//                       <TrashIcon className="w-6 h-6" />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}

//             {!items.length && (
//               <tr>
//                 <td colSpan="5" className="text-center py-8 text-gray-500">
//                   No data found
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
//   XCircleIcon,
//   ShieldCheckIcon,
// } from "@heroicons/react/24/outline";

// const API_URL = "https://auditing-app.onrender.com/api/solutions";

// export default function SolutionsTablePage() {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   /* ---------------- FETCH ---------------- */
//   const fetchItems = async () => {
//     try {
//       const res = await fetch(API_URL);
//       const data = await res.json();
//       setItems(Array.isArray(data.data) ? data.data : data);
//     } catch (err) {
//       console.error("Fetch error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   /* ---------------- DELETE ---------------- */
//   const deleteItem = async (id) => {
//     if (!confirm("Are you sure you want to delete this item?")) return;

//     try {
//       await fetch(`${API_URL}/${id}`, { method: "DELETE" });
//       setItems((prev) => prev.filter((item) => item._id !== id));
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

//         {/* TABLE CONTENT */}
//         <div className="p-22">
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
//                 {items.map((item) => (
//                   <tr
//                     key={item._id}
//                     className="border-t hover:bg-gray-50 transition"
//                   >
//                     {/* ICON */}
//                     <td className="px-6 py-4">
//                       <ShieldCheckIcon className="w-7 h-7 text-blue-600" />
//                     </td>

//                     {/* TITLE */}
//                     <td className="px-6 py-4 font-semibold">
//                       {item.title}
//                     </td>

//                     {/* DESCRIPTION */}
//                     <td className="px-6 py-4 text-gray-600">
//                       {item.description}
//                     </td>

//                     {/* STATUS */}
//                     <td className="px-6 py-4">
//                       {item.status === "active" ? (
//                         <span className="inline-flex items-center gap-1 text-green-700 bg-green-100 px-3 py-1 rounded-full text-sm">
//                           <CheckCircleIcon className="w-4 h-4" />
//                           Active
//                         </span>
//                       ) : (
//                         <span className="inline-flex items-center gap-1 text-red-700 bg-red-100 px-3 py-1 rounded-full text-sm">
//                           <XCircleIcon className="w-4 h-4" />
//                           Inactive
//                         </span>
//                       )}
//                     </td>

//                     {/* ACTIONS */}
//                     <td className="px-6 py-4 text-center">
//                       <div className="flex justify-center gap-4">
//                         <button className="text-blue-600 hover:text-blue-800">
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
//                       colSpan="5"
//                       className="text-center py-8 text-gray-500"
//                     >
//                       No data found
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


// "use client";

// import { useEffect, useState } from "react";
// import Topbar from "@/app/components/Topbar";
// import Sidebar from "../components/sidebar";
// import AdminLayout from "@/app/admin/layout"
// import {
//   PencilSquareIcon,
//   TrashIcon,
//   CheckCircleIcon,
//   XCircleIcon,
//   ShieldCheckIcon,
// } from "@heroicons/react/24/outline";

// const API_URL = "https://auditing-app.onrender.com/api/solutions";
// const PAGE_SIZE = 5;

// export default function SolutionsTablePage() {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   /* Pagination */
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalItems, setTotalItems] = useState(0);

//   /* ADD */
//   const [isAddOpen, setIsAddOpen] = useState(false);
//   const [addData, setAddData] = useState({
//     title: "",
//     description: "",
//     status: "unpublished",
//   });

//   /* EDIT */
//   const [isEditOpen, setIsEditOpen] = useState(false);
//   const [editData, setEditData] = useState({
//     id: "",
//     title: "",
//     description: "",
//     status: "unpublished",
//   });

//   /* FETCH */
//   const fetchItems = async (page = 1) => {
//     setLoading(true);
//     try {
//       const res = await fetch(
//         `${API_URL}?page=${page}&limit=${PAGE_SIZE}`
//       );
//       const result = await res.json();

//       if (Array.isArray(result.data)) {
//         setItems(result.data);
//         setTotalItems(result.total || result.data.length);
//       } else {
//         setItems(result);
//         setTotalItems(result.length);
//       }
//     } catch (err) {
//       console.error("Fetch error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchItems(currentPage);
//   }, [currentPage]);

//   /* ADD */
//   const handleAdd = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch(API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(addData),
//       });

//       const result = await res.json();
//       if (result.success) {
//         fetchItems(1);
//         setCurrentPage(1);
//         setIsAddOpen(false);
//         setAddData({ title: "", description: "", status: "unpublished" });
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   /* DELETE */
//   const deleteItem = async (id) => {
//     if (!confirm("Delete this solution?")) return;
//     await fetch(`${API_URL}/${id}`, { method: "DELETE" });
//     fetchItems(currentPage);
//   };

//   /* EDIT */
//   const openEditModal = (item) => {
//     setEditData({
//       id: item._id,
//       title: item.title,
//       description: item.description,
//       status: item.status,
//     });
//     setIsEditOpen(true);
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     await fetch(`${API_URL}/${editData.id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(editData),
//     });
//     fetchItems(currentPage);
//     setIsEditOpen(false);
//   };

//   const totalPages = Math.ceil(totalItems / PAGE_SIZE);

//   if (loading) return <p className="p-6">Loading...</p>;

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       <Sidebar />

//       <div className="flex-1 flex flex-col">
//         <Topbar />

//         <main className="pt-20 px-10">
//           {/* HEADER */}
//           <div className="flex justify-between mb-6">
//             <h1 className="text-2xl font-bold">Solutions</h1>
//             <button
//               onClick={() => setIsAddOpen(true)}
//               className="bg-blue-600 text-white px-5 py-2 rounded-lg"
//             >
//               + Add Solution
//             </button>
//           </div>

//           {/* TABLE */}
//           <div className="bg-white rounded-xl shadow overflow-x-auto">
//             <table className="min-w-full">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="px-6 py-4">Icon</th>
//                   <th className="px-6 py-4 text-left">Title</th>
//                   <th className="px-6 py-4 text-left">Description</th>
//                   <th className="px-6 py-4">Status</th>
//                   <th className="px-6 py-4 text-center">Actions</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {items.map((item) => (
//                   <tr key={item._id} className="border-t">
//                     <td className="px-6 py-4">
//                       <ShieldCheckIcon className="w-6 h-6 text-blue-600" />
//                     </td>
//                     <td className="px-6 py-4 font-semibold">{item.title}</td>
//                     <td className="px-6 py-4 text-gray-600">
//                       {item.description}
//                     </td>
//                     <td className="px-6 py-4">
//                       {item.status === "published" ? (
//                         <span className="text-green-700 bg-green-100 px-3 py-1 rounded-full text-sm">
//                           Published
//                         </span>
//                       ) : (
//                         <span className="text-red-700 bg-red-100 px-3 py-1 rounded-full text-sm">
//                           Unpublished
//                         </span>
//                       )}
//                     </td>
//                     <td className="px-6 py-4 text-center flex justify-center gap-3">
//                       <button onClick={() => openEditModal(item)}>
//                         <PencilSquareIcon className="w-6 h-6 text-blue-600" />
//                       </button>
//                       <button onClick={() => deleteItem(item._id)}>
//                         <TrashIcon className="w-6 h-6 text-red-600" />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* PAGINATION */}
//           <div className="flex justify-center mt-6 gap-2">
//             <button
//               disabled={currentPage === 1}
//               onClick={() => setCurrentPage((p) => p - 1)}
//               className="px-4 py-2 border rounded disabled:opacity-50"
//             >
//               Prev
//             </button>

//             {[...Array(totalPages)].map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setCurrentPage(i + 1)}
//                 className={`px-4 py-2 border rounded ${
//                   currentPage === i + 1
//                     ? "bg-blue-600 text-white"
//                     : ""
//                 }`}
//               >
//                 {i + 1}
//               </button>
//             ))}

//             <button
//               disabled={currentPage === totalPages}
//               onClick={() => setCurrentPage((p) => p + 1)}
//               className="px-4 py-2 border rounded disabled:opacity-50"
//             >
//               Next
//             </button>
//           </div>
//         </main>
//       </div>

//       {/* MODALS */}
//       {(isAddOpen || isEditOpen) && (
//         <Modal
//           title={isAddOpen ? "Add Solution" : "Edit Solution"}
//           onClose={() => {
//             setIsAddOpen(false);
//             setIsEditOpen(false);
//           }}
//           onSubmit={isAddOpen ? handleAdd : handleUpdate}
//           data={isAddOpen ? addData : editData}
//           setData={isAddOpen ? setAddData : setEditData}
//         />
//       )}
//     </div>
//   );
// }

// /* MODAL */
// function Modal({ title, onClose, onSubmit, data, setData }) {
//   return (
//     <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//       <div className="bg-white rounded-xl w-full max-w-md p-6">
//         <h2 className="text-xl font-semibold mb-4">{title}</h2>

//         <form onSubmit={onSubmit} className="space-y-4">
//           <input
//             value={data.title}
//             onChange={(e) => setData({ ...data, title: e.target.value })}
//             className="w-full border rounded px-4 py-2"
//             placeholder="Title"
//             required
//           />

//           <textarea
//             value={data.description}
//             onChange={(e) =>
//               setData({ ...data, description: e.target.value })
//             }
//             className="w-full border rounded px-4 py-2"
//             rows="4"
//             placeholder="Description"
//             required
//           />

//           <select
//             value={data.status}
//             onChange={(e) => setData({ ...data, status: e.target.value })}
//             className="w-full border rounded px-4 py-2"
//           >
//             <option value="published">Published</option>
//             <option value="unpublished">Unpublished</option>
//           </select>

//           <div className="flex justify-end gap-3">
//             <button type="button" onClick={onClose} className="border px-4 py-2 rounded">
//               Cancel
//             </button>
//             <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
//               Save
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
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const API_URL = "https://auditing-app.onrender.com/api/solutions";
const PAGE_SIZE = 5;

export default function SolutionsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  /* Pagination */
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  /* ADD */
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [addData, setAddData] = useState({
    title: "",
    description: "",
    status: "unpublished",
  });

  /* EDIT */
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editData, setEditData] = useState({
    id: "",
    title: "",
    description: "",
    status: "unpublished",
  });

  /* FETCH */
  const fetchItems = async (page = 1) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}?page=${page}&limit=${PAGE_SIZE}`);
      const result = await res.json();

      if (Array.isArray(result.data)) {
        setItems(result.data);
        setTotalItems(result.total || result.data.length);
      } else {
        setItems(result);
        setTotalItems(result.length);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems(currentPage);
  }, [currentPage]);

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
        fetchItems(1);
        setCurrentPage(1);
        setIsAddOpen(false);
        setAddData({ title: "", description: "", status: "unpublished" });
      }
    } catch (err) {
      console.error(err);
    }
  };

  /* DELETE */
  const deleteItem = async (id) => {
    if (!confirm("Delete this solution?")) return;
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchItems(currentPage);
  };

  /* EDIT */
  const openEditModal = (item) => {
    setEditData({
      id: item._id,
      title: item.title,
      description: item.description,
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
    fetchItems(currentPage);
    setIsEditOpen(false);
  };

  const totalPages = Math.ceil(totalItems / PAGE_SIZE);

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <AdminLayout>
      {/* HEADER */}
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Solutions</h1>
        <button
          onClick={() => setIsAddOpen(true)}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          + Add Solution
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
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
            {items.map((item) => (
              <tr key={item._id} className="border-t">
                <td className="px-6 py-4">
                  <ShieldCheckIcon className="w-6 h-6 text-blue-600" />
                </td>
                <td className="px-6 py-4 font-semibold">{item.title}</td>
                <td className="px-6 py-4 text-gray-600">{item.description}</td>
                <td className="px-6 py-4">
                  {item.status === "published" ? (
                    <span className="text-green-700 bg-green-100 px-3 py-1 rounded-full text-sm">
                      Published
                    </span>
                  ) : (
                    <span className="text-red-700 bg-red-100 px-3 py-1 rounded-full text-sm">
                      Unpublished
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-center flex justify-center gap-3">
                  <button onClick={() => openEditModal(item)}>
                    <PencilSquareIcon className="w-6 h-6 text-blue-600" />
                  </button>
                  <button onClick={() => deleteItem(item._id)}>
                    <TrashIcon className="w-6 h-6 text-red-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
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

      {/* MODALS */}
      {(isAddOpen || isEditOpen) && (
        <Modal
          title={isAddOpen ? "Add Solution" : "Edit Solution"}
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

/* MODAL */
function Modal({ title, onClose, onSubmit, data, setData }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md p-6">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>

        <form onSubmit={onSubmit} className="space-y-4">
          <input
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
            className="w-full border rounded px-4 py-2"
            placeholder="Title"
            required
          />

          <textarea
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
            className="w-full border rounded px-4 py-2"
            rows="4"
            placeholder="Description"
            required
          />

          <select
            value={data.status}
            onChange={(e) => setData({ ...data, status: e.target.value })}
            className="w-full border rounded px-4 py-2"
          >
            <option value="published">Published</option>
            <option value="unpublished">Unpublished</option>
          </select>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="border px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
