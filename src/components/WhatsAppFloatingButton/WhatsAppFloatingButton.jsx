"use client";

import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloatingButton = () => {
  const message = encodeURIComponent(
    "Hi Sushi Jewels , I have a query about your jewelry collection. Could you please help me with more details?"
  );
  const phoneNumber = "918601799043";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={24} />
    </button>
  );
};

export default WhatsAppFloatingButton;
