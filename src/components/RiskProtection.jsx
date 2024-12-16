import React from 'react';

const RiskProtection = () => {
  const protectionAreas = [
    {
      title: "Statutory",
      icon: (
        <svg className="w-12 h-12 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      points: [
        "Zero risk in terms of statutory for ZSS Customers",
        "Prompt payments and benefits to all employees",
        "Risk mitigation for principal employer"
      ]
    },
    {
      title: "HSE",
      subtitle: "Health, Safety, and Environment",
      icon: (
        <svg className="w-12 h-12 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      points: [
        "Ensures employee well-being",
        "Safe workplace with incident-free operations",
        "Protection from financial and reputational risks"
      ]
    },
    {
      title: "BCP",
      subtitle: "Business Continuity Planning",
      icon: (
        <svg className="w-12 h-12 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      points: [
        "Ensures business continuity at all customer sites",
        "Strategic planning and execution",
        "Broad geographical presence"
      ]
    },
    {
      title: "Scalability",
      icon: (
        <svg className="w-12 h-12 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      points: [
        "Capabilities to meet and grow with customers",
        "Strong organizational support",
        "Strategic partnerships and acquisitions"
      ]
    },
    {
      title: "CSR",
      subtitle: "Corporate Social Responsibility",
      icon: (
        <svg className="w-12 h-12 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      points: [
        "Influences livelihood through employment and training",
        "Focus on Labor Rights and Human Rights",
        "Environmental Protection and Anti-corruption"
      ]
    },
    {
      title: "Sustainability",
      icon: (
        <svg className="w-12 h-12 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      points: [
        "Systematic environmental management",
        "Use of eco-friendly chemicals",
        "Waste management programs"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Risk Protection
            <div className="h-1 w-24 bg-primary mx-auto mt-4"></div>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {protectionAreas.map((area, index) => (
            <div 
              key={index}
              className={`rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col ${
                index === 0 ? 'bg-blue-300' :
                index === 1 ? 'bg-emerald-300' :
                index === 2 ? 'bg-amber-300' :
                index === 3 ? 'bg-fuchsia-300' :
                index === 4 ? 'bg-sky-300' :
                'bg-lime-50'
              }`}
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-6">
                  <div className="text-gray-900">
                    {area.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {area.title}
                </h3>
                {area.subtitle && (
                  <p className="text-gray-900 font-medium mb-4">
                    {area.subtitle}
                  </p>
                )}
                <ul className="space-y-3 text-left w-full">
                  {area.points.map((point, pointIndex) => (
                    <li 
                      key={pointIndex}
                      className="text-gray-900 flex items-start"
                    >
                      <svg 
                        className="w-5 h-5 text-gray-900 shrink-0 mr-2 mt-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl font-semibold text-gray-900">
            Focus Areas
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {['People', 'Environment', 'Assets', 'Reputation'].map((area, index) => (
              <span
                key={index}
                className="px-6 py-2 bg-primary/10 text-gray-900 rounded-full font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskProtection;
