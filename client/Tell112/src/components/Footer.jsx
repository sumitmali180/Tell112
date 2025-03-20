import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"; 

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      {/* Main Footer Container */}
      <div className="container mx-auto px-4">
        {/* Top Section: Logo and Description */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <img
              src={Logo}
              alt="TELL 112 Logo"
              className="w-32 h-auto mx-auto md:mx-0"
            />
            <p className="mt-4 text-gray-400 text-sm">
              TELL 112 is committed to ensuring the safety of communities by
              providing a platform to report crimes and stay informed.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/" className="hover:text-amber-500 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/report" className="hover:text-amber-500 transition-colors">
                    Report Crime
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-amber-500 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-amber-500 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Information */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/privacy-policy" className="hover:text-amber-500 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="hover:text-amber-500 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-amber-500 transition-colors">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <span>Email:</span>{" "}
                  <a
                    href="mailto:info@tell112.com"
                    className="hover:text-amber-500 transition-colors"
                  >
                    info@tell112.com
                  </a>
                </li>
                <li>
                  <span>Phone:</span>{" "}
                  <a
                    href="tel:+1234567890"
                    className="hover:text-amber-500 transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </li>
                <li>
                  <span>Address:</span> 123 Safety Lane, Secure City, SC 45678
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Middle Section: Social Media Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8 mt-8">
          {/* Social Media Links */}
          <div className="flex space-x-6 mb-8 md:mb-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500 transition-colors"
            >
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500 transition-colors"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500 transition-colors"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500 transition-colors"
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
          </div>

          {/* Newsletter Subscription */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="Enter your email for updates"
              className="px-4 py-2 rounded-md bg-gray-800 text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-md shadow-md transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Section: Copyright and Disclaimer */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} TELL 112. All rights reserved.
          </p>
          <p className="mt-2">
            This website is designed to assist in crime reporting. For emergencies,
            please call your local law enforcement.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;