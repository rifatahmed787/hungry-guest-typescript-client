import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./ServiceSingleTabs.css";
import reviewsImage from "../../../../assets/cardImage/card3.jpg";
import Rating from "../../../../components/Rating/Rating";
import BrandButton from "../../../../components/BrandButton/BrandButton";
import { DarkModeContext } from "../../../../components/DarkModeContext/DarkModeContext";
import { useContext } from "react";

const ServicesSingleTabs = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className="mt-10 mx-8">
      <div
        className={`flex justify-center ${
          darkMode ? "bg-gradient-backdrop text-white rounded-md" : ""
        }`}
      >
        <Tabs>
          <TabList className="text-brand md:flex  justify-center md:gap-32  space-x-5 text-center  text-base font-bold pt-10 space-y-5 md:space-y-0">
            <Tab>Description</Tab>

            <Tab>Reviews (2)</Tab>

            <Tab>Information</Tab>
          </TabList>

          <TabPanel className="my-16 px-3 md:pl-8 md:mx-28">
            <h2 className="text-lg  flex active-tab-content w-11/12 md:w-4/5 md:ml-44  pb-16 text-center md:text-left">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
              quam, pariatur facere nihil sit voluptatem, tenetur nam fugiat,
              corrupti perspiciatis non voluptatibus ducimus. Necessitatibus
              reiciendis provident ut temporibus non reprehenderit.
            </h2>
          </TabPanel>

          <TabPanel>
            <div className="active-tab-content mx-5 w-11/12 md:w-4/5 md:pl-56">
              <div className="flex justify-start items-start space-x-4 py-5">
                <img
                  className="w-16 h-16 rounded-full"
                  src={reviewsImage}
                  alt=".."
                />
                <div>
                  <span className="font-bold text-xl tracking-wide">
                    Jessica -
                  </span>
                  <span>November 5, 2019</span>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Illo id unde suscipit obcaecati soluta architecto nihil
                    ipsum
                  </p>
                  <Rating />
                </div>
              </div>
              <div className="flex justify-start items-start space-x-4 py-5">
                <img
                  className="w-16 h-16 rounded-full"
                  src={reviewsImage}
                  alt=".."
                />
                <div>
                  <span className="font-bold text-xl tracking-wide">
                    Jessica -
                  </span>
                  <span>November 5, 2019</span>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Illo id unde suscipit obcaecati soluta architecto nihil
                    ipsum
                  </p>
                  <Rating />
                </div>
              </div>

              {/* Comment form section start */}
              <div className="my-16  flex flex-col justify-start">
                <Rating />
                <div className="p-2 rounded ">
                  <h1 className="text-2xl font-semibold mx-3 text-primary">
                    Add your review here...
                  </h1>
                  <div className="mt-3 p-3 w-full">
                    <textarea
                      className="border border-brand p-2 rounded w-full"
                      placeholder="Write something..."
                    ></textarea>
                  </div>

                  <div className="flex justify-between mx-3">
                    <div>
                      <BrandButton text={"Submit"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Comment form section start end*/}
          </TabPanel>

          <TabPanel>
            <div className="active-tab-content my-16  w-full pl-5 md:pl-0 md:w-4/5">
              <p>
                <span className="font-bold text-lg">Weight</span> 0.5 kg
              </p>
              <p>
                <span className="font-bold text-lg">Dimensions</span> 36*28*10cm
              </p>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ServicesSingleTabs;
