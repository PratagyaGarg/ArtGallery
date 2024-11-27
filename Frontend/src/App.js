import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Myart from "./components/Myart";
import Upload from "./components/Upload";
import Gallery from "./components/Gallery";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [likedArts, setLikedArts] = useState([]); // State to track liked arts

  // Handle toggle like for arts
  const handleLikeToggle = (art) => {
    setLikedArts((prevLikedArts) => {
      const isLiked = prevLikedArts.some((likedArt) => likedArt.id === art.id);
      if (isLiked) {
        // Remove art if it's already liked
        return prevLikedArts.filter((likedArt) => likedArt.id !== art.id);
      } else {
        // Add art if it's not liked
        return [...prevLikedArts, art];
      }
    });
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/user/signin" Component={Signin} />
        <Route path="/user/signup" Component={Signup} />
        <Route
          path="/myart"
          element={<Myart likedArts={likedArts} />}
        />
        <Route path="/upload" Component={Upload} />
        <Route
          path="/gallery"
          element={
            <Gallery likedArts={likedArts} onLikeToggle={handleLikeToggle} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
