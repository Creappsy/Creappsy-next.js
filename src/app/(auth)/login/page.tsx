"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { Chrome, Loader2 } from "lucide-react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    await signIn("google", { callbackUrl: "/dashboard" });
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Iniciar sesión
        </h1>
        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full bg-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
        >
          {loading ? (
            <Loader2 className="animate-spin h-4 w-4" />
          ) : (
            <Chrome className="h-4 w-4" />
          )}
          {loading ? "Conectando..." : "Continuar con Google"}
        </button>
        <div className="mt-4 text-center">
          <Link href="/register" className="text-cyan-400 hover:text-cyan-300">
            Registrarte
          </Link>
        </div>
      </div>
    </div>
  );
}
