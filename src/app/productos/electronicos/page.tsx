export default function ElectronicosPage() {
  const productos = ["Laptop Gamer", "Smartphone Pro", "Tablet 10 pulgadas"];

  return (
    <div>
      <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
        Productos &gt; Electrónicos
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
