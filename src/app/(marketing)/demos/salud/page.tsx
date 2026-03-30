"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Heart,
  Activity,
  Users,
  Calendar,
  Phone,
  Clock,
  Shield,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const stats = [
  { label: "Pacientes Atendidos", value: "12,500+", icon: Users },
  { label: "Doctores Especialistas", value: "85+", icon: Heart },
  { label: "Citas Online", value: "8,200+", icon: Calendar },
  { label: "Satisfacción", value: "98%", icon: Star },
];

const services = [
  {
    title: "Consulta Online",
    description: "Videoconsulta con especialistas en tiempo real",
    icon: Activity,
  },
  {
    title: "Agenda Inteligente",
    description: "Reserva citas 24/7 con recordatorios automáticos",
    icon: Calendar,
  },
  {
    title: "Historia Clínica Digital",
    description: "Todos tus antecedentes médicos en un solo lugar",
    icon: Shield,
  },
  {
    title: "Notificaciones de Salud",
    description: "Alertas personalizadas para tu bienestar",
    icon: Clock,
  },
];

const specialists = [
  { name: "Dra. María González", specialty: "Cardiología", rating: 4.9 },
  { name: "Dr. Carlos Mendoza", specialty: "Dermatología", rating: 4.8 },
  { name: "Dra. Ana López", specialty: "Pediatría", rating: 4.9 },
  { name: "Dr. Roberto Sánchez", specialty: "Medicina General", rating: 4.7 },
];

export default function SaludPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <header className="bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/demos"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Volver
              </Link>
              <div className="h-6 w-px bg-slate-700" />
              <h1 className="text-xl font-bold text-white">
                SaludTech - Portal Médico
              </h1>
            </div>
            <Button variant="outline" size="sm">
              <Phone className="w-4 h-4" />
              Contactar
            </Button>
          </div>
        </div>
      </header>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Salud Digital
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tu salud, <span className="text-emerald-400">a un click</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Plataforma integral de telemedicina para gestionar citas,
              consultas y tu historial médico de forma segura.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center"
              >
                <stat.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <p className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex gap-4"
              >
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <service.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-400">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              Especialistas Destacados
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {specialists.map((specialist) => (
                <div
                  key={specialist.name}
                  className="bg-slate-800 rounded-xl p-4 text-center"
                >
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-1">
                    {specialist.name}
                  </h4>
                  <p className="text-sm text-slate-400 mb-2">
                    {specialist.specialty}
                  </p>
                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="text-sm text-white">
                      {specialist.rating}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
