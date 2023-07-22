import { useState } from "react";
import searchBg from "../../../assets/homeCardImg/home (5).jpeg";

const Contact = () => {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    //  search logic
    console.log("Searching for:", searchText);
  };
  return (
    <div className="relative">
      <img src={searchBg} alt="" className=" w-full" />
      <span className="inset-0 absolute bg-black opacity-50"></span>
      <div className="absolute left-[20%] lg:left-1/3 top-1/4 lg:top-1/3 z-10">
        <h1 className="error text-3xl lg:text-5xl pb-3 lg:pb-10 text-center text-primary font-semibold">
          Get touch with us and <br /> follow our Newsletter
        </h1>
        <form onSubmit={handleSubmit} className="absolute">
          <input
            type="text"
            placeholder="Type your email..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 pr-12 md:py-5 md:pr-72 lg:py-5 lg:pr-72  focus:outline-none  focus:border-none relative"
          />
          <button
            type="submit"
            className="absolute top-0 right-0 h-full px-4 py-2 lg:px-10 bg-primary text-white font-semibold rounded-r-md"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
