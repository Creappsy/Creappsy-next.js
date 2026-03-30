import Link from "next/link";

const services = [
  { name: "Desarrollo Web", href: "/servicios/desarrollo-web" },
  { name: "E-Commerce", href: "/servicios/ecommerce" },
  { name: "Marketing Digital", href: "/servicios/marketing" },
  { name: "SEO", href: "/servicios/seo" },
  { name: "IA & Automatización", href: "/servicios/ia" },
];

const company = [
  { name: "Nosotros", href: "/nosotros" },
  { name: "Metodología", href: "/metodologia" },
  { name: "Blog", href: "/blog" },
  { name: "Contacto", href: "/contacto" },
];

const legal = [
  { name: "Términos y Condiciones", href: "/terminos" },
  { name: "Política de Privacidad", href: "/privacidad" },
  { name: "Política de Cookies", href: "/cookies" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold text-white">Creappsy</span>
            </Link>
            <p className="text-slate-400 mb-6">
              Desarrollo web profesional y marketing digital. Creamos
              experiencias digitales que convierten.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/creappsy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a
                href="https://github.com/creappsy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Servicios</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Creappsy. Todos los derechos
            reservados.
          </p>
          <p className="text-slate-500 text-sm">Hecho con ❤️ en México</p>
        </div>
      </div>
    </footer>
  );
}
