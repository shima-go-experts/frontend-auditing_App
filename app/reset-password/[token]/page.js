"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function ResetPasswordPage() {
  const router = useRouter();
  const params = useParams();
  const token = params.token;

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/reset-password/${token}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      }
    );

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      alert("Password reset successful");
      router.push("/login");
    } else {
      alert(data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Reset Password</h2>

      <input
        type="password"
        placeholder="New password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? "Resetting..." : "Reset Password"}
      </button>
    </form>
  );
}
