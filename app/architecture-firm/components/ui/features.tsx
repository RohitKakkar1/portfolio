import React from 'react';
import { CheckCircle, Star, Users, Calendar, MapPin, Phone, Mail, Globe } from 'lucide-react';

const FeaturesShowcaseComponent: React.FC = () => {
  const features_web = [
    "Archinza AI Web Platform helps architects discover the right materials, connect with trusted vendors, and showcase their portfolio — all through an AI-powered experience that simplifies decisions and saves time."
  ];
  const features_bot = [
    "Ask anything WhatsApp Bot helps architects discover materials, get instant answers, and connect with vendors — all through a simple WhatsApp chat. Powered by AI, it’s fast, reliable, and always available."
  ];

  return (
    <div className=" text-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6 text-black">Products we offer</h1>
          <p className="text-black max-w-4xl mx-auto text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>

        {/* Feature Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Section 1 */}
          <div className="flex flex-col items-center text-center space-y-6  bg-white p-6 rounded-xl">
            <img src="Business_Listing.png" alt="Archinza Portal" className="h-[300px] w-auto object-contain mx-auto"
 />
            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">Archinza AI Web Platform</h2>
              <ul className="space-y-1 text-left">
                {features_web.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-black">{features_web}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full flex items-center space-x-2 transition-colors duration-200">
                <span className="text-sm font-medium">Learn More</span>
              </button>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col items-center text-center space-y-6  bg-white p-6 rounded-xl">
            <img src="Any_anything_whatsapp_bot.png" alt="AMA WhatsApp Bot" className="h-[300px] w-auto object-contain mx-auto"
 />
            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">Ask anything WhatsApp Bot</h2>
              <ul className="space-y-1 text-left">
                {features_bot.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-black">{features_bot}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full flex items-center space-x-2 transition-colors duration-200">
                <span className="text-sm font-medium">Learn More</span>
              </button>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default FeaturesShowcaseComponent;