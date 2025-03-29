
import React, { useState } from "react";

const categories = ["All", "Websites", "Local SEO", "Digital Systems"];

const projects = [
  {
    id: 1,
    title: "Artisan Bakery Website",
    category: "Websites",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "Responsive website with online ordering system for a local bakery.",
  },
  {
    id: 2,
    title: "Law Firm Local SEO",
    category: "Local SEO",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "Complete local presence optimization for a law practice.",
  },
  {
    id: 3,
    title: "Retail Chain CRM Setup",
    category: "Digital Systems",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    description: "Implemented custom CRM solution for multi-location retail business.",
  },
  {
    id: 4,
    title: "Restaurant Online Presence",
    category: "Local SEO",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    description: "Comprehensive Google Business profile optimization and citation management.",
  },
  {
    id: 5,
    title: "Healthcare Provider Website",
    category: "Websites",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "HIPAA-compliant website with patient portal integration.",
  },
  {
    id: 6,
    title: "Real Estate Office Workflow",
    category: "Digital Systems",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    description: "Automated digital systems for document management and client communications.",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-dev-light-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 scroll-animation">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-dev-dark-blue mb-4">
            Recent Projects
          </h2>
          <div className="w-20 h-1 bg-dev-teal mx-auto mb-6"></div>
          <p className="text-lg text-dev-dark-gray max-w-3xl mx-auto">
            Explore a selection of successful projects that have helped businesses enhance their digital presence and operations.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 scroll-animation">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full ${
                activeCategory === category
                  ? "bg-dev-teal text-white"
                  : "bg-white text-dev-dark-gray hover:bg-gray-100"
              } transition-colors`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 scroll-animation"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-dev-light-gray text-dev-dark-gray rounded-full text-sm mb-4">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-dev-dark-blue mb-2">
                  {project.title}
                </h3>
                <p className="text-dev-dark-gray">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
