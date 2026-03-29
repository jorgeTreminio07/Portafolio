import CardProjects from "../desingComponents/projectCard";
import { projectsData } from "../../const/projects.const.tsx";
import { Button } from "@heroui/button";
import { Link } from "react-router-dom";

interface Props {
  isMain?: boolean;
  tittle?: string;
}

export default function Projects({ isMain = true, tittle }: Props) {
  return (
    <>
      <section
        id="projects"
        className={`text-white col-span-2 ${isMain ? "mt-25" : ""} scroll-mt-25`}
      >
        <h2 className="shine-text font-bold text-3xl text-center ">{tittle}</h2>
        <div className="grid grid-cols-2 justify-center items-center ">
          {isMain
            ? projectsData.slice(0, 4).map((project, index) => (
                <CardProjects
                  title={project.title}
                  key={index}
                  images={project.image}
                  tags={project.tags}
                  linkGitHhub={project.linkGitHhub}
                  viewMore={project.viewMore}
                  logoGitHub={project.logoGitHub ?? true}
                >
                  {project.children}
                </CardProjects>
              ))
            : projectsData.map((project, index) => (
                <CardProjects
                  title={project.title}
                  key={index}
                  images={project.image}
                  tags={project.tags}
                  linkGitHhub={project.linkGitHhub}
                  viewMore={project.viewMore}
                  logoGitHub={project.logoGitHub ?? true}
                >
                  {project.children}
                </CardProjects>
              ))}
        </div>

        {isMain && (
          <div className="flex justify-center items-center mt-10">
            <Button className="align-center" color="primary">
              <Link to="/AllProjects">Ver todos los Proyectos</Link>
            </Button>
          </div>
        )}
      </section>
    </>
  );
}
