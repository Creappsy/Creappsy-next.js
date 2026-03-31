"use client";
import React from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { Chrome, Loader2 } from "lucide-react";

export default function RegisterPage() {
  const [loading, setLoading] = React.useState(false);

  const handleGoogleSignUp = async () => {
    setLoading(true);
    await signIn("google", { redirect: true, callbackUrl: "/dashboard" });
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Crear cuenta
        </h1>
        <button
          onClick={handleGoogleSignUp}
          disabled={loading}
          className="w-full bg-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
        >
          {loading ? (
            <Loader2 className="animate-spin h-4 w-4" />
          ) : (
            <Chrome className="h-4 w-4" />
          )}
          {loading ? "Creando cuenta..." : "Continuar con Google"}
        </button>
        <div className="mt-4 text-center">
          <Link href="/login" className="text-cyan-400 hover:text-cyan-300">
            Iniciar sesión
          </Link>
        </div>
      </div>
    </div>
  );
}
