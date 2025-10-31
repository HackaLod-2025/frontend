"use client";

import { startLogin } from "../auth/authentication";

export default function LoginPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 80 }}>
      <h1>Sign in with Solid</h1>
      <button
        className="mt-6 rounded-full bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors"
        onClick={() => startLogin()}
      >
        Login with Solid
      </button>
    </div>
  );
}

