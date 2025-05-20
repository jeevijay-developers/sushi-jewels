"use client";

import { priceRanges } from "@components/categoryLinks/categoryLinks";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const ShopByPrice = () => {


  return (
    <section className="w-full bg-gradient-to-r from-customPink to-red-500 py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-8">
          Shop By Price
        </h2>
        <div className="flex overflow-x-auto pb-4 space-x-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 max-w-6xl mx-auto">
          {priceRanges.map((range, index) => {
            const CardContent = (
              <div
                className={`relative flex flex-col items-center justify-center p-6 rounded-3xl shadow-lg
                ${range.gradient}
                ${
                  range.premium ? "text-white overflow-hidden" : "text-gray-800"
                }
                flex-shrink-0 w-56 sm:w-auto`}
              >
                {range.premium && (
                  <div className="absolute top-0 right-0 w-16 h-16">
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-l-[20px] border-b-[20px] border-r-[20px] border-t-transparent border-l-transparent border-b-red-700 border-r-red-700 transform rotate-45 translate-x-1 -translate-y-1"></div>
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-l-[20px] border-b-[20px] border-r-[20px] border-t-red-700 border-l-transparent border-b-transparent border-r-red-700 transform -rotate-45 translate-x-1 translate-y-1"></div>
                  </div>
                )}
                <p
                  className={`text-base font-semibold ${
                    range.premium ? "text-white" : "text-gray-600"
                  } text-center`}
                >
                  {range.label}
                </p>
                <p
                  className={`text-xl md:text-2xl font-bold mt-1 ${
                    range.premium ? "text-white" : "text-gray-800"
                  } text-center`}
                >
                  {range.price}
                </p>
                <div
                  className={`mt-4 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer
                  ${
                    range.premium
                      ? "bg-white text-customPink"
                      : "bg-customPink text-white"
                  }
                `}
                >
                  <Image
                    src="/icon/arrow-right.png"
                    alt="arrow"
                    width={24}
                    height={24}
                  />
                </div>
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
