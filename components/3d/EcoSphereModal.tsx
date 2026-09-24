// @ts-nocheck

import React, { useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa"; // Emergency icon

export default function EcoSphereModal() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative flex justify-center items-center">
        {/* Emergency Button (Red Circle with Icon) */}
        <button
          onClick={togglePopup}
          className="px-3 py-3 bg-red-600 text-white rounded-full shadow-lg flex justify-center items-center text-3xl transition-transform duration-300 hover:scale-110 hover:bg-red-700 focus:outline-none"
          title="Emergency Communication"
        >
          <FaExclamationTriangle size={20} />
        </button>

        {/* Popup Modal */}
        {isOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-black/50">
            <div className="bg-white p-6 rounded-lg shadow-xl w-96">
              <h2 className="text-xl font-semibold mb-4 text-red-600">
                Emergency Communication
              </h2>
              <div className="space-y-4">
                {/* Emergency Communication Content */}
                <div>
                  <label className="block text-sm">Contact Number</label>
                  <input
                    type="text"
                    placeholder="Enter emergency contact"
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm">Message</label>
                  <textarea
                    placeholder="Enter your emergency message"
                    className="w-full p-2 border rounded-lg"
                    rows="3"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm">Send Location</label>
                  <input type="checkbox" className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-6 flex justify-between">
                <button
                  onClick={togglePopup}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={() => alert("Emergency Message Sent")}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Send Alert
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
