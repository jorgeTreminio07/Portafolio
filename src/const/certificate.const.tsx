interface ICertificateItem {
  logo: string;
  tittle: string;
  date: string;
  institution: string;
}

export const certificates: ICertificateItem[] = [
  {
    logo: "../../public/certificate/unanlogo.png",
    tittle: "Ingeniería en Sistemas de Información",
    date: "2019 - 2024",
    institution:
      "Universidad Nacional Autónoma de Nicaragua - León (UNAN - LEÓN)",
  },
  {
    logo: "../../public/certificate/inateclogo.jpg",
    tittle: "English B1",
    date: "2023",
    institution: "Instituto Nacional Tecnologico",
  },
  {
    logo: "../../public/certificate/microsoftlogo.png",
    tittle: "Habilidades de productividad con IA generativa",
    date: "2025",
    institution: "Microsoft & Linkedin Learning",
  },
  {
    logo: "../../public/certificate/udemylogo.png",
    tittle: "Desarrollo APIs RESTFUL con ASP.NET Core 9",
    date: "2025",
    institution: "Udemy",
  },
  {
    logo: "../../public/certificate/udemylogo.png",
    tittle: "Diseño de Sistemas a Gran Escala",
    date: "2025",
    institution: "Udemy",
  },
];
