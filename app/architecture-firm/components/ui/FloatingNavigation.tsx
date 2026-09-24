import React, { useState } from 'react';
import { ChevronDown, ArrowRight, User } from 'lucide-react';

const FloatingNavigation: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const solutionsByUseCase = [
    {
      title: "Project Discovery & Collaboration",
      description: "Visual matchmaking, design moodboards, team curation.",
      badge: "P1"
    },
    {
      title: "Talent & Firm Discovery",
      description: "Search by project type, location, and design sensibility.",
      badge: "P1"
    },
    {
      title: "Design Assistance",
      description: "AI-powered AMA bot to support ideation and technical Q&A.",
      badge: "P1"
    },
    {
      title: "Networking & Events",
      description: "Event listings, job boards, and curated community features.",
      badge: "P1"
    }
  ];

  const solutionsByPlatform = [
    {
      title: "Visual-led Search & Matchmaking",
      description: "Helps clients and partners find each other based on style and need.",
      badge: "P1"
    },
    {
      title: "AI Design Assistant (AMA bot)",
      description: "Supports professionals with inspiration, answers, and guidance.",
      badge: "P1"
    },
    {
      title: "Moodboards & Portfolios",
      description: "For showcasing project ideas and attracting the right audience.",
      badge: "P1"
    },
    {
      title: "Event & Job Listings",
      description: "For those looking to grow, hire, or get hired.",
      badge: "P1"
    }
  ];

  const solutionsByIndustry = [
    {
      title: "Architecture",
      description: "Showcase philosophy and aesthetics, get design feedback.",
      badge: "P1"
    },
    {
      title: "Engineering",
      description: "Collaborate with firms and designers, promote technical offerings.",
      badge: "P1"
    },
    {
      title: "Construction",
      description: "Match with architects/vendors, access talent, and streamline hiring.",
      badge: "P1"
    }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-white text-xl font-bold tracking-wider">
            ARCHINZA
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div 
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <button className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors duration-200">
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isHovered ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isHovered && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[900px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                  <div className="p-8">
                    
                    <div className="grid grid-cols-3 gap-8">
                      {/* By Use Case */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-6">By Use Case</h3>
                        <div className="space-y-4">
                          {solutionsByUseCase.map((solution, index) => (
                            <div key={index} className="group cursor-pointer">
                              <div className="flex items-start justify-between mb-2">
                                <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                                  {solution.title}
                                </h4>
                                
                              </div>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                {solution.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* By Platform Features */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-6">By Platform Features</h3>
                        <div className="space-y-4">
                          {solutionsByPlatform.map((solution, index) => (
                            <div key={index} className="group cursor-pointer">
                              <div className="flex items-start justify-between mb-2">
                                <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                                  {solution.title}
                                </h4>
                                
                              </div>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                {solution.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* By Industry Segment */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-6">By Industry Segment (AEC)</h3>
                        <div className="space-y-4">
                          {solutionsByIndustry.map((solution, index) => (
                            <div key={index} className="group cursor-pointer">
                              <div className="flex items-start justify-between mb-2">
                                <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                                  {solution.title}
                                </h4>
                                
                              </div>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                {solution.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
              KNOW
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
              CONTACT
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
              BLOGS
            </a>
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full flex items-center space-x-2 transition-colors duration-200">
              <span className="text-sm font-medium">Get Early Access</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingNavigation;