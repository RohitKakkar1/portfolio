import React, { useState } from 'react';

const MobileShowcaseComponent: React.FC = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const sections = [
    {
      id: 'outbound',
      title: 'Ask & Search',
      description: 'Engage customers and increase conversions with messaging and email marketing campaigns.',
      defaultImage: 'AskSearch.png',
      hoverImage: 'AskSearch_Hover.png',
    },
    {
      id: 'notifications',
      title: 'Promote & Reach',
      description: 'Inform customers and improve satisfaction with vital account, service, or event updates.',
      defaultImage: 'PromoteReach.png',
      hoverImage: 'PromoteReach_Hover.png',
    },
    {
      id: 'security',
      title: 'Save & Connect',
      description: 'Safeguard customer data and increase trust with email, messaging, verification and voice APIs.',
      defaultImage: 'SaveConnect.png',
      hoverImage: 'SaveConnect_Hover.png',
    },
    {
      id: 'customer-care',
      title: 'Find & Upskill',
      description: 'Support customers and increase customer satisfaction with timely pre- and post-sale service on any channel.',
      defaultImage: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400',
      hoverImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-16 flex-row">
                          
<h1 className="text-4xl font-bold mb-6 text-black text-center">How we help Architecture Firms</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {sections.map((section) => (
          <div key={section.id} className="text-center">
            <h3 className="text-xl font-semibold text-black mb-6">
              {section.title}
            </h3>            
            <div 
              className={`p-2 mb-2 relative overflow-hidden cursor-pointer transition-all duration-300 `}
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div className="bg-white  mx-auto w-[300px] h-[400px] overflow-hidden">
                <img 
                  src={hoveredSection === section.id ? section.hoverImage : section.defaultImage}
                  alt={section.title}
                  className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                />
              </div>
            </div>
            
            <p className="text-black text-sm leading-relaxed">
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileShowcaseComponent;
