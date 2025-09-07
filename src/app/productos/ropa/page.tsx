export default function RopaPage() {
  const productos = ["Camiseta Deportiva", "Chaqueta Casual", "Jeans Clásicos"];

  return (
    <div>
      <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
        Productos &gt; Ropa
      </h2>
      <p className="text-gray-600 mb-4">
        {productos.length} productos encontrados
      </p>

      <ul className="space-y-3">
        {productos.map((item, index) => (
          <li
            key={index}
            className="p-4 bg-indigo-50 rounded-lg shadow-sm hover:bg-indigo-100 transition"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

