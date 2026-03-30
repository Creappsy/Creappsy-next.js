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
    category: "Desarrollo Web",
    question: "¿Trabajan con e-commerce?",
    answer:
      "Sí, desarrollamos tiendas online completas con pasarelas de pago, gestión de inventario, carritos de compra, y sistemas de envío. Trabajamos con plataformas como Shopify, WooCommerce o soluciones personalizadas.",
  },
  {
    id: 8,
    category: "Desarrollo Web",
    question: "¿Garantizan la seguridad del sitio web?",
    answer:
      "Implementamos las mejores prácticas de seguridad: certificados SSL, encriptación de datos, protección contra ataques DDoS, validación de formularios, y actualizaciones regulares de seguridad.",
  },
  {
    id: 9,
    category: "Desarrollo Web",
    question: "¿Puedo migrar mi sitio web existente?",
    answer:
      "Sí, ofrecemos servicios de migración completa. Transferimos todo tu contenido, optimizamos la estructura, y aseguramos que no haya pérdida de posicionamiento SEO durante el proceso.",
  },
  {
    id: 10,
    category: "Desarrollo Web",
    question:
      "¿Qué pasa si necesito funcionalidades adicionales después del lanzamiento?",
    answer:
      "Ofrecemos desarrollo continuo y podemos agregar nuevas funcionalidades en cualquier momento. Trabajamos con sprints ágiles para implementar mejoras de forma rápida y eficiente.",
  },
  {
    id: 11,
    category: "Diseño UI/UX",
    question: "¿Qué es el diseño UI/UX y por qué es importante?",
    answer:
      "UI (Interfaz de Usuario) se enfoca en el aspecto visual, mientras que UX (Experiencia de Usuario) optimiza la usabilidad. Un buen diseño UI/UX aumenta las conversiones hasta un 200% y mejora la satisfacción del cliente.",
  },
  {
    id: 12,
    category: "Diseño UI/UX",
    question: "¿Realizan pruebas de usabilidad?",
    answer:
      "Sí, realizamos pruebas A/B, análisis de mapas de calor, y sesiones de testing con usuarios reales para optimizar cada elemento de la interfaz antes del lanzamiento.",
  },
  {
    id: 13,
    category: "Diseño UI/UX",
    question: "¿Puedo ver prototipos antes del desarrollo?",
    answer:
      "Absolutamente. Creamos prototipos interactivos en Figma que te permiten navegar por el diseño completo antes de escribir una sola línea de código.",
  },
  {
    id: 14,
    category: "Diseño UI/UX",
    question: "¿Cómo aseguran que el diseño refleje mi marca?",
    answer:
      "Comenzamos con un análisis profundo de tu identidad de marca, competencia y público objetivo. Creamos moodboards y guías de estilo personalizadas que reflejan tu esencia.",
  },
  {
    id: 15,
    category: "Diseño UI/UX",
    question: "¿Cuántas revisiones de diseño incluyen?",
    answer:
      "Incluimos hasta 3 rondas de revisiones en cada fase del diseño. Trabajamos de forma iterativa para asegurar que el resultado final supere tus expectativas.",
  },
  {
    id: 16,
    category: "Diseño UI/UX",
    question: "¿El diseño es compatible con todas las pantallas?",
    answer:
      "Sí, diseñamos para todos los dispositivos: móviles, tablets, laptops y pantallas 4K. Cada elemento se adapta perfectamente a cualquier tamaño de pantalla.",
  },
  {
    id: 17,
    category: "Diseño UI/UX",
    question: "¿Qué herramientas de diseño utilizan?",
    answer:
      "Trabajamos con Figma para diseño de interfaces, Adobe XD para prototipos, y herramientas de análisis como Hotjar y Google Analytics para optimización basada en datos.",
  },
  {
    id: 18,
    category: "Diseño UI/UX",
    question: "¿Incluyen animaciones y microinteracciones?",
    answer:
      "Sí, agregamos animaciones sutiles y microinteracciones que mejoran la experiencia del usuario sin afectar el rendimiento. Cada animación tiene un propósito funcional.",
  },
  {
    id: 19,
    category: "Diseño UI/UX",
    question: "¿Cómo miden el éxito del diseño?",
    answer:
      "Medimos métricas clave como tasa de conversión, tiempo en página, tasa de rebote, y satisfacción del usuario mediante encuestas NPS y análisis de comportamiento.",
  },
  {
    id: 20,
    category: "Diseño UI/UX",
    question: "¿Pueden rediseñar mi sitio web actual?",
    answer:
      "Sí, realizamos auditorías UX completas de tu sitio actual, identificamos puntos de fricción, y creamos un rediseño estratégico que mejora la conversión y la experiencia del usuario.",
  },
  {
    id: 21,
    category: "Marketing Digital",
    question: "¿Qué servicios de marketing digital ofrecen?",
    answer:
      "Ofrecemos SEO, SEM (Google Ads), marketing en redes sociales, email marketing, content marketing, y estrategias de growth hacking enfocadas en ROI medible.",
  },
  {
    id: 22,
    category: "Marketing Digital",
    question: "¿Cuánto tiempo toma ver resultados en SEO?",
    answer:
      "Los primeros resultados suelen verse entre 3-6 meses. El SEO es una estrategia a largo plazo, pero implementamos quick wins que generan tráfico desde el primer mes.",
  },
  {
    id: 23,
    category: "Marketing Digital",
    question: "¿Cómo miden el ROI de las campañas?",
    answer:
      "Implementamos tracking completo con Google Analytics 4, píxeles de conversión, y dashboards personalizados que muestran en tiempo real el retorno de cada peso invertido.",
  },
  {
    id: 24,
    category: "Marketing Digital",
    question: "¿Manejan las redes sociales de mi empresa?",
    answer:
      "Sí, creamos estrategias de contenido, diseñamos publicaciones, gestionamos comunidades, y ejecutamos campañas pagadas en Facebook, Instagram, LinkedIn y TikTok.",
  },
  {
    id: 25,
    category: "Marketing Digital",
    question: "¿Qué presupuesto necesito para Google Ads?",
    answer:
      "Recomendamos un mínimo de $500-1000 USD mensuales para campañas efectivas. El presupuesto óptimo depende de tu industria, competencia y objetivos de conversión.",
  },
  {
    id: 26,
    category: "Marketing Digital",
    question: "¿Crean contenido para blogs y redes sociales?",
    answer:
      "Sí, contamos con redactores especializados en SEO y copywriting persuasivo. Creamos calendarios editoriales completos con contenido optimizado para conversión.",
  },
  {
    id: 27,
    category: "Marketing Digital",
    question: "¿Hacen email marketing?",
    answer:
      "Sí, diseñamos campañas de email marketing automatizadas, secuencias de nurturing, newsletters, y flujos de recuperación de carritos abandonados con tasas de apertura superiores al 30%.",
  },
  {
    id: 28,
    category: "Marketing Digital",
    question: "¿Qué diferencia tienen de otras agencias?",
    answer:
      "Nos enfocamos en métricas de negocio reales (ventas, leads cualificados, ROI) en lugar de métricas de vanidad. Cada estrategia está diseñada para impactar tu bottom line.",
  },
  {
    id: 29,
    category: "Marketing Digital",
    question: "¿Ofrecen informes de resultados?",
    answer:
      "Sí, enviamos reportes mensuales detallados con análisis de rendimiento, insights accionables, y recomendaciones estratégicas. También ofrecemos reuniones de revisión trimestrales.",
  },
  {
    id: 30,
    category: "Marketing Digital",
    question: "¿Pueden ayudar con el lanzamiento de un producto?",
    answer:
      "Absolutamente. Creamos estrategias de go-to-market completas: pre-lanzamiento, lanzamiento y post-lanzamiento, con campañas coordinadas en múltiples canales.",
  },
  {
    id: 31,
    category: "IA & Automatización",
    question: "¿Qué tipo de automatizaciones pueden implementar?",
    answer:
      "Automatizamos procesos de ventas, atención al cliente con chatbots IA, email marketing, generación de reportes, gestión de inventarios, y flujos de trabajo internos.",
  },
  {
    id: 32,
    category: "IA & Automatización",
    question: "¿Cómo funciona un chatbot con IA?",
    answer:
      "Nuestros chatbots usan procesamiento de lenguaje natural (NLP) para entender preguntas complejas, aprender de cada conversación, y proporcionar respuestas personalizadas 24/7.",
  },
  {
    id: 33,
    category: "IA & Automatización",
    question: "¿Cuánto puedo ahorrar con automatización?",
    answer:
      "Nuestros clientes reportan ahorros del 40-60% en costos operativos y reducción del 70% en tiempo de procesos manuales. El ROI típico se alcanza en 6-8 meses.",
  },
  {
    id: 34,
    category: "IA & Automatización",
    question: "¿La IA puede integrarse con mis sistemas actuales?",
    answer:
      "Sí, creamos integraciones personalizadas con CRMs (Salesforce, HubSpot), ERPs, plataformas de e-commerce, y cualquier sistema con API disponible.",
  },
  {
    id: 35,
    category: "IA & Automatización",
    question: "¿Qué es el machine learning y cómo me beneficia?",
    answer:
      "El machine learning permite que los sistemas aprendan de datos históricos para predecir comportamientos, optimizar precios, personalizar recomendaciones, y detectar fraudes automáticamente.",
  },
  {
    id: 36,
    category: "IA & Automatización",
    question: "¿Necesito muchos datos para implementar IA?",
    answer:
      "No necesariamente. Podemos empezar con modelos pre-entrenados y afinarlos con tus datos. Para casos específicos, 3-6 meses de datos históricos suelen ser suficientes.",
  },
  {
    id: 37,
    category: "IA & Automatización",
    question: "¿La automatización eliminará empleos en mi empresa?",
    answer:
      "No, la automatización libera a tu equipo de tareas repetitivas para que se enfoquen en actividades estratégicas de mayor valor. Aumenta la productividad sin reducir personal.",
  },
  {
    id: 38,
    category: "IA & Automatización",
    question: "¿Qué tan segura es la IA que implementan?",
    answer:
      "Implementamos IA con encriptación de datos, cumplimiento GDPR, auditorías de seguridad regulares, y controles de acceso estrictos. La privacidad de tus datos es nuestra prioridad.",
  },
  {
    id: 39,
    category: "IA & Automatización",
    question: "¿Pueden crear asistentes virtuales personalizados?",
    answer:
      "Sí, desarrollamos asistentes virtuales entrenados específicamente con tu base de conocimiento, que pueden responder preguntas técnicas, procesar pedidos, y escalar casos complejos.",
  },
  {
    id: 40,
    category: "IA & Automatización",
    question: "¿Ofrecen capacitación para usar las herramientas de IA?",
    answer:
      "Sí, incluimos capacitación completa para tu equipo, documentación detallada, y soporte continuo. Nos aseguramos de que aproveches al máximo cada automatización implementada.",
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
