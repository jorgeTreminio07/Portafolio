import BaseScreen from "../components/desingComponents/baseScreen";

import login from "../../public/PrestamosApp/login.webp";
import appBackups from "../../public/PrestamosApp/homePage.webp";
import appClientForm from "../../public/PrestamosApp/clientList.webp";
import appReportes from "../../public/PrestamosApp/createClient.webp";
import newPrestamo from "../../public/PrestamosApp/newPrestamo.webp";
import appPrestamoForm from "../../public/PrestamosApp/Cotizacion.webp";
import prestamoslist from "../../public/PrestamosApp/prestamosList.webp";
import appBackupForm from "../../public/PrestamosApp/infoPrestamo.webp";
import reportPdf from "../../public/PrestamosApp/reportPdf.webp";
import appLogin from "../../public/PrestamosApp/abobnoHistory.webp";
import users from "../../public/PrestamosApp/users.webp";
import appHome from "../../public/PrestamosApp/backup.webp";
import appPrestamos from "../../public/PrestamosApp/configuration.webp";
import reportScreen from "../../public/PrestamosApp/repostScreen.webp";
import rengeDate from "../../public/PrestamosApp/randeDate.webp";
import appReporteForm from "../../public/PrestamosApp/excelReport.webp";

export default function PrestamosApp() {
  const images = [
    login,
    appBackups,
    appClientForm,
    appReportes,
    newPrestamo,
    appPrestamoForm,
    prestamoslist,
    appBackupForm,
    reportPdf,
    appLogin,
    users,
    appHome,
    appPrestamos,
    reportScreen,
    rengeDate,
    appReporteForm,
  ];
  return (
    <BaseScreen
      title="App de Gestión de Préstamos"
      description="Una aplicación móvil diseñada para optimizar el control financiero de
        los préstamos y facilitar el seguimiento de clientes y pagos."
      images={images}
      date="14/10/2025"
      gitHublink="https://github.com/jorgeTreminio07/PrestamosApp.git"
    >
      <div className="p-6 grid gap-6 grid-cols-2">
        {/* Backend Features */}
        <div className="p-4 rounded-2xl border-[#3b82f6] hover:bg-[#2f75e616] shadow-[0_2px_10px_rgba(63,81,181,0.3)] hover:shadow-[0_2px_10px_rgba(63,81,181,0.9)] col-span-2 lg:col-span-1">
          <h2 className="text-xl font-bold mb-4 shine-text-nofade">
            Funcionalidades
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Autenticación",
              "CRUD de Clientes",
              "CRUD de Usuarios",
              "CRUD de Préstamos",
              "CRUD de Abonos",
              "Generación de Reportes",
              "Backups",
              "Gestión de datos de la empresa",
              "Almacenamiento de Archivos",
            ].map((tag, i) => (
              <span
                key={i}
                className="text-xs font-medium px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-gray-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Design Patterns */}
        <div className="col-span-2 lg:col-span-1 p-4 rounded-2xl border-[#3b82f6] hover:bg-[#2f75e616] shadow-[0_2px_10px_rgba(63,81,181,0.3)] hover:shadow-[0_2px_10px_rgba(63,81,181,0.9)]">
          <h2 className="text-xl font-bold mb-4 shine-text-nofade">
            Patrones de Diseño Aplicados
          </h2>
          <div className="flex flex-wrap gap-2">
            {["Repository", "Dependency Injection"].map((tag, i) => (
              <span
                key={i}
                className="text-xs font-medium px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-gray-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Librerías */}
        <div className="col-span-2 lg:col-span-1 p-4 rounded-2xl border-[#3b82f6] hover:bg-[#2f75e616] shadow-[0_2px_10px_rgba(63,81,181,0.3)] hover:shadow-[0_2px_10px_rgba(63,81,181,0.9)]">
          <h2 className="text-xl font-bold mb-4 shine-text-nofade">
            Librerías
          </h2>
          <div className="flex flex-wrap gap-2">
            {["expo", "file-saver", "react-dom", "react-native", "xlsx"].map(
              (tag, i) => (
                <span
                  key={i}
                  className="text-xs font-medium px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-gray-100"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* Base de Datos */}
        <div className="col-span-2 lg:col-span-1 p-4 rounded-2xl border-[#3b82f6] hover:bg-[#2f75e616] shadow-[0_2px_10px_rgba(63,81,181,0.3)] hover:shadow-[0_2px_10px_rgba(63,81,181,0.9)]">
          <h2 className="text-xl font-bold mb-4 shine-text-nofade">
            Base de Datos
          </h2>
          <div className="flex flex-wrap gap-2">
            {["SQLite"].map((tag, i) => (
              <span
                key={i}
                className="text-xs font-medium px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-gray-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </BaseScreen>
  );
}
