import React from "react";
import { Link } from "react-router-dom";

function Myart({ userArts, likedArts }) {
  return (
    <div className="relative w-full h-screen flex flex-col items-center bg-gray-100">
      {/* Section for User's Own Arts */}
      <div className="w-11/12 mt-5">
        <h2 className="text-2xl font-bold mb-4">Your Arts</h2>
        <div className="grid grid-cols-2 gap-4">
          {userArts && userArts.length > 0 ? (
            userArts.map((art) => (
              <div
                key={art.id}
                className="p-4 bg-white shadow-md rounded-md flex flex-col items-center"
              >
                <img
                  src={art.image}
                  alt={art.name}
                  className="w-full h-32 object-cover rounded-md mb-2"
                />
                <h3 className="font-bold">{art.name}</h3>
                <p className="text-sm text-gray-600">By {art.artist}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">You have not uploaded any art yet.</p>
          )}
        </div>
      </div>

      {/* Section for Liked Arts */}
      <div className="w-11/12 mt-10">
        <h2 className="text-2xl font-bold mb-4">Liked Arts</h2>
        <div className="grid grid-cols-2 gap-4">
          {likedArts && likedArts.length > 0 ? (
            likedArts.map((art) => (
              <div
                key={art.id}
                className="p-4 bg-white shadow-md rounded-md flex flex-col items-center"
              >
                <img
                  src={art.image}
                  alt={art.name}
                  className="w-full h-32 object-cover rounded-md mb-2"
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
