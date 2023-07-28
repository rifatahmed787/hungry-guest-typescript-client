import cardpng1 from "../../../assets/homeCardpng/card55.jpeg";
import cardpng2 from "../../../assets/homeCardpng/card22.jpeg";
import cardpng3 from "../../../assets/homeCardpng/card11.jpeg";
import cardpng4 from "../../../assets/homeCardpng/card44.jpeg";

import "./ItemCard.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../../components/DarkModeContext/DarkModeContext";

const ItemCard = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="my-16">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center items-center px-5">
        <div
          className={`p-4  relative border  border-primary rounded-xl drop-shadow-xl ${
            darkMode ? "bg-gradient-backdrop text-white border-none" : ""
          }`}
        >
          <div className="relative group">
            <img src={cardpng1} className=" img-spin-slowly rounded-full" />
            <span className="inset-0 absolute top-0 left-0 bg-black opacity-0  group-hover:opacity-50 duration-500 rounded-xl"></span>
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-center  opacity-0 group-hover:opacity-100 duration-500 group-hover:m-5 m-0 cursor-pointer">
              <div>
                <h1 className="text-3xl font-bold text-regular pb-5">
                  Fried Rice
                </h1>
                <p className="text-regular pb-5">Lorem ipsum dolor sit amet.</p>

                <Link
                  className="flex justify-center items-center gap-3 z-10 text-regular hover:text-primary "
                  to={""}
                >
                  <h3 className="text-2xl font-semibold hover:-translate-x-1 duration-300">
                    See more
                  </h3>

                  <Icon
                    icon="maki:arrow"
                    width="25"
                    className="hover:translate-x-1 duration-300"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`p-4  relative border  border-primary rounded-xl drop-shadow-xl ${
            darkMode ? "bg-gradient-backdrop text-white border-none" : ""
          }`}
        >
          <div className="relative group">
            <img src={cardpng2} className=" img-spin-slowly rounded-full" />
            <span className="inset-0 absolute top-0 left-0 bg-black opacity-0  group-hover:opacity-50 duration-500 rounded-xl"></span>
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-center  opacity-0 group-hover:opacity-100 duration-500 group-hover:m-5 m-0 cursor-pointer">
              <div>
                <h1 className="text-3xl font-bold text-regular pb-5">
                  Chingri Fish
                </h1>
                <p className="text-regular pb-5">Lorem ipsum dolor sit amet.</p>

                <Link
                  className="flex justify-center items-center gap-3 z-10 text-regular hover:text-primary "
                  to={""}
                >
                  <h3 className="text-2xl font-semibold hover:-translate-x-1 duration-300">
                    See more
                  </h3>

                  <Icon
                    icon="maki:arrow"
                    width="25"
                    className="hover:translate-x-1 duration-300"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`p-4  relative border  border-primary rounded-xl drop-shadow-xl ${
            darkMode ? "bg-gradient-backdrop text-white border-none" : ""
          }`}
        >
          <div className="relative group">
            <img src={cardpng3} className=" img-spin-slowly rounded-full" />
            <span className="inset-0 absolute top-0 left-0 bg-black opacity-0  group-hover:opacity-50 duration-500 rounded-xl"></span>
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-center  opacity-0 group-hover:opacity-100 duration-500 group-hover:m-5 m-0 cursor-pointer">
              <div>
                <h1 className="text-3xl font-bold text-regular pb-5">
                  Noodles
                </h1>
                <p className="text-regular pb-5">Lorem ipsum dolor sit amet.</p>

                <Link
                  className="flex justify-center items-center gap-3 z-10 text-regular hover:text-primary "
                  to={""}
                >
                  <h3 className="text-2xl font-semibold hover:-translate-x-1 duration-300">
                    See more
                  </h3>

                  <Icon
                    icon="maki:arrow"
                    width="25"
                    className="hover:translate-x-1 duration-300"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`p-4  relative border  border-primary rounded-xl drop-shadow-xl ${
            darkMode ? "bg-gradient-backdrop text-white border-none" : ""
          }`}
        >
          <div className="relative group">
            <img src={cardpng4} className=" img-spin-slowly rounded-full" />
            <span className="inset-0 absolute top-0 left-0 bg-black opacity-0  group-hover:opacity-50 duration-500 rounded-xl"></span>
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-center opacity-0 group-hover:opacity-100 duration-500 group-hover:m-5 m-0 cursor-pointer">
              <div>
                <h1 className="text-3xl font-bold text-regular pb-5">
                  Noodles
                </h1>
                <p className="text-regular pb-5">Lorem ipsum dolor sit amet.</p>

                <Link
                  className="flex justify-center items-center gap-3 z-10 text-regular hover:text-primary "
                  to={""}
                >
                  <h3 className="text-2xl font-semibold hover:-translate-x-1 duration-300">
                    See more
                  </h3>

                  <Icon
                    icon="maki:arrow"
                    width="25"
                    className="hover:translate-x-1 duration-300"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
