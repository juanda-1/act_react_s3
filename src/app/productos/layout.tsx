import Link from "next/link";

export default function ProductosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-indigo-700 mb-6">
        🛍️ Sección de Productos
      </h1>

      {/* Navegación secundaria */}
      <nav className="flex gap-4 mb-6">
        <Link
          href="/productos/electronicos"
          className="px-4 py-2 bg-indigo-100 rounded-lg hover:bg-indigo-200 transition"
        >
          Electrónicos
        </Link>
        <Link
          href="/productos/ropa"
          className="px-4 py-2 bg-indigo-100 rounded-lg hover:bg-indigo-200 transition"
        >
          Ropa
        </Link>
      </nav>

      {/* Contenido dinámico */}
      <div className="bg-white shadow-md rounded-lg p-6">{children}</div>
    </div>
  );
}
