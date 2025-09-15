import CardTechnologies from "../desingComponents/cardTechnologies";
import { frontendLogos } from "../../const/frontLogos.const";

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
            {frontendLogos.map((logo: any, index: number) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <img src={logo.src} alt={logo.alt} className="w-16 h-16" />
                <span className="text-white font-semibold text-sm">
                  {logo.name}
                </span>
              </div>
            ))}
          </CardTechnologies>
          <CardTechnologies title="Backend">
            {frontendLogos.map((logo: any, index: number) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <img src={logo.src} alt={logo.alt} className="w-16 h-16" />
                <span className="text-white font-semibold text-sm">
                  {logo.name}
                </span>
              </div>
            ))}
          </CardTechnologies>
          {/* <CardTechnologies title="Bases de datos">
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
          </CardTechnologies> */}
        </div>
      </section>
    </>
  );
}
