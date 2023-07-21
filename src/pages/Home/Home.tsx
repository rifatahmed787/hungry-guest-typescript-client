import Restaurant from "./Restaurant/Restaurant";
import ServiceCard from "./SampleServiceCard/ServiceCard";
import ServiceSlider from "./ServiceSlider/ServiceSlider";
import Shef from "./Shef/Shef";
import ShefSlider from "./Shef/ShefSlider";
import Slider from "./Slider/Slider";
import ItemCard from "./SmallCardItem/ItemCard";

const Home = () => {
  return (
    <>
      <Slider />
      <ItemCard />
      <ServiceCard />
      <Restaurant />
      <ServiceSlider />
      <Shef />
      <ShefSlider />
    </>
  );
};

export default Home;
