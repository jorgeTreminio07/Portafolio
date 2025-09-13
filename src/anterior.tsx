import "./App.css";
import { Button } from "@heroui/button";
import george from "../public/george.jpg";
import github from "../public/github.png";
import linkdedin from "../public/linkedin.png";

function Anterior() {
  return (
    <div className="bg-[#0a0f1c] text-white">
      <div className="mx-auto container p-4">
        <nav className="flex justify-between items-center p-4 fade-intwo">
          <a href="#" className="text-xl font-bold">
            Logotipo
          </a>

          <div className="flex gap-5 text-xl font-bold">
            <a href="#" className="hover:text-blue-500">
              Inicio
            </a>
            <a href="#" className="hover:text-blue-500">
              Tecnologías
            </a>
            <a href="#" className="hover:text-blue-500">
              Proyectos
            </a>
            <a href="#" className="hover:text-blue-500">
              Experiencia
            </a>
          </div>
        </nav>
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute w-[500px] h-[500px] bg-blue-600 rounded-full blur-3xl opacity-10 top-1/4 left-1/4"></div>
          <div className="absolute w-[400px] h-[400px] bg-blue-600 rounded-full blur-3xl opacity-10 top-1/2 left-2/3"></div>
        </div>

        <div className="min-h-screen flex flex-row mt-30 justify-center space-x-20">
          <div className=" text-white mt-10">
            <h1 className="text-4xl font-black slide-right">¡Hola! ✌️</h1>
            <p className="text-4xl font-black mt-2 slide-right">
              Soy{" "}
              <span className="font-black fade-in bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Jorge Treminio
              </span>
            </p>
            <p className="mt-1 font-semibold text-2xl fade-intwo">
              Desarrollador Full Stack
            </p>
            <p className="fade-inthree">
              Desarrollo aplicaciones web con React y .net
            </p>
            <div className="flex flex-row items-center space-x-2 mt-4 fade-infour">
              <Button className="px-6 py-2" color="primary" variant="shadow">
                Descargar CV
              </Button>
              <a
                href="https://github.com/jorgeTreminio07"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-10 h-10 rounded-full hover:bg-gradient-to-r from-blue-500 to-blue-800 transform transition-transform duration-300 hover:scale-110"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/eduardo-treminio-b02b81323/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkdedin}
                  alt="linkedin"
                  className="w-10 h-10 rounded-full hover:bg-gradient-to-r from-blue-500 to-blue-800 transform transition-transform duration-300 hover:scale-110"
                />
              </a>
            </div>
          </div>
          <div>
            <div className="relative w-64 h-64 rounded-full">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-blue-800 blur-lg float-fade"></div>
              <img
                src={george}
                alt="Avatar"
                className="relative w-full h-full object-cover rounded-full float-fade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Anterior;
