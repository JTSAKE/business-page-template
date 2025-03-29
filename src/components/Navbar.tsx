
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <span className="text-dev-dark-blue font-heading text-xl md:text-2xl font-bold">
              Dev<span className="text-dev-teal">Worx</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="text-dev-dark-gray hover:text-dev-teal transition-colors"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-dev-dark-gray hover:text-dev-teal transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#process"
              className="text-dev-dark-gray hover:text-dev-teal transition-colors"
            >
              Process
            </a>
            <a
              href="#testimonials"
              className="text-dev-dark-gray hover:text-dev-teal transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="bg-dev-teal text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dev-dark-blue"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a
              href="#services"
              className="text-dev-dark-gray hover:text-dev-teal transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-dev-dark-gray hover:text-dev-teal transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#process"
              className="text-dev-dark-gray hover:text-dev-teal transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Process
            </a>
            <a
              href="#testimonials"
              className="text-dev-dark-gray hover:text-dev-teal transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="bg-dev-teal text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors inline-block"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
