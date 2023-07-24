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

import { useContext, useRef } from "react";
import { DarkModeContext } from "../../../components/DarkModeContext/DarkModeContext";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { Icon } from "@iconify/react/dist/iconify.js";

type Swiper = {
  swiper: Swiper | null;

  slidePrev: () => void;
  slideNext: () => void;
};

type SwiperRef = {
  swiper?: Swiper;
};

const Slider = () => {
  const { darkMode } = useContext(DarkModeContext);
  const swiperRef = useRef<SwiperRef>(null); // Use a single useRef for Swiper instance

  // Function to slide to the previous slide
  const goPrevButton = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // Function to slide to the next slide
  const goNextButton = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        effect={"fade"}
        navigation={{
          prevEl: ".prev-button-1",
          nextEl: ".next-button-1",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation]}
        className={`mySwiper max-h-screen relative${
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
      <div className="flex justify-center items-center gap-3 pt-12 text-center absolute bottom-[70%] left-[40%] md:bottom-[55%] md:left-[44%] lg:-right-[40%] z-10 lg:bottom-[7%]">
        <button
          className="prev-button-1 bg-primary rounded-full p-0.5 md:p-1"
          onClick={() => goPrevButton()}
        >
          <Icon
            icon="ic:baseline-less-than"
            width={40}
            className="text-white font-bold"
          />
        </button>
        <button
          className="next-button-1 bg-primary rounded-full p-0.5 md:p-1"
          onClick={() => goNextButton()}
        >
          <Icon
            icon="ic:baseline-greater-than"
            width={40}
            className="text-white font-bold"
          />
        </button>
      </div>
    </>
  );
};

export default Slider;
