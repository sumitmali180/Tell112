import React from "react";

const PoliceSirenLoader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      {/* Siren Loader Container */}
      <div className="flex gap-4 p-6 bg-black/80 rounded-lg shadow-lg">
        {/* Red Light */}
        <div className="w-12 h-12 bg-red-500 rounded-full animate-pulse-red"></div>

        {/* Blue Light */}
        <div className="w-12 h-12 bg-blue-500 rounded-full animate-pulse-blue"></div>

        {/* White Light */}
        <div className="w-12 h-12 bg-white rounded-full animate-pulse-white"></div>
      </div>
    </div>
  );
};

export default PoliceSirenLoader;