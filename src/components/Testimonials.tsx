
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Owner, Artisan Bakery",
    content:
      "Working with DevWorx transformed our online presence. Our website now converts visitors into customers, and our Google Maps listing brings in new business every week. The attention to detail and strategic approach made all the difference.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 2,
    name: "Michael Thompson",
    position: "Managing Partner, Thompson Law",
    content:
      "The local SEO services have dramatically increased our visibility in search results. We've seen a 70% increase in qualified leads since implementing the strategies. Professional, knowledgeable, and results-driven.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Jessica Martinez",
    position: "Director, HealthFirst Clinic",
    content:
      "Our new website and digital systems have streamlined patient communication and internal workflows. The HIPAA-compliant solutions have been a game-changer for our practice. I highly recommend these services.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-dev-light-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 scroll-animation">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-dev-dark-blue mb-4">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-dev-teal mx-auto mb-6"></div>
          <p className="text-lg text-dev-dark-gray max-w-3xl mx-auto">
            Don't just take my word for it - hear what clients have to say about working together.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto px-8 scroll-animation">
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-dev-light-gray z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-dev-dark-blue" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 bg-white rounded-xl shadow-lg p-8 md:p-10"
                >
                  <div className="flex flex-col md:flex-row items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mb-4 md:mb-0 md:mr-6"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-dev-dark-blue">
                        {testimonial.name}
                      </h3>
                      <p className="text-dev-medium-gray">{testimonial.position}</p>
                      <div className="flex mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-current text-yellow-500"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-dev-dark-gray italic border-l-4 border-dev-teal pl-4 py-2">
                    "{testimonial.content}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-dev-light-gray z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-dev-dark-blue" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 mx-1 rounded-full ${
                index === currentIndex
                  ? "bg-dev-teal"
                  : "bg-gray-300 hover:bg-gray-400"
              } transition-colors`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
