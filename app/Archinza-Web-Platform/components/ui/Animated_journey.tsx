import React, { useState, useEffect } from 'react';
import { 
  Home,
  Hammer,
  GraduationCap,
  Users, 
  Sofa,
  Palette,
  Briefcase,
  Calendar,
  BookOpen,
  Building,
  TreePine,
  Wrench,
  Search,
  Package,
  MapPin,
  Store
} from 'lucide-react';

interface Feature {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  bgColor: string;
  position: { desktop: { x: number; y: number }, mobile: { x: number; y: number } };
  category: 'stakeholder' | 'product' | 'material' | 'opportunity';
}

const features: Feature[] = [
  // Left side (desktop) / Top (mobile) - Architects & Material Vendors
  { 
    id: 'architects', 
    name: 'Architects', 
    icon: Building, 
    color: '#3B82F6', 
    bgColor: 'bg-blue-500', 
    position: { 
      desktop: { x: 15, y: 30 }, 
      mobile: { x: 25, y: 15 } 
    }, 
    category: 'stakeholder' 
  },
  { 
    id: 'vendors', 
    name: 'Material Vendors', 
    icon: Store, 
    color: '#10B981', 
    bgColor: 'bg-emerald-500', 
    position: { 
      desktop: { x: 15, y: 70 }, 
      mobile: { x: 75, y: 15 } 
    }, 
    category: 'stakeholder' 
  },
  
  // Right side (desktop) / Bottom (mobile) - Homeowners, Students, Working Professionals
  { 
    id: 'homeowners', 
    name: 'Home Owners', 
    icon: Home, 
    color: '#EF4444', 
    bgColor: 'bg-red-500', 
    position: { 
      desktop: { x: 85, y: 25 }, 
      mobile: { x: 20, y: 100 } 
    }, 
    category: 'stakeholder' 
  },
  { 
    id: 'students', 
    name: 'Students', 
    icon: GraduationCap, 
    color: '#f65cdaff', 
    bgColor: 'bg-red-500', 
    position: { 
      desktop: { x: 85, y: 50 }, 
      mobile: { x: 50, y: 120 } 
    }, 
    category: 'stakeholder' 
  },
  { 
    id: 'professionals', 
    name: 'Working Professionals', 
    icon: Users, 
    color: '#7C3AED', 
    bgColor: 'bg-violet-500', 
    position: { 
      desktop: { x: 85, y: 75 }, 
      mobile: { x: 80, y: 100 } 
    }, 
    category: 'stakeholder' 
  },
  
  // Center area - Products, Materials, Opportunities
  { 
    id: 'tables', 
    name: 'Tables', 
    icon: Wrench, 
    color: '#F59E0B', 
    bgColor: 'bg-amber-500', 
    position: { 
      desktop: { x: 45, y: 20 }, 
      mobile: { x: 35, y: 40 } 
    }, 
    category: 'product' 
  },
  { 
    id: 'chairs', 
    name: 'Chairs', 
    icon: Sofa, 
    color: '#F59E0B', 
    bgColor: 'bg-amber-500', 
    position: { 
      desktop: { x: 55, y: 25 }, 
      mobile: { x: 65, y: 45 } 
    }, 
    category: 'product' 
  },
  { 
    id: 'furniture', 
    name: 'Furniture', 
    icon: Package, 
    color: '#F59E0B', 
    bgColor: 'bg-amber-500', 
    position: { 
      desktop: { x: 50, y: 35 }, 
      mobile: { x: 50, y: 35 } 
    }, 
    category: 'product' 
  },
  
  { 
    id: 'tiles', 
    name: 'Tiles', 
    icon: MapPin, 
    color: '#06B6D4', 
    bgColor: 'bg-cyan-500', 
    position: { 
      desktop: { x: 40, y: 50 }, 
      mobile: { x: 30, y: 55 } 
    }, 
    category: 'material' 
  },
  { 
    id: 'wood', 
    name: 'Wood', 
    icon: TreePine, 
    color: '#06B6D4', 
    bgColor: 'bg-cyan-500', 
    position: { 
      desktop: { x: 60, y: 55 }, 
      mobile: { x: 70, y: 60 } 
    }, 
    category: 'material' 
  },
  { 
    id: 'materials', 
    name: 'Materials', 
    icon: Palette, 
    color: '#06B6D4', 
    bgColor: 'bg-cyan-500', 
    position: { 
      desktop: { x: 50, y: 65 }, 
      mobile: { x: 50, y: 65 } 
    }, 
    category: 'material' 
  },
  
  { 
    id: 'jobs', 
    name: 'Jobs', 
    icon: Briefcase, 
    color: '#10B981', 
    bgColor: 'bg-emerald-500', 
    position: { 
      desktop: { x: 45, y: 80 }, 
      mobile: { x: 25, y: 70 } 
    }, 
    category: 'opportunity' 
  },
  { 
    id: 'events', 
    name: 'Events', 
    icon: Calendar, 
    color: '#8B5CF6', 
    bgColor: 'bg-emerald-500', 
    position: { 
      desktop: { x: 55, y: 85 }, 
      mobile: { x: 55, y: 75 } 
    }, 
    category: 'opportunity' 
  },
  { 
    id: 'courses', 
    name: 'Courses', 
    icon: BookOpen, 
    color: '#EF4444', 
    bgColor: 'bg-red-500', 
    position: { 
      desktop: { x: 35, y: 75 }, 
      mobile: { x: 75, y: 70 } 
    }, 
    category: 'opportunity' 
  }
];

// 7 realistic user journey scenarios
const userJourneys = [
  {
    name: "Architect sourcing materials",
    sequence: ['architects', 'materials', 'vendors'],
    description: "Architects exploring material options and connecting with suppliers"
  },
  {
    name: "Student seeking opportunities", 
    sequence: ['students', 'jobs', 'courses'],
    description: "Students looking for career opportunities and skill development"
  },
  {
    name: "Vendor reaching architects",
    sequence: ['vendors', 'architects', 'materials'],
    description: "Material vendors connecting with architects to showcase products"
  },
  {
    name: "Homeowner furniture shopping",
    sequence: ['homeowners', 'furniture', 'vendors'],
    description: "Homeowners browsing furniture and connecting with suppliers"
  },
  {
    name: "Professional development",
    sequence: ['professionals', 'events', 'courses'],
    description: "Working professionals attending events and taking courses"
  },
  {
    name: "Architect product sourcing",
    sequence: ['architects', 'tables', 'vendors'],
    description: "Architects finding specific products through vendor networks"
  },
  {
    name: "Student networking",
    sequence: ['students', 'events', 'professionals'],
    description: "Students networking at events with working professionals"
  }
];

interface ConnectionPath {
  from: { x: number; y: number };
  to: { x: number; y: number };
  color: string;
  delay: number;
}

export default function AnimatedFeatureShowcase() {
  const [activeFeatures, setActiveFeatures] = useState<string[]>([]);
  const [journeyIndex, setJourneyIndex] = useState(0);
  const [connections, setConnections] = useState<ConnectionPath[]>([]);
  const [currentJourney, setCurrentJourney] = useState(userJourneys[0]);
  const [isMobile, setIsMobile] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const journey = userJourneys[journeyIndex];
      setCurrentJourney(journey);
      setActiveFeatures(journey.sequence);
      
      // Generate dynamic curved connections
      const newConnections: ConnectionPath[] = [];
      for (let i = 0; i < journey.sequence.length - 1; i++) {
        const fromFeature = features.find(f => f.id === journey.sequence[i]);
        const toFeature = features.find(f => f.id === journey.sequence[i + 1]);
        
        if (fromFeature && toFeature) {
          const fromPos = isMobile ? fromFeature.position.mobile : fromFeature.position.desktop;
          const toPos = isMobile ? toFeature.position.mobile : toFeature.position.desktop;
          
          newConnections.push({
            from: fromPos,
            to: toPos,
            color: fromFeature.color,
            delay: i * 0.8
          });
        }
      }
      setConnections(newConnections);
      
      setJourneyIndex((prev) => (prev + 1) % userJourneys.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [journeyIndex, isMobile, isAutoPlaying]);

  const handleStakeholderClick = (stakeholderId: string) => {
    // Find journeys that start with this stakeholder
    const relevantJourneys = userJourneys.filter(journey => 
      journey.sequence[0] === stakeholderId
    );
    
    if (relevantJourneys.length > 0) {
      const journey = relevantJourneys[0];
      setCurrentJourney(journey);
      setActiveFeatures(journey.sequence);
      
      // Generate connections for this journey
      const newConnections: ConnectionPath[] = [];
      for (let i = 0; i < journey.sequence.length - 1; i++) {
        const fromFeature = features.find(f => f.id === journey.sequence[i]);
        const toFeature = features.find(f => f.id === journey.sequence[i + 1]);
        
        if (fromFeature && toFeature) {
          const fromPos = isMobile ? fromFeature.position.mobile : fromFeature.position.desktop;
          const toPos = isMobile ? toFeature.position.mobile : toFeature.position.desktop;
          
          newConnections.push({
            from: fromPos,
            to: toPos,
            color: fromFeature.color,
            delay: i * 0.8
          });
        }
      }
      setConnections(newConnections);
    }
  };

  const getDynamicPath = (from: { x: number; y: number }, to: { x: number; y: number }, index: number) => {
    const startX = (from.x / 100) * 600;
    const startY = (from.y / 100) * 400;
    const endX = (to.x / 100) * 600;
    const endY = (to.y / 100) * 400;
    
    // Create smooth, gentle curves
    const midX = (startX + endX) / 2;
    const midY = (startY + endY) / 2;
    
    // Gentle curve offset for smooth paths
    const curveOffset = 30;
    const controlX1 = midX + (index % 2 === 0 ? curveOffset : -curveOffset);
    const controlY1 = midY - 15;
    const controlX2 = midX + (index % 2 === 0 ? -curveOffset : curveOffset);
    const controlY2 = midY + 15;
    
    return `M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`;
  };

  return (
    <div className="relative w-full h-[100vh] bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0)',
            backgroundSize: '60px 60px'
          }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Current Journey Indicator */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-slate-200 shadow-sm max-w-md">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-700 text-center">
                {currentJourney.description}
              </span>
            </div>
          </div>
        </div>
        
        {/* Animation Area */}
        <div className="relative">
          <div className="relative w-full h-[500px] lg:h-[600px]">
            {/* SVG for Dynamic Connections */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none" 
              viewBox="0 0 600 400"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {connections.map((_, index) => (
                  <linearGradient key={`gradient-${index}`} id={`connectionGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" />
                    <stop offset="50%" stopColor="rgba(59, 130, 246, 0.8)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
                  </linearGradient>
                ))}
              </defs>
              
              {connections.map((connection, index) => (
                <g key={`connection-${index}`}>
                  {/* Smooth connection path */}
                  <path
                    d={getDynamicPath(connection.from, connection.to, index)}
                    stroke={connection.color}
                    strokeWidth="2"
                    fill="none"
                    strokeOpacity="0.6"
                    strokeLinecap="round"
                    style={{
                      animationDelay: `${connection.delay}s`
                    }}
                  />
                  
                  {/* Single animated flow particle */}
                  <circle
                    r="4"
                    fill={connection.color}
                    opacity="0.9"
                    className="drop-shadow-sm"
                  >
                    <animateMotion
                      dur="3s"
                      repeatCount="indefinite"
                      path={getDynamicPath(connection.from, connection.to, index)}
                      begin={`${connection.delay}s`}
                    />
                  </circle>
                </g>
              ))}
            </svg>
            
            {/* Feature Grid */}
            <div className="relative w-full h-full">
              {features.map((feature) => {
                const isActive = activeFeatures.includes(feature.id);
                const isStakeholder = feature.category === 'stakeholder';
                const IconComponent = feature.icon;
                const position = isMobile ? feature.position.mobile : feature.position.desktop;
                
                return (
                  <div
                    key={feature.id}
                    className={`absolute transition-all duration-1000 ease-out transform ${
                      isStakeholder ? 'cursor-pointer' : ''
                    }`}
                    style={{
                      left: `${position.x}%`,
                      top: `${position.y}%`,
                      transform: `translate(-50%, -50%) ${isActive ? 'scale(1.1)' : 'scale(1)'}`,
                      zIndex: isActive ? 30 : 10
                    }}
                    onClick={isStakeholder ? () => handleStakeholderClick(feature.id) : undefined}
                  >
                    {isStakeholder ? (
                      // Always visible stakeholder cards with transparency
                      <div className={`${feature.bgColor} text-white p-4 rounded-2xl shadow-lg min-w-[140px] border-2 border-white/20 transition-all duration-500 ${
                        isActive ? 'opacity-100 scale-110 shadow-2xl' : 'opacity-60 hover:opacity-80 hover:scale-105'
                      }`}>
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-white bg-opacity-25 rounded-xl backdrop-blur-sm">
                            <IconComponent size={24} />
                          </div>
                          <span className="font-semibold text-sm whitespace-nowrap">
                            {feature.name}
                          </span>
                        </div>
                        
                        {/* Subtle glow effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-transparent pointer-events-none"></div>
                      </div>
                    ) : isActive ? (
                      // Active Feature Card with enhanced styling
                      <div className={`${feature.bgColor} text-white p-2 rounded-2xl shadow-2xl min-w-[140px] animate-fade-in border-2 border-white/20`}>
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-white bg-opacity-25 rounded-xl backdrop-blur-sm">
                            <IconComponent size={24} />
                          </div>
                          <span className="font-semibold text-sm whitespace-nowrap">
                            {feature.name}
                          </span>
                        </div>
                        
                        {/* Subtle glow effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-transparent pointer-events-none"></div>
                      </div>
                    ) : (
                      // Inactive Feature Icon with category-based styling
                      <div className={`w-16 h-16 bg-white border-2 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 group cursor-pointer
                        ${feature.category === 'stakeholder' ? 'border-blue-200 hover:border-blue-300' : 
                          feature.category === 'product' ? 'border-amber-200 hover:border-amber-300' :
                          feature.category === 'material' ? 'border-cyan-200 hover:border-cyan-300' :
                          'border-emerald-200 hover:border-emerald-300'}`}
                      >
                        <IconComponent 
                          size={24} 
                          className={`transition-colors duration-300 group-hover:scale-110
                            ${feature.category === 'stakeholder' ? 'text-blue-400 group-hover:text-blue-500' : 
                              feature.category === 'product' ? 'text-amber-400 group-hover:text-amber-500' :
                              feature.category === 'material' ? 'text-cyan-400 group-hover:text-cyan-500' :
                              'text-emerald-400 group-hover:text-emerald-500'}`}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}