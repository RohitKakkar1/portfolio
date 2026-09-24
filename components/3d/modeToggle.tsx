// components/ModeToggleButton.js
// @ts-nocheck

import React from 'react';
import useModeStore from './stores/usemodestore';

const ModeToggleButton = () => {
  const toggleMode = useModeStore((state) => state.toggleMode);
  const currentMode = useModeStore((state) => state.mode);

  return (
  <button
        onClick={() => setOrbitEnabled(!orbitEnabled)}
        style={{ position: "absolute", zIndex: 2 }}
      >
        (Toggle between cameras)
      </button>
  );
};

export default ModeToggleButton;
