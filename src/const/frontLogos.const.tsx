import html from "../assets/frontend/html.svg";
import css from "../assets/frontend/css.svg";
import typescriptLogo from "../assets/frontend/typescript.svg";
import viteLogo from "../../public/vite.svg";
import reactLogo from "../assets/frontend/react.svg";
import bootstrapLogo from "../assets/frontend/Bootstrap.svg";
import tailwindLogo from "../assets/frontend/tailwindcss.svg";
import muiLogo from "../assets/frontend/mui.svg";
import heroUILogo from "../assets/frontend/heroui.svg";
import figmaLogo from "../assets/frontend/Figma.svg";

export interface ILogoItem {
  name: string;
  src: string;
  alt: string;
}

export const frontendLogos: ILogoItem[] = [
  { name: "Html", src: html, alt: "Logo de HTML" },
  { name: "Css", src: css, alt: "Logo de CSS" },
  { name: "Typescript", src: typescriptLogo, alt: "Logo de Typescript" },
  { name: "Vite", src: viteLogo, alt: "Logo de Vite" },
  { name: "React.js", src: reactLogo, alt: "Logo de React" },
  { name: "Bootstrap", src: bootstrapLogo, alt: "Logo de Bootstrap" },
  { name: "TailwindCss", src: tailwindLogo, alt: "Logo de Tailwind" },
  { name: "MaterialUi", src: muiLogo, alt: "Logo de MUI" },
  { name: "HeroUI", src: heroUILogo, alt: "Logo de HeroUI" },
  { name: "Figma", src: figmaLogo, alt: "Logo de Figma" },
];
