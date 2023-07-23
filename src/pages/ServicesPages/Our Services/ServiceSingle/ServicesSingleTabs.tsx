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
    <div className="mt-10 mx-10">
      <div
        className={` ${
          darkMode ? "bg-gradient-backdrop text-white rounded-md" : ""
        }`}
      >
        <Tabs>
          <TabList className="text-brand  space-y-5 w-4/5 mx-auto lg:space-x-52 text-base font-bold pt-10">
            <Tab>Description</Tab>
            <Tab>Additional Information</Tab>
            <Tab>Reviews (2)</Tab>
          </TabList>

          <TabPanel className="my-16">
            <h2 className="text-lg px-5 active-tab-content w-4/5 mx-auto pb-16">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
              quam, pariatur facere nihil sit voluptatem, tenetur nam fugiat,
              corrupti perspiciatis non voluptatibus ducimus. Necessitatibus
              reiciendis provident ut temporibus non reprehenderit.
            </h2>
          </TabPanel>

          <TabPanel>
            <div className="active-tab-content my-16 mx-5 w-4/5">
              <p>
                <span className="font-bold text-lg">Weight</span> 0.5 kg
              </p>
              <p>
                <span className="font-bold text-lg">Dimensions</span> 36*28*10cm
              </p>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="active-tab-content mx-5 w-4/5">
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
        </Tabs>
      </div>
    </div>
  );
};

export default ServicesSingleTabs;
