import { useNavigate } from "react-router-dom";
import MainData from "../components/mainSections/mainData";

export default function ClinicSystem() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-6xl font-bold text-amber-50 underline">
        Hello world!
      </h1>

      <button
        onClick={() => navigate(-1)} // 👈 -1 significa "volver atrás"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Volver
      </button>
    </div>
  );
}
