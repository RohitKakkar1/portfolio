// SecondScreen.js
import React from "react";
import Image from 'next/image';

interface SecondScreenProps {
  setSelectedWorld: React.Dispatch<React.SetStateAction<string>>; // Assuming selectedWorld is a string
}



const SecondScreen: React.FC<SecondScreenProps> = ({ setSelectedWorld }) => {
  return (
            <div className="absolute inset-0 h-[100vh] w-[100%] flex flex-col items-center justify-center z-20 bg-black text-white">
            {/* Blurred Background Image */}
                      <Image
                src="/background3d.png" // Ensure the path is correct for your static assets
                alt="Background"
                layout="fill"  // Fills the parent container and adjusts based on its size
                className="absolute inset-0 object-cover filter blur-sm opacity-50"  // Retains your original styling for full cover and effects
              />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-8">Choose the work you want to see</h2>
              <div className="flex gap-8">
                <div
                  className="w-[250px] h-[350px] bg-gray-800 p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => setSelectedWorld("Architecture")}
                >
                  <Image
  src="/background3d.png" // Ensure the path is correct for your static assets
  alt="Architecture"
  layout="responsive"  // Adjusts the image's size based on its container's aspect ratio
  width={1000}  // You can specify a width, which will automatically adjust the height according to the aspect ratio
  height={700}  // You can specify a height to control the aspect ratio
  className="object-cover rounded"  // Retains your original styling
/>

                  <h3 className="text-xl font-semibold mt-4">Architecture</h3>
                  <p>Step into a world where design meets functionality. Explore innovative spaces and structures that redefine how we live and interact.</p>
                </div>
                <div
                  className="w-[250px] h-[350px] bg-gray-800 p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => setSelectedWorld("UX Design")}
                >
                    <Image
                        src="/ux.png" // Ensure the path is correct for your static assets
                        alt="UX Design"
                        layout="responsive"  // Adjusts the image's size based on the container's aspect ratio
                        width={1000}  // Set the width to control the image aspect ratio
                        height={700}  // Set the height to control the image aspect ratio
                        className="object-cover rounded"  // Keeps your original styling
                      />
                      <h3 className="text-xl font-semibold mt-4">UX Design</h3>
                      <p>Discover digital experiences crafted to solve real-world problems. See how user-centered design enhances everyday interactions.</p>
                </div>
                <div
                  className="w-[250px] h-[350px] bg-gray-800 p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => setSelectedWorld("3D Explorations")}
                >
                  <Image
                      src="/background3d.png"  // Ensure the path is correct for your static assets
                      alt="3D Explorations"
                      layout="responsive"  // Adjusts the image's size based on the container's aspect ratio
                      width={1000}  // Set the width to control the image aspect ratio
                      height={700}  // Set the height to control the image aspect ratio
                      className="object-cover rounded"  // Keeps your original styling
                    />
                  <h3 className="text-xl font-semibold mt-4">3D Explorations</h3>
                  <p>Immerse yourself in creative experiments, visual illusions, and dynamic 3D worlds pushing the boundaries of design and technology.</p>
                </div>
              </div>
            </div>
          </div>  

);
};

export default SecondScreen;
