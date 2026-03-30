"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { name: "Desarrollo Web", href: "/servicios/desarrollo-web" },
  { name: "E-Commerce", href: "/servicios/ecommerce" },
  { name: "Marketing Digital", href: "/servicios/marketing" },
  { name: "SEO", href: "/servicios/seo" },
  { name: "IA & Automatización", href: "/servicios/ia" },
];

const solutions = [
  { name: "Startups", href: "/solutions/startups" },
  { name: "E-Commerce", href: "/solutions/ecommerce" },
  { name: "Salud", href: "/solutions/salud" },
  { name: "Real Estate", href: "/solutions/realestate" },
  { name: "Consultoría", href: "/solutions/consultoria" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-bold text-white">Creappsy</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors">
                Servicios <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-slate-900 border border-slate-800 rounded-xl shadow-xl py-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("solutions")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors">
                Soluciones <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "solutions" && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-slate-900 border border-slate-800 rounded-xl shadow-xl py-2">
                  {solutions.map((solution) => (
                    <Link
                      key={solution.href}
                      href={solution.href}
                      className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                    >
                      {solution.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/precios"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Precios
            </Link>
            <Link
              href="/metodologia"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Metodología
            </Link>
            <Link
              href="/nosotros"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Nosotros
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contacto"
              className="px-4 py-2 text-slate-300 hover:text-white transition-colors"
            >
              Contacto
            </Link>
            <Link
              href="/cotizacion"
              className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Cotizar Proyecto
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-slate-400 uppercase">
                Servicios
              </p>
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block py-2 text-slate-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-slate-400 uppercase">
                Soluciones
              </p>
              {solutions.map((solution) => (
                <Link
                  key={solution.href}
                  href={solution.href}
                  className="block py-2 text-slate-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {solution.name}
                </Link>
              ))}
            </div>
            <div className="pt-4 border-t border-slate-800 space-y-2">
              <Link
                href="/precios"
                className="block py-2 text-slate-300 hover:text-white"
              >
                Precios
              </Link>
              <Link
                href="/contacto"
                className="block py-2 text-slate-300 hover:text-white"
              >
                Contacto
              </Link>
            </div>
            <div className="pt-4">
              <Link
                href="/cotizacion"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Cotizar Proyecto
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
