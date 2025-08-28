"use client";
import { useRouter } from "next/router";
import React from "react";

const DiamondShapes = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-purple-50 via-purple-100 to-violet-100 min-h-[500px] sm:min-h-[600px] lg:min-h-[500px]">
      {/* Image on the left */}
      <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
        <div className="relative group">
          <img
            src="/diamondCategory.png"
            alt="Diamond Shapes"
            className="w-72 sm:w-80 md:w-96 lg:w-full max-w-sm lg:max-w-md xl:max-w-lg rounded-xl shadow-2xl transition-transform duration-300 group-hover:scale-103"
          />
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 sm:w-10 sm:h-10 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full opacity-30 animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Content on the right */}
      <div className="w-full lg:w-1/2 lg:pl-8 xl:pl-12 text-center lg:text-left max-w-2xl lg:max-w-none">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-purple-900 mb-4 sm:mb-6 leading-tight">
          Discover Your Ideal{" "}
          <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-white px-2 rounded-md">
            Diamond Shape
          </span>
        </h2>
        <p className="text-gray-700 text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
          Whether you love the timeless elegance of a Round cut or the bold
          glamour of a Princess cut, our collection has the perfect shape for
          every style. Find the diamond that speaks to you.
        </p>
        
        <button
          onClick={() => router.push(`/search?category=diamond-rings&_id=6829cd63ee73c7ba204b4f9a`)}
          className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-semibold text-sm sm:text-base lg:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-103 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        >
          <span>Shop Diamond Rings</span>
          <svg 
            className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-200 group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Additional decorative element */}
        <div className="mt-8 sm:mt-12 lg:mt-16 flex justify-center lg:justify-start">
          <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default DiamondShapes;
