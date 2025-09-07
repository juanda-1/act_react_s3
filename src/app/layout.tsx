import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mi sitio Next.js",
  description: "Ejemplo de layout raíz con navegación en TSX",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="font-sans bg-gray-50 text-gray-900">
        {/* Barra de navegación */}
        <header className="bg-white shadow">
          <nav className="container mx-auto flex justify-between items-center p-4">
            <h1 className="text-xl font-bold text-indigo-600">Mi Sitio</h1>
            <ul className="flex gap-6">
              <li>
                <Link href="/" className="hover:text-indigo-600">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/productos" className="hover:text-indigo-600">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-indigo-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-indigo-600">
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Contenido de cada página */}
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}