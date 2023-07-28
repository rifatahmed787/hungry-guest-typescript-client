import { Icon } from "@iconify/react";

const ServiceCard = () => {
  return (
    <div
      className="bg-fixed bg-cover bg-center pb-16"
      style={{
        backgroundImage: "url('https://i.ibb.co/R0pqwyb/slider.jpg')",
      }}
    >
      <div>
        <p className="text-lg mb-3 pt-16 text-primary font-semibold text-center">
          New Menus
        </p>
        <h1 className="text-3xl lg:text-5xl text-regular text-center font-bold font-display-Poppins">
          View Our Menus
        </h1>
      </div>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          <div className="rounded overflow-hidden shadow-lg">
            <a href="#">
              <div className="relative">
                <img
                  className="w-full"
                  src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Sunset in the mountains"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                <a href="#!">
                  <div className="absolute bottom-0 left-0 bg-primary px-4 py-2 text-white text-sm hover:bg-brand  transition duration-500 ease-in-out">
                    Photos
                  </div>
                </a>
                <a href="!#">
                  <div className="text-sm absolute top-0 right-0 bg-primary px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-white transition duration-500 ease-in-out">
                    <span className="font-bold">20</span>
                    <small>March</small>
                  </div>
                </a>
              </div>
            </a>
            <div className="bg-white">
              <div className="px-6 py-3">
                <a
                  href="#"
                  className="font-semibold text-lg inline-block hover:text-white transition duration-500 ease-in-out"
                >
                  Best Pizza in Town
                </a>
                <p className="text-gray-500 text-sm">
                  collection of best pizza images in Newyork city
                </p>
              </div>
              <div className="px-6 py-4 flex flex-row items-center">
                <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center">
                  <Icon icon="streamline:interface-time-reset-time-clock-reset-stopwatch-circle-measure-loading" />
                  <span className="ml-1">3 mins read</span>
                </span>
              </div>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-lg">
            <a href="#">
              <div className="relative">
                <img
                  className="w-full"
                  src="https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Sunset in the mountains"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                <a href="#!">
                  <div className="absolute bottom-0 left-0 bg-primary px-4 py-2 text-white text-sm hover:bg-brand  transition duration-500 ease-in-out">
                    Photos
                  </div>
                </a>
                <a href="!#">
                  <div className="text-sm absolute top-0 right-0 bg-primary px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-brand hover: transition duration-500 ease-in-out">
                    <span className="font-bold">15</span>
                    <small>April</small>
                  </div>
                </a>
              </div>
            </a>
            <div className="bg-white">
              <div className="px-6 py-3">
                <a
                  href="#"
                  className="font-semibold text-lg inline-block  transition duration-500 ease-in-out"
                >
                  Best Salad Images ever
                </a>
                <p className="text-gray-500 text-sm">
                  The collection of best salads of town in pictures
                </p>
              </div>
              <div className="px-6 py-4 flex flex-row items-center">
                <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center">
                  <Icon icon="streamline:interface-time-reset-time-clock-reset-stopwatch-circle-measure-loading" />
                  <span className="ml-1">6 mins read</span>
                </span>
              </div>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-lg">
            <a href="#">
              <div className="relative">
                <img
                  className="w-full"
                  src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Sunset in the mountains"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                <a href="#!">
                  <div className="absolute bottom-0 left-0 bg-primary px-4 py-2 text-white text-sm hover:bg-brand  transition duration-500 ease-in-out">
                    Photos
                  </div>
                </a>
                <a href="!#">
                  <div className="text-sm absolute top-0 right-0 bg-primary px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-brand hover:text-whitetransition duration-500 ease-in-out">
                    <span className="font-bold">20</span>
                    <small>March</small>
                  </div>
                </a>
              </div>
            </a>
            <div className="bg-white">
              <div className="px-6 py-3">
                <a
                  href="#"
                  className="font-semibold text-lg inline-block  transition duration-500 ease-in-out"
                >
                  Best Pizza in Town
                </a>
                <p className="text-gray-500 text-sm">
                  collection of best pizza images in Newyork city
                </p>
              </div>
              <div className="px-6 py-4 flex flex-row items-center">
                <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center">
                  <Icon icon="streamline:interface-time-reset-time-clock-reset-stopwatch-circle-measure-loading" />
                  <span className="ml-1">3 mins read</span>
                </span>
              </div>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-lg">
            <a href="/">
              <div className="relative">
                <img
                  className="w-full"
                  src="https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Sunset in the mountains"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                <a href="#!">
                  <div className="absolute bottom-0 left-0 bg-primary px-4 py-2 text-white text-sm hover:bg-brand  transition duration-500 ease-in-out">
                    Photos
                  </div>
                </a>
                <a href="!#">
                  <div className="text-sm absolute top-0 right-0 bg-primary px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-brand hover: transition duration-500 ease-in-out">
                    <span className="font-bold">15</span>
                    <small>April</small>
                  </div>
                </a>
              </div>
            </a>
            <div className="bg-white">
              <div className="px-6 py-3">
                <a
                  href="#"
                  className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
                >
                  Best Salad Images ever
                </a>
                <p className="text-gray-500 text-sm">
                  The collection of best salads of town in pictures
                </p>
              </div>
              <div className="px-6 py-4 flex flex-row items-center">
                <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center">
                  <Icon icon="streamline:interface-time-reset-time-clock-reset-stopwatch-circle-measure-loading" />
                  <span className="ml-1">6 mins read</span>
                </span>
              </div>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-lg">
            <a href="/">
              <div className="relative">
                <img
                  className="w-full"
                  src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Sunset in the mountains"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                <a href="#!">
                  <div className="absolute bottom-0 left-0 bg-primary px-4 py-2 text-white text-sm hover:bg-brand  transition duration-500 ease-in-out">
                    Photos
                  </div>
                </a>
                <a href="/">
                  <div className="text-sm absolute top-0 right-0 bg-primary px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white  transition duration-500 ease-in-out">
                    <span className="font-bold">20</span>
                    <small>March</small>
                  </div>
                </a>
              </div>
            </a>
            <div className="bg-white">
              <div className="px-6 py-3">
                <a
                  href="#"
                  className="font-semibold text-lg inline-block transition duration-500 ease-in-out"
                >
                  Best Pizza in Town
                </a>
                <p className="text-gray-500 text-sm">
                  collection of best pizza images in Newyork city
                </p>
              </div>
              <div className="px-6 py-4 flex flex-row items-center">
                <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center">
                  <Icon icon="streamline:interface-time-reset-time-clock-reset-stopwatch-circle-measure-loading" />
                  <span className="ml-1">3 mins read</span>
                </span>
              </div>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-lg">
            <a href="/">
              <div className="relative">
                <img
                  className="w-full"
                  src="https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Sunset in the mountains"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                <a href="#!">
                  <div className="absolute bottom-0 left-0 bg-primary px-4 py-2 text-white text-sm hover:bg-brand  transition duration-500 ease-in-out">
                    Photos
                  </div>
                </a>
                <a href="/">
                  <div className="text-sm absolute top-0 right-0 bg-primary px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-brand hover: transition duration-500 ease-in-out">
                    <span className="font-bold">15</span>
                    <small>April</small>
                  </div>
                </a>
              </div>
            </a>
            <div className="bg-white">
              <div className="px-6 py-3">
                <a
                  href="/"
                  className="font-semibold text-lg inline-block transition duration-500 ease-in-out"
                >
                  Best Salad Images ever
                </a>
                <p className="text-gray-500 text-sm">
                  The collection of best salads of town in pictures
                </p>
              </div>
              <div className="px-6 py-4 flex flex-row items-center">
                <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center">
                  <Icon icon="streamline:interface-time-reset-time-clock-reset-stopwatch-circle-measure-loading" />
                  <span className="ml-1">6 mins read</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
