
import React from "react";
import { 
  MessageSquare, 
  FileSearch, 
  PenTool, 
  Code as CodeIcon, 
  CheckCircle, 
  Repeat 
} from "lucide-react";

const processSteps = [
  {
    icon: <MessageSquare className="h-8 w-8 text-dev-teal" />,
    title: "Consultation",
    description: "We start with a thorough discussion about your business goals, target audience, and specific requirements.",
    number: "01"
  },
  {
    icon: <FileSearch className="h-8 w-8 text-dev-teal" />,
    title: "Research & Strategy",
    description: "Comprehensive research into your market, competitors, and optimal digital strategies for your business.",
    number: "02"
  },
  {
    icon: <PenTool className="h-8 w-8 text-dev-teal" />,
    title: "Design & Planning",
    description: "Creating detailed plans and designs for your approval before any implementation begins.",
    number: "03"
  },
  {
    icon: <CodeIcon className="h-8 w-8 text-dev-teal" />,
    title: "Development",
    description: "Careful implementation of all digital solutions using best practices and current technologies.",
    number: "04"
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-dev-teal" />,
    title: "Testing & Launch",
    description: "Thorough testing and refinement followed by a smooth launch of your digital solutions.",
    number: "05"
  },
  {
    icon: <Repeat className="h-8 w-8 text-dev-teal" />,
    title: "Support & Optimization",
    description: "Ongoing support and data-driven optimization to ensure continued success and growth.",
    number: "06"
  }
];

const Process = () => {
  return (
    <section id="process" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 scroll-animation">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-dev-dark-blue mb-4">
            My Working Process
          </h2>
          <div className="w-20 h-1 bg-dev-teal mx-auto mb-6"></div>
          <p className="text-lg text-dev-dark-gray max-w-3xl mx-auto">
            A systematic approach that ensures high-quality results and client satisfaction at every stage of development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {processSteps.map((step, index) => (
            <div key={index} className="relative scroll-animation">
              <div className="absolute -left-2 -top-2 text-5xl font-bold text-gray-100 z-0">
                {step.number}
              </div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-dev-light-gray rounded-lg mr-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-dev-dark-blue">
                    {step.title}
                  </h3>
                </div>
                <p className="text-dev-dark-gray pl-16">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
