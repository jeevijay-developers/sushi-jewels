"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaShareAlt } from "react-icons/fa";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";

//internal import

import Price from "@components/common/Price";
import useGetSetting from "@hooks/useGetSetting";
import useUtilsFunction from "@hooks/useUtilsFunction";
import ProductModal from "@components/modal/ProductModal";
import ImageWithFallback from "@components/common/ImageWithFallBack";


const ProductCard = ({ product, attributes }) => {

  const [modalOpen, setModalOpen] = useState(false);
  const [isToolTipVisible, setIsToolTipVisible] = useState(false);
  const { globalSetting } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();
  const router = useRouter();
  const currency = globalSetting?.default_currency || "$";
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  // console.log('attributes in product cart',attributes)

  const toggleToolTip = () => {
    setIsToolTipVisible((prev) => !prev);
  };
  useEffect(() => {
    let intervalId;
    if (
      isHovering &&
      Array.isArray(product.image) &&
      product.image.length > 1
    ) {
      intervalId = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % product.image.length
        );
      }, 1000); // Change image every 1 second
    }
    return () => clearInterval(intervalId);
  }, [isHovering, product.image]);

  return (
    <>
      {modalOpen && (
        <ProductModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          product={product}
          currency={currency}
          attributes={attributes}
        />
      )}

      <div
        data-aos="fade-up"
        className="para-hover group box-border overflow-hidden flex rounded-2xl shadow-lg hover:shadow-2xl pe-0 flex-col items-center relative bg-white border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:-translate-y-2 my-5"
      >
        <div
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => {
            setIsHovering(false);
            setCurrentImageIndex(0);
          }}
          onClick={() => {
            router.push(`/product/${product.slug}`);
          }}
          className="relative w-full pt-[100%] md:pt-[85%] cursor-pointer rounded-xl overflow-hidden mx-3 mb-2 bg-gradient-to-br from-gray-50 to-gray-100"
        >
          <div className="absolute top-0 left-0 w-full h-full p-1">
            {Array.isArray(product.image) && product.image.length > 0 ? (
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-inner">
                {" "}
                <ImageWithFallback
                  src={product.image[currentImageIndex]}
                  alt={showingTranslateValue(product?.title) || "Product Image"}
                  fill
                  className="object-contain transition duration-700 ease-in-out transform group-hover:scale-102 rounded-xl"
                  sizes="(max-width: 640px) 48vw, (max-width: 768px) 44vw, 22vw"
                />
              </div>
            ) : (
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-inner">
                {" "}
                <Image
                  fill
                  src={product.imageUrl}
                  alt={product.title}
                  className="object-cover transition duration-500 ease-in-out transform group-hover:scale-102 rounded-xl"
                  sizes="100%"
                />
              </div>
            )}
          </div>
        </div>
        <div className="w-full px-3 sm:px-4 lg:px-5 pb-4 sm:pb-5 overflow-hidden">
          <div className="flex flex-row justify-between items-start">
            {" "}
            <div className="relative mb-2 mt-3 flex-1 mr-2">
              <span className="text-gray-400 font-medium text-xs d-block mb-1">
                {product.unit}
              </span>
              <h2 className="text-heading truncate mb-0 block text-sm sm:text-base md:text-lg font-semibold text-gray-700 relative">
                <span className="line-clamp-2 font-bold para-hover-target hover:text-purple-600 transition-colors duration-200">
                  {showingTranslateValue(product?.title)}
                </span>
              </h2>
            </div>
            {/* share button */}
            <div className="flex-shrink-0 mt-3">
              {" "}
              <div
                className={`absolute transition-transform ease-in-out shadow-xl shadow-gray-400/30 bg-white border border-gray-200 p-2 rounded-2xl z-20 ${
                  isToolTipVisible
                    ? "flex -translate-y-16 sm:-translate-y-20 -translate-x-20 sm:-translate-x-28 "
                    : "hidden"
                }`}
              >
                <div className="tooltip-container flex items-center justify-center gap-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shadow-sm rounded-full hover:bg-green-500 hover:text-gray-50 transition-all duration-200">
                    <WhatsappShareButton
                      url={`${process.env.NEXT_PUBLIC_STORE_DOMAIN}/product/${product.slug}`}
                      quote=""
                    >
                      <WhatsappIcon size={20} round />
                    </WhatsappShareButton>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-50 shadow-sm rounded-full hover:bg-sky-500 hover:text-gray-50 transition-all duration-200">
                    <FacebookShareButton
                      url={`${process.env.NEXT_PUBLIC_STORE_DOMAIN}/product/${product.slug}`}
                      quote=""
                    >
                      <FacebookIcon size={20} round />
                    </FacebookShareButton>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-50 rounded-full shadow-sm hover:bg-gray-700 hover:text-gray-50 transition-all duration-200">
                    <TwitterShareButton
                      url={`${process.env.NEXT_PUBLIC_STORE_DOMAIN}/product/${product.slug}`}
                      quote=""
                    >
                      <XIcon size={20} round />
                    </TwitterShareButton>
                  </div>
                </div>
                <div className="absolute left-0 w-full bg-transparent z-50 h-4 -bottom-4" />
                <div className="absolute -bottom-2 left-[45%] h-0 w-fit border-l-8 border-r-8 border-t-8 border-transparent border-t-white" />
              </div>
              <div
                className={`relative border-2 border-gray-200 bg-gradient-to-r from-purple-500 to-violet-500 p-2 rounded-full transition-all duration-300 ease-in-out shadow-lg hover:cursor-pointer w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center hover:shadow-xl ${
                  isToolTipVisible
                    ? "scale-102 -translate-y-1 from-violet-600 to-indigo-600 border-violet-300"
                    : "hover:from-purple-600 hover:to-violet-600"
                }`}
                onClick={toggleToolTip}
              >
                <FaShareAlt
                  className={`text-white text-xs sm:text-sm transition-transform duration-300 hover:rotate-180 ${
                    isToolTipVisible ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>
          </div>

          {/* //^ Price section */}
          <div className="flex justify-between items-center text-heading text-sm sm:text-base md:text-lg lg:text-xl mb-3">
            <Price
              card
              product={product}
              currency={currency}
              price={product?.prices?.price}
              originalPrice={product?.prices?.originalPrice}
            />
          </div>

          {/* send Query button */}
          <button
            className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 w-full text-white items-center font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 transform hover:scale-103 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            onClick={() => router.push(`/product-query/${product.slug}`)}
          >
            Send Query
          </button>
        </div>
      </div>
      {/* { queryModalOpen && (
        <SendQueryModal
        isOpen={queryModalOpen}
        onClose={()=> setQueryModalOpen(false)}
        product = {product}
        />
      )} */}
    </>
  );
};

export default dynamic(() => Promise.resolve(ProductCard), { ssr: false });
