"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface FAQ {
  id: number;
  category: string;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    category: "Desarrollo Web",
    question: "¿Qué tecnologías utilizan para el desarrollo web?",
    answer:
      "Utilizamos tecnologías modernas como React, Next.js, TypeScript, Node.js y bases de datos PostgreSQL. Nos especializamos en crear aplicaciones web escalables y de alto rendimiento.",
  },
  {
    id: 2,
    category: "Desarrollo Web",
    question: "¿Cuánto tiempo toma desarrollar un sitio web?",
    answer:
      "El tiempo varía según la complejidad. Un sitio web básico puede estar listo en 2-3 semanas, mientras que aplicaciones web complejas pueden tomar de 2 a 4 meses. Siempre entregamos un cronograma detallado al inicio del proyecto.",
  },
  {
    id: 3,
    category: "Desarrollo Web",
    question: "¿Ofrecen mantenimiento después del lanzamiento?",
    answer:
      "Sí, ofrecemos planes de mantenimiento mensual que incluyen actualizaciones de seguridad, corrección de errores, optimización de rendimiento y soporte técnico prioritario.",
  },
  {
    id: 4,
    category: "Desarrollo Web",
    question: "¿Los sitios web son responsive y mobile-friendly?",
    answer:
      "Absolutamente. Todos nuestros desarrollos son 100% responsive y optimizados para dispositivos móviles. Seguimos el enfoque mobile-first para garantizar la mejor experiencia en todos los dispositivos.",
  },
  {
    id: 5,
    category: "Desarrollo Web",
    question: "¿Puedo actualizar el contenido de mi sitio web yo mismo?",
    answer:
      "Sí, implementamos sistemas de gestión de contenido (CMS) intuitivos que te permiten actualizar textos, imágenes y otros elementos sin necesidad de conocimientos técnicos.",
  },
  {
    id: 6,
    category: "Desarrollo Web",
    question: "¿Qué incluye el servicio de desarrollo web?",
    answer:
      "Incluye diseño UI/UX, desarrollo frontend y backend, integración de APIs, optimización SEO, configuración de hosting, certificado SSL, y capacitación para el uso del CMS.",
  },
  {
    id: 7,
    category: "Diseño UI/UX",
    question: "¿Qué es el diseño UI/UX y por qué es importante?",
    answer:
      "UI (Interfaz de Usuario) se enfoca en el aspecto visual, mientras que UX (Experiencia de Usuario) optimiza la usabilidad. Un buen diseño UI/UX aumenta las conversiones hasta un 200% y mejora la satisfacción del cliente.",
  },
  {
    id: 8,
    category: "Diseño UI/UX",
    question: "¿Realizan pruebas de usabilidad?",
    answer:
      "Sí, realizamos pruebas A/B, análisis de mapas de calor, y sesiones de testing con usuarios reales para optimizar cada elemento de la interfaz antes del lanzamiento.",
  },
  {
    id: 9,
    category: "Diseño UI/UX",
    question: "¿Puedo ver prototipos antes del desarrollo?",
    answer:
      "Absolutamente. Creamos prototipos interactivos en Figma que te permiten navegar por el diseño completo antes de escribir una sola línea de código.",
  },
  {
    id: 10,
    category: "Marketing Digital",
    question: "¿Qué servicios de marketing digital ofrecen?",
    answer:
      "Ofrecemos SEO, SEM (Google Ads), marketing en redes sociales, email marketing, content marketing, y estrategias de growth hacking enfocadas en ROI medible.",
  },
  {
    id: 11,
    category: "Marketing Digital",
    question: "¿Cuánto tiempo toma ver resultados en SEO?",
    answer:
      "Los primeros resultados suelen verse entre 3-6 meses. El SEO es una estrategia a largo plazo, pero implementamos quick wins que generan tráfico desde el primer mes.",
  },
  {
    id: 12,
    category: "Marketing Digital",
    question: "¿Cómo miden el ROI de las campañas?",
    answer:
      "Implementamos tracking completo con Google Analytics 4, píxeles de conversión, y dashboards personalizados que muestran en tiempo real el retorno de cada peso invertido.",
  },
  {
    id: 13,
    category: "IA & Automatización",
    question: "¿Qué tipo de automatizaciones pueden implementar?",
    answer:
      "Automatizamos procesos de ventas, atención al cliente con chatbots IA, email marketing, generación de reportes, gestión de inventarios, y flujos de trabajo internos.",
  },
  {
    id: 14,
    category: "IA & Automatización",
    question: "¿Cómo funciona un chatbot con IA?",
    answer:
      "Nuestros chatbots usan procesamiento de lenguaje natural (NLP) para entender preguntas complejas, aprender de cada conversación, y proporcionar respuestas personalizadas 24/7.",
  },
  {
    id: 15,
    category: "IA & Automatización",
    question: "¿Cuánto puedo ahorrar con automatización?",
    answer:
      "Nuestros clientes reportan ahorros del 40-60% en costos operativos y reducción del 70% en tiempo de procesos manuales. El ROI típico se alcanza en 6-8 meses.",
  },
];

const categories = [
  "Todas",
  "Desarrollo Web",
  "Diseño UI/UX",
  "Marketing Digital",
  "IA & Automatización",
];

function FAQItem({ faq }: { faq: FAQ }) {
  return (
    <details className="group border-b border-slate-700 py-6">
      <summary className="flex justify-between items-center text-left cursor-pointer list-none">
        <span className="text-lg font-medium text-slate-200 pr-4">
          {faq.question}
        </span>
        <ChevronDown className="w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-200 group-open:rotate-180" />
      </summary>
      <p className="mt-4 text-slate-400 leading-relaxed">{faq.answer}</p>
    </details>
  );
}

export default function PreguntasFrecuentesPage() {
  const [activeCategory, setActiveCategory] = useState("Todas");

  const filteredFAQs =
    activeCategory === "Todas"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            Centro de Ayuda
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Preguntas <span className="text-cyan-400">Frecuentes</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Encuentra respuestas a las preguntas más comunes sobre nuestros
            servicios de desarrollo web, diseño y marketing digital.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-cyan-500 text-white"
                  : "bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8"
          >
            {filteredFAQs.map((faq) => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </motion.div>
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-indigo-900/50 to-cyan-900/50 border border-slate-800 rounded-3xl p-12 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿No encontraste tu respuesta?
          </h3>
          <p className="text-slate-400 mb-6">
            Estamos aquí para ayudarte. Contáctanos y te responderemos lo antes
            posible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contacto">
              <Button>Contactar</Button>
            </Link>
            <Link href="/cotizacion">
              <Button variant="outline">Solicitar Cotización</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
