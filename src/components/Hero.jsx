import React from 'react';

const Hero = () => {
  return (
    <section className="w-full min-h-[calc(100vh-64px)] pt-16 pb-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left animate-fadeIn">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block mb-2">Your Security</span>
              <span className="block text-primary">ZSS Responsibility</span>
            </h1>
            
            <p className="mt-6 md:mt-8 text-gray-600 text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed">
            <strong>Zon Secure Services</strong>  provides integrated solutions for comprehensive facility management, including security, housekeeping, maintenance, and more!
            </p>
            
            <div className="mt-8 md:mt-10">
              <a
                href="#contact"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-base sm:text-lg"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 animate-fadeInRight">
            <div className="relative w-full max-w-md mx-auto md:max-w-lg">
              <img
                src="images/Hero1.jpeg"
                alt="Security Services"
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
