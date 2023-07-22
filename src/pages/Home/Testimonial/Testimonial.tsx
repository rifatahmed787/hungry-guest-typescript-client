/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Icon } from "@iconify/react";
import testimonial from "../../../assets/homeCardImg/chef2.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";
import { DarkModeContext } from "../../../components/DarkModeContext/DarkModeContext";
import { useContext } from "react";

type Swiper = {
  swiper: Swiper | null;
};

const Testimonial = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const { darkMode } = useContext(DarkModeContext);

  const handleMouseEnter = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <div
      className={`max-w-screen-xl mx-5 px-20 pb-10 my-32 ${
        darkMode ? "bg-gradient-backdrop rounded-md" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      id="client"
    >
      <div className="pb-10">
        <p className="text-lg mb-3 pt-16 text-primary font-semibold text-center">
          Review
        </p>
        <h1 className="text-3xl lg:text-5xl text-brand  text-center font-bold font-display-Poppins error">
          What Our Client Say
        </h1>
      </div>

      {/* testimonial carousel */}
      <div className=" max-w-screen-md  mx-auto relative">
        {/* quote icon */}
        <Icon
          icon="fa-solid:quote-left"
          className={`absolute -left-10 top-0  ${
            darkMode ? "text-gray-500" : "opacity-20"
          }`}
          width={70}
        />

        {/* carousel part */}
        <>
          <Swiper
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className=" text-center overflow-hidden">
              {" "}
              <article
                className={`font-normal italic  text-[18px] font-sans text-center pt-1 ${
                  darkMode ? "text-white" : "text-[#000]"
                }`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus laborum quas corrupti culpa vero et, cum voluptatem
                veniam, aliquid quia, architecto accusantium? Fugit veniam
                nostrum libero maiores, voluptatem,
              </article>
              <img
                src={testimonial}
                alt=""
                className="w-20 h-20 rounded-full mx-auto mt-7"
              />
              <p className="text-2xl text-primary font-display1 font-bold pt-5">
                Md Rifat, CEO
              </p>
            </SwiperSlide>
            <SwiperSlide className=" text-center overflow-hidden">
              {" "}
              <article className=" font-normal italic text-[#000] text-[18px] font-sans text-center pt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus laborum quas corrupti culpa vero et, cum voluptatem
                veniam, aliquid quia, architecto accusantium? Fugit veniam
                nostrum libero maiores, voluptatem,
              </article>
              <img
                src={testimonial}
                alt=""
                className="w-20 h-20 rounded-full mx-auto mt-7"
              />
              <p className="text-2xl text-primary font-display1 font-bold pt-5">
                Md Rifat, CEO
              </p>
            </SwiperSlide>
            <SwiperSlide className=" text-center overflow-hidden">
              {" "}
              <article className=" font-normal italic text-[#000] text-[18px] font-sans text-center pt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus laborum quas corrupti culpa vero et, cum voluptatem
                veniam, aliquid quia, architecto accusantium? Fugit veniam
                nostrum libero maiores, voluptatem,
              </article>
              <img
                src={testimonial}
                alt=""
                className="w-20 h-20 rounded-full mx-auto mt-7"
              />
              <p className="text-2xl text-primary font-display1 font-bold pt-5">
                Md Rifat, CEO
              </p>
            </SwiperSlide>
            <SwiperSlide className=" text-center overflow-hidden">
              {" "}
              <article className=" font-normal italic text-[#000] text-[18px] font-sans text-center pt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus laborum quas corrupti culpa vero et, cum voluptatem
                veniam, aliquid quia, architecto accusantium? Fugit veniam
                nostrum libero maiores, voluptatem,
              </article>
              <img
                src={testimonial}
                alt=""
                className="w-20 h-20 rounded-full mx-auto mt-7"
              />
              <p className="text-2xl text-primary font-display1 font-bold pt-5">
                Md Rifat, CEO
              </p>
            </SwiperSlide>
          </Swiper>
        </>

        {/* quote icon */}
        <Icon
          icon="fa-solid:quote-right"
          className={`absolute -right-10 top-0  ${
            darkMode ? "text-gray-500" : "opacity-20"
          }`}
          width={70}
        />
      </div>

      {/* partnar carousel  */}
    </div>
  );
};

export default Testimonial;
