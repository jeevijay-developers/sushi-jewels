import React from "react";
// Assuming you have react-icons installed, you can import icons if needed
// import { FaGift } from 'react-icons/fa';

const GiftingGuide = () => {
  // Data for the gifting categories
  const categories = [
    {
      label: "Mother",
      imageUrl: "https://placehold.co/150x150/FF69B4/FFFFFF?text=Mother",
    },
    {
      label: "Wife",
      imageUrl: "https://placehold.co/150x150/FF69B4/FFFFFF?text=Wife",
    },
    {
      label: "New Mom",
      imageUrl: "https://placehold.co/150x150/FF69B4/FFFFFF?text=New+Mom",
    },
    {
      label: "Husband",
      imageUrl: "https://placehold.co/150x150/FF69B4/FFFFFF?text=Husband",
    },
    {
      label: "Friends",
      imageUrl: "https://placehold.co/150x150/FF69B4/FFFFFF?text=Friends",
    },
    {
      label: "Brother",
      imageUrl: "https://placehold.co/150x150/FF69B4/FFFFFF?text=Brother",
    },
  ];

  return (
    <section className="container mx-auto py-8 px-4">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Gifting Guide
      </h2>

      {/* Gifting Categories - Using Flexbox for responsiveness */}
      {/* flex-wrap allows items to wrap onto the next line on smaller screens */}
      {/* justify-center centers the items when they wrap */}
      {/* gap-6 adds space between items */}
      <div className="flex flex-wrap justify-center gap-6">
        {categories.map((category, index) => (
          // Each category card
          // w-full on small screens, md:w-1/3 lg:w-1/6 to control width on larger screens
          // flex flex-col items-center centers content vertically
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 flex flex-col items-center text-center"
          >
            {/* Image Container with rounded shape */}
            {/* Relative positioning for potential absolute positioning of labels/icons if needed */}
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-pink-500 mb-3">
              {/* Placeholder Image */}
              <img
                src={category.imageUrl}
                alt={category.label}
                className="w-full h-full object-cover"
                // Fallback in case image fails to load
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/150x150/CCCCCC/000000?text=Error";
                }}
              />
            </div>

            {/* Label */}
            {/* bg-pink-100 with gradient, rounded-full for pill shape */}
            {/* py-2 px-4 for padding, text-pink-800 for text color */}
            {/* w-auto ensures the pill adjusts to text width */}
            <div className="bg-gradient-to-r from-pink-200 to-pink-300 rounded-full py-2 px-4 text-pink-800 font-semibold shadow-md">
              {category.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GiftingGuide;


