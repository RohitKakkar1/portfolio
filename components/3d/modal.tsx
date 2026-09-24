// @ts-nocheck

import React from 'react';
import { useModalStore } from './stores/useModalStore';

const Modal = ({ modals }) => {
  const activeModal = useModalStore((state) => state.activeModal);
  const closeModal = useModalStore((state) => state.closeModal);

  if (!activeModal) return null; // No modal to display

  const modalContent = modals[activeModal];

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {modalContent ? modalContent : 'No content available'}
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
