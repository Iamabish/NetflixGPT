import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>

      <div className="flex justify-center items-center h-screen">
        <form className="w-3/12 p-12 bg-black relative text-white bg-opacity-70 font-semibold">
          <h2 className="text-3xl">{isSignInForm ? "Sign In" : "Sign Up"}</h2>

          {!isSignInForm && (
            <input
              type="email"
              placeholder="Enter your Name"
              className="p-4 my-4 w-full bg-gray-700 rounded-xl bg-opacity-65"
            />
          )}

          <input
            type="email"
            placeholder="Email address"
            className="p-4 my-4 w-full bg-gray-700 rounded-xl bg-opacity-65"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full  rounded-xl bg-gray-600 bg-opacity-65 text-white "
          />
          <button className="p-2 my-6 w-full bg-red-700 ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p onClick={toggleSignInForm} className="cursor-pointer">
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
