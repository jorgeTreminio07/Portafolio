export default function Experience() {
  return (
    <>
      <section
        id="experience"
        className="text-white col-span-2 mt-25 scroll-mt-25 lg:px-4 md:px-0 px-0"
      >
        <h2 className="shine-text font-bold text-3xl text-center mb-10">
          Experiencia
        </h2>

        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {/* Experiencia Freelance */}
          <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold">Freelance</h3>
              <span className="text-gray-400 italic text-sm">
                Feb 2024 - Actualidad
              </span>
            </div>

            <p className="text-gray-300 italic mb-4">
              Desarrollador Fullstack - .Net, React + Typescript, SQL
            </p>

            <p className="text-gray-200 mb-3">
              <strong> Desarrollé sistemas personalizados</strong> según los
              requerimientos de clientes para aplicaciones de inventario, caja,
              almacén y expedientes clínicos, utilizando ASP.NET Core Web API,
              React, TypeScript y SQL.
            </p>
            <p className="text-gray-200 mb-3">
              <strong>
                Apliqué principios de Clean Code y Clean Architecture
              </strong>
              , integrando JWT para autenticación, manejo de archivos y patrones
              de diseño como Mediator, Repository y CQRS para mantener un código
              escalable y mantenible. Usé Postman y Swagger para testeo de la
              API.
            </p>
            <p className="text-gray-200 mb-3">
              <strong>Disené interfaces de usuario</strong> con Figma y las
              implementé usando React y TypeScript, integrando librerías como
              NextUI y MUI. Usé Tailwind CSS para diseños modernos y
              responsivos, con comunicación a la API mediante Axios. Implementé
              funcionalidades clave: autenticación (login), carga de archivos y
              dashboards interactivos.
            </p>
            <p className="text-gray-200">
              <strong>Implementé control de versiones</strong> con Git y GitHub,
              gestionando ramas y colaboraciones de manera eficiente durante
              todo el ciclo de vida del desarrollo.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
