import { useContext, useState, Fragment } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { IoSearchOutline } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import useTranslation from "next-translate/useTranslation";
// import "@blueprintjs/core/lib/css/blueprint.css";
// import "@blueprintjs/icons/lib/css/blueprint-icons.css";

//internal import
import useGetSetting from "@hooks/useGetSetting";
import { handleLogEvent } from "src/lib/analytics";
import CartDrawer from "@components/drawer/CartDrawer";
import { SidebarContext } from "@context/SidebarContext";
import useUtilsFunction from "@hooks/useUtilsFunction";
import Category from "@components/category/Category";
import { FiBell } from "react-icons/fi";
import CategoryDrawer from "@components/drawer/CategoryDrawer";

const Navbar = () => {
  const { t } = useTranslation("common");
  const [searchText, setSearchText] = useState("");
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const { toggleCategoryDrawer } = useContext(SidebarContext);
  const router = useRouter();
  const { showingTranslateValue } = useUtilsFunction();

  const { storeCustomizationSetting } = useGetSetting();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchText) {
      router.push(`/search?query=${searchText}`, null, { scroll: false });
      setSearchText("");
      handleLogEvent("search", `searched ${searchText}`);
    } else {
      router.push(`/ `, null, { scroll: false });
      setSearchText("");
    }
  };

  return (
    <>
      <CartDrawer />
      <div className="top-0 z-40">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10 relative">
          <div className="flex  flex-col items-center py-1">
            {/* Top Section - Logo and Icons */}
            <div className="w-full flex items-center justify-between">
              {/* Logo Section - Left */}
              {/* this code enables drawer */}
              <CategoryDrawer className="w-6 h-6 drop-shadow-xl" />
              <div className="d-flex lg:hidden">
                <button
                  aria-label="Bar"
                  onClick={toggleCategoryDrawer}
                  className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none"
                >
                  <span className="lg:hidden z-30 text-xl text-black">
                    <TiThMenu className="w-6 h-6 " />
                  </span>
                </button>
              </div>
              <div className="w-20 sm:w-28 items-start justify-start hidden lg:flex cursor-pointer my-2" onClick={() => router.push("/")}>
                <img
                  width={70}
                  height={70}
                  className=" "
                  src="/logo/WhatsApp Image 2025-05-10 at 4.49.19 PM.jpeg"
                  alt="logo"
                />
              </div>
              <div className="w-[50%]">
                <div className="w-full flex flex-col justify-center flex-shrink-0 relative z-30">
                  <div className="flex flex-col mx-auto w-full border border-gray-200 rounded-xl">
                    <form
                      onSubmit={handleSubmit}
                      className="relative pr-12 md:pr-14 bg-white overflow-hidden shadow-sm rounded-md w-full"
                    >
                      <label className="flex items-center py-0.5">
                        <input
                          onChange={(e) => setSearchText(e.target.value)}
                          value={searchText}
                          className="form-input w-full pl-5 appearance-none transition ease-in-out  text-input text-sm font-sans rounded-md min-h-10 h-10 duration-200  focus:ring-0 outline-none  focus:outline-none placeholder-gray-500 placeholder-opacity-75"
                          placeholder={t("search-placeholder")}
                        />
                      </label>
                      <button
                        aria-label="Search"
                        type="submit"
                        className="outline-none text-xl text-gray-400 absolute top-0 right-0 end-0 w-12 md:w-14 h-full flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none"
                      >
                        <IoSearchOutline />
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              {/* <MobileFooter/> */}
              {/* Icons Section - Right */}
              <div className="flex items-center space-x-3 lg:space-x-10  justify-end">
                <button
                  className="text-black text-2xl font-bold"
                  aria-label="Alert"
                >
                  <FiBell className="w-7 h-7" />
                </button>
                {/* <button
                  aria-label="Total"
                  onClick={toggleCartDrawer}
                  className="relative text-black text-2xl font-bold"
                >
                  <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                    {totalItems}
                  </span>
                  <FiShoppingCart className="w-6 h-6 " />
                </button> */}
                {/* <button
                  className="text-black text-2xl hover:cursor-pointer font-bold hidden lg:block"
                  aria-label="Login"
                >
                  {userInfo?.image ? (
                    <Link
                      href="/user/dashboard"
                      className="relative top-1 w-7 h-7"
                    >
                      <Image
                        width={29}
                        height={29}
                        src={userInfo?.image}
                        alt="user"
                        className="bg-white rounded-full"
                      />
                    </Link>
                  ) : userInfo?.name ? (
                    <Link
                      href="/user/dashboard"
                      className="leading-none font-bold font-serif block"
                    >
                      {userInfo?.name[0]}
                    </Link>
                  ) : (
                    <Link href="/auth/login">
                      <FaRegUser className="w-7 h-7 " />
                    </Link>
                  )}
                </button> */}
              </div>
            </div>
          </div>
          {/* Navigation Items - Below Logo */}
        </div>
        {/* Navigation Items */}
        <div className="hidden lg:flex items-center justify-center py-3 absolute z-[41] bg-transparent w-full space-x-6 text-black/90 hover:bg-white transition-colors duration-500 ease-in-out mx-auto">
          <Link
            href="/"
            className=" font-montserrat relative text-lg font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full "
          >
            {showingTranslateValue(storeCustomizationSetting?.navbar?.home) ||
              "Home"}
          </Link>
          {storeCustomizationSetting?.navbar?.about_menu_status && (
            <Link
              href="/about-us"
              className="font-montserrat relative text-lg font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
            >
              {showingTranslateValue(
                storeCustomizationSetting?.navbar?.about_us
              )}
            </Link>
          )}
          {storeCustomizationSetting?.navbar?.categories_menu_status && (
            <div 
              className="relative group"
              onMouseEnter={() => setIsCategoriesOpen(true)}
              onMouseLeave={() => setIsCategoriesOpen(false)}
            >
              <button className="font-montserrat group inline-flex items-center text-lg font-medium focus:outline-none  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
                <span>
                  {showingTranslateValue(
                    storeCustomizationSetting?.navbar?.categories
                  )}
                </span>
                <ChevronDownIcon
                  className={`ml-1 h-3 w-3 transition-transform duration-200 ${
                    isCategoriesOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              <Transition
                show={isCategoriesOpen}
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <div className="absolute z-10 -ml-1 mt-1 transform w-screen max-w-xs c-h-65vh bg-white">
                  <div className="font-montserrat rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-y-scroll flex-grow scrollbar-hide w-full h-full">
                    <Category />
                  </div>
                </div>
              </Transition>
            </div>
          )}
          {storeCustomizationSetting?.navbar?.contact_menu_status && (
            <Link
              href="/contact-us"
              className="font-montserrat relative text-lg font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full "
            >
              {showingTranslateValue(
                storeCustomizationSetting?.navbar?.contact_us
              )}
            </Link>
          )}
          {storeCustomizationSetting?.navbar?.privacy_policy_status && (
            <Link
              href="/privacy-policy"
              className="font-montserrat relative text-lg font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
            >
              {showingTranslateValue(
                storeCustomizationSetting?.navbar?.privacy_policy
              )}
            </Link>
          )}
          {storeCustomizationSetting?.navbar?.term_and_condition_status && (
            <Link
              href="/terms-and-conditions"
              className="font-montserrat relative text-lg font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
            >
              {showingTranslateValue(
                storeCustomizationSetting?.navbar?.term_and_condition
              )}
            </Link>
          )}
                    
        </div>
      </div>
    </>
  );
};
export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
