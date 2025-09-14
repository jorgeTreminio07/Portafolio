import "./App.css";
import { Button } from "@heroui/button";
import george from "../public/george.jpg";
import github from "../public/github.png";
import linkdedin from "../public/linkedin.png";
import cv from "../public/Eduardo_Treminio_FullStack_Developer.pdf";

function Appp() {
  return (
    <>
      <header className="px-20 fixed top-0 left-0 right-0 z-50 bg-[#0a0f1c]">
        {/* NAVBAR */}
        <nav
          className="flex justify-between items-center p-4 fade-intwo "
          aria-label="Menú principal"
        >
          <a href="/" className="text-xl font-bold" aria-label="Ir al inicio">
            Jorge Treminio
          </a>

          <div className="flex gap-5 text-lg font-semibold">
            <a href="#inicio" className="hover:text-blue-500">
              Inicio
            </a>
            <a href="#tecnologias" className="hover:text-blue-500">
              Tecnologías
            </a>
            <a href="#proyectos" className="hover:text-blue-500">
              Proyectos
            </a>
            <a href="#experiencia" className="hover:text-blue-500">
              Experiencia
            </a>
          </div>
        </nav>
      </header>
      <main className="min-h-screen pt-50 flex flex-wrap flex-row justify-center space-x-20">
        {/* TEXTO DE PRESENTACIÓN */}
        <section className="text-white mt-10 max-w-xl scroll-mt-70" id="inicio">
          <h1 className="text-4xl font-black slide-right">
            ¡Hola! ✌️ Soy{" "}
            <span className="font-black fade-in bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Jorge Treminio
            </span>
          </h1>

          <h2 className="mt-3 font-semibold text-2xl fade-intwo">
            Desarrollador Full Stack
          </h2>

          <p className="mt-2 fade-inthree leading-relaxed">
            Desarrollo aplicaciones web modernas utilizando{" "}
            <strong>React</strong> en el frontend y <strong>.NET</strong> en el
            backend. Me apasiona crear interfaces atractivas, rápidas y
            optimizadas para SEO.
          </p>

          {/* BOTÓN + REDES */}
          <div className="flex flex-row items-center space-x-3 mt-6 fade-infour">
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

        {/* AVATAR */}
        <aside>
          <div className="relative w-64 h-64 rounded-full">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-blue-800 blur-lg float-fade"></div>
            <img
              src={george}
              alt="Foto de Jorge Treminio, Desarrollador Full Stack"
              className="relative w-full h-full object-cover rounded-full float-fade"
            />
          </div>
        </aside>

        {/* Sección: Experiencia */}
        <section id="experiencia" className="scroll-mt-24">
          <h2 className="text-2xl font-bold mb-4">Experiencia</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, dolores. Officia nihil, quas natus distinctio dolor
            iusto necessitatibus! Fugit inventore dolorem porro laborum officiis
            deserunt a sequi beatae architecto est!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            quibusdam voluptas laborum temporibus. Excepturi minus laborum fugit
            fugiat praesentium unde. Minima enim esse dolore suscipit facere a
            rerum aut fuga!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            quibusdam voluptas laborum temporibus. Excepturi minus laborum fugit
            fugiat praesentium unde. Minima enim esse dolore suscipit facere a
            rerum aut fuga!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            quibusdam voluptas laborum temporibus. Excepturi minus laborum fugit
            fugiat praesentium unde. Minima enim esse dolore suscipit facere a
            rerum aut fuga!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            quibusdam voluptas laborum temporibus. Excepturi minus laborum fugit
            fugiat praesentium unde. Minima enim esse dolore suscipit facere a
            rerum aut fuga!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            quibusdam voluptas laborum temporibus. Excepturi minus laborum fugit
            fugiat praesentium unde. Minima enim esse dolore suscipit facere a
            rerum aut fuga!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            quibusdam voluptas laborum temporibus. Excepturi minus laborum fugit
            fugiat praesentium unde. Minima enim esse dolore suscipit facere a
            rerum aut fuga!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            quibusdam voluptas laborum temporibus. Excepturi minus laborum fugit
            fugiat praesentium unde. Minima enim esse dolore suscipit facere a
            rerum aut fuga!
          </p>
        </section>

        {/* Sección: Tecnologías */}
        <section id="tecnologias" className="scroll-mt-24">
          <h2 className="text-2xl font-bold mb-4">Tecnologías</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            quibusdam voluptas laborum temporibus. Excepturi minus laborum fugit
            fugiat praesentium unde. Minima enim esse dolore suscipit facere a
            rerum aut fuga!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            quibusdam voluptas laborum temporibus. Excepturi minus laborum fugit
            fugiat praesentium unde. Minima enim esse dolore suscipit facere a
            rerum aut fuga!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            quibusdam voluptas laborum temporibus. Excepturi minus laborum fugit
            fugiat praesentium unde. Minima enim esse dolore suscipit facere a
            rerum aut fuga!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            quibusdam voluptas laborum temporibus. Excepturi minus laborum fugit
            fugiat praesentium unde. Minima enim esse dolore suscipit facere a
            rerum aut fuga!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            quibusdam voluptas laborum temporibus. Excepturi minus laborum fugit
            fugiat praesentium unde. Minima enim esse dolore suscipit facere a
            rerum aut fuga!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            quibusdam voluptas laborum temporibus. Excepturi minus laborum fugit
            fugiat praesentium unde. Minima enim esse dolore suscipit facere a
            rerum aut fuga!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            quibusdam voluptas laborum temporibus. Excepturi minus laborum fugit
            fugiat praesentium unde. Minima enim esse dolore suscipit facere a
            rerum aut fuga!
          </p>
        </section>
      </main>

      <footer className="text-center py-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} Jorge Treminio - Desarrollador Full Stack
      </footer>
    </>
  );
}

export default Appp;
