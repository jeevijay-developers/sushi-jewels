"use client";

import React from "react";
import Link from "next/link";
import { categories } from "@components/categoryLinks/categoryLinks";

const GiftingGuide = () => {
  return (
    <section className="container mx-auto py-8 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Gifting Guide
      </h2>

      {/* Scrollable on small screens */}
      <div className="md:hidden overflow-x-auto">
        <div className="flex flex-nowrap gap-4">
          {categories.map((category, index) => (
            <Link href={category.link} key={index}>
              <div className="flex-shrink-0 w-32 flex flex-col items-center text-center cursor-pointer">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-customPinkDark mb-3">
                  <img
                    src={category.imageUrl}
                    alt={category.label}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/150x150/CCCCCC/000000?text=Error";
                    }}
                  />
                </div>
                <div className="bg-gradient-to-r from-pink-200 to-customPink rounded-full py-2 px-4 text-customPinkDark font-semibold shadow-md">
                  {category.label}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Grid layout on md+ */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
        {categories.map((category, index) => (
          <Link href={category.link} key={index}>
            <div className="flex flex-col items-center text-center cursor-pointer">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-customPinkDark mb-3">
                <img
                  src={category.imageUrl}
                  alt={category.label}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/150x150/CCCCCC/000000?text=Error";
                  }}
                />
              </div>
              <div className="bg-gradient-to-r from-pink-200 to-customPink rounded-full py-2 px-4 text-customPinkDark font-semibold shadow-md">
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
