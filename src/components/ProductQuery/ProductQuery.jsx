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
    <Layout title="Product Query"  description="Submit your product inquiries">
      <PageHeader
        headerBg={storeCustomizationSetting?.about_us?.header_bg}
        title={"Product Query"}
        />
{/* 
        <h1 className="text-2xl lg:text-3xl mt-20 font-serif font-semibold text-center">Product Query Form</h1> */}
      <div className="bg-white py-10 px-4 sm:px-10 max-w-screen-lg mx-auto">
        <h2 className="text-xl lg:text-3xl mb-6 font-serif font-semibold text-center">
          <CMSkeleton
            count={1}
            height={40}
            loading={loading}
            data={storeCustomizationSetting?.product_query?.form_title}
          />
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {["name", "email", "phone"].map((field) => (
            <div key={field}>
              <label className="block text-sm font-semibold text-gray-700 mb-1 capitalize">
                {field}:
              </label>
              <input
                name={field}
                type={
                  field === "email"
                    ? "email"
                    : field === "phone"
                    ? "tel"
                    : "text"
                }
                value={formData[field]}
                onChange={handleChange}
                required
                className="w-full border border-customPink rounded-md px-4 py-2 outline-customPinkDark"
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Product:
            </label>
            <input
              name="product"
              type="text"
              value={formData.product}
              readOnly
              className="w-full border border-customPink rounded-md px-4 py-2 bg-gray-100 outline-customPinkDark"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Message:
            </label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-customPink rounded-md px-4 py-2 outline-customPinkDark"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-customPink hover:bg-customPinkDark text-white py-2 rounded transition duration-300"
          >
            Send Query
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ProductQuery;
