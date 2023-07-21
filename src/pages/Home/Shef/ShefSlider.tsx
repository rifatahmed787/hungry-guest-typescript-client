/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Swiper, SwiperSlide } from "swiper/react";
import card1 from "../../../assets/homeCardImg/shef.jpeg";
import card2 from "../../../assets/homeCardImg/chef3.jpeg";

import "./ShefSlider.css";
// Import Swiper styles
import "swiper/css";

// import required modules
import { EffectFade, Navigation } from "swiper/modules";
import { Icon } from "@iconify/react";
import { useRef } from "react";

type Swiper = {
  swiper: Swiper | null;

  slidePrev: () => void;
  slideNext: () => void;
};

type SwiperRef = {
  swiper?: Swiper;
};
const ShefSlider = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <div
      className="mx-auto max-w-screen-2xl bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url('/src/assets/homeCardImg/shefsbg.jpg')",
      }}
    >
      <div>
        <p className="text-lg mb-3 pt-16 text-primary font-semibold text-center">
          Shefs
        </p>
        <h1 className="text-3xl lg:text-5xl text-regular text-center font-bold font-display-Poppins">
          Meet Our Shefs
        </h1>
      </div>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            // spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            // spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            // spaceBetween: 30,
          },
        }}
        navigation={{
          prevEl: ".prev-button",
          nextEl: ".next-button",
        }}
        modules={[EffectFade, Navigation]}
        className="mySwiper bg-fixed bg-cover bg-center pt-16 pl-16 "
      >
        <SwiperSlide>
          <div className="w-4/5 group  duration-300  relative after:absolute after:content-normal after:bg-primary after:w-3/4 after:h-1.5 after:bottom-0">
            <div className=" h-fit group ">
              <div className="relative overflow-hidden ">
                <img className="h-96 w-full  " src={card1} alt="" />
                <div className="absolute h-full w-full bg-black/60 text-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div>
                    <h1 className="text-3xl font-bold text-white mt-44">
                      Shef Rifat
                    </h1>
                  </div>

                  <div className="flex justify-center items-center gap-3 pt-4 text-gray-300">
                    <a href="">
                      <Icon
                        icon="ic:baseline-facebook"
                        width="28"
                        className="hover:translate-y-2 duration-300"
                      />
                    </a>
                    <a href="">
                      <Icon
                        icon="mdi:twitter"
                        width="28"
                        className="hover:translate-y-2 duration-300"
                      />
                    </a>
                    <a href="">
                      <Icon
                        icon="mdi:instagram"
                        width="28"
                        className="hover:translate-y-2 duration-300"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-4/5  group  duration-300  relative after:absolute after:content-normal after:bg-primary after:w-3/4 after:h-1.5 after:bottom-0">
            <div className="h-fit group ">
              <div className="relative overflow-hidden ">
                <img className="h-96 w-full  " src={card2} alt="" />
                <div className="absolute h-full w-full bg-black/60 text-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div>
                    <h1 className="text-3xl font-bold text-white mt-44">
                      Shef Rifat
                    </h1>
                  </div>

                  <div className="flex justify-center items-center gap-3 pt-4 text-gray-300">
                    <a href="">
                      <Icon
                        icon="ic:baseline-facebook"
                        width="28"
                        className="hover:translate-y-2 duration-300"
                      />
                    </a>
                    <a href="">
                      <Icon
                        icon="mdi:twitter"
                        width="28"
                        className="hover:translate-y-2 duration-300"
                      />
                    </a>
                    <a href="">
                      <Icon
                        icon="mdi:instagram"
                        width="28"
                        className="hover:translate-y-2 duration-300"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-4/5  group  duration-300  relative after:absolute after:content-normal after:bg-primary after:w-3/4 after:h-1.5 after:bottom-0">
            <div className="h-fit group ">
              <div className="relative overflow-hidden ">
                <img className="h-96 w-full  " src={card1} alt="" />
                <div className="absolute h-full w-full bg-black/60 text-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div>
                    <h1 className="text-3xl font-bold text-white mt-44">
                      Shef Rifat
                    </h1>
                  </div>

                  <div className="flex justify-center items-center gap-3 pt-4 text-gray-300">
                    <a href="">
                      <Icon
                        icon="ic:baseline-facebook"
                        width="28"
                        className="hover:translate-y-2 duration-300"
                      />
                    </a>
                    <a href="">
                      <Icon
                        icon="mdi:twitter"
                        width="28"
                        className="hover:translate-y-2 duration-300"
                      />
                    </a>
                    <a href="">
                      <Icon
                        icon="mdi:instagram"
                        width="28"
                        className="hover:translate-y-2 duration-300"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-4/5 group  duration-300  relative after:absolute after:content-normal after:bg-primary after:w-3/4 after:h-1.5 after:bottom-0">
            <div className=" h-fit group ">
              <div className="relative overflow-hidden ">
                <img className="h-96 w-full  " src={card1} alt="" />
                <div className="absolute h-full w-full bg-black/60 text-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div>
                    <h1 className="text-3xl font-bold text-white mt-44">
                      Shef Rifat
                    </h1>
                  </div>

                  <div className="flex justify-center items-center gap-3 pt-4 text-gray-300">
                    <a href="">
                      <Icon
                        icon="ic:baseline-facebook"
                        width="28"
                        className="hover:translate-y-2 duration-300"
                      />
                    </a>
                    <a href="">
                      <Icon
                        icon="mdi:twitter"
                        width="28"
                        className="hover:translate-y-2 duration-300"
                      />
                    </a>
                    <a href="">
                      <Icon
                        icon="mdi:instagram"
                        width="28"
                        className="hover:translate-y-2 duration-300"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* Swipper BUtton */}
      <div className="flex justify-center items-center gap-3 py-12 text-center">
        <button className="prev-button  duration-500" onClick={goPrev}>
          <Icon icon="bi:arrow-left" width={50} className="text-primary" />
        </button>
        <button className="next-button  duration-500" onClick={goNext}>
          <Icon icon="bi:arrow-right" width={50} className="text-primary" />
        </button>
      </div>
    </div>
  );
};

export default ShefSlider;
