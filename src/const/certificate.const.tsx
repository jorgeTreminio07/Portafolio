import unanlogo from "../../public/certificate/unanlogo.png";
import inateclogo from "../../public/certificate/inateclogo.jpg";
import microsoftlogo from "../../public/certificate/microsoftlogo.png";
import udemylogo from "../../public/certificate/udemylogo.png";

interface ICertificateItem {
  logo: string;
  tittle: string;
  date: string;
  institution: string;
}

export const certificates: ICertificateItem[] = [
  {
    logo: unanlogo,
    tittle: "Ingeniería en Sistemas de Información",
    date: "2019 - 2024",
    institution:
      "Universidad Nacional Autónoma de Nicaragua - León (UNAN - LEÓN)",
  },
  {
    logo: inateclogo,
    tittle: "English A2",
    date: "2022",
    institution: "Instituto Nacional Tecnologico",
  },
  {
    logo: microsoftlogo,
    tittle: "Habilidades de productividad con IA generativa",
    date: "2025",
    institution: "Microsoft & Linkedin Learning",
  },
  {
    logo: udemylogo,
    tittle: "Diseño de Sistemas a Gran Escala",
    date: "2025",
    institution: "Udemy",
  },
];
