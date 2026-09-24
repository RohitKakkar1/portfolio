// @ts-nocheck

import React, { useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa"; // Emergency icon
import Card from '../ProjectCards/ProjectCards'



export default function EmergencyPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

const data = {
  title: "JioAlerts",
  description:
    "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
  src: "tree.jpg",
  url: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
  stat1: "Collapse Rate",
  stat2: "Change in Heart",
  color: "#977F6D",
};

<Card {...data} i={0} />

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
          <>
         <div className="fixed inset-0 flex flex-row justify-center items-center bg-black/50">
        <div className="bg-white p-6 flex flex-row gap-8 rounded-lg shadow-xl w-fit">
            <div>
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
            <div className="w-[2px] bg-black/10 h-auto"></div>

            {/* JioAlerts Card inside the modal */}
            <div className="w-[20vw] rounded-lg shadow-md" style={{color: "black" }}>
              <img
                src="JioZone1.png"
                alt="JioAlerts"
                className="w-full h-64 object-cover rounded-lg"
              />
              <h3 className="text-lg mt-3">JioAlerts</h3>
              <p className="text-sm text-black-200 mt-2">
                This is a story on the border between reality and imaginary. 
              </p>
              <a
                href="https://www.figma.com/proto/znJgggEjLUSo1pgnUNsH5p/P?page-id=152%3A190&node-id=642-8755&viewport=-9176%2C1778%2C0.39&t=NQbqEB18Nz5wcOsH-1&scaling=contain&content-scaling=fixed&starting-point-node-id=560%3A19896"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-4 py-2 bg-white text-[#977F6D] rounded-lg text-sm font-semibold hover:bg-gray-200"
              >
                Read More
              </a>
            </div>
        </div>
      </div>

          </>
        )}
      </div>
      
    </>
  );
}
