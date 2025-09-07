// src/app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 text-center p-6">
      <h1 className="text-4xl font-bold text-indigo-700 mb-4">
        Página de Inicio
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Bienvenido a nuestro sitio web 🚀. Explora nuestras secciones:
      </p>

      <div className="flex gap-4">
        <Link
          href="/productos"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Productos
        </Link>
        <Link
          href="/blog"
          className="px-5 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
        >
          Blog
        </Link>
        <Link
          href="/contacto"
          className="px-5 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition"
        >
          Contacto
        </Link>
      </div>
    </main>
  );
}
