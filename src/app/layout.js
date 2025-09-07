// src/app/layout.js
import Link from "next/link";
import "./globals.css"; // opcional, si quieres estilos globales

export const metadata = {
  title: "Mi sitio Next.js",
  description: "Ejemplo de layout raíz con navegación",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header>
          <nav>
            <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/productos">Productos</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
