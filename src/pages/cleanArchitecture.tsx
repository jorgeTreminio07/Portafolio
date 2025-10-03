import BaseScreen from "../components/desingComponents/baseScreen";
import authImg from "../../public/cleanAchitecture/Auth.png";
import postmanImg from "../../public/cleanAchitecture/postman.png";
import backupImg from "../../public/cleanAchitecture/backup.png";
import employeesImg from "../../public/cleanAchitecture/employees.png";
import officeImg from "../../public/cleanAchitecture/office.png";

export default function CleanArchitecture() {
  const images = [authImg, postmanImg, backupImg, employeesImg, officeImg];
  return (
    <BaseScreen
      title="Web API Clean Architecture Asp.net Core 9"
      description="Plantilla base de Clean Architecture con ASP.NET
      Core Web API 9, diseñada para ayudar a desarrolladores
      a iniciar proyectos de forma rápida, manteniendo una estructura
      escalable, organizada y siguiendo buenas prácticas, sin necesidad
      de reinventar la rueda"
      images={images}
      date="14/02/2025"
      gitHublink="https://github.com/jorgeTreminio07/Clean_Architecture"
    >
      <div className="p-6 grid gap-6 grid-cols-2">
        {/* Backend Features */}
        <div className="p-4 rounded-2xl border-[#3b82f6] hover:bg-[#2f75e616] shadow-[0_2px_10px_rgba(63,81,181,0.3)] hover:shadow-[0_2px_10px_rgba(63,81,181,0.9)] col-span-2 lg:col-span-1">
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
              "Borrado Logico",
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
        <div className="col-span-2 lg:col-span-1 p-4 rounded-2xl border-[#3b82f6] hover:bg-[#2f75e616] shadow-[0_2px_10px_rgba(63,81,181,0.3)] hover:shadow-[0_2px_10px_rgba(63,81,181,0.9)]">
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
              "Swagger",
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
        <div className="col-span-2 lg:col-span-1 p-4 rounded-2xl border-[#3b82f6] hover:bg-[#2f75e616] shadow-[0_2px_10px_rgba(63,81,181,0.3)] hover:shadow-[0_2px_10px_rgba(63,81,181,0.9)]">
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
              "Redis",
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
