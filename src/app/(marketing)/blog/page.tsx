"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Tag,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const posts = [
  {
    id: "1",
    title: "Cómo elegir la mejor tecnología para tu startup en 2026",
    excerpt:
      "Guía completa sobre las tecnologías más populares y cuál elegir según tu tipo de proyecto.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
    category: "Tecnología",
    author: "Carlos Ruiz",
    date: "15 Mar 2026",
    readTime: "8 min",
    featured: true,
  },
  {
    id: "2",
    title: "10 errores comunes en e-commerce y cómo evitarlos",
    excerpt:
      "Aprende de los errores que más vemos en proyectos de comercio electrónico y cómo prevenirlos.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    category: "E-Commerce",
    author: "María González",
    date: "12 Mar 2026",
    readTime: "6 min",
    featured: false,
  },
  {
    id: "3",
    title: "El futuro del marketing digital: tendencias que dominarán",
    excerpt:
      "Conoce las tendencias que están transformando el marketing digital y cómo implementarlas.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    category: "Marketing",
    author: "Ana Martínez",
    date: "10 Mar 2026",
    readTime: "5 min",
    featured: false,
  },
  {
    id: "4",
    title: "Por qué tu sitio web necesita una estrategia de SEO ahora",
    excerpt:
      "La importancia del SEO para el crecimiento de tu negocio digital.",
    image:
      "https://images.unsplash.com/photo-1432888622737-bfc6b4f8f5db?w=800&h=500&fit=crop",
    category: "SEO",
    author: "Rodrigo Hernández",
    date: "8 Mar 2026",
    readTime: "7 min",
    featured: false,
  },
];

const categories = ["Todos", "Tecnología", "E-Commerce", "Marketing", "SEO"];

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

export default function BlogPage() {
  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-950 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Artículos y{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Recursos
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Insights, guías y noticias sobre desarrollo web, marketing digital y
            tecnología.
          </p>
        </motion.div>

        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <Link
              href={`/blog/${featuredPost.id}`}
              className="group block bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden hover:border-indigo-500/30 transition-all"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-indigo-500 text-white text-sm font-semibold rounded-full">
                    Destacado
                  </span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-400 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
                        <User className="w-5 h-5 text-indigo-400" />
                      </div>
                      <span className="text-white font-medium">
                        {featuredPost.author}
                      </span>
                    </div>
                    <span className="flex items-center gap-2 text-indigo-400 font-medium group-hover:gap-3 transition-all">
                      Leer más
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {regularPosts.map((post) => (
            <motion.div key={post.id} variants={item}>
              <Link
                href={`/blog/${post.id}`}
                className="group block bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                    <span className="px-2 py-1 bg-slate-800 rounded-md">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 text-sm line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">{post.date}</span>
                    <span className="text-sm text-slate-500">
                      Por {post.author}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button size="lg" variant="outline">
            Ver Todos los Artículos
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
