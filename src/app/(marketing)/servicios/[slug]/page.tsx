import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { Check, ArrowLeft, Zap, Clock, Shield } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Servicio no encontrado" };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-950 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4">
        <Link
          href="/servicios"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a Servicios
        </Link>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-sm mb-6">
              <span className="text-2xl">{service.icon}</span>
              {service.category === "web-design"
                ? "Diseño Web"
                : service.category === "app-development"
                  ? "Desarrollo de Apps"
                  : "Marketing"}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {service.title}
            </h1>

            <p className="text-xl text-slate-400 mb-8">{service.description}</p>

            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                ¿Qué incluye?
              </h2>
              <ul className="grid md:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-emerald-400" />
                    </div>
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Tiempo de entrega
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">
                    {service.deliveryTime}
                  </p>
                  <p className="text-sm text-slate-400">
                    Tiempo estimado de entrega
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-1 text-emerald-400 text-sm font-semibold mb-2">
                    <Zap className="w-4 h-4 fill-current" />
                    {service.priceType === "from"
                      ? "Desde"
                      : service.priceType === "monthly"
                        ? "Por mes"
                        : "Precio fijo"}
                  </div>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-white">
                      ${service.price.latam.toLocaleString()}
                    </span>
                    <span className="text-slate-400">MXN</span>
                  </div>
                  {service.originalPrice && (
                    <p className="text-sm text-slate-500 line-through mt-1">
                      ${service.originalPrice.latam.toLocaleString()} MXN
                    </p>
                  )}
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Shield className="w-4 h-4 text-emerald-400" />
                    Garantía de satisfacción
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Clock className="w-4 h-4 text-indigo-400" />
                    Soporte incluido
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-cyan-400" />
                    Código fuente entregado
                  </div>
                </div>

                <Link href="/contacto">
                  <Button className="w-full" size="lg">
                    Solicitar Cotización
                  </Button>
                </Link>

                <p className="text-center text-xs text-slate-500 mt-4">
                  o agenda una llamada gratuita
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
