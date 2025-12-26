import { useRouter } from "next/router";
import { useState } from "react";

export default function ResetPassword() {
  const router = useRouter();
  const { token } = router.query;

  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("http://127.0.0.1:5000/api/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token,        // 👈 token from URL
        password,     // 👈 new password
      }),
    });

    const data = await res.json();
    setLoading(false);
    setMessage(data.message);

    if (res.ok) {
      setTimeout(() => router.push("/login"), 2000);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "100px auto" }}>
      <h2>Reset Password</h2>

      <form onSubmit={submitHandler}>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
