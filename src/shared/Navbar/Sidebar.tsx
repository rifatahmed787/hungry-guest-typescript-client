import { useEffect } from "react";
import { useState } from "react";

import { useContext } from "react";

import { Icon } from "@iconify/react";
import "./Navbar.css";
import { DarkModeContext } from "../../components/DarkModeContext/DarkModeContext";
import ToggleButton from "../../components/ToggleButton/ToggleButton";

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarTransitioning, setIsSidebarTransitioning] = useState(false);
  const { darkMode, isBangla, toggoleBangla } = useContext(DarkModeContext);

  //navbar color change effect
  const [scrolled, setScrolled] = useState(false);

  const toggoleSidebar = () => {
    setIsSidebarTransitioning(true);
    setTimeout(() => {
      setIsSidebarOpen(!isSidebarOpen);
      setIsSidebarTransitioning(false);
    }, 100);
  };

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
  return (
    <>
      <li className="">
        <div className="">
          <button
            className="w-10 h-6 z-10 flex flex-col justify-between"
            onClick={toggoleSidebar}
          >
            {scrolled ? (
              <span
                className={`h-1 w-4/5  ${
                  darkMode ? "bg-white" : "bg-brand"
                } rounded-2xl ${
                  isSidebarOpen
                    ? "rotate-45 translate-y-2.5 duration-300"
                    : "translate-y-0 duration-300"
                }`}
              ></span>
            ) : (
              <span
                className={`h-1 w-4/5 bg-white rounded-2xl ${
                  isSidebarOpen
                    ? "rotate-45 translate-y-2.5 duration-300"
                    : "translate-y-0 duration-300"
                }`}
              ></span>
            )}

            {/* span two */}
            {scrolled ? (
              <span
                className={`h-1 w-4/5  rounded-2xl ${
                  darkMode ? "bg-white" : "bg-brand"
                } ${isSidebarOpen ? "opacity-0" : ""}`}
              ></span>
            ) : (
              <span
                className={`h-1 w-4/5 bg-white rounded-2xl ${
                  isSidebarOpen ? "opacity-0" : ""
                }`}
              ></span>
            )}

            {/* span one */}
            {scrolled ? (
              <span
                className={`h-1 w-4/5  ${
                  darkMode ? "bg-white" : "bg-brand"
                } rounded-2xl ${
                  isSidebarOpen
                    ? "-rotate-45 -translate-y-2.5 duration-300"
                    : "translate-y-0 duration-300"
                }`}
              ></span>
            ) : (
              <span
                className={`h-1 w-4/5 bg-white rounded-2xl ${
                  isSidebarOpen
                    ? "-rotate-45 -translate-y-2.5 duration-300"
                    : "translate-y-0 duration-300 bg-brand"
                }`}
              ></span>
            )}
          </button>
        </div>
        <div
          className={`fixed z-50 right-0 top-0 h-full w-64 bg-white transition-transform transform ${
            isSidebarOpen
              ? isSidebarTransitioning
                ? "translate-x-0"
                : "translate-x-0 duration-300"
              : isSidebarTransitioning
              ? "translate-x-full"
              : "translate-x-full duration-300"
          } ${darkMode ? "bg-gradient-backdrop" : ""}`}
        >
          <div className="p-4 mt-5">
            <img
              src="https://idsb.tmgrup.com.tr/ly/uploads/images/2022/12/19/247181.jpg"
              alt=""
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h1
              className={`text-2xl  text-center font-semibold mt-3 ${
                darkMode ? "text-white" : "text-primary"
              }`}
            >
              {isBangla ? "লিওনেল মেসি" : "Leonel Messi"}
            </h1>
            <p
              className={`text-base text-center font-display1 ${
                darkMode ? "text-white" : "text-brand "
              }`}
            >
              messigoat@gmail.com
            </p>
            <ToggleButton />

            {/* Language change button  */}

            <label className="flex items-center cursor-pointer justify-center mt-5 hover:bg-inherit">
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={darkMode}
                  onChange={toggoleBangla}
                />
                <h1
                  className={`text-lg  font-display font-semibold ${
                    darkMode ? "text-white" : "text-primary"
                  }`}
                >
                  {isBangla ? "বাংলা" : "English"}
                </h1>
              </div>
            </label>

            <div className="flex justify-center">
              <div
                className={`flex justify-center items-center gap-2 absolute bottom-10  hover:text-primary ${
                  darkMode ? "text-white" : "text-brand"
                }`}
              >
                <Icon icon="memory:logout" width={30} />
                <h1 className="text-xl font-semibold cursor-pointer">
                  {isBangla ? "লগআউট" : "Logout"}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default SideBar;
