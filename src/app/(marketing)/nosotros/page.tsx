"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Lightbulb,
  Users,
  Heart,
  Rocket,
  MessageCircle,
  Star,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const values = [
  {
    icon: Lightbulb,
    title: "Innovación Constante",
    description:
      "Buscamos y aplicamos las últimas tecnologías para ofrecer soluciones de vanguardia.",
  },
  {
    icon: Users,
    title: "Colaboración",
    description:
      "Trabajamos codo a codo con nuestros clientes, creando una sinergia que impulsa el éxito.",
  },
  {
    icon: Heart,
    title: "Pasión por lo que Hacemos",
    description:
      "Amamos el diseño y la tecnología, y esa pasión se refleja en la calidad de nuestro trabajo.",
  },
  {
    icon: Rocket,
    title: "Enfoque en Resultados",
    description:
      "No solo creamos cosas bonitas; creamos soluciones que generan un impacto real y medible.",
  },
];

const team = [
  {
    name: "Rodrigo Hernández",
    role: "CEO & Fundador",
    bio: "Más de 10 años de experiencia en desarrollo web y estrategia digital.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "María González",
    role: "Directora de Diseño",
    bio: "Especialista en UX/UI con pasión por crear experiencias memorables.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Carlos Ruiz",
    role: "Lead Developer",
    bio: "Experto en React, Node.js y arquitecturas escalables.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    name: "Ana Martínez",
    role: "Marketing Director",
    bio: "Especialista en growth marketing y estrategias de adquisición.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
];

const testimonials = [
  {
    name: "Luis Fernández",
    company: "TechStart MX",
    quote:
      "Creappsy transformó nuestra presencia digital por completo. Las conversiones aumentaron un 200% en 3 meses.",
    rating: 5,
  },
  {
    name: "Carmen Torres",
    company: "Bienestar Spa",
    quote:
      "El equipo entendió perfectamente nuestra visión y la superó. El sitio es hermoso y funcional.",
    rating: 5,
  },
  {
    name: "Miguel Ángel",
    company: "DataMetrics",
    quote:
      "La automatización con IA que implementaron nos ahorra 40 horas semanales. Inversión brutal.",
    rating: 5,
  },
];

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

export default function NosotrosPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-950 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4" />
            Conócenos
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            El Equipo Detrás de la{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Innovación Digital
            </span>
          </h1>

          <p className="text-xl text-slate-400">
            Somos un colectivo de creativos, estrategas y desarrolladores unidos
            por una misión: construir el futuro digital de las marcas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-3xl blur-xl" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Equipo Creappsy"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Nuestra Historia
            </h2>
            <div className="space-y-4 text-slate-400">
              <p>
                Creappsy nació en 2018 de la idea de que la tecnología y el
                diseño podían unirse para crear algo más que solo sitios web.
              </p>
              <p>
                Comenzamos como un pequeño equipo en un coworking de la Ciudad
                de México, con la ambición de ayudar a las startups locales a
                tener una presencia digital profesional.
              </p>
              <p>
                A través de los años, hemos crecido y evolucionado, pero nuestro
                ADN sigue siendo el mismo: una curiosidad insaciable, un
                compromiso con la excelencia y un deseo genuino de ver a
                nuestros clientes triunfar.
              </p>
            </div>
            <Link href="/nuestra-historia" className="inline-block mt-8">
              <Button variant="outline">
                Conoce la historia completa
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.div variants={item} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nuestros Valores
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Estos son los principios que guían cada decisión, cada línea de
              código y cada diseño.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={item}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 text-center hover:border-indigo-500/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-indigo-500/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.div variants={item} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Lo que Dicen Nuestros Clientes
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              La confianza de nuestros clientes es nuestro mayor activo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-slate-300 mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">
                    {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={item} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Las personas que hacen posible la magia.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                variants={item}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 text-center group hover:border-indigo-500/30 transition-colors"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-2 ring-slate-800 group-hover:ring-indigo-500/30 transition-all"
                />
                <h3 className="text-lg font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-indigo-400 mb-2">{member.role}</p>
                <p className="text-sm text-slate-400">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
