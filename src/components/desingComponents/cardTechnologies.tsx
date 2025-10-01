import { useState } from "react";

interface CardTechnologiesProps {
  title: string;
  children: React.ReactNode;
}

export default function CardTechnologies({
  title,
  children,
}: CardTechnologiesProps) {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <>
      {/* CARD */}
      <div
        className="relative lg:w-110 lg:h-110 col-span-2 lg:col-span-1 bg-transparent rounded-2xl p-6 border border-[#3b82f6] lg:mx-4 mt-7 overflow-hidden hover:bg-[#2f75e616] shadow-[0_2px_10px_rgba(63,81,181,0.3)] hover:shadow-[0_2px_10px_rgba(63,81,181,1)]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMouseMove}
      >
        {/* BRILLO SIGUIENDO EL MOUSE */}
        {hovered && (
          <div
            className="pointer-events-none absolute w-30 h-30 rounded-full bg-white/45 blur-3xl transition-transform duration-200"
            style={{
              left: mousePos.x - 150 / 2, // centrar brillo
              top: mousePos.y - 150 / 2,
            }}
          />
        )}

        <h2
          className={`text-2xl font-bold text-white text-center ${
            hovered ? "shine-text-two" : "shine-text-nofade"
          }`}
        >
          {title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
          {children}
        </div>
      </div>
    </>
  );
}
