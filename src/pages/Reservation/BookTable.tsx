/* eslint-disable @typescript-eslint/no-misused-promises */
import image from "../../assets/homeCardImg/cardd2.jpeg";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useContext } from "react";
import servicebanner from "../../assets/homeCardImg/home (5).jpeg";
import { DarkModeContext } from "../../components/DarkModeContext/DarkModeContext";
import { BookingTable } from "../../types/types";
import { SubmitHandler, useForm } from "react-hook-form";

const BookTable = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { register, handleSubmit } = useForm<BookingTable>();

  const onSubmit: SubmitHandler<BookingTable> = (data) => console.log(data);

  return (
    <div className={`pb-10 min-h-screen ${darkMode ? "bg-black" : ""}`}>
      {/* banner part */}
      <div className="mb-10">
        <img
          src={servicebanner}
          alt=""
          className="w-full h-[165px] md:h-[350px] lg:h-[570px] relative"
        />
        <span className="absolute inset-0 h-[165px] md:h-[350px] lg:h-[570px] bg-black opacity-70 top-0 left-0"></span>
        <div className="absolute top-16 md:top-32 lg:top-1/3 left-0 right-0 text-center">
          <h1 className="error font-bold lg:text-5xl text-white text-3xl text-brand2">
            Booking Table
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
            <Link to="/about"> About Us</Link>
          </p>
        </div>
      </div>

      <div
        className={`mx-5 md:mx-10 py-16 rounded-md ${
          darkMode ? "bg-gradient-backdrop text-white " : ""
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-5 md:mx-10">
          <div>
            <img className="md:h-[550px] w-11/12" src={image} alt="" />
          </div>

          {/* form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-9">
            <h1 className="text-3xl lg:text-5xl font-display1 text-brand font-bold mb-4 error">
              Make a Booking
            </h1>
            <div className="grid grid-cols-2 gap-x-5 mt-10">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="date"
                  id="floating_date"
                  className={`block py-2.5 px-0 w-full text-sm border-2 border-primary appearance-none rounded-md focus:outline-none focus:ring-0 focus:border-brand peer focus:border-t-1 pl-2 ${
                    darkMode
                      ? "text-white bg-gray-600"
                      : "text-black bg-transparent"
                  }`}
                  placeholder=" "
                  {...register("date")}
                  required
                />
                <label
                  htmlFor="floating_date"
                  className={`peer-focus:font-medium absolute  text-sm text-gray-500  duration-300 transform -translate-y-[22px] scale-75 top-3  origin-[0] peer-focus:left-0 peer-focus:text-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[22px] ml-2  peer-focus:absolute peer-focus:z-10 px-2  ${
                    darkMode
                      ? "bg-gradient-backdrop text-white peer-focus:text-white"
                      : "bg-[#F3F4F6]"
                  }`}
                >
                  Date
                </label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="time"
                  id="floating_time"
                  className={`block py-2.5 px-0 w-full text-sm border-2 border-primary appearance-none rounded-md focus:outline-none focus:ring-0 focus:border-brand peer focus:border-t-1 pl-2 ${
                    darkMode
                      ? "text-white bg-gray-600"
                      : "text-black bg-transparent"
                  }`}
                  placeholder=" "
                  {...register("time")}
                  required
                />
                <label
                  htmlFor="floating_time"
                  className={`peer-focus:font-medium absolute  text-sm text-gray-500  duration-300 transform -translate-y-[22px] scale-75 top-3  origin-[0] peer-focus:left-0 peer-focus:text-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[22px] ml-2  peer-focus:absolute peer-focus:z-10 px-2  ${
                    darkMode
                      ? "bg-gradient-backdrop text-white peer-focus:text-white"
                      : "bg-[#F3F4F6]"
                  }`}
                >
                  Time
                </label>
              </div>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                id="floating_name"
                className={`block py-2.5 px-0 w-full text-sm border-2 border-primary appearance-none rounded-md focus:outline-none focus:ring-0 focus:border-brand peer focus:border-t-1 pl-2 ${
                  darkMode
                    ? "text-white bg-gray-600"
                    : "text-black bg-transparent"
                }`}
                placeholder=" "
                {...register("name")}
                required
              />
              <label
                htmlFor="floating_name"
                className={`peer-focus:font-medium absolute  text-sm text-gray-500  duration-300 transform -translate-y-[22px] scale-75 top-3  origin-[0] peer-focus:left-0 peer-focus:text-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[22px] ml-2  peer-focus:absolute peer-focus:z-10 px-2  ${
                  darkMode
                    ? "bg-gradient-backdrop text-white peer-focus:text-white"
                    : "bg-[#F3F4F6]"
                }`}
              >
                Name
              </label>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                id="floating_people"
                className={`block py-2.5 px-0 w-full text-sm border-2 border-primary appearance-none rounded-md focus:outline-none focus:ring-0 focus:border-brand peer focus:border-t-1 pl-2 ${
                  darkMode
                    ? "text-white bg-gray-600"
                    : "text-black bg-transparent"
                }`}
                placeholder=" "
                {...register("people")}
                required
              />
              <label
                htmlFor="floating_people"
                className={`peer-focus:font-medium absolute  text-sm text-gray-500  duration-300 transform -translate-y-[22px] scale-75 top-3  origin-[0] peer-focus:left-0 peer-focus:text-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[22px] ml-2  peer-focus:absolute peer-focus:z-10 px-2  ${
                  darkMode
                    ? "bg-gradient-backdrop text-white peer-focus:text-white"
                    : "bg-[#F3F4F6]"
                }`}
              >
                Number of People
              </label>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <input
                type="phone"
                id="floating_phone"
                className={`block py-2.5 px-0 w-full text-sm border-2 border-primary appearance-none rounded-md focus:outline-none focus:ring-0 focus:border-brand peer focus:border-t-1 pl-2 ${
                  darkMode
                    ? "text-white bg-gray-600"
                    : "text-black bg-transparent"
                }`}
                placeholder=" "
                {...register("phone")}
                required
              />
              <label
                htmlFor="floating_phone"
                className={`peer-focus:font-medium absolute  text-sm text-gray-500  duration-300 transform -translate-y-[22px] scale-75 top-3  origin-[0] peer-focus:left-0 peer-focus:text-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[22px] ml-2  peer-focus:absolute peer-focus:z-10 px-2  ${
                  darkMode
                    ? "bg-gradient-backdrop text-white peer-focus:text-white"
                    : "bg-[#F3F4F6]"
                }`}
              >
                Phone Number
              </label>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                id="floating_email"
                className={`block py-2.5 px-0 w-full text-sm border-2 border-primary appearance-none rounded-md focus:outline-none focus:ring-0 focus:border-brand peer focus:border-t-1 pl-2 ${
                  darkMode
                    ? "text-white bg-gray-600"
                    : "text-black bg-transparent"
                }`}
                placeholder=" "
                {...register("email")}
                required
              />
              <label
                htmlFor="floating_email"
                className={`peer-focus:font-medium absolute  text-sm text-gray-500  duration-300 transform -translate-y-[22px] scale-75 top-3  origin-[0] peer-focus:left-0 peer-focus:text-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[22px] ml-2  peer-focus:absolute peer-focus:z-10 px-2  ${
                  darkMode
                    ? "bg-gradient-backdrop text-white peer-focus:text-white"
                    : "bg-[#F3F4F6]"
                }`}
              >
                Email
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2.5 mt-3 px-4 rounded"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
