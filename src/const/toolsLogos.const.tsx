import gitLogo from "../assets/herramientas/git.svg";
import githubLogo from "../../public/github2.webp";
import dockerLogo from "../assets/herramientas/docker.svg";
import bashLogo from "../assets/herramientas/bash.svg";
import postmanLogo from "../assets/herramientas/postman.svg";
import vscodeLogo from "../assets/herramientas/vscode.svg";
import linuxLogo from "../assets/herramientas/linux.svg";
import npmLogo from "../assets/herramientas/npm.svg";
import pnpmLogo from "../assets/herramientas/pnpm.svg";
import railwayLogo from "../assets/herramientas/railway.svg";
import vercelLogo from "../assets/herramientas/vercel.svg";
import wordpressLogo from "../assets/herramientas/wordpress.svg";

export interface IToolsLogo {
  name: string;
  src: string;
  alt: string;
}

export const toolsLogos: IToolsLogo[] = [
  { name: "Git", src: gitLogo, alt: "Logo de Git" },
  { name: "GitHub", src: githubLogo, alt: "Logo de GitHub" },
  { name: "Docker", src: dockerLogo, alt: "Logo de Docker" },
  { name: "Bash", src: bashLogo, alt: "Logo de Bash" },
  { name: "Postman", src: postmanLogo, alt: "Logo de Postman" },
  { name: "VSCode", src: vscodeLogo, alt: "Logo de VSCode" },
  { name: "Linux", src: linuxLogo, alt: "Logo de Linux" },
  { name: "Npm", src: npmLogo, alt: "Logo de NPM" },
  { name: "Pnpm", src: pnpmLogo, alt: "Logo de PNPM" },
  { name: "Railway", src: railwayLogo, alt: "Logo de Railway" },
  { name: "Vercel", src: vercelLogo, alt: "Logo de Vercel" },
  { name: "Wordpress", src: wordpressLogo, alt: "Logo de Wordpress" },
];
