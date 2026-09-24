import React, { useState } from "react";
import "./MultiStepperModal.css";

const MultiStepperModal = ({ onClose }) => {
    const [step, setStep] = useState(1); // Default state to step 1
    const [selectedOption, setSelectedOption] = useState("");

    // Handle navigating to the next step
    const handleNextStep = (option) => {
        setSelectedOption(option);
        setStep(3); // Move to the third modal
    };

    return (
        <div className="multi-stepper-modal">
            {step === 1 && (
                <div>
                    <p>Hey, This is Rohit! I will help you to explore my portfolio.</p>
                    <div className="modal-actions">
                        <button
                            className="stepper-button"
                            onClick={() => setStep(2)}
                        >
                            Let us Explore
                        </button>
                    </div>
                </div>
            )}

            {step === 2 && (
                <div>
                    <p>I have three sides to my portfolio:</p>
                    <div className="options">
                        <button
                            className="option-button"
                            onClick={() => handleNextStep("Architecture")}
                        >
                            Architecture
                        </button>
                        <button
                            className="option-button"
                            onClick={() => handleNextStep("UX Design")}
                        >
                            UX Design
                        </button>
                        <button
                            className="option-button"
                            onClick={() => handleNextStep("3D Explorations")}
                        >
                            3D Explorations
                        </button>
                    </div>
                    <div className="modal-actions">
                        <button
                            className="stepper-button"
                            onClick={() => setStep(1)}
                        >
                            Back
                        </button>
                    </div>
                </div>
            )}

            {step === 3 && (
                <div>
                    <p>You selected: <strong>{selectedOption}</strong></p>
                    <p>Welcome to {selectedOption}!</p>
                    <div className="modal-actions">
                        <button
                            className="stepper-button"
                            onClick={() => setStep(2)}
                        >
                            Back
                        </button>
                        <button
                            className="stepper-button"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MultiStepperModal;
