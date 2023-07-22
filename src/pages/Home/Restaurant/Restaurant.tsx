import restaurant1 from "../../../assets/homeCardImg/searchbg.jpeg";
import restaurant2 from "../../../assets/homeCardImg/restaurent.jpg";
import restaurant3 from "../../../assets/homeCardImg/card6.jpeg";
import restaurant4 from "../../../assets/homeCardImg/card2.jpg";
import restaurant5 from "../../../assets/homeCardImg/card4.jpg";
import BrandButton_2 from "../../../components/BrandButton/BrandButton_2";
import { useContext } from "react";
import { DarkModeContext } from "../../../components/DarkModeContext/DarkModeContext";

const Restaurant = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-10 mx-16 my-20 ${
        darkMode ? "bg-gradient-backdrop text-white rounded-md" : ""
      }`}
    >
      <div className="flex flex-col gap-5 md:px-10 md:py-16">
        <div className="grid grid-cols-3 gap-5 justify-items-center items-center overflow-hidden">
          <img
            src={restaurant3}
            alt=""
            className="w-40 md:w-full lg:w-full h-20  md:h-40 lg:h-40 transform hover:scale-125 duration-300 cursor-pointer"
          />
          <img
            src={restaurant4}
            alt=""
            className="w-40 md:w-full lg:w-full h-20  md:h-40 lg:h-40  transform hover:scale-125 duration-300 cursor-pointer"
          />
          <img
            src={restaurant5}
            alt=""
            className="w-40 md:w-full lg:w-full h-20  md:h-40 lg:h-40  transform hover:scale-125 duration-300 cursor-pointer"
          />
        </div>
        <div className="grid grid-cols-4 gap-5 overflow-hidden">
          <img
            src={restaurant1}
            alt=""
            className="w-full col-span-3 h-40 md:h-60 lg:h-60 transform hover:scale-110 duration-300 cursor-pointer"
          />
          <img
            src={restaurant2}
            alt=""
            className="w-full h-full transform hover:scale-110 duration-300 cursor-pointer"
          />
        </div>
      </div>
      <div className="text-left mx-5 lg:mx-10 md:px-10 md:py-16">
        <h4 className="text-2xl font-bold text-primary  pb-3 font-display1 ">
          Visit Our
        </h4>
        <h1 className="error uppercase text-3xl lg:text-5xl text-brand  font-bold">
          Restaurant
        </h1>
        <p
          className={` text-lg font-semibold py-5 mb-2 ${
            darkMode ? "text-white" : "text-gray-600"
          }`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fugit
          magnam nisi itaque, accusantium dolores optio. Nisi tempora, sequi ad
          fugit perspiciatis expedita doloremque, fugiat ea beatae quisquam aut,
          facilis ut officia distinctio! Iste voluptatibus dolore pariatur ut
          magni distinctio est tempore laudantium, iusto amet repellendus quidem
          possimus, provident doloremque!
        </p>
        <BrandButton_2 text="GET LOCATION" />
      </div>
    </div>
  );
};

export default Restaurant;
