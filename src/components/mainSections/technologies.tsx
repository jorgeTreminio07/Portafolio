import CardTechnologies from "../desingComponents/cardTechnologies";
import html from "../../assets/frontend/html.svg";
import css from "../../assets/frontend/css.svg";
import ts from "../../assets/frontend/typescript.svg";
import reactlogo from "../../assets/frontend/react.svg";
import bootraplogo from "../../assets/frontend/bootstrap.svg";
import tailwindlogo from "../../assets/frontend/tailwindcss.svg";
import muilogo from "../../assets/frontend/mui.svg";
import herouilogo from "../../assets/frontend/heroui.svg";
import figmalogo from "../../assets/frontend/figma.svg";
import vitelogo from "../../../public/vite.svg";

export default function Technologies() {
  return (
    <>
      <section
        className="text-white col-span-2 lg:mt-44 scroll-mt-20"
        id="tecnologias"
      >
        <h2 className="shine-text font-bold text-3xl text-center">
          Tecnologías
        </h2>
        <div className="grid grid-cols-2 justify-center items-center">
          {/* CARD */}
          <CardTechnologies title="Frontend">
            <div className="flex flex-col items-center gap-2">
              <img
                src={html}
                alt="Logo de HTML"
                className="w-19 h-19 transform transition-transform duration-300 hover:scale-110"
              />
              <span className="text-white font-semibold text-sm">Html</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src={css}
                alt="Logo de css"
                className="w-19 h-19 transform transition-transform duration-300 hover:scale-110"
              />
              <span className="text-white font-semibold text-sm">Css</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src={ts}
                alt="Logo de typescript"
                className="w-19 h-19 transform transition-transform duration-300 hover:scale-110"
              />
              <span className="text-white font-semibold text-sm">
                Typescript
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src={vitelogo}
                alt="Logo de vite"
                className="w-19 h-19 transform transition-transform duration-300 hover:scale-110"
              />
              <span className="text-white font-semibold text-sm">Vite</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src={reactlogo}
                alt="Logo de react"
                className="w-19 h-19 transform transition-transform duration-300 hover:scale-110"
              />
              <span className="text-white font-semibold text-sm">React.js</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src={bootraplogo}
                alt="Logo de boostrap"
                className="w-19 h-18 mt-1 transform transition-transform duration-300 hover:scale-110"
              />
              <span className="text-white font-semibold text-sm">Boostrap</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src={tailwindlogo}
                alt="Logo de tailwind"
                className="w-19 h-19 transform transition-transform duration-300 hover:scale-110"
              />
              <span className="text-white font-semibold text-sm">
                TaiwindCss
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src={muilogo}
                alt="Logo de mui"
                className="w-19 h-19 transform transition-transform duration-300 hover:scale-110"
              />
              <span className="text-white font-semibold text-sm">
                MaterialUi
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src={herouilogo}
                alt="Logo de heroui"
                className="w-19 h-19 transform transition-transform duration-300 hover:scale-110"
              />
              <span className="text-white font-semibold text-sm">HeroUI</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src={figmalogo}
                alt="Logo de figma"
                className="w-19 h-19 transform transition-transform duration-300 hover:scale-110"
              />
              <span className="text-white font-semibold text-sm">Figma</span>
            </div>
          </CardTechnologies>
          <CardTechnologies title="Backend">
            <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">
              x
            </span>
            <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">
              x
            </span>
            <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">
              x
            </span>
          </CardTechnologies>
          <CardTechnologies title="Bases de datos">
            <img
              alt="Logo de LinkedIn"
              className="hover:bg-gradient-to-r from-blue-500 to-blue-800 w-10 h-10 rounded-full transform transition-transform duration-300 hover:scale-110"
            />
            <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">
              x
            </span>
            <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">
              x
            </span>
          </CardTechnologies>
          <CardTechnologies title="Herramientas">
            <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">
              x
            </span>
            <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">
              x
            </span>
            <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">
              x
            </span>
          </CardTechnologies>
        </div>
      </section>
    </>
  );
}
