import CardTechnologies from "../desingComponents/cardTechnologies";
import { frontendLogos } from "../../const/frontLogos.const";
import { backendLogos } from "../../const/backLogos.const";
import { toolsLogos } from "../../const/toolsLogos.const";

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
            {backendLogos.map((logo: any, index: number) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <img src={logo.src} alt={logo.alt} className="w-16 h-16" />
                <span className="text-white font-semibold text-sm">
                  {logo.name}
                </span>
              </div>
            ))}
          </CardTechnologies>
          <CardTechnologies title="Herramientas">
            {toolsLogos.map((logo: any, index: number) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <img src={logo.src} alt={logo.alt} className="w-16 h-16" />
                <span className="text-white font-semibold text-sm">
                  {logo.name}
                </span>
              </div>
            ))}
          </CardTechnologies>
        </div>
      </section>
    </>
  );
}
