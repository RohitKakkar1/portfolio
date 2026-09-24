import React from 'react'
import { useModalStore } from '../../stores/useModalStore'

const Modal = () => {

  const { isModalOpen, modalTitle, modalContent, modalType, closeModal } = useModalStore();

  if (!isModalOpen) return;

  return (

    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white h-[60vh] w-[80vw] rounded-lg shadow-lg p-6 max-w-lg  relative">
          {/* Modal Header */}
          <div className="flex justify-between items-center border-b pb-3">
            <h1 className="text-xl font-semibold text-black-200">{modalTitle}</h1>
            <button
              onClick={closeModal}
              className="text-gray-500 hover:text-red-500 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Modal Body */}
          <div className="mt-4 text-black">
            {modalContent}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Modal