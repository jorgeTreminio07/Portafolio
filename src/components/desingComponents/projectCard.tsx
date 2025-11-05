// CardProjects.tsx
import React, { useState, useEffect } from "react";
import github from "../../../public/github2.webp";
import { Tooltip } from "@heroui/react";
import { Link } from "react-router-dom";

interface CardProjectsProps {
  title: string;
  images?: string[];
  tags?: string[];
  children?: React.ReactNode;
  linkGitHhub?: string;
  viewMore?: string;
  logoGitHub?: boolean;
}

export default function CardProjects({
  title,
  images = [],
  tags = [],
  children,
  linkGitHhub,
  viewMore,
  logoGitHub,
}: CardProjectsProps) {
  const [hovered, setHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= 768);

  useEffect(() => {
    let interval: number;

    if (hovered && images.length > 1) {
      interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length); // bucle infinito
      }, 1200); // cambia cada 1.2 segundos
    } else {
      setCurrentImage(0); // vuelve a la primera imagen cuando no hay hover
    }

    return () => clearInterval(interval); // limpia el intervalo
  }, [hovered, images]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1000); // md breakpoint = 768px
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <article
      className="group lg:w-120 lg:h-115 col-span-2 lg:col-span-1 
                 bg-transparent rounded-2xl p-6 border border-[#3b82f6] 
                 lg:mx-4 mt-7 hover:bg-[#2f75e616] 
                 shadow-[0_2px_10px_rgba(63,81,181,0.3)] hover:shadow-[0_2px_10px_rgba(63,81,181,0.9)]
                 flex flex-col"
      aria-labelledby={`card-${title.replace(/\s+/g, "-").toLowerCase()}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Imagen con slideshow en bucle */}
      <div className="w-full h-48 rounded-xl overflow-hidden mb-4 bg-gray-800/30 relative">
        {images.length > 0 ? (
          images.map((img, index) => (
            <React.Fragment key={index}>
              {/* Imagen */}
              <img
                src={img}
                alt={`${title} - ${index + 1}`}
                loading="lazy"
                className={`absolute inset-0 w-full h-full transition-opacity duration-300
          ${
            title === "Prestamos App"
              ? "object-contain bg-black/20"
              : "object-cover"
          }
          ${index === currentImage ? "opacity-100" : "opacity-0"}`}
              />
            </React.Fragment>
          ))
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Imagen no disponible
          </div>
        )}

        {/* Solo hover en escritorio */}
        {isDesktop && hovered && (
          <>
            <Link
              to={viewMore ?? "#"}
              className="absolute top-2 right-2 bg-[#1655b4] text-white text-xs px-2 py-1 rounded-md hover:bg-blue-500 transition-colors"
            >
              Ver más info…
            </Link>
            {logoGitHub && (
              <div className="absolute bottom-2 right-2">
                <Tooltip content="Ver Repositorio" showArrow color="primary">
                  <a
                    href={linkGitHhub}
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
            )}
          </>
        )}

        {/* Siempre visible en tablet/móvil */}
        {!isDesktop && (
          <>
            <Link
              to={viewMore ?? "#"}
              className="absolute top-2 right-2 bg-[#1655b4] text-white text-xs px-2 py-1 rounded-md hover:bg-blue-500 transition-colors"
            >
              Ver más info…
            </Link>
            {logoGitHub && (
              <div className="absolute bottom-2 right-2">
                <Tooltip content="Ver Repositorio" showArrow color="primary">
                  <a
                    href={linkGitHhub}
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
            )}
          </>
        )}
      </div>

      {/* Título */}
      <h2
        id={`card-${title.replace(/\s+/g, "-").toLowerCase()}`}
        className={`text-lg lg:text-2xl font-bold text-white text-center mb-3 ${
          hovered ? "shine-text-two" : "shine-text-nofade"
        }`}
      >
        {title}
      </h2>

      {/* Descripción */}
      <div className="text-sm text-gray-200/90 mb-4 leading-relaxed">
        {children}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-2 mt-auto">
        {tags.length > 0 ? (
          tags.map((t, i) => (
            <span
              key={i}
              className="text-xs font-medium px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-gray-100"
            >
              {t}
            </span>
          ))
        ) : (
          <span className="text-xs text-gray-400">No tags</span>
        )}
      </div>
    </article>
  );
}
