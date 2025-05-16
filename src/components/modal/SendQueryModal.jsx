"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { IoClose } from "react-icons/io5";

const SendQueryModal = ({ isOpen, onClose, product }) => {
  // if(!isOpen) return null
  console.log("product", product);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChage = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // toast.success("Query submitted successfully!");
    onClose();
  };
  if (!isOpen) return null;
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
          <h2 className="text-2xl text-center text-customPink font-semibold mb-4">
            Product Query Form
          </h2>
          <p className="mb-4 ">{product?.title?.en}</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-row no-wrap items-center justify-center gap-2 ">
              <label className="block text-sm font-semibold text-gray-700 ">
                Name:
              </label>
              <input
              name="name"
                onChange={handleChage}
                required
                className="w-full border border-customPink rounded-md px-3 py-2 outline-customPinkDark"
              />
            </div>
            <div className="flex flex-row no-wrap items-center justify-center gap-2 ">
              <label className="block text-sm font-semibold text-gray-700 ">
                Email:
              </label>
              <input
              name="email"
              type="email"
                onChange={handleChage}
                required
                className="w-full border border-customPink rounded-md px-3 py-2 outline-customPinkDark"
              />
            </div>
            <div className="flex flex-row no-wrap items-center justify-center gap-2 ">
              <label className="block text-sm font-semibold text-gray-700 ">
                Phone:
              </label>
              <input
              name="phone"
              type="phone"
                onChange={handleChage}
                required
                className="w-full border border-customPink rounded-md px-3 py-2 outline-customPinkDark"
              />
            </div>
            <div className="flex flex-row no-wrap items-center justify-center gap-2 ">
              <label className="block text-sm font-semibold text-gray-700 ">
                Selected Product
              </label>
              <input
                name="product"
                type="text"
                onChange={handleChage}
                required
                className="w-full border border-customPink rounded-md px-3 py-2 outline-customPinkDark"
              />
            </div>
            <div className="flex flex-row no-wrap items-center justify-center gap-2 ">
              <label className="block text-sm font-semibold text-gray-700 ">
                Message
              </label>
              <textarea
                onChange={handleChage}
                name="message"
                type="text"
                required
                className="w-full border border-customPink rounded-md px-3 py-2 outline-customPinkDark"
              />
            </div>
            <button
              className="w-full bg-customPink hover:bg-customPinkDark text-white py-2 rounded "
              type="submit"
            >
              Send Query
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SendQueryModal;
