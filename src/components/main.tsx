import MainData from "./mainSections/mainData";
import Technologies from "./mainSections/technologies";

export default function Main() {
  return (
    <>
      <main className="min-h-screen pt-0 grid grid-cols-1 lg:grid-cols-2 items-start justify-items-center gap-10 px-12">
        <MainData />
        <Technologies />
      </main>
    </>
  );
}
