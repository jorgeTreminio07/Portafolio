interface ExperienceData {
  id: number;
  role: string;
  period: string;
  technologies: string[];
  description: string;
}

export const experienceData: ExperienceData[] = [
  {
    id: 1,
    role: "Analista Programador Junior - Grupo Lafise",
    period: "Nov 2025 - Actualidad",
    technologies: [".Net", "Azure DevOps", "AWS", "DB2", "SQLServer"],
    description: `
    <p class="text-gray-200 mb-3">
      <strong>Gestión y optimización de Bancanet</strong>, la plataforma transaccional principal de Grupo LAFISE, brindando soporte especializado al codigo del proyecto y asegurando la disponibilidad operativa para usuarios en <strong>Nicaragua, República Dominicana y Panamá</strong>.
    </p>
    <p class="text-gray-200 mb-3">
      <strong>Desarrollo y mantenimiento evolutivo</strong> del core de la aplicación, implementando mejoras directas en el código fuente y optimizando la lógica de negocio mediante la creación y sintonización de <strong>Stored Procedures</strong> complejos en DB2.
    </p>
    <p class="text-gray-200 mb-3">
      <strong>Expansión del ecosistema digital</strong> a través del desarrollo e implementación de nuevos <strong>Lafiservicios</strong>, integrando soluciones bancarias personalizadas para las necesidades específicas de cada Pais.
    </p>
    <p class="text-gray-200">
      <strong>Resolución de incidencias críticas</strong> y despliegue de parches en entornos de producción, garantizando la integridad de las transacciones y la satisfacción del cliente bancario en un entorno multinacional.
    </p>
  `,
  },
  {
    id: 2,
    role: "Desarrollador Fullstack Independiente",
    period: "Feb 2024 - Nov 2025",
    technologies: [".Net", "React", "Typescript", "SQL"],
    description: `<p className="text-gray-200 mb-3"><strong> Desarrollé sistemas personalizados</strong> según los requerimientos de clientes para aplicaciones de inventario, caja, almacén y expedientes clínicos, utilizando ASP.NET Core Web API, React, TypeScript y SQL. </p> <Br /><p className="text-gray-200 mb-3"> <strong> Apliqué principios de Clean Code y Clean Architecture </strong> , integrando JWT para autenticación, manejo de archivos y patrones de diseño como Mediator, Repository y CQRS para mantener un código escalable y mantenible. Usé Postman y Swagger para testeo de la API. </p><Br /> <p className="text-gray-200 mb-3"> <strong>Disené interfaces de usuario</strong> con Figma y las implementé usando React y TypeScript, integrando librerías como NextUI y MUI. Usé Tailwind CSS para diseños modernos y responsivos, con comunicación a la API mediante Axios. Implementé funcionalidades clave: autenticación (login), carga de archivos y dashboards interactivos. </p> <Br /><p className="text-gray-200"> <strong>Implementé control de versiones</strong> con Git y GitHub, gestionando ramas y colaboraciones de manera eficiente durante todo el ciclo de vida del desarrollo. </p>`,
  },
];
