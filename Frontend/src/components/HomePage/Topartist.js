import React from "react";

const TopArtistSection = ({ artist }) => {
  return (
    <div className="relative bg-[#101010] text-white px-4 py-8">
      {/* Container */}
      <div className="relative flex flex-col md:flex-row items-center max-w-full">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 z-10 bg-opacity-70 p-6 translate-x-20 rounded-md">
          <h2 className="text-4xl border-2 border-solid border-[#ff4500] bg-black text-white rounded-md uppercase font-caviarDreams p-8 font-bold mb-4">
            my name is jhon doe
          </h2>
          <p className="text-xl text-[#ff4500] px-14 font-caviarDreams">
            "Meet Jhon Doe, a visionary creator whose passion for art knows no bounds. With a unique ability to transform emotions into stunning masterpieces.
          </p>
        </div>

        {/* Right Side: Image with Overlay */}
        <div className="md:w-[75%] h-full relative">
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1597274303632-880ef8660375?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Artist"
            className="w-full h-[80vh] object-cover rounded-md shadow-lg"
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default TopArtistSection;
