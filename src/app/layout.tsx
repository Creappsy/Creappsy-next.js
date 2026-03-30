import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Creappsy - Desarrollo Web y Marketing Digital",
    template: "%s | Creappsy",
  },
  description:
    "Creamos experiencias digitales que convierten. Desarrollo web profesional, marketing digital y soluciones de IA para empresas.",
  keywords: [
    "desarrollo web",
    "marketing digital",
    "e-commerce",
    "SEO",
    "diseño web",
    "México",
  ],
  authors: [{ name: "Creappsy" }],
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Creappsy",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX" className="scroll-smooth">
      <body className="min-h-screen bg-slate-950 antialiased">
        {children}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
