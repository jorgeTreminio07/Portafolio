import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";

import ClinicSystem from "./pages/clinicSystem";
import CleanArchitecture from "./pages/cleanArchitecture";
import NotesSystem from "./pages/notesSystem";
import ScrollToHash from "./components/scroll/scrollToHash";

function App() {
  return (
    <>
      <Header />
      <ScrollToHash /> {/* 👈 esto maneja el hash y el scroll */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/clinicSystem" element={<ClinicSystem />} />
        <Route path="/cleanArchitecture" element={<CleanArchitecture />} />
        <Route path="/NotesSystem" element={<NotesSystem />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
