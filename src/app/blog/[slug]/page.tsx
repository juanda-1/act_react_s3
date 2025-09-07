import Link from "next/link";

export default function ArticuloPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold text-green-700 mb-4">
        Artículo: {params.slug}
      </h1>
      <p className="text-gray-700 mb-6">
        Este es el contenido del artículo con slug:{" "}
        <strong>{params.slug}</strong>.
      </p>

      <Link
        href="/blog"
        className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        ← Volver a la lista de artículos
      </Link>
    </div>
  );
}
