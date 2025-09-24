import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center gap-6">
        <h1 className="text-6xl font-bold text-amber-50 underline">
          404 - Página no encontrada
        </h1>

        <button
          onClick={() => navigate(-1)} // 👈 -1 significa "volver atrás"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer"
        >
          Volver
        </button>
      </div>
    </>
  );
}
