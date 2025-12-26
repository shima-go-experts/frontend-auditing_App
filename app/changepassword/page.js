import AdminLayout from "@/app/admin/layout";

export default function ChangePasswordPage() {
  return (
    <AdminLayout>
      <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-[#f4f7fb] to-[#e9eff9] px-6 py-10">
        
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-[#0E4C92]/30">
          
          {/* Header */}
          <div className="px-8 py-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-[#0E4C92]">
              Change Password
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Update your account security credentials
            </p>
          </div>

          {/* Form */}
          <div className="p-8 space-y-8">

            {/* Current Password */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <label className="text-sm font-semibold text-gray-700">
                Current Password
              </label>
              <input
                type="password"
                placeholder="Enter current password"
                className="md:col-span-2 w-full px-4 py-2.5 rounded-lg
                border border-gray-300 focus:outline-none
                focus:ring-2 focus:ring-[#0E4C92]
                focus:border-[#0E4C92] transition-all"
              />
            </div>

            {/* New Password */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <label className="text-sm font-semibold text-gray-700">
                New Password
              </label>
              <div className="md:col-span-2">
                <input
                  type="password"
                  placeholder="Enter new password"
                  className="w-full px-4 py-2.5 rounded-lg
                  border border-gray-300 focus:outline-none
                  focus:ring-2 focus:ring-[#0E4C92]
                  focus:border-[#0E4C92] transition-all"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Must be at least 8 characters
                </p>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <label className="text-sm font-semibold text-gray-700">
                Confirm New Password
              </label>
              <input
                type="password"
                placeholder="Re-enter new password"
                className="md:col-span-2 w-full px-4 py-2.5 rounded-lg
                border border-gray-300 focus:outline-none
                focus:ring-2 focus:ring-[#0E4C92]
                focus:border-[#0E4C92] transition-all"
              />
            </div>

          </div>

          {/* Footer */}
          <div className="px-8 py-6 bg-gray-50 border-t border-gray-200 rounded-b-2xl flex justify-end gap-4">
            <button
              className="px-6 py-2.5 rounded-lg border border-gray-300
              text-gray-700 font-medium hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              className="px-6 py-2.5 rounded-lg bg-[#0E4C92] text-white
              font-semibold hover:bg-[#0c417c]
              transition shadow-md hover:shadow-lg"
            >
              Update Password
            </button>
          </div>

        </div>
      </div>
    </AdminLayout>
  );
}
