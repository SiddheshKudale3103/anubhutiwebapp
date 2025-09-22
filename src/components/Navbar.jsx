import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../assets/Logo/logo.jpg"; // your logo file

const Nav = () => {
  const linkClass = ({ isActive }) =>
    isActive ? "text-indigo-600 font-semibold" : "text-slate-700";

  const navigate = useNavigate();

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top
    navigate("/"); // navigate to home
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo + Site Name */}
        <motion.a
          href="/"
          onClick={handleLogoClick}
          className="flex items-center space-x-3 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src={Logo}
            alt="Anubhuti Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="font-bold text-xl text-indigo-600">
            Anubhuti Healing Space
          </span>
        </motion.a>

        {/* Desktop nav */}
        <nav className="space-x-4 hidden md:flex items-center">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/programs" className={linkClass}>
            Programs
          </NavLink>
          <NavLink to="/workshops" className={linkClass}>
            Workshops
          </NavLink>
          <NavLink to="/collaborations" className={linkClass}>
            Collaborations
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
          <a
            href="mailto:anubhutihealingspace@gmail.com"
            className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-md"
          >
            Talk to a Psychologist
          </a>
        </nav>

        {/* Mobile menu */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

function MobileMenu() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-md bg-gray-100"
      >
        ☰
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md p-3">
          <Link className="block py-1" to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link
            className="block py-1"
            to="/programs"
            onClick={() => setOpen(false)}
          >
            Programs
          </Link>
          <Link
            className="block py-1"
            to="/workshops"
            onClick={() => setOpen(false)}
          >
            Workshops
          </Link>
          <Link
            className="block py-1"
            to="/collaborations"
            onClick={() => setOpen(false)}
          >
            Collaborations
          </Link>
          <Link
            className="block py-1"
            to="/contact"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}

export default Nav;
