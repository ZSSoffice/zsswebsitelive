import React, { useState, useEffect } from 'react';
import BSSModal from './BSSModal';

const SisterCompanies = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isBSSModalOpen, setIsBSSModalOpen] = useState(false);

  useEffect(() => {
    // Preload images
    const imageUrls = ['images/BSS.png', 'images/RE.png', 'images/optimized/ZCH.jpg'];
    Promise.all(
      imageUrls.map((url) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = url;
          img.onload = resolve;
          img.onerror = reject;
        });
      })
    )
      .then(() => setImagesLoaded(true))
      .catch((err) => console.error('Error loading images:', err));
  }, []);

  return (
    <section id="sister-companies" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Our Sister Companies
          <div className="h-1 w-24 bg-primary mx-auto mt-4"></div>
        </h2>
        
        {/* Zon CollabHub Card */}
        <div className="bg-white rounded-xl shadow-xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
          
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3 relative">
                {!imagesLoaded ? (
                  <div className="w-full aspect-square bg-gray-200 animate-pulse rounded-xl"></div>
                ) : (
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                    <div className="relative">
                      <img 
                        src="images/optimized/ZCH.jpg" 
                        alt="Zon CollabHub Logo" 
                        className="w-full rounded-xl shadow-lg bg-white p-4"
                        style={{ maxHeight: '300px', objectFit: 'contain' }}
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="md:w-2/3 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                    Zon CollabHub
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Zon CollabHub is a Co-working spaces fostering innovation and community. With state-of-the-art facilities and a vibrant environment, we provide the perfect setting for professionals and businesses to thrive, connect, and grow together.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Co-working Spaces</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Managed Offices</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Shared Offices</span>
                  </div>
                </div>
                
                <div className="pt-4">
                  <a 
                    href="https://zoncollabhub.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border-2 border-primary text-base font-medium rounded-lg text-white bg-primary hover:bg-transparent hover:text-primary transition-colors duration-300"
                  >
                    Learn More
                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* BSS Card */}
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
            <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
            <div className="p-8">
              <div className="space-y-6">
                {!imagesLoaded ? (
                  <div className="w-48 h-48 bg-gray-200 animate-pulse rounded-lg mx-auto"></div>
                ) : (
                  <div className="relative group cursor-pointer" onClick={() => setIsBSSModalOpen(true)}>
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                    <div className="relative">
                      <img 
                        src="images/BSS.png" 
                        alt="Baba Security Services Logo" 
                        className="w-48 h-48 object-contain mx-auto rounded-xl shadow-lg bg-white p-4"
                      />
                    </div>
                  </div>
                )}
                
                <div className="space-y-4 text-center">
                  <h3 className="text-2xl font-bold text-gray-900">Baba Security Services</h3>
                  <p className="text-gray-600">
                    A trusted name in security services, providing comprehensive protection and peace of mind to businesses and communities.
                  </p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Security Services</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Protection</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Safety</span>
                </div>
                
                <div className="text-center">
                  <button
                    onClick={() => setIsBSSModalOpen(true)}
                    className="inline-flex items-center px-6 py-3 border-2 border-primary text-base font-medium rounded-lg text-white bg-primary hover:bg-transparent hover:text-primary transition-colors duration-300"
                  >
                    Learn More
                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RE Card */}
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
            <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
            <div className="p-8">
              <div className="space-y-6">
                {!imagesLoaded ? (
                  <div className="w-48 h-48 bg-gray-200 animate-pulse rounded-lg mx-auto"></div>
                ) : (
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                    <div className="relative">
                      <img 
                        src="images/RE.png" 
                        alt="Ravi Enterprises Logo" 
                        className="w-48 h-48 object-contain mx-auto rounded-xl shadow-lg bg-white p-4"
                      />
                    </div>
                  </div>
                )}
                
                <div className="space-y-4 text-center">
                  <h3 className="text-2xl font-bold text-gray-900">Ravi Enterprises</h3>
                  <p className="text-gray-600">
                    A leading provider of industrial solutions and Manpower Support Services, delivering quality products and exceptional service to businesses across sectors.
                  </p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Industrial Solutions</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Manpower Support Services</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <BSSModal isOpen={isBSSModalOpen} onClose={() => setIsBSSModalOpen(false)} />
      </div>
    </section>
  );
};

export default SisterCompanies;
