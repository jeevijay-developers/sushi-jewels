"use client";
import React from "react";
import { toast } from "react-toastify";
import { IoClose } from "react-icons/io5"; 

const SendQueryModal = ({isOpen, onClose,product}) => {
  // if(!isOpen) return null
  console.log("product", product);
  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/40 flex justify-center items-center">
        <div className="relative  bg-white p-6 rounded-md w-full max-w-md shadow-lg">
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
            onClick={onClose}
          >
            <IoClose />
          </button>
          <h2 className="text-2xl text-center text-customPink font-semibold mb-4">Product Query Form</h2>
          <p className="mb-4 ">{product?.title?.en}</p>
        
        </div>
      </div>
    </>
  );
};

export default SendQueryModal;
