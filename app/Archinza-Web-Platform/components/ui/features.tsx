import React, { useState } from 'react';

interface TabContent {
  id: string;
  title: string;
  heading: string;
  items: string[];
    image: string; // URL or local image path
}

const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ask');

  const tabs = [
    { id: 'ask', label: 'Brand Page' },
    { id: 'search', label: 'Business Bot' },
    { id: 'reach', label: 'Archinza Gallery' },
    { id: 'connect', label: 'Business Insights' },
    {id: 'recommend', label: 'AI Matchmaking'}
  ];

  const tabContent: Record<string, TabContent> = {
    ask: {
      id: 'ask',
      title: 'Easy Onboarding',
      heading: 'Your intelligent business page, built in minutes',
      items: [
        'We gather your details from across the web and turn them into a smart, structured, and searchable business page through a simple onboarding.',
        '• Architecture Firms',
        '• Interior Design Firms',
        '• Material Vendors',
         '• Product Vendors',
      ],
      image:'BusinessDBRen.png'
    },
    search: {
      id: 'search',
      title: 'Business Bot',
      heading: 'Automate Conversations with Archinza AI',
      items: [
        'Archinza’s Business Bot brings AI support to your business, automating customer conversations and routing queries intelligently.',
        '• Your clients can chat directly with LTDf AI',
        '• Answers come from your past work & process',
        '• Be available 24/7 — even when you’re not',
         '• Product Vendors',
      ],
            image:'Amazon_rufus.png'
    },
    reach: {
      id: 'reach',
      title: 'Archinza Gallery',
      heading: 'Your Best Work, Showcased Automatically',
      items: [
        'A curated space that collects and showcases your best work, making your offerings easy to discover. Highlight your design vision, craftsmanship, and product applications with Archinza Gallery.'
      ],
            image:'Archinza_Gallery.png',
    },
    connect: {
      id: 'connect',
      title: 'Connect',
      heading: 'Know What’s Getting You Noticed',
      items: [
        'Get real-time insights on reach, discovery, and interest. See what’s drawing attention, where you’re being viewed, and how people are finding you so you can stay one step ahead.'
      ],
            image:'BusinessDBIn.png'
    },
    recommend:{
      id: 'connect',
      title: 'Connect',
      heading: 'Designed to Be Found',
      items: [
        'Be discoverable to people actively searching for what you offer. Archinza’s AI Matchmaking pairs your business with relevant searches and interests thus expanding your visibility.'
      ],
            image:'Recommendations.png'
    }
  };

  const currentContent = tabContent[activeTab];

  return (
    <div className="max-w-6xl mx-auto p-4">
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

export default Features;