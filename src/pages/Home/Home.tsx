import Restaurant from "./Restaurant/Restaurant";
import ServiceCard from "./SampleServiceCard/ServiceCard";
import ServiceSlider from "./ServiceSlider/ServiceSlider";
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
    </>
  );
};

export default Home;
