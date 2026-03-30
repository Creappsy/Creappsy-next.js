"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  TrendingUp,
  Users,
  DollarSign,
  ShoppingCart,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const stats = [
  {
    label: "Ingresos",
    value: "$124,500",
    change: "+12.5%",
    positive: true,
    icon: DollarSign,
  },
  {
    label: "Usuarios",
    value: "2,847",
    change: "+8.2%",
    positive: true,
    icon: Users,
  },
  {
    label: "Pedidos",
    value: "1,293",
    change: "-2.1%",
    positive: false,
    icon: ShoppingCart,
  },
  {
    label: "Conversión",
    value: "3.8%",
    change: "+0.5%",
    positive: true,
    icon: TrendingUp,
  },
];

const revenueData = [
  { month: "Ene", value: 45000 },
  { month: "Feb", value: 52000 },
  { month: "Mar", value: 48000 },
  { month: "Abr", value: 61000 },
  { month: "May", value: 55000 },
  { month: "Jun", value: 72000 },
];

const recentOrders = [
  {
    id: "ORD-001",
    customer: "TechStart MX",
    amount: "$2,500",
    status: "Completado",
  },
  {
    id: "ORD-002",
    customer: "Fashion Store",
    amount: "$4,200",
    status: "Procesando",
  },
  {
    id: "ORD-003",
    customer: "DataMetrics",
    amount: "$1,800",
    status: "Completado",
  },
  {
    id: "ORD-004",
    customer: "Wellness App",
    amount: "$3,500",
    status: "Pendiente",
  },
];

export default function SaaSDemoPage() {
  const maxValue = Math.max(...revenueData.map((d) => d.value));

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
              </Link>
              <div className="h-6 w-px bg-slate-700" />
              <h1 className="text-xl font-bold text-white">
                SaaS Analytics Dashboard
              </h1>
            </div>
            <Button size="sm">Ver Demo Completo</Button>
          </div>
        </div>
      </header>

      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl ${stat.positive ? "bg-emerald-500/20" : "bg-red-500/20"} flex items-center justify-center`}
                  >
                    <stat.icon
                      className={`w-5 h-5 ${stat.positive ? "text-emerald-400" : "text-red-400"}`}
                    />
                  </div>
                  <span
                    className={`flex items-center gap-1 text-sm font-medium ${stat.positive ? "text-emerald-400" : "text-red-400"}`}
                  >
                    {stat.positive ? (
                      <ArrowUpRight className="w-4 h-4" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4" />
                    )}
                    {stat.change}
                  </span>
                </div>
                <p className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white">
                  Ingresos por Mes
                </h2>
                <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-end gap-2 h-48">
                {revenueData.map((data, idx) => (
                  <motion.div
                    key={data.month}
                    initial={{ height: 0 }}
                    animate={{ height: `${(data.value / maxValue) * 100}%` }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="flex-1 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-lg relative group"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      ${data.value.toLocaleString()}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-slate-500">
                {revenueData.map((data) => (
                  <span key={data.month}>{data.month}</span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white">
                  Pedidos Recientes
                </h2>
                <button className="text-sm text-indigo-400 hover:text-indigo-300">
                  Ver todos
                </button>
              </div>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between py-3 border-b border-slate-800 last:border-0"
                  >
                    <div>
                      <p className="font-medium text-white">{order.customer}</p>
                      <p className="text-sm text-slate-500">{order.id}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-white">{order.amount}</p>
                      <p
                        className={`text-sm ${
                          order.status === "Completado"
                            ? "text-emerald-400"
                            : order.status === "Procesando"
                              ? "text-amber-400"
                              : "text-slate-400"
                        }`}
                      >
                        {order.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
