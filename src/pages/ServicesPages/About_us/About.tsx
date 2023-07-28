import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import aboutBanner from "../../../assets/sectionBanner/about1.jpg";
import { useContext } from "react";
import { DarkModeContext } from "../../../components/DarkModeContext/DarkModeContext";

const About = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`pb-10 ${darkMode ? "bg-black text-white" : ""}`}>
      <div className="relative after:absolute after:content-normal after:bg-black after:opacity-30 after:h-full after:w-full after:top-0 after:left-0">
        <img
          src={aboutBanner}
          alt=""
          className="w-full bg-no-repeat  bg-cover relative"
        />

        <div className="absolute top-16 md:top-32 lg:top-1/3 left-0 right-0 text-center z-10">
          <h1 className="error font-bold  lg:text-5xl text-4xl text-white">
            About Us
          </h1>
          <p className="md:text-lg text-white flex justify-center items-center  font-bold mt-3 text-brand2 text-base">
            <Link to="/" className="hover:-translate-x-1 duration-300">
              <span>Home</span>
            </Link>
            <Icon
              icon="mdi:simple-icons"
              className="mx-2 font-bold"
              width={30}
            />
            <Link to="/about">About Us</Link>
          </p>
        </div>
      </div>

      <div>
        <section className="mt-10 mx-8">
          <div
            className={`container  py-20  flex flex-col ${
              darkMode ? "bg-gradient-backdrop text-white rounded-md" : ""
            }`}
          >
            <div className="lg:w-4/6 mx-auto">
              <div className="flex flex-col sm:flex-row px-5">
                <div className="sm:w-1/3 text-center cursor-pointer duration-300 shadow-lg sm:py-8 group border-2 rounded-lg hover:border-brand my-auto">
                  <div className="w-20 h-20 rounded-full inline-flex items-center justify-center ">
                    <img
                      alt="testimonial"
                      className=" group-hover:border-brand w-20 h-20  mb-8 group-hover:scale-125 duration-500 object-cover object-center rounded-full inline-block  bg-brand"
                      src="https://i.ytimg.com/vi/avB1qUOLHLg/maxresdefault.jpg"
                    />
                  </div>
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-bold title-font mt-4 text-brand  text-lg">
                      Our Chef
                    </h2>
                    <div className="w-12 h-1 group-hover:w-full duration-300 bg-brand rounded mt-2 mb-4"></div>
                    <h3 className="tracking-widest text-center text-xl md:text-2xl font-medium title-font ">
                      Md Rifat
                    </h3>
                    <div className="flex justify-center items-center gap-3 pt-4 text-gray-300 py-3">
                      <a href="">
                        <Icon
                          icon="ic:baseline-facebook"
                          width="28"
                          className="hover:translate-y-2 duration-300 text-brand"
                        />
                      </a>
                      <a href="">
                        <Icon
                          icon="mdi:twitter"
                          width="28"
                          className="hover:translate-y-2 duration-300 text-brand"
                        />
                      </a>
                      <a href="">
                        <Icon
                          icon="mdi:instagram"
                          width="28"
                          className="hover:translate-y-2 duration-300 text-brand"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p className="leading-relaxed  text-lg mb-4">
                    Meggings portland fingerstache lyft, post-ironic fixie man
                    bun banh mi umami everyday carry hexagon locavore direct
                    trade art party. Locavore small batch listicle gastropub
                    farm-to-table lumbersexual salvia messenger bag. Coloring
                    book flannel truffaut craft beer drinking vinegar sartorial,
                    disrupt fashion axe normcore meh butcher. Portland 90s
                    scenester vexillologist forage post-ironic asymmetrical,
                    chartreuse disrupt butcher paleo intelligentsia pabst before
                    they sold out four loko. 3 wolf moon brooklyn.
                  </p>
                  <a
                    className={` inline-flex items-center cursor-pointer ${
                      darkMode ? "text-white" : "text-brand"
                    }`}
                  >
                    Learn More
                    <Icon
                      icon="mingcute:arrow-right-fill"
                      className="group-hover:translate-x-4 duration-300 ml-1"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 mx-8">
          <div
            className={` px-5 py-24 mx-auto flex flex-wrap rounded-md ${
              darkMode ? "bg-gradient-backdrop text-white" : ""
            }`}
          >
            <div className="lg:w-2/3 mx-auto">
              <div className="flex flex-wrap group w-full relative after:absolute after:content-normal after:bg-gradient-to-b from-yellow-400 to-green-400 after:w-full after:h-full after:top-0 after:left-0 after:opacity-40 after:hover:opacity-0 after:hover:duration-300 py-32 px-10  mb-4">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block absolute inset-0"
                  src="https://assets.bonappetit.com/photos/610aa6ddc50e2f9f7c42f7f8/16:9/w_2560%2Cc_limit/Savage-2019-top-50-busy-restaurant.jpg"
                />
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-2xl md:text-5xl leading-relaxed font-bold text-gray-100 title-font mb-2 error">
                    Shooting Stars
                  </h2>

                  <a className="text-regular font-bold inline-flex items-center cursor-pointer">
                    Learn More
                    <Icon
                      icon="mingcute:arrow-right-fill"
                      className="group-hover:translate-x-4 duration-300 ml-1"
                    />
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap -mx-2">
                <div className="px-2 w-1/2">
                  <div className="flex group flex-wrap w-full bg-brand sm:py-24 py-16 sm:px-10 px-6 relative">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block opacity-50 absolute inset-0"
                      src="https://images.squarespace-cdn.com/content/v1/58060e0ee3df2851adaeb51c/1679660500789-UI1EVZ9J9QIMHOJI0VNH/0K8A3532.jpg?format=1500w"
                    />
                    <div className="text-center relative z-10 w-full">
                      <h2 className="text-2xl leading-relaxed font-bold text-gray-100 title-font mb-2">
                        Shooting Stars
                      </h2>

                      <a className="text-regular font-bold inline-flex items-center cursor-pointer">
                        Learn More
                        <Icon
                          icon="mingcute:arrow-right-fill"
                          className="group-hover:translate-x-4 duration-300 ml-1"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="px-2 w-1/2">
                  <div className="flex flex-wrap w-full group bg-brand sm:py-24 py-16 sm:px-10 px-6 relative">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block opacity-50 absolute inset-0"
                      src="https://cdn.sortiraparis.com/images/80/100789/834071-too-restaurant-too-hotel-paris-photos-menu-entrees.jpg"
                    />
                    <div className="text-center relative z-10 w-full">
                      <h2 className="text-2xl leading-relaxed font-bold text-gray-100 title-font mb-2">
                        Shooting Stars
                      </h2>

                      <a className="text-regular font-bold inline-flex items-center cursor-pointer">
                        Learn More
                        <Icon
                          icon="mingcute:arrow-right-fill"
                          className="group-hover:translate-x-4 duration-300 ml-1"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-screen-xl mx-8 mt-10">
          <div
            className={`px-5 py-24 mx-auto rounded-md ${
              darkMode ? "bg-gradient-backdrop text-white" : "text-brand"
            }`}
          >
            <div className="flex flex-wrap w-full mb-20 md:ml-3">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="md:text-3xl text-2xl font-medium title-font mb-2 ">
                  Meet With Our Best Shefs
                </h1>
                <div className="h-1 w-48 bg-brand rounded"></div>
              </div>
            </div>
            <div className="flex flex-wrap -m-4 mx-auto">
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div
                  className={`p-6 rounded-lg ${
                    darkMode
                      ? "bg-gradient-backdrop text-white border border-white"
                      : "border-2 border-primary"
                  }`}
                >
                  <img
                    className="h-40 rounded w-full hover:scale-110 duration-300 object-cover object-center mb-6 overflow-hidden"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1mZ36kzb8GDq4LavRkKXQIWHNK_G_CoIcHQ&usqp=CAU"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-center text-xl md:text-2xl font-medium title-font ">
                    Md Rifat
                  </h3>
                  <div className="flex justify-center items-center gap-3 pt-4 text-gray-300 py-3">
                    <a href="">
                      <Icon
                        icon="ic:baseline-facebook"
                        width="28"
                        className="hover:translate-y-2 duration-300 text-brand"
                      />
                    </a>
                    <a href="">
                      <Icon
                        icon="mdi:twitter"
                        width="28"
                        className="hover:translate-y-2 duration-300 text-brand"
                      />
                    </a>
                    <a href="">
                      <Icon
                        icon="mdi:instagram"
                        width="28"
                        className="hover:translate-y-2 duration-300 text-brand"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div
                  className={`p-6 rounded-lg ${
                    darkMode
                      ? "bg-gradient-backdrop text-white border border-white"
                      : "border-2 border-primary"
                  }`}
                >
                  <img
                    className="h-40 rounded w-full hover:scale-110 duration-300 object-cover object-center mb-6 overflow-hidden"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1mZ36kzb8GDq4LavRkKXQIWHNK_G_CoIcHQ&usqp=CAU"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-center text-xl md:text-2xl font-medium title-font ">
                    Md Rifat
                  </h3>
                  <div className="flex justify-center items-center gap-3 pt-4 text-gray-300 py-3">
                    <a href="">
                      <Icon
                        icon="ic:baseline-facebook"
                        width="28"
                        className="hover:translate-y-2 duration-300 text-brand"
                      />
                    </a>
                    <a href="">
                      <Icon
                        icon="mdi:twitter"
                        width="28"
                        className="hover:translate-y-2 duration-300 text-brand"
                      />
                    </a>
                    <a href="">
                      <Icon
                        icon="mdi:instagram"
                        width="28"
                        className="hover:translate-y-2 duration-300 text-brand"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div
                  className={`p-6 rounded-lg ${
                    darkMode
                      ? "bg-gradient-backdrop text-white border border-white"
                      : "border-2 border-primary"
                  }`}
                >
                  <img
                    className="h-40 rounded w-full hover:scale-110 duration-300 object-cover object-center mb-6 overflow-hidden"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1mZ36kzb8GDq4LavRkKXQIWHNK_G_CoIcHQ&usqp=CAU"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-center text-xl md:text-2xl font-medium title-font ">
                    Md Rifat
                  </h3>
                  <div className="flex justify-center items-center gap-3 pt-4 text-gray-300 py-3">
                    <a href="">
                      <Icon
                        icon="ic:baseline-facebook"
                        width="28"
                        className="hover:translate-y-2 duration-300 text-brand"
                      />
                    </a>
                    <a href="">
                      <Icon
                        icon="mdi:twitter"
                        width="28"
                        className="hover:translate-y-2 duration-300 text-brand"
                      />
                    </a>
                    <a href="">
                      <Icon
                        icon="mdi:instagram"
                        width="28"
                        className="hover:translate-y-2 duration-300 text-brand"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div
                  className={`p-6 rounded-lg ${
                    darkMode
                      ? "bg-gradient-backdrop text-white border border-white"
                      : "border-2 border-primary"
                  }`}
                >
                  <img
                    className="h-40 rounded w-full hover:scale-110 duration-300 object-cover object-center mb-6 overflow-hidden"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1mZ36kzb8GDq4LavRkKXQIWHNK_G_CoIcHQ&usqp=CAU"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-center text-xl md:text-2xl font-medium title-font ">
                    Md Rifat
                  </h3>
                  <div className="flex justify-center items-center gap-3 pt-4 text-gray-300 py-3">
                    <a href="">
                      <Icon
                        icon="ic:baseline-facebook"
                        width="28"
                        className="hover:translate-y-2 duration-300 text-brand"
                      />
                    </a>
                    <a href="">
                      <Icon
                        icon="mdi:twitter"
                        width="28"
                        className="hover:translate-y-2 duration-300 text-brand"
                      />
                    </a>
                    <a href="">
                      <Icon
                        icon="mdi:instagram"
                        width="28"
                        className="hover:translate-y-2 duration-300 text-brand"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
