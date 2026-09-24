import { Html } from '@react-three/drei';
import React, { useState } from 'react';
import './style.css';

export default function InteractivePopups() {
  const [showInitialPopup, setShowInitialPopup] = useState(true);
const [expandedPopup, setExpandedPopup] = useState<string | null>(null);  // state with correct type

  // Data for the main popups
  const mainPopupData = [
    {
      id: 'aboutMe',
      position: [-10, 0, 8],
      heading: 'About Me',
      description: 'Learn more about my background.',
      details: [
        'I am a developer passionate about technology and innovation.',
        'I love coding, reading, and exploring new places.',
      ],
    },
    {
      id: 'resume',
      position: [2, 2, -14],
      heading: 'Resume',
      description: 'View my career milestones.',
      details: [
        'Software Engineer at TechCorp - 3 years.',
        'Skills: JavaScript, React, Node.js, and more.',
      ],
    },
    {
      id: 'projects',
      position: [10, 0, 8],
      heading: 'Projects',
      description: 'Explore my projects.',
      details: [
        'Project A: An innovative solution to real-world problems.',
        'Project B: A creative app built with React and Three.js.',
      ],
    },
    {
      id: 'education',
      position: [-5, 2, -12],
      heading: 'Education',
      description: 'Discover my qualifications.',
      details: [
        'B.Sc. in Computer Science from XYZ University.',
        'Full-Stack Development Certification.',
      ],
    },
  ];

interface InitialPopupProps {
  onExplore: () => void; // Type the 'onExplore' function
}

const InitialPopup: React.FC<InitialPopupProps> = ({ onExplore }) => {
  return (
    <Html 
      style={{
        position: 'fixed',  // Fixes it to the screen
        top: '20px',        // Adjust the distance from the top
        left: '20px',       // Adjust the distance from the left
        zIndex: 100,        // Ensure it's on top of everything else
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Optional background color
        padding: '20px',    // Padding around the content
        borderRadius: '10px',
        color: 'white',     // White text color
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
      }}
    >
      <div className="popup-container">
        <h1>Welcome to My World</h1>
        <p>Explore the different aspects of my portfolio.</p>
        <button className="popup-button" onClick={onExplore}>
          Let us Explore
        </button>
      </div>
    </Html>
  );
};


interface PopupProps {
  position: [number, number, number]; // Ensure the position is a tuple with exactly 3 numbers
  heading: string;
  description: string;
  details: string[];
  isExpanded: boolean;
  onExpand: () => void;
}

const Popup: React.FC<PopupProps> = ({
  position,
  heading,
  description,
  details,
  isExpanded,
  onExpand
}) => {
  return (
    <Html position={position}>
      <div className={`popup-container ${isExpanded ? 'expanded' : ''}`} onClick={onExpand}>
        <h2>{heading}</h2>
        <p>{description}</p>
        {isExpanded && (
          <div className="details">
            {details.map((detail, index) => (
              <p key={index}>{detail}</p>
            ))}
          </div>
        )}
        <button className="popup-button">{isExpanded ? 'Close' : 'Explore'}</button>
      </div>
    </Html>
  );
};




  return (
    <>
      {showInitialPopup ? (
        <InitialPopup onExplore={() => setShowInitialPopup(false)} />
      ) : (
        <>
          {/* Main Popups */}
          {mainPopupData.map((popup) => (
            <Popup
            key={popup.id}
            position={popup.position.length === 3 ? popup.position as [number, number, number] : [0, 0, 0]} // Ensure it's a tuple
            heading={popup.heading}
            description={popup.description}
            details={popup.details}
            isExpanded={expandedPopup === popup.id}
            onExpand={() =>
              setExpandedPopup((prev) => (prev === popup.id ? null : popup.id))
            }
          />

          ))}
        </>
      )}
    </>
  );
}
