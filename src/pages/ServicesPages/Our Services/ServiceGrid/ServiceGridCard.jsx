// eslint-disable-next-line react/prop-types
const ServiceListCard = ({ foodCard }) => {
  // eslint-disable-next-line react/prop-types
  const { image, price, rating } = foodCard;
  return (
    <>
      <div className="rounded overflow-hidden shadow-lg">
        <a href="#" />
        <div className="relative">
          <a href="#">
            <img
              className=" w-[100%] h-60 aspect-auto"
              src={image}
              alt="Sunset in the mountains"
            />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25" />
          </a>
          <a href="#!">
            <div className="absolute bottom-0 left-0 bg-brand px-4 py-2 text-white text-sm">
              {rating}
            </div>
          </a>
          <a href="!#">
            <div className="absolute top-0 right-0 px-4  bg-gradient-to-tr from-green-500 to-green-500 w-16 h-16  rounded-full shadow-2xl shadow-green-400 border-white  border-dashed border-2  flex justify-center items-center mt-3 mr-3 ">
              <div>
                <h1 className="text-white text-2xl">{price}</h1>
              </div>
            </div>
          </a>
        </div>
        <div className="px-6 py-4">
          <a
            href="#"
            className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
          >
            Best View in Newyork City
          </a>
        </div>
        <div className="px-6 py-4 flex flex-row items-center">
          <span
            href="#"
            className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
          >
            <svg
              height="13px"
              width="13px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              style={{ enableBackground: "new 0 0 512 512" }}
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <path
                    d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
			c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
			c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                  />
                </g>
              </g>
            </svg>
            <span className="ml-1">6 mins ago</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default ServiceListCard;
