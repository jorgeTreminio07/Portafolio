import loginClinic from "../../public/ClinicSystemImages/login.png";

interface CardProjectsProps {
  title: string;
  image?: string[];
  tags?: string[];
  viewMore?: string;
  linkGitHhub?: string;
  logoGitHub?: boolean;
  children?: React.ReactNode;
}

export const projectsData: CardProjectsProps[] = [
  {
    title: "Sistema de Registro y Control de Expedientes Clínicos",
    image: [
      "../../public/ClinicSystemImages/login.webp",
      "../../public/ClinicSystemImages/dashboard.png",
      "../../public/ClinicSystemImages/expedientes.png",
      "../../public/ClinicSystemImages/modal.png",
      "../../public/ClinicSystemImages/resportes.png",
      "../../public/ClinicSystemImages/backups.png",
      "../../public/ClinicSystemImages/consultas.png",
      "../../public/ClinicSystemImages/userForm.png",
      "../../public/ClinicSystemImages/Swagger.png",
    ],
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
    linkGitHhub: "https://github.com/jorgeTreminio07/clinic_system",
    viewMore: "/clinicSystem",
  },
  {
    title: "API Clean Arquitecture Asp.net Core",
    image: [
      "../../public/xd/xd.jpg",
      "/img/proyecto1-2.png",
      "/img/proyecto1-3.png",
    ],
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
    linkGitHhub: "https://github.com/jorgeTreminio07/Clean_Architecture",
    viewMore: "/cleanArchitecture",
  },
  {
    title: "Perez Mcgill Law Firm",
    image: [
      "/img/proyecto1-1.png",
      "/img/proyecto1-2.png",
      "/img/proyecto1-3.png",
    ],
    tags: ["WordPress", "Astra", "Css", "Html"],
    children: (
      <p>
        Sitio web corporativo desarrollado para una firma de abogados en Estados
        Unidos, con un diseño elegante, estructura optimizada para clientes y
        una experiencia de usuario profesional.
      </p>
    ),
    viewMore: "https://perezmcgilllaw.com/",
    logoGitHub: false,
  },
  {
    title: "Sistema de Notas INATEC",
    image: [
      "/img/proyecto1-1.png",
      "/img/proyecto1-2.png",
      "/img/proyecto1-3.png",
    ],
    tags: ["Php", "Boostrap", "Mysql", "Xampp"],
    children: (
      <p>
        Plataforma web para la gestión académica en INATEC, que permite
        registrar y administrar las notas de los estudiantes de manera Segura y
        eficiente.
      </p>
    ),
    linkGitHhub: "https://github.com/jorgeTreminio07/sistema-de-notas",
    viewMore: "/NotesSystem",
  },
];
