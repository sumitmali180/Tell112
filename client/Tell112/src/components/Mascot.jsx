import React from "react";
import police from "../assets/police.webp";

const Mascot = () => {
  return (
    <div
      className="fixed bottom-4 left-4 z-50 flex items-center justify-center"
      style={{
        transform: "scale(1)", // Adjust size if needed
        transition: "transform 0.3s ease-in-out",
      }}
    >
      {/* Mascot Image */}
      <img
        src={police}
        alt="Police Mascot"
        className="w-28 h-auto rounded-full shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
        onClick={() => alert("Hello there! I'm here to help you navigate.")}
      />

      {/* Tooltip (Optional)
      <div
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ pointerEvents: "none" }}
      >
        Hi! Need help?
      </div> */}
    </div>
  );
};

export default Mascot;