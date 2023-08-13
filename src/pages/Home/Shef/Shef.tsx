import { Icon } from "@iconify/react";
import chef from "../../../assets/homeCardImg/shef.jpeg";
import { useContext } from "react";
import { DarkModeContext } from "../../../components/DarkModeContext/DarkModeContext";

const Shef = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <>
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 my-32 mx-5 md:px-10 px-5 py-5 md:py-10 ${
          darkMode ? "bg-gradient-backdrop text-white rounded-md" : ""
        }`}
      >
        <div className="mx-3 md:mx-10">
          <h1 className="error text-left text-3xl lg:text-5xl text-brand font-bold">
            Meet Our Best Chef
          </h1>
          <p
            className={` text-lg font-semibold text-left  my-5 ${
              darkMode ? "text-white" : "text-gray-600"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            voluptatibus, omnis inventore mollitia quas qui, ab numquam quis
            corrupti atque consectetur ad minus nostrum tenetur optio in rem
            tempore harum soluta ratione porro ex! Porro vitae molestiae
            molestias, nam quas asperiores corrupti fugit delectus natus. Eius
            corrupti fuga repellat accusantium.
          </p>
          <div className="flex gap-10  my-10 items-center">
            {/* social icon */}
            <ul className="pb-10 pt-5 flex justify-center items-center gap-5">
              {/* facebook */}
              <li
                className="flex justify-center items-center group relative text-center cursor-pointer
                  rounded-full w-12 h-12 border-2 border-brand after:absolute after:content-normal after:top-1 after:right-1 after:bottom-1 after:left-1
                   after:bg-brand after:rounded-full after:transform after:scale-0
                   after:transition-all after:duration-300 hover:after:transform hover:after:scale-100 z-10"
              >
                <a href="#" className="block text-primary z-10">
                  <Icon
                    icon="ri:facebook-fill"
                    width={25}
                    className="text-primary group-hover:text-white "
                  />
                </a>
              </li>

              {/* instagram */}
              <li
                className="flex justify-center items-center group relative text-center cursor-pointer
                  rounded-full w-12 h-12 border-2 border-brand after:absolute after:content-normal after:top-1 after:right-1 after:bottom-1 after:left-1
                   after:bg-brand after:rounded-full after:transform after:scale-0
                   after:transition-all after:duration-300 hover:after:transform hover:after:scale-100"
              >
                <a href="#" className="block text-primary z-10">
                  <Icon
                    icon="mdi:instagram"
                    width={25}
                    className="text-primary group-hover:text-white "
                  />
                </a>
              </li>

              {/* twitter */}
              <li
                className="flex justify-center items-center group relative text-center cursor-pointer
                  rounded-full w-12 h-12 border-2 border-brand after:absolute after:content-normal after:top-1 after:right-1 after:bottom-1 after:left-1
                   after:bg-brand after:rounded-full after:transform after:scale-0
                   after:transition-all after:duration-300 hover:after:transform hover:after:scale-100"
              >
                <a href="#" className="block text-primary z-10">
                  <Icon
                    icon="mdi:twitter"
                    width={25}
                    className="text-primary group-hover:text-white "
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative before:absolute before:content-normal before:bg-primary before:w-4/6 before:h-1.5 before:bottom-0 before:z-10">
          <img src={chef} alt="" className="h-[425px]" />
          <span className="inset-0 absolute bg-gradient-to-b from-yellow-400 to-green-400 top-0 left-0 opacity-40 hover:opacity-0 duration-300"></span>
        </div>
      </div>
    </>
  );
};

export default Shef;
