import "./App.css";
import { Button } from "@heroui/button";
import george from "../public/george.webp";
import github from "../public/github.webp";
import linkdedin from "../public/linkedin.webp";
import cv from "../public/Eduardo_Treminio_FullStack_Developer.pdf";
import { useState } from "react";

function App() {
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
            className="text-2xl font-sans font-bold text-[#cdcdcd] hover:text-blue-500"
            aria-label="Ir al inicio"
          >
            JTDev
          </a>

          {/* ENLACES DESKTOP */}
          <div className="hidden md:flex gap-5 text-lg font-semibold">
            <a href="#inicio" className="hover:text-blue-500 underline-animate">
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

      <main className="min-h-screen pt-0 grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-10 px-12">
        {/* Contenedor Flex para avatar y texto */}
        <div className="flex flex-col col-span-2 lg:flex-row items-center lg:items-start justify-center w-full">
          {/* AVATAR */}
          <aside
            className="mb-6 lg:mb-0 lg:mr-10 order-first lg:order-last flex-shrink-0  scroll-mt-70"
            id="inicio"
          >
            <div className="relative w-64 h-64 rounded-full">
              <div className="absolute inset-0 rounded-full bg-[#1655b4] blur-lg float-fade"></div>
              <img
                src={george}
                alt="Foto de Jorge Treminio, Desarrollador Full Stack"
                className="relative w-full h-full object-cover rounded-full float-fade"
              />
            </div>
          </aside>

          {/* TEXTO DE PRESENTACIÓN */}
          <section className="text-white mt-6 lg:mt-0 max-w-xl order-last lg:order-first flex flex-col">
            <h1 className="text-4xl font-black slide-right text-center lg:text-left">
              ¡Hola! ✌️ Soy{" "}
              <span className="font-black fade-in bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent ">
                Jorge Treminio
              </span>
            </h1>

            <h2 className="shine-text  font-bold text-2xl text-center lg:text-left">
              Desarrollador Full Stack
            </h2>

            <p className="mt-2 fade-inthree leading-relaxed text-center lg:text-start lg:pr-20">
              Especializado en la creación de aplicaciones web dinámicas y
              escalables. Con dominio de tecnologías modernas como{" "}
              <strong>React</strong> y <strong>.Net </strong>. Apasionado por el
              aprendizaje continuo y la construcción de soluciones eficientes
              que aporten valor real a los usuarios.
            </p>

            {/* BOTÓN + REDES */}
            <div className="flex flex-row items-center justify-center lg:justify-start space-x-3 mt-6 fade-infour">
              <Button
                className="px-6 py-2"
                color="primary"
                variant="shadow"
                as="a"
                href={cv}
                target="_blank"
              >
                Descargar CV
              </Button>

              <a
                href="https://github.com/jorgeTreminio07"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de GitHub de Jorge Treminio"
              >
                <img
                  src={github}
                  alt="Logo de GitHub"
                  className="hover:bg-gradient-to-r from-blue-500 to-blue-800 w-10 h-10 rounded-full transform transition-transform duration-300 hover:scale-110"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/eduardo-treminio-b02b81323/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de LinkedIn de Jorge Treminio"
              >
                <img
                  src={linkdedin}
                  alt="Logo de LinkedIn"
                  className="hover:bg-gradient-to-r from-blue-500 to-blue-800 w-10 h-10 rounded-full transform transition-transform duration-300 hover:scale-110"
                />
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer className="text-center py-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} Jorge Treminio - Desarrollador Full Stack
      </footer>
    </>
  );
}

export default App;
