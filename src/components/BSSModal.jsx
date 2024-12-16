import React from 'react';
import bssLogo from '../assets/BSS.png';

const BSSModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Convert Google Drive view URL to embed URL
  const fileId = "1IlSzvnYlqKjI69E19KcTmfg6gXKxG6wH";
  const pdfUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  const viewUrl = `https://drive.google.com/file/d/${fileId}/view?usp=drivesdk`;
  const [pdfError, setPdfError] = React.useState(false);

  const handlePdfError = () => {
    setPdfError(true);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-7xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-white px-6 py-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">Baba Security Services</h2>
          <button
            onClick={onClose}
            className="flex items-center text-gray-600 hover:text-primary transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Panel - Company Info */}
          <div className="w-1/3 border-r bg-gray-50 p-6 overflow-y-auto">
            <div className="flex flex-col items-center mb-8">
              <img
                src={bssLogo}
                alt="BSS Logo"
                className="w-32 h-32 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">About BSS</h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">Overview</h4>
                <p className="text-sm text-gray-600">
               Founded in 1987, BSS is an authorized ISO 9001:2014 certified company and registered under the PSAR Act. It provides integrated security solutions to various clientelé like Corporate Business House, Star Hotels, MNCS, Commercials and Residencial Buildings  and offer single window solution for all security problems.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Professional Staff
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    24/7 Service
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Advanced Technology
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Customized Solutions
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">Contact</h4>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  sec_baba@yahoo.co.in
                  </p>
                  <p className="text-sm text-gray-600 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +91 9137432202
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - PDF Viewer */}
          <div className="flex-1 bg-white relative">
            {pdfError ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                <div className="text-center p-6">
                  <svg className="w-12 h-12 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Unable to load PDF</h3>
                  <p className="text-sm text-gray-600 mb-4">The PDF document could not be loaded. Please try again later.</p>
                  <a 
                    href={viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Open in New Tab
                  </a>
                </div>
              </div>
            ) : (
              <iframe
                src={pdfUrl}
                className="w-full h-full"
                allow="autoplay"
                onError={handlePdfError}
                loading="lazy"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                frameBorder="0"
                title="BSS Document"
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BSSModal;
