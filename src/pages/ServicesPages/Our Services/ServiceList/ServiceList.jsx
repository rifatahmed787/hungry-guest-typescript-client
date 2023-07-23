import { Link } from "react-router-dom";
import servicebanner from "../../../../assets/homeCardImg/home (1).jpeg";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

const ServiceList = () => {
  const [categories, setCategories] = useState([]);

  const [items, setItems] = useState([]);

  //fetching all the items
  useEffect(() => {
    fetch("serviceList.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  //fetching by category
  useEffect(() => {
    //calling fetchCategories function
    fetchCategories();
  }, []);

  //fetching categories items
  const fetchCategories = async () => {
    try {
      const response = await fetch("serviceCategory.json");
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  //fetching and filtering items by category
  const fetchItemsByCategory = async (categoryId) => {
    try {
      const response = await fetch("serviceList.json");
      const data = await response.json();
      let filteredItems;
      if (categoryId === "all") {
        filteredItems = data;
      } else {
        filteredItems = data.filter((item) => item.category_id === categoryId);
      }

      setItems(filteredItems);
    } catch (error) {
      console.error("Error fetching items by category:", error);
    }
  };

  //handling category items
  const handleCategoryClick = (categoryId) => {
    fetchItemsByCategory(categoryId);
  };

  return (
    <>
      {/* banner part */}
      <div>
        <img
          src={servicebanner}
          alt=""
          className="w-full h-[165px] md:h-[350px] lg:h-[570px] relative"
        />
        <span className="absolute inset-0 h-[165px] md:h-[350px] lg:h-[570px] bg-black opacity-60 top-0 left-0"></span>
        <div className="absolute top-16 md:top-32 lg:top-1/3 left-28 md:left-1/3 lg:left-[38%]">
          <h1 className="font-bold lg:text-5xl text-white text-3xl text-brand2">
            Service List
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

      {/* main section  */}
      <div className="my-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 p-3 mx-10">
          <section>
            {/* categories  */}
            <div>
              <h2 className="text-3xl font-display font-bold  text-brand border-b-4 border-primary pb-3">
                Categories
              </h2>
              {/* item no one */}

              {categories &&
                categories.map((category) => (
                  <button
                    className="flex justify-between items-center w-full mt-5"
                    key={category.id}
                    onClick={() => handleCategoryClick(category.category_id)}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        icon="icon-park-outline:hand-right"
                        width="25"
                        className="text-primary"
                      />
                      <p className="text-brand text-xl font-bold hover:translate-x-1 duration-300">
                        {category.title}
                      </p>
                    </div>
                    <p className="text-brand text-xl font-bold"></p>
                  </button>
                ))}
            </div>

            {/* tags  */}
            <h2 className="text-3xl mt-10 font-display font-bold  text-brand border-b-4 border-primary pb-3">
              Tags
            </h2>
            <div className=" mt-5 w-full">
              <div className="flex justify-between items-center">
                <span className="bg-brand text-primary px-2 py-1 font-semibold rounded-full">
                  Breakfast
                </span>
                <span className="bg-brand text-primary px-2 py-1 font-semibold rounded-full">
                  Dinner
                </span>
                <span className="bg-brand text-primary px-2 py-1 font-semibold rounded-full">
                  Lunch
                </span>
                <span className="bg-brand text-primary px-2 py-1 font-semibold rounded-full">
                  Pizza
                </span>
              </div>
              <div className="flex justify-between items-center mt-5">
                <span className="bg-brand text-primary px-2 py-1 font-semibold rounded-full">
                  Cold drink
                </span>
                <span className="bg-brand text-primary px-2 py-1 font-semibold rounded-full">
                  Coffee
                </span>
                <span className="bg-brand text-primary px-2 py-1 font-semibold rounded-full">
                  Snacks
                </span>
                <span className="bg-brand text-primary px-2 py-1 font-semibold rounded-full">
                  Tea
                </span>
              </div>
            </div>
          </section>

          <section className=" lg:col-span-2">
            <ul>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-8 gap-x-5">
                {/* card one  */}
                {items &&
                  items.map((product) => (
                    <>
                      <div className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg cursor-pointer">
                        <img
                          src={product.image_url}
                          className="absolute z-0 object-cover w-full h-96 transform group-hover:scale-125 duration-500"
                        />
                        <div className="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-60 w-full h-72 md:h-96 z-10"></div>
                        <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
                          <div className="h-1/2 relative">
                            <div className="absolute bottom-0">
                              <h2 className="font-semibold group-hover:text-regular text-brand font-display transition duration-300  pb-6 text-3xl lg:text-5xl group-hover:underline">
                                {product.name}
                              </h2>
                            </div>
                          </div>
                          <div className="h-1/2">
                            <h3 className="text-2xl font-bold text-primary">
                              Price: {product.price}
                            </h3>
                            <p className="text-regular py-4 opacity-0 transition duration-300 group-hover:opacity-100">
                              {product.description}
                            </p>
                            <button className="bg-brand hover:bg-primary text-white text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 uppercase">
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
              </div>

              {/* pagination start here */}
              <div className="flex justify-center space-x-1 my-16">
                <button className="flex items-center justify-center h-8 w-8 rounded text-brand">
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
                  className="flex items-center justify-center h-8 px-2 rounded text-sm font-medium text-brand"
                  disabled
                >
                  Prev
                </button>
                <button
                  className="flex items-center justify-center h-8 w-8 rounded bg-brand text-sm font-medium text-primary"
                  disabled
                >
                  1
                </button>
                <button className="flex items-center justify-center h-8 w-8 rounded hover:bg-brand text-sm font-medium text-primary">
                  2
                </button>
                <button className="flex items-center justify-center h-8 w-8 rounded hover:bg-brand text-sm font-medium text-primary">
                  3
                </button>
                <button className="flex items-center justify-center h-8 px-2 rounded hover:bg-brand text-sm font-medium text-primary ">
                  Next
                </button>
                <button className="flex items-center justify-center h-8 w-8 rounded hover:bg-brand text-primary">
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
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default ServiceList;
