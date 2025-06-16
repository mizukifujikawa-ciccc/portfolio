import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";
import { Toaster } from 'react-hot-toast';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.body.className = "bg-gray-950 text-gray-300 transition-colors duration-300";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.className = "bg-white text-black transition-colors duration-300";
    }
  }, [darkMode]);

  return (
    <Router>
      <Toaster position="top-center" reverseOrder={false} />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
      <Route path="/" element={<Home darkMode={darkMode} />} />
      <Route path="/about" element={<About darkMode={darkMode} />} />
      <Route path="/experience" element={<Experience darkMode={darkMode} />} />
      <Route path="/skills" element={<Skills darkMode={darkMode} />} />
      <Route path="/contact" element={<Contact darkMode={darkMode} />} />
      </Routes>
      <Footer darkMode={darkMode} />
    </Router>
  );
}

export default App;
