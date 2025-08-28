"use client";

import React, { useState, useEffect } from "react";
import JewelleryQueryForm from "@components/form/JewelleryQueryForm";
import QueryFormButton from "@components/QueryFormButton/QueryFormButton";

const QueryFormManager = () => {
  const [displayQueryForm, setDisplayQueryForm] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleQueryForm = () => {
    setDisplayQueryForm(!displayQueryForm);
  };

  return (
    <>
      {/* Query Form Button */}
      <QueryFormButton onClick={toggleQueryForm} isFormOpen={displayQueryForm} />
      
      {/* Query Form Modal/Overlay */}
      {displayQueryForm && (
        <div className="fixed inset-0 z-40 overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out"
            onClick={() => setDisplayQueryForm(false)}
          />
          
          {/* Form Container */}
          <div className="flex min-h-full items-center justify-center p-4 sm:p-4">
            <div 
              className="relative w-full max-w-4xl transform transition-all duration-300 ease-out scale-100 opacity-100"
              style={{
                animation: displayQueryForm ? 'modalSlideIn 0.3s ease-out' : 'modalSlideOut 0.3s ease-in'
              }}
            >
              <JewelleryQueryForm setDisplayQueryForm={setDisplayQueryForm} />
            </div>
          </div>
        </div>
      )}
      
      {/* CSS Animation Styles */}
      <style jsx>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(-50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes modalSlideOut {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateY(-50px) scale(0.95);
          }
        }
      `}</style>
    </>
  );
};

export default QueryFormManager;
