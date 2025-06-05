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

  const [isNavigationReady, setIsNavigationReady] = useState(false);
  const [imageErrors, setImageErrors] = useState(new Set());

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

  // Initialize navigation when swiper is ready
  useEffect(() => {
    if (swiperRef.current?.swiper && !isNavigationReady) {
      const swiper = swiperRef.current.swiper;

      // Ensure navigation is available and params exist
      if (swiper.navigation && prevRef.current && nextRef.current) {
        // Initialize navigation params if they don't exist
        if (!swiper.params.navigation) {
          swiper.params.navigation = {};
        }

        // Set navigation elements
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;

        // Initialize and update navigation
        swiper.navigation.init();
        swiper.navigation.update();

        setIsNavigationReady(true);
      }
    }
  }, [categories, isNavigationReady]);

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

  // Get responsive breakpoints
  const getBreakpoints = () => ({
    320: { slidesPerView: 2, spaceBetween: 10 },
    375: { slidesPerView: 3, spaceBetween: 8 },
    414: { slidesPerView: 4, spaceBetween: 8 },
    660: { slidesPerView: 5, spaceBetween: 8 },
    768: { slidesPerView: 6, spaceBetween: 8 },
    991: { slidesPerView: 8, spaceBetween: 10 },
    1140: { slidesPerView: 9, spaceBetween: 12 },
    1680: { slidesPerView: 10, spaceBetween: 12 },
    1920: { slidesPerView: 12, spaceBetween: 15 },
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

  // No data state
  const categoryData = categories?.[0]?.children;
  if (!categoryData?.length) {
    return (
      <div className="my-10 flex justify-center">
        <p className="text-gray-500 text-center">No categories available</p>
      </div>
    );
  }

  const hasMultipleSlides = categoryData.length > 3;

  return (
    <div className="relative my-10 px-2 sm:px-4">
      <Swiper
        ref={swiperRef}
        onSwiper={(swiper) => {
          // Delay initialization to ensure DOM is ready
          setTimeout(() => {
            if (prevRef.current && nextRef.current && swiper.navigation) {
              // Ensure navigation params exist
              if (!swiper.params.navigation) {
                swiper.params.navigation = {};
              }

              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
              setIsNavigationReady(true);
            }
          }, 100);
        }}
        modules={[Autoplay, Navigation]}
        spaceBetween={8}
        slidesPerView="auto"
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
          enabled: true,
        }}
        autoplay={
          hasMultipleSlides
            ? {
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        loop={hasMultipleSlides}
        grabCursor={true}
        breakpoints={getBreakpoints()}
        className="category-carousel"
        watchOverflow={true}
      >
        {categoryData.map((category) => (
          <SwiperSlide key={category._id} className="!w-auto">
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

      {/* Navigation Buttons - Only show if there are multiple slides */}
      {hasMultipleSlides && (
        <>
          <button
            ref={prevRef}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl rounded-full p-2 sm:p-3 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed group"
            aria-label="Previous categories"
          >
            <IoChevronBackOutline className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 group-hover:text-customPink transition-colors" />
          </button>

          <button
            ref={nextRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl rounded-full p-2 sm:p-3 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed group"
            aria-label="Next categories"
          >
            <IoChevronForward className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 group-hover:text-customPink transition-colors" />
          </button>
        </>
      )}
    </div>
  );
};

export default React.memo(CategoryCarousel);
