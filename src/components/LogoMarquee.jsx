import React from 'react';
// import logo1 from '../assets/BSS.png';
import logo2 from '../assets/Zepto.png';
import logo3 from '../assets/Edel.jpg';
import logo4 from '../assets/Dns.jpg';
import logo5 from '../assets/Deccan.jpg';
import logo6 from '../assets/SVC.png';
import logo7 from '../assets/GP.png';
import logo8 from '../assets/Lodha.png';
import logo9 from '../assets/Hir.jpg';
import logo10 from '../assets/Raheja.jpg';
import logo11 from '../assets/Scootsy.jpg';
import logo12 from '../assets/Tci.jpg';
import logo13 from '../assets/Picture1.jpg';

const LogoMarquee = () => {
  const logos = [ logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13 ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Trusted by Industry Leaders
        </h2>
        <div className="relative overflow-hidden">
          {/* Gradient Overlay - Left */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          
          {/* Gradient Overlay - Right */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          {/* Marquee Container */}
          <div className="flex overflow-hidden">
            {/* First set of logos */}
            <div className="flex animate-marquee">
              {logos.map((logo, index) => (
                <div
                  key={`logo-1-${index}`}
                  className="flex items-center justify-center mx-12 min-w-[200px]"
                >
                  <img
                    src={logo}
                    alt={`Client Logo ${index + 1}`}
                    className="h-24 w-auto opacity-90 hover:opacity-100 hover:scale-110 transform transition-all duration-500"
                  />
                </div>
              ))}
            </div>
            
            {/* Second set of logos (duplicate for seamless loop) */}
            <div className="flex animate-marquee">
              {logos.map((logo, index) => (
                <div
                  key={`logo-2-${index}`}
                  className="flex items-center justify-center mx-12 min-w-[200px]"
                >
                  <img
                    src={logo}
                    alt={`Client Logo ${index + 1}`}
                    className="h-24 w-auto opacity-90 hover:opacity-100 hover:scale-110 transform transition-all duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
