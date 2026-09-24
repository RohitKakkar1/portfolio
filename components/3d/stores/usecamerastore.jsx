import create from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import * as THREE from 'three';
import { Howl } from 'howler';

const cameraMoveSound = new Howl({
    src: ['/sounds/movement.mp3'], // Path to your sound file
    volume: 0.6,
});

const useCameraStore = create(
    subscribeWithSelector((set) => ({
        cameraRef: null, // Reference to the camera
        cameraPositions: {
            aboutMe: { position: [20, 30, 20], lookAt: [0, 0, 0] },
            firstProject: { position: [17, 4, -5], lookAt: [13, 0, -12] },
            secondProject: { position: [-10, 4, 5], lookAt: [13, 0, -12] },
            thirdProject: { position: [17, 8, 14], lookAt: [5, 2, 1] },
            fourthProject: { position: [17, 2, 4], lookAt: [12, 1, 13] },
            fifthProject: { position: [-20, 2, 4], lookAt: [10, 2, -20] },
        },

        currentPosition: 'aboutMe', // Default position key

        setCameraRef: (camera) => set({ cameraRef: camera }),

        setCameraPosition: (positionKey) => set({ currentPosition: positionKey }),

        // Load the sound effect (replace with your sound file path)



        moveCamera: (key) => {
            set((state) => {
                const { cameraRef, cameraPositions } = state;

                if (!cameraRef || !cameraPositions[key]) {
                    console.error(`CameraRef or position key "${key}" not found`);
                    return {};
                }

                const { position, lookAt } = cameraPositions[key];

                const targetPosition = new THREE.Vector3(...position);
                const targetLookAt = new THREE.Vector3(...lookAt);

                const smoothedPosition = new THREE.Vector3().copy(cameraRef.position);
                const smoothedLookAt = new THREE.Vector3();
                cameraRef.getWorldDirection(smoothedLookAt);

                const lerpSpeed = 0.1;

                // Play the sound effect
                cameraMoveSound.play();

                const animate = () => {
                    smoothedPosition.lerp(targetPosition, lerpSpeed);
                    smoothedLookAt.lerp(targetLookAt, lerpSpeed);

                    cameraRef.position.copy(smoothedPosition);
                    cameraRef.lookAt(smoothedLookAt);

                    if (
                        smoothedPosition.distanceTo(targetPosition) < 0.01 &&
                        smoothedLookAt.distanceTo(targetLookAt) < 0.01
                    ) {
                        return; // Stop animation when close enough
                    }

                    requestAnimationFrame(animate);
                };

                animate(); // Start the animation
            });
        },
    }))
);

export default useCameraStore;
