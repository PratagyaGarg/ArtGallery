import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full fixed z-50  bg-white text-[#ff4500] py-4 flex justify-center items-center gap-10 font-bold uppercase">
      <div className="flex space-x-4 text-s">
        <Link to="/" className="hover:text-[#ff6600] ">
          Home
        </Link>
        <Link to="/gallery" className="hover:text-[#ff6600]">
          Gallery
        </Link>
      </div>
      <div className="text-7xl font-queenRogette text-center font-light mx-10">
        <Link to="/" className="hover:text-[#ff6600]">
        Gallerie'D Art
        </Link>
      </div>
      <div className="flex space-x-4 text-s">
        <Link to="/myart" className="hover:text-[#ff6600]">
          My Art
        </Link>
        <Link to="/user/signin" className="hover:text-[#ff6600]">
          Sign In
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
