// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const router = useRouter();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const res = await fetch("https://auditing-app.onrender.com/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.message || "Login failed");
//         return;
//       }

//       // ✅ Save token (JWT)
//       localStorage.setItem("token", data.token);

//       // ✅ Redirect to admin dashboard
//       router.push("/admin/dashboard");
//     } catch (err) {
//       setError("Server error. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">
        
//         {/* HEADER */}
//         <div className="text-center mb-6">
//           <h1 className="text-2xl font-bold text-gray-800">Admin Login</h1>
//           <p className="text-gray-500 text-sm mt-1">
//             Sign in to access the dashboard
//           </p>
//         </div>

//         {/* ERROR */}
//         {error && (
//           <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg mb-4">
//             {error}
//           </div>
//         )}

//         {/* FORM */}
//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               placeholder="admin@example.com"
//               className="w-full border px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               placeholder="••••••••"
//               className="w-full border px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-semibold transition disabled:opacity-50"
//           >
//             {loading ? "Signing in..." : "Login"}
//           </button>
//         </form>

//         {/* FOOTER */}
//         <p className="text-center text-xs text-gray-500 mt-6">
//           © {new Date().getFullYear()} Auditing App
//         </p>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";

// export default function LoginPage() {
//   const router = useRouter();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const res = await fetch("https://auditing-app.onrender.com/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.message || "Login failed");
//         return;
//       }

//       localStorage.setItem("token", data.token);
//       router.push("/admin/dashboard");
//     } catch (err) {
//       setError("Server error. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//   <div className="relative min-h-screen flex items-center justify-center">
    
//     {/* BACKGROUND IMAGE */}
//     <Image
//       src="/back.png"
//       alt="Login Background"
//       fill
//       priority
//       className="object-cover"
//     />

//     {/* DARK OVERLAY */}
//     <div className="absolute inset-0 bg-black/50" />

//     {/* LOGIN CARD */}
//     <div className="relative z-10 w-full max-w-md bg-white/95 backdrop-blur rounded-2xl shadow-xl p-8 mx-4">
      
//       {/* HEADER */}
//       <div className="text-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">Admin Login</h1>
//         <p className="text-gray-500 text-sm mt-1">
//           Sign in to access the dashboard
//         </p>
//       </div>

//       {/* ERROR */}
//       {error && (
//         <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg mb-4">
//           {error}
//         </div>
//       )}

//       {/* FORM */}
//       <form onSubmit={handleSubmit} className="space-y-5">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             placeholder="admin@example.com"
//             className="w-full border px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Password
//           </label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             placeholder="••••••••"
//             className="w-full border px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-semibold transition disabled:opacity-50"
//         >
//           {loading ? "Signing in..." : "Login"}
//         </button>
//       </form>

//       <p className="text-center text-xs text-gray-500 mt-6">
//         © {new Date().getFullYear()} Auditing App
//       </p>
//     </div>
//   </div>
// );
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("https://auditing-app.onrender.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      router.push("/dashboard");
    } catch (err) {
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/ground.png"   // ⬅ put image in /public
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      {/* BLUE OVERLAY */}
      {/* <div className="absolute inset-0 bg-[#0E4C92]/90"></div> */}

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">

          {/* LEFT IMAGE */}
          <div className="flex items-center justify-center">
            <Image
              src="/reg.png"
              alt="Login Illustration"
              width={520}
              height={520}
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>

          {/* RIGHT FORM */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Admin Login
              </h2>

              {error && (
                <div className="bg-red-100 text-red-600 text-sm p-3 rounded mb-4">
                  {error}
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg
                    focus:outline-none focus:ring-2 focus:ring-[#0E4C92]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg
                    focus:outline-none focus:ring-2 focus:ring-[#0E4C92]"
                    required
                  />
                </div>

                <div className="flex justify-end text-sm">
                  <a href="/forgotPassword" className="text-[#0E4C92] hover:underline">
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#0E4C92] text-white py-3 rounded-lg
                  hover:bg-[#0c3f79] transition font-semibold disabled:opacity-50"
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
