import Link from "next/link";

export default function ProductosPage() {
  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">Productos</h1>
      <ul className="space-y-4">
        <li>
          <Link
            href="/productos/laptop"
            className="block p-4 bg-indigo-100 rounded-lg hover:bg-indigo-200 transition"
          >
            💻 Laptop
          </Link>
        </li>
        <li>
          <Link
            href="/productos/smartphone"
            className="block p-4 bg-indigo-100 rounded-lg hover:bg-indigo-200 transition"
          >
            📱 Smartphone
          </Link>
        </li>
        <li>
          <Link
            href="/productos/tablet"
            className="block p-4 bg-indigo-100 rounded-lg hover:bg-indigo-200 transition"
          >
            📟 Tablet
          </Link>
        </li>
      </ul>
    </div>
  );
}
