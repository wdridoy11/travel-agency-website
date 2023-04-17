import React from "react";

const SignupForm = () => {
  return (
    <div className="py-52">
      <div className="container">
        <div className="w-1/2 mx-auto text-center">
          <h1 className="text-3xl font-semibold mb-10 text-black">
            Welcome to out Sign up page
          </h1>
          <form>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full border py-3 px-3 rounded-md mb-3 focus:outline-none focus:border-sky-500 focus:ring-1"
              placeholder="Enter your name"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              className="w-full border py-3 px-3 rounded-md mb-3 focus:outline-none focus:border-sky-500 focus:ring-1"
              placeholder="Enter your email"
              required
            />
            <input
              type="password"
              name="password"
              id="password"
              className="w-full border py-3 px-3 rounded-md mb-3 focus:outline-none focus:border-sky-500 focus:ring-1"
              placeholder="Enter your pasword"
              required
            />
            <input
              type="tel"
              name="tel"
              id="tel"
              className="w-full border py-3 px-3 rounded-md mb-3 focus:outline-none focus:border-sky-500 focus:ring-1"
              placeholder="Enter your phone"
              required
            />
            <input
              type="submit"
              className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              value="Sign up"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
