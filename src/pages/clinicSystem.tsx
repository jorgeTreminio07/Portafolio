import BaseScreen from "../components/desingComponents/baseScreen";

export default function ClinicSystem() {
  const images = [
    "../../public/ClinicSystemImages/login.webp",
    "../../public/ClinicSystemImages/dashboard.png",
    "../../public/ClinicSystemImages/expedientes.png",
    "../../public/ClinicSystemImages/modal.png",
    "../../public/ClinicSystemImages/resportes.png",
    "../../public/ClinicSystemImages/backups.png",
    "../../public/ClinicSystemImages/consultas.png",
    "../../public/ClinicSystemImages/userForm.png",
    "../../public/ClinicSystemImages/Swagger.png",
  ];
  return (
    <BaseScreen
      title="Sistema de Registro y Control de Expedientes Clínicos"
      description="Aplicación full-stack diseñada para optimizar
      la gestión de la información médica en clínicas y centros
      de salud. Permite registrar, organizar y consultar
      expedientes clínicos de forma segura y eficiente,
      asegurando integridad de los datos y accesibilidad
      rápida para el personal autorizado."
      images={images}
      gitHublink="https://github.com/jorgeTreminio07/Clinic_System_"
    >
      <div className="p-6 grid gap-6 grid-cols-1 lg:grid-cols-2">
        {/* Backend Features */}
        <div className="p-4 rounded-2xl border-[#3b82f6] hover:bg-[#2f75e616] shadow-[0_2px_10px_rgba(63,81,181,0.3)] hover:shadow-[0_2px_10px_rgba(63,81,181,0.9)] col-span-2">
          <h2 className="text-xl font-bold mb-4 shine-text-nofade">
            Funcionalidades Backend
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Autenticación JWT Bearer",
              "Hash de contraseñas",
              "CRUD de Usuarios",
              "CRUD de Roles",
              "Permisos de Roles",
              "CRUD de Backups",
              "Gestión de Caché",
              "Soporte CORS",
              "Almacenamiento de Archivos",
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

        {/* Medical System Features */}
        <div className="p-4 rounded-2xl border-[#3b82f6] hover:bg-[#2f75e616] shadow-[0_2px_10px_rgba(63,81,181,0.3)] hover:shadow-[0_2px_10px_rgba(63,81,181,0.9)]">
          <h2 className="text-xl font-bold mb-4 shine-text-nofade">
            Funcionalidades API del Sistema Médico
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Crud pacientes",
              "Crud consultas",
              "Crud exámenes médicos",
              "Generar PDFs de consultas y recetas",
              "Generar PDFs de expedientes médicos",
              "Generar gráficos y reportes en Excel",
              "Exportar expedientes médicos",
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
        <div className="p-4 rounded-2xl border-[#3b82f6] hover:bg-[#2f75e616] shadow-[0_2px_10px_rgba(63,81,181,0.3)] hover:shadow-[0_2px_10px_rgba(63,81,181,0.9)]">
          <h2 className="text-xl font-bold mb-4 shine-text-nofade">
            Patrones de Diseño Aplicados
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "CQRS",
              "Mediator",
              "Repository",
              "Specification",
              "Dependency Injection",
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

        {/* Librerías */}
        <div className="p-4 rounded-2xl border-[#3b82f6] hover:bg-[#2f75e616] shadow-[0_2px_10px_rgba(63,81,181,0.3)] hover:shadow-[0_2px_10px_rgba(63,81,181,0.9)]">
          <h2 className="text-xl font-bold mb-4 shine-text-nofade">
            Librerías
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "MediatR",
              "AutoMapper",
              "Ardalis.Result",
              "Ardalis.Specification",
              "Bcrypt",
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

        {/* Base de Datos */}
        <div className="p-4 rounded-2xl border-[#3b82f6] hover:bg-[#2f75e616] shadow-[0_2px_10px_rgba(63,81,181,0.3)] hover:shadow-[0_2px_10px_rgba(63,81,181,0.9)]">
          <h2 className="text-xl font-bold mb-4 shine-text-nofade">
            Base de Datos
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "PostgreSQL",
              "Entity Framework Core",
              "Fluent API",
              "LINQ",
              "EF Migrations",
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

        {/* Tecnologías Frontend */}
        <div className="p-4 rounded-2xl border-[#3b82f6] hover:bg-[#2f75e616] shadow-[0_2px_10px_rgba(63,81,181,0.3)] hover:shadow-[0_2px_10px_rgba(63,81,181,0.9)]">
          <h2 className="text-xl font-bold mb-4 shine-text-nofade">
            Tecnologías Frontend
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "React 18",
              "Vite",
              "TypeScript",
              "Tailwind CSS",
              "Material UI (MUI)",
              "NextUI",
              "TanStack React Query",
              "Zustand",
              "Axios",
              "React Router DOM",
              "Framer Motion",
              "Formik & Yup",
              "MUI X Data Grid",
              "MUI X Charts",
              "JSPDF & Xlsx",
              "Arquitectura Limpia",
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

        {/* Funcionalidades Frontend */}
        <div className="p-4 rounded-2xl border-[#3b82f6] hover:bg-[#2f75e616] shadow-[0_2px_10px_rgba(63,81,181,0.3)] hover:shadow-[0_2px_10px_rgba(63,81,181,0.9)]">
          <h2 className="text-xl font-bold mb-4 shine-text-nofade">
            Funcionalidades Frontend
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Autenticación con JWT",
              "Control de acceso por roles (admin, recepción, consulta)",
              "UI responsiva con MUI y NextUI",
              "Formularios con validación usando Formik + Yup",
              "Gestión de estado con Zustand",
              "Queries & Caching con React Query",
              "Ruteo & LazyLoading con React Router DOM",
              "Gráficos interactivos y tablas de datos",
              "Exportación de datos (CSV, Excel, PDF)",
              "Subida y descarga de archivos",
              "Smooth animations con Framer Motion",
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
      </div>
    </BaseScreen>
  );
}
