/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm, SubmitHandler } from "react-hook-form";
import { Register } from "../../../types/types";
import { useContext, useState } from "react";
import signup from "../../../assets/sectionBanner/signup.jpeg";
import { DarkModeContext } from "../../../components/DarkModeContext/DarkModeContext";
import Spinner from "../../../components/Spinner/Spinner";

const Signup = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { register, handleSubmit } = useForm<Register>();
  const onSubmit: SubmitHandler<Register> = (data) => console.log(data);
  const [loading, setLoading] = useState(false);

  return (
    <div className={`pb-10 ${darkMode ? "bg-black" : ""}`}>
      <div className="mb-10 relative after:absolute after:content-normal after:bg-black after:opacity-60 after:h-full after:w-full after:top-0 after:left-0">
        <img src={signup} alt="" className="w-full  " />

        <div className="absolute top-16 md:top-32 lg:top-1/3 left-0 right-0 text-center z-10">
          <h1 className="error font-bold lg:text-5xl text-white text-3xl text-brand2">
            SignUp Now
          </h1>
        </div>
      </div>
      <div className=" small-width bg-[#F3F4F6] dark:bg-black dark:border p-7 mt-16 shadow-2xl border border-orange-400 rounded-xl  mx-auto lg:w-1/3 md:w-2/5 sm:w-11/12">
        <h2 className="text-2xl font-bold text-orange-500 text-center ">
          Sign up
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="py-5">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  border-2 border-primary appearance-none rounded-md focus:outline-none focus:ring-0 focus:border-brand peer focus:border-t-1 pl-2"
              placeholder=" "
              {...register("firstName")}
              required
            />
            <label
              htmlFor="floating_first_name"
              className={`peer-focus:font-medium absolute  text-sm text-gray-500  duration-300 transform -translate-y-[22px] scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[22px] ml-2  peer-focus:absolute peer-focus:z-10 peer-focus:px-2 ${
                darkMode
                  ? "peer-focus:bg-gradient-backdrop"
                  : "peer-focus:bg-white"
              }`}
            >
              First name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  border-2 border-primary appearance-none rounded-md focus:outline-none focus:ring-0 focus:border-brand peer focus:border-t-1 pl-2"
              placeholder=" "
              {...register("lastName")}
              required
            />
            <label
              htmlFor="floating_first_name"
              className={`peer-focus:font-medium absolute  text-sm text-gray-500  duration-300 transform -translate-y-[22px] scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[22px] ml-2  peer-focus:absolute peer-focus:z-10 peer-focus:px-2 ${
                darkMode
                  ? "peer-focus:bg-gradient-backdrop"
                  : "peer-focus:bg-white"
              }`}
            >
              Last name
            </label>
          </div>

          <div className="border-2 border-primary text-gray-500 flex justify-between px-2 py-2 rounded-lg">
            <label className="pl-2 ">Gender</label>
            <select
              {...register("gender")}
              className="px-5 focus:border-none py-1"
            >
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select>
          </div>
          <div>
            {loading ? (
              <button className="btn  bg-primary hover:bg-brand duration-500 w-full mt-5 border-none">
                <Spinner />
              </button>
            ) : (
              <input
                className="btn  bg-primary hover:bg-brand duration-500 w-full mt-5 border-none"
                value="Sign up"
                type="submit"
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
