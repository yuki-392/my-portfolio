import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-gray-800 py-4 shadow-lg">
      <ul className="flex justify-center space-x-8">
        <li>
          <Link to="/" className="text-gray-300 hover:text-white transition">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="text-gray-300 hover:text-white transition"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/skills"
            className="text-gray-300 hover:text-white transition"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="/experience"
            className="text-gray-300 hover:text-white transition"
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-gray-300 hover:text-white transition"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;