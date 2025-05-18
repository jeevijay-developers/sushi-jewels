"use client";
import { useRouter } from "next/router";
import React from "react";

const DiamondShapes = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-6 py-10 bg-gradient-to-br from-purple-100 to-purple-200">
      {/* Image on the left */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/diamondCategory.png"
          alt="Diamond Shapes"
          className="w-80 md:w-full max-w-md rounded-lg shadow-lg"
        />
      </div>

      {/* Content on the right */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-10 text-center md:text-left">
        <h2 className="text-3xl font-bold text-purple-900 mb-4">
          Discover Your Ideal Diamond Shape
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          Whether you love the timeless elegance of a Round cut or the bold
          glamour of a Princess cut, our collection has the perfect shape for
          every style. Find the diamond that speaks to you.
        </p>
        {/* <a
          href={`/search?category=diamond-rings&_id=6829cd63ee73c7ba204b4f9a`}
          className="inline-block px-6 py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition"
        >
          Shop Diamond Rings
        </a> */}
        <button
          onClick={() => router.push(`/search?category=diamond-rings&_id=6829cd63ee73c7ba204b4f9a`)}
          className="px-6 py-3 bg-customPink text-white font-semibold rounded-lg hover:bg-customPinkDark transition"
        >
          Shop Diamond Rings
        </button>
      </div>
    </div>
  );
};

export default DiamondShapes;
