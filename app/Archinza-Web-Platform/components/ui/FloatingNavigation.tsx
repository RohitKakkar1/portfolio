import React, { useState } from 'react';
import { ChevronDown, ArrowRight, User } from 'lucide-react';

const FloatingNavigation: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <nav className="bg-[#1a1a1a] rounded-lg px-24 py-4 flex items-center justify-between w-full shadow-lg">
  {/* Logo */}
  <div className="text-white text-2xl font-semibold tracking-wider">
    <span className="font-bold">ARCHINZA</span>
  </div>

  {/* Center Nav Links */}
  <div className="hidden md:flex gap-8 text-white text-sm font-semibold tracking-wide">
    <a href="#know" className="hover:text-gray-300 transition">KNOW</a>
    <a href="#contact" className="hover:text-gray-300 transition">CONTACT</a>
    <a href="#blogs" className="hover:text-gray-300 transition">BLOGS</a>
  </div>

  {/* Right Section: Icon + CTA */}
  <div className="flex items-center gap-4">
    {/* Profile Icon */}
    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
      <svg
        className="w-4 h-4 text-black"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 10a4 4 0 100-8 4 4 0 000 8zm1.5 1h-3A4.5 4.5 0 004 15.5v.5a1 1 0 001 1h10a1 1 0 001-1v-.5a4.5 4.5 0 00-4.5-4.5z"
        />
      </svg>
    </div>

    {/* Get Early Access Button */}
    <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2 rounded-full flex items-center gap-2 transition">
      Get Early Access
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</nav>

  );
};

export default FloatingNavigation;