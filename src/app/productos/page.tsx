import Link from "next/link";

export default function ProductosPage() {
  const productos = [
    { id: "1", nombre: "Laptop" },
    { id: "2", nombre: "Smartphone" },
    { id: "3", nombre: "Tablet" },
  ];

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">Productos</h1>
      <ul className="space-y-4">
        {productos.map((producto) => (
          <li key={producto.id}>
            <Link
              href={`/productos/${producto.id}`}
              className="block p-4 bg-indigo-100 rounded-lg hover:bg-indigo-200 transition"
            >
              {producto.nombre}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
