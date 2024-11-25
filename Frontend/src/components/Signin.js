import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="min-h-screen flex bg-white pt-36 p-4">
      {/* Left Side - Form */}
      <div className=" w-[65%] ">
        <div className="bg-white p-8 w-full h-full  rounded-lg shadow-xl">
          <h2 className="text-6xl font-caviarDreams uppercase  font-bold text-[#ff4500] mb-6 text-center">
            Sign In
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Username Input */}
            <div className="mb-4 mt-16">
              <label
                htmlFor="username"
                className="block text-lg font-medium text-[#ff4500]"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 mt-2 border text-md border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-lg  font-medium text-[#ff4500]"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-1 text-md border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-[#ff4500] text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Sign In
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="mt-4 text-center text-sm">
            Don't have an account?{" "}
            <Link to="/user/signup" className="text-[#ff4500] hover:text-blue-600">
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className=" lg:flex flex-1 items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1516975968947-d863291f7a87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Artwork"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default SignIn;