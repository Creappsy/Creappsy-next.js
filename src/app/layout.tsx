import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://creappsy.com",
  ),
  title: {
    default: "Creappsy - Desarrollo Web y Marketing Digital",
    template: "%s | Creappsy",
  },
  description:
    "Creamos experiencias digitales que convierten. Desarrollo web profesional, marketing digital y soluciones de IA para empresas en México.",
  keywords: [
    "desarrollo web",
    "marketing digital",
    "e-commerce",
    "SEO",
    "diseño web",
    "México",
    "agencia digital",
    "SaaS",
    "startups",
  ],
  authors: [{ name: "Creappsy" }],
  creator: "Creappsy",
  publisher: "Creappsy",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://creappsy.com",
    siteName: "Creappsy",
    title: "Creappsy - Desarrollo Web y Marketing Digital",
    description:
      "Creamos experiencias digitales que convierten. Desarrollo web profesional, marketing digital y soluciones de IA.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Creappsy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creappsy - Desarrollo Web y Marketing Digital",
    description:
      "Creamos experiencias digitales que convierten. Desarrollo web profesional, marketing digital y soluciones de IA.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
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
