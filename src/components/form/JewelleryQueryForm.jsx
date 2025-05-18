import React, {useState} from "react";
import {
  FaUser,
  FaEnvelope,
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
    // <div className=" bg-gradient-to-br from-pink-100 to-yellow-100 flex items-center justify-center p-4 ">
    <div className="w-full max-w-3xl bg-gradient-to-br from-pink-100 to-yellow-100 rounded-2xl shadow-lg p-8 relative">
      <span className="flex xl:hidden">
        <IoMdCloseCircle
          className="text-red-800 absolute top-4 right-4 cursor-pointer text-3xl"
          onClick={() => setDisplayQueryForm(false)}
        />
      </span>
      <h2 className="text-3xl font-bold text-customPink mb-6 text-center">
        <FaGem className="inline-block text-customPink mr-2" />
        Jewellery QucustomPink
      </h2>

      <form onSubmit={handleSubmit}  className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">
            Full Name
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg p-3">
            <FaUser className="text-customPink mr-3" />
            <input
              type="text"
              className="w-full outline-none"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
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
            <FaPhone className="text-customPink mr-3" />
            <input
              type="tel"
              className="w-full outline-none"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
            <FaGem className="text-customPink mr-3" />
            <select className="w-full outline-none bg-transparent" value={formData.jewelleryType} onChange={(e) => setFormData({ ...formData, jewelleryType: e.target.value })} required>
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
            <FaRupeeSign className="text-customPink mr-3" />
            <input
              type="number"
              className="w-full outline-none"
              placeholder="Enter your budget"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
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
            <FaCommentDots className="text-customPink mr-3 mt-1" />
            <textarea
              rows="4"
              className="w-full outline-none resize-none"
              placeholder="Any specific requirements or design ideas?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-center mt-4">
          <button
            type="submit"
            className="bg-customPink text-white px-6 py-3 rounded-full font-semibold hover:bg-customPinkDark transition"
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
