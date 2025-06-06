"use client";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useRef } from "react";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller, Navigation, Pagination } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";

//internal import
import { SidebarContext } from "@context/SidebarContext";
import CategoryServices from "@services/CategoryServices";
import useUtilsFunction from "@hooks/useUtilsFunction";
import Loading from "@components/preloader/Loading";

const CategoryCarousel = () => {
  const router = useRouter();

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const { showingTranslateValue } = useUtilsFunction();
  const { isLoading, setIsLoading } = useContext(SidebarContext);

  const {
    data,
    error,
    isLoading: loading,
  } = useQuery({
    queryKey: ["category"],
    queryFn: async () => await CategoryServices.getShowingCategory(),
  });
// console.log("category data",data);
  const handleCategoryClick = (id, category) => {
    const category_name = showingTranslateValue(category)
      ?.toLowerCase()
      .replace(/[^A-Z0-9]+/gi, "-");

    router.push(`/search?category=${category_name}&_id=${id}`);
    setIsLoading(!isLoading);
  };

  return (
    <>
      <Swiper
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        spaceBetween={8}
        navigation={true}
        allowTouchMove={false}
        loop={true}
        breakpoints={{
          // when window width is >= 640px
          375: {
            width: 375,
            slidesPerView: 3,
          },
          // when window width is >= 768px
          414: {
            width: 414,
            slidesPerView: 5,
          },
          // when window width is >= 768px
          660: {
            width: 660,
            slidesPerView: 4,
          },

          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 6,
          },

          // when window width is >= 768px
          991: {
            width: 991,
            slidesPerView: 8,
          },

          // when window width is >= 768px
          1140: {
            width: 1140,
            slidesPerView: 9,
          },
          1680: {
            width: 1680,
            slidesPerView: 10,
          },
          1920: {
            width: 1920,
            slidesPerView: 10,
          },
        }}
        modules={[Autoplay, Navigation, Pagination, Controller]}
        className="mySwiper category-slider my-10"
      >
        {loading ? (
          <Loading loading={loading} />
        ) : error ? (
          <p className="flex justify-center align-middle items-center m-auto text-xl text-red-500">
            {error?.response?.data?.message || error?.message}
          </p>
        ) : (
          data[0]?.children?.map((category, i) => (
            <SwiperSlide key={i + 1} className="group">
              <div
                onClick={() =>
                  handleCategoryClick(category?._id, category.name)
                }
                className="text-center cursor-pointer p-3 rounded-lg"
              >
                <div className="bg-white mx-auto w-full h-full rounded-full shadow-md">
                  <div className="relative rounded-xl">
                    <Image
                      src={
                        category?.icon ||
                        "https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
                      }
                      alt="category"
                      width={100}
                      height={100}
                      className="object-cover w-full h-full rounded-2xl"
                    />
                  </div>
                </div>
                <h3 className="text-xs text-gray-900 font-bold mt-2 font-serif group-hover:text-customPink">
                  {showingTranslateValue(category?.name)}
                </h3>
              </div>
            </SwiperSlide>
          ))
        )}

        <button ref={prevRef} className="prev">
          <IoChevronBackOutline />
        </button>
        <button ref={nextRef} className="next">
          <IoChevronForward />
        </button>
      </Swiper>
    </>
  );
};

export default React.memo(CategoryCarousel);
