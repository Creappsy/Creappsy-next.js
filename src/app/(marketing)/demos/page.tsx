"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Home,
  ShoppingBag,
  Building,
  Heart,
  UtensilsCrossed,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const demos = [
  {
    icon: Home,
    title: "Inmobiliaria Premium",
    description:
      "Portal inmobiliario con catálogo de propiedades, búsqueda avanzada y contacto con agentes.",
    href: "/demos/inmobiliaria",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    tags: ["Real Estate", "Catálogo", "Búsqueda"],
  },
  {
    icon: ShoppingBag,
    title: "Tienda Fashion",
    description:
      "E-commerce elegante con carousel de productos, carrito y checkout optimizado.",
    href: "/demos/ecommerce",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    tags: ["E-Commerce", "Carrito", "Stripe"],
  },
  {
    icon: Building,
    title: "SaaS Analytics",
    description:
      "Dashboard administrativo con métricas en tiempo real y gráficos interactivos.",
    href: "/demos/saas",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["SaaS", "Dashboard", "Gráficos"],
  },
  {
    icon: Heart,
    title: "Clínica Médica",
    description:
      "Sitio para clínica con servicios, equipo médico y sistema de citas.",
    href: "/demos/salud",
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop",
    tags: ["Salud", "Citas", "Equipo"],
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurante",
    description:
      "Menú digital interactivo con galería, reservas y pedidos online.",
    href: "/demos/restaurante",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    tags: ["Restaurante", "Menú", "Reservas"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function DemosPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-950 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
            <Play className="w-4 h-4" />
            Explora nuestros demos
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Proyectos{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              reales
            </span>
          </h1>

          <p className="text-xl text-slate-400">
            Explora demos interactivos de diferentes industrias. Cada uno
            demuestra capacidades específicas de nuestro trabajo.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {demos.map((demo) => (
            <motion.div key={demo.title} variants={item}>
              <Link
                href={demo.href}
                className="group relative bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-700 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={demo.image}
                    alt={demo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Play className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                      <demo.icon className="w-5 h-5 text-indigo-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {demo.title}
                    </h3>
                  </div>

                  <p className="text-slate-400 text-sm mb-4">
                    {demo.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {demo.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-slate-800 text-slate-400 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <span className="inline-flex items-center gap-2 text-sm text-indigo-400 group-hover:gap-3 transition-all">
                    Ver demo
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
          className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-indigo-900/50 to-cyan-900/50 border border-slate-800 max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
          <div className="relative z-10 p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Ves algo que te gusta?
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              Podemos adaptar cualquiera de estos diseños a tu marca o crear
              algo completamente nuevo. La decisión es tuya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-200"
                >
                  Solicitar Cotización
                </Button>
              </Link>
              <Link href="/servicios">
                <Button size="lg" variant="outline">
                  Ver Todos los Servicios
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
