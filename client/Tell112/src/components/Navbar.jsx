import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import img from '../assets/logo.png'

// Links constant for dynamic rendering
const Links = [
  { name: "Home", path: "/" },
  { name: "Report", path: "/report" },
  { name: "Login", path: "/login" },
  { name: "Signup", path: "/signup" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-amber-400 shadow-lg z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" >
          <img src={img} alt="Tell 112" className="h-12 w-23 cursor-pointer transform scale-105 transition-all duration-300 brightness-110  shadow-lg" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {Links.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `text-gray-700  transition duration-300 ${
                  isActive ? "font-bold text-white" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        {Links.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className="block px-4 py-2 text-gray-700 hover:bg-white transition duration-300"
            onClick={toggleMobileMenu}
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;