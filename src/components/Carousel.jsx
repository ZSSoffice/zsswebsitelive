import React, { useState, useEffect } from 'react';
import c1 from '../assets/C1.jpg';
import c2 from '../assets/C2.jpg';
import c3 from '../assets/C3.jpg';
import c4 from '../assets/C4.jpg';
import c6 from '../assets/C6.png';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    c1,
    c2,
    c3,
    c4,
    c6
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 2.0 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12 sm:mb-16">
          Our Gallery
          <div className="h-1 w-24 bg-primary mx-auto mt-4"></div>
        </h2>
        <div className="relative mx-auto max-w-6xl aspect-[16/9] overflow-hidden rounded-lg shadow-xl">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
                index === currentIndex ? 'translate-x-0' : 'translate-x-full'
              }`}
              style={{
                transform: `translateX(${100 * (index - currentIndex)}%)`,
              }}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          ))}
          
          {/* Navigation dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
