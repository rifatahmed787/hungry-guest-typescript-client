import hamburger from "../../../assets/homeIcon/hamburger (1).png";
import cheeseburger from "../../../assets/homeIcon/cheeseburger.png";
import hotdog from "../../../assets/homeIcon/hot-dog.png";
import chicken from "../../../assets/homeIcon/fried-chicken.png";
import sandwitch from "../../../assets/homeIcon/sandwich.png";
import fish from "../../../assets/homeIcon/fish.png";
import mildshake from "../../../assets/homeIcon/milk-shake.png";
import noodle from "../../../assets/homeIcon/noodle.png";
import pizza from "../../../assets/homeIcon/pizza.png";
import softdrink from "../../../assets/homeIcon/soft-drink.png";
import soup from "../../../assets/homeIcon/thai-soup.png";
import beef from "../../../assets/homeIcon/beef.png";
import { Link } from "react-router-dom";

const HomeMenuItem = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center pt-5 items-center gap-5 gap-y-5 overflow-hidden">
      <Link
        to="/"
        className="flex flex-col justify-center items-center gap-y-1 hover:-translate-y-2 duration-300"
      >
        <img src={hamburger} alt="" className="w-20" />
        <h2 className="text-lg">Hamburger</h2>
      </Link>

      <Link
        to="/"
        className="flex flex-col justify-center items-center gap-y-1 hover:-translate-y-2 duration-300"
      >
        <img src={cheeseburger} alt="" className="w-20" />
        <h2 className="text-lg">Cheeseburger</h2>
      </Link>

      <Link
        to="/"
        className="flex flex-col justify-center items-center gap-y-1 hover:-translate-y-2 duration-300"
      >
        <img src={hotdog} alt="" className="w-20" />
        <h2 className="text-lg">Hot Dog</h2>
      </Link>

      <Link
        to="/"
        className="flex flex-col justify-center items-center gap-y-1 hover:-translate-y-2 duration-300"
      >
        <img src={chicken} alt="" className="w-20" />
        <h2 className="text-lg">Fried Checken</h2>
      </Link>

      <Link
        to="/"
        className="flex flex-col justify-center items-center gap-y-1 hover:-translate-y-2 duration-300"
      >
        <img src={sandwitch} alt="" className="w-20" />
        <h2 className="text-lg">Sandwitch</h2>
      </Link>

      <Link
        to="/"
        className="flex flex-col justify-center items-center gap-y-1 hover:-translate-y-2 duration-300"
      >
        <img src={fish} alt="" className="w-20" />
        <h2 className="text-lg">Fish</h2>
      </Link>

      <Link
        to="/"
        className="flex flex-col justify-center items-center gap-y-1 hover:-translate-y-2 duration-300"
      >
        <img src={mildshake} alt="" className="w-20" />
        <h2 className="text-lg">Milk Shake</h2>
      </Link>

      <Link
        to="/"
        className="flex flex-col justify-center items-center gap-y-1 hover:-translate-y-2 duration-300"
      >
        <img src={noodle} alt="" className="w-20" />
        <h2 className="text-lg">Noodle</h2>
      </Link>

      <Link
        to="/"
        className="flex flex-col justify-center items-center gap-y-1 hover:-translate-y-2 duration-300"
      >
        <img src={pizza} alt="" className="w-20" />
        <h2 className="text-lg">Pizza</h2>
      </Link>

      <Link
        to="/"
        className="flex flex-col justify-center items-center gap-y-1 hover:-translate-y-2 duration-300"
      >
        <img src={softdrink} alt="" className="w-20" />
        <h2 className="text-lg">Soft Drink</h2>
      </Link>

      <Link
        to="/"
        className="flex flex-col justify-center items-center gap-y-1 hover:-translate-y-2 duration-300"
      >
        <img src={soup} alt="" className="w-20" />
        <h2 className="text-lg">Thai Soup</h2>
      </Link>
      <Link
        to="/"
        className="flex flex-col justify-center items-center gap-y-1 hover:-translate-y-2 duration-300"
      >
        <img src={beef} alt="" className="w-20" />
        <h2 className="text-lg">Beef</h2>
      </Link>
    </div>
  );
};

export default HomeMenuItem;
