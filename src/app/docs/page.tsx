export default function DocsPage({
  params,
}: {
  params: { slug?: string[] };
}) {
  // Capturamos los segmentos o un array vacío si no hay nada
  const segmentos = params.slug || [];

  // Construimos breadcrumbs
  const breadcrumbs = ["Docs", ...segmentos].join(" > ");

  // Título de la sección actual
  const tituloActual =
    segmentos.length > 0 ? segmentos[segmentos.length - 1] : "Inicio";

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      {/* Breadcrumbs */}
      <p className="text-sm text-gray-500 mb-4">{breadcrumbs}</p>

      {/* Título */}
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Documentación: {tituloActual}
      </h1>

      {/* Contenido dinámico */}
      {segmentos.length === 0 ? (
        <p className="text-gray-700">
          Bienvenido a la documentación. Selecciona una sección para comenzar.
        </p>
      ) : (
        <p className="text-gray-700">
          Esta es la documentación para la ruta:{" "}
          <strong>{segmentos.join(" / ")}</strong>.
        </p>
      )}
    </div>
  );
}
