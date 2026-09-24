import React, { useState } from 'react';

interface TabContent {
  id: string;
  title: string;
  heading: string;
  items: string[];
}

const ArchitectHelpComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ask');

  const tabs = [
    { id: 'ask', label: 'Ask' },
    { id: 'search', label: 'Search' },
    { id: 'reach', label: 'Reach' },
    { id: 'connect', label: 'Connect' }
  ];

  const tabContent: Record<string, TabContent> = {
    ask: {
      id: 'ask',
      title: 'Ask',
      heading: 'Ask any of your things',
      items: [
        'Ask any of your things Ask any of your things',
        'Ask any of your thingsAsk any of your things',
        'Ask any of your things Ask any of your things'
      ]
    },
    search: {
      id: 'search',
      title: 'Search',
      heading: 'Search for resources',
      items: [
        'Search through our extensive database',
        'Find relevant architectural solutions',
        'Access curated content and materials'
      ]
    },
    reach: {
      id: 'reach',
      title: 'Reach',
      heading: 'Reach out to experts',
      items: [
        'Connect with industry professionals',
        'Get expert advice on your projects',
        'Access mentorship opportunities'
      ]
    },
    connect: {
      id: 'connect',
      title: 'Connect',
      heading: 'Connect with peers',
      items: [
        'Join our community of architects',
        'Collaborate on projects',
        'Share knowledge and experiences'
      ]
    }
  };

  const currentContent = tabContent[activeTab];

  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
        How we help Architecture Firms
      </h1>

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
            <div className="bg-white rounded-2xl shadow-xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              {/* Mock interface */}
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="text-sm font-medium text-gray-600">Purchase order</div>
                  <div className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full">
                    Professional
                  </div>
                </div>

                {/* Form fields mockup */}
                <div className="space-y-3">
                  <div className="flex space-x-2">
                    <div className="h-8 bg-gray-200 rounded flex-1"></div>
                    <div className="h-8 bg-blue-500 rounded px-4 flex items-center">
                      <div className="w-16 h-2 bg-white rounded"></div>
                    </div>
                    <div className="h-8 bg-gray-200 rounded w-20"></div>
                  </div>
                  
                  <div className="h-1 bg-blue-400 rounded w-3/4"></div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Purchase order</div>
                    <div className="text-xs text-gray-500 mb-3">Configure who can send this proposal</div>
                    <div className="flex justify-between items-center mb-3">
                      <div className="text-xs text-gray-600">Design</div>
                      <div className="text-xs text-gray-400">Change</div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="h-6 bg-gray-200 rounded"></div>
                    <div className="h-6 bg-gray-200 rounded"></div>
                    <div className="h-6 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectHelpComponent;