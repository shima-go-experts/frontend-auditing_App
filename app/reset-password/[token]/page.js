"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function ResetPasswordPage() {
  const router = useRouter();
  const { token } = useParams();

  const [tempCode, setTempCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/reset-password/${token}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tempCode, password }),
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
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.card}>
        <h2 style={styles.title}>Reset Password</h2>
        <p style={styles.subtitle}>
          Enter the temporary code sent to your email and set a new password.
        </p>

        <input
          style={styles.input}
          type="text"
          placeholder="Temporary code"
          value={tempCode}
          onChange={(e) => setTempCode(e.target.value)}
          required
        />

        <input
          style={styles.input}
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button style={styles.button} type="submit" disabled={loading}>
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    padding: "16px",
  },
  card: {
    background: "#fff",
    padding: "32px",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "400px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  title: {
    marginBottom: "4px",
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "600",
  },
  subtitle: {
    textAlign: "center",
    fontSize: "14px",
    color: "#666",
    marginBottom: "12px",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
    outline: "none",
  },
  button: {
    marginTop: "10px",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "#667eea",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  },
};
