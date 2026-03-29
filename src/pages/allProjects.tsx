import Projects from "../components/mainSections/projects";

const AllProjects = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 pt-30 lg:pt-20 mx-4 md:mx-20 mt-0">
        <div className="col-span-2 flex flex-col items-center text-center">
          <Projects isMain={false} tittle="Todos los proyectos" />
        </div>
      </div>
    </>
  );
};
export default AllProjects;
