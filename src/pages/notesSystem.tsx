import BaseScreen from "../components/desingComponents/baseScreen";

export default function NotesSystem() {
  const images = [
    "../../public/NotesSystem/login.png",
    "../../public/NotesSystem/inicio.png",
    "../../public/NotesSystem/registrodealumnos.png",
    "../../public/NotesSystem/listadodealumnos.png",
    "../../public/NotesSystem/registrodenotas.png",
    "../../public/NotesSystem/formularioregitronotas.png",
    "../../public/NotesSystem/consultadenotas.png",
  ];
  return (
    <BaseScreen
      title="Sistema de Notas INATEC V1.0"
      description="Mini proyecto personal como estudiante de Ingeniería en Sistemas. Plataforma web para la gestión académica en INATEC, que permite
        registrar y administrar las notas de los estudiantes y facilitar el
        seguimiento del desempeño estudiantil."
      images={images}
      date="20/01/2022"
      gitHublink="https://github.com/jorgeTreminio07/sistema-de-notas"
    >
      <div className="p-6 grid gap-6 grid-cols-2">
        {/* Backend Features */}
        <div className="col-span-2 lg:col-span-1 p-4 rounded-2xl border-[#3b82f6] hover:bg-[#2f75e616] shadow-[0_2px_10px_rgba(63,81,181,0.3)] hover:shadow-[0_2px_10px_rgba(63,81,181,0.9)]">
          <h2 className="text-xl font-bold mb-4 shine-text-nofade">
            Funcionalidades Backend
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "CRUD de Estudiantes",
              "CRUD de Materias",
              "CRUD de Notas",
              "Autenticación básica",
              "Gestión de Sesiones",
              "Validación de Datos",
              "Consultas SQL optimizadas",
              "Exportación de Notas",
            ].map((tag, i) => (
              <span
                key={i}
                className="text-xs font-medium px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-gray-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Design Patterns */}
        <div className="col-span-2 lg:col-span-1 p-4 rounded-2xl border-[#3b82f6] hover:bg-[#2f75e616] shadow-[0_2px_10px_rgba(63,81,181,0.3)] hover:shadow-[0_2px_10px_rgba(63,81,181,0.9)]">
          <h2 className="text-xl font-bold mb-4 shine-text-nofade">
            Patrones de Diseño Aplicados
          </h2>
          <div className="flex flex-wrap gap-2">
            {["MVC (Modelo-Vista-Controlador)", "Separation of Concerns"].map(
              (tag, i) => (
                <span
                  key={i}
                  className="text-xs font-medium px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-gray-100"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* Librerías */}
        <div className="col-span-2 lg:col-span-1 p-4 rounded-2xl border-[#3b82f6] hover:bg-[#2f75e616] shadow-[0_2px_10px_rgba(63,81,181,0.3)] hover:shadow-[0_2px_10px_rgba(63,81,181,0.9)]">
          <h2 className="text-xl font-bold mb-4 shine-text-nofade">
            Librerías
          </h2>
          <div className="flex flex-wrap gap-2">
            {["Bootstrap", "jQuery", "SweetAlert", "FontAwesome"].map(
              (tag, i) => (
                <span
                  key={i}
                  className="text-xs font-medium px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-gray-100"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* Base de Datos */}
        <div className="col-span-2 lg:col-span-1 p-4 rounded-2xl border-[#3b82f6] hover:bg-[#2f75e616] shadow-[0_2px_10px_rgba(63,81,181,0.3)] hover:shadow-[0_2px_10px_rgba(63,81,181,0.9)]">
          <h2 className="text-xl font-bold mb-4 shine-text-nofade">
            Base de Datos
          </h2>
          <div className="flex flex-wrap gap-2">
            {["MySQL"].map((tag, i) => (
              <span
                key={i}
                className="text-xs font-medium px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-gray-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </BaseScreen>
  );
}
