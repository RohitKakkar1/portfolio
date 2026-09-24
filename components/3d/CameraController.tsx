import React, { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import useCameraStore from './stores/usecamerastore';

const CameraController = () => {
  const { camera } = useThree(); // Access the Three.js camera
  const {
    cameraPositions,
    currentPosition,
    setCameraRef,
    setCameraPosition,
    moveCamera,
  } = useCameraStore();

  // Set the camera reference when the component mounts
  useEffect(() => {
    setCameraRef(camera);
  }, [camera, setCameraRef]);

  // Move the camera when the `currentPosition` changes
  useEffect(() => {
    moveCamera(currentPosition);
  }, [currentPosition, moveCamera]);

  return (
    <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 1000 }}>
      {/* Buttons for camera position transitions */}
      <button onClick={() => setCameraPosition('aboutMe')}>About Me</button>
      <button onClick={() => setCameraPosition('firstProject')}>First Project</button>
      <button onClick={() => setCameraPosition('secondProject')}>Second Project</button>
      <button onClick={() => setCameraPosition('thirdProject')}>Third Project</button>
      <button onClick={() => setCameraPosition('fourthProject')}>Fourth Project</button>
      <button onClick={() => setCameraPosition('fifthProject')}>Fifth Project</button>
      <button onClick={() => setCameraPosition('thirdPerson')}>Third Person</button>
    </div>
  );
};

export default CameraController;
