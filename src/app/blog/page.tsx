import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-green-700">Blog</h1>
      <ul className="space-y-4">
        <li>
          <Link
            href="/blog/articulo-1"
            className="block p-4 bg-green-100 rounded-lg hover:bg-green-200 transition"
          >
            📝 Artículo 1
          </Link>
        </li>
        <li>
          <Link
            href="/blog/articulo-2"
            className="block p-4 bg-green-100 rounded-lg hover:bg-green-200 transition"
          >
            📝 Artículo 2
          </Link>
        </li>
        <li>
          <Link
            href="/blog/articulo-3"
            className="block p-4 bg-green-100 rounded-lg hover:bg-green-200 transition"
          >
            📝 Artículo 3
          </Link>
        </li>
      </ul>
    </div>
  );
}
