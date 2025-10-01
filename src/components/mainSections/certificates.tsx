import { certificates } from "../../const/certificate.const";

export default function Certificates() {
  return (
    <>
      <section
        className="text-white col-span-2 mt-44 scroll-mt-25"
        id="certificates"
      >
        <h2 className="shine-text font-bold text-3xl text-center mb-10">
          Estudios y Certificaciones
        </h2>
        <div className="flex flex-col gap-6">
          {certificates.map((certificate, index) => (
            <div className="flex items-center gap-4" key={index}>
              {/* Imagen */}
              <img
                src={certificate.logo}
                alt="Descripción"
                className="w-24 h-24 object-cover rounded-lg"
              />

              {/* Contenedor de texto (vertical) */}
              <div className="flex flex-col flex-1">
                {/* Título y fecha en fila */}
                <div className="flex items-center justify-between w-full">
                  <h2 className="text-xl font-bold text-white">
                    {certificate.tittle}
                  </h2>
                  <span className="text-md text-gray-300">
                    {certificate.date}
                  </span>
                </div>

                {/* Descripción debajo */}
                <p className="text-gray-300 mt-1">{certificate.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
