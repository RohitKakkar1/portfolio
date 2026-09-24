import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Mail } from 'lucide-react';

interface CarouselSlide {
  id: number;
  image: string;
  overlayElements: Array<{
    type: 'notification' | 'card' | 'badge';
    content: string;
    position: string;
    color: string;
  }>;
}

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: CarouselSlide[] = [
    {
      id: 1,
      image: 'Architect.png',
      overlayElements: [
        {
          type: 'notification',
          content: 'Doctor Medi - All cleared to run...',
          position: 'top-4 right-4',
          color: 'bg-yellow-100 border-yellow-300'
        },
        {
          type: 'notification',
          content: 'Registration - Qualifying times...',
          position: 'top-20 right-8',
          color: 'bg-green-100 border-green-300'
        },
        {
          type: 'badge',
          content: 'Back in stock!',
          position: 'bottom-4 right-4',
          color: 'bg-blue-100 border-blue-300'
        }
      ]
    },
    {
      id: 2,
      image: 'Carpenter.png',
      overlayElements: [
        {
          type: 'card',
          content: 'Project Status: In Progress',
          position: 'top-6 left-4',
          color: 'bg-purple-100 border-purple-300'
        },
        {
          type: 'notification',
          content: 'New material samples available',
          position: 'bottom-8 left-6',
          color: 'bg-orange-100 border-orange-300'
        }
      ]
    },
    {
      id: 3,
      image: 'Material Vendor.png',
      overlayElements: [
        {
          type: 'badge',
          content: 'Client Approved ✓',
          position: 'top-8 right-6',
          color: 'bg-green-100 border-green-300'
        },
        {
          type: 'notification',
          content: 'Vendor recommendation ready',
          position: 'bottom-6 right-8',
          color: 'bg-indigo-100 border-indigo-300'
        }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Built for{' '}
                <span className="text-blue-600">Architecture Firms:</span>
                <br />
                Showcase your work, get recommended to Clients, Discover materials, connect with vendors —{' '}
                <span className="text-orange-500">all in one place.</span>
              </h1>
            </div>

            <button className="group inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Get Started as an Architecture Firm
              <ArrowRight className="ml-3 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Right Carousel */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              {/* Main Image */}
              <div className="relative w-full h-full">
                <img
                  src={slides[currentSlide].image}
                  alt={`Slide ${currentSlide + 1}`}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                
                {/* Overlay Elements */}
                {slides[currentSlide].overlayElements.map((element, index) => (
                  <div
                    key={index}
                    className={`absolute ${element.position} animate-pulse`}
                  >
                    <div className={`${element.color} border-2 rounded-lg px-3 py-2 shadow-lg backdrop-blur-sm bg-opacity-90`}>
                      <p className="text-sm font-medium text-gray-800">
                        {element.content}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Floating Mail Icon */}
                <div className="absolute top-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg animate-bounce">
                  <Mail className="h-6 w-6" />
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="h-6 w-6 text-gray-700" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="h-6 w-6 text-gray-700" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;