
import React from "react";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  ArrowUp 
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-dev-dark-blue text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="#" className="inline-block mb-4">
              <span className="text-white font-heading text-2xl font-bold">
                Dev<span className="text-dev-teal">Worx</span>
              </span>
            </a>
            <p className="text-gray-300 mb-6 max-w-md">
              Specialized in helping local businesses thrive online through optimized websites, local presence, and streamlined digital systems.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-dev-teal transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-dev-teal transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-dev-teal transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-dev-teal transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-dev-teal transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-dev-teal transition-colors">Services</a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-dev-teal transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#process" className="text-gray-300 hover:text-dev-teal transition-colors">Process</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-dev-teal transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-dev-teal transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-dev-teal transition-colors">Website Creation</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-dev-teal transition-colors">Local SEO</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-dev-teal transition-colors">Digital Systems Setup</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-dev-teal transition-colors">UI/UX Design</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-dev-teal transition-colors">Google Maps Optimization</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DevWorx. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="bg-dev-teal text-white p-3 rounded-full hover:bg-opacity-90 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
