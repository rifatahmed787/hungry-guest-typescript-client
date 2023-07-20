/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Icon } from "@iconify/react";
import { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext/DarkModeContext";

const ToggleButton = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <label className="flex items-center cursor-pointer justify-center mt-5 hover:bg-inherit">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <div className="w-12 h-6 bg-brand rounded-full shadow-inner"></div>
        <div
          className={`${
            darkMode ? "translate-x-6" : "translate-x-0"
          } absolute top-0.5 left-0.5 w-5 h-5 bg-primary rounded-full shadow transform transition-transform`}
        ></div>
      </div>
      <div className="ml-3">
        <Icon
          icon={darkMode ? "ph:moon" : "ph:sun"}
          width="20px"
          size={50}
          className={`text-brand text-${darkMode ? "yellow" : "gray"}-500`}
        />
      </div>
    </label>
  );
};

export default ToggleButton;
