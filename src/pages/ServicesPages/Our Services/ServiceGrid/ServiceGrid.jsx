import food1 from "../../../../assets/homeCardImg/card1.jpg";
import food10 from "../../../../assets/homeCardImg/card2.jpg";
import food11 from "../../../../assets/homeCardImg/card1.jpg";
import food12 from "../../../../assets/homeCardImg/card4.jpg";
import food2 from "../../../../assets/homeCardImg/card5.jpg";
import food3 from "../../../../assets/homeCardImg/card6.jpeg";
import food4 from "../../../../assets/homeCardImg/card7.jpg";
import food5 from "../../../../assets/homeCardImg/card1.jpg";
import food6 from "../../../../assets/homeCardImg/card6.jpeg";
import food7 from "../../../../assets/homeCardImg/card4.jpg";
import food8 from "../../../../assets/homeCardImg/card5.jpg";
import food9 from "../../../../assets/homeCardImg/card6.jpeg";
import ServiceListCard from "./ServiceGridCard.jsx";
import servicebanner from "../../../../assets/sectionBanner/serviceList.jpg";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const ServiceList = () => {
  const FoodCards = [
    {
      id: 1,
      title: "Pizza",
      image: food1,
      price: 235,
      rating: 3,
    },
    {
      id: 2,
      title: "Hamburger",
      image: food2,
      price: 125,
      rating: 4,
    },
    {
      id: 3,
      title: "Sushi",
      image: food3,
      price: 145,
      rating: 3,
    },
    {
      id: 4,
      title: "Pasta",
      image: food4,
      price: 45,
      rating: 3,
    },
    {
      id: 5,
      title: "Chicken curry",
      image: food5,
      price: 25,
      rating: 2,
    },
    {
      id: 6,
      title: "Tacos",
      image: food6,
      price: 56,
      rating: 3,
    },
    {
      id: 7,
      title: "Pancakes",
      image: food7,
      price: 65,
      rating: 1,
    },
    {
      id: 8,
      title: "Fried rice",
      image: food8,
      price: 45,
      rating: 3,
    },
    {
      id: 9,
      title: "Steak",
      image: food9,
      price: 78,
      rating: 5,
    },
    {
      id: 10,
      title: "Lobster",
      image: food10,
      price: 23,
      rating: 3,
    },
    {
      id: 11,
      title: "Lobster big",
      image: food11,
      price: 35,
      rating: 3,
    },
    {
      id: 12,
      title: "dog Curry",
      image: food12,
      price: 1500,
      rating: 4,
    },
  ];
  return (
    <>
      <div className="">
        <img
          src={servicebanner}
          alt=""
          className="w-full h-[165px] md:h-[350px] lg:h-[570px] relative"
        />
        <span className="absolute inset-0 h-[165px] md:h-[350px] lg:h-[570px] bg-black opacity-50 top-0 left-0"></span>
        <div className="absolute top-16 md:top-32 lg:top-1/3 left-28 md:left-1/3 lg:left-[38%]">
          <h1 className="font-bold lg:text-5xl text-white text-3xl text-brand2">
            Single Service
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
      {/* Component Start */}
      <h1 className="text-3xl lg:text-5xl font-display font-bold text-brand mt-16 text-center">
        Product Category Page Title
      </h1>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mx-10 mt-6">
        <span className="text-sm font-semibold">1-16 of 148 Products</span>
        <button className="relative text-sm focus:outline-none group mt-4 sm:mt-0">
          <div className="flex items-center justify-between w-40 h-10 px-3 border-2 border-gray-300 rounded hover:bg-gray-300">
            <span className="font-medium">Popular</span>
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="absolute z-10 flex-col items-start hidden w-full pb-1 bg-white shadow-lg rounded group-focus:flex">
            <a
              className="w-full px-4 py-2 text-left hover:bg-gray-200"
              href="#"
            >
              Popular
            </a>
            <a
              className="w-full px-4 py-2 text-left hover:bg-gray-200"
              href="#"
            >
              Featured
            </a>
            <a
              className="w-full px-4 py-2 text-left hover:bg-gray-200"
              href="#"
            >
              Newest
            </a>
            <a
              className="w-full px-4 py-2 text-left hover:bg-gray-200"
              href="#"
            >
              Lowest Price
            </a>
            <a
              className="w-full px-4 py-2 text-left hover:bg-gray-200"
              href="#"
            >
              Highest Price
            </a>
          </div>
        </button>
      </div>

      {/* service card */}
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          {FoodCards.map((foodCard) => (
            <ServiceListCard key={foodCard.id} foodCard={foodCard} />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-10 space-x-1 mb-16">
        <button className="flex items-center justify-center h-8 w-8 rounded text-gray-400">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          className="flex items-center justify-center h-8 px-2 rounded text-sm font-medium text-gray-400"
          disabled
        >
          Prev
        </button>
        <button
          className="flex items-center justify-center h-8 w-8 rounded bg-indigo-200 text-sm font-medium text-indigo-600"
          disabled
        >
          1
        </button>
        <button className="flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600">
          2
        </button>
        <button className="flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600">
          3
        </button>
        <button className="flex items-center justify-center h-8 px-2 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600">
          Next
        </button>
        <button className="flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200 text-gray-600 hover:text-indigo-600">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default ServiceList;
