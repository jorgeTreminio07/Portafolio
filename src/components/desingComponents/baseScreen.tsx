import { Button } from "@heroui/button";
import { useState } from "react";
import github from "../../../public/github2.webp";
import linkdedin from "../../../public/linkedin2.webp";
import { CiCalendarDate } from "react-icons/ci";
import { Tooltip } from "@heroui/react";
// import { useNavigate } from "react-router-dom";

interface CardProjectsProps {
  title: string;
  description: string;
  images: string[];
  gitHublink?: string;
  children: React.ReactNode;
}

export default function BaseScreen({
  title,
  children,
  description,
  images,
  gitHublink,
}: CardProjectsProps) {
  //   const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 pt-20 mx-20">
        <div className="col-span-2 flex flex-col items-center text-center">
          <h1 className="shine-text-nofade fade-in font-bold text-3xl mb-2">
            {title}
          </h1>
          <p className="mb-8 fade-intwo">{description}</p>
          <div className="flex flex-row items-center justify-center lg:justify-start space-x-3 mb-5 fade-intwo">
            <CiCalendarDate size={30} />
            <p className="font-semibold">29-11-24 </p>

            <div className="">
              <Tooltip
                content="Ver Repositorio"
                showArrow={true}
                color="primary"
              >
                <a
                  href={gitHublink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Perfil de GitHub de Jorge Treminio"
                >
                  <img
                    src={github}
                    alt="Logo de GitHub"
                    className="bg-gradient-to-r from-blue-500 to-blue-800 w-10 h-10 rounded-full transform transition-transform duration-300 hover:scale-110 cursor-pointer"
                  />
                </a>
              </Tooltip>
            </div>
          </div>

          {/* Carrusel */}
          <div className="w-full mx-auto flex flex-col items-center fade-intwo">
            <div className="relative w-full max-w-7xl flex items-center">
              {/* Botón Anterior */}
              <button
                onClick={prevSlide}
                className="bg-[#0042ad] hover:bg-[#3481fd] text-white p-3 rounded-full transition cursor-pointer z-10"
              >
                ◀
              </button>

              {/* Contenedor de la imagen */}
              <div className="overflow-hidden flex-1 mx-4 rounded-2xl shadow-lg">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Slide ${index}`}
                      className="w-full h-full object-contain flex-shrink-0"
                    />
                  ))}
                </div>
              </div>

              {/* Botón Siguiente */}
              <button
                onClick={nextSlide}
                className="bg-[#0042ad] hover:bg-[#3481fd] text-white p-3 rounded-full transition cursor-pointer z-10"
              >
                ▶
              </button>
            </div>
          </div>

          <div className="mt-8">{children}</div>
        </div>
      </div>
    </>
  );
}
