import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import colorLogo from "../../assets/hungry-guest-green.png";
import colorLogo1 from "../../assets/hungry-guest-yellow.png";
import { Icon } from "@iconify/react";
import "./Navbar.css";

import homeMegaImg from "../../assets/SliderImage/slider.jpg";

import { DarkModeContext } from "../../components/DarkModeContext/DarkModeContext";
import SideBar from "./Sidebar";
import BrandButton_2 from "../../components/BrandButton/BrandButton_2";
import BrandButton from "../../components/BrandButton/BrandButton";
import HomeMenuItem from "./HomeMenuItem/HomeMenuItem";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [menuDropdownOpen, setMenuDropdownOpen] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { darkMode, isBangla } = useContext(DarkModeContext);

  // sub next menu state
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);

  const [bloggridDropdownOpen, setBloggridDropdownOpen] = useState(false);

  //navbar color change effect
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //for pages
  const togglePagesDropdown = () => setPagesDropdownOpen(!pagesDropdownOpen);
  const pagesDropdownClose = () => setPagesDropdownOpen(false);

  //for clinics
  const toggleMenuDropdown = () => setMenuDropdownOpen(!menuDropdownOpen);
  const menuDropdownClose = () => setMenuDropdownOpen(false);

  //for blog
  const toggleBlogDropdown = () => setBlogDropdownOpen(!blogDropdownOpen);
  const blogDropdownClose = () => setBlogDropdownOpen(false);

  //for search button icon
  const handleSearchOpen = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const handleSearchClosed = () => setIsSearchOpen(false);

  //sub menu toggle function

  //services menu
  const toggleServicesDropdown = () =>
    setServicesDropdownOpen(!servicesDropdownOpen);
  const servicesDropdownClose = () => setServicesDropdownOpen(false);
  //shop menu
  const toggleShopDropdown = () => setShopDropdownOpen(!shopDropdownOpen);
  const shopDropdownClose = () => setShopDropdownOpen(false);

  //sub menu for blog
  const toggleBloggridDropdown = () =>
    setBloggridDropdownOpen(!bloggridDropdownOpen);
  const bloggridDropdownClose = () => setBloggridDropdownOpen(false);

  const menuItems = (
    <>
      {/*................ home dropdown menu start.............*/}
      <li
        className={`py-7 ${
          location.pathname === "/" ? "border-b-2 border-primary" : ""
        }`}
      >
        <Link
          to="/"
          className={`font-bold  ${
            scrolled
              ? `${
                  darkMode
                    ? "text-white hover:text-brand"
                    : "hover:text-primary  text-brand"
                }`
              : "text-regular hover:text-primary"
          }`}
        >
          <div className="flex group cursor-pointer items-center  ">
            <span>{isBangla ? "হোম" : "Home"}</span>
          </div>
        </Link>
      </li>

      {/*................ pages dropdown menu start   .............*/}
      <li
        className={`font-bold py-7 cursor-pointer ${
          scrolled
            ? `${
                darkMode
                  ? "text-white hover:text-brand"
                  : "hover:text-primary  text-brand"
              }`
            : "text-regular hover:text-primary"
        }`}
        onMouseEnter={togglePagesDropdown}
        onMouseLeave={pagesDropdownClose}
      >
        <div
          className="flex group cursor-pointer items-center"
          onClick={togglePagesDropdown}
        >
          <span onClick={() => setPagesDropdownOpen(false)}>
            {isBangla ? "পৃষ্ঠা" : "Pages"}
          </span>
          <Icon
            icon="iconamoon:arrow-down-2-bold"
            className="group-hover:translate-y-1 duration-300"
            width="25"
          />
        </div>

        {pagesDropdownOpen && (
          <ul
            className={`dropdown-menu  py-4 mt-7 absolute   block z-50 duration-300 ease-in-out divide-y-2 ${
              darkMode ? "bg-gradient-backdrop" : "bg-white"
            }`}
          >
            {/* Landing pages  */}
            <li onClick={() => setIsMenuOpen(false)}>
              <Link
                title="Landing Page"
                to="/landing"
                className={`block pl-4 pr-24 pb-3 text-lg  hover:translate-x-1 duration-300 ${
                  darkMode
                    ? "text-white hover:text-primary"
                    : "text-brand hover:text-primary"
                }`}
                onClick={() => setPagesDropdownOpen(false)}
              >
                {isBangla ? "অবতরন পৃষ্ঠা" : "Landing Page"}
              </Link>
            </li>

            {/* about page  */}
            <li onClick={() => setIsMenuOpen(false)}>
              <Link
                title="about us"
                to="/about"
                className={`block pl-4 pr-24 py-3 text-lg  hover:translate-x-1 duration-300 ${
                  darkMode
                    ? "text-white hover:text-primary"
                    : "text-brand hover:text-primary"
                }`}
                onClick={() => setPagesDropdownOpen(false)}
              >
                {isBangla ? "আমাদের সম্পর্কে" : " About us"}
              </Link>
            </li>

            {/* our team  */}
            <li onClick={() => setIsMenuOpen(false)}>
              <Link
                title="Our Team"
                to="/team"
                className={`block pl-4 pr-24 py-3 text-lg  hover:translate-x-1 duration-300 ${
                  darkMode
                    ? "text-white hover:text-primary"
                    : "text-brand hover:text-primary"
                }`}
                onClick={() => setPagesDropdownOpen(false)}
              >
                {isBangla ? "সদস্য" : "Our Team"}
              </Link>
            </li>

            {/*............... our services sub menu .................... */}
            <li
              onMouseEnter={toggleServicesDropdown}
              onMouseLeave={servicesDropdownClose}
              onClick={toggleServicesDropdown}
            >
              <div
                className={`flex  justify-between items-center pl-4  py-3 text-lg  cursor-pointer group ${
                  darkMode
                    ? "text-white hover:text-primary"
                    : "text-brand hover:text-primary"
                }`}
              >
                <span
                  className="hover:translate-x-1 duration-300"
                  onClick={() => setServicesDropdownOpen(false)}
                >
                  {isBangla ? "সেবাসমূহ" : "Our Services"}
                </span>
                <Icon
                  icon="ic:round-play-arrow"
                  className="transform rotate-0 group-hover:rotate-90 transition-all duration-300 mr-3"
                  width="24"
                />
              </div>

              {servicesDropdownOpen && (
                <ul
                  className={`dropdown-menu  py-4 absolute -right-28  lg:-right-44  z-50 shadow-lg duration-300 ease-in-out divide-y-2 ${
                    darkMode ? "bg-gradient-backdrop" : "bg-white "
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <li>
                    <Link
                      title="single service"
                      to="/singleservice"
                      className={`block px-10 pb-3 text-lg  hover:translate-x-1 duration-300 ${
                        darkMode
                          ? "text-white hover:text-primary"
                          : "text-brand hover:text-primary"
                      }`}
                    >
                      {isBangla ? "একটিসেবা" : "Single Service"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="service list"
                      to="/servicelist"
                      className={`block px-10 py-3 text-lg  hover:translate-x-1 duration-300 ${
                        darkMode
                          ? "text-white hover:text-primary"
                          : "text-brand hover:text-primary"
                      }`}
                    >
                      {isBangla ? "সেবা তালিকা" : "Service List"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="service grid"
                      to="/servicegrid"
                      className={`block px-10 pt-3 text-lg  hover:translate-x-1 duration-300 ${
                        darkMode
                          ? "text-white hover:text-primary"
                          : "text-brand hover:text-primary"
                      }`}
                    >
                      {isBangla ? "সেবাগ্রিড" : "Service Grid"}
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/*............... shop sub menu .................... */}
            <li
              onMouseEnter={toggleShopDropdown}
              onMouseLeave={shopDropdownClose}
              onClick={toggleShopDropdown}
            >
              <div
                className={`flex  justify-between items-center pl-4  py-3 text-lg cursor-pointer group ${
                  darkMode
                    ? "text-white hover:text-primary"
                    : "text-brand hover:text-primary "
                }`}
              >
                <span
                  className="hover:translate-x-1 duration-300"
                  onClick={() => setShopDropdownOpen(false)}
                >
                  {isBangla ? "দোকান" : "Shop"}
                </span>
                <Icon
                  icon="ic:round-play-arrow"
                  className="transform rotate-0 group-hover:rotate-90 transition-all duration-300 mr-3"
                  width="24"
                />
              </div>

              {shopDropdownOpen && (
                <ul
                  className={`dropdown-menu  py-4 absolute -right-28 lg:-right-44  z-50 shadow-lg duration-300 ease-in-out divide-y-2 ${
                    darkMode ? "bg-gradient-backdrop" : "bg-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <li>
                    <Link
                      title="Cart Page"
                      to="/cartpage"
                      className={`block px-10 pb-3 text-lg  hover:translate-x-1 duration-300 ${
                        darkMode
                          ? "text-white hover:text-primary"
                          : "text-brand hover:text-primary"
                      }`}
                    >
                      {isBangla ? "কার্ড পৃষ্ঠা" : "Cart Page"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Checkout Page"
                      to="/checkout"
                      className={`block px-10 py-3 text-lg  hover:translate-x-1 duration-300 ${
                        darkMode
                          ? "text-white hover:text-primary"
                          : "text-brand hover:text-primary"
                      }`}
                    >
                      {isBangla ? "চেকআউট পৃষ্ঠা" : "Checkout Page"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="My Account"
                      to="/myaccount"
                      className={`block px-10 pt-3 text-lg  hover:translate-x-1 duration-300 ${
                        darkMode
                          ? "text-white hover:text-primary"
                          : "text-brand hover:text-primary"
                      }`}
                    >
                      {isBangla ? "আমার অ্যাকাউন্ট" : "My Account"}
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* FAQ  */}
            <li>
              <Link
                title="FAQ"
                to="/faq"
                className={`block pl-4 pt-3 text-lg  hover:translate-x-1 duration-300 ${
                  darkMode
                    ? "text-white hover:text-primary"
                    : "text-brand hover:text-primary"
                }`}
              >
                {isBangla ? "প্রশ্ন জিজ্ঞাসা" : "FAQs"}
              </Link>
            </li>
          </ul>
        )}
      </li>

      {/*............... menu dropdown start .................*/}
      <li
        className={`font-bold py-7 cursor-pointer ${
          scrolled
            ? `${
                darkMode
                  ? "text-white hover:text-brand"
                  : "hover:text-primary  text-brand"
              }`
            : "text-regular hover:text-primary"
        }`}
        onMouseEnter={toggleMenuDropdown}
        onMouseLeave={menuDropdownClose}
      >
        <div
          className="flex group cursor-pointer items-center "
          onClick={toggleMenuDropdown}
        >
          <span onClick={() => setMenuDropdownOpen(false)}>
            {isBangla ? "তালিকা" : "Menu"}
          </span>
          <Icon
            icon="iconamoon:arrow-down-2-bold"
            className="group-hover:translate-y-1 duration-300"
            width="25"
          />
        </div>

        {menuDropdownOpen && (
          <ul
            className={`dropdown-menu md:grid grid-cols-6 w-11/12 lg:w-3/4 absolute lg:left-[12%]  z-50 duration-300 group-hover:translate-y-1 ease-in-out overflow-y-scroll mt-7 ${
              darkMode
                ? "bg-gradient-backdrop text-white"
                : "bg-white text-primary"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            {/* home mega image  */}
            <div className="col-span-2">
              <img src={homeMegaImg} alt="" />
              <h1 className="text-3xl text-center py-5  font-display-Poppins text-primary">
                Delicious Food Ideas
              </h1>
              <p className="text-center pr-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur asperiores quidem enim nisi consequatur esse est
                impedit rerum temporibus nihil!
              </p>
              <p className="pt-5 pb-10 text-center">
                <BrandButton_2 text="Purchase Now" />
              </p>
            </div>
            <div className="col-span-4 pt-7 px-3">
              <HomeMenuItem />
            </div>
          </ul>
        )}
      </li>

      {/*................ Blog dropdown menu start ................*/}
      <li
        className={`font-bold py-7 cursor-pointer ${
          scrolled
            ? `${
                darkMode
                  ? "text-white hover:text-brand"
                  : "hover:text-primary  text-brand"
              }`
            : "text-regular hover:text-primary"
        }`}
        onMouseEnter={toggleBlogDropdown}
        onMouseLeave={blogDropdownClose}
      >
        <div
          className="flex group cursor-pointer items-center"
          onClick={toggleBlogDropdown}
        >
          <span onClick={() => setBlogDropdownOpen(false)}>
            {isBangla ? "ব্লগ" : "Blog"}
          </span>
          <Icon
            icon="iconamoon:arrow-down-2-bold"
            className="group-hover:translate-y-1 duration-300"
            width="25"
          />
        </div>

        {blogDropdownOpen && (
          <ul
            className={`dropdown-menu  py-4 mt-7 absolute block z-50 duration-300 ease-in-out divide-y-2 ${
              darkMode ? "bg-gradient-backdrop" : "bg-white"
            }`}
          >
            <li>
              <Link
                onClick={() => setIsMenuOpen(false)}
                title="Blog List"
                to="/bloglist"
                className={`block pl-4 pr-24 pb-3 text-lg  hover:translate-x-1 duration-300 ${
                  darkMode
                    ? "text-white hover:text-primary"
                    : "text-brand hover:text-primary"
                }`}
              >
                {isBangla ? "ব্লগ তালিকা" : "Blog List"}
              </Link>
            </li>

            {/* blog grid sub menu  */}
            <li
              onMouseEnter={toggleBloggridDropdown}
              onMouseLeave={bloggridDropdownClose}
              onClick={toggleBloggridDropdown}
            >
              <div
                className={`flex  justify-between items-center pl-4  py-3 text-lg  cursor-pointer group ${
                  darkMode
                    ? "text-white hover:text-primary"
                    : "text-brand hover:text-primary"
                }`}
              >
                <span
                  className="hover:translate-x-1 duration-300"
                  onClick={() => setBloggridDropdownOpen(false)}
                >
                  {isBangla ? "ব্লগ গ্রিড" : "Blog grid"}
                </span>
                <Icon
                  icon="ic:round-play-arrow"
                  className="transform rotate-0 group-hover:rotate-90 transition-all duration-300 mr-3"
                  width="24"
                />
              </div>

              {bloggridDropdownOpen && (
                <ul
                  className={`dropdown-menu  py-4 absolute -right-32 lg:-right-56   z-50 shadow-lg duration-300 ease-in-out divide-y-2 ${
                    darkMode ? "bg-gradient-backdrop" : "bg-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <li>
                    <Link
                      title="Blog grid"
                      to="/bloggrid"
                      className={`block pl-4 pr-24 py-2 text-lg  hover:translate-x-1 duration-300 ${
                        darkMode
                          ? "text-white hover:text-primary"
                          : "text-brand hover:text-primary"
                      }`}
                    >
                      {isBangla ? "ব্লগ গ্রিড চার কলাম" : "Blog grid 4 columns"}
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                onClick={() => setIsMenuOpen(false)}
                title="Blog Single"
                to="/blogsingle"
                className={`block pl-4 py-3 text-lg  hover:translate-x-1 duration-300 ${
                  darkMode
                    ? "text-white hover:text-primary"
                    : "text-brand hover:text-primary"
                }`}
              >
                {isBangla ? "ব্লগ একক পৃষ্ঠা" : "Blog Single Page"}
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsMenuOpen(false)}
                title="Blog overlay"
                to="/blogoverlay"
                className={`block pl-4 pt-3 text-lg  hover:translate-x-1 duration-300 ${
                  darkMode
                    ? "text-white hover:text-primary"
                    : "text-brand hover:text-primary"
                }`}
              >
                {isBangla ? "ব্লগ গ্রিড ওভারলে" : "Blog Grid Overlay"}
              </Link>
            </li>
          </ul>
        )}
      </li>

      {/* ......................contact dropdown ............ */}
      <li
        className={`font-bold ${
          scrolled
            ? `${
                darkMode
                  ? "text-white hover:text-brand"
                  : "hover:text-primary  text-brand"
              }`
            : "text-regular hover:text-primary"
        }`}
      >
        <Link
          to="/contact"
          className="flex group cursor-pointer items-center py-4 "
        >
          <span>{isBangla ? "যোগাযোগ করুন" : "Contact Us"}</span>
        </Link>
      </li>

      {/*............. search button  ..............*/}
      <li
        className={`font-bold ${
          scrolled
            ? `${
                darkMode
                  ? "text-white hover:text-brand"
                  : "hover:text-primary  text-brand"
              }`
            : "text-regular hover:text-primary"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex items-center">
            <button
              className="py-2 rounded-md focus:outline-none"
              onClick={handleSearchOpen}
            >
              <Icon icon="ri:search-line" width="25" />
            </button>
          </div>
        </div>
        {isSearchOpen && (
          <div
            onClick={() => setIsMenuOpen(false)}
            className="fixed dropdown-menu inset-0 flex justify-center items-center bg-black bg-opacity-70 "
          >
            <div className="relative ">
              <input
                type="search"
                name="search"
                placeholder="Search"
                className="bg-white h-14 px-5 lg:pr-96 rounded-full text-md focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-0 top-4 mr-4 text-primary"
              >
                <Icon icon="ri:search-line" width="25" />
              </button>
            </div>
            <button type="button" onClick={handleSearchClosed}>
              <Icon icon="basil:cross-outline" width="50" />
            </button>
          </div>
        )}
      </li>

      {/*.............. cart button  ..............selection:*/}
      <li
        className={`font-bold ${
          scrolled
            ? `${
                darkMode
                  ? "text-white hover:text-brand"
                  : "hover:text-primary  text-brand"
              }`
            : "text-regular hover:text-primary"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <Link to="/">
          <button type="button" className="mt-2">
            <Icon icon="mdi:cart-outline" width="25" />
          </button>
        </Link>
      </li>

      {/* hamburger button  */}
      <SideBar />
    </>
  );

  return (
    <>
      <div
        className={`fixed top-0 z-10 w-full transition duration-500 ${
          scrolled
            ? `bg-regular dropdown-menu shadow-lg ${
                darkMode ? "bg-gradient-backdrop" : ""
              }`
            : "bg-transparent"
        } `}
      >
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            {scrolled ? (
              <img src={colorLogo} alt="" className="w-40 pl-10 " />
            ) : (
              <img src={colorLogo1} alt="" className="w-40 pl-10 " />
            )}
          </Link>
          <ul className="items-center nav-list hidden space-x-8 lg:flex">
            {menuItems}
          </ul>
          <ul className=" items-center hidden lg:flex">
            <li className="pr-10">
              {scrolled ? (
                <Link to="/booktable">
                  <BrandButton_2 text="Book Table" />
                </Link>
              ) : (
                <Link to="/booktable">
                  <BrandButton text="Book Table" />
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="fixed z-50 w-full transition py-3 duration-500 lg:hidden pr-5">
        <div className="flex justify-end mt-3">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 ml-5 transition duration-200 rounded focus:outline-none focus:shadow-outline
               bg-brand"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-regular" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="absolute top-5 left-0 w-full bg-secondary h-screen overflow-y-auto dropdown-menu">
            <div className="p-5 border shadow-sm text-brand hover:text-primary">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <Link
                    to="/"
                    aria-label="Company"
                    title="Company"
                    className="inline-flex items-center"
                  >
                    <img src={colorLogo} alt="" className="w-28" />
                  </Link>
                </div>
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    className="p-2 -mt-2 -mr-2 transition duration-200 rounded focus:bg-gray-200 focus:outline-none focus:shadow-outline "
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-5 text-regular" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <nav className="">
                <ul className="space-y-4">{menuItems}</ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Navbar;
