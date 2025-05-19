"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//internal import

import useGetSetting from "@hooks/useGetSetting";
import useUtilsFunction from "@hooks/useUtilsFunction";
import JewelleryQueryForm from "@components/form/JewelleryQueryForm";
import { TbBrandGoogleBigQuery } from "react-icons/tb";
import CategoryCarousel from "./CategoryCarousel";
const MainCarousel = () => {
  const { storeCustomizationSetting } = useGetSetting();
  const { showingTranslateValue, showingUrl, showingImage } =
    useUtilsFunction();
  const [displayQueryForm, setDisplayQueryForm] = React.useState(false);
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  const sliderData = [
    {
      id: 1,
      url: showingUrl(storeCustomizationSetting?.slider?.first_link),
      image:
        showingImage(storeCustomizationSetting?.slider?.first_img) ||
        "https://as2.ftcdn.net/jpg/05/04/18/13/1000_F_504181319_z6YLPQfDbwhzW0xsceHczZ3lsEFppefV.webp",
    },
    {
      id: 2,
      url: showingUrl(storeCustomizationSetting?.slider?.second_link),
      image:
        showingImage(storeCustomizationSetting?.slider?.second_img) ||
        "https://as2.ftcdn.net/jpg/05/04/18/13/1000_F_504181319_z6YLPQfDbwhzW0xsceHczZ3lsEFppefV.webp",
    },
    {
      id: 3,
      url: showingUrl(storeCustomizationSetting?.slider?.third_link),
      image:
        showingImage(storeCustomizationSetting?.slider?.third_img) ||
        "https://as2.ftcdn.net/jpg/05/04/18/13/1000_F_504181319_z6YLPQfDbwhzW0xsceHczZ3lsEFppefV.webp",
    },
    {
      id: 4,
      url: showingUrl(storeCustomizationSetting?.slider?.four_link),
      image:
        showingImage(storeCustomizationSetting?.slider?.four_img) ||
        "https://as2.ftcdn.net/jpg/05/04/18/13/1000_F_504181319_z6YLPQfDbwhzW0xsceHczZ3lsEFppefV.webp",
    },
    {
      id: 5,
      url: showingUrl(storeCustomizationSetting?.slider?.five_link),
      image:
        showingImage(storeCustomizationSetting?.slider?.five_img) ||
        "https://as2.ftcdn.net/jpg/05/04/18/13/1000_F_504181319_z6YLPQfDbwhzW0xsceHczZ3lsEFppefV.webp",
    },
  ];

  const ref = useRef(null);
  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < 1280) {
        setDisplayQueryForm(false);
        setIsSmallScreen(true);
      } else {
        setDisplayQueryForm(true);
        setIsSmallScreen(false);
        if (ref.current) {
          ref.current.style.right = "46px";
          ref.current.style.bottom = "0px";
        }
      }
    };

    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [ref]);

  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          hideOnClick: true,
          dynamicBullets: true,
        }}
        navigation={{
          enabled: window?.innerWidth >= 640,
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {sliderData?.map((item, i) => (
          <SwiperSlide
            className="w-full   relative overflow-hidden"
            key={i + 1}
          >
            {/* Updated image container with better aspect ratio handling */}
            <div className="relative w-full   aspect-[16/9] sm:aspect-[16/8] md:aspect-[16/7] lg:aspect-[16/5]">
              <Image
                src={item.image || "/slider/slider-1.jpg"}
                alt={item.title || "Slider Image"}
                fill
                className="object-cover object-center h-full" // Added object-center for better positioning
                priority
                sizes="100vw"
                quality={85}
                loading="eager"
              />
            </div>

            {/* Updated overlay positioning */}
            <div className="absolute inset-0 z-10 flex flex-col justify-center bg-black/20">
              <div className="px-4 sm:px-10 md:px-16 w-full sm:w-10/12 md:w-8/12 lg:w-7/12">
                <h1 className="mb-2 font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
                  {item.title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-white font-sans line-clamp-2 sm:line-clamp-none drop-shadow-lg">
                  {item.info}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="xl:w-[62%] w-full">
        <CategoryCarousel />
      </div>
      {displayQueryForm ? (
        <div>
          <div
            ref={ref}
            className={`xl:w-[35%] bg-white mx-auto w-full lg:absolute p-9 xl:p-0  ${
              isSmallScreen ? "absolute top-0" : "absolute top-10"
            } xl:bg-transparent lg:flex-row items-center xl:right-[46px]  z-10 shadow-2xl `}
          >
            <div className="xl:w-full flex justify-center items-center pt-2">
              <JewelleryQueryForm setDisplayQueryForm={setDisplayQueryForm} />
            </div>
          </div>
        </div>
      ) : (
        <div
          className="flex justify-center items-center w-fit py-[5px] px-[10px] rounded-[44px] bg-[#ff007a] absolute right-[5%] top-[2%] md:top-[53%]  md:bottom-[38%] z-10 hover:cursor-pointer"
          style={{
            boxShadow:
              "inset 3px 3px 3px #ffffff63, inset -3px -3px 3px #00000029",
          }}
          onClick={() => {
            setDisplayQueryForm(true);
          }}
        >
          <TbBrandGoogleBigQuery className="text-[#ffffff] lg:text-[40px] text-[20px] " />
          <p
            className=""
            style={{
              fontWeight: "600",
              color: "white",
              marginLeft: "10px",
              marginBottom: "0px",
            }}
          >
            Query Form
          </p>
        </div>
      )}
    </div>
  );
};

export default MainCarousel;
