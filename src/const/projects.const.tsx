import loginClinic from "../../public/ClinicSystemImages/login.webp";
import dashboardImg from "../../public/ClinicSystemImages/dashboard.png";
import expedientesImg from "../../public/ClinicSystemImages/expedientes.png";
import modalImg from "../../public/ClinicSystemImages/modal.png";
import resportesImg from "../../public/ClinicSystemImages/resportes.png";
import backupsImg from "../../public/ClinicSystemImages/backups.png";
import consultasImg from "../../public/ClinicSystemImages/consultas.png";
import userFormImg from "../../public/ClinicSystemImages/userForm.png";
import swaggerImg from "../../public/ClinicSystemImages/Swagger.png";
import authImg from "../../public/cleanAchitecture/Auth.png";
import postmanImg from "../../public/cleanAchitecture/postman.png";
import backupImg from "../../public/cleanAchitecture/backup.png";
import employeesImg from "../../public/cleanAchitecture/employees.png";
import officeImg from "../../public/cleanAchitecture/office.png";
import notesLogin from "../../public/NotesSystem/login.png";
import notesInicio from "../../public/NotesSystem/inicio.png";
import notesRegistroAlumnos from "../../public/NotesSystem/registrodealumnos.png";
import notesListadoAlumnos from "../../public/NotesSystem/listadodealumnos.png";
import notesRegistroNotas from "../../public/NotesSystem/registrodenotas.png";
import notesFormularioRegistroNotas from "../../public/NotesSystem/formularioregitronotas.png";
import notesConsultaNotas from "../../public/NotesSystem/consultadenotas.png";

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
      loginClinic,
      dashboardImg,
      expedientesImg,
      modalImg,
      resportesImg,
      backupsImg,
      consultasImg,
      userFormImg,
      swaggerImg,
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
    linkGitHhub: "https://github.com/jorgeTreminio07/Clinic_System_",
    viewMore: "/clinicSystem",
  },
  {
    title: "Web API Clean Architecture Asp.net Core 9",
    image: [authImg, postmanImg, backupImg, employeesImg, officeImg],
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
  // {
  //   title: "Perez Mcgill Law Firm",
  //   image: [
  //     "/img/page_in_constrution.png",
  //     "/img/page_in_constrution2.png",
  //     "/img/page_in_constrution3.png",
  //   ],
  //   tags: ["WordPress", "Astra", "Css", "Html"],
  //   children: (
  //     <p>
  //       Sitio web corporativo desarrollado para una firma de abogados en Estados
  //       Unidos, con un diseño elegante, estructura optimizada para clientes y
  //       una experiencia de usuario profesional.
  //     </p>
  //   ),
  //   viewMore: "https://perezmcgilllaw.com/",
  //   logoGitHub: false,
  // },
  {
    title: "Sistema de Notas INATEC V1.0",
    image: [
      notesLogin,
      notesInicio,
      notesRegistroAlumnos,
      notesListadoAlumnos,
      notesRegistroNotas,
      notesFormularioRegistroNotas,
      notesConsultaNotas,
    ],
    tags: ["Php", "Boostrap", "Mysql", "Xampp"],
    children: (
      <p>
        Plataforma web para la gestión académica en INATEC, que permite
        registrar y administrar las notas de los estudiantes y facilitar el
        seguimiento del desempeño estudiantil.
      </p>
    ),
    linkGitHhub: "https://github.com/jorgeTreminio07/sistema-de-notas",
    viewMore: "/NotesSystem",
  },
];
