"use client";

import { useState } from "react";
import { Send, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Email inválido");
      return;
    }

    setStatus("loading");

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setStatus("success");
    setMessage("¡Gracias por suscribirte!");
    setEmail("");

    setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <div className="relative flex-1">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@email.com"
          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
          disabled={status === "loading" || status === "success"}
        />
      </div>
      <Button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="shrink-0"
      >
        {status === "loading" ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : status === "success" ? (
          <Check className="w-5 h-5" />
        ) : (
          <Send className="w-5 h-5" />
        )}
      </Button>
      {message && (
        <p
          className={`absolute -bottom-6 left-0 text-xs ${
            status === "error" ? "text-red-400" : "text-emerald-400"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
