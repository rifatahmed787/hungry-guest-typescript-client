/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-backdrop":
          "linear-gradient(to top right, #36393C, #141727, #141727, #141727, #141727, #141727)",
        "image-gradient": "bg-gradient-to-b from-yellow-400 to-green-400",
      },
      colors: {
        brand: "#006635",
        primary: "#f8981d",
        secondary: "#808080",
        regular: "#ffffff",
      },
    },
    fontFamily: {
      // display: ['"Abril Fatface"', "cursive"],
      display: ["Montserrat", "sans-serif"],

      // display1: ['"Herr Von Muellerhoff"', "cursive"],
      display1: ["Playfair Display", "serif"],
    },
  },
  plugins: [],
};
