// CardTechnologies.tsx
import React from "react";

interface CardProjectsProps {
  title: string;
  image?: string;
  tags?: string[];
  children?: React.ReactNode;
  className?: string;
}

export default function CardProjects({
  title,
  image,
  tags = [],
  children,
}: CardProjectsProps) {
  return (
    <article
      className="group lg:w-110 lg:h-115 col-span-2 lg:col-span-1 bg-transparent rounded-2xl p-6 border border-[#3b82f6] lg:mx-4 mt-7  hover:bg-[#2f75e616] shadow-[0_2px_10px_rgba(63,81,181,0.5)]"
      aria-labelledby={`card-${title.replace(/\s+/g, "-").toLowerCase()}`}
    >
      {/* Imagen arriba */}
      <div className="w-full h-48 rounded-xl overflow-hidden mb-4 bg-gray-800/30 flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Imagen no disponible
          </div>
        )}
      </div>

      {/* Título */}
      <h2
        id={`card-${title.replace(/\s+/g, "-").toLowerCase()}`}
        className="shine-text text-lg lg:text-2xl font-bold text-white text-center mb-3"
      >
        {title}
      </h2>

      {/* Descripción (children) */}
      <div className="text-sm text-gray-200/90 mb-4 leading-relaxed">
        {children}
      </div>

      {/* Tags de tecnologías */}
      <div className="flex flex-wrap gap-2 pt-2">
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

/*
Example usage:

<CardTechnologies
  title="Gestión de Inventario"
  image="/img/proyecto1-1.png"
  tags={["React", "Tailwind", "Node.js", "Postgres"]}
>
  <p>Dashboard intuitivo para controlar stock, facturación y reportes en tiempo real.</p>
</CardTechnologies>

Notes:
- This component is TypeScript + Tailwind. Keep your custom sizes (lg:w-110, lg:h-115) if you use them in tailwind.config.
- If you want rotating images on hover (multiple screenshots), I can extend this component to accept an array of images and change the image on hover.
*/
