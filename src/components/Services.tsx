
import React from "react";
import { 
  Globe, 
  LayoutGrid, 
  Code, 
  Map, 
  Settings, 
  Search 
} from "lucide-react";

const serviceItems = [
  {
    icon: <Globe className="h-10 w-10 text-dev-teal" />,
    title: "Website Creation",
    description:
      "Custom-designed, responsive websites built with modern technologies to showcase your brand and engage your visitors.",
  },
  {
    icon: <Search className="h-10 w-10 text-dev-teal" />,
    title: "Local SEO",
    description:
      "Boost your local visibility with optimized Google Business profiles, local citations, and regional SEO strategies.",
  },
  {
    icon: <Settings className="h-10 w-10 text-dev-teal" />,
    title: "Digital Systems Setup",
    description:
      "Implement efficient digital ecosystems with CRM, email marketing tools, and business automation solutions.",
  },
  {
    icon: <LayoutGrid className="h-10 w-10 text-dev-teal" />,
    title: "UI/UX Design",
    description:
      "Intuitive and attractive user interfaces that enhance user experience and drive conversions.",
  },
  {
    icon: <Map className="h-10 w-10 text-dev-teal" />,
    title: "Google Maps Optimization",
    description:
      "Maximize your Google Maps presence with optimized listings, reviews management, and geo-targeted strategies.",
  },
  {
    icon: <Code className="h-10 w-10 text-dev-teal" />,
    title: "Custom Development",
    description:
      "Bespoke web applications and features tailored to your specific business needs and requirements.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 scroll-animation">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-dev-dark-blue mb-4">
            Expert Services
          </h2>
          <div className="w-20 h-1 bg-dev-teal mx-auto mb-6"></div>
          <p className="text-lg text-dev-dark-gray max-w-3xl mx-auto">
            Comprehensive digital solutions designed to establish your online presence, attract local customers, and streamline your business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index} 
              className="bg-dev-light-gray p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 scroll-animation"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-dev-dark-blue mb-4">
                {service.title}
              </h3>
              <p className="text-dev-dark-gray">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
