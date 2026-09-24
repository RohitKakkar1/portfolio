import React from 'react';
import { ArrowRight, ToggleRight } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const AllInOnePlaceComponent: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center pb-8 h-[600px]">  
        <div className="flex flex-row">
              {/* Left Content */}
            <div className="flex-1 max-w-2xl">
                <div className="w-full  text-black py-10 text-left h-[160px]">
                    <h1 className="text-4xl font-bold">
                      AI Powered Discovery to {' '}
                      <br />
                      <span className="text-orange-500">
                        <Typewriter
                           words={['get found by Clients' , 'Ask & Seach anything', 'Save & Connect on Demand']}
                          loop={true}
                          typeSpeed={50}
                          deleteSpeed={50}
                          delaySpeed={250}
                        />
                      </span>{' '}
                    </h1>
                  </div>
              <h1 className="text-2xl font-bold text-gray-900 leading-tight gap-8 pb-8">

                   Designed to make discovery easier for everyone building, designing, creating, or searching.
              </h1> 



              <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full flex items-center space-x-2 transition-colors duration-200">
                  <span className="text-sm font-medium">Get Started with Archinza</span>
                  <ArrowRight className="w-4 h-4" />
              </button>       
              </div>

              {/* Right Card */}
              <div className="flex-1 max-w-xl ml-16">
                <img src="ConnectingBusinesses.webp" alt="Description" className="w-full h-auto scale-110" />
              </div>

      </div>
      </div>
    </div>
  );
};

export default AllInOnePlaceComponent;