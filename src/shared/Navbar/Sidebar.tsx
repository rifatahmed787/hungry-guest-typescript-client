import { useEffect } from "react";
import { useState } from "react";

import { useContext } from "react";

import { Icon } from "@iconify/react";
import "./Navbar.css";
import { DarkModeContext } from "../../components/DarkModeContext/DarkModeContext";
import ToggleButton from "../../components/ToggleButton/ToggleButton";

const SideBar = () => {
  const [IsSidebarOpen, setIsSidebarOpen] = useState(false);
  const { darkMode, isBangla, toggoleBangla } = useContext(DarkModeContext);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  //for sidebar open and close
  const handleSidebarOpen = () => setIsSidebarOpen(!IsSidebarOpen);
  const handleClick = () => {
    const hamburger = document.getElementById("hamburger-1");
    if (hamburger) {
      hamburger.classList.toggle("is-active");
    }
  };

  //navbar color change effect
  const [scrolled, setScrolled] = useState(false);

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
      <li
        className="font-semibold"
        // onClick={() => setIsMenuOpen(false)}
      >
        <div className="row pt-2">
          <div className="col three" onClick={handleSidebarOpen}>
            <button
              className="hamburger"
              id="hamburger-1"
              onClick={handleClick}
            >
              {scrolled ? (
                <span
                  className={`line w-8 h-[3px] ${
                    darkMode ? "bg-white" : "bg-brand"
                  }`}
                ></span>
              ) : (
                <span className="line w-8 h-[3px] bg-white"></span>
              )}
              {scrolled ? (
                <span
                  className={`line w-8 h-[3px] ${
                    darkMode ? "bg-white" : "bg-brand"
                  }`}
                ></span>
              ) : (
                <span className="line w-8 h-[3px] bg-white"></span>
              )}
              {scrolled ? (
                <span
                  className={`line w-8 h-[3px] ${
                    darkMode ? "bg-white" : "bg-brand"
                  }`}
                ></span>
              ) : (
                <span className="line w-8 h-[3px] bg-white"></span>
              )}
            </button>
          </div>
          <div
            className={`fixed z-50 right-0 top-0 h-full w-64 bg-white transition-transform transform ${
              IsSidebarOpen ? "translate-x-0 " : "translate-x-full"
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
        </div>
      </li>
    </>
  );
};

export default SideBar;
