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
    <section className="container mx-auto py-8 px-4 ">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Gifting Guide
      </h2>

      {/* Scrollable container on small/medium screens */}
      <div className="md:hidden overflow-x-auto">
        <div className="flex flex-nowrap gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 flex flex-col items-center text-center"
            >
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
          ))}
        </div>
      </div>

      {/* Grid layout on md and up */}
      <div className="hidden md:flex flex-wrap justify-center gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center text-center"
          >
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
            <div className="bg-gradient-to-r from-pink-200 to-customPink rounded-full py-2 px-4 text-pink-800 font-semibold shadow-md">
              {category.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GiftingGuide;


