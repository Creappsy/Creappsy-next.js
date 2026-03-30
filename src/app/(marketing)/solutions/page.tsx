"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ShoppingCart,
  TrendingUp,
  Stethoscope,
  Building2,
  Rocket,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const solutions = [
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description:
      "Tiendas online completas con pasarela de pagos, inventario y estadísticas.",
    href: "/solutions/ecommerce",
    color: "from-pink-500 to-rose-500",
    stats: "50+ proyectos",
  },
  {
    icon: TrendingUp,
    title: "SaaS & Startups",
    description:
      "Plataformas escalables, MVPs rápidos y sistemas de suscripción.",
    href: "/solutions/startups",
    color: "from-indigo-500 to-purple-500",
    stats: "20+ MVPs",
  },
  {
    icon: Stethoscope,
    title: "Salud",
    description: "Sistemas para clínicas, agendamiento y telemedicina.",
    href: "/solutions/health",
    color: "from-emerald-500 to-teal-500",
    stats: "15+ clínicas",
  },
  {
    icon: Building2,
    title: "B2B & Empresas",
    description: "Dashboards, CRMs y portales corporativos.",
    href: "/solutions/b2b",
    color: "from-amber-500 to-orange-500",
    stats: "30+ empresas",
  },
  {
    icon: Users,
    title: "Consultoría",
    description: "Sitios para consultores, coaches y creadores de contenido.",
    href: "/solutions/consultoria",
    color: "from-cyan-500 to-blue-500",
    stats: "40+ consultores",
  },
  {
    icon: Rocket,
    title: "Real Estate",
    description: "Portales inmobiliarios, catálogos y gestión de propiedades.",
    href: "/solutions/realestate",
    color: "from-violet-500 to-purple-500",
    stats: "25+ portales",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-950 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
            Soluciones por industria
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Soluciones para cada{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              industria
            </span>
          </h1>

          <p className="text-xl text-slate-400">
            Especializados en las necesidades específicas de cada sector. Conoce
            cómo hemos ayudado a empresas como la tuya.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {solutions.map((solution) => (
            <motion.div key={solution.title} variants={item}>
              <Link
                href={solution.href}
                className="group relative bg-slate-900/50 border border-slate-800 rounded-3xl p-8 h-full flex flex-col hover:border-slate-700 transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <solution.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {solution.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 flex-grow">
                  {solution.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    {solution.stats}
                  </span>
                  <span className="text-sm text-indigo-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                    Ver más
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            ¿No encuentras tu industria?
          </h2>
          <p className="text-slate-400 mb-6">
            Cada proyecto es único. Cuéntanos sobre tu caso y creamos la
            solución perfecta.
          </p>
          <Link href="/contacto">
            <Button size="lg">
              Cuéntanos tu proyecto
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
