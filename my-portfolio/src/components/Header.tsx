import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 shadow transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-white text-black"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <div
          className={`text-xl font-bold ${
            darkMode ? "text-accent" : "text-primary"
          }`}
        >
          Portfolio
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="border px-2 py-1 rounded text-sm"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Full menu for desktop */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <NavLinks darkMode={darkMode} />
          <ToggleButton darkMode={darkMode} setDarkMode={setDarkMode} />
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 text-sm font-medium">
          <NavLinks darkMode={darkMode} isMobile />
          <ToggleButton darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      )}
    </header>
  );
}

function NavLinks({
  darkMode,
  isMobile = false,
}: {
  darkMode: boolean;
  isMobile?: boolean;
}) {
  const baseClass = `hover:underline ${isMobile ? "block" : ""}`;
  return (
    <>
      <Link to="/" className={baseClass}>
        Home
      </Link>
      <Link to="/about" className={baseClass}>
        About
      </Link>
      <Link to="/experience" className={baseClass}>
        Experience
      </Link>
      <Link to="/skills" className={baseClass}>
        Skills
      </Link>
      <Link to="/contact" className={baseClass}>
        Contact
      </Link>
    </>
  );
}

function ToggleButton({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`ml-2 px-3 py-1 rounded border text-sm transition ${
        darkMode
          ? "border-gray-600 hover:bg-gray-700"
          : "border-gray-300 hover:bg-gray-100"
      }`}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
