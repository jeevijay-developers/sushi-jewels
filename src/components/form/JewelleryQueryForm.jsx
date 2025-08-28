import React, {useState} from "react";
import {
  FaUser,
  FaPhone,
  FaGem,
  FaRupeeSign,
  FaCommentDots,
} from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import axios from "axios";
import { toast } from "react-toastify";

const JewelleryQueryForm = ({ setDisplayQueryForm }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    jewelleryType: "",
    budget: "",
    message: "",
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
    
    try{
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/query/submitQuery`, formData);
      if(res.status === 200){
        setFormData({
          fullName: "",
          phone: "",
          jewelleryType: "",
          budget: "",
          message: "",
        });
        toast.success("Query sent successfully");
      }
    }catch(err){
      console.log(err);
    }
  };
  
  return (
    <div className="h-fit w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-600 to-violet-600 px-6 py-4 relative">
        <span className="flex xl:hidden">
          <IoMdCloseCircle
            className="text-white absolute top-3 right-3 cursor-pointer text-2xl hover:text-red-200 transition-colors duration-200"
            onClick={() => setDisplayQueryForm(false)}
          />
        </span>
        <div className="text-center">
          <div className="flex items-center justify-center mb-1">
            <FaGem className="text-white text-2xl mr-2" />
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              Jewellery Query Form
            </h2>
          </div>
          <p className="text-purple-100 text-sm">Share your dream design with us</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="p-6 lg:p-8">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <div className="group">
            <label className="block mb-1 font-semibold text-gray-700 text-base">
              Full Name
            </label>
            <div className="flex items-center border-2 border-gray-200 rounded-xl p-3 transition-all duration-300 focus-within:border-purple-500 focus-within:shadow-lg group-hover:border-purple-300">
              <FaUser className="text-purple-500 mr-3 text-base" />
              <input
                type="text"
                className="w-full outline-none text-gray-700"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Enter your full name"
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div className="group">
            <label className="block mb-1 font-semibold text-gray-700 text-base">
              Phone Number
            </label>
            <div className="flex items-center border-2 border-gray-200 rounded-xl p-3 transition-all duration-300 focus-within:border-purple-500 focus-within:shadow-lg group-hover:border-purple-300">
              <FaPhone className="text-purple-500 mr-3 text-base" />
              <input
                type="tel"
                className="w-full outline-none text-gray-700 placeholder-gray-400"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Type of Jewellery */}
          <div className="group">
            <label className="block mb-1 font-semibold text-gray-700 text-base">
              Type of Jewellery
            </label>
            <div className="flex items-center border-2 border-gray-200 rounded-xl p-3 transition-all duration-300 focus-within:border-purple-500 focus-within:shadow-lg group-hover:border-purple-300">
              <FaGem className="text-purple-500 mr-3 text-base" />
              <select 
                className="w-full outline-none bg-transparent text-gray-700" 
                value={formData.jewelleryType} 
                onChange={(e) => setFormData({ ...formData, jewelleryType: e.target.value })} 
                required
              >
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
          <div className="group">
            <label className="block mb-1 font-semibold text-gray-700 text-base">
              Budget (in INR)
            </label>
            <div className="flex items-center border-2 border-gray-200 rounded-xl p-3 transition-all duration-300 focus-within:border-purple-500 focus-within:shadow-lg group-hover:border-purple-300">
              <FaRupeeSign className="text-purple-500 mr-3 text-base" />
              <input
                type="number"
                className="w-full outline-none text-gray-700 placeholder-gray-400"
                placeholder="Enter your budget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Message */}
          <div className="md:col-span-2 group">
            <label className="block mb-1 font-semibold text-gray-700 text-base">
              Additional Message
            </label>
            <div className="flex items-start border-2 border-gray-200 rounded-xl p-3 transition-all duration-300 focus-within:border-purple-500 focus-within:shadow-lg group-hover:border-purple-300">
              <FaCommentDots className="text-purple-500 mr-3 mt-1 text-base" />
              <textarea
                rows="2"
                className="w-full outline-none resize-none text-gray-700 placeholder-gray-400"
                placeholder="Any specific requirements or design ideas?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              Submit Query
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JewelleryQueryForm;