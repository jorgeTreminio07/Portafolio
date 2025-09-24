import { Tooltip } from "@heroui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="px-6 md:px-20 fixed top-0 left-0 right-0 z-50 bg-trasparent backdrop-blur-md shadow-md ">
        <nav
          className="flex justify-between items-center p-4 fade-intwo"
          aria-label="Menú principal"
        >
          {/* LOGO */}
          <div className="">
            <Tooltip
              content="Ver Repositorio de Portafolio"
              showArrow={true}
              color="primary"
            >
              <a
                href="https://github.com/jorgeTreminio07/Portafolio"
                target="_blank"
                rel="noopener noreferrer"
                className="shine-text text-2xl font-sans font-bold text-[#cdcdcd]"
                aria-label=""
              >
                &lt;JTDev /&gt;
              </a>
            </Tooltip>
          </div>

          {/* ENLACES DESKTOP */}
          <div className="hidden md:flex gap-5 text-lg font-semibold">
            <Link
              to="/#home"
              className="hover:text-blue-500 underline-animate "
            >
              Inicio
            </Link>
            <Link to="/#technologies" className="underline-animate">
              Tecnologías
            </Link>
            <Link to="/#projects" className="underline-animate">
              Proyectos
            </Link>
            <Link to="/#experience" className="underline-animate">
              Experiencia
            </Link>
          </div>

          {/* BOTÓN HAMBURGUESA */}
          <button
            className="md:hidden text-6xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú"
          >
            {isOpen ? "✖" : "☰"}
          </button>

          {/* MENÚ MÓVIL */}
          {isOpen && (
            <div className="absolute top-full left-0 w-full h-screen gradient-burguernaver text-white flex flex-col items-center pt-10 space-y-20 text-4xl font-black md:hidden">
              <Link
                to="/#home"
                className="hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <Link
                to="/#technologies"
                className="hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Tecnologías
              </Link>
              <Link
                to="/#projects"
                className="hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Proyectos
              </Link>
              <Link
                to="/#experience"
                className="hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Experiencia
              </Link>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
