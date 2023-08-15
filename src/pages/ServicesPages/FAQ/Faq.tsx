/* eslint-disable @typescript-eslint/no-unsafe-return */

import { Link } from "react-router-dom";
import bannerimage from "../../../assets/homeCardImg/faq1.jpg";
import { Icon } from "@iconify/react";
import { useContext, useState } from "react";
import { DarkModeContext } from "../../../components/DarkModeContext/DarkModeContext";
import TitleHook from "../../../hooks/TitleHook";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { darkMode } = useContext(DarkModeContext);
  TitleHook("faq");

  const toggleAccordion = (index: number | null) => {
    setActiveIndex((prevIndex: number | null) =>
      prevIndex === index ? null : index
    );
  };
  const faqData = [
    {
      question: "How can I play for my order?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
    },
    {
      question: "How can I play for my order?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
    },
    {
      question: "How can I play for my order?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
    },
    {
      question: "How can I play for my order?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
    },
    {
      question: "How can I play for my order?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
    },
    {
      question: "How can I play for my order?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
    },
    {
      question: "How can I play for my order?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
    },
    {
      question: "How can I play for my order?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
    },
    {
      question: "How can I play for my order?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
    },
  ];

  return (
    <div className={`pb-5 ${darkMode ? "bg-black" : ""}`}>
      {/* banner part */}
      <div>
        <div className="relative after:absolute after:content-normal after:bg-black after:opacity-50 after:w-full after:h-full after:top-0 after:left-0">
          <img
            src={bannerimage}
            alt=""
            className="w-full h-[165px] md:h-[350px] lg:h-[570px]"
          />
        </div>

        <div className="absolute top-16 md:top-32 lg:top-1/3 left-0 right-0 text-center">
          <h1 className="font-bold lg:text-5xl text-white text-3xl text-brand2">
            Frequently Ask Question
          </h1>
          <p className="md:text-lg flex justify-center items-center text-white font-bold mt-5 text-base">
            <Link to={"/"} className="hover:-translate-x-1 duration-300">
              <span>Home</span>
            </Link>
            <Icon
              icon="mdi:simple-icons"
              className="mx-2 font-bold"
              width={30}
            />
            About Us
          </p>
        </div>
      </div>

      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-between mx-10 my-16 gap-y-10 ${
          darkMode ? "bg-gradient-backdrop text-white rounded-md" : ""
        }`}
      >
        <div className="p-5">
          <div
            className={`text-3xl  lg:text-5xl font-display1 mb-5 ${
              darkMode ? "text-primary" : "text-brand"
            }`}
          >
            Frequently asked questions.
          </div>

          <div className="text-md text-primary">
            See our FAQ for more details.
          </div>
        </div>
        <div className="lg:col-span-2 mx-4 md:p-5">
          <div className="rounded-lg">
            {faqData.map((item, index) => (
              <div key={index} className="mb-4">
                <button
                  className="flex items-center justify-between w-full"
                  onClick={() => toggleAccordion(index)}
                >
                  <h1
                    className={`font-semibold text-lg lg:text-2xl  ${
                      darkMode ? "text-white" : "text-brand"
                    }`}
                  >
                    {item.question}
                  </h1>
                  <div>
                    {activeIndex === index ? (
                      <Icon
                        icon="ic:baseline-minus"
                        width="25"
                        className={`${darkMode ? "text-white" : "text-brand"}`}
                      />
                    ) : (
                      <Icon
                        icon="ic:baseline-plus"
                        width="25"
                        className={`${darkMode ? "text-white" : "text-brand"}`}
                      />
                    )}
                  </div>
                </button>
                {activeIndex === index && (
                  <div className="mt-3 dropdown-menu border-2 rounded-lg border-primary">
                    <p className=" text-sm p-4">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
