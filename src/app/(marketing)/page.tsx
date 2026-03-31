import Link from "next/link";
import { ArrowRight, Zap, Palette, TrendingUp, Bot } from "lucide-react";
import { signIn } from "next-auth/react";
import { useState } from "react";

const services = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Arquitectura Web Estratégica",
    description:
      "Plataformas de conversión optimizadas para velocidad, SEO y escalabilidad masiva.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    href: "/servicios/desarrollo-web",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Diseño Orientado a Conversión",
    description: "UI/UX que guía al usuario psicológicamente hacia la compra.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    href: "/servicios/diseno",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Growth Marketing & ROI",
    description:
      "Sistemas de adquisición automatizados. Métricas de ingresos, no de vanidad.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    href: "/servicios/marketing",
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "Automatización con IA",
    description:
      "Reducción de costos operativos mediante agentes inteligentes.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    href: "/servicios/ia",
  },
];

const stats = [
  { value: "5+", label: "Años de experiencia" },
  { value: "150+", label: "Proyectos completados" },
  { value: "98%", label: "Clientes satisfechos" },
  { value: "24/7", label: "Soporte disponible" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-950 to-slate-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[150px]" />
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[80px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Nuevo: Servicios de IA disponibles
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-indigo-200 to-cyan-200 bg-clip-text text-transparent">
              Desarrollo Web que
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Convierte
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Creamos experiencias digitales premium para empresas que buscan
            resultados reales. Diseño, desarrollo y marketing en una sola
            agencia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/servicios"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all hover:gap-3"
            >
              Ver Servicios
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contacto"
              className="px-8 py-4 bg-slate-800/50 border border-slate-700 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors backdrop-blur-sm"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-950/50 border-y border-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-4">
              Nuestros Servicios
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Soluciones digitales integrales
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Desde el diseño hasta el marketing, cubrimos todas las necesidades
              digitales de tu empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${service.bg} ${service.color} flex items-center justify-center mb-6`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-slate-950 to-indigo-950/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para empezar?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Agenda una llamada gratuita y descubre cómo podemos ayudarte a
            crecer tu negocio.
          </p>
          <Link
            href="/cotizacion"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all hover:gap-3"
          >
            Solicitar Cotización
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
