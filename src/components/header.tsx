import { useState } from "react";

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
          <a
            href="/"
            className="shine-text text-2xl font-sans font-bold text-[#cdcdcd]"
            aria-label="Ir al inicio"
          >
            &lt;JTDev /&gt;
          </a>

          {/* ENLACES DESKTOP */}
          <div className="hidden md:flex gap-5 text-lg font-semibold">
            <a
              href="#inicio"
              className="hover:text-blue-500 underline-animate "
            >
              Inicio
            </a>
            <a href="#tecnologias" className="underline-animate">
              Tecnologías
            </a>
            <a href="#proyectos" className="underline-animate">
              Proyectos
            </a>
            <a href="#experiencia" className="underline-animate">
              Experiencia
            </a>
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
              <a
                href="#inicio"
                className="hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </a>
              <a
                href="#tecnologias"
                className="hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Tecnologías
              </a>
              <a
                href="#proyectos"
                className="hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Proyectos
              </a>
              <a
                href="#experiencia"
                className="hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Experiencia
              </a>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
