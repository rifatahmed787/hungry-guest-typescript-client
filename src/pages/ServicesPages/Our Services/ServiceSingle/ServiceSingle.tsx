import { Icon } from "@iconify/react";
import serviceBanner from "../../../../assets/SliderImage//sliderr2.jpg";
import food1 from "../../../../assets/cardImage/card1.jpg";

import { Link } from "react-router-dom";
import BrandButton from "../../../../components/BrandButton/BrandButton";
import { useContext } from "react";
import { DarkModeContext } from "../../../../components/DarkModeContext/DarkModeContext";
import ServicesSingleTabs from "./ServicesSingleTabs";

const ServiceSingle = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`pb-16  ${darkMode ? "bg-black text-white" : ""}`}>
      <div className="relative after:absolute after:content-normal after:bg-black after:w-full after:h-full after:top-0 after:left-0 after:opacity-40">
        <img src={serviceBanner} alt="" className="w-full " />
        <div className="absolute top-16 md:top-32 lg:top-1/3 left-0 right-0 text-center z-10">
          <h1 className="font-bold lg:text-5xl text-white text-3xl text-brand2 error">
            Single Service
          </h1>
          <p className="md:text-lg flex justify-center items-center text-white font-bold mt-5 text-base">
            <Link to={"/"} className="hover:-translate-x-1 duration-300">
              <span>Home</span>
            </Link>
            <Icon
              icon="mdi:simple-icons"
              className="mx-2 font-bold"
              width={30}
            />
            About Us
          </p>
        </div>
      </div>
      <div
        className={`px-4 mx-8 my-16  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 rounded-md py-5 ${
          darkMode ? "bg-gradient-backdrop text-white " : ""
        }`}
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <img
              className="object-cover w-full h-56  sm:h-96"
              src={food1}
              alt=""
            />
          </div>

          <div>
            <h5 className="mb-4 text-2xl font-bold leading-none">
              Food name: Lorem ipsum, dolor sit
            </h5>
            <p className="text-2xl font-bold flex ">
              <span>Price: $</span>
              280
            </p>
            <div className="items-center space-y-2">
              <h1 className="text-xl font-bold">Feature: will be added here</h1>
            </div>
            <div className="mt-5">
              <BrandButton text={"ADD TO CART"} />
            </div>
          </div>
        </div>
      </div>

      {/* tabs uses here  */}
      <ServicesSingleTabs />
    </div>
  );
};

export default ServiceSingle;
