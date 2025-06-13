import { Link } from "react-router-dom";

export default function Header({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}) {
  return (
    <header
      className={`sticky top-0 z-50 shadow transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-gray-300' : 'bg-white text-black'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className={`text-xl font-bold ${darkMode ? 'text-accent' : 'text-primary'}`}>
          Mizuki Fujikawa
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link to="/" className={`hover:underline`}>
            Home
          </Link>
          <Link to="/about" className={`hover:underline`}>
            About
          </Link>
          <Link to="/experience" className={`hover:underline`}>
            Experience
          </Link>
          <Link to="/skills" className={`hover:underline`}>
            Skills
          </Link>
          <Link to="/contact" className={`hover:underline`}>
            Contact
          </Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`ml-4 px-3 py-1 rounded border text-sm transition ${
              darkMode
                ? 'border-gray-600 hover:bg-gray-700'
                : 'border-gray-300 hover:bg-gray-100'
            }`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
      </div>
    </header>
  );
}
