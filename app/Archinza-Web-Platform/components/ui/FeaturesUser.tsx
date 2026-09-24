import React, { useState } from 'react';

interface TabContent {
  id: string;
  title: string;
  heading: string;
  items: string[];
    image: string; // URL or local image path
}

const FeaturesUser: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ask');

  const tabs = [
    { id: 'ask', label: 'Personal User' },
    { id: 'search', label: 'Business Bot' },
    { id: 'reach', label: 'Archinza Gallery' },
    { id: 'connect', label: 'Connect' }
  ];


  const tabContent: Record<string, TabContent> = {
    ask: {
      id: 'ask',
      title: 'Easy Onboarding',
      heading: 'Create your Business Page',
      items: [
        'WHether you are an architect or material vendor',
        'Get Started with our Easy Onboarding',
        'Ask any of your things Ask any of your things'
      ],
      image:'PersonalSearch.webp'
    },
    search: {
      id: 'search',
      title: 'Business Bot',
      heading: 'Get your business bot',
      items: [
        'Your bot talks to your customers when you are sleeping ',
        'Find relevant architectural solutions',
        'Access curated content and materials'
      ],
            image:'Amazon_rufus.png'
    },
    reach: {
      id: 'reach',
      title: 'Archinza Gallery',
      heading: 'Reach out to experts',
      items: [
        'Connect with industry professionals',
        'Get expert advice on your projects',
        'Access mentorship opportunities'
      ],
            image:'Archinza_Gallery.png',
    },
    connect: {
      id: 'connect',
      title: 'Connect',
      heading: 'Connect with peers',
      items: [
        'Join our community of architects',
        'Collaborate on projects',
        'Share knowledge and experiences'
      ],
            image:'BusinessDBIn.png'
    },
    recommend:{
      id: 'connect',
      title: 'Connect',
      heading: 'Connect with peers',
      items: [
        'Join our community of architects',
        'Collaborate on projects',
        'Share knowledge and experiences'
      ],
            image:'Recommendations.png'
    }
  };

  const currentContent = tabContent[activeTab];

  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Title */}

      {/* Container with light background */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 min-h-[500px]">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-black rounded-full p-1 flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-white text-black shadow-lg'
                    : 'text-white hover:text-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex items-start justify-between">
          {/* Left Content */}
          <div className="flex-1 max-w-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {currentContent.heading}
            </h2>
            <div className="space-y-4">
              {currentContent.items.map((item, index) => (
                <p key={index} className="text-gray-700 leading-relaxed">
                  {item}
                </p>
              ))}
            </div>
          </div>

        {/* Right Mockup */}
          <div className="flex-1 max-w-md ml-8">
            <div className="bg-white rounded-2xl shadow-xl  hover:rotate-0 transition-transform duration-300">
              {/* Mock interface */}
              <div>
                    {currentContent.image && (
                        <img
                          src={currentContent.image}
                          alt={currentContent.heading}
                          className="w-full max-w-md rounded-lg border-none "
                        />
                      )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeaturesUser;