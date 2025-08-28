"use client";

import { useState } from "react";
import { FaGem } from "react-icons/fa";
import { TbBrandGoogleBigQuery } from "react-icons/tb";

const QueryFormButton = ({ onClick, isFormOpen }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-20 right-5 z-50">
      {/* Tooltip */}
      {showTooltip && !isFormOpen && (
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap opacity-90">
          Click to open Query Form
          <div className="absolute top-full right-4 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      )}
      
      <button
        onClick={onClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-purple-300 ${
          isFormOpen ? 'rotate-180 scale-110' : ''
        }`}
        aria-label={isFormOpen ? "Close Query Form" : "Open Query Form"}
      >
        <TbBrandGoogleBigQuery 
          size={24} 
          className={`transition-transform duration-300 ${isFormOpen ? 'rotate-180' : ''}`} 
        />
      </button>
    </div>
  );
};

export default QueryFormButton;
