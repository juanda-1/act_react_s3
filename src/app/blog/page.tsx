import Link from "next/link";

export default function BlogPage() {
  const articulos = [
    { slug: "introduccion-nextjs", titulo: "Introducción a Next.js" },
    { slug: "react-server-components", titulo: "React Server Components" },
    { slug: "app-router-guia", titulo: "Guía del App Router" },
  ];

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-green-700">Blog</h1>
      <ul className="space-y-4">
        {articulos.map((articulo) => (
          <li key={articulo.slug}>
            <Link
              href={`/blog/${articulo.slug}`}
              className="block p-4 bg-green-100 rounded-lg hover:bg-green-200 transition"
            >
              {articulo.titulo}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
