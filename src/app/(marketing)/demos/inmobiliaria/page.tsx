"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Bed,
  Bath,
  Square,
  Phone,
  Mail,
  Search,
  Filter,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const properties = [
  {
    id: "1",
    title: "Penthouse Vista al Mar",
    location: "Polanco, CDMX",
    price: 28500000,
    beds: 4,
    baths: 3,
    sqft: 350,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    id: "2",
    title: "Casa Moderna en Coyoacán",
    location: "Coyoacán, CDMX",
    price: 12500000,
    beds: 3,
    baths: 2,
    sqft: 220,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    id: "3",
    title: "Departamento Ejecutivo",
    location: "Santa Fe, CDMX",
    price: 8900000,
    beds: 2,
    baths: 2,
    sqft: 120,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    id: "4",
    title: "Villa de Lujo",
    location: "Interlomas, CDMX",
    price: 45000000,
    beds: 5,
    baths: 6,
    sqft: 580,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
    featured: true,
  },
];

export default function InmobiliariaPage() {
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
                Inmobiliaria Premium
              </h1>
            </div>
            <Button variant="outline" size="sm">
              Contactar Agente
            </Button>
          </div>
        </div>
      </header>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Encuentra tu <span className="text-indigo-400">hogar ideal</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Propiedades exclusivas en las mejores zonas de la Ciudad de México
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar por ubicación, colonia..."
                className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filtros
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {properties.map((property, idx) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-indigo-500/30 transition-all"
              >
                <div className="relative h-64">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {property.featured && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-indigo-500 text-white text-xs font-semibold rounded-full">
                      Destacado
                    </span>
                  )}
                  <button className="absolute top-4 right-4 w-10 h-10 bg-slate-900/80 rounded-full flex items-center justify-center text-white hover:bg-indigo-500 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {property.title}
                      </h3>
                      <div className="flex items-center gap-1 text-slate-400 text-sm">
                        <MapPin className="w-4 h-4" />
                        {property.location}
                      </div>
                    </div>
                    <p className="text-2xl font-bold text-emerald-400">
                      ${property.price.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-6 text-slate-400 text-sm mb-6">
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      {property.beds} recámaras
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      {property.baths} baños
                    </div>
                    <div className="flex items-center gap-1">
                      <Square className="w-4 h-4" />
                      {property.sqft} m²
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button className="flex-1">Ver Detalles</Button>
                    <Button variant="outline" size="icon">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Mail className="w-4 h-4" />
                    </Button>
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
