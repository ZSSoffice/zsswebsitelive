import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: 'images/BSS.png',
      alt: 'BSS Image',
      title: 'Business Security Services'
    },
    {
      src: 'images/RE.png',
      alt: 'RE Image',
      title: 'Real Estate'
    },
    {
      src: 'images/ZCH.jpg',
      alt: 'ZCH Image',
      title: 'ZCH Services'
    },
    {
      src: 'images/ZSS.png',
      alt: 'ZSS Image',
      title: 'Zon Security Services'
    },
    {
      src: 'images/hero.png',
      alt: 'Hero Image',
      title: 'Security Services'
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          Our Gallery
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                <h3 className="text-white font-medium p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged image view */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute -top-12 right-0 text-white text-xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              Close
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
