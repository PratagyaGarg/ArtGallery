import React from "react";
import { Link } from "react-router-dom";

function Myart() {
  return (
    <div className="relative w-full h-screen flex flex-col items-center bg-gray-100">
      {/* Section for User's Own Arts */}
      <div className="w-11/12 mt-5">
        <h2 className="text-2xl font-bold mb-4">Your Arts</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Replace with dynamic art cards */}
          <div className="p-4 bg-white shadow-md">Art 1</div>
          <div className="p-4 bg-white shadow-md">Art 2</div>
        </div>
      </div>

      {/* Section for Liked Arts */}
      <div className="w-11/12 mt-10">
        <h2 className="text-2xl font-bold mb-4">Liked Arts</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Replace with dynamic liked art cards */}
          <div className="p-4 bg-white shadow-md">Liked Art 1</div>
          <div className="p-4 bg-white shadow-md">Liked Art 2</div>
        </div>
      </div>

      {/* Floating Button */}
      <Link
        to="/upload"
        className="absolute bottom-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg"
        style={{ transform: "translateX(-50%)", left: "50%" }}
      >
        +
      </Link>
    </div>
  );
}

export default Myart;
