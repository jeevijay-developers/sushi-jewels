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
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          product: product || "",
        });
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

      <div className="relative py-8 sm:py-12 lg:py-16 px-3 sm:px-6 lg:px-8 max-w-screen-md mx-auto">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-10 left-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-purple-200 opacity-20"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-violet-100 opacity-20"></div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg sm:rounded-xl shadow-2xl overflow-hidden border border-purple-300">
          {/* Header with purple accent */}
          <div className="bg-gradient-to-r from-purple-600 to-violet-600 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-violet-400"></div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-center text-white">
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
            <p className="text-purple-200 text-center mt-1 sm:mt-2 italic text-sm sm:text-base">
              We value your interest in our products
            </p>
          </div>

          {/* Luxurious form container */}
          <div className="p-4 sm:p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name Field */}
              <div className="relative">
                <label className="block text-xs sm:text-sm font-medium text-purple-600 mb-1 sm:mb-2 uppercase tracking-wider">
                  Name
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-3 text-purple-500 opacity-70">
                    <FiUser size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-purple-200 focus:border-purple-500 rounded-md pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 outline-none transition-all duration-300 bg-white bg-opacity-80 shadow-sm focus:ring-2 focus:ring-purple-200 text-sm sm:text-base"
                    placeholder="Enter your name..."
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="relative">
                <label className="block text-xs sm:text-sm font-medium text-purple-600 mb-1 sm:mb-2 uppercase tracking-wider">
                  Email
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-3 text-purple-500 opacity-70">
                    <FiMail size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-purple-200 focus:border-purple-500 rounded-md pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 outline-none transition-all duration-300 bg-white bg-opacity-80 shadow-sm focus:ring-2 focus:ring-purple-200 text-sm sm:text-base"
                    placeholder="Enter your email..."
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="relative">
                <label className="block text-xs sm:text-sm font-medium text-purple-600 mb-1 sm:mb-2 uppercase tracking-wider">
                  Phone
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-3 text-purple-500 opacity-70">
                    <FiPhone size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-purple-200 focus:border-purple-500 rounded-md pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 outline-none transition-all duration-300 bg-white bg-opacity-80 shadow-sm focus:ring-2 focus:ring-purple-200 text-sm sm:text-base"
                    placeholder="Enter your phone..."
                  />
                </div>
              </div>

              {/* Product Field */}
              <div className="relative">
                <label className="block text-xs sm:text-sm font-medium text-purple-600 mb-1 sm:mb-2 uppercase tracking-wider">
                  Product
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-3 text-purple-500 opacity-70">
                    <FiPackage size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <input
                    name="product"
                    type="text"
                    value={formData.product}
                    readOnly
                    className="w-full border-2 border-purple-200 rounded-md pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-purple-50 text-purple-700 font-medium text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <label className="block text-xs sm:text-sm font-medium text-purple-600 mb-1 sm:mb-2 uppercase tracking-wider">
                  Message
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-2 sm:top-3 text-purple-500 opacity-70">
                    <FiMessageSquare size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-purple-200 focus:border-purple-500 rounded-md pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 outline-none transition-all duration-300 focus:ring-2 focus:ring-purple-200 text-sm sm:text-base resize-none sm:rows-5"
                    placeholder="Please share your questions or requirements..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-md transition duration-300 shadow-md hover:shadow-lg flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 text-sm sm:text-base"
              >
                <span>Submit Inquiry</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
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

          </div>
        </div>
 </div>
    </Layout>
  );
};

export default ProductQuery;
