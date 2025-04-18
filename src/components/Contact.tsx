
import React, { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle 
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setLoading(false);
      setSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 scroll-animation">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-dev-dark-blue mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-dev-teal mx-auto mb-6"></div>
          <p className="text-lg text-dev-dark-gray max-w-3xl mx-auto">
            Ready to boost your digital presence? Contact me for a consultation and let's discuss how I can help your business grow.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3 scroll-animation">
            <div className="bg-dev-light-gray p-8 rounded-lg h-full">
              <h3 className="text-2xl font-bold text-dev-dark-blue mb-6">
                Contact Information
              </h3>
              
              <div className="flex items-start mb-6">
                <div className="bg-white p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-dev-teal" />
                </div>
                <div>
                  <h4 className="font-semibold text-dev-dark-blue mb-1">Email</h4>
                  <a href="mailto:contact@devworx.com" className="text-dev-dark-gray hover:text-dev-teal transition-colors">
                    contact@devworx.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="bg-white p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-dev-teal" />
                </div>
                <div>
                  <h4 className="font-semibold text-dev-dark-blue mb-1">Phone</h4>
                  <a href="tel:+1234567890" className="text-dev-dark-gray hover:text-dev-teal transition-colors">
                    (123) 456-7890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-dev-teal" />
                </div>
                <div>
                  <h4 className="font-semibold text-dev-dark-blue mb-1">Location</h4>
                  <p className="text-dev-dark-gray">
                    San Francisco, California
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 scroll-animation">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-dev-dark-blue mb-2">Message Sent!</h3>
                <p className="text-dev-dark-gray mb-4">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-dev-teal text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-dev-light-gray p-8 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-dev-dark-blue font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dev-teal"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-dev-dark-blue font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dev-teal"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-dev-dark-blue font-medium mb-2">
                      Phone (Optional)
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dev-teal"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-dev-dark-blue font-medium mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dev-teal"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Website Creation">Website Creation</option>
                      <option value="Local SEO">Local SEO</option>
                      <option value="Digital Systems">Digital Systems</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-dev-dark-blue font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dev-teal"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-dev-teal text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors flex items-center justify-center"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
