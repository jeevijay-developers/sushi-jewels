"use client";

import { priceRanges } from "@components/categoryLinks/categoryLinks";
import Link from "next/link";

const ShopByPrice = () => {
  return (
    <section className="w-full bg-customPink py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-serif">
            Discover Jewelry by Collection
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {priceRanges.map((range, index) => {
            const CardContent = (
              <div
                className={`relative group h-60 sm:h-60 flex flex-col items-center justify-center rounded-2xl 
                ${range.gradient}
                backdrop-blur-sm border border-white/10 
                transform transition-all duration-500 
                hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25
                cursor-pointer overflow-hidden`}
              >
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-2xl"></div>
                
                {/* Premium Badge */}
                {range.premium && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      PREMIUM
                    </div>
                  </div>
                )}
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <p className="text-gray-700 font-medium text-sm sm:text-base mb-2 tracking-wide">
                    {range.label}
                  </p>
                  <p className="text-gray-900 text-xl sm:text-2xl lg:text-3xl font-bold mb-6 font-serif">
                    {range.price}
                  </p>
                </div>
                
                {/* Subtle shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                              bg-gradient-to-r from-transparent via-white/10 to-transparent 
                              transform translate-x-[-100%] group-hover:translate-x-[100%] 
                              transition-all duration-700 rounded-2xl"></div>
              </div>
            );

            return range.link ? (
              <Link href={range.link} key={index} passHref>
                {CardContent}
              </Link>
            ) : (
              <div key={index}>{CardContent}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShopByPrice;
