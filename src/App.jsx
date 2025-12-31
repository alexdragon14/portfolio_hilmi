import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <BrowserRouter basename="/portfolio_hilmi">
      <div
        className={`min-h-screen ${
          isDarkMode ? "bg-slate-900 text-white" : "bg-sky-200 text-gray-900"
        } overflow-hidden transition-colors duration-300`}
      >
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
