"use client";
import React, { useEffect } from 'react';

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    // Automatically open the pop-up if the time is before 11 am
    if (currentHour < 11 && !isOpen) {
      // Delay for better UX
      setTimeout(() => {
        onClose(); // Trigger open (because the pop-up is closed initially)
      }, 500); // Delay pop-up appearance
    }
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-all ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{ transition: 'opacity 0.3s ease-in-out' }}
    >
      <div
        className={`bg-white p-8 rounded-lg shadow-lg max-w-sm w-full transform transition-transform ${
          isOpen ? 'scale-100' : 'scale-90'
        }`}
        style={{ transition: 'transform 0.3s ease-in-out' }}
      >
        <h2 className="text-xl font-semibold text-center text-gray-800">
          The shop is closed at the moment.
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          All orders will be processed after 11am. Thank you!
        </p>
        <div className="mt-4 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
