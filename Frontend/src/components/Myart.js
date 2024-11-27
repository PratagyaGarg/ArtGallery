import React from "react";
import { Link } from "react-router-dom";

function Myart({ likedArts }) {
  return (
    <div className="relative w-full h-screen flex flex-col items-center bg-gray-100">
      {/* navbar spacer */}
      <div className="h-20"></div>
      <div className="w-11/12 mt-10">
        <h2 className="text-2xl font-bold mb-4">Liked Arts</h2>
        <div className="grid grid-cols-3 gap-4">
          {likedArts && likedArts.length > 0 ? (
            likedArts.map((art) => (
              <div
                key={art.id}
                className="p-4 bg-white shadow-md rounded-md flex flex-col items-center"
              >
                <img
                  src={art.image}
                  alt={art.name}
                  className="w-full h-96 object-cover rounded-md mb-2"
                />
                <h3 className="font-bold">{art.name}</h3>
                <p className="text-sm text-gray-600">By {art.artist}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No liked arts yet.</p>
          )}
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
