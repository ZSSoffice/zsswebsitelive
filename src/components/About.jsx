import React from 'react';
import sdImage from '../assets/SD.png';
import raviImage from '../assets/Ravi.png';
import manojImage from '../assets/Manojj.jpeg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          About ZSS
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="src/assets/ZSSBG.png" 
              alt="ZSS Logo" 
              className="w-full max-w-md mx-auto"
            />
          </div>
          <div className="lg:w-1/2">
            <p className="text-lg text-gray-600 mb-4">
              Zon Secure Services Pvt Ltd (ZSS) formely known as Zon Secure Solutions Pvt Ltd, established in 2023 by Mr. S D Chaubey & Mr. Ravi Chaubey. ZSS is a rapidly growing security and facility management company based in the Mumbai Metropolitan Region.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              ZSS specialize in providing integrated solutions for comprehensive facility management, including security, housekeeping, maintenance, pest control, and office support services.
            </p>
            <p className="text-lg text-gray-600">
              Our mission is to optimize operations and management of various facilities, ensuring safety and efficiency while maintaining the highest standards of service.
            </p>
          </div>
        </div>

        {/* Management Section */}
        <div id="management" className="mt-20 pt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Our Management 
            <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
          </h3>
          
          <div className="container mx-auto px-4">
            {/* Top Management Card */}
            <div className="max-w-5xl mx-auto mb-16">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="w-48 h-48 flex-shrink-0 rounded-full overflow-hidden bg-gray-200 border-4 border-primary/10">
                    <img 
                      src={sdImage}
                      alt="S. D. Chaubey"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow text-center md:text-left">
                    <h4 className="text-2xl font-semibold text-gray-900 mb-2">Mr. S D Chaubey</h4>
                    <p className="text-primary font-medium mb-4">Founder & Chairman</p>
                    <p className="text-gray-600 leading-relaxed">
                      First generation entrepreneur successfully launched business in the field of Security, Facility Management and Office Support Services. 
                      He is a commerce graduate who has launched multiple business across India. Founder & Chairman of the Company for almost 
                      four decades plus, is a veteran in the Security Industry. Dedicated his life for poor people of the region and established Co-operative 
                      bank to help them.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Management Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center">
                  <div className="w-36 h-36 mb-6 rounded-full overflow-hidden bg-gray-200 border-4 border-primary/10">
                    <img 
                      src={raviImage}
                      alt="Ravi Chaubey"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Mr. Ravi Chaubey</h4>
                    <p className="text-primary font-medium mb-4">Managing  Director</p>
                    <p className="text-gray-600 leading-relaxed">
                      With more than 20 years of experience in Global Operations, Facility Management, Flex-Working, Corporate Security, Administration & Real Estate Management. 
                      He has headed Corporate Services division for prestigious banks like BNP Paribas 
                      India Solutions, Deutsche' Bank etc. Additionally, have worked with large International Property Consultants like CBRE South Asia Pvt Ltd, 
                      ISS Facility  Services India and ISS UK Ltd both at Pan India and APAC regional level. Second generation entrepreneur successfully running 
                      Facility management and Security company &  Co-working firm, a home-grown business in the states of Maharashtra, Goa & Gujarat.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center">
                  <div className="w-36 h-36 mb-6 rounded-full overflow-hidden bg-gray-200 border-4 border-primary/10">
                    <img 
                      src={manojImage}
                      alt="Manoj Pandey"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Mr. Manoj Pandey</h4>
                    <p className="text-primary font-medium mb-4">Chief Operating Officer</p>
                    <p className="text-gray-600 leading-relaxed">
                      A veteran in the field of Security and Surveillance business. Over 30 years plus of experience in the industry and have worked with 
                      various International Security firms. Arts Graduate with strong acumen on process and automation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Documents Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Documents  & Registration
            <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Shop & Establishment Act</h4>
              <p className="text-gray-600 font-medium">2410200318573425</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">PAN Number</h4>
              <p className="text-gray-600 font-medium">AACCZ2653H</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Maharashtra Pvt. Security Act 1981</h4>
              <p className="text-gray-600 font-medium">PSA/L/78/MH/2024/NOV/3/4568</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">E.P.F. Number</h4>
              <p className="text-gray-600 font-medium">THTHA3094976000</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">E.S.I.C Number</h4>
              <p className="text-gray-600 font-medium">34000736430000999</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">MSME UDYAM Number</h4>
              <p className="text-gray-600 font-medium">UDYAM-MH-33-0438264</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
