import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 py-4 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-white text-xl font-bold">My Portfolio</div>

        {/* Hamburger Menu Button */}
        <button
          className="text-gray-300 hover:text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:items-center md:space-x-8 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li className="py-2 md:py-0">
            <Link to="/" className="text-gray-300 hover:text-white transition">
              Home
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link
              to="/projects"
              className="text-gray-300 hover:text-white transition"
            >
              Projects
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link
              to="/skills"
              className="text-gray-300 hover:text-white transition"
            >
              Skills
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link
              to="/experience"
              className="text-gray-300 hover:text-white transition"
            >
              Experience
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;