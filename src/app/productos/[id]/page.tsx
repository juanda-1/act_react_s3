import Link from "next/link";

export default function ProductoPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold text-indigo-700 mb-4">
        Producto: {params.id}
      </h1>
      <p className="text-gray-700 mb-6">
        Este es un producto de ejemplo con el ID <strong>{params.id}</strong>.
      </p>

      <Link
        href="/productos"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        ← Volver a la lista de productos
      </Link>
    </div>
  );
}
