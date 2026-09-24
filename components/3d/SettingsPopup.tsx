import { FiSettings } from "react-icons/fi";
import React, { useState } from "react";

export default function SettingsPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative flex justify-center items-center">
        {/* Settings Button */}
        <button
          onClick={togglePopup}
          className="px-3 py-3 bg-white/20 text-white font-semibold text-lg rounded-full shadow-lg transition-colors duration-300 hover:bg-white/50 hover:text-white hover:shadow-xl focus:outline-none"
          title="Settings"
        >
          <FiSettings size={20} />
        </button>

        {/* Popup Modal */}
        {isOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-black/50">
            <div className="bg-white p-6 rounded-lg shadow-xl w-96">
              <h2 className="text-xl font-semibold mb-4">Settings</h2>
              <div className="space-y-4">
                {/* Settings Content */}
                <div>
                  <label className="block text-sm">Volume</label>
                  <input
                    type="range"
                    className="w-full h-2 bg-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm">Brightness</label>
                  <input
                    type="range"
                    className="w-full h-2 bg-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm">Enable Notifications</label>
                  <input type="checkbox" className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-6 flex justify-between">
                <button
                  onClick={togglePopup}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Close
                </button>
                <button
                  onClick={() => alert("Settings Saved")}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
