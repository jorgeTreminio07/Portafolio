import Certificates from "./mainSections/certificates";
import MainData from "./mainSections/mainData";
import Projects from "./mainSections/projects";
import Technologies from "./mainSections/technologies";

export default function Main() {
  return (
    <>
      <main className="pt-0 grid grid-cols-1 lg:grid-cols-2 items-start justify-items-center gap-10 px-12">
        <MainData />
        <Technologies />
        <Projects />
        <Certificates />
      </main>
    </>
  );
}
