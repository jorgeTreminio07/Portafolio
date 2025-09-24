import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import { lazy, Suspense } from "react";
import ScrollToHash from "./components/scroll/scrollToHash";
import { CircularProgress } from "@heroui/react";

const ClinicSystemLazy = lazy(() => import("./pages/clinicSystem"));
const CleanArchitectureLazy = lazy(() => import("./pages/cleanArchitecture"));
const NotesSystemLazy = lazy(() => import("./pages/notesSystem"));
const NotFoundPageLazy = lazy(() => import("./pages/notFoundPage"));

function App() {
  return (
    <>
      <Header />
      <ScrollToHash /> {/*  esto maneja el hash y el scroll */}
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <CircularProgress
              aria-label="Loading..."
              size="lg"
              color="primary"
            />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/clinicSystem" element={<ClinicSystemLazy />} />
          <Route
            path="/cleanArchitecture"
            element={<CleanArchitectureLazy />}
          />
          <Route path="/NotesSystem" element={<NotesSystemLazy />} />
          <Route path="*" element={<NotFoundPageLazy />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
