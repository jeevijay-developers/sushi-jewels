import React from "react";
import { GiDiamondRing } from "react-icons/gi";
import { MdOutlineVerifiedUser, MdSupportAgent } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaRegGem } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseUs = () => {
  return (
    <div className="font-[lora] my-6 px-4 sm:px-6 md:px-10">
      <h1 className="px-6 my-8 font-[lora] text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] text-center">
        Why Choose Us?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-6">
        {/* Card 1 */}
        <div data-aos="fade-up" className="flex flex-col p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
          <h2 className="flex gap-4 items-center text-xl sm:text-2xl md:text-[1.75rem] text-gray-900 mb-3">
            <span className="text-3xl text-amber-500 group-hover:text-amber-600 transition-colors duration-300">
              <GiDiamondRing />
            </span>
            Exquisite Craftsmanship
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Each piece is meticulously crafted to reflect elegance and beauty.
          </p>
        </div>

        {/* Card 2 */}
        <div data-aos="fade-up" className="flex flex-col p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
          <h2 className="flex gap-4 items-center text-xl sm:text-2xl md:text-[1.75rem] text-gray-900 mb-3">
            <span className="text-3xl text-green-500 group-hover:text-green-600 transition-colors duration-300">
              <MdOutlineVerifiedUser />
            </span>
            Certified Jewelry
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            All jewelry comes with authenticity certification and hallmarking.
          </p>
        </div>

        {/* Card 3 */}
        <div data-aos="fade-up" className="flex flex-col p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
          <h2 className="flex gap-4 items-center text-xl sm:text-2xl md:text-[1.75rem] text-gray-900 mb-3">
            <span className="text-3xl text-blue-500 group-hover:text-blue-600 transition-colors duration-300">
              <TbTruckDelivery />
            </span>
            Free & Secure Shipping
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Complimentary insured delivery right to your doorstep.
          </p>
        </div>

        {/* Card 4 */}
        <div data-aos="fade-up" className="flex flex-col p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
          <h2 className="flex gap-4 items-center text-xl sm:text-2xl md:text-[1.75rem] text-gray-900 mb-3">
            <span className="text-3xl text-purple-500 group-hover:text-purple-600 transition-colors duration-300">
              <RiSecurePaymentLine />
            </span>
            Secure Transactions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Shop with peace of mind using encrypted payment options.
          </p>
        </div>

        {/* Card 5 */}
        <div data-aos="fade-up" className="flex flex-col p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
          <h2 className="flex gap-4 items-center text-xl sm:text-2xl md:text-[1.75rem] text-gray-900 mb-3">
            <span className="text-3xl text-orange-500 group-hover:text-orange-600 transition-colors duration-300">
              <MdSupportAgent />
            </span>
            Personalized Support
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Our experts are available to assist you at every step of the way.
          </p>
        </div>

        {/* Card 6 */}
        <div data-aos="fade-up" className="flex flex-col p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
          <h2 className="flex gap-4 items-center text-xl sm:text-2xl md:text-[1.75rem] text-gray-900 mb-3">
            <span className="text-3xl text-pink-500 group-hover:text-pink-600 transition-colors duration-300">
              <FaRegGem />
            </span>
            Timeless Designs
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Explore our exclusive collection of timeless and elegant jewelry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
