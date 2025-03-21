import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import img from "../assets/logo.png";

// Links constant for dynamic rendering
const Links = [
  { name: "Home", path: "/" },
  { name: "Report", path: "/report" },
  { name: "Login", path: "/login" },
  { name: "Signup", path: "/signup" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 ${
        isHovered || !isScrolled
          ? "w-full md:w-4/5 lg:w-2/3"
          : "w-3/4 md:w-2/3 lg:w-1/2"
      } bg-white/95 shadow-2xl rounded-3xl z-50 overflow-hidden transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)} // Add hover effect
      onMouseLeave={() => setIsHovered(false)} // Remove hover effect
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={img}
            alt="Tell 112"
            className="h-12 w-auto cursor-pointer transform transition-all duration-300 hover:scale-105"
          />
          <span className="ml-2 text-xl font-bold text-gray-800">TELL 112</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {Links.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `text-gray-700 font-medium transition duration-300 ${
                  isActive ? "text-amber-500 border-b-2 border-amber-500" : ""
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
            className="w-6 h-6 transform transition-all duration-300 hover:scale-110"
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
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {Links.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className="block px-6 py-4 text-gray-700 font-medium hover:bg-gray-100 transition duration-300"
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