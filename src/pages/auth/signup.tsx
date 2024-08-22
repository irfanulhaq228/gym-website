import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import imgbg from "../../assets/auth-bg.jpg";
import img from "../../assets/auth-img.png";

const Signup = () => {
  const navigate = useNavigate();
  const [signupType, setSignupType] = useState("staff");
  const fn_submit = (e: any) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <div className="bg-purple-900 min-h-[100vh] flex flex-col justify-center items-center">
      <img
        src={imgbg}
        className="h-[100vh] fixed w-full object-cover opacity-[0.3] top-0"
      />
      <div className="w-[90%] lg:w-[900px] flex flex-col-reverse lg:flex-row rounded-[30px] shadow-2xl z-[999] backdrop-blur-sm bg-white/50 m-[30px]">
        <div className="flex-1 p-[20px] mt-[-30px] lg:mt-0">
          <p className="text-center text-[25px] sm:text-[30px] font-[600] capitalize text-gray-800 mt-[15px] mb-[25px]">
            Signup Yourself
          </p>
          <div className="mb-[25px] flex justify-evenly">
            <p
              className={`font-[600] text-[14px] sm:text-[17px] h-[30px] flex justify-center items-center px-[5px] cursor-pointer w-[70px] sm:w-[100px] ${
                signupType === "staff" &&
                "border-b-2 border-[--main] text-[--main]"
              }`}
              onClick={() => setSignupType("staff")}
            >
              Staff
            </p>
            <p
              className={`font-[600] text-[14px] sm:text-[17px] h-[30px] flex justify-center items-center px-[5px] cursor-pointer w-[70px] sm:w-[100px] ${
                signupType === "trainee" &&
                "border-b-2 border-[--main] text-[--main]"
              }`}
              onClick={() => setSignupType("trainee")}
            >
              Trainee
            </p>
            <p
              className={`font-[600] text-[14px] sm:text-[17px] h-[30px] flex justify-center items-center px-[5px] cursor-pointer w-[78px] sm:w-[100px] ${
                signupType === "customer" &&
                "border-b-2 border-[--main] text-[--main]"
              }`}
              onClick={() => setSignupType("customer")}
            >
              Customer
            </p>
          </div>
          <form className="flex flex-col gap-4" onSubmit={fn_submit}>
            <div className="flex flex-col gap-0.5">
              <label className="text-[14px] font-[600] text-gray-800">
                Full Name*
              </label>
              <input className="bg-transparent h-[30px] border-b border-gray-700 text-[13px] font-[600] focus:outline-none text-gray-700 px-[5px]" />
            </div>
            <div className="flex flex-col gap-0.5">
              <label className="text-[14px] font-[600] text-gray-800">
                Email Address*
              </label>
              <input className="bg-transparent h-[30px] border-b border-gray-700 text-[13px] font-[600] focus:outline-none text-gray-700 px-[5px]" />
            </div>
            <div className="flex flex-col gap-0.5">
              <label className="text-[14px] font-[600] text-gray-800">
                Password*
              </label>
              <input
                type="password"
                className="bg-transparent h-[30px] border-b border-gray-700 text-[13px] font-[600] focus:outline-none text-gray-700 px-[5px]"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <label className="text-[14px] font-[600] text-gray-800">
                Confirm Password*
              </label>
              <input
                type="password"
                className="bg-transparent h-[30px] border-b border-gray-700 text-[13px] font-[600] focus:outline-none text-gray-700 px-[5px]"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="h-[40px] min-w-[120px] px-[8px] rounded-[5px] bg-[--main] text-white font-[600] my-[20px]"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="my-[7px]">
            <p className="text-center text-[15px] font-[600]">
              Already Have Account?{" "}
              <Link
                to={"/login"}
                className="text-[--main] cursor-pointer underline"
              >
                Sign-In
              </Link>{" "}
              Yourself
            </p>
          </div>
        </div>
        <div className="flex-1 md:p-[20px] flex justify-center">
          <img src={img} className="w-[100%] sm:h-[450px] object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
