"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Phone,
  Clock,
  Star,
  ShoppingBag,
  ChefHat,
  Calendar,
  Utensils,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const popularItems = [
  {
    name: "Tacos al Pastor",
    price: "$85",
    category: "Tradicional",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop",
  },
  {
    name: "Enchiladas Verdes",
    price: "$120",
    category: "Tradicional",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1534352956036-cd81e27dd615?w=400&h=300&fit=crop",
  },
  {
    name: "Paella Valenciana",
    price: "$280",
    category: "Especial",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=400&h=300&fit=crop",
  },
  {
    name: "Ceviche",
    price: "$150",
    category: "Mariscos",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?w=400&h=300&fit=crop",
  },
];

const categories = [
  { name: "Tradicional", icon: ChefHat },
  { name: "Mariscos", icon: Utensils },
  { name: "Reservaciones", icon: Calendar },
  { name: "Para Llevar", icon: ShoppingBag },
];

export default function RestaurantePage() {
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
                Sabores MX - Restaurante
              </h1>
            </div>
            <Button variant="outline" size="sm">
              <Phone className="w-4 h-4" />
              Reservar
            </Button>
          </div>
        </div>
      </header>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-900/50 to-orange-900/50 border border-amber-500/20 p-12 mb-12">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200')] bg-cover bg-center opacity-20" />
            <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Sabores de <span className="text-amber-400">México</span>
              </h2>
              <p className="text-slate-300 max-w-xl mx-auto mb-6">
                Cocina tradicional mexicana con un toque moderno. Reserva tu
                mesa o ordering a domicilio.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-300">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Polanco, CDMX
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  12:00 - 23:00
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  4.8 (2,340 reseñas)
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {categories.map((cat, idx) => (
              <motion.button
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col items-center gap-3 hover:border-amber-500/50 transition-colors"
              >
                <cat.icon className="w-8 h-8 text-amber-400" />
                <span className="text-white font-medium">{cat.name}</span>
              </motion.button>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-white mb-6">
            Platillos Populares
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularItems.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group"
              >
                <div className="relative h-48">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2 py-1 bg-amber-500/90 text-white text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-white">{item.name}</h4>
                    <span className="text-lg font-bold text-amber-400">
                      {item.price}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="text-sm text-slate-400">
                      {item.rating}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
