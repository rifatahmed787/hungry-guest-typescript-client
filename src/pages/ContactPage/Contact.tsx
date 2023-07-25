import png1 from "../../assets/ContactIcon/location.png";
import Contactbanner from "../../assets/ContactIcon/banner.jpg";
import png2 from "../../assets/ContactIcon/phone.png";
import png3 from "../../assets/ContactIcon/mail.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./Contact.css";
import { useContext, useEffect } from "react";
import BrandButton from "../../components/BrandButton/BrandButton";
import { DarkModeContext } from "../../components/DarkModeContext/DarkModeContext";

const Contact = () => {
  const { darkMode } = useContext(DarkModeContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={`pb-10 ${darkMode ? "bg-black" : ""}`}>
      <div className="text-center w-full">
        <div>
          <img
            src={Contactbanner}
            alt=""
            className="w-full h-[165px] md:h-[350px] lg:h-[570px] relative"
          />
          <span className="absolute inset-0 h-[165px] md:h-[350px] lg:h-[570px] bg-black opacity-50 top-0 left-0"></span>
          <div className="absolute top-16 md:top-32 lg:top-1/3 left-28 md:left-1/3 lg:left-[44%]">
            <h1 className="font-bold lg:text-5xl text-white text-3xl text-brand2">
              Contact
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
      </div>

      <div
        className={` grid justify-items-center items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 py-10 mt-10 mx-3 ${
          darkMode ? "bg-gradient-backdrop text-white rounded-md" : ""
        }`}
      >
        <a
          href="https://goo.gl/maps/g94H8WE9VCS4yzoXA"
          target="_blank"
          className="group"
        >
          <div className="flex items-center border border-white group-hover:border-brand duration-300 gap-4  bg-white shadow py-10 px-10 rounded-lg brand">
            <p className="bg-brand rounded-lg ">
              <img src={png1} alt="" className="w-16 h-16  p-3" />
            </p>
            <div>
              <h1 className="text-3xl font-bold text-brand">Our Address</h1>
              <p className="text-lg font-semibold text-gray-500">
                Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </a>
        {/* tel:+4733378901" */}
        <a href="tel:+88 01945 518927" className="group ">
          <div className="flex items-center gap-4 border border-white group-hover:border-brand duration-300 bg-white shadow py-10 px-12 rounded-lg brand">
            <p className="bg-brand rounded-lg ">
              <img src={png2} alt="" className="w-16 h-16  p-3" />
            </p>
            <div>
              <h1 className="text-3xl font-bold text-brand">Our Phone</h1>
              <p className="text-lg font-semibold text-gray-500">
                +88 01945518927
              </p>
            </div>
          </div>
        </a>
        <a href="mailto: abc@example.com" className="group">
          <div className="flex items-center border border-white group-hover:border-brand duration-300 gap-4 bg-white shadow py-10 px-5 rounded-lg brand">
            <p className="bg-brand rounded-lg w-16 h-16">
              <img src={png3} alt="" className="  p-3" />
            </p>
            <div>
              <h1 className="text-3xl font-bold px-5 text-brand">Our Email</h1>
              <p className="text-lg font-semibold text-gray-500">
                letstalk@weerodigital.com
              </p>
            </div>
          </div>
        </a>
      </div>

      <form
        className={`mb-32  w-11/12 mt-16 mx-auto relative ${
          darkMode ? "bg-gradient-backdrop text-white rounded-md" : ""
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center gap-5 items-center  px-10 py-5">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300 appearance-none rounded-md dark:text-white focus:outline-none focus:ring-0 focus:border-blue-600 peer focus:border-t-1 pl-2"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute  text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-[22px] scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[22px] ml-2 peer-focus:bg-white peer-focus:absolute peer-focus:z-10 peer-focus:px-2"
            >
              First name
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="floating_phone"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number
            </label>
          </div>
        </div>

        <div className="flex flex-col px-10 pb-10 mx-auto">
          <div className="relative z-0 w-full mb-6 group">
            <textarea
              className="block pt-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />

            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Let me know your feedback.
            </label>
          </div>

          <div className="flex justify-center">
            <BrandButton text="Send" />
          </div>
        </div>
        <div className="absolute before:rounded-br-3xl after:rounded-br-3xl -right-0.5 -bottom-0.5 w-2/3 h-2/3 border-r-1 border-b-1 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-r-2 before:border-b-2 before:border-primary after:absolute after:bottom-0 after:right-0  after:border-r-2 after:border-b-2 after:border-primary -z-10 " />
      </form>

      {/* google map */}
      <div className="mb-16">
        <div className="w-full h-80 mt-3 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.3482689250204!2d90.35367527506733!3d23.80621167863229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c162749924dd%3A0x4d0b750e1fcaea7c!2sWeero%20Digital!5e0!3m2!1sen!2sbd!4v1683634586464!5m2!1sen!2sbd"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
