import React from "react";
import police from "../assets/police.webp";
import yellow from "../assets/yellow.jpg";

const NotFound = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${yellow})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Main Content */}
      <div className="text-center space-y-6 p-8 rounded-lg backdrop-blur-md bg-white/10 shadow-2xl my-28">
        {/* Title */}
        <h1 className="text-6xl font-bold text-amber-400 animate-bounce">
          404
        </h1>

        {/* Subtitle */}
        <h2 className="text-4xl font-semibold text-white">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-300">
          It looks like you've wandered into uncharted territory. Don't worry,
          our officers are here to guide you back!
        </p>

        {/* Fun Police Image */}
        <img
          src={police}
          alt="Police Officer"
          className="w-44 h-auto mx-auto rounded-full shadow-lg animate-pulse"
        />

        {/* Call-to-Action Button */}
        <button
          onClick={() => window.history.back()}
          className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-black transition-all duration-300 bg-gradient-to-r from-yellow-400 to-amber-300 rounded-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400"
        >
          
          <span className="relative z-10">Go Back</span>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
