import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
} from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

const posts = {
  "1": {
    title: "Cómo elegir la mejor tecnología para tu startup en 2026",
    excerpt:
      "Guía completa sobre las tecnologías más populares y cuál elegir según tu tipo de proyecto.",
    content: `
      <p>Cuando se trata de elegir la tecnología adecuada para tu startup, la decisión puede marcar la diferencia entre el éxito y el fracaso de tu proyecto.</p>
      
      <h2>1. Define tu caso de uso</h2>
      <p>Antes de elegir cualquier tecnología, es fundamental entender qué problema estás resolviendo y qué necesidades tiene tu proyecto.</p>
      
      <h2>2. Considera la escalabilidad</h2>
      <p>Tu startup puede comenzar pequeña, pero siempre debes pensar en el futuro. Elige tecnologías que puedan escalar con tu negocio.</p>
      
      <h2>3. Evalúa el ecosistema</h2>
      <p>Una buena comunidad y documentación pueden ahorrarte meses de frustración. Investiga antes de comprometerte.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop",
    category: "Tecnología",
    author: "Carlos Ruiz",
    date: "15 Mar 2026",
    readTime: "8 min",
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const post = posts[id as keyof typeof posts];

  if (!post) {
    return { title: "Post no encontrado" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params;
  const post = posts[id as keyof typeof posts];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-950">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al blog
        </Link>

        <article>
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center">
                  <User className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <p className="font-medium text-white">{post.author}</p>
                  <p className="text-sm text-slate-400">CEO & Fundador</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-400 mr-2">Compartir:</span>
                <button className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                  <Twitter className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                  <Facebook className="w-4 h-4" />
                </button>
              </div>
            </div>
          </header>

          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-3xl mb-12"
          />

          <div
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        <div className="mt-16 pt-8 border-t border-slate-800">
          <h3 className="text-xl font-bold text-white mb-4">
            ¿Te gustó este artículo?
          </h3>
          <p className="text-slate-400 mb-6">
            Comparte este artículo con otros que también puedan encontrarlo
            útil.
          </p>
          <div className="flex gap-4">
            <Link
              href="/contacto"
              className="px-6 py-3 border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white rounded-xl font-semibold transition-all inline-flex items-center justify-center gap-2"
            >
              Contactar
            </Link>
            <Link
              href="/cotizacion"
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
            >
              Solicitar Cotización
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
