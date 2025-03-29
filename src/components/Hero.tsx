
import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-20 md:pt-24 pb-16 md:pb-20 bg-gradient-to-br from-dev-light-gray to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-dev-dark-blue leading-tight mb-4">
              <span className="text-dev-teal">Digital Solutions</span> For Your Business Growth
            </h1>
            <p className="text-lg text-dev-dark-gray mb-8 max-w-xl">
              Expert freelance developer specializing in Digital Systems Setup, Local Presence Optimization, and Custom Website Creation to help your business thrive online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-dev-teal text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors font-medium flex items-center justify-center gap-2"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="border border-dev-dark-gray text-dev-dark-gray px-6 py-3 rounded-md hover:bg-dev-light-gray transition-colors font-medium flex items-center justify-center"
              >
                Explore Services
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-dev-teal"></div>
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Developer working on digital solutions"
                className="w-full rounded-lg shadow-xl relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-dev-teal"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
