import { useEffect } from "react";
import { useState } from "react";

import { useContext } from "react";

import { Icon } from "@iconify/react";
import "./Navbar.css";
import { DarkModeContext } from "../../components/DarkModeContext/DarkModeContext";
import ToggleButton from "../../components/ToggleButton/ToggleButton";

const SideBar = () => {
  const [IsSidebarOpen, setIsSidebarOpen] = useState(false);
  const { darkMode } = useContext(DarkModeContext);
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
                <span className="line w-8 h-[3px] bg-brand"></span>
              ) : (
                <span className="line w-8 h-[3px] bg-white"></span>
              )}
              {scrolled ? (
                <span className="line w-8 h-[3px] bg-brand"></span>
              ) : (
                <span className="line w-8 h-[3px] bg-white"></span>
              )}
              {scrolled ? (
                <span className="line w-8 h-[3px] bg-brand"></span>
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
              <h1 className="text-2xl text-primary text-center font-semibold mt-3">
                Leonel Messi
              </h1>
              <p className="text-base text-brand text-center font-display1">
                messigoat@gmail.com
              </p>
              <ToggleButton />

              <div className="flex justify-center">
                <div className="flex justify-center items-center gap-2 absolute bottom-10 text-brand hover:text-primary">
                  <Icon icon="memory:logout" width={30} />
                  <h1 className="text-2xl font-semibold">Logout</h1>
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
