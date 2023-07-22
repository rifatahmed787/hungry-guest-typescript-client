import { useContext } from "react";
import Contact from "./Contact/Contact";
import Restaurant from "./Restaurant/Restaurant";
import ServiceCard from "./SampleServiceCard/ServiceCard";
import ServiceSlider from "./ServiceSlider/ServiceSlider";
import Shef from "./Shef/Shef";
import ShefSlider from "./Shef/ShefSlider";
import Slider from "./Slider/Slider";
import ItemCard from "./SmallCardItem/ItemCard";
import Testimonial from "./Testimonial/Testimonial";
import { DarkModeContext } from "../../components/DarkModeContext/DarkModeContext";

const Home = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`${darkMode ? "bg-black" : ""}`}>
      <Slider />
      <ItemCard />
      <ServiceCard />
      <Restaurant />
      <ServiceSlider />
      <Shef />
      <ShefSlider />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;
