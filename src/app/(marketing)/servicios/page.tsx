"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Zap, Star } from "lucide-react";
import { services } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "Todos" },
  { id: "app-development", label: "Desarrollo de Apps" },
  { id: "web-design", label: "Diseño Web" },
  { id: "marketing", label: "Marketing Digital" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ServiciosPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

  const sortedServices = [...filteredServices].sort((a, b) => {
    const priceA = a.price?.latam || 0;
    const priceB = b.price?.latam || 0;
    return priceA - priceB;
  });

  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-950 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-[20%] right-[20%] w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[100px] animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-sm font-medium mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Soluciones Escalables
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-bold text-4xl md:text-6xl lg:text-7xl mb-8 tracking-tight"
          >
            Nuestras{" "}
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Soluciones
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Transformamos ideas complejas en productos digitales excepcionales.
            Elegimos la tecnología correcta para cada etapa de tu crecimiento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((cat) => (
              <Button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                variant={activeCategory === cat.id ? "primary" : "outline"}
                className={cn(
                  "rounded-full px-6 py-6 text-base transition-all duration-300",
                  activeCategory === cat.id
                    ? "bg-slate-800 border-cyan-500/50 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.1)]"
                    : "bg-slate-900/50 border-slate-800 text-slate-400",
                )}
              >
                {cat.label}
              </Button>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32 max-w-7xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {sortedServices.map((service) => (
              <motion.div
                key={service.id}
                variants={item}
                layout
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <Link
                  href={service.url}
                  className="group relative bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-800 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden flex flex-col h-full hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-900/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="p-6 pb-0 flex justify-between items-start relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-slate-800/50 border border-slate-700 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform duration-300 group-hover:bg-slate-800 group-hover:border-cyan-500/30">
                      {service.icon}
                    </div>
                    {service.price && (
                      <div className="px-3 py-1.5 rounded-full bg-slate-950/50 border border-slate-700/50 text-xs font-bold text-emerald-400 flex items-center gap-1.5 backdrop-blur-md">
                        <Zap className="w-3 h-3 fill-current" />
                        Desde ${service.price.latam.toLocaleString()} MXN
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col grow relative z-10">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200 transition-all">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 grow line-clamp-3">
                      {service.description}
                    </p>

                    {service.features && (
                      <div className="space-y-2 mb-6">
                        <div className="h-px w-full bg-gradient-to-r from-slate-800 to-transparent mb-4" />
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-sm text-slate-300"
                          >
                            <Check className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <p className="text-xs text-slate-500 pl-6 italic">
                            + {service.features.length - 3} características
                            más...
                          </p>
                        )}
                      </div>
                    )}

                    <div className="flex items-center text-sm font-bold text-cyan-400 group-hover:text-cyan-300 pt-4 mt-auto border-t border-slate-800/50 group-hover:border-cyan-500/20 transition-colors">
                      <span>Explorar Servicio</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2rem] overflow-hidden bg-slate-900 border border-slate-800 max-w-7xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10" />
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px]" />

          <div className="relative z-10 p-12 md:p-20 text-center">
            <div className="inline-flex items-center justify-center p-3 mb-8 rounded-2xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm shadow-xl">
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              ¿Tienes un proyecto{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                único
              </span>{" "}
              en mente?
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              No todos los proyectos encajan en una caja. Somos expertos en
              arquitectura de software personalizada y soluciones fuera de lo
              común.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button
                  size="lg"
                  className="bg-white text-slate-950 hover:bg-slate-200 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                  Hablar con un Experto
                </Button>
              </Link>
              <Link href="/demos">
                <Button size="lg" variant="outline">
                  Ver Demos Reales
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
