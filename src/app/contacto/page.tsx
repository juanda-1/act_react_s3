export default function ContactoPage() {
  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-yellow-700">Contacto</h1>
      <p className="text-gray-700">
        📧 Escríbenos al correo:{" "}
        <span className="font-semibold">contacto@ejemplo.com</span>
      </p>
      <p className="text-gray-700 mt-2">
        📞 Llámanos al: <span className="font-semibold">+57 300 123 4567</span>
      </p>
    </div>
  );
}
