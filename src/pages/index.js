import { SidebarContext } from "@context/SidebarContext";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import FormalTrouser from "src/formal-trouser/FormalTrouser";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

//internal import
import Layout from "@layout/Layout";
import Banner from "@components/banner/Banner";
import useGetSetting from "@hooks/useGetSetting";
import CardTwo from "@components/cta-card/CardTwo";
import OfferCard from "@components/offer/OfferCard";
import StickyCart from "@components/cart/StickyCart";
import Loading from "@components/preloader/Loading";
import ProductServices from "@services/ProductServices";
import ProductCard from "@components/product/ProductCard";
import MainCarousel from "@components/carousel/MainCarousel";
import FeatureCategory from "@components/category/FeatureCategory";
import AttributeServices from "@services/AttributeServices";
import CMSkeleton from "@components/preloader/CMSkeleton";
import Testimonials from "@components/Testimonials/Testimonials";
import ClassicShirtCard from "@components/classic-shirt/classicShirtCard";
import ShopByCategory from "@components/ShopByCategory/ShopByCategory";
import WhyChooseUs from "@components/whyChooseUs/WhyChooseUs";
import GiftingGuide from "@components/GiftingGuide/GiftingGuide";
import JewelleryGallery from "@components/jwellery-gallary/JewelleryGallery";

const Home = ({ popularProducts, discountProducts, attributes }) => {
  const router = useRouter();
  const { isLoading, setIsLoading } = useContext(SidebarContext);
  const { loading, error, storeCustomizationSetting } = useGetSetting();

  const [productsToShow, setProductsToShow] = useState(4);
  const [showLoadMore, setShowLoadMore] = useState(true);

  const [discountedProductsToShow, setDiscountedProductsToShow] = useState(4);
  const [showLoadMoreDiscounted, setShowLoadMoreDiscounted] = useState(true);

  const handleLoadMore = () => {
    const nextProducts = productsToShow + 4;
    setProductsToShow(nextProducts);
    if (nextProducts >= popularProducts.length) {
      setShowLoadMore(false);
    }
  };

  const handleLoadMoreDiscounted = () => {
    const nextProducts = discountedProductsToShow + 4;
    setDiscountedProductsToShow(nextProducts);
    if (nextProducts >= discountProducts.length) {
      setShowLoadMoreDiscounted(false);
    }
  };

  AOS.init();
  useEffect(() => {
    if (router.asPath === "/") {
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [router]);

  return (
    <>
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : (
        <Layout>
          <div className="min-h-screen">
            {/* <StickyCart /> */}
            <div className="bg-white">
              <div className="mx-auto py-1">
                <div className="flex w-full">
                  <div className="flex-shrink lg:block w-full">
                    <MainCarousel />
                  </div>
                </div>
              </div>
            </div>

            {/* feature category's */}
            {/* {storeCustomizationSetting?.home?.featured_status && (
              // <div className="bg-gray-100 lg:py-16 py-10"> removed this part with below part
              <div className="bg-white ">
                <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
                  <div className="mb-10 flex justify-center">
                    <div className="text-center w-full lg:w-2/5">
                      <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
                        <CMSkeleton
                          count={1}
                          height={30}
                          loading={loading}
                          data={storeCustomizationSetting?.home?.feature_title}
                        />
                      </h2>
                      <p className="text-base font-sans text-gray-600 leading-6">
                        <CMSkeleton
                          count={4}
                          height={10}
                          error={error}
                          loading={loading}
                          data={
                            storeCustomizationSetting?.home?.feature_description
                          }
                        />
                      </p>
                    </div>
                  </div>

                  <FeatureCategory />
                </div>
              </div>
            )} */}
            {/* "" */}
            {/* popular products */}
            {storeCustomizationSetting?.home?.popular_products_status && (
              <div className="bg-gray-50 py-10">
                <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
                  <div className="mb-10 text-center">
                    <h2 className="font-[lora] font-thin text-[2rem] lg:text-[3.25rem] mb-2">
                      <CMSkeleton
                        count={1}
                        height={30}
                        loading={loading}
                        data={storeCustomizationSetting?.home?.popular_title}
                      />
                    </h2>
                    <p className="w-1/2 mx-auto text-lg font-sans text-gray-600 leading-6">
                      <CMSkeleton
                        count={4}
                        height={10}
                        error={error}
                        loading={loading}
                        data={storeCustomizationSetting?.home?.popular_description}
                      />
                    </p>
                  </div>
                  
                  <div className="w-full">
                    {loading ? (
                      <CMSkeleton
                        count={20}
                        height={20}
                        error={error}
                        loading={loading}
                      />
                    ) : (
                      <>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                          {popularProducts
                            ?.slice(0, productsToShow)
                            .map((product) => (
                              <ProductCard
                                key={product._id}
                                product={product}
                                attributes={attributes}
                              />
                            ))}
                        </div>
                        {showLoadMore && popularProducts.length > 4 && (
                          <div className="flex justify-center mt-8">
                            <button
                              onClick={handleLoadMore}
                              className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-3 rounded-xl transition-all duration-300 font-semibold text-sm sm:text-base transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                              View More
                            </button>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* promotional banner card */}
            {/* {storeCustomizationSetting?.home?.delivery_status && (
              <div className="block mx-auto max-w-screen-2xl">
                <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
                  <div className="lg:p-16 p-6 bg-customPink shadow-sm border rounded-lg">
                    <CardTwo />
                  </div>
                </div>
              </div>
            )} */}

            {/* Classic Plain Shirt */}
            <div className="py-12">
              <h1 className="px-6 font-[lora] text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] text-center mb-8">
                Personal Style Picks
              </h1>
              <ClassicShirtCard />
            </div>
            
            <div className="py-8">
              <ShopByCategory />
            </div>

            <div className="mt-16 hover:cursor-pointer">
              <FormalTrouser />
            </div>
            
            <div className="py-12">
              <GiftingGuide />
            </div>
            
            <div>
              <WhyChooseUs />
            </div>
            
            <div>
              <JewelleryGallery />
            </div>

            {/* discounted products */}
            {storeCustomizationSetting?.home?.discount_product_status &&
              discountProducts?.length > 0 && (
                <div
                  id="discount"
                  className="bg-gray-50 lg:py-16 py-10"
                >
                  <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 text-center">
                      <h2 className="font-[lora] text-[1.75rem] md:text-[2.25rem] lg:text-[3rem]">
                        <CMSkeleton
                          count={1}
                          height={30}
                          loading={loading}
                          data={
                            storeCustomizationSetting?.home
                              ?.latest_discount_title
                          }
                        />
                      </h2>
                    </div>
                    
                    <div className="w-full">
                      {loading ? (
                        <CMSkeleton
                          count={20}
                          height={20}
                          error={error}
                          loading={loading}
                        />
                      ) : (
                        <>
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                            {discountProducts
                              ?.slice(0, discountedProductsToShow)
                              .map((product) => (
                                <ProductCard
                                  key={product._id}
                                  product={product}
                                  attributes={attributes}
                                />
                              ))}
                          </div>
                          {showLoadMoreDiscounted &&
                            discountProducts.length > 4 && (
                              <div className="flex justify-center mt-8">
                                <button
                                  onClick={handleLoadMoreDiscounted}
                                  className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-3 rounded-xl transition-all duration-300 font-semibold text-sm sm:text-base transform hover:scale-105 shadow-lg hover:shadow-xl"
                                >
                                  View More
                                </button>
                              </div>
                            )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}
          </div>
          <div className="py-12">
            <Testimonials />
          </div>
        </Layout>
      )}
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { cookies } = context.req;
  const { query, _id } = context.query;

  const [data, attributes] = await Promise.all([
    ProductServices.getShowingStoreProducts({
      category: _id ? _id : "",
      title: query ? query : "",
    }),

    AttributeServices.getShowingAttributes(),
  ]);

  return {
    props: {
      attributes,
      cookies: cookies,
      popularProducts: data.popularProducts,
      discountProducts: data.discountedProducts,
    },
  };
};

export default Home;
