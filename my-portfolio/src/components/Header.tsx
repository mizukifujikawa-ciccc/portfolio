import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-primary">MyPortfolio</div>
        <nav className="space-x-6 text-text text-sm font-medium">
          <Link to="/" className="hover:text-primary">Home</Link>
          <Link to="/about" className="hover:text-primary">About</Link>
          <Link to="/experience" className="hover:text-primary">Experience</Link>
          <Link to="/skills" className="hover:text-primary">Skills</Link>
          <Link to="/contact" className="hover:text-primary">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
