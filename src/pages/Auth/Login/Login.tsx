/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState, useContext } from "react";
import { DarkModeContext } from "../../../components/DarkModeContext/DarkModeContext";
import signup from "../../../assets/sectionBanner/signup.jpeg";
import { useForm, SubmitHandler } from "react-hook-form";
import Spinner from "../../../components/Spinner/Spinner";
import { Link } from "react-router-dom";

import { toast } from "react-hot-toast";

import { ILoginArgs } from "../../../types/auth.types";
import { useUserLoginMutation } from "../../../redux/features/auth/authApi";

const Login = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { register, handleSubmit } = useForm<ILoginArgs>();
  const [loading, setLoading] = useState(false);
  const [loginUser] = useUserLoginMutation();

  const onSubmit: SubmitHandler<ILoginArgs> = async (data) => {
    try {
      setLoading(true);

      // Register user with the image URL
      const userData = {
        email: data.email,
        password: data.password,
      };
      const response = await loginUser(userData).unwrap();
      console.log(response);

      if (response) {
        toast.success(response?.message);
      }
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`pb-10 ${darkMode ? "bg-black" : ""}`}>
      <div className="mb-10 relative after:absolute after:content-normal after:bg-black after:opacity-60 after:h-full after:w-full after:top-0 after:left-0">
        <img src={signup} alt="" className="w-full  " />

        <div className="absolute top-16 md:top-32 lg:top-1/3 left-0 right-0 text-center z-10">
          <h1 className="error font-bold lg:text-5xl text-white text-3xl text-brand2">
            Login Now
          </h1>
        </div>
      </div>
      <div
        className={`small-width mx-5  p-7 my-16 shadow-2xl border border-orange-400 rounded-xl  md:mx-auto lg:w-1/3 md:w-2/5 sm:w-11/12 ${
          darkMode ? "bg-gradient-backdrop" : "bg-[#F3F4F6]"
        }`}
      >
        <h2 className="text-2xl font-bold text-orange-500 text-center ">
          Log in
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="py-5">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              id="floating_email"
              className={`block py-2.5 px-0 w-full text-sm  bg-transparent  border-2 border-primary appearance-none rounded-md focus:outline-none focus:ring-0 focus:border-brand peer focus:border-t-1 pl-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
              placeholder=" "
              {...register("email")}
              required
            />
            <label
              htmlFor="floating_email"
              className={`peer-focus:font-medium absolute  text-sm text-gray-500  duration-300 transform -translate-y-[22px] scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[22px] ml-2  peer-focus:absolute peer-focus:z-10 px-2  ${
                darkMode
                  ? "bg-gradient-backdrop text-white peer-focus:text-white"
                  : "bg-[#F3F4F6]"
              }`}
            >
              Email
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="password"
              id="floating_password"
              className={`block py-2.5 px-0 w-full text-sm  bg-transparent  border-2 border-primary appearance-none rounded-md focus:outline-none focus:ring-0 focus:border-brand peer focus:border-t-1 pl-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
              placeholder=" "
              {...register("password")}
              required
            />
            <label
              htmlFor="floating_password"
              className={`peer-focus:font-medium absolute  text-sm text-gray-500  duration-300 transform -translate-y-[22px] scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[22px] ml-2  peer-focus:absolute peer-focus:z-10 px-2  ${
                darkMode
                  ? "bg-gradient-backdrop text-white peer-focus:text-white"
                  : "bg-[#F3F4F6]"
              }`}
            >
              Password
            </label>
          </div>

          <div>
            {loading ? (
              <button className="btn py-3 rounded-lg bg-primary hover:bg-brand duration-500 w-full mt-5 border-none">
                <Spinner />
              </button>
            ) : (
              <input
                className="btn py-3 text-white rounded-lg cursor-pointer bg-primary hover:bg-brand duration-500 w-full mt-5 border-none"
                value="Sign up"
                type="submit"
              />
            )}
          </div>
        </form>
        <p className={`mt-3 text-center ${darkMode ? "text-white" : ""}`}>
          Don't have an account Please{" "}
          <Link className="text-primary  link hover:text-brand" to="/signup">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
