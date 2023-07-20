import slider1 from "../../../assets/SliderImage/slider.jpg";
import slider2 from "../../../assets/SliderImage/slider1.jpg";
import slider3 from "../../../assets/SliderImage/hamburger.jpg";
import sliderLogo from "../../../assets/SliderImage/slideLogo.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules

import { useContext } from "react";
import { DarkModeContext } from "../../../components/DarkModeContext/DarkModeContext";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";

const Slider = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        effect={"fade"}
        navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation]}
        className={`mySwiper max-h-screen ${
          darkMode ? "bg-gradient-backdrop" : ""
        }`}
      >
        <SwiperSlide className="group">
          <img src={slider1} className="relative " />
          <span className="absolute z-0 inset-0 bg-black top-0 left-0 opacity-50"></span>
          <img
            src={sliderLogo}
            alt=""
            className="absolute left-[35%] top-[15%] w-1/3 transform transition-transform duration-700 group-hover:scale-110 cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide className="group">
          <img src={slider2} className="relative " />
          <span className="absolute z-0 inset-0 bg-black top-0 left-0 opacity-50"></span>
          <img
            src={sliderLogo}
            alt=""
            className="absolute left-[35%] top-[15%] w-1/3 transform transition-transform duration-700 group-hover:scale-110 cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide className="group">
          <img src={slider3} className="relative " />
          <span className="absolute z-0 inset-0 bg-black top-0 left-0 opacity-50"></span>
          <img
            src={sliderLogo}
            alt=""
            className="absolute left-[35%] top-[15%] w-1/3 transform transition-transform duration-700 group-hover:scale-110 cursor-pointer"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
