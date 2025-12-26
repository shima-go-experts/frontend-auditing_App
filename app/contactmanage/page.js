"use client";

import { useEffect, useState } from "react";
import AdminLayout from "@/app/admin/layout";
import { TrashIcon } from "@heroicons/react/24/outline";

const API_URL = "https://auditing-app.onrender.com/api/contact";
const PAGE_SIZE = 10; // Display 10 messages per page

export default function ContactAdminPage() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  /* FETCH CONTACTS */
  const fetchContacts = async () => {
    try {
      const res = await fetch(API_URL);
      const json = await res.json();
      setContacts(json?.data || []);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  /* DELETE CONTACT */
  const deleteContact = async (id) => {
    if (!confirm("Are you sure you want to delete this message?")) return;
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setContacts((prev) => prev.filter((c) => c._id !== id));
  };

  /* UPDATE STATUS */
  const updateStatus = async (id, status) => {
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    setContacts((prev) =>
      prev.map((c) => (c._id === id ? { ...c, status } : c))
    );
  };

  /* PAGINATION */
  const totalPages = Math.ceil(contacts.length / PAGE_SIZE);
  const paginatedData = contacts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <AdminLayout>
      {/* HEADER */}
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Contact Messages</h1>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Message</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((c) => (
              <tr key={c._id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4 font-semibold">{c.name}</td>
                <td className="px-6 py-4">{c.email}</td>
                <td className="px-6 py-4 max-w-md truncate">{c.message}</td>
                <td className="px-6 py-4">
                  <select
                    className="border px-3 py-1 rounded"
                    value={c.status}
                    onChange={(e) => updateStatus(c._id, e.target.value)}
                  >
                    <option value="new">New</option>
                    <option value="read">Read</option>
                    <option value="replied">Replied</option>
                  </select>
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => deleteContact(c._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <TrashIcon className="w-6 h-6 inline" />
                  </button>
                </td>
              </tr>
            ))}

            {!paginatedData.length && (
              <tr>
                <td colSpan="5" className="text-center py-8 text-gray-500">
                  No messages found
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
    </AdminLayout>
  );
}
