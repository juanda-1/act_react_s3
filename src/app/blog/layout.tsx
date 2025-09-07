import Link from "next/link";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-green-700 mb-6">📰 Sección de Blog</h1>

      <nav className="flex gap-4 mb-6">
        <Link
          href="/blog/noticias"
          className="px-4 py-2 bg-green-100 rounded-lg hover:bg-green-200 transition"
        >
          Noticias
        </Link>
        <Link
          href="/blog/tutoriales"
          className="px-4 py-2 bg-green-100 rounded-lg hover:bg-green-200 transition"
        >
          Tutoriales
        </Link>
        <Link
          href="/blog/opinion"
          className="px-4 py-2 bg-green-100 rounded-lg hover:bg-green-200 transition"
        >
          Opinión
        </Link>
      </nav>

      {/* Contenido dinámico */}
      <div className="bg-white shadow-md rounded-lg p-6">{children}</div>
    </div>
  );
}
