import AdminLayout from "@/app/admin/layout";

export default function AdminProfilePage() {
  return (
    <AdminLayout>
      <div className="min-h-screen bg-gradient-to-br from-[#f4f7fb] to-[#e9eff9] px-4 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in">

          {/* LEFT : PROFILE CARD */}
          <div
  className="lg:sticky lg:top-8 h-fit bg-white rounded-2xl
  shadow-lg p-6 text-center
  border-2 border-[#0E4C92]
  transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
>

            {/* Avatar */}
            <div className="flex justify-center">
              <img
                src="team1.jpg"
                alt="Admin Avatar"
                className="w-28 h-28 rounded-full border-4 border-indigo-500
                shadow-md object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Info */}
            <h2 className="mt-4 text-2xl font-bold text-gray-800">
              Super Admin
            </h2>

            <p className="text-sm text-indigo-500 font-medium mt-1">
              Administrator
            </p>

            <div className="mt-4 space-y-1 text-sm text-gray-600">
              <p>
                <span className="font-semibold">Username:</span> admin
              </p>
              <p>
                <span className="font-semibold">Email:</span> admin@site.com
              </p>
            </div>

            {/* Divider */}
            <div className="my-6 border-t border-dashed border-gray-300"></div>

            {/* Action */}
            <button
              className="w-full py-2.5 rounded-lg bg-indigo-600 text-white
              font-semibold transition-all duration-300
              hover:bg-indigo-700 hover:scale-[1.02]
              active:scale-95"
            >
              {/* Change Password */}
            </button>
          </div>

          {/* RIGHT : PROFILE FORM */}
          <div
  className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8
  border-2 border-[#0E4C92]
  transition-all duration-300 hover:shadow-xl"
>

            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Profile Information
            </h3>

            {/* Upload */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Profile Image
              </label>
              <p className="text-xs text-gray-500 mb-2">
                JPG / PNG • Max 400×400px
              </p>
              <input
                type="file"
                accept=".png,.jpg,.jpeg"
                className="block w-full text-sm text-gray-600
                file:mr-4 file:py-2.5 file:px-4
                file:rounded-lg file:border
                file:border-indigo-200
                file:bg-indigo-50 file:text-indigo-700
                hover:file:bg-indigo-100
                transition-all"
              />
            </div>

            {/* FORM GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  defaultValue="Super Admin"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-indigo-500
                  focus:border-indigo-500 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="admin@site.com"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-indigo-500
                  focus:border-indigo-500 transition-all"
                />
              </div>
            </div>

            {/* Divider */}
            <div className="my-8 border-t border-gray-200"></div>

            {/* BUTTON */}
            <button
              className="w-full md:w-auto px-8 py-2.5 bg-indigo-600 text-white
              rounded-lg font-semibold
              transition-all duration-300
              hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-[1px]
              active:scale-95"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
