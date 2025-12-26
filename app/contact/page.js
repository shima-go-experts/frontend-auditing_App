// "use client";

// import Navbar from "@/app/components/Navbar";
// import Footer from "@/app/components/Footer";

// export default function SimpleImagePage() {
//   return (
//     <>
//       <Navbar />

//       <section className="py-16 px-6 flex justify-center">
//         <img
//           src="/contact.png"   // ← replace with your image
//           alt="Contact Image"
//           className="rounded-lg shadow-lg max-w-full"
//         />
//       </section>

//       <Footer />
//     </>
//   );
// }


// "use client";
// import Image from "next/image";
// import Header from "@/app/components/Navbar";
// import Footer from "@/app/components/Footer";

// export default function ContactSection() {
//   return (
//     <>
//       {/* Header */}
//       <Header />

//       <section className="px-6 md:px-16 lg:px-28 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           {/* LEFT SIDE */}
//           <div>
//             {/* Heading */}
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Contact <span className="text-blue-600">Us</span>
//             </h1>

//             <p className="text-gray-700 mb-8 leading-relaxed">
//               Have questions about our Property Due Diligence service?
//               Reach out — we're here to help you make the safest investment.
//             </p>

//             {/* Contact Details */}
//             <div className="space-y-5 mb-10">
//               <div className="flex items-center space-x-3">
//                 <span className="text-blue-600 text-2xl">📞</span>
//                 <span className="text-gray-800 text-lg">+91 98765 43210</span>
//               </div>

//               <div className="flex items-center space-x-3">
//                 <span className="text-blue-600 text-2xl">✉️</span>
//                 <span className="text-gray-800 text-lg">
//                   support@propertyaudit.com
//                 </span>
//               </div>

//               <div className="flex items-center space-x-3">
//                 <span className="text-blue-600 text-2xl">📍</span>
//                 <span className="text-gray-800 text-lg">
//                   Hyderabad, Telangana, India
//                 </span>
//               </div>
//             </div>

//             {/* FORM */}
//             <form className="space-y-5">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full border rounded-md px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none"
//               />

//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="w-full border rounded-md px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none"
//               />

//               <textarea
//                 rows={5}
//                 placeholder="Message"
//                 className="w-full border rounded-md px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none resize-none"
//               />

//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>

//           {/* RIGHT SIDE — IMAGE */}
//           <div className="flex justify-center">
//             <div className="w-full max-w-md">
//               <Image
//                 src="/contact.png"
//                 alt="Contact Illustration"
//                 width={600}
//                 height={600}
//                 className="object-contain drop-shadow-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <Footer />
//     </>
//   );
// }



// "use client";
// import { useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
// import Image from "next/image";
// import Header from "@/app/components/Navbar";
// import Footer from "@/app/components/Footer";

// export default function ContactSection() {
//   const [captchaToken, setCaptchaToken] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!captchaToken) {
//       alert("Please verify that you are not a robot");
//       return;
//     }

//     const formData = {
//       name: e.target.name.value,
//       email: e.target.email.value,
//       message: e.target.message.value,
//       captchaToken,
//     };

//     const res = await fetch("https://auditing-app.onrender.com/api/contact", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     const data = await res.json();
//     alert(data.message);
//   };

//   return (
//     <>
//       <Header />

//       <section className="px-6 md:px-16 lg:px-28 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           {/* LEFT SIDE */}
//           <div>
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Contact <span className="text-blue-600">Us</span>
//             </h1>

//             <p className="text-gray-700 mb-8 leading-relaxed">
//               Have questions about our Property Due Diligence service?
//               Reach out — we're here to help you make the safest investment.
//             </p>

//             {/* FORM */}
//             <form className="space-y-5" onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 required
//                 className="w-full border rounded-md px-4 py-3"
//               />

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 required
//                 className="w-full border rounded-md px-4 py-3"
//               />

//               <textarea
//                 name="message"
//                 rows={5}
//                 placeholder="Message"
//                 required
//                 className="w-full border rounded-md px-4 py-3 resize-none"
//               />

//               {/* ✅ reCAPTCHA */}
//               <ReCAPTCHA
//                 sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
//                 onChange={(token) => setCaptchaToken(token)}
//               />

//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="flex justify-center">
//             <div className="w-full max-w-md">
//               <Image
//                 src="/contact.png"
//                 alt="Contact Illustration"
//                 width={600}
//                 height={600}
//                 className="object-contain drop-shadow-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }


// "use client";

// import { useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
// import Image from "next/image";
// import Header from "@/app/components/Navbar";
// import Footer from "@/app/components/Footer";

// export default function ContactSection() {
//   const [captchaToken, setCaptchaToken] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!captchaToken) {
//       alert("Please verify that you are not a robot");
//       return;
//     }

//     const formData = {
//       name: e.target.name.value,
//       email: e.target.email.value,
//       message: e.target.message.value,
//       captchaToken,
//     };

//     const res = await fetch("https://auditing-app.onrender.com/api/contact", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     const data = await res.json();
//     alert(data.message);
//   };

//   return (
//     <>
//       <Header />

//       <section className="px-6 md:px-16 lg:px-28 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT */}
//           <div>
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Contact <span className="text-blue-600">Us</span>
//             </h1>

//             <form className="space-y-5" onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 required
//                 className="w-full border rounded-md px-4 py-3"
//               />

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 required
//                 className="w-full border rounded-md px-4 py-3"
//               />

//               <textarea
//                 name="message"
//                 rows={5}
//                 placeholder="Message"
//                 required
//                 className="w-full border rounded-md px-4 py-3 resize-none"
//               />

//               {/* ✅ CAPTCHA WITH DEBUG */}
//               <ReCAPTCHA
//                 sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
//                 onChange={(token) => {
//                   console.log("CAPTCHA TOKEN:", token);
//                   setCaptchaToken(token);
//                 }}
//                 onExpired={() => {
//                   console.log("Captcha expired");
//                   setCaptchaToken(null);
//                 }}
//               />

//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>

//           {/* RIGHT */}
//           <div className="flex justify-center">
//             <Image
//               src="/contact.png"
//               alt="Contact Illustration"
//               width={600}
//               height={600}
//               className="object-contain drop-shadow-lg"
//             />
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }


"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";
import Header from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function ContactSection() {
  const [captchaToken, setCaptchaToken] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please verify that you are not a robot");
      return;
    }

    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
      captchaToken,
    };

    try {
      const res = await fetch("https://auditing-app.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Something went wrong");
        return;
      }

      alert("Message sent successfully");
      e.target.reset();
      setCaptchaToken(null);
    } catch (err) {
      alert("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <section className="px-6 md:px-16 lg:px-28 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact <span className="text-blue-600">Us</span>
            </h1>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <input name="name" required placeholder="Your Name" className="w-full border px-4 py-3 rounded-md" />
              <input name="email" type="email" required placeholder="Your Email" className="w-full border px-4 py-3 rounded-md" />
              <textarea name="message" rows={5} required placeholder="Message" className="w-full border px-4 py-3 rounded-md resize-none" />

              <ReCAPTCHA
  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
  onChange={(token) => {
    console.log("CAPTCHA TOKEN:", token);
    setCaptchaToken(token);
  }}
  onExpired={() => {
    console.log("Captcha expired");
    setCaptchaToken(null);
  }}
/>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-semibold disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <Image src="/contact.png" alt="Contact" width={600} height={600} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
