"use client";

import { motion } from "framer-motion";
import {
  FolderKanban,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    label: "Proyectos Activos",
    value: "3",
    icon: FolderKanban,
    color: "text-indigo-400",
  },
  { label: "En Progreso", value: "2", icon: Clock, color: "text-amber-400" },
  {
    label: "Completados",
    value: "12",
    icon: CheckCircle,
    color: "text-emerald-400",
  },
  {
    label: "En Revisión",
    value: "1",
    icon: AlertCircle,
    color: "text-cyan-400",
  },
];

const projects = [
  {
    id: "1",
    name: "Sitio Web Corporativo",
    client: "TechStart MX",
    status: "progress",
    progress: 65,
    deadline: "15 Abr 2026",
  },
  {
    id: "2",
    name: "E-Commerce Premium",
    client: "Fashion Store",
    status: "review",
    progress: 90,
    deadline: "20 Abr 2026",
  },
  {
    id: "3",
    name: "App Móvil v2.0",
    client: "Wellness App",
    status: "progress",
    progress: 30,
    deadline: "30 May 2026",
  },
];

const statusColors = {
  progress: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  review: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  completed: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
};

const statusLabels = {
  progress: "En Progreso",
  review: "En Revisión",
  completed: "Completado",
};

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

export default function DashboardPage() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-6xl"
    >
      <motion.div variants={item} className="mb-8">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-slate-400">Bienvenido de vuelta</p>
      </motion.div>

      <motion.div
        variants={item}
        className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6"
          >
            <div
              className={`w-10 h-10 rounded-xl ${stat.color.replace("text-", "bg-")}/20 flex items-center justify-center mb-4`}
            >
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
            <p className="text-sm text-slate-400">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      <motion.div variants={item}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Proyectos Recientes</h2>
          <Link
            href="/dashboard/proyectos"
            className="text-sm text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
          >
            Ver todos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-800/50">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-400">
                  Proyecto
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-400">
                  Cliente
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-400">
                  Estado
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-400">
                  Progreso
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-400">
                  Fecha
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {projects.map((project) => (
                <tr
                  key={project.id}
                  className="hover:bg-slate-800/30 transition-colors"
                >
                  <td className="px-6 py-4">
                    <p className="font-medium text-white">{project.name}</p>
                  </td>
                  <td className="px-6 py-4 text-slate-400">{project.client}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${statusColors[project.status as keyof typeof statusColors]}`}
                    >
                      {
                        statusLabels[
                          project.status as keyof typeof statusLabels
                        ]
                      }
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden max-w-24">
                        <div
                          className="h-full bg-indigo-500 rounded-full"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <span className="text-sm text-slate-400">
                        {project.progress}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-400 text-sm">
                    {project.deadline}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
}
