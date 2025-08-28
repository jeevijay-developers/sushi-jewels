"use client";
import Image from "next/image";
import { useRouter } from "next/router";
import React, {
  useContext,
  useRef,
  useEffect,
  useState,
  useCallback,
} from "react";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
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
  const swiperRef = useRef(null);

  const [imageErrors, setImageErrors] = useState(new Set());
  const [swiperInstance, setSwiperInstance] = useState(null);

  // Manual navigation handlers
  const handlePrevClick = useCallback(() => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  }, [swiperInstance]);

  const handleNextClick = useCallback(() => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  }, [swiperInstance]);

  const { showingTranslateValue } = useUtilsFunction();
  const { isLoading, setIsLoading } = useContext(SidebarContext);

  const {
    data: categories,
    error,
    isLoading: loading,
  } = useQuery({
    queryKey: ["category"],
    queryFn: CategoryServices.getShowingCategory,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
  });

  // Initialize navigation after swiper is ready
  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      // Force navigation initialization with safety checks
      try {
        if (swiperInstance.navigation) {
          swiperInstance.params.navigation.prevEl = prevRef.current;
          swiperInstance.params.navigation.nextEl = nextRef.current;
          swiperInstance.navigation.init();
          swiperInstance.navigation.update();
        }
      } catch (error) {
        console.warn('Navigation initialization failed:', error);
      }
    }
  }, [swiperInstance]);

  // Handle category click with proper error handling
  const handleCategoryClick = useCallback(
    (id, categoryName) => {
      if (!id || !categoryName) return;

      try {
        const formattedName = showingTranslateValue(categoryName)
          ?.toLowerCase()
          .replace(/[^A-Z0-9]+/gi, "-");

        router.push(`/search?category=${formattedName}&_id=${id}`);
        setIsLoading(true);
      } catch (error) {
        console.error("Error navigating to category:", error);
      }
    },
    [router, showingTranslateValue, setIsLoading]
  );

  // Handle image loading errors
  const handleImageError = useCallback((categoryId) => {
    setImageErrors((prev) => new Set([...prev, categoryId]));
  }, []);

  // Get responsive breakpoints - Reduced slidesPerView for desktop to ensure scrolling
  const getBreakpoints = () => ({
    320: { slidesPerView: 2, spaceBetween: 10 },
    375: { slidesPerView: 3, spaceBetween: 8 },
    414: { slidesPerView: 4, spaceBetween: 8 },
    660: { slidesPerView: 5, spaceBetween: 8 },
    768: { slidesPerView: 6, spaceBetween: 8 },
    991: { slidesPerView: 6, spaceBetween: 10 }, // Reduced from 8
    1140: { slidesPerView: 7, spaceBetween: 12 }, // Reduced from 9
    1680: { slidesPerView: 8, spaceBetween: 12 }, // Reduced from 10
    1920: { slidesPerView: 9, spaceBetween: 15 }, // Reduced from 12
  });

  // Loading state
  if (loading) {
    return (
      <div className="my-10">
        <Loading loading={loading} />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="my-10 flex justify-center">
        <p className="text-red-500 text-center">
          Failed to load categories. Please try again later.
        </p>
      </div>
    );
  }

  // Get the correct data structure
  const categoryData = categories?.[0]?.children || [];
  
  // console.log("Category data:", categoryData); // Debug log
  // console.log("Number of categories:", categoryData.length); // Debug log

  // No data state
  if (!categoryData?.length) {
    return (
      <div className="my-10 flex justify-center">
        <p className="text-gray-500 text-center">No categories available</p>
      </div>
    );
  }

  return (
    <div className="w-full relative my-10 px-2 sm:px-4">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Navigation]}
        spaceBetween={8}
        slidesPerView={2} // Default for small screens
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
          enabled: true, // Always enabled
        }}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
          // Delay navigation setup to ensure DOM is ready
          setTimeout(() => {
            if (prevRef.current && nextRef.current && swiper) {
              try {
                // Ensure navigation params exist
                if (!swiper.params.navigation) {
                  swiper.params.navigation = {};
                }
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                
                // Initialize navigation if it exists
                if (swiper.navigation) {
                  swiper.navigation.init();
                  swiper.navigation.update();
                }
              } catch (error) {
                console.warn('Swiper navigation setup failed:', error);
              }
            }
          }, 100);
        }}
        onBeforeInit={(swiper) => {
          try {
            if (typeof swiper.params.navigation !== 'boolean') {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          } catch (error) {
            console.warn('onBeforeInit navigation setup failed:', error);
          }
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={categoryData.length > 3} // Enable loop if we have enough items
        grabCursor={true}
        breakpoints={getBreakpoints()}
        className="category-carousel"
        watchOverflow={false} // Disable watchOverflow to always show navigation
        allowTouchMove={true}
        simulateTouch={true}
      >
        {categoryData.map((category, index) => (
          <SwiperSlide key={category._id || index} className="!w-auto">
            <div
              onClick={() => handleCategoryClick(category._id, category.name)}
              className="group cursor-pointer p-2 sm:p-3 transition-transform duration-200 hover:scale-105"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleCategoryClick(category._id, category.name);
                }
              }}
            >
              <div className="bg-white mx-auto w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full shadow-md transition-shadow duration-200 group-hover:shadow-lg">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={
                      imageErrors.has(category._id)
                        ? "https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
                        : category?.icon ||
                          "https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
                    }
                    alt={`${showingTranslateValue(category?.name)} category`}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full transition-transform duration-200 group-hover:scale-110"
                    onError={() => handleImageError(category._id)}
                    loading="lazy"
                  />
                </div>
              </div>
              <h3 className="text-xs sm:text-sm text-gray-900 font-semibold mt-2 text-center font-serif group-hover:text-customPink transition-colors duration-200 line-clamp-2">
                {showingTranslateValue(category?.name)}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons - Always visible with manual handlers */}
      <button
        ref={prevRef}
        onClick={handlePrevClick}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl rounded-full p-2 sm:p-3 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed group swiper-button-prev-custom"
        aria-label="Previous categories"
      >
        <IoChevronBackOutline className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 group-hover:text-customPink transition-colors" />
      </button>

      <button
        ref={nextRef}
        onClick={handleNextClick}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl rounded-full p-2 sm:p-3 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed group swiper-button-next-custom"
        aria-label="Next categories"
      >
        <IoChevronForward className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 group-hover:text-customPink transition-colors" />
      </button>
    </div>
  );
};

export default React.memo(CategoryCarousel);