/* eslint-disable @typescript-eslint/no-empty-function */
import { useState, useEffect, createContext, ReactNode } from "react";

export const DarkModeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

type DarkModeProviderProps = {
  children: ReactNode;
};

export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const darkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";
    setDarkMode(darkModeEnabled);
  }, []);

  const toggleDarkMode = () => {
    const updatedMode = !darkMode;
    setDarkMode(updatedMode);
    localStorage.setItem("darkModeEnabled", updatedMode.toString());
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
