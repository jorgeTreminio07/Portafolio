import { Button } from "@heroui/button";
import george from "../../../public/george2.webp";
import github from "../../../public/github2.webp";
import linkdedin from "../../../public/linkedin2.webp";
import cv from "../../../public/Eduardo_Treminio_FullStack_Developer.pdf";

export default function MainData() {
  return (
    <>
      {/* Contenedor Flex para avatar y texto */}
      <div className="flex flex-col col-span-2 lg:flex-row items-center lg:items-start lg:mt-55 justify-center w-full">
        {/* AVATAR */}
        <aside
          className="mb-6 lg:mb-0 lg:mr-10 order-first lg:order-last flex-shrink-0 mt-30 lg:mt-0 scroll-mt-70"
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
        <section className="text-white mt-6 lg:mt-0 max-w-xl order-last lg:order-first flex flex-col lg:pl-10">
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
            Diseño, desarrollo e implemento{" "}
            <strong>soluciones informáticas eficientes y escalables</strong>
            que impulsan la transformación digital y la eficiencia en las
            empresas.
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
    </>
  );
}
