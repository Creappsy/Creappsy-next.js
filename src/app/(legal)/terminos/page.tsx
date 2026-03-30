export default function TerminosPage() {
  return (
    <div className="min-h-[60vh] py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">
          Términos y Condiciones
        </h1>
        <div className="prose prose-invert prose-slate">
          <p className="text-slate-400">
            Última actualización: {new Date().toLocaleDateString("es-MX")}
          </p>
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
            1. Aceptación de los términos
          </h2>
          <p className="text-slate-400">
            Al acceder y utilizar este sitio web, aceptas estar sujeto a estos
            términos y condiciones.
          </p>
        </div>
      </div>
    </div>
  );
}
