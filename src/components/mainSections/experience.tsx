import { experienceData } from "../../const/experiencedata.const";

export default function Experience() {
  return (
    <>
      <section
        id="experience"
        className="text-white col-span-2 mt-25 scroll-mt-25 lg:px-4 md:px-0 px-0"
      >
        <h2 className="shine-text font-bold text-3xl text-center mb-10">
          Experiencia
        </h2>

        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <span className="text-gray-400 italic text-sm">
                  {exp.period}
                </span>
              </div>

              <p className="text-gray-300 italic mb-4">
                {exp.technologies.join(", ")}
              </p>

              {/* Inyectamos el HTML directamente */}
              <div dangerouslySetInnerHTML={{ __html: exp.description }} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
