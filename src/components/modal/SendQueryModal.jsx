"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { IoClose } from "react-icons/io5";

const SendQueryModal = ({ isOpen, onClose, product }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    product: product?.title?.en || "",
  });

  const handleChange = (e) => {
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
      {/* Modal Overlay - using higher z-index and proper inset-0 */}
      <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
        <div className="relative bg-white p-6 rounded-md w-full max-w-md shadow-lg">
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
            onClick={onClose}
          >
            <IoClose />
          </button>
          <h2 className="text-2xl text-center text-customPink font-semibold mb-4">
            Product Query Form
          </h2>
          <p className="mb-4">{product?.title?.en}</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-row items-center gap-2">
              <label className="block text-sm font-semibold text-gray-700 w-24">
                Name:
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-customPink rounded-md px-3 py-2 outline-customPinkDark"
              />
            </div>
            <div className="flex flex-row items-center gap-2">
              <label className="block text-sm font-semibold text-gray-700 w-24">
                Email:
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-customPink rounded-md px-3 py-2 outline-customPinkDark"
              />
            </div>
            <div className="flex flex-row items-center gap-2">
              <label className="block text-sm font-semibold text-gray-700 w-24">
                Phone:
              </label>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-customPink rounded-md px-3 py-2 outline-customPinkDark"
              />
            </div>
            <div className="flex flex-row items-center gap-2">
              <label className="block text-sm font-semibold text-gray-700 w-24">
                Selected Product:
              </label>
              <input
                name="product"
                type="text"
                value={formData.product}
                onChange={handleChange}
                readOnly
                className="w-full border border-customPink rounded-md px-3 py-2 outline-customPinkDark bg-gray-50"
              />
            </div>
            <div className="flex flex-row items-start gap-2">
              <label className="block text-sm font-semibold text-gray-700 w-24 pt-2">
                Message:
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full border border-customPink rounded-md px-3 py-2 outline-customPinkDark"
              />
            </div>
            <button
              className="w-full bg-customPink hover:bg-customPinkDark text-white py-2 rounded transition duration-300"
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
