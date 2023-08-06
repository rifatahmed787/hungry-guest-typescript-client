/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useForm, SubmitHandler } from "react-hook-form";
import { Register } from "../../../types/types";
import { useContext, useState, useEffect } from "react";
import signup from "../../../assets/sectionBanner/signup.jpeg";
import { DarkModeContext } from "../../../components/DarkModeContext/DarkModeContext";
import Spinner from "../../../components/Spinner/Spinner";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast/headless";
import { AxiosResponse } from "axios";

const Signup = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { register, handleSubmit } = useForm<Register>();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | undefined>();
  const navigate = useNavigate();

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log(e.target.files[0]);
      setFile(e.target.files[0]);
    } else {
      setFile(undefined);
    }
  };
  useEffect(() => {
    console.log(file);
  }, [file]);

  const onSubmit: SubmitHandler<Register> = async (data) => {
    try {
      setLoading(true);

      // Upload image to the server
      let imageUrl = "";
      if (file) {
        const formData = new FormData();
        console.log(file);
        formData.append("image", file);
        // Log the contents of the FormData
        console.log(Object.fromEntries(formData.entries()));

        const uploadResponse = await axios.post(
          "http://localhost:5000/api/v1/upload/imageupload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log(uploadResponse.data);

        imageUrl = uploadResponse.data.images[0];
        console.log(imageUrl);
      }

      // Register user with the image URL
      const userData = {
        userName: data.userName,
        email: data.email,
        password: data.password,
        imageUrl,
      };

      const response: AxiosResponse = await axios.post(
        "http://localhost:5000/api/v1/auth/register",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login");
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
            SignUp Now
          </h1>
        </div>
      </div>
      <div
        className={`small-width mx-5  p-7 my-16 shadow-2xl border border-orange-400 rounded-xl  md:mx-auto lg:w-1/3 md:w-2/5 sm:w-11/12 ${
          darkMode ? "bg-gradient-backdrop" : "bg-[#F3F4F6]"
        }`}
      >
        <h2 className="text-2xl font-bold text-orange-500 text-center ">
          Sign up
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="py-5"
          encType="multipart/form-data"
          method="post"
        >
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="file"
              id="floating_image"
              onChange={onSelectFile}
              name="image"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  border-2 border-primary appearance-none rounded-md focus:outline-none focus:ring-0 focus:border-brand peer focus:border-t-1 pl-2"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_image"
              className={`peer-focus:font-medium absolute  text-sm text-gray-500  duration-300 transform -translate-y-[22px] scale-75 top-3  origin-[0] peer-focus:left-0 peer-focus:text-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[22px] ml-2  peer-focus:absolute peer-focus:z-10 px-2  ${
                darkMode
                  ? "bg-gradient-backdrop text-white peer-focus:text-white"
                  : "bg-[#F3F4F6]"
              }`}
            >
              Profile Image
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              id="floating_name"
              className={`block py-2.5 px-0 w-full text-sm  bg-transparent  border-2 border-primary appearance-none rounded-md focus:outline-none focus:ring-0 focus:border-brand peer focus:border-t-1 pl-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
              placeholder=" "
              {...register("userName")}
              required
            />
            <label
              htmlFor="floating_name"
              className={`peer-focus:font-medium absolute  text-sm text-gray-500  duration-300 transform -translate-y-[22px] scale-75 top-3  origin-[0] peer-focus:left-0 peer-focus:text-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[22px] ml-2  peer-focus:absolute peer-focus:z-10 px-2  ${
                darkMode
                  ? "bg-gradient-backdrop text-white peer-focus:text-white"
                  : "bg-[#F3F4F6]"
              }`}
            >
              Name
            </label>
          </div>

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
              className={`peer-focus:font-medium absolute  text-sm text-gray-500  duration-300 transform -translate-y-[22px] scale-75 top-3  origin-[0] peer-focus:left-0 peer-focus:text-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[22px] ml-2  peer-focus:absolute peer-focus:z-10 px-2  ${
                darkMode
                  ? "bg-gradient-backdrop text-white peer-focus:text-white"
                  : "bg-[#F3F4F6]"
              }`}
            >
              Email
            </label>
          </div>
          {/* <div className="border-2 border-primary text-gray-500 flex justify-between px-2 py-2 rounded-lg">
            <label className="pl-2 ">Gender</label>
            <select
              {...register("gender")}
              className="px-5 focus:border-none py-1"
            >
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select>
          </div> */}

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
              className={`peer-focus:font-medium absolute  text-sm text-gray-500  duration-300 transform -translate-y-[22px] scale-75 top-3  origin-[0] peer-focus:left-0 peer-focus:text-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[22px] ml-2  peer-focus:absolute peer-focus:z-10 px-2  ${
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
          Already have an account Please{" "}
          <Link className="text-primary  link hover:text-brand" to="/login">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
