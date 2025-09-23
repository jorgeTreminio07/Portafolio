interface CardProjectsProps {
  title: string;
  image?: string;
  tags?: string[];
  children?: React.ReactNode;
}

export const projectsData: CardProjectsProps[] = [
  {
    title: "Sistema de Registro y Control de Expedientes Clínicos",
    image: "/img/proyecto1-1.png",
    tags: [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind",
      "Heroui",
      "Material UI",
      "Asp.NET Core",
      "PostgreSQL",
    ],
    children: (
      <p>
        Aplicación web para gestionar expedientes de clínicas de atención médica
        general.
      </p>
    ),
  },
  {
    title: "Clean Arquitecture Asp.net Core",
    image: "/img/proyecto2-1.png",
    tags: [
      "Clean Architecture",
      "Asp.Net core",
      "Postgres",
      "EF Core",
      "JWT",
      "CQRS",
      "MediatR",
      "AutoMapper",
    ],
    children: (
      <p>
        Plantilla base Clean Architecture con Asp.net Core web Api 9 para
        desarrolladores que no quieran reinventar la rueda.
      </p>
    ),
  },
  {
    title: "Sistema de Notas INATEC",
    image: "/img/proyecto1-1.png",
    tags: ["Php", "Boostrap", "Mysql", "Xampp"],
    children: (
      <p>
        Dashboard intuitivo para controlar stock, facturación y reportes en
        tiempo real.
      </p>
    ),
  },
  {
    title: "Pagina Web Perez Mcgill Law Firm",
    image: "/img/proyecto1-1.png",
    tags: ["WordPress", "Astra", "Css", "Html"],
    children: (
      <p>
        Dashboard intuitivo para controlar stock, facturación y reportes en
        tiempo real.
      </p>
    ),
  },
];
