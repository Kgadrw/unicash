import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-blue-100 via-white to-blue-200 pt-16 overflow-hidden">
      <img
        src="layer.png"
        alt="Layer Decoration"
        className="absolute top-0 right-0 w-1/2 md:w-2/6 object-contain animate-fade-in"
      />
      <img
        src="left.png"
        alt="Left Decoration"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/3 md:w-1/2 object-contain z-10 animate-slide-in-left"
      />
      <img
        src="Youtube.png"
        alt="YouTube Logo"
        className="absolute left-1/3 top-2/3 transform -translate-x-1/2 -translate-y-1/2 w-1/4 md:w-1/6 object-contain z-20 animate-bounce"
      />
      <div className="absolute right-16 top-1/2 transform -translate-y-1/3 text-left max-w-lg">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight animate-motion-blur">
          Welcome to IGA Tek:
          <br /> Empowering Communities Through Technology
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mt-8 leading-tight animate-fade-in-up delay-300">
          IGA Tek is a platform that helps local citizens access digital
          literacy resources, including account creation, video tutorials, and
          interactive content. It empowers users to confidently navigate the
          digital world.
        </p>
        <div className="mt-8 animate-fade-in-up delay-500">
          <button className="flex items-center bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white px-10 py-2 rounded-lg animate-pulse">
            Get Started
            <svg
              className="ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
