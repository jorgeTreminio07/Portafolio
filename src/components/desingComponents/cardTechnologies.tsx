interface CardTechnologiesProps {
  title: string;
  children: React.ReactNode;
}
export default function CardTechnologies({
  title,
  children,
}: CardTechnologiesProps) {
  return (
    <>
      {/* CARD */}
      <div className="lg:w-120 lg:h-115 col-span-2 lg:col-span-1 bg-trasparent rounded-2xl p-6 border border-[#3b82f6] mx-4 mt-7 transform transition-transform duration-300 hover:scale-105 hover:bg-[#2f75e616] shadow-[0_2px_10px_rgba(63,81,181,0.5)]">
        <h2 className="shine-text text-2xl font-bold text-white text-center">
          {title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3">
          {children}
        </div>
      </div>
    </>
  );
}
