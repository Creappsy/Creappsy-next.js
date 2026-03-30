"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ShoppingBag,
  Star,
  Plus,
  Heart,
  Search,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

const products = [
  {
    id: "1",
    name: "Camisa Casual Premium",
    price: 1299,
    originalPrice: 1599,
    rating: 4.8,
    reviews: 234,
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=500&fit=crop",
    category: "Ropa",
  },
  {
    id: "2",
    name: "Zapatillas Urbanas",
    price: 2499,
    originalPrice: null,
    rating: 4.9,
    reviews: 567,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop",
    category: "Calzado",
  },
  {
    id: "3",
    name: "Bolso de Cuero",
    price: 1899,
    originalPrice: 2299,
    rating: 4.7,
    reviews: 123,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop",
    category: "Accesorios",
  },
  {
    id: "4",
    name: "Gorra Minimalista",
    price: 599,
    originalPrice: null,
    rating: 4.5,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=500&fit=crop",
    category: "Accesorios",
  },
];

const categories = ["Todos", "Ropa", "Calzado", "Accesorios"];

export default function EcommerceDemoPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [cartCount, setCartCount] = useState(2);

  const filteredProducts =
    activeCategory === "Todos"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-950">
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link
                href="/demos"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-indigo-400" />
                <span className="text-xl font-bold text-white">
                  FashionStore
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-slate-400 hover:text-white transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-slate-400 hover:text-white transition-colors relative">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-2 text-slate-400 hover:text-white transition-colors relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-indigo-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Colección <span className="text-indigo-400">2026</span>
            </h2>
            <p className="text-slate-400">
              Envío gratis en pedidos mayores a $999
            </p>
          </div>

          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-indigo-500 text-white"
                    : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group"
              >
                <div className="relative bg-slate-900 rounded-2xl overflow-hidden mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button className="absolute top-3 right-3 w-10 h-10 bg-slate-900/80 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-indigo-500">
                    <Plus className="w-5 h-5" />
                  </button>
                  {product.originalPrice && (
                    <span className="absolute top-3 left-3 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-md">
                      -
                      {Math.round(
                        (1 - product.price / product.originalPrice) * 100,
                      )}
                      %
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-white mb-1">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-slate-400">
                    {product.rating}
                  </span>
                  <span className="text-sm text-slate-500">
                    ({product.reviews})
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-white">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-slate-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
