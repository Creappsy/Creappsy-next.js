"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const serviceTypes = [
  { id: "web", label: "Sitio Web", price: 5000 },
  { id: "ecommerce", label: "E-Commerce", price: 12000 },
  { id: "saas", label: "SaaS / App", price: 25000 },
  { id: "marketing", label: "Marketing Digital", price: 3000 },
  { id: "seo", label: "SEO", price: 2500 },
  { id: "ia", label: "Automatización IA", price: 8000 },
];

const extraServices = [
  { id: "seo_audit", label: "Auditoría SEO", price: 2000 },
  { id: "maintenance", label: "Mantenimiento (año)", price: 6000 },
  { id: "hosting", label: "Hosting premium (año)", price: 3600 },
  { id: "training", label: "Capacitación", price: 1500 },
  { id: "copywriting", label: "Copywriting profesional", price: 3000 },
  { id: "photos", label: "Sesión fotográfica", price: 2500 },
];

export default function CotizacionPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const total = [...selectedServices, ...selectedExtras].reduce((sum, id) => {
    const service = serviceTypes.find((s) => s.id === id);
    const extra = extraServices.find((e) => e.id === id);
    return sum + (service?.price || extra?.price || 0);
  }, 0);

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    );
  };

  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id],
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const selectedLabels = [
      ...selectedServices.map(
        (id) => serviceTypes.find((s) => s.id === id)?.label || "",
      ),
      ...selectedExtras.map(
        (id) => extraServices.find((e) => e.id === id)?.label || "",
      ),
    ];

    formData.set("services", selectedLabels.join(", "));
    formData.set("budget", total.toString());

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
  };

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
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
            <Calculator className="w-4 h-4" />
            Calcula tu presupuesto
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cotizador de{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Servicios
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Selecciona los servicios que necesitas y obtén una estimación
            aproximada de tu inversión.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8"
              >
                <h2 className="text-xl font-bold text-white mb-6">
                  Servicios Principales
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {serviceTypes.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => toggleService(service.id)}
                      className={cn(
                        "flex items-center justify-between p-4 rounded-xl border transition-all text-left",
                        selectedServices.includes(service.id)
                          ? "bg-indigo-500/20 border-indigo-500/50 text-white"
                          : "bg-slate-800/50 border-slate-700 text-slate-300 hover:border-slate-600",
                      )}
                    >
                      <span>{service.label}</span>
                      <span className="text-sm font-semibold">
                        ${service.price.toLocaleString()} MXN
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8"
              >
                <h2 className="text-xl font-bold text-white mb-6">
                  Servicios Adicionales
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {extraServices.map((extra) => (
                    <button
                      key={extra.id}
                      type="button"
                      onClick={() => toggleExtra(extra.id)}
                      className={cn(
                        "flex items-center justify-between p-4 rounded-xl border transition-all text-left",
                        selectedExtras.includes(extra.id)
                          ? "bg-cyan-500/20 border-cyan-500/50 text-white"
                          : "bg-slate-800/50 border-slate-700 text-slate-300 hover:border-slate-600",
                      )}
                    >
                      <span>{extra.label}</span>
                      <span className="text-sm font-semibold">
                        ${extra.price.toLocaleString()} MXN
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-slate-900/50 border border-slate-800 rounded-3xl p-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    ¡Cotización enviada!
                  </h2>
                  <p className="text-slate-400">
                    Te contactaremos en menos de 24 horas para discutir los
                    detalles de tu proyecto.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8"
                >
                  <h2 className="text-xl font-bold text-white mb-6">
                    Tus Datos
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Cuéntanos sobre tu proyecto
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                        placeholder="Describe tu proyecto, objetivos y cualquier detalle relevante..."
                      />
                    </div>
                  </div>
                  <input type="hidden" name="services" />
                  <input type="hidden" name="budget" />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full mt-6"
                    disabled={isSubmitting || selectedServices.length === 0}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Solicitar Cotización Detallada
                      </>
                    )}
                  </Button>
                </motion.div>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 bg-gradient-to-br from-indigo-900/50 to-slate-900 border border-slate-800 rounded-3xl p-8">
                <h2 className="text-lg font-bold text-white mb-6">Resumen</h2>

                {selectedServices.length > 0 && (
                  <div className="mb-6">
                    <p className="text-sm text-slate-400 mb-2">
                      Servicios principales:
                    </p>
                    <ul className="space-y-2">
                      {selectedServices.map((id) => {
                        const service = serviceTypes.find((s) => s.id === id);
                        return (
                          <li
                            key={id}
                            className="flex justify-between text-sm text-slate-300"
                          >
                            <span>{service?.label}</span>
                            <span>${service?.price.toLocaleString()}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                {selectedExtras.length > 0 && (
                  <div className="mb-6">
                    <p className="text-sm text-slate-400 mb-2">
                      Servicios adicionales:
                    </p>
                    <ul className="space-y-2">
                      {selectedExtras.map((id) => {
                        const extra = extraServices.find((e) => e.id === id);
                        return (
                          <li
                            key={id}
                            className="flex justify-between text-sm text-slate-300"
                          >
                            <span>{extra?.label}</span>
                            <span>${extra?.price.toLocaleString()}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                {selectedServices.length === 0 &&
                  selectedExtras.length === 0 && (
                    <p className="text-slate-500 text-sm italic mb-6">
                      Selecciona servicios para ver el resumen
                    </p>
                  )}

                <div className="pt-4 border-t border-slate-700">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-white">
                      Total estimado:
                    </span>
                    <span className="text-2xl font-bold text-indigo-400">
                      ${total.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">
                    *Precio estimado en MXN. Puede variar según requisitos
                    específicos.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </form>
      </div>
    </div>
  );
}
