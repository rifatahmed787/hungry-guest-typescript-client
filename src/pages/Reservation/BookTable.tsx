import { useState } from "react";
import image from "../../assets/homeCardImg/card2.jpg";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useContext } from "react";
import servicebanner from "../../assets/homeCardImg/home (5).jpeg";
import { DarkModeContext } from "../../components/DarkModeContext/DarkModeContext";

const BookTable = () => {
  const { darkMode, isBangla, toggoleBangla } = useContext(DarkModeContext);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className={`pb-10 ${darkMode ? "bg-black" : ""}`}>
      {/* banner part */}
      <div className="mb-10">
        <img
          src={servicebanner}
          alt=""
          className="w-full h-[165px] md:h-[350px] lg:h-[570px] relative"
        />
        <span className="absolute inset-0 h-[165px] md:h-[350px] lg:h-[570px] bg-black opacity-70 top-0 left-0"></span>
        <div className="absolute top-16 md:top-32 lg:top-1/3 left-28 md:left-1/3 lg:left-[38%]">
          <h1 className="error font-bold lg:text-5xl text-white text-3xl text-brand2">
            Booking Table
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
            <Link to="/about"> About Us</Link>
          </p>
        </div>
      </div>

      <div
        className={`mx-10 py-16 ${
          darkMode ? "bg-gradient-backdrop text-white " : ""
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-10">
          <div>
            <img className="md:h-[550px] w-11/12" src={image} alt="" />
          </div>

          {/* form */}
          <form onSubmit={handleSubmit}>
            <h1 className="text-3xl lg:text-5xl font-display1 text-brand font-bold mb-4">
              Make a Booking
            </h1>
            <div className="grid grid-cols-2 gap-5">
              <div className="mb-4">
                <label htmlFor="date" className="block mb-2 font-medium">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="time" className="block mb-2 font-medium">
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-primary focus:border-primary"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="numberOfPeople"
                className="block mb-2 font-medium"
              >
                Number of People
              </label>
              <select
                id="numberOfPeople"
                value={numberOfPeople}
                onChange={(e) => setNumberOfPeople(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-primary focus:border-primary"
                required
              >
                <option value="">Select Number of People</option>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block mb-2 font-medium">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-primary focus:border-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-primary focus:border-primary"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2.5 mt-3 px-4 rounded"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
