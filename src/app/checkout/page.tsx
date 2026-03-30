"use client";

import { motion } from "framer-motion";
import { CreditCard, Lock, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import Link from "next/link";

const steps = [
  { id: 1, name: "Carrito" },
  { id: 2, name: "Datos" },
  { id: 3, name: "Pago" },
];

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsProcessing(false);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8 text-center">
            Completar Pedido
          </h1>

          <div className="flex items-center justify-center mb-12">
            {steps.map((step, idx) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                    currentStep >= step.id
                      ? "bg-indigo-500 text-white"
                      : "bg-slate-800 text-slate-400"
                  }`}
                >
                  {currentStep > step.id ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    step.id
                  )}
                </div>
                <span
                  className={`ml-2 text-sm hidden sm:inline ${
                    currentStep >= step.id ? "text-white" : "text-slate-500"
                  }`}
                >
                  {step.name}
                </span>
                {idx < steps.length - 1 && (
                  <div
                    className={`w-12 sm:w-24 h-0.5 mx-2 ${
                      currentStep > step.id ? "bg-indigo-500" : "bg-slate-800"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8"
              >
                {currentStep === 1 && (
                  <div>
                    <h2 className="text-xl font-bold text-white mb-6">
                      Tu Carrito
                    </h2>
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center p-4 bg-slate-800/50 rounded-xl">
                        <div>
                          <p className="font-semibold text-white">
                            Desarrollo Web a Medida
                          </p>
                          <p className="text-sm text-slate-400">
                            Plan Profesional
                          </p>
                        </div>
                        <p className="font-bold text-indigo-400">$7,500 MXN</p>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-slate-800/50 rounded-xl">
                        <div>
                          <p className="font-semibold text-white">
                            SEO Premium
                          </p>
                          <p className="text-sm text-slate-400">3 meses</p>
                        </div>
                        <p className="font-bold text-indigo-400">$2,500 MXN</p>
                      </div>
                    </div>
                    <Button
                      onClick={() => setCurrentStep(2)}
                      className="w-full"
                      size="lg"
                    >
                      Continuar
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                )}

                {currentStep === 2 && (
                  <div>
                    <h2 className="text-xl font-bold text-white mb-6">
                      Datos de Contacto
                    </h2>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">
                            Nombre
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white"
                            placeholder="Tu nombre"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">
                            Apellido
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white"
                            placeholder="Tu apellido"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white"
                          placeholder="tu@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white"
                          placeholder="+52 55 1234 5678"
                        />
                      </div>
                    </div>
                    <div className="flex gap-4 mt-6">
                      <Button
                        variant="outline"
                        onClick={() => setCurrentStep(1)}
                        className="flex-1"
                      >
                        Atrás
                      </Button>
                      <Button
                        onClick={() => setCurrentStep(3)}
                        className="flex-1"
                      >
                        Continuar
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div>
                    <h2 className="text-xl font-bold text-white mb-6">
                      Método de Pago
                    </h2>

                    <div className="space-y-4 mb-6">
                      <button className="w-full flex items-center gap-4 p-4 bg-slate-800/50 border-2 border-indigo-500/50 rounded-xl">
                        <CreditCard className="w-6 h-6 text-indigo-400" />
                        <div className="text-left">
                          <p className="font-semibold text-white">
                            Tarjeta de Crédito/Débito
                          </p>
                          <p className="text-sm text-slate-400">
                            Visa, Mastercard, Amex
                          </p>
                        </div>
                      </button>
                      <button className="w-full flex items-center gap-4 p-4 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-slate-600 transition-colors">
                        <div className="w-6 h-6 rounded bg-[#003087] flex items-center justify-center text-white text-xs font-bold">
                          PP
                        </div>
                        <div className="text-left">
                          <p className="font-semibold text-white">PayPal</p>
                          <p className="text-sm text-slate-400">
                            Pago seguro con PayPal
                          </p>
                        </div>
                      </button>
                      <button className="w-full flex items-center gap-4 p-4 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-slate-600 transition-colors">
                        <div className="w-6 h-6 rounded bg-[#6772E5] flex items-center justify-center text-white text-xs font-bold">
                          S
                        </div>
                        <div className="text-left">
                          <p className="font-semibold text-white">
                            Transferencia SPEI
                          </p>
                          <p className="text-sm text-slate-400">
                            Pago directo desde tu banco
                          </p>
                        </div>
                      </button>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
                      <Lock className="w-4 h-4" />
                      <span>Pago 100% seguro. Tus datos están protegidos.</span>
                    </div>

                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        onClick={() => setCurrentStep(2)}
                        className="flex-1"
                        disabled={isProcessing}
                      >
                        Atrás
                      </Button>
                      <Button
                        onClick={handlePayment}
                        className="flex-1"
                        disabled={isProcessing}
                      >
                        {isProcessing ? (
                          <>
                            <span className="animate-spin mr-2">⏳</span>
                            Procesando...
                          </>
                        ) : (
                          <>Pagar $10,000 MXN</>
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-slate-900/50 border border-slate-800 rounded-3xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Resumen</h3>

                <div className="space-y-3 pb-4 border-b border-slate-700">
                  <div className="flex justify-between text-slate-300">
                    <span>Subtotal</span>
                    <span>$10,000 MXN</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>IVA (16%)</span>
                    <span>$1,600 MXN</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4">
                  <span className="text-lg font-bold text-white">Total</span>
                  <span className="text-2xl font-bold text-indigo-400">
                    $11,600 MXN
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
