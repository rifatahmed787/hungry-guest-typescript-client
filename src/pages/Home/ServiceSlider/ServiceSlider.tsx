import card1 from "../../../assets/cardImage/card1.jpg";
import card2 from "../../../assets/cardImage/card2.jpg";
import card3 from "../../../assets/cardImage/card3.jpg";
import card4 from "../../../assets/cardImage/card4.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./ServiceSlider.css";

// import required modules
import { Navigation } from "swiper/modules";
import Rating from "../../../components/Rating/Rating";

const ServiceSlider = () => {
  return (
    <div
      className="mx-5 bg-fixed bg-cover bg-center py-32"
      style={{
        backgroundImage: "url('/src/assets/sectionBanner/serviceList.jpg')",
      }}
    >
      <Swiper
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper mx-auto pl-5 md:pl-12 md:pr-4"
      >
        <SwiperSlide>
          <div className="p-2 relative cursor-pointer border-4 w-11/12  border-primary rounded-xl ">
            <div className="relative group">
              <img
                src={card1}
                alt=""
                className="shadow-xl w-full h-[300px] rounded-md group-hover:opacity-60 duration-300"
              />
              <div className="group-hover:m-5 m-0 rounded-xl  bg-[#E9E2DD] border-2 border-brand border-dotted opacity-0 group-hover:opacity-100 duration-500 my-2 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-center">
                <div className="p-5">
                  <h1 className="title-font text-3xl font-bold text-brand mb-3">
                    Noodles
                  </h1>
                  <p className="w-56">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                  <div className="flex justify-center items-center gap-2 cursor-pointer my-3">
                    <h3 className="text-primary font-bold text-2xl">$20</h3>
                    <h3></h3>
                  </div>
                  <button className="px-3 py-1 mb-3 uppercase bg-brand hover:bg-primary text-white">
                    Add to cart
                  </button>
                  <div className="flex justify-center">
                    <Rating />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <div className="p-2 relative cursor-pointer border-4 w-11/12  border-primary rounded-xl">
            <div className="relative group">
              <img
                src={card2}
                alt=""
                className="shadow-xl w-full h-[300px] rounded-md group-hover:opacity-60 duration-300"
              />
              <div className="group-hover:m-5 m-0 rounded-xl  bg-[#E9E2DD] border-2 border-brand border-dotted opacity-0 group-hover:opacity-100 duration-500 my-2 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-center">
                <div className="p-5">
                  <h1 className="title-font text-3xl font-bold text-brand mb-3">
                    Chicken Fry
                  </h1>
                  <p className="w-56">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                  <div className="flex justify-center items-center gap-2 cursor-pointer my-3">
                    <h3 className="text-primary font-bold text-2xl">$20</h3>
                  </div>
                  <button className="px-3 py-1 mb-3 uppercase bg-brand hover:bg-primary text-white">
                    Add to cart
                  </button>
                  <div className="flex justify-center">
                    <Rating />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="p-2 relative cursor-pointer border-4 w-11/12  border-primary rounded-xl">
            <div className="relative group">
              <img
                src={card3}
                alt=""
                className="shadow-xl w-full h-[300px] rounded-md group-hover:opacity-60 duration-300"
              />
              <div className="group-hover:m-5 m-0 rounded-xl  bg-[#E9E2DD] border-2 border-brand border-dotted opacity-0 group-hover:opacity-100 duration-500 my-2 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-center">
                <div className="p-5">
                  <h1 className="title-font text-3xl font-bold text-brand mb-3">
                    Fried Rice
                  </h1>
                  <p className="w-56">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                  <div className="flex justify-center items-center gap-2 cursor-pointer my-3">
                    <h3 className="text-primary font-bold text-2xl">$20</h3>
                  </div>
                  <button className="px-3 py-1 mb-3 uppercase bg-brand hover:bg-primary text-white">
                    Add to cart
                  </button>
                  <div className="flex justify-center">
                    <Rating />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-2 relative cursor-pointer border-4 w-11/12  border-primary rounded-xl">
            <div className="relative group">
              <img
                src={card4}
                alt=""
                className="shadow-xl w-full h-[300px] rounded-md group-hover:opacity-60 duration-300"
              />
              <div className="group-hover:m-5 m-0 rounded-xl  bg-[#E9E2DD] border-2 border-brand border-dotted opacity-0 group-hover:opacity-100 duration-500 my-2 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-center">
                <div className="p-5">
                  <h1 className="title-font text-3xl font-bold text-brand mb-3">
                    Fried Rice
                  </h1>
                  <p className="w-56">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                  <div className="flex justify-center items-center gap-2 cursor-pointer my-3">
                    <h3 className="text-primary font-bold text-2xl">$20</h3>
                  </div>
                  <button className="px-3 py-1 mb-3 uppercase bg-brand hover:bg-primary text-white">
                    Add to cart
                  </button>
                  <div className="flex justify-center">
                    <Rating />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ServiceSlider;
