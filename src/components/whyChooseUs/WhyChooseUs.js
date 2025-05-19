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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6">
        {/* Card 1 */}
        <div data-aos="fade-up" className="flex flex-col">
          <h2 className="flex gap-4 items-center text-xl sm:text-2xl md:text-[2rem] text-gray-900">
            <GiDiamondRing /> Exquisite Craftsmanship
          </h2>
          <p className="text-base sm:text-lg text-gray-600 sm:ml-14">
            Each piece is meticulously crafted to reflect elegance and beauty.
          </p>
        </div>

        {/* Card 2 */}
        <div data-aos="fade-up" className="flex flex-col">
          <h2 className="flex gap-4 items-center text-xl sm:text-2xl md:text-[2rem] text-gray-900">
            <MdOutlineVerifiedUser /> Certified Jewelry
          </h2>
          <p className="text-base sm:text-lg text-gray-600 sm:ml-14">
            All jewelry comes with authenticity certification and hallmarking.
          </p>
        </div>

        {/* Card 3 */}
        <div data-aos="fade-up" className="flex flex-col">
          <h2 className="flex gap-4 items-center text-xl sm:text-2xl md:text-[2rem] text-gray-900">
            <TbTruckDelivery /> Free & Secure Shipping
          </h2>
          <p className="text-base sm:text-lg text-gray-600 sm:ml-14">
            Complimentary insured delivery right to your doorstep.
          </p>
        </div>

        {/* Card 4 */}
        <div data-aos="fade-up" className="flex flex-col">
          <h2 className="flex gap-4 items-center text-xl sm:text-2xl md:text-[2rem] text-gray-900">
            <RiSecurePaymentLine /> Secure Transactions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 sm:ml-14">
            Shop with peace of mind using encrypted payment options.
          </p>
        </div>

        {/* Card 5 */}
        <div data-aos="fade-up" className="flex flex-col">
          <h2 className="flex gap-4 items-center text-xl sm:text-2xl md:text-[2rem] text-gray-900">
            <MdSupportAgent /> Personalized Support
          </h2>
          <p className="text-base sm:text-lg text-gray-600 sm:ml-14">
            Our experts are available to assist you at every step of the way.
          </p>
        </div>

        {/* Card 6 */}
        <div data-aos="fade-up" className="flex flex-col">
          <h2 className="flex gap-4 items-center text-xl sm:text-2xl md:text-[2rem] text-gray-900">
            <FaRegGem /> Timeless Designs
          </h2>
          <p className="text-base sm:text-lg text-gray-600 sm:ml-14">
            Explore our exclusive collection of timeless and elegant jewelry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
