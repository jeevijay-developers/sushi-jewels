import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaGem,
  FaRupeeSign,
  FaCommentDots,
} from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

const JewelleryQueryForm = ({ setDisplayQueryForm }) => {
  return (
    // <div className=" bg-gradient-to-br from-pink-100 to-yellow-100 flex items-center justify-center p-4 ">
    <div className="w-full max-w-3xl bg-gradient-to-br from-pink-100 to-yellow-100 rounded-2xl shadow-lg p-8 relative">
      <span className="flex xl:hidden">
        <IoMdCloseCircle
          className="text-red-800 absolute top-4 right-4 cursor-pointer text-3xl"
          onClick={() => setDisplayQueryForm(false)}
        />
      </span>
      <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">
        <FaGem className="inline-block text-pink-500 mr-2" />
        Jewellery Query Form
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">
            Full Name
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg p-3">
            <FaUser className="text-pink-500 mr-3" />
            <input
              type="text"
              className="w-full outline-none"
              placeholder="Enter your full name"
              required
            />
          </div>
        </div>

        {/* Email */}
        {/* <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg p-3">
              <FaEnvelope className="text-pink-500 mr-3" />
              <input
                type="email"
                className="w-full outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
          </div> */}

        {/* Phone */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">
            Phone Number
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg p-3">
            <FaPhone className="text-pink-500 mr-3" />
            <input
              type="tel"
              className="w-full outline-none"
              placeholder="Enter your phone number"
              required
            />
          </div>
        </div>

        {/* Type of Jewellery */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">
            Type of Jewellery
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg p-3">
            <FaGem className="text-pink-500 mr-3" />
            <select className="w-full outline-none bg-transparent" required>
              <option value="">Select type</option>
              <option value="ring">Ring</option>
              <option value="necklace">Necklace</option>
              <option value="bracelet">Bracelet</option>
              <option value="earrings">Earrings</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Budget */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">
            Budget (in ₹)
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg p-3">
            <FaRupeeSign className="text-pink-500 mr-3" />
            <input
              type="number"
              className="w-full outline-none"
              placeholder="Enter your budget"
              required
            />
          </div>
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <label className="block mb-1 font-semibold text-gray-700">
            Additional Message
          </label>
          <div className="flex items-start border border-gray-300 rounded-lg p-3">
            <FaCommentDots className="text-pink-500 mr-3 mt-1" />
            <textarea
              rows="4"
              className="w-full outline-none resize-none"
              placeholder="Any specific requirements or design ideas?"
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-center mt-4">
          <button
            type="submit"
            className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
          >
            Submit Query
          </button>
        </div>
      </form>
    </div>
    // </div>
  );
};

export default JewelleryQueryForm;
