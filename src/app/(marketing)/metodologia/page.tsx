"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  FileSearch,
  Settings,
  Rocket,
  TrendingUp,
  Users,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const steps = [
  {
    numero: "01",
    titulo: "Descubrimiento",
    icon: Lightbulb,
    descripcion:
      "Entendemos tu negocio, objetivos y audiencia para crear una estrategia sólida.",
    detalle: [
      "Análisis profundo de tu industria y competencia",
      "Definición de objetivos SMART y KPIs",
      "Investigación de usuario y buyer personas",
      "Auditoría de activos digitales existentes",
    ],
  },
  {
    numero: "02",
    titulo: "Planificación",
    icon: FileSearch,
    descripcion:
      "Diseñamos una hoja de ruta detallada con cronogramas y entregables claros.",
    detalle: [
      "Arquitectura de información y wireframes",
      "Especificaciones técnicas y funcionales",
      "Timeline de proyecto con hitos clave",
      "Plan de testing y aseguramiento de calidad",
    ],
  },
  {
    numero: "03",
    titulo: "Desarrollo",
    icon: Settings,
    descripcion:
      "Ejecutamos el proyecto con metodologías ágiles y comunicación constante.",
    detalle: [
      "Sprints de desarrollo con entregas frecuentes",
      "Revisiones periódicas y feedback continuo",
      "Implementación de mejores prácticas de código",
      "Integración continua y testing automatizado",
    ],
  },
  {
    numero: "04",
    titulo: "Lanzamiento",
    icon: Rocket,
    descripcion: "Desplegamos tu proyecto con monitoreo y soporte completo.",
    detalle: [
      "Deploy en entorno de producción optimizado",
      "Migración de datos y configuración SEO",
      "Capacitación del equipo y documentación",
      "Monitoreo post-lanzamiento y soporte",
    ],
  },
  {
    numero: "05",
    titulo: "Optimización",
    icon: TrendingUp,
    descripcion:
      "Analizamos resultados y optimizamos continuamente para mejorar el rendimiento.",
    detalle: [
      "Análisis de métricas y comportamiento del usuario",
      "A/B testing para mejorar conversiones",
      "Optimización de velocidad y rendimiento",
      "Recomendaciones para crecimiento futuro",
    ],
  },
  {
    numero: "06",
    titulo: "Crecimiento",
    icon: Users,
    descripcion:
      "Te acompañamos en el crecimiento con estrategias de escalabilidad.",
    detalle: [
      "Plan de roadmap para nuevas funcionalidades",
      "Estrategias de marketing y adquisición",
      "Escalabilidad técnica y optimización",
      "Soporte continuo y mantenimiento",
    ],
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

export default function MetodologiaPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-950 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
            <Settings className="w-4 h-4" />
            Cómo trabajamos
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Nuestra{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Metodología
            </span>
          </h1>

          <p className="text-xl text-slate-400">
            Un proceso transparente y colaborativo que garantiza resultados
            excepcionales en cada proyecto.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
        >
          {steps.map((step) => (
            <motion.div
              key={step.numero}
              variants={item}
              className="group relative bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="absolute top-4 right-4 text-6xl font-bold text-slate-800/50 group-hover:text-indigo-500/10 transition-colors">
                {step.numero}
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-7 h-7 text-indigo-400" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {step.titulo}
                </h3>
                <p className="text-slate-400 mb-6">{step.descripcion}</p>

                <ul className="space-y-2">
                  {step.detalle.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-slate-300"
                    >
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
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
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px]" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px]" />

          <div className="relative z-10 p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para comenzar tu proyecto?
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              Cada proyecto es único. Agenda una llamada gratuita para discutir
              tu idea y descubre cómo podemos ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-200"
                >
                  Agendar Llamada Gratuita
                </Button>
              </Link>
              <Link href="/servicios">
                <Button size="lg" variant="outline">
                  Ver Servicios
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
