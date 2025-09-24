import CardProjects from "../desingComponents/projectCard";
import { projectsData } from "../../const/projects.const.tsx";

export default function Projects() {
  return (
    <>
      <section
        id="projects"
        className="text-white col-span-2 mt-25 scroll-mt-25"
      >
        <h2 className="shine-text font-bold text-3xl text-center ">
          Proyectos
        </h2>
        <div className="grid grid-cols-2 justify-center items-center ">
          {projectsData.map((project, index) => (
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
      </section>
    </>
  );
}
