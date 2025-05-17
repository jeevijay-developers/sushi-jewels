"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import QueryServices from "@services/QueryServices";

const ProductQuery = ({ product }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    product: product || "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    QueryServices.submitProductQueryForm(formData)
      .then(() => toast.success("Query submitted successfully!"))
      .catch((error) => {
        toast.error("Error submitting query!");
        console.error(error);
      });
  };

  return (
    <div className="bg-white p-6 rounded-md w-full max-w-xl mx-auto shadow-md mt-6">
      <h2 className="text-2xl text-center text-customPink font-semibold mb-4">
        Product Query Form
      </h2>
      <p className="mb-4 text-center">{product?.title?.en}</p>
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
            Product:
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
  );
};

export default ProductQuery;
