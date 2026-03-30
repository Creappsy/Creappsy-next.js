"use client";

import { motion } from "framer-motion";
import { Check, Zap, Sparkles, Crown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const plans = [
  {
    name: "Emprendedor",
    price: { usd: 299, mxn: 5000, eur: 275 },
    description: "Perfecto para empezar tu presencia online.",
    features: [
      "Landing page profesional",
      "Diseño responsive",
      "SEO básico",
      "Formulario de contacto",
      "1 página",
      "Entrega en 1 semana",
    ],
    notIncluded: ["E-commerce", "Blog", "Automatizaciones"],
    icon: Zap,
    color: "cyan",
    popular: false,
  },
  {
    name: "Profesional",
    price: { usd: 599, mxn: 10000, eur: 550 },
    description: "Ideal para crecer y generar leads.",
    features: [
      "Sitio web completo (5 páginas)",
      "Blog integrado",
      "SEO avanzado",
      "Formularios avanzados",
      "Google Analytics",
      "SSL incluido",
      "Entrega en 2 semanas",
    ],
    notIncluded: ["E-commerce completo", "Pasarela de pagos"],
    icon: Sparkles,
    color: "indigo",
    popular: true,
  },
  {
    name: "Premium",
    price: { usd: 1299, mxn: 22000, eur: 1195 },
    description: "Solución completa para tu negocio.",
    features: [
      "Sitio web completo (10 páginas)",
      "E-commerce básico (20 productos)",
      "Pasarela de pagos (Stripe)",
      "SEO profesional",
      "Automatizaciones de email",
      "Chatbot básico",
      "Mantenimiento 3 meses",
      "Capacitación incluido",
      "Entrega en 4 semanas",
    ],
    notIncluded: [],
    icon: Crown,
    color: "purple",
    popular: false,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function PreciosPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-950 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Precios transparentes
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Inversión en tu{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              éxito digital
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Sin sorpresas. Sin costos ocultos. Precios claros desde el inicio.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={item}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? "bg-gradient-to-b from-indigo-900/50 to-slate-900 border-2 border-indigo-500/50"
                  : "bg-slate-900/50 border border-slate-800"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-500 rounded-full text-sm font-semibold text-white">
                  Más Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    plan.color === "cyan"
                      ? "bg-cyan-500/20 text-cyan-400"
                      : plan.color === "indigo"
                        ? "bg-indigo-500/20 text-indigo-400"
                        : "bg-purple-500/20 text-purple-400"
                  }`}
                >
                  <plan.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">
                    ${plan.price.usd}
                  </span>
                  <span className="text-slate-400">USD</span>
                </div>
                <p className="text-sm text-slate-500 mt-1">
                  ${plan.price.mxn.toLocaleString()} MXN · €{plan.price.eur} EUR
                </p>
              </div>

              <p className="text-slate-400 mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-slate-300"
                  >
                    <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
                {plan.notIncluded.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    <span className="shrink-0 mt-0.5">✗</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="/cotizacion" className="block">
                <Button
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full"
                >
                  Comenzar Proyecto
                </Button>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            ¿Necesitas algo personalizado?
          </h2>
          <p className="text-slate-400 mb-8">
            Cada proyecto es único. Agenda una llamada y te cotizamos
            exactamente lo que necesitas.
          </p>
          <Link href="/contacto">
            <Button size="lg" variant="outline">
              Agendar Llamada Gratuita
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
