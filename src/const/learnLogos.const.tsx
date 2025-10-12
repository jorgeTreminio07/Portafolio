import nextjsLogo from "../assets/aprendiendo/nextjs.svg";
import springBootLogo from "../assets/aprendiendo/SpringBoot.svg";
import awsLogo from "../assets/aprendiendo/aws.svg";

export interface ILearnLogoItem {
  name: string;
  src: string;
  alt: string;
}

export const learnLogos: ILearnLogoItem[] = [
  // { name: "Angular", src: angularLogo, alt: "Logo de Angular" },
  // { name: "Django", src: djangoLogo, alt: "Logo de Django" },
  { name: "Next.js", src: nextjsLogo, alt: "Logo de Next.js" },
  { name: "Spring Boot", src: springBootLogo, alt: "Logo de Spring Boot" },
  { name: "AWS", src: awsLogo, alt: "Logo de AWS" },
];
