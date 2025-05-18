"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Image from "next/image";

// Internal imports
import Layout from "@layout/Layout";
import useGetSetting from "@hooks/useGetSetting";
import CMSkeleton from "@components/preloader/CMSkeleton";
import PageHeader from "@components/header/PageHeader";
import useUtilsFunction from "@hooks/useUtilsFunction";
import QueryServices from "@services/QueryServices";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMessageSquare,
  FiPackage,
} from "react-icons/fi";

const ProductQuery = ({ product }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    product: product || "",
  });

  const { storeCustomizationSetting, loading, error } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();
  const router = useRouter();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    QueryServices.submitProductQueryForm(formData)
      .then(() => {
        toast.success("Query submitted successfully!");
        router.push("/");
      })
      .catch((error) => {
        toast.error("Error submitting query!");
        console.error(error);
      });
  };

  return (
    <Layout title="Product Query" description="Submit your product inquiries">
      <PageHeader
        headerBg={storeCustomizationSetting?.about_us?.header_bg}
        title={"Product Query"}
      />

      <div className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-screen-lg mx-auto">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-purple-200 opacity-20"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-yellow-100 opacity-20"></div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-2xl overflow-hidden border border-yellow-300">
          {/* Header with gold accent */}
          <div className="bg-gradient-to-r from-customPink to-customPinkDark px-8 py-6 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-center text-white">
              <CMSkeleton
                count={1}
                height={40}
                loading={loading}
                data={
                  storeCustomizationSetting?.product_query?.form_title ||
                  "Product Inquiry"
                }
              />
            </h2>
            <p className="text-yellow-300 text-center mt-2 italic">
              We value your interest in our products
            </p>
          </div>

          {/* Luxurious form container */}
          <div className="p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-customPink mb-2 uppercase tracking-wider">
                  Name
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-3 text-customPink opacity-70">
                    <FiUser size={18} />
                  </div>
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-purple-200 focus:border-yellow-500 rounded-md pl-10 pr-4 py-3 outline-none transition-all duration-300 bg-white bg-opacity-80 shadow-sm"
                    placeholder="Enter your name..."
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-customPink mb-2 uppercase tracking-wider">
                  Email
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-3 text-customPink opacity-70">
                    <FiMail size={18} />
                  </div>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-purple-200 focus:border-yellow-500 rounded-md pl-10 pr-4 py-3 outline-none transition-all duration-300 bg-white bg-opacity-80 shadow-sm"
                    placeholder="Enter your email..."
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-customPink mb-2 uppercase tracking-wider">
                  Phone
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-3 text-customPink opacity-70">
                    <FiPhone size={18} />
                  </div>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-purple-200 focus:border-yellow-500 rounded-md pl-10 pr-4 py-3 outline-none transition-all duration-300 bg-white bg-opacity-80 shadow-sm"
                    placeholder="Enter your phone..."
                  />
                </div>
              </div>

              {/* Product Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-purple-400 mb-2 uppercase tracking-wider">
                  Product
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-3 text-customPink opacity-70">
                    <FiPackage size={18} />
                  </div>
                  <input
                    name="product"
                    type="text"
                    value={formData.product}
                    readOnly
                    className="w-full border-2 border-purple-200 rounded-md pl-10 pr-4 py-3 bg-purple-50 text-customPink font-medium"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-customPink mb-2 uppercase tracking-wider">
                  Message
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-customPink opacity-70">
                    <FiMessageSquare size={18} />
                  </div>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-purple-200 focus:border-yellow-500 rounded-md pl-10 pr-4 py-3 outline-none transition-all duration-300"
                    placeholder="Please share your questions or requirements..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 shadow-md hover:shadow-lg flex items-center justify-center group"
              >
                <span>Submit Inquiry</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </form>

            {/* Decorative bottom element */}
            <div className="mt-10 flex justify-center">
              <div className="h-0.5 w-16 bg-gradient-to-r from-purple-400 to-yellow-400"></div>
            </div>
          </div>
        </div>

        {/* Additional decorative elements */}
        <div className="absolute -bottom-4 right-4 w-24 h-24 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-400 blur-xl opacity-30"></div>
        <div className="absolute -top-4 left-2 w-16 h-16 rounded-full bg-gradient-to-tr from-purple-300 to-purple-600 blur-xl opacity-20"></div>
      </div>
    </Layout>
  );
};

export default ProductQuery;
