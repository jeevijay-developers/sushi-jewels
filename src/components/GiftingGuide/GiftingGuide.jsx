"use client";

import React from "react";
import Link from "next/link";
import { categories } from "@components/categoryLinks/categoryLinks";

const GiftingGuide = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800 font-serif">
          The Ultimate Gifting Guide
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-violet-500 to-purple-600 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          Thoughtfully curated jewelry gifts for every special moment. Discover
          timeless pieces for your loved ones and celebrate life's meaningful
          milestones.
        </p>
      </div>

      {/* Responsive Grid - 2 columns on mobile, 3 on tablet+, 6 on large screens */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
        {categories.map((category, index) => (
          <Link href={category.link} key={index}>
            <div className="group flex flex-col items-center text-center cursor-pointer 
                          transform transition-all duration-300 hover:scale-102 
                          bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl
                          border border-gray-100 hover:border-purple-200">
              {/* Image Container */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 
                            rounded-full overflow-hidden mb-4
                            border-3 border-purple-200 group-hover:border-purple-400
                            shadow-md group-hover:shadow-lg
                            transition-all duration-300">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                
                <img
                  src={category.imageUrl}
                  alt={category.label}
                  className="w-full h-full object-cover transform transition-transform duration-300 
                           group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/150x150/CCCCCC/000000?text=Error";
                  }}
                />
              </div>
              
              {/* Label */}
              <div className="bg-gradient-to-r from-purple-50 to-violet-100 
                            border border-purple-200 rounded-full 
                            py-2 px-3 sm:px-4 
                            text-purple-800 font-semibold 
                            shadow-sm group-hover:shadow-md
                            text-xs sm:text-sm
                            transform transition-all duration-300
                            group-hover:bg-gradient-to-r group-hover:from-purple-100 group-hover:to-violet-200
                            group-hover:border-purple-400
                            w-full text-center">
                {category.label}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default GiftingGuide;